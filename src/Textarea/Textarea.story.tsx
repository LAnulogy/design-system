import React, { useRef } from "react";
import { action } from "@storybook/addon-actions";
import { Textarea, Button } from "../index";

const errorList = ["Error message 1", "Error message 2"];

export default {
  title: "Components/Textarea",
};

export const _Textarea = () => (
  <Textarea labelText="Label" onChange={action("value changed")} onBlur={action("blurred")} />
);

export const TextareaWithAllProps = () => (
  <Textarea
    labelText="Label"
    placeholder="Placeholder"
    helpText="here's some help..."
    requirementText="(Required)"
    required
    onChange={action("value changed")}
    onBlur={action("blurred")}
  />
);

TextareaWithAllProps.story = {
  name: "Textarea with all props",
};

export const SetToDisabled = () => <Textarea labelText="Label" disabled value="Disabled" />;

SetToDisabled.story = {
  name: "Set to disabled",
};

export const WithNoResizing = () => (
  <Textarea labelText="Label" value="I shouldn't be able to be resized" isResizeable={false} />
);

WithNoResizing.story = {
  name: "With resizing turned off",
};

export const WithErrorMessage = () => (
  <Textarea
    labelText="Label"
    errorMessage="Please fill this out"
    onChange={action("value changed")}
    onBlur={action("blurred")}
  />
);

WithErrorMessage.story = {
  name: "with error message",
};

export const WithErrorList = () => (
  <Textarea
    labelText="Label"
    errorMessage="Please fill this out"
    errorList={errorList}
    onChange={action("value changed")}
  />
);

WithErrorList.story = {
  name: "with error list",
};

export const WithCustomNumberOfRows = () => (
  <Textarea labelText="Label" rows={7} onChange={action("value changed")} onBlur={action("blurred")} />
);

WithCustomNumberOfRows.story = {
  name: "With custom number of rows",
};

export const WithCustomId = () => (
  <Textarea id="my-custom-id" labelText="Label" onChange={action("value changed")} onBlur={action("blurred")} />
);

WithCustomId.story = {
  name: "With custom id",
};

export const UsingRefToControlFocus = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <Textarea ref={ref} labelText="Label" rows={7} onChange={action("value changed")} onBlur={action("blurred")} />
      <Button onClick={handleClick}>Focus the Input</Button>
    </>
  );
};

UsingRefToControlFocus.story = {
  name: "using ref to control focus",
};
