import React, {FC, useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import UserLogged from './user-logged';
import UserGuest from './user-guest';

const Account: FC<{}> = () => {
  const [login, setLogin] = useState(null);
  useEffect(() => {
    auth().onUserChanged((user) => {
      !user ? setLogin(false) : setLogin(true);
    });
  }, []);
  if (login === null) {
    return <Text>loagin</Text>;
  }
  return login === true ? <UserLogged /> : <UserGuest />;
};

const styles = StyleSheet.create({});

export default Account;
