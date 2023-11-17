import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { IoChevronDown } from 'react-icons/io5'

const RatingSelection = () => {
  const a = 5
  
  return (
    <Menu>
      {({ isOpen }) => (
        <>
        <MenuButton isActive={isOpen} as={Button} rightIcon={<IoChevronDown />}>
          {isOpen ? 'Age Rating' : 'Age Rating'}
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem onClick={() => alert('Kagebunshin')}>Create a Copy</MenuItem>
        </MenuList>
    </>
    )}
    </Menu>
  )
}

export default RatingSelection