import type { RoleTagProps } from './RoleTag';
import android from '../../assets/icons/android.svg';
import database from '../../assets/icons/database.svg';
import key from '../../assets/icons/key.svg';
import ios from '../../assets/icons/ios.svg';
import layers from '../../assets/icons/layers.svg';
import layout2 from '../../assets/icons/layout2.svg';
import userterminal from '../../assets/icons/userterminal.svg';
import windowcode from '../../assets/icons/windowcode.svg';

export interface RolesInterface {
  [key: string]: RoleTagProps;
}

const Roles: RolesInterface = {
  frontend: {
    role: 'Front-end Developer',
    color: 'blue',
    icon: windowcode,
  },
  backend: {
    role: 'Back-end Developer',
    color: 'green',
    icon: database,
  },
  fullstack: {
    role: 'Full-stack Developer',
    color: 'yellow',
    icon: layers,
  },
  designer: {
    role: 'Designer',
    color: 'pink',
    icon: layout2,
  },
  projectManager: {
    role: 'Project Manager',
    color: 'purple',
    icon: userterminal,
  },
  infosec: {
    role: 'InfoSec Developer',
    color: 'orange',
    icon: key,
  },
  ios: {
    role: 'iOS Developer',
    color: 'red',
    icon: ios,
  },
  android: {
    role: 'Android Developer',
    color: 'teal',
    icon: android,
  },
};

export default Roles;
