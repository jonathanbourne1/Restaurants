import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyDc1ry0bE_-LpGc-mQ5CJgN_ajSsiV5gp4',
  authDomain: 'restaurants-ed940.firebaseapp.com',
  databaseURL: 'https://restaurants-ed940.firebaseio.com',
  projectId: 'restaurants-ed940',
  storageBucket: 'restaurants-ed940.appspot.com',
  messagingSenderId: '925819615405',
  appId: '1:925819615405:web:bf4ef3b6c54152b3d02e24',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
