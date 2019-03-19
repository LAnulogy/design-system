import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  Box,
  Flex,
  NavBarSearch,
} from "ComponentsRoot";
import Branding from "./Branding";
import DesktopMenu from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";
import theme from "../theme";

const MediumNavBar = ({
  menuData,
  desktopSrc,
  alt,
  ...props
}) => (
  <Box width="100%" { ...props }>
    <Branding desktopSrc={ desktopSrc } alt={ alt } />
    <nav>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <DesktopMenu menuData={ menuData.primaryMenu } />
        </Flex>
        <Flex>
          <Flex maxWidth="18em" alignItems="center" px="x3">
            <NavBarSearch />
          </Flex>
          <DesktopMenu menuData={ menuData.secondaryMenu } />
        </Flex>
      </Flex>
    </nav>
  </Box>
);

const SmallNavBar = ({
  mobileSrc,
  alt,
  ...props
}) => (
  <Box width="100%" { ...props }>
    <Branding mobileSrc={ mobileSrc } alt={ alt } />
    <nav>
      <Flex justifyContent="flex-end">
        <Flex>
          <Flex maxWidth="18em" alignItems="center" px="0">
            <NavBarSearch />
          </Flex>
          <MobileMenu display="block" />
        </Flex>
      </Flex>
    </nav>
  </Box>
);

const BaseNavBar = ({
  menuData,
  desktopSrc,
  mobileSrc,
  alt,
  ...props
}) => (
  <header { ...props }>
    <MediumNavBar menuData={ menuData } display={ { small: "none", medium: "none", large: "flex" } } />
    <SmallNavBar menuData={ menuData } display={ { small: "flex", medium: "flex", large: "none" } } />
  </header>
);

BaseNavBar.propTypes = {
  menuData: PropTypes.shape({
    "primary": PropTypes.shape({}),
    "secondary": PropTypes.shape({}),
  }),
  desktopSrc: PropTypes.string,
  mobileSrc: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

BaseNavBar.defaultProps = {
  menuData: null,
  desktopSrc: undefined,
  mobileSrc: undefined,
  alt: undefined,
  className: null,
};

const NavBar = styled(BaseNavBar)({
  background: theme.colors.blackBlue,
  paddingTop: theme.space.x2,
  paddingRight: theme.space.x3,
  paddingBottom: theme.space.x2,
  paddingLeft: theme.space.x4,
  display: "flex",
  alignItems: "center",
  "nav": {
    flexGrow: "1",
    margin: `0 0 0 ${theme.space.x3}`,
  },
});

export default NavBar;
