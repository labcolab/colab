import React, { useContext, useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { Form, Formik, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FirestoreContext } from '../../services/firestore/firestore';
import RoleList from './RoleList';
import roles from '../RoleTag/roles';
import { StyledDescriptionInput } from './ProjectForm.styles';

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

const ProjectForm = () => {
  const [selectedRoles, setSelectedRoles] = useState(defaultSelectedRoles);
  const initialValues: FormValues = {
    title: '',
    description: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Please add a title'),
    description: Yup.string().required('Please add a description'),
  });

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
          const doc = await firestore.collection('projects').add({
            title: values.title,
            description: values.description,
            roles: Object.keys(selectedRoles),
          });
          console.log(`saved doc with id: ${doc.id}`);
        } catch (err) {
          console.log(`error saving doc: ${err}`);
        }
        resetForm();
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

export default ProjectForm;
