import React from "react";
import styled from "styled-components";
import { space } from "styled-system";
import PropTypes from "prop-types";
import theme from "../theme";
import RequirementText from "./RequirementText";
import HelpText from "./HelpText";
import FormatText from "./FormatText";

const Label = styled.label`
  font-size: ${theme.fontSizes[1]};
  display: inline-block;
  ${space}
`;

const FieldWrapper = styled.span`
  width: 100%;
  display: inline-block;
  ${space}
`;

FieldWrapper.propTypes = {
  ...space.propTypes,
};

FieldWrapper.defaultProps = {
  mb: 5,
};

const Field = ({
  labelText,
  requirementText,
  helpText,
  formatText,
  children,
  m, mt, mr, mb, ml, mx, my,
  ...labelProps
}) => (
  <FieldWrapper
    m={ m } mt={ mt } mr={ mr }
    mb={ mb } ml={ ml } mx={ mx }
    my={ my }
  >
    <Label mb={ 2 } { ...labelProps }>
      {labelText}
      {requirementText && (<RequirementText>{requirementText}</RequirementText>)}
      {helpText && (<HelpText>{helpText}</HelpText>)}
      {formatText && (<FormatText>{formatText}</FormatText>)}
    </Label>
    {children}
  </FieldWrapper>
);

Field.propTypes = {
  labelText: PropTypes.string.isRequired,
  requirementText: PropTypes.string,
  helpText: PropTypes.string,
  formatText: PropTypes.string,
  children: PropTypes.node,
  ...space.PropTypes,
};

Field.defaultProps = {
  children: [],
  requirementText: null,
  helpText: null,
  formatText: null,
};

export default Field;