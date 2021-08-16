import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import moment from 'moment';

import colors from '../constants/colors';

export default function EventListItem({
  title,
  time,
  onPress,
  onPressIn,
  onPressOut,
  isPressed,
  itemKey,
  pressedElement,
}) {
  const formattedTime = moment(time, 'HH:mm').format('h:mma');

  return (
    <Pressable
      onPress={onPress}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={[
        styles.container,
        isPressed && pressedElement === itemKey && styles.containerPressed,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{formattedTime}</Text>
      <Ionicons
        style={styles.chevron}
        name="chevron-forward"
        size={24}
        color={colors.theme2.raisinBlack}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    paddingVertical: 20,
    position: 'relative',
    borderBottomColor: '#c3c3c3',
    borderBottomWidth: 1,
    justifyContent: 'center',
  },
  containerPressed: {
    backgroundColor: '#FFFFD6',
  },
  title: {
    fontFamily: 'AbhayaLibre_700Bold',
    fontSize: 20,
    textTransform: 'uppercase',
    letterSpacing: 1,
    color: colors.weddingColors.artichoke,
  },
  text: {
    fontFamily: 'Roboto_300Light',
    fontSize: 15,
    marginLeft: 10,
    marginTop: 5,
  },
  chevron: {
    position: 'absolute',
    right: 0,
  },
});
