// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled, { CSSObject } from "styled-components";
import { Box } from "../Box";
import Alert, { AlertProps } from "../Alert/Alert";
import { DefaultNDSThemeType } from "../theme.type";

type ToastProps = AlertProps & {
  triggered?: boolean;
  onShow?: (...args: any[]) => any;
  onHide?: (...args: any[]) => any;
  showDuration?: number;
  onHidden?: (...args: any[]) => any;
};

const SHOW_DURATION = 2000; // in ms
const ANIMATE_OUT_DURATION = 1000;
const TOAST_Y_MAX = "0px";
const TOAST_Y_MIN = "-32px";
const ACTIVE_Z_INDEX = 2;
const INACTIVE_Z_INDEX = ACTIVE_Z_INDEX - 1;
const SLIDE_IN_STYLES = {
  transform: `translateY(${TOAST_Y_MIN})`,
  transition: "transform 0.15s ease-out",
  zIndex: ACTIVE_Z_INDEX,
};
const SLIDE_OUT_STYLES = {
  transform: `translateY(${TOAST_Y_MAX})`,
  transition: "transform 0.9s ease-in",
  zIndex: INACTIVE_Z_INDEX,
  pointerEvents: "none",
};
const FADE_IN_STYLES = {
  opacity: 1,
  transition: "opacity 0.25s linear",
};
const FADE_OUT_STYLES = {
  transition: "opacity 1s linear",
};
type AnimatedAlertProps = {
  visible?: boolean;
  theme?: DefaultNDSThemeType;
};
const AnimatedAlert = styled(Alert)(
  ({ visible, theme }: AnimatedAlertProps): CSSObject => ({
    boxShadow: theme.shadows.medium,
    minWidth: "200px",
    maxWidth: "600px",
    opacity: 0,
    ...(visible ? FADE_IN_STYLES : FADE_OUT_STYLES),
  })
);

type AnimatedBoxBottomProps = React.ComponentPropsWithRef<"div"> & {
  visible?: boolean;
};

export const Toast = ({
  triggered,
  onHide,
  onShow,
  isCloseable,
  children,
  showDuration,
  onHidden,
  zIndex,
  ...props
}: ToastProps) => {
  const [visible, setVisible] = useState(triggered);
  const [timeoutID, setTimeoutID] = useState<number | undefined>(undefined);
  const cancelHidingToast = () => {
    clearTimeout(timeoutID);
  };
  const hideToast = (delay = SHOW_DURATION) => {
    cancelHidingToast();
    setTimeoutID(
      setTimeout(() => {
        setVisible(false);
        if (onHide) onHide();
        setTimeoutID(
          setTimeout(() => {
            if (onHidden) onHidden();
          }, ANIMATE_OUT_DURATION)
        );
      }, delay)
    );
  };
  const triggerToast = () => {
    setVisible(true);
    if (onShow) onShow();
    if (!isCloseable) {
      hideToast(showDuration);
    }
  };
  useEffect(() => {
    if (triggered) {
      triggerToast();
    } else {
      setVisible(false);
      if (onHide) onHide();
    }
  }, [triggered]);
  const onMouseIn = () => {
    if (!isCloseable) {
      cancelHidingToast();
    }
  };
  const onMouseOut = () => {
    if (!isCloseable) {
      hideToast(SHOW_DURATION / 2);
    }
  };
  const handleCloseButtonClick = () => {
    hideToast(0);
  };
  return (
    <Box
      visible={visible}
      onMouseEnter={onMouseIn}
      onFocus={onMouseIn}
      onMouseLeave={onMouseOut}
      onBlur={onMouseOut}
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      marginLeft="auto"
      marginRight="auto"
      width="fit-content"
      transform={`translateY(${TOAST_Y_MIN})`}
      {...(visible ? SLIDE_IN_STYLES : SLIDE_OUT_STYLES)}
      zIndex={zIndex}
    >
      <AnimatedAlert visible={visible} isCloseable={isCloseable} onClose={handleCloseButtonClick} controlled {...props}>
        {children}
      </AnimatedAlert>
    </Box>
  );
};
Toast.defaultProps = {
  triggered: false,
  onShow: () => {},
  onHide: () => {},
  children: undefined,
  isCloseable: false,
  showDuration: SHOW_DURATION,
  onHidden: () => {},
};
export default Toast;
