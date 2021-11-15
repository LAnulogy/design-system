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

export const UnstyledBackground = () => (
  <Header
    unstyledBackground
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

export const CustomBackground = () => (
  <Header
    breadcrumbs={
      <Breadcrumbs>
        <Link href="/">Home</Link>
        <Link href="/">Materials</Link>
      </Breadcrumbs>
    }
    title="Materials Overview"
    background="#98FB98"
    unstyledBackground
  >
    <StatusIndicator type="informative">Beta</StatusIndicator>
  </Header>
);

export default {
  title: "Components/Header",
  parameters: {
    layout: "fullscreen",
  },
};
