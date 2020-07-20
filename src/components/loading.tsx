import React, {FC} from 'react';
import {StyleSheet, ActivityIndicator, View, Text} from 'react-native';
import {Overlay} from 'react-native-elements';
//colors
import Colors from '../constants/colors';
//INTERFACE
interface Props {
  isVisible: boolean;
  text: string;
}

const GeneralComponent: FC<Props> = (props) => {
  const {isVisible, text} = props;
  return (
    <Overlay
      isVisible={isVisible}
      windowBackgroundColor="rgba(0,0, 0, .5)"
      overlayBackgroundColor="transparent"
      overlayStyle={styles.overlay}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color={Colors.greenCoporative} />
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: 200,
    backgroundColor: '#fff',
    borderColor: Colors.greenCoporative,
    borderWidth: 2,
    borderRadius: 10,
  },
  view: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  text: {
    color: Colors.greenCoporative,
    textTransform: 'uppercase',
    marginTop: 10,
  },
});

export default GeneralComponent;
