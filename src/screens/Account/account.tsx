import React, {FC, useEffect, useState} from 'react';

import auth from '@react-native-firebase/auth';
import UserLogged from './user-logged';
import UserGuest from './user-guest';
//import loading component
import Loading from '../../components/loading';

const Account: FC<{}> = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    auth().onUserChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);

  if (login === null) {
    return <Loading isVisible={true} text={'cargando'} />;
  }
  return login === true ? <UserLogged /> : <UserGuest />;
};

export default Account;
