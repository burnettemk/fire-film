import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import MovieGrid from "./components/movie components/MovieGrid";
import { defineStyleConfig } from "@chakra-ui/react";
import DrawerButton from "./modules/ActionButton/DrawerButton";

const value = "50px";

const config: ThemeConfig = {
  initialColorMode: "dark",
};

const BaseButton = defineStyleConfig({
  baseStyle: {
    borderRadius: "100%",
    position: "fixed",
  },
  sizes: {
    sm: {
      px: 3, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      px: 4, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "gray.700",
      color: "gray.700",
    },
    solid: {
      bg: "gray.700",
      color: "white",
    },
  },
  defaultProps: {
    size: "md",
    variant: "solid",
  },
});

const ActionButton = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    borderRadius: "100%",
    position: "fixed",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      px: 3, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      px: 4, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
      borderColor: "gray.700",
      color: "gray.700",
    },
    solid: {
      bg: "gray.700",
      color: "white",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "outline",
  },
});

const theme = extendTheme({
  components: {
    ActionButton,
    BaseButton,
    // Button: DrawerButton,
    // MovieList: MovieGrid,
  },
  config,
});

export default theme;
