import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5';

const ListSelection = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Now Playing
      </MenuButton>
      <MenuList>
        <MenuItem>Now Playing</MenuItem>
        <MenuItem>Popular</MenuItem>
        <MenuItem>Top Rated</MenuItem>
        <MenuItem>Upcoming</MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ListSelection