import React from 'react';
import { Image, View, StyleSheet, Text, Button,  Alert, AppRegistry, Platform, Linking,
   TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback} from 'react-native';

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontSize: 40, color: 'white', textAlign: 'center'}}>Happy one year Anniversary!</Text>
      <Image
        source={require('./P_20170526_151336_BF.jpg')}
        style={{width: 320, height:180}}
      />
        <Text>Once upon a time there was a hopeful Indonesian kid</Text>
        <Text>Who just went to university not knowing anything</Text>
        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Today we join for one year but it feels</Text>
        <Text style={{fontSize: 30, color: 'white', textAlign: 'center'}}>Time Stood Still</Text>
        <Image
          source={require('./P_20170615_142821_BF.jpg')}
          style={{width: 320, height:180}}
        />
        <Button
        style={{fontSize: 20, color: 'white'}}
        styleDisabled={{color: 'red'}}
        onPress={ ()=>{ Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}}
        title="Let the Magic Begin"
>
  Press Me
</Button>

      </View>
    );
  }
}


const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff69b4',
    borderTopWidth: 10,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderBottomWidth: 10,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
