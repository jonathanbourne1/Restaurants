import React, {FC, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {Input, Icon} from 'react-native-elements';
//firebase
import auth from '@react-native-firebase/auth';
//navigartion
import {useNavigation} from '@react-navigation/native';
//Colors
import Colors from '../../constants/colors';
// validation email
import {validateEmail} from '../../utils/validations';
//loading
import Loading from '../loading';
const LoginComponent: FC<{}> = (props) => {
  //navigation
  const navigation = useNavigation();
  const {toastRef} = props;
  //state
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  //useRef

  //onChange email
  const onChangeEmail = (e: string) => {
    const emailnoTrimmed: string = e;
    const regEx = /\s+/g;
    let emailtrimmed: string = emailnoTrimmed.replace(regEx, '');
    setEmail(emailtrimmed);
  };
  //onChange password
  const onChangePassword = (e: string) => {
    setPassword(e);
    console.log(password);
  };
  //onsubmit

  const onSubmit = () => {
    if (!validateEmail(email)) {
      toastRef.current.show('INGRESE UN CORREO VALIDO', 2000);
    } else {
      setLoading(true);
      auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
          navigation.navigate('account');
        })
        .catch((err) => {
          toastRef.current.show(err.message, 3000);
        });
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Input
        onChange={(e) => onChangeEmail(e.nativeEvent.text)}
        value={email}
        placeholder="E-mail"
        containerStyle={styles.inputContainer}
        rightIcon={
          <Icon type="material-community" name="at" iconStyle={styles.icon} />
        }
      />
      <Input
        onChange={(e) => onChangePassword(e.nativeEvent.text)}
        placeholder="Password"
        containerStyle={styles.inputContainer}
        secureTextEntry={showPassword ? false : true}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? 'eye-off-outline' : 'eye-outline'}
            iconStyle={styles.icon}
            onPress={() => {
              setShowPassword(!showPassword);
            }}
          />
        }
      />
      <TouchableOpacity
        onPress={() => {
          onSubmit();
        }}>
        <Text style={styles.textLogin}>LOGIN</Text>
      </TouchableOpacity>
      <Loading isVisible={loading} text="creando cuenta" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
  inputContainer: {marginTop: 10, width: '100%'},
  icon: {color: Colors.placeHolderColor, marginRight: 10},
  textLogin: {
    margin: 20,
    marginHorizontal: 30,
    color: Colors.greenCoporative,
    fontSize: 20,
  },
});

export default LoginComponent;
