import React from "react";
import { Breadcrumbs, Link, StatusIndicator } from "..";
import Header from "./Header";

export const DefaultBackground = () => (
  <Header
    breadcrumbs={
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/">Materials</Link>
      </Breadcrumbs>
    }
    title="Materials Overview"
  >
    <StatusIndicator type="informative">Beta</StatusIndicator>
  </Header>
);

export const NoBackground = () => (
  <Header
    breadcrumbs={
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/">Materials</Link>
      </Breadcrumbs>
    }
    title="Materials Overview"
    background="none"
  />
);

export default {
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
  },
};
