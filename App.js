import React from 'react';
import { Image, View, StyleSheet, Text, Button} from 'react-native';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
      <Text style={{fontSize: 40, color: 'white'}}>Congratulations!</Text>

      <Image
        source={{uri: 'https://ws.engr.illinois.edu/directory/viewphoto.aspx?id=4930&s=215&type=portrait'}}
        style={{width: 320, height:180}}
      />
        <Text>Once upon a time there was a well-minded CPSC221 class!</Text>
        <Text>Licking graphs and eating C++ at an all time high.</Text>
        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>Today we join in the matrimony of such lovers!</Text>
        <Image
          source={{uri: 'https://uvmbored.com/wp-content/uploads/2017/01/o13vffkurigjlahnbtwp.jpg'}}
          style={{width: 320, height:180}}
        />
        <Button
        style={{fontSize: 20, color: 'white'}}
        styleDisabled={{color: 'red'}}
        onPress={window.location.href = 'https://facebook.github.io/react-native/'}
        title="Visit our Website"
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
