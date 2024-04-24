import { extendTheme, StyleFunctionProps, ThemeConfig } from "@chakra-ui/react";
import MovieGrid from "./components/movie components/MovieGrid";
import { defineStyleConfig } from "@chakra-ui/react";
import DrawerButton from "./modules/ActionButton/DrawerButton";
import { mode } from "@chakra-ui/theme-tools";

export const backgroundStyles = {
  1: "blackAlpha.400",
  2: "black",
  3: "#00BAFF",
  custom:
    "linear-gradient(180deg, rgba(2,0,36,1) 25%, rgba(255,69,0,1) 42%, rgba(2,0,36,1) 62%);",
  base: "rgb(2,0,36)",
};

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

//--------------------------------------------------------
import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontFamily: "mono", // change the font family
    color: "border.100", // change the input text color
    borderColor: "border.100",
    borderWidth: "1.8px",
    // py: "10px",
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });

const theme = extendTheme({
  config,
  components: {
    ActionButton,
    BaseButton,
    // Button: DrawerButton,
    // MovieList: MovieGrid,
    Input: inputTheme,
  },
  colors: {
    border: {
      100: "#ff4500",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: "#020024",
      },
    }),
  },
});

export default theme;
