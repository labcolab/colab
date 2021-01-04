import React from 'react';
import {
  Flex,
  Spacer,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
} from '@chakra-ui/react';
import { MessagesIcon, NotificationIcon } from '../../assets/icons';

export interface UserMenuProps {
  avatar: string;
  name: string;
}

const UserMenu = ({ avatar, name }: UserMenuProps) => (
  <Flex maxWidth="200px">
    <Center>
      <MessagesIcon
        boxSize={7}
        color="main"
        role="button"
        tabIndex={0}
        outine="none"
      />
    </Center>
    <Spacer />
    <Center>
      <NotificationIcon
        boxSize={7}
        color="main"
        role="button"
        tabIndex={0}
        outline="none"
      />
    </Center>
    <Spacer />
    <Menu placement="bottom-end">
      <MenuButton
        as={Avatar}
        name={name}
        src={avatar}
        role="button"
        tabIndex={0}
      />
      <MenuList>
        <MenuItem>My Profile</MenuItem>
        <MenuItem>My Projects</MenuItem>
        <MenuItem>Settings</MenuItem>
      </MenuList>
    </Menu>
  </Flex>
);

export default UserMenu;
