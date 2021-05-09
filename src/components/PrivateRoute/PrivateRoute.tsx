import React, { useContext, useState, useEffect, useRef } from 'react';
import { Redirect, Route, RouteProps, useLocation } from 'react-router-dom';
import { AuthContext } from '../../services/auth/auth';
import { firestore } from '../../services/firebase/firebase';
import { Collections } from '../../services/database/database';

const InitialComponent = () => <></>;
const RedirectRoles = () => <Redirect to="/roles" />;
const RedirectCategories = () => <Redirect to="/categories" />;

enum ComponentState {
  Initial,
  Default,
  Alternative,
  Roles,
  Categories,
}

// eslint-disable-next-line max-len
const completeAuthProcess = async (
  uid: string | undefined,
  setComponentState: Function,
  defaultComponent: any,
  alternative: any,
  pathName: string,
) => {
  const userDocRef = firestore.collection(Collections.Users).doc(uid);
  const userDoc = await userDocRef.get();
  if (uid) {
    const docData = userDoc.data();
    console.log({ docData });
    console.log({ roles: docData?.roles });
    if (!docData?.roles) {
      if (pathName !== '/roles') {
        setComponentState(ComponentState.Roles);
      }
      setComponentState(ComponentState.Default);
    } else if (!docData?.categories && pathName !== '/categories') {
      if (pathName !== '/categories') {
        setComponentState(ComponentState.Categories);
      }
      setComponentState(ComponentState.Default);
    } else {
      setComponentState(ComponentState.Default);
    }
  } else {
    setComponentState(ComponentState.Alternative);
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
  const [componentState, setComponentState] = useState<ComponentState>(ComponentState.Initial);
  const components = {
    [ComponentState.Initial]: InitialComponent,
    [ComponentState.Categories]: RedirectCategories,
    [ComponentState.Roles]: RedirectRoles,
    [ComponentState.Alternative]: alternative,
    [ComponentState.Default]: component,
  };

  const location = useLocation();

  console.log({ component, path: location.pathname });

  useEffect(() => {
    console.log({ user });
    completeAuthProcess(user?.uid, setComponentState, component, alternative, location.pathname);
  }, [user]);

  return <Route {...otherProps} component={components[componentState]} />;
};

export default PrivateRoute;
