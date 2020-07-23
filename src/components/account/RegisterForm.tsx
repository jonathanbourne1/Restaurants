import React, {FC, useState} from 'react';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

//react native elements
import {Input, Icon, Button} from 'react-native-elements';
//color
import Color from '../../constants/colors';
//function validate email
import {validateEmail} from '../../utils/validations';

const RegisterForm: FC<{}> = () => {
  //state of the show and hide password
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  //state
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  //email
  const onchangeEmail = (e) => {
    const emailnotrimmed: string = e.nativeEvent.text;
    const regEx = /\s+/g;
    const emailTrimmed: string = emailnotrimmed.replace(regEx, '');
    setEmail(emailTrimmed);
  };
  const onchangePassword = (e) => {
    setpassword(e.nativeEvent.text);
  };
  const onchangeRepeatPassword = (e) => {
    setRepeatPassword(e.nativeEvent.text);
  };

  const onSubmit = () => {
    validateEmail(email);
    console.log(validateEmail(email));
    console.log('{', email, ',', password, ',', repeatPassword, ',', '}');
  };
  //cortar espacio en blanco

  /*const onchangeEmail = (e: {nativeEvent: {text: string}}) => {
    setEmail(e.nativeEvent.text);
  };
  */

  /*const onChange = (e: {nativeEvent: {text: string}}, type: string) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };*/
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
