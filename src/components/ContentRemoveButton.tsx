import { Box, Icon } from "@chakra-ui/react";
import { MdCancel } from "react-icons/md";

interface Props {
  onClick: () => void;
}

const ContentRemoveButton = ({ onClick }: Props) => {
  return (
    <Box
      my={-3}
      color="red"
      zIndex={1000}
      position="absolute"
      top="0"
      left="0"
      cursor="pointer"
      background="black"
      borderRadius="full"
      onClick={onClick}
      pb={0}
    >
      <Icon as={MdCancel} boxSize="24px" />
    </Box>
  );
};

export default ContentRemoveButton;
