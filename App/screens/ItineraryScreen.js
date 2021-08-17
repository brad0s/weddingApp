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
import eventsData from '../data/eventsData';

export default function ItineraryScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState(null);

  const sectionListEvents = (array) => {
    const eventsByDate = array.reduce((acc, event) => {
      const index = acc.findIndex((element) => element.key === event.date);
      if (index === -1) {
        return [
          ...acc,
          {
            key: event.date,
            data: [{ event }],
          },
        ];
      }
      acc[index].data = [...acc[index].data, { event }];
      return acc;
    }, []);
    return eventsByDate;
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setEvents(sectionListEvents(eventsData));
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
          renderItem={({ item }) => {
            return (
              <EventListItem
                title={item.event.title}
                time={item.event.time.start}
                onPress={() => {
                  navigation.push('Event', {
                    event: item.event,
                    title: item.event.title,
                  });
                }}
              />
            );
          }}
          renderSectionHeader={({ section: { key } }) => (
            <Text style={styles.sectionHeader}>{key}</Text>
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
