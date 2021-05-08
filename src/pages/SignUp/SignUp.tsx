import React, { useContext, useEffect } from 'react';

import { useHistory } from 'react-router';
import { AuthContext } from '../../services/auth/auth';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { DatabaseContext } from '../../services/database/database';

// const SignUpPage = () => {
//   const { user } = useContext(AuthContext);
//   const { userRolesExist } = useContext(DatabaseContext);
//   const [toRoles, setToRoles] = useState<boolean>(false);
//   const [toCategories, setToCategories] = useState<boolean>(false);
//   const [toTest, setToTest] = useState<boolean>(false);
//   useEffect(() => {
//     const redirection = async () => {
//       console.log(`in signup, user: ${user?.email}`);
//       // if (!user || !user.email) {
//       //   return <></>;
//       // }
//       if (user && user.email) {
//         const rolesSaved = await userRolesExist(user.email);
//         console.log(`rolesSaved: ${rolesSaved}`);
//         if (!rolesSaved) {
//           setToRoles(true);
//         }
//         // TODO: check categories
//         else {
//           setToTest(true);
//         }
//       }
//     };
//     redirection();
//   }, []);

//   if (toRoles) {
//     return <Redirect to="/roles" />;
//   }
//   if (toCategories) {
//     return <Redirect to="/categories" />;
//   }
//   if (toTest) {
//     return <Redirect to="/test" />;
//   }
//   return <SignUpForm />;
// };

const SignUpPage = () => {
  // const { user } = useContext(AuthContext);
  // const { completeAuthProcess } = useContext(DatabaseContext);
  // const history = useHistory();
  //
  // console.log({ userOut: user });
  //
  // useEffect(() => {
  //   if (user) {
  //     console.log({ userIn: user });
  //     completeAuthProcess(user, history);
  //   }
  // }, [user]);
  return <SignUpForm />;
};

export default SignUpPage;
