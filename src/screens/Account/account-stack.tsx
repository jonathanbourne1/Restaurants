import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackAccount = createStackNavigator();
//SCREENS
import Account from './account';
import Login from './account-login';
import Register from './account-register';
const StackAccountNav: FC<{}> = () => {
  return (
    <StackAccount.Navigator>
      <StackAccount.Screen
        name="account"
        component={Account}
        options={{title: 'Account'}}
      />

      <StackAccount.Screen
        name="account.login"
        component={Login}
        options={{title: 'Login'}}
      />
      <StackAccount.Screen
        name="account.register"
        component={Register}
        options={{title: 'Create new account'}}
      />
    </StackAccount.Navigator>
  );
};

export default StackAccountNav;
