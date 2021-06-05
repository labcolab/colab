import React, { useState, useContext, useRef } from 'react';
import {
  FormControl,
  Input,
  Stack,
  VStack,
  Button,
  Flex,
  Spacer,
  Box,
  Textarea,
  Text,
  IconButton,
} from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';
import { StorageContext } from '../../services/storage/storage';
import { DatabaseContext } from '../../services/database/database';
import ModifiableImageList from './ModifiableImageList';
import RoleList from '../RoleList/RoleList';
import roles, { SelectedRolesInterface } from '../RoleTag/roles';
import { ImageUploadIcon } from '../../assets/icons';

const maxTitleChars = 30;
const maxDescrChars = 300;

const defaultSelectedRoles = Object.values(roles).reduce(
  (acc, { id }) => ({
    ...acc,
    [id]: false,
  }),
  {},
);

export interface CreatePostProps {
  uid: string;
  onClose: () => void;
  onSuccess: () => void;
}

const CreatePost = ({ uid, onClose, onSuccess }: CreatePostProps) => {
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

  const { storeImages } = useContext(StorageContext);
  const { createPost } = useContext(DatabaseContext);

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [titleChars, setTitleChars] = useState<number>(maxTitleChars);
  const [descrChars, setDescrChars] = useState<number>(maxDescrChars);

  const fileInput = useRef<HTMLInputElement>(null);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedRoles = Object.keys(selectedRoles).filter(
      (key) => selectedRoles[key] === true,
    );

    try {
      const urls = await storeImages(selectedFiles);
      await createPost({
        title,
        description,
        roles: savedRoles,
        images: urls,
        ownerId: uid,
        createdAt: new Date().getTime(),
      });
      onSuccess();
    } catch (err) {
      console.log(`error saving doc: ${err}`);
    }
    // setTitle('');
    // setDescription('');
    // setSelectedFiles([]);
    // setSelectedRoles(defaultSelectedRoles);
  };

  const handleFileUpload = async () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileSelected = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedFiles(Array.from(e.target.files ?? []));
  };

  const handleFileRemoved = (fileToRemove: File) => {
    setSelectedFiles((files) => files.filter((file) => file !== fileToRemove));
  };

  const checkTitle = (val: string) => {
    setTitle(val);
    setTitleChars(maxTitleChars - val.length);
  };

  const checkDescription = (val: string) => {
    setDescription(val);
    setDescrChars(maxDescrChars - val.length);
  };

  return (
    <Box>
      <Box py="8px" px="16px" borderWidth={0.5} borderRadius={8} boxShadow="lg">
        <form onSubmit={handleFormSubmit}>
          <Box width="100%" textAlign="right">
            <IconButton
              aria-label="close"
              icon={<CloseIcon />}
              onClick={onClose}
              variant="outline"
              border="none"
              colorScheme="orange"
              size="xs"
            />
          </Box>

          <VStack spacing={5}>
            <FormControl isRequired>
              <Input
                id="title"
                placeholder="Title"
                onChange={(e) => checkTitle(e.currentTarget.value)}
                value={title || ''}
                variant="unstyled"
                fontSize="xl"
                maxLength={maxTitleChars}
              />
              <Text
                fontSize="xs"
                color="gray.500"
                position="absolute"
                right={1}
                bottom={0}
              >
                {titleChars}/{maxTitleChars}
              </Text>
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
                onChange={(e) => checkDescription(e.currentTarget.value)}
                value={description || ''}
                variant="unstyled"
                height="150px"
                fontSize="sm"
                maxLength={maxDescrChars}
              />
              <Text
                fontSize="xs"
                color="gray.500"
                position="absolute"
                right={2}
                bottom={2}
              >
                {descrChars}/{maxDescrChars}
              </Text>
            </FormControl>

            {selectedFiles.length && (
              <ModifiableImageList
                images={selectedFiles}
                width="100%"
                onClick={handleFileRemoved}
              />
            )}

            <Flex width="100%">
              <Stack direction="row">
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
              </Stack>
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
    </Box>
  );
};

export default CreatePost;
