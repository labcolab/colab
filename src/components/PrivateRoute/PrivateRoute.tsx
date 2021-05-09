import React, { useContext, useState, useEffect, useRef } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';
import { AuthContext } from '../../services/auth/auth';
import { firestore } from '../../services/firebase/firebase';
import { Collections } from '../../services/database/database';

const InitialComponent = () => <></>;
const RedirectRoles = () => <Redirect to="/roles" />;
const RedirectCategories = () => <Redirect to="/categories" />;

// eslint-disable-next-line max-len
const completeAuthProcess = async (
  uid: string | undefined,
  setFinalComponent: Function,
  defaultComponent: any,
  alternative: any,
) => {
  const userDocRef = firestore.collection(Collections.Users).doc(uid);
  const userDoc = await userDocRef.get();
  if (userDoc.exists) {
    const docData = userDoc.data();
    console.log({ docData });
    console.log({ roles: docData?.roles });
    if (!docData?.roles) {
      setFinalComponent(RedirectRoles);
      // history.push('/roles');
    } else if (!docData?.categories) {
      setFinalComponent(RedirectCategories);
      // history.push('/categories');
    } else {
      setFinalComponent(defaultComponent);
      // history.push('/test');
    }
  } else {
    setFinalComponent(alternative);
  }
};

interface PrivateRouteProps extends RouteProps {
  alternative: React.ComponentType<any>;
}

const PrivateRoute = ({
  component,
  alternative,
  ...otherProps
}: PrivateRouteProps) => {
  const { user } = useContext(AuthContext);
  const [, setUpdate] = useState(true);

  const ref = useRef(InitialComponent);
  const FinalComponent = ref.current;

  const setFinalComponent = (newComponent: any) => {
    ref.current = newComponent;
    setUpdate((prev) => !prev);
  };

  useEffect(() => {
    completeAuthProcess(user?.uid, setFinalComponent, component, alternative);
  }, [user]);

  console.log({ ref });
  return <Route {...otherProps} component={FinalComponent} />;
};

export default PrivateRoute;
