import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
// import useGameQueryStore from "../store";
// import { useNavigate } from "react-router-dom";

const SearchInput = ({ style }: { style?: React.CSSProperties }) => {
  const ref = useRef<HTMLInputElement>(null);
  //   const setSearchText = useGameQueryStore((s) => s.setSearchText);
  //   const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          ref.current.value = "";
          //   setSearchText(ref.current.value);
          //   navigate("/");
        }
      }}
    >
      <InputGroup style={{ flexGrow: 1 }}>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search content..."
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
