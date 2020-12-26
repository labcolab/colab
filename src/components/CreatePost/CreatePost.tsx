import React, { useContext, useState } from 'react';
import {
  FormControl,
  Input,
  Stack,
  VStack,
  Button,
  Flex,
  Spacer,
  Center,
  FlexProps,
  InputProps,
  SystemStyleObject,
  Box,
  CloseButton,
  Textarea,
  Text,
  IconButton,
  HStack,
  Image,
} from '@chakra-ui/react';
import { FirebaseContext } from '../../services/firebase/firebase';
import ImageSlider from '../ImageSlider/ImageSlider';
import RoleList from '../RoleList/RoleList';
import roles, { SelectedRolesInterface } from '../RoleTag/roles';
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
  const [files, setFiles] = useState<FileList>();
  const [images, setImages] = useState<string[]>([]);
  const [showForm, setShowForm] = useState<boolean>(true);

  const fileInput = React.createRef<HTMLInputElement>();

  const storeImages = async () => {
    console.log('files: ', files);
    let urls: string[] = [];
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const childRef = storage.child(files[i].name);
        const snapshot = await childRef.put(files[i]);
        const url = await snapshot.ref.getDownloadURL();
        urls = [...urls, url];
        console.log(`i: ${i}, file: ${files[i].name}, url: ${url}`);
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
    setFiles(undefined);
    setImages([]);
    setSelectedRoles(defaultSelectedRoles);
    console.log('DONE!');
  };

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const inFiles = e.target.files;
    setFiles(inFiles || undefined);
    if (inFiles) {
      Array.from(inFiles).map((img) => {
        const url = URL.createObjectURL(img);
        setImages((imgs) => [...imgs, url]);
      });
    }
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
    <Box>
      {showForm && (
        <Box
          py="8px"
          px="16px"
          borderWidth={0.5}
          borderRadius={8}
          boxShadow="lg"
        >
          <form onSubmit={handleFormSubmit}>
            <CloseButton onClick={handleClosed} ml="auto" color="red" />
            <VStack spacing={5}>
              <FormControl isRequired>
                <Input
                  id="title"
                  placeholder="Title"
                  onChange={(e) => setTitle(e.currentTarget.value)}
                  value={title || ''}
                  variant="unstyled"
                  fontSize="xl"
                />
              </FormControl>

              <Stack direction="row">
                <Text fontSize="sm">Collaborators:</Text>
                <RoleList
                  onSelect={handleRoleSelected}
                  onRemove={handleRoleRemoved}
                  roles={roles}
                  selectedRoles={selectedRoles}
                  marginTop="20px"
                />
              </Stack>

              <FormControl isRequired>
                <Textarea
                  id="description"
                  placeholder="Describe your project!"
                  onChange={(e) => setDescription(e.currentTarget.value)}
                  value={description || ''}
                  variant="unstyled"
                  height="150px"
                  fontSize="sm"
                />
              </FormControl>

              <Flex width="100%">
                <HStack spacing="10px">
                  <Input
                    type="file"
                    multiple
                    ref={fileInput}
                    onChange={handleFileSelected}
                    display="none"
                  />
                  <IconButton
                    aria-label="upload"
                    icon={<ImageUploadIcon />}
                    onClick={handleFileUpload}
                    colorScheme="white"
                    margin="auto 0"
                  />
                  {images.length && <ImageSlider images={images} />}
                </HStack>
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
            </VStack>
          </form>
        </Box>
      )}
    </Box>
  );
};

export default CreatePost;
