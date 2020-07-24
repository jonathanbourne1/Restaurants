import React from 'react';
import Navigation from './navigation/Navigation';
//supresss warning
require('react-native').unstable_enableLogBox();
console.disableYellowBox = true;
// ------- END OF WARNING SUPPRESSION
//firebase
import auth from '@react-native-firebase/auth';

const App = () => {
  return <Navigation />;
};

export default App;
