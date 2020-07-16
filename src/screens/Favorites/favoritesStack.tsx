import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const StackFavorites = createStackNavigator();
//SCREENS
import Favorites from './favorites';
const StackFavoritesNav: FC<{}> = () => {
  return (
    <StackFavorites.Navigator>
      <StackFavorites.Screen
        name="favorites"
        component={Favorites}
        options={{title: 'Favorites'}}
      />
    </StackFavorites.Navigator>
  );
};

export default StackFavoritesNav;
