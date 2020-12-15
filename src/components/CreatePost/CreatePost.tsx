import React, { useContext, useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { Form, Formik, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FirestoreContext } from '../../services/firestore/firestore';
import RoleList from '../RoleList/RoleList';
import roles, { SelectedRolesInterface } from '../RoleTag/roles';
import { StyledDescriptionInput } from './CreatePost.styles';

interface FormValues {
  title: string;
  description: string;
}

const defaultSelectedRoles = Object.values(roles).reduce(
  (acc, { id }) => ({
    ...acc,
    [id]: false,
  }),
  {},
);

const initialValues: FormValues = {
  title: '',
  description: '',
};

const validationSchema = Yup.object({
  title: Yup.string().required('Please add a title'),
  description: Yup.string().required('Please add a description'),
});

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

  const firestore = useContext(FirestoreContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        try {
          const savedRoles = Object.keys(selectedRoles).filter(
            (key) => selectedRoles[key] === true,
          );
          const doc = await firestore.collection('projects').add({
            title: values.title,
            description: values.description,
            roles: savedRoles,
          });
          console.log(`saved doc with id: ${doc.id}`);
        } catch (err) {
          console.log(`error saving doc: ${err}`);
        }
        resetForm();
        setSelectedRoles(defaultSelectedRoles);
      }}
    >
      {(props) => (
        <Form>
          <Field name="title">
            {({ field, form }: FieldProps) => (
              <FormControl isRequired>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input {...field} id="title" size="sm" />
              </FormControl>
            )}
          </Field>
          <ErrorMessage name="title" />
          <Field name="description">
            {({ field, form }: FieldProps) => (
              <FormControl isRequired>
                <FormLabel htmlFor="description">Description</FormLabel>
                <StyledDescriptionInput {...field} id="description" size="sm" />
              </FormControl>
            )}
          </Field>
          <ErrorMessage name="description" />

          <RoleList
            onSelect={handleRoleSelected}
            onRemove={handleRoleRemoved}
            roles={roles}
            selectedRoles={selectedRoles}
          />

          <Button mt={4} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePost;
