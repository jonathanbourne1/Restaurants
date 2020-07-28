import React, {FC, useRef} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import {Divider} from 'react-native-elements';
//color
import Color from '../../constants/colors';
//toasts
import Toast, {DURATION} from 'react-native-easy-toast';
//navigation
import {useNavigation} from '@react-navigation/native';
//login Component
import LoginComponent from '../../components/account/login';

const CreateAccount = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.textRegister}>
      <Text>
        Aun no tienes una cuenta?{'  '}
        <Text
          style={styles.btnRegister}
          onPress={() => {
            navigation.navigate('account.register');
          }}>
          Sign in
        </Text>
      </Text>
    </View>
  );
};

const Login: FC<{}> = () => {
  //useRef
  const toastRef = useRef();

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Image
        source={require('../../utils/images/logo-restaurants.jpg')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <LoginComponent toastRef={toastRef} />

        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>social Login</Text>
      <Toast ref={toastRef} position="center" opacity={0.8} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {width: '100%', height: 190, marginTop: 20},
  viewContainer: {marginHorizontal: 40},
  textRegister: {marginTop: 15, marginHorizontal: 10},
  btnRegister: {color: Color.greenCoporative},
  divider: {backgroundColor: Color.greenCoporative, marginVertical: 30},
});

export default Login;
