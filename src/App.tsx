import React from 'react';

import Navigation from './navigation/Navigation';
//firebase
import auth from '@react-native-firebase/auth';

const App = () => {
  const user = auth().currentUser;
  console.log(user);

  return <Navigation />;
};

export default App;
