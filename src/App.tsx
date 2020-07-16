import React, {FC} from 'react';
//navigation
import Navigation from './navigation/Navigation';
//firebase
import {firebaseApp} from './utils/firebase/firebase';

const App: FC<{}> = () => {
  return <Navigation />;
};

export default App;
