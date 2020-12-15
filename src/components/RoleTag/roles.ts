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

export interface SelectedRolesInterface {
  [key: string]: boolean;
}

export const RoleTagClass = 'styledRoleTag';

const Roles: RolesInterface = {
  frontend: {
    id: 'frontend',
    role: 'Front-end Developer',
    color: 'blue',
    icon: WindowCodeIcon,
    className: RoleTagClass,
  },
  backend: {
    id: 'backend',
    role: 'Back-end Developer',
    color: 'green',
    icon: DatabaseIcon,
    className: RoleTagClass,
  },
  fullstack: {
    id: 'fullstack',
    role: 'Full-stack Developer',
    color: 'yellow',
    icon: LayersIcon,
    className: RoleTagClass,
  },
  designer: {
    id: 'designer',
    role: 'Designer',
    color: 'pink',
    icon: LayoutIcon,
    className: RoleTagClass,
  },
  projectManager: {
    id: 'projectmanager',
    role: 'Project Manager',
    color: 'purple',
    icon: UserTerminalIcon,
    className: RoleTagClass,
  },
  infosec: {
    id: 'infosec',
    role: 'InfoSec Developer',
    color: 'orange',
    icon: KeyIcon,
    className: RoleTagClass,
  },
  ios: {
    id: 'ios',
    role: 'iOS Developer',
    color: 'red',
    icon: IOSIcon,
    className: RoleTagClass,
  },
  android: {
    id: 'android',
    role: 'Android Developer',
    color: 'teal',
    icon: AndroidIcon,
    className: RoleTagClass,
  },
};

export default Roles;
