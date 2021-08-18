import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Platform,
  Linking,
  ScrollView,
} from 'react-native';
import moment from 'moment';
import colors from '../constants/colors';

export default function Event({ navigation, event }) {
  const [backgroundColor, setBackgroundColor] = useState(
    colors.weddingColors.xanadu
  );
  const [isOnPressIn, setIsOnPressIn] = useState(false);

  const { date, invited, title, dressCode, details } = event;
  const { street, city, state, zip, lat, long } = event.address;
  const { start, end } = event.time;

  const [month, day, year] = date.split('/');
  const [startHour, startTimeArr] = start.split(':');
  const startMinute = startTimeArr.slice(0, 2);

  const [endHour, endTimeArr] = end.split(':');
  const endMinute = endTimeArr.slice(0, 2);
  const endDate = new Date(year, month - 1, day, endHour, endMinute);
  const formattedEndTime = moment(endDate).format('h:mma');

  const startDate = new Date(year, month - 1, day, startHour, startMinute);
  const formattedStartTime = moment(startDate).format('h:mma');
  const formattedDate = moment(startDate).format('dddd MMM D, YYYY');

  const openMap = () => {
    const addrSplit = street.split(' ');
    if (!Platform.OS === 'ios') {
      Linking.openURL(
        `http://maps.google.com/maps?q=${addrSplit[0]}+${addrSplit[1]}+${addrSplit[2]}+${city},+${state}+${zip}`
      );
    } else {
      Linking.openURL(
        `http://maps.apple.com/maps?address=${addrSplit[0]}+${addrSplit[1]}+${addrSplit[2]}+${city},+${state}+${zip}&daddr=${lat},${long}`
      );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        justifyContent: 'center',
      }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.text, styles.invited]}>{invited}</Text>
        <Text style={styles.text}>
          {formattedStartTime} - {formattedEndTime}
        </Text>
        <Text style={styles.text}>{formattedDate}</Text>
        <Text style={styles.text}>
          {street} {city}, {state} {zip}
        </Text>
        <Pressable
          style={[styles.button, { backgroundColor }]}
          onPress={() => {
            openMap();
          }}
          onPressIn={() => {
            setBackgroundColor(colors.theme2.xanaduDark);
          }}
          onPressOut={() => {
            setBackgroundColor(colors.weddingColors.xanadu);
          }}
        >
          <Text style={styles.buttonText}>Get Directions</Text>
        </Pressable>
        {dressCode && (
          <Pressable
            onPress={() => navigation.push('DressCode')}
            onPressIn={() => {
              setIsOnPressIn(true);
            }}
            onPressOut={() => {
              setIsOnPressIn(false);
            }}
          >
            <Text
              style={[styles.dressCode, isOnPressIn && styles.dressCodePressed]}
            >
              Wedding Attire
            </Text>
          </Pressable>
        )}
        {details && (
          <Text style={[styles.text, styles.details]}>{details}</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: colors.weddingColors.xanadu,
    textTransform: 'uppercase',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'AbhayaLibre_600SemiBold',
  },
  text: {
    fontSize: 18,
    fontFamily: 'AbhayaLibre_500Medium',
    color: colors.theme2.raisinBlack,
    letterSpacing: 1,
    textAlign: 'center',
  },
  invited: {
    color: 'gray',
    fontFamily: 'Roboto_400Regular_Italic',
    letterSpacing: 1,
    marginBottom: 30,
    textTransform: 'lowercase',
    fontSize: 15,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 30,
  },
  buttonText: {
    color: colors.theme2.babyPowder,
    fontFamily: 'Roboto_500Medium',
  },
  details: {
    fontSize: 14,
    marginTop: 30,
  },
  dressCode: {
    textDecorationLine: 'underline',
    letterSpacing: 1,
    color: colors.weddingColors.xanadu,
    fontSize: 16,
    marginTop: 30,
  },
  dressCodePressed: {
    color: colors.theme2.xanaduDark,
  },
});
