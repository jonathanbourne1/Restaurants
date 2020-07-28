import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
//firebase
import auth from '@react-native-firebase/auth';
//react native elements
import {Input, Icon, Button} from 'react-native-elements';
//loading
import Loading from '../loading';
//navigation
import {useNavigation} from '@react-navigation/native';
//color
import Color from '../../constants/colors';
//function validate email
import {validateEmail} from '../../utils/validations';
//loadash
import {size, isEmpty} from 'lodash';
//INTERFACE
interface Props {
  toastRef: {current: {show(messange: string)}};
}
const RegisterForm: FC<Props> = (props) => {
  //state of the show and hide password
  const {toastRef} = props;
  //loading
  const [showLoading, setShowLoading] = useState(false);
  // showing password
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  //state
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  //useNavigation
  const navigation = useNavigation();
  //email function
  const onchangeEmail = (e) => {
    const emailnotrimmed: string = e.nativeEvent.text;
    const regEx = /\s+/g;
    const emailTrimmed: string = emailnotrimmed.replace(regEx, '');
    setEmail(emailTrimmed);
  };
  //password
  const onchangePassword = (e) => {
    setpassword(e.nativeEvent.text);
  };
  //repeat password
  const onchangeRepeatPassword = (e) => {
    setRepeatPassword(e.nativeEvent.text);
  };
  //ONSUBMIT
  const onSubmit = () => {
    if (isEmpty(email) || isEmpty(password) || isEmpty(repeatPassword)) {
      //console.log('todos los campos son obligatorios');
      toastRef.current.show('TODOS LOS CAMPOS SON OBLIGARORIOS', 1000);
    } else if (!validateEmail(email)) {
      toastRef.current.show('INGRESE UN CORREO VALIDO');
    } else if (password !== repeatPassword) {
      toastRef.current.show('LAS CONTRASEÑAS NO COINCIDEN');
    } else if (size(password) < 7) {
      toastRef.current.show('LA CONTRASEÑA TIENE QUE SER MAYOR A 7 CARACTERES');
    } else {
      setShowLoading(true);
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
          setShowLoading(false);
          navigation.navigate('account');
        })
        .catch((error) => {
          toastRef.current.show(error.message, 5000);
          setShowLoading(false);
        });
    }

    console.log('{', email, ',', password, ',', repeatPassword, ',', '}');
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.formView}>
        <Input
          onChange={(e) => {
            onchangeEmail(e);
          }}
          value={email}
          placeholder="e-mail"
          containerStyle={styles.containerStyle}
          rightIcon={
            <Icon type="material-community" name="at" iconStyle={styles.icon} />
          }
        />
        <Input
          onChange={(e) => {
            onchangePassword(e);
          }}
          password={true}
          secureTextEntry={showPassword ? false : true}
          placeholder="Password"
          containerStyle={styles.containerStyle}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              iconStyle={styles.icon}
              onPress={() => {
                setShowPassword(!showPassword);
                console.log('eye');
              }}
            />
          }
        />
        <Input
          onChange={(e) => {
            onchangeRepeatPassword(e);
          }}
          password={true}
          secureTextEntry={showPassword2 ? false : true}
          placeholder="Repeat password"
          containerStyle={styles.containerStyle}
          rightIcon={
            <Icon
              type="material-community"
              name={showPassword2 ? 'eye-off-outline' : 'eye-outline'}
              iconStyle={styles.icon}
              onPress={() => {
                setShowPassword2(!showPassword2);
                console.log('eye');
              }}
            />
          }
        />
        <Button
          buttonStyle={styles.btnRegister}
          title="Join"
          containerStyle={styles.containerRegisterbtn}
          onPress={onSubmit}
        />
        <Loading isVisible={showLoading} text="Creando cuenta" />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  formView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerStyle: {width: '100%'},
  containerRegisterbtn: {
    marginTop: 20,
    width: '95%',
  },
  btnRegister: {backgroundColor: Color.greenCoporative},
  icon: {color: Color.placeHolderColor, marginRight: 10},
});

export default RegisterForm;
