import React from 'react';

import Navigation from './navigation/Navigation';
//firebase
import auth from '@react-native-firebase/auth';

const App = () => {
  const user = auth().currentUser;
  if (!user) {
    console.log('no hay usario logeado');
  } else {
    console.log(user);
  }

  return <Navigation />;
};

export default App;
