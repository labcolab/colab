import React, { useContext, useState } from 'react';
import {
  FormControl,
  Input,
  Stack,
  VStack,
  HStack,
  Button,
  Flex,
  Spacer,
  Center,
  FlexProps,
  InputProps,
  SystemStyleObject,
} from '@chakra-ui/react';
import { FirebaseContext } from '../../services/firebase/firebase';
import RoleList from '../RoleList/RoleList';
import roles, { SelectedRolesInterface } from '../RoleTag/roles';
import {
  StyledDescriptionInput,
  StyledBox,
  StyledText,
  StyledCloseButton,
  StyledImageButton,
  StyledPostButton,
  StyledTitleInput,
} from './CreatePost.styles';
import { ImageUploadIcon } from '../../assets/icons';

const defaultSelectedRoles = Object.values(roles).reduce(
  (acc, { id }) => ({
    ...acc,
    [id]: false,
  }),
  {},
);

const CreatePost = () => {
  const [selectedRoles, setSelectedRoles] = useState<SelectedRolesInterface>(
    defaultSelectedRoles,
  );

  const handleRoleSelected = (roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: true,
    }));
  };

  const handleRoleRemoved = (roleId: string) => {
    setSelectedRoles((currentSelectedRoles) => ({
      ...currentSelectedRoles,
      [roleId]: false,
    }));
  };

  const { firestore, storage } = useContext(FirebaseContext);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [images, setImages] = useState<FileList>();
  const [showForm, setShowForm] = useState<boolean>(true);

  const fileInput = React.createRef<HTMLInputElement>();

  const storeImages = async () => {
    console.log('images: ', images);
    let urls: string[] = [];
    if (images) {
      for (let i = 0; i < images.length; i++) {
        const childRef = storage.child(images[i].name);
        const snapshot = await childRef.put(images[i]);
        const url = await snapshot.ref.getDownloadURL();
        urls = [...urls, url];
        console.log(`i: ${i}, image: ${images[i].name}, url: ${url}`);
      }
      console.log('done!');
    }
    return urls;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedRoles = Object.keys(selectedRoles).filter(
      (key) => selectedRoles[key] === true,
    );

    try {
      const urls = await storeImages();

      const doc = await firestore.collection('projects').add({
        title,
        description,
        roles: savedRoles,
        images: urls,
      });
      console.log(`saved doc with id: ${doc.id}`);
    } catch (err) {
      console.log(`error saving doc: ${err}`);
    }
    setTitle('');
    setDescription('');
    setImages(undefined);
    setSelectedRoles(defaultSelectedRoles);
    console.log('DONE!');
  };

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    setImages(files || undefined);
  };

  const handleFileUpload = async () => {
    if (fileInput.current) {
      console.log(fileInput.current);
      fileInput.current.click();
    }
  };

  const handleClosed = () => {
    setShowForm(false);
  };

  return (
    <div>
      {showForm && (
        <StyledBox
          paddingBottom="3px"
          paddingLeft="20px"
          maxWidth="80%"
          borderWidth={0.5}
          borderRadius={8}
          boxShadow="lg"
        >
          <StyledCloseButton onClick={handleClosed} />
          <form onSubmit={handleFormSubmit}>
            <VStack spacing={5}>
              <FormControl isRequired>
                <StyledTitleInput
                  id="title"
                  size="md"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  value={title || ''}
                  variant="unstyled"
                />
              </FormControl>

              <Stack direction="row">
                <StyledText>Collaborators:</StyledText>
                <RoleList
                  onSelect={handleRoleSelected}
                  onRemove={handleRoleRemoved}
                  roles={roles}
                  selectedRoles={selectedRoles}
                  marginTop="20px"
                />
              </Stack>

              <FormControl isRequired>
                <StyledDescriptionInput
                  id="description"
                  size="sm"
                  placeholder="Describe your project!"
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  value={description || ''}
                  variant="unstyled"
                />
              </FormControl>

              {/* <Input
                type="file"
                multiple
                ref={fileInput}
                onChange={handleFileSelected}
                style={{ display: 'none' }}
              />
              <StyledImageButton
                aria-label="upload"
                icon={<ImageUploadIcon />}
                onClick={handleFileUpload}
                // colorScheme="white"
              /> */}
              {/* <StyledButton colorScheme="blue">Button</StyledButton> */}

              <Flex width="100%">
                {/* <Input
                  type="file"
                  multiple
                  ref={fileInput}
                  onChange={handleFileSelected}
                  style={{ display: 'none' }}
                /> */}
                <StyledImageButton
                  aria-label="upload"
                  icon={<ImageUploadIcon />}
                  onClick={handleFileUpload}
                  colorScheme="white"
                  margin="auto 0"
                />
                <Spacer />
                <Button
                  mt={4}
                  type="submit"
                  variant="outline"
                  colorScheme="orange"
                  margin="auto 0"
                >
                  Post
                </Button>
              </Flex>
              {/* <HStack spacing={4}>
                <Input
                  type="file"
                  multiple
                  ref={fileInput}
                  onChange={handleFileSelected}
                  style={{ display: 'none' }}
                />
                <StyledImageButton
                  aria-label="upload"
                  icon={<ImageUploadIcon />}
                  onClick={handleFileUpload}
                  colorScheme="white"
                />
                <StyledPostButton
                  mt={4}
                  type="submit"
                  variant="outline"
                  colorScheme="orange"
                >
                  Post
                </StyledPostButton>
              </HStack> */}
            </VStack>
          </form>
        </StyledBox>
      )}
    </div>
  );
};

export default CreatePost;
