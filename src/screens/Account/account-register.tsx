import React, {FC} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
//register form component
import RegisterForm from '../../components/account/RegisterForm';
//scroll view aware
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Register: FC<{}> = () => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Image
        source={require('./../../utils/images/logo-restaurants.jpg')}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.viewForm}>
        <RegisterForm />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {width: '100%', height: 190, marginTop: 20},
  viewForm: {marginHorizontal: 40, flex: 1},
  wrapper: {position: 'absolute'},
});

export default Register;
