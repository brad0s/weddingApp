import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import colors from '../constants/colors';

export default function DetailItem({ title, body, comp }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [lineRotate] = useState(new Animated.Value(0));

  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }

  const startShowBody = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpanded(!isExpanded);
    const toValue = isExpanded ? 0 : 1;

    Animated.spring(lineRotate, {
      toValue,
      friction: 25,
      tension: 75,
      useNativeDriver: true,
    }).start();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
      paddingVertical: 20,
      borderBottomColor: colors.theme2.lightGray,
      borderBottomWidth: 1,
    },
    pressable: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
    },
    title: {
      fontSize: 30,
      color: colors.theme2.raisinBlack,
      fontFamily: 'AbhayaLibre_500Medium',
    },
    collapsible: {},
    body: {
      fontFamily: 'Roboto_400Regular',
      padding: 5,
    },
    expand: {
      width: 25,
      height: 25,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    line: {
      width: '75%',
      height: 3,
      backgroundColor: 'black',
      borderRadius: 10,
      position: 'absolute',
    },
    lineRotate: {
      transform: [
        {
          rotate: lineRotate.interpolate({
            inputRange: [0, 1],
            outputRange: ['90deg', '0deg'],
          }),
        },
      ],
    },
  });

  return (
    <View const style={styles.container}>
      <View>
        <Pressable
          style={styles.pressable}
          onPress={() => {
            // setIsExpanded(!isExpanded)
            startShowBody();
          }}
        >
          <Text style={styles.title}>{title}</Text>
          <View style={styles.expand}>
            <Animated.View style={[styles.line, styles.lineRotate]} />
            <Animated.View style={styles.line} />
          </View>
        </Pressable>
      </View>

      {isExpanded && (
        <View style={styles.body}>
          {body && <Text>{body}</Text>}
          {comp && comp}
        </View>
      )}
    </View>
  );
}
