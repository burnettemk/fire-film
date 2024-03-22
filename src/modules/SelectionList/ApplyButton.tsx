import { Button } from "@chakra-ui/react";

interface Props {
  changesExist: boolean;
  apply: () => void;
}

const ApplyButton = ({ changesExist, apply }: Props) => {
  return (
    <Button
      colorScheme="blue"
      variant="solid"
      isDisabled={!changesExist}
      onClick={apply}
    >
      Apply
    </Button>
  );
};

export default ApplyButton;
