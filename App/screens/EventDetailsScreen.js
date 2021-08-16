import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { View, Text } from 'react-native';

import Event from '../components/Event';
import colors from '../constants/colors';

export default function EventDetailsScreen({ navigation, route = {} }) {
  return (
    <View style={styles.container}>
      <Event navigation={navigation} event={route.params.event} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: colors.theme2.babyPowder,
  },
});
