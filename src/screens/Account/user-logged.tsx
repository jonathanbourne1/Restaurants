import React, {FC} from 'react';
import {StyleSheet, ScrollView, View, Text, Button} from 'react-native';

//firebase
import auth from '@react-native-firebase/auth';

const UserLogged: FC<{}> = () => {
  return (
    <>
      <Text>user logged</Text>
      <Button title="logout" onPress={() => auth().signOut()} />
    </>
  );
};

const styles = StyleSheet.create({});

export default UserLogged;
