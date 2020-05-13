import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [state, setState]= useState('');
  const touchStart = (ev) => {
    console.log('start event')
  }
  const touchMove = (ev) => {
    console.log('move event')
  }
  const touchRelease = (ev) => {
    console.log('move release')
  }
  return (
    <View style={styles.container} onStartShouldSetResponder={() => true} onResponderStart={touchStart} onResponderMove={touchMove} onResponderRelease={touchRelease}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
