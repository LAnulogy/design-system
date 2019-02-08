import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Radio from "./Radio";

const getRadioButtons = props => {
  const radioButtons = React.Children.map(props.children, radio => {
    const {

      value,
      disabled,
      ...radioProps
    } = radio.props;
    return (
      <Radio
        { ...radioProps }
        disabled={ props.disabled || disabled }
        name={ props.name }
        value={ value }
        defaultChecked={ value === props.defaultValue ? true : undefined }
        checked={ props.checkedValue && (value === props.checkedValue) }
        onChange={ props.onChange }
      />
    );
  });
  return (radioButtons);
};

const BaseRadioGroup = ({
  className,
  ...props
}) => (
  <div className={ className }>
    { getRadioButtons(props) }
  </div>
);

BaseRadioGroup.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.shape({
      type: PropTypes.oneOf([Radio]),
    }),
    PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.oneOf([Radio]),
      })
    ),
  ]).isRequired,
  defaultValue: PropTypes.string,
  checkedValue: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

BaseRadioGroup.defaultProps = {
  defaultValue: undefined,
  checkedValue: undefined,
  onChange: undefined,
  className: null,
};

const RadioGroup = styled(BaseRadioGroup)`
`;

export default RadioGroup;