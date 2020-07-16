import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
//SCREENS
import Restaurants from './restaurants';
const StackRestaurants: FC<{}> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="restaurants"
        component={Restaurants}
        options={{title: 'Restaurants'}}
      />
    </Stack.Navigator>
  );
};

export default StackRestaurants;
