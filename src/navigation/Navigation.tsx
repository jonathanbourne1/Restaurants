import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//icons
import {Icon} from 'react-native-elements';
//SCREENS
//stack Top 5
import TopRestaurants from '../screens/top/top-restaurant-stack';
//stack Restaurants
import Restaurants from '../screens/restaurants/restaurants-stack';
//stack favorites
import Favorites from '../screens/favorites/favorites-stack';
//stack Account
import Account from '../screens/account/account-stack';
// stack seacrh
import Search from '../screens/search/seacrh-stack';
const Tab = createBottomTabNavigator();

//function for Icons
const screenOption = (route: {name: string}, color: string) => {
  let iconName;
  switch (route.name) {
    case 'restaurants':
      iconName = 'compass-outline';
      break;
    case 'favorites':
      iconName = 'heart-outline';
      break;
    case 'top-restaurants':
      iconName = 'star-outline';
      break;
    case 'search':
      iconName = 'magnify';
      break;
    case 'account':
      iconName = 'home-outline';
      break;
    default:
      break;
  }
  return (
    <Icon type="material-community" name={iconName} size={22} color={color} />
  );
};

const Navigation: FC<{}> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: '#646464',
          activeTintColor: '#00a680',
        }}
        screenOptions={({route}) => ({
          tabBarIcon: ({color}) => screenOption(route, color),
        })}>
        <Tab.Screen
          name="restaurants"
          component={Restaurants}
          options={{title: 'Restaurants'}}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurants}
          options={{title: 'Top 5'}}
        />
        <Tab.Screen
          name="favorites"
          component={Favorites}
          options={{title: 'Favorites'}}
        />
        <Tab.Screen
          name="search"
          component={Search}
          options={{title: 'Search'}}
        />
        <Tab.Screen
          name="account"
          component={Account}
          options={{title: 'My Account'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
