import React, { useContext, useState } from 'react';
import { Box, Container, Heading, IconButton, Text, VStack } from '@chakra-ui/react';
import RoleList from '../../components/RoleList/RoleList';
// import RoleSelection from '../../components/RoleSelection/RoleSelection';
import roles from '../../components/RoleTag/roles';
import useRoleSelection from '../../hooks/useRoleSelection';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { FirebaseContext } from '../../services/firebase/firebase';
import type * as FirebaseTypes from '../../services/firebase/types';

// const defaultSelectedRoles = Object.values(roles).reduce(
//   (acc, { id }) => ({
//     ...acc,
//     [id]: false,
//   }),
//   {},
// );

const ChooseRoles = () => {
  const firebase = useContext(FirebaseContext);
  const { selectedRoles, handleRoleRemoved, handleRoleSelected } = useRoleSelection();
  // const [selectedRoles, setSelectedRoles] = useState<SelectedRolesInterface>(
  //   defaultSelectedRoles,
  // );
  // const handleRoleSelected = (roleId: string) => {
  //   setSelectedRoles((currentSelectedRoles) => ({
  //     ...currentSelectedRoles,
  //     [roleId]: true,
  //   }));
  // };
  //
  // const handleRoleRemoved = (roleId: string) => {
  //   setSelectedRoles((currentSelectedRoles) => ({
  //     ...currentSelectedRoles,
  //     [roleId]: false,
  //   }));
  // };

  // const updateSelectedRoles = (updatedRoles: SelectedRolesInterface) => {
  //   setSelectedRoles(updatedRoles);
  //   console.log(`updated roles:`);
  //   console.log(updatedRoles)
  // }

  const handleSubmit = async () => {
    const savedRoles = Object.keys(selectedRoles).filter(
      (key) => selectedRoles[key] === true,
    );
    console.log(`chosen roles: ${savedRoles}`);
    try {
      // TODO: change to add roles to an existing user
      const user: FirebaseTypes.UserType = {
        email: 'xyz',
        roles: savedRoles,
      };
      const doc = await firebase.createUser(user);
      console.log(doc);
    } catch (err) {
      console.log(`error saving doc: ${err}`);
    }
  };

  return (
    <Box>
      <Container maxW="6xl" centerContent py={20}>
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading color="orangeText">What type of digital collaborator are you?</Heading>
            <Text fontSize="md" color="gray.500">
              This can be viewed publicly in your profile. Choose a maximum of 3.
            </Text>
          </VStack>
          <RoleList
            onSelect={handleRoleSelected}
            onRemove={handleRoleRemoved}
            roles={roles}
            selectedRoles={selectedRoles}
            marginTop="20px"
            maxW="3xl"
            textAlign="center"
            roleSize="md"
          />
          <IconButton
            aria-label="continue"
            icon={<ArrowForwardIcon />}
            onClick={handleSubmit}
            variant="outline"
            color="orangeText"
            isRound
            size="sm"
          />
        </VStack>
      </Container>
    </Box>
  );
};

export default ChooseRoles;
