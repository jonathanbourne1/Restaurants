import React, {FC, useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackAccount = createStackNavigator();
//SCREENS
import UserLogged from './user-logged';
import UserGuest from './user-guest';
//FIREBASE
import * as firebase from 'firebase';

const StackAccountNav: FC<{}> = () => {
  const [login, setLogin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      !user ? setLogin(false) : setLogin(true);
      console.log(user);
    });
  }, [login]);

  /*
   *
   *COMPONENT*/
  return (
    <StackAccount.Navigator>
      <StackAccount.Screen
        component={UserGuest}
        name="guest"
        options={{title: 'Guest'}}
      />
      <StackAccount.Screen
        name="user"
        component={UserLogged}
        options={{title: 'User'}}
      />
    </StackAccount.Navigator>
  );
};

export default StackAccountNav;
