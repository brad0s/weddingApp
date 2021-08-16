import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Linking,
  ScrollView,
  Dimensions,
} from 'react-native';
import Countdown from '../components/Countdown';
import colors from '../constants/colors';

export default function HomeScreen() {
  const [isOnPressIn, setIsOnPressIn] = useState(false);
  const windowWidth = Dimensions.get('window').width;

  const handleOnPress = () => {
    Linking.openURL(
      'https://www.theknot.com/us/lani-wade-and-braden-wright-oct-2021'
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.header}> Lani & Braden </Text>
        <Text style={styles.subHeader}>Saturday, October 16, 2021</Text>
        <Text style={styles.subHeader}>Clayton, CA</Text>
        <Text style={styles.subHeader}>
          <Countdown /> days to go
        </Text>
        <Image
          style={[styles.image, { width: windowWidth }]}
          source={require('../assets/images/IMG_0024.jpg')}
        />
        <Pressable
          onPress={handleOnPress}
          onPressIn={() => {
            setIsOnPressIn(true);
          }}
          onPressOut={() => {
            setIsOnPressIn(false);
          }}
        >
          <Text style={[styles.link, isOnPressIn && styles.linkPressed]}>
            More details and RSVP
          </Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.theme2.babyPowder,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  header: {
    fontFamily: 'AbhayaLibre_400Regular',
    fontSize: 45,
    letterSpacing: 4,
    textTransform: 'uppercase',
    color: colors.theme2.raisinBlack,
  },
  subHeader: {
    fontSize: 15,
    fontFamily: 'Roboto_300Light',
    color: colors.theme2.raisinBlack,
    letterSpacing: 2,
    margin: 3,
  },
  image: {
    height: 400,
  },
  link: {
    fontSize: 16,
    fontFamily: 'Roboto_400Regular',
    textDecorationLine: 'underline',
    marginTop: 30,
    color: colors.weddingColors.xanadu,
  },
  linkPressed: {
    color: colors.theme2.xanaduDark,
  },
});
