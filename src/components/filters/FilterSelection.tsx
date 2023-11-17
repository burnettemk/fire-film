import { Button, Menu, MenuButton, MenuList } from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5';

interface Props {
    filterType: string;
    endpoint: string;
}

const FilterSelection = () => {
  const a = 5;
  
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Selection
      </MenuButton>
      <MenuList>
        Hello World
      </MenuList>
    </Menu>
  )
}

export default FilterSelection