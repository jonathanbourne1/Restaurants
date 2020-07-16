import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackSearch = createStackNavigator();
//SCREENS
import Search from './search';

const StackSearchNav: FC<{}> = () => {
  return (
    <StackSearch.Navigator>
      <StackSearch.Screen
        name="seacrh"
        component={Search}
        options={{title: 'Search'}}
      />
    </StackSearch.Navigator>
  );
};

export default StackSearchNav;
