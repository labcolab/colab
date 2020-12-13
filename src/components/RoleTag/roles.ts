import type { RoleTagProps } from './RoleTag';
import {
  AndroidIcon,
  DatabaseIcon,
  KeyIcon,
  IOSIcon,
  LayersIcon,
  LayoutIcon,
  UserTerminalIcon,
  WindowCodeIcon,
} from '../../assets/icons';

export interface RolesInterface {
  [key: string]: RoleTagProps;
}

const Roles: RolesInterface = {
  frontend: {
    role: 'Front-end Developer',
    color: 'blue',
    icon: WindowCodeIcon,
    clickable: true,
  },
  backend: {
    role: 'Back-end Developer',
    color: 'green',
    icon: DatabaseIcon,
    clickable: true,
  },
  fullstack: {
    role: 'Full-stack Developer',
    color: 'yellow',
    icon: LayersIcon,
    clickable: true,
  },
  designer: {
    role: 'Designer',
    color: 'pink',
    icon: LayoutIcon,
    clickable: true,
  },
  projectManager: {
    role: 'Project Manager',
    color: 'purple',
    icon: UserTerminalIcon,
    clickable: true,
  },
  infosec: {
    role: 'InfoSec Developer',
    color: 'orange',
    icon: KeyIcon,
    clickable: true,
  },
  ios: {
    role: 'iOS Developer',
    color: 'red',
    icon: IOSIcon,
    clickable: true,
  },
  android: {
    role: 'Android Developer',
    color: 'teal',
    icon: AndroidIcon,
    clickable: true,
  },
};

export default Roles;
