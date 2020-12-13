import React, { useContext, useState } from 'react';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { Form, Formik, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FirestoreContext } from '../../services/firestore/firestore';
import RoleList from './RoleList';
import { StyledDescriptionInput } from './ProjectForm.styles';

interface FormValues {
  title: string;
  description: string;
}

const ProjectForm = () => {
  const [chosenRoles, setChosenRoles] = useState<string[]>([]);
  const initialValues: FormValues = {
    title: '',
    description: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Please add a title'),
    description: Yup.string().required('Please add a description'),
  });

  const handleOnAdd = (role: string) => {
    chosenRoles.push(role);
    setChosenRoles(chosenRoles);
    console.log(`added ${role}`);
    console.log(chosenRoles);
  };

  const handleOnRemove = (role: string) => {
    const index = chosenRoles.indexOf(role);
    if (index > -1) chosenRoles.splice(index, 1);
    setChosenRoles(chosenRoles);
    console.log(`removed ${role}`);
    console.log(chosenRoles);
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
            roles: chosenRoles,
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

          <RoleList onAdd={handleOnAdd} onRemove={handleOnRemove} />

          <Button mt={4} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectForm;
