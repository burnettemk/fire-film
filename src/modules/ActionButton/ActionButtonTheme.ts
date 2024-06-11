import { defineStyleConfig } from "@chakra-ui/react";

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

export default ActionButton;
