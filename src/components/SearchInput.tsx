import { Box, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useSearchQueryStore } from "../store";
// import { useNavigate } from "react-router-dom";

const SearchInput = ({ style }: { style?: React.CSSProperties }) => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useSearchQueryStore((s) => s.setQuery);
  //   const navigate = useNavigate();

  return (
    <Box flexGrow={1}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          if (ref.current) {
            setSearchText(ref.current.value);
            ref.current.value = "";
            //   navigate("/");
          }
        }}
      >
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input
            ref={ref}
            borderRadius={20}
            placeholder="Search content..."
            variant="filled"
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default SearchInput;
