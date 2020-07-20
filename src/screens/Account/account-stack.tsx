import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackAccount = createStackNavigator();
//SCREENS
import Account from './account';
import UserGuest from './user-guest';
import UserLogged from './user-logged';

const StackAccountNav: FC<{}> = () => {
  return (
    <StackAccount.Navigator>
      <StackAccount.Screen
        name="account"
        component={Account}
        options={{title: 'Account'}}
      />
      <StackAccount.Screen
        name="account.user-guest"
        component={UserGuest}
        options={{title: 'sign in'}}
      />
      <StackAccount.Screen
        name="account.user-logged"
        component={UserLogged}
        options={{title: 'Welcome'}}
      />
    </StackAccount.Navigator>
  );
};

export default StackAccountNav;
