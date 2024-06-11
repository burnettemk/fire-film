import { inputAnatomy } from "@chakra-ui/anatomy";
import {
  createMultiStyleConfigHelpers,
  extendTheme,
  StyleFunctionProps,
  ThemeConfig,
} from "@chakra-ui/react";
import ActionButton from "./modules/ActionButton/ActionButtonTheme";
import BaseButton from "./modules/ActionButton/BaseButtonTheme";

export const backgroundStyles = {
  1: "#381d2a",
  2: "black",
  3: "#00BAFF",
  custom:
    "linear-gradient(180deg, rgba(2,0,36,1) 25%, rgba(255,69,0,1) 42%, rgba(2,0,36,1) 62%);",
  base: "rgb(2,0,36)",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
};

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
