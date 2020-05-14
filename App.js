import React, {useState, useMemo} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useTouchPos from './useTouchPos';
export default function App() {
  const pos = useTouchPos(2,{x: 0, y: 0})

  return (
    <View style={[styles.container]}   onStartShouldSetResponder={() => true} onResponderMove={pos.touchMove}>
      <Text style={{transform: [{translateX: pos.x}, {translateY: pos.y}]}}>x: {pos.x} , y: {pos.y}</Text>
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
