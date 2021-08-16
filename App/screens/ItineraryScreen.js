import React, { useEffect, useState } from 'react';
import {
  Text,
  SectionList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import EventListItem from '../components/EventListItem';
import colors from '../constants/colors';

export default function ItineraryScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState(null);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setEvents(DATA);
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer1);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <View style={styles.spinnerContainer}>
          <ActivityIndicator size="large" color={colors.weddingColors.xanadu} />
        </View>
      ) : (
        <SectionList
          sections={events}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <EventListItem
              title={item.title}
              time={item.time}
              date={item.date}
              address={item.address}
              onPress={() => {
                navigation.push('Event', { event: item, title: item.title });
              }}
            />
          )}
          renderSectionHeader={({ section: { date } }) => (
            <Text style={styles.sectionHeader}>{date}</Text>
          )}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.theme2.babyPowder,
  },
  sectionHeader: {
    fontFamily: 'AbhayaLibre_600SemiBold',
    fontSize: 30,
    marginLeft: 10,
    paddingTop: 20,
    backgroundColor: colors.theme2.babyPowder,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const DATA = [
  {
    date: 'Fri Oct 15th',
    data: [
      {
        title: 'Bridal Shower',
        date: '10/15/2021',
        time: '12:00',
        address: {
          street: '30 Kessler Lane',
          city: 'Oakley',
          state: 'CA',
          zip: '94561',
          lat: 37.97211,
          long: -121.70954,
        },
        invited: 'Invite Only',
        dressCode: false,
        details: null,
      },
      {
        title: 'Family Event',
        date: '10/15/2021',
        time: '13:30',
        address: {
          street: '30 Kessler Lane',
          city: 'Oakley',
          state: 'CA',
          zip: '94561',
          lat: 37.97211,
          long: -121.70954,
        },
        invited: 'Family Only',
        dressCode: false,
        details: null,
      },
    ],
  },
  {
    date: 'Sat Oct 16th',
    data: [
      {
        title: 'Private Wedding Ceremony',
        date: '10/16/2021',
        time: '12:00',
        address: {
          street: '1124 Wispering Pines',
          city: 'Clayton',
          state: 'CA',
          zip: '94517',
          lat: 37.88826,
          long: -121.86634,
        },
        invited: 'Invite Only',
        dressCode: true,
        details: 'After the ceremony, lunch will be provided.',
      },
      {
        title: 'Wedding Recepetion',
        date: '10/16/2021',
        time: '17:00',
        address: {
          street: '1124 Wispering Pines',
          city: 'Clayton',
          state: 'CA',
          zip: '94517',
          lat: 37.88826,
          long: -121.86634,
        },
        invited: 'Everyone',
        dressCode: false,
        details:
          'Celebrate the couple with an evening of refreshments, dancing, and more.',
      },
    ],
  },
];
