import React, { useCallback, useState } from 'react';
import { Box, Container } from '@chakra-ui/react';
import RoleList from '../RoleList/RoleList';
import roles, { SelectedRolesInterface } from '../RoleTag/roles';

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

export const useRoleSelection = () => {
  const [selectedRoles, setSelectedRoles] = useState<SelectedRolesInterface>(
    defaultSelectedRoles,
  );

  const handleRoleSelected = useCallback((roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: true,
    }));
  }, []);

  const handleRoleRemoved = useCallback((roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: false,
    }));
  }, []);

  return { selectedRoles, handleRoleRemoved, handleRoleSelected };
};

// const RoleSelection = ({ updateSelectedRoles }: RoleSelectionProps) => {
//   const [selectedRoles, setSelectedRoles] = useState<SelectedRolesInterface>(
//     defaultSelectedRoles,
//   );
//   const handleRoleSelected = (roleId: string) => {
//     setSelectedRoles((currentSelectedRoles) => ({
//       ...currentSelectedRoles,
//       [roleId]: true,
//     }));
//     updateSelectedRoles(selectedRoles);
//   };
//
//   const handleRoleRemoved = (roleId: string) => {
//     setSelectedRoles((currentSelectedRoles) => ({
//       ...currentSelectedRoles,
//       [roleId]: false,
//     }));
//     updateSelectedRoles(selectedRoles);
//   };
//
//   // const getSelectedRoles = () => {
//   //   const savedRoles = Object.keys(selectedRoles).filter(
//   //     (key) => selectedRoles[key] === true,
//   //   );
//   //   return savedRoles;
//   // };
//
//   return (
//     <Box>
//       <Container maxW="6xl" centerContent py={20}>
//         <RoleList
//           onSelect={handleRoleSelected}
//           onRemove={handleRoleRemoved}
//           roles={roles}
//           selectedRoles={selectedRoles}
//           marginTop="20px"
//           maxW="3xl"
//         />
//       </Container>
//     </Box>
//   );
// };

// export default RoleSelection;
