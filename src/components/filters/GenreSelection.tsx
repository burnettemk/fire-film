import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5';
import useGenres from '../../hooks/useGenres';
import genres from '../../data/genres';

const GenreSelection = () => {
  const {data, error} = useGenres();

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Genre
      </MenuButton>
      <MenuList>
        {data?.map(genre => <MenuItem key={genre?.id}>{genre?.name}</MenuItem>)}
      </MenuList>
    </Menu>
  )
}

export default GenreSelection