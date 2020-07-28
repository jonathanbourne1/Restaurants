import React, {FC, useRef} from 'react';
import {StyleSheet, ScrollView, View, Image} from 'react-native';
//to ignore warning of useDriver
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings([
  'Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`',
]);
// ------- END OF WARNING SUPPRESSION

//register form component
import RegisterForm from '../../components/account/register-form';
//TOAST
import Toast, {DURATION} from 'react-native-easy-toast';
//interface
interface Props {
  toastRef: object;
}
const Register: FC<Props> = (props) => {
  const toastRef = useRef();
  console.log('toast ref :', toastRef);
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <Image
        source={require('./../../utils/images/logo-restaurants.jpg')}
        resizeMode="contain"
        style={styles.logo}
      />

      <View style={styles.viewForm}>
        <RegisterForm toastRef={toastRef} />
      </View>
      <Toast ref={toastRef} position="center" opacity={0.8} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {width: '100%', height: 190, marginTop: 20},
  viewForm: {marginHorizontal: 40, flex: 1},
  wrapper: {position: 'absolute'},
});

export default Register;
