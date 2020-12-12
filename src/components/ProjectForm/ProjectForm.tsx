import React, { useContext } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Select,
} from '@chakra-ui/react';
import { Form, Formik, Field, FieldProps, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import RoleTag from '../RoleTag/RoleTag';
import { FirestoreContext } from '../../services/firestore/firestore';

interface FormValues {
  title: string;
  description: string;
  roles: string[];
}

const ProjectForm = () => {
  const initialValues: FormValues = {
    title: '',
    description: '',
    roles: [],
  };
  const firestore = useContext(FirestoreContext);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string().required('Please add a title'),
        description: Yup.string().required('Please add a description'),
      })}
      onSubmit={async (values, { resetForm }) => {
        try {
          const doc = await firestore.collection('projects').add({
            title: values.title,
            description: values.description,
            roles: values.roles,
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
                <FormErrorMessage>{form.errors.title}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <ErrorMessage name="title" />
          <Field name="description">
            {({ field, form }: FieldProps) => (
              <FormControl isRequired>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Input {...field} id="description" size="lg" />
                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <ErrorMessage name="description" />
          <Field name="roles">
            {({ field, form }: FieldProps) => (
              <FormControl isRequired>
                <FormLabel htmlFor="roles">Roles</FormLabel>
                <Select {...field} id="roles" placeholder="Select role">
                  <option>First role</option>
                  <option>Second role</option>
                </Select>
                <FormErrorMessage>{form.errors.description}</FormErrorMessage>
              </FormControl>
            )}
          </Field>
          <Button mt={4} type="submit">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ProjectForm;
