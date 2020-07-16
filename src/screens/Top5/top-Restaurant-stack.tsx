import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackTop5 = createStackNavigator();
//SCREENS
import Top5 from './top-restaurants';

const StackTop5Nav: FC<{}> = () => {
  return (
    <StackTop5.Navigator>
      <StackTop5.Screen
        name="seacrh"
        component={Top5}
        options={{title: 'Top 5'}}
      />
    </StackTop5.Navigator>
  );
};

export default StackTop5Nav;
