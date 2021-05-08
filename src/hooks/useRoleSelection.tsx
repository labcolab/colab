import { useCallback, useState } from 'react';
import roles, { SelectedRolesInterface } from '../components/RoleTag/roles';

const defaultSelectedRoles = Object.values(roles).reduce(
  (acc, { id }) => ({
    ...acc,
    [id]: false,
  }),
  {},
);

export interface RoleSelectionProps {
  updateSelectedRoles: (selectedRoles: SelectedRolesInterface) => void;
}

const useRoleSelection = () => {
  const [selectedRoles, setSelectedRoles] = useState<SelectedRolesInterface>(
    defaultSelectedRoles,
  );

  const handleRoleSelected = useCallback((roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: true,
    }));
    console.log(`selected: ${roleId}`);
  }, []);

  const handleRoleRemoved = useCallback((roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: false,
    }));
    console.log(`removed: ${roleId}`);
  }, []);

  // console.log(selectedRoles);

  return { selectedRoles, handleRoleRemoved, handleRoleSelected };
};

export default useRoleSelection;
