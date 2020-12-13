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
  },
  backend: {
    role: 'Back-end Developer',
    color: 'green',
    icon: DatabaseIcon,
  },
  fullstack: {
    role: 'Full-stack Developer',
    color: 'yellow',
    icon: LayersIcon,
  },
  designer: {
    role: 'Designer',
    color: 'pink',
    icon: LayoutIcon,
  },
  projectManager: {
    role: 'Project Manager',
    color: 'purple',
    icon: UserTerminalIcon,
  },
  infosec: {
    role: 'InfoSec Developer',
    color: 'orange',
    icon: KeyIcon,
  },
  ios: {
    role: 'iOS Developer',
    color: 'red',
    icon: IOSIcon,
  },
  android: {
    role: 'Android Developer',
    color: 'teal',
    icon: AndroidIcon,
  },
};

export default Roles;
