import React, { useContext, useState, useEffect } from 'react';
import { Container, Grid, GridItem, Box, ContainerProps, Center } from '@chakra-ui/react';
import logo from '../../assets/logo.svg';
import SearchBar from '../SearchBar/SearchBar';
import UserMenu from '../UserMenu/UserMenu';
import { AuthContext } from '../../services/auth/auth';
import { DatabaseContext, ProfileInfoField} from '../../services/database/database';

export interface NavBarProps extends ContainerProps {
  testUid?: string;
  test?: boolean;
}

const NavBar = ({ test = false, testUid, ...otherProps }: NavBarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [avatar, setAvatar] = useState<string>('');

  const { user } = useContext(AuthContext);
  const uid = (test ? testUid : user?.uid) ?? '';
  const { getProfileInfo } = useContext(DatabaseContext);

  useEffect(() => {
    if (uid) {
      getProfileInfo(uid, [ProfileInfoField.avatar, ProfileInfoField.name])
        .then((userInfo) => {
          setName(userInfo.name as string);
          setAvatar(userInfo.avatar as string);
        });
    }
  }, [uid]);


  const handleSearch = () => {};

  return (
    <Center>
      <Container {...otherProps}>
        <Grid templateColumns="repeat(7, 1fr)" gap={6}>
          <GridItem colSpan={2}>
            <img src={logo} alt="coLab Logo" />
          </GridItem>
          <GridItem colSpan={3}>
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onSearch={handleSearch}
            />
          </GridItem>
          <GridItem colSpan={2}>
            <Box align="right">
              <UserMenu
                name={name}
                avatar={avatar}
              />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Center>
  );
};

export default NavBar;
