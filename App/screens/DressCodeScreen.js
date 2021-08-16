import React from 'react';
import { StyleSheet, View } from 'react-native';
import DressCode from '../components/DressCode';

export default function DressCodeScreen() {
  return (
    <View style={styles.container}>
      <DressCode />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    flex: 1,
    backgroundColor: '#fff',
  },
});
