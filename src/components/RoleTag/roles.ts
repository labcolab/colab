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
    id: 'frontend',
    role: 'Front-end Developer',
    color: 'blue',
    icon: WindowCodeIcon,
  },
  backend: {
    id: 'backend',
    role: 'Back-end Developer',
    color: 'green',
    icon: DatabaseIcon,
  },
  fullstack: {
    id: 'fullstack',
    role: 'Full-stack Developer',
    color: 'yellow',
    icon: LayersIcon,
  },
  designer: {
    id: 'designer',
    role: 'Designer',
    color: 'pink',
    icon: LayoutIcon,
  },
  projectManager: {
    id: 'projectmanager',
    role: 'Project Manager',
    color: 'purple',
    icon: UserTerminalIcon,
  },
  infosec: {
    id: 'infosec',
    role: 'InfoSec Developer',
    color: 'orange',
    icon: KeyIcon,
  },
  ios: {
    id: 'ios',
    role: 'iOS Developer',
    color: 'red',
    icon: IOSIcon,
  },
  android: {
    id: 'android',
    role: 'Android Developer',
    color: 'teal',
    icon: AndroidIcon,
  },
};

export default Roles;
