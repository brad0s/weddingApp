import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Linking,
  Pressable,
  Text,
  SafeAreaView,
} from 'react-native';
import DetailItem from '../components/DetailItem';
import DressCode from '../components/DressCode';
import colors from '../constants/colors';

export default function DetailsScreen() {
  const Website = ({ url }) => (
    <Pressable
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      <Text style={styles.websiteLink}>{url}</Text>
    </Pressable>
  );

  const Gifts = () => (
    <>
      <Text style={styles.giftText}>
        We are so incredibly thankful for our loved ones and the effort you'll
        be making to join us - having you with us on our special day is the most
        important thing. As we enter our marriage, we realize that we have
        enough belongings. No gifts are needed or expected.
      </Text>

      <Text style={styles.giftText}>
        However, we have been asked what we need or would like, and if you do
        wish to give us something, a donation to our newlywed fund would be
        great. Donations will be used to help save for a down payment on a
        house, and to go toward grad school (Lani will be starting her Master's
        degree next year).
      </Text>
      <Text style={styles.giftText}>
        If you wish to participate, we appreciate Venmo @laniandbraden
        (preferred) or checks can be made out to the bride or groom.
      </Text>
      <Text style={styles.giftText}>
        If you have any questions text the bride's sister, Chelsea Wade,
        +19252197095
      </Text>
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <DetailItem title="Wedding Attire" comp={<DressCode />} />
        <DetailItem title="Gifts" comp={<Gifts />} />
        <DetailItem
          title="RSVP"
          comp={
            <Website url="https://www.theknot.com/us/lani-wade-and-braden-wright-oct-2021/rsvp" />
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.theme2.babyPowder,
    flex: 1,
  },
  websiteLink: {
    textDecorationLine: 'underline',
    color: colors.weddingColors.xanadu,
    letterSpacing: 1,
  },
  giftText: {
    marginBottom: 8,
    letterSpacing: 1,
  },
});
