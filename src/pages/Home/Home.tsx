import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../services/auth/auth';
import { DatabaseContext } from '../../services/database/database';
import { useHistory } from 'react-router';

const HomePage = () => {
  const { user } = useContext(AuthContext);
  const { completeAuthProcess } = useContext(DatabaseContext);
  const history = useHistory();

  console.log({ userOut: user });

  useEffect(() => {
    if (user) {
      console.log({ userIn: user });
      completeAuthProcess(user, history);
    }
  }, [user]);
  return (
    <div className="container">
      <h1>Home Page</h1>
    </div>
  );
};

export default HomePage;
