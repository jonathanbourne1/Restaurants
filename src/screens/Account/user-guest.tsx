import React, {FC} from 'react';
import {StyleSheet, Image, ScrollView, View, Text} from 'react-native';
import {Button} from 'react-native-elements';

//colors
import Color from '../../constants/colors';
//navigation
import {useNavigation} from '@react-navigation/native';
//interface navigation

interface Props {}

const UserGuest: FC<Props> = (props) => {
  console.log('user-guest L8', props);
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require('../../utils/images/user-guest.jpg')}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.title}>Consulta tu perfil</Text>
      <Text style={styles.description}>
        Como describirias tu mejor restaurante? Busca y visualiza los mejores
        restaurantes de una forma sencilla, vota cual te ha gustado mas y
        comoenta como ha sido tu experiencia
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Ver tu perfil / Login "
          buttonStyle={styles.btnStyles}
          containerStyle={styles.btnContainer}
          onPress={() => {
            navigation.navigate('account.login');
          }}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  viewBody: {marginLeft: 30, marginRight: 30},
  image: {height: 300, width: '100%', marginBottom: 40},
  title: {fontWeight: 'bold', fontSize: 19, textAlign: 'center'},
  description: {},
  buttonContainer: {flex: 1, alignItems: 'center', marginTop: 15},
  btnStyles: {backgroundColor: Color.greenCoporative},
  btnContainer: {width: '70%'},
});

export default UserGuest;
