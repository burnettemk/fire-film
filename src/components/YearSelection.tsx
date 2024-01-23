import React from 'react'
import { Button, Menu, MenuButton, MenuDivider, MenuGroup, MenuItem, MenuList } from '@chakra-ui/react';
import { IoChevronDown } from 'react-icons/io5'

const YearSelection = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<IoChevronDown />}>
        Year
      </MenuButton>
      <MenuList>
        <MenuGroup title='2020s'>
          <MenuItem>2024</MenuItem>
          <MenuItem>2023</MenuItem>
          <MenuItem>2022</MenuItem>
          <MenuItem>2021</MenuItem>
          <MenuItem>2020</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup title='2010s'>
          <MenuItem>2019</MenuItem>
          <MenuItem>2018</MenuItem>
          <MenuItem>2017</MenuItem>
          <MenuItem>2016</MenuItem>
          <MenuItem>2015</MenuItem>
          <MenuItem>2014</MenuItem>
          <MenuItem>2013</MenuItem>
          <MenuItem>2012</MenuItem>
          <MenuItem>2011</MenuItem>
          <MenuItem>2010</MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  )
}

export default YearSelection