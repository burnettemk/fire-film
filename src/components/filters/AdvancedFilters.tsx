import { Button, Menu, MenuButton, MenuDivider, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';

const AdvancedFilters = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button}>
        Advanced
      </MenuButton>
      <MenuList minWidth='240px'>
        <MenuOptionGroup defaultValue='asc' title='Order' type='radio'>
          <MenuItemOption value='asc'>Ascending</MenuItemOption>
          <MenuItemOption value='desc'>Descending</MenuItemOption>
        </MenuOptionGroup>
        <MenuDivider />
        <MenuOptionGroup title='Country' type='checkbox'>
          <MenuItemOption value='email'>Email</MenuItemOption>
          <MenuItemOption value='phone'>Phone</MenuItemOption>
          <MenuItemOption value='country'>Country</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default AdvancedFilters