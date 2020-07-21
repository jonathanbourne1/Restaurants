import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackAccount = createStackNavigator();
//SCREENS
import Account from './account';
import Login from './login';

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
    </StackAccount.Navigator>
  );
};

export default StackAccountNav;
