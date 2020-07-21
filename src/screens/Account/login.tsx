import React, {FC} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Divider} from 'react-native-elements';
//color
import Color from '../../constants/colors';

const CreateAccount = () => {
  return (
    <View style={styles.textRegister}>
      <Text>
        Aun no tienes una cuenta?{'  '}
        <TouchableOpacity onPress={() => console.log('sign in')}>
          <Text style={styles.btnRegister}> Sign in</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const Login: FC<{}> = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Image
        source={require('../../utils/images/logo-restaurants.jpg')}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewContainer}>
        <Text>Login Form</Text>

        <CreateAccount />
      </View>
      <Divider style={styles.divider} />
      <Text>social Login</Text>
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
