import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackAccount = createStackNavigator();
//SCREENS
import Account from './account';

const StackAccountNav: FC<{}> = () => {
  return (
    <StackAccount.Navigator>
      <StackAccount.Screen
        name="account"
        component={Account}
        options={{title: 'Account'}}
      />
    </StackAccount.Navigator>
  );
};

export default StackAccountNav;
