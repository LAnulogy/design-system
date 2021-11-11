import React from "react";
import styled from "styled-components";
import { Box } from "../Box";
import type { BoxProps } from "../Box/Box";
import { Flex } from "../Flex";
import { Heading1 } from "../Type";

type HeaderProps = BoxProps & {
  breadcrumbs?: React.ReactNode;
  title?: string;
  children?: React.ReactNode;
};

const RightAngleTriangle = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  clip-path: polygon(100% 0, 0 100%, 100% 100%);
`;

const BackgroundTriangles = (props) => {
  return (
    <Box
      position="absolute"
      bottom={0}
      right={0}
      height="100%"
      width="55%"
      {...props}
    >
      <RightAngleTriangle
        height="45%"
        background="linear-gradient(173.35deg, #E0E3E6 5.22%, rgba(205, 219, 237, 0) 104.74%);"
        opacity="0.5"
      />
      <RightAngleTriangle height="20%" bg="darkblue" opacity="0.05" />
    </Box>
  );
};

const Header: React.FC<HeaderProps> = ({
  background = "whiteGrey",
  breadcrumbs,
  title,
  children,
  ...rest
}) => (
  <Box p="x3" position="relative" bg={background} {...rest}>
    <Box zIndex={2} position="relative">
      {breadcrumbs}
      <Flex alignItems="center" mt="x1">
        {title && <Heading1 mb="0">{title}</Heading1>}
        {children && (
          <Box ml="x1" flexGrow={1}>
            {children}
          </Box>
        )}
      </Flex>
    </Box>
    <BackgroundTriangles zIndex={1} />
  </Box>
);

export default Header;
