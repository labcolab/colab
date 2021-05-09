import React, { useContext } from 'react';
import {
  Box,
  Container,
  Heading,
  IconButton,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import RoleList from '../../components/RoleList/RoleList';
import roles from '../../components/RoleTag/roles';
import useRoleSelection from '../../hooks/useRoleSelection';
import { DatabaseContext } from '../../services/database/database';
import { AuthContext } from '../../services/auth/auth';
import { useHistory } from 'react-router';

const ChooseRoles = () => {
  const { user } = useContext(AuthContext);
  const { setUserRoles } = useContext(DatabaseContext);
  const {
    selectedRoles,
    handleRoleRemoved,
    handleRoleSelected,
  } = useRoleSelection();
  // const [rolesError, setRolesError] = useState<string>('');

  const history = useHistory();

  const handleSubmit = async () => {
    const savedRoles = Object.keys(selectedRoles).filter(
      (key) => selectedRoles[key] === true,
    );
    console.log(`chosen roles: ${savedRoles}`);
    try {
      await setUserRoles(user!.uid, savedRoles);
      history.push('/categories');
    } catch (err) {
      console.log(`error saving doc: ${err}`);
    }
  };
  return (
    <Box>
      <Container maxW="6xl" centerContent py={20}>
        <VStack spacing={12}>
          <VStack spacing={4}>
            <Heading color="orangeText">
              What type of digital collaborator are you?
            </Heading>
            <Text fontSize="md" color="gray.500">
              This can be viewed publicly in your profile. Choose a maximum of
              3.
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
