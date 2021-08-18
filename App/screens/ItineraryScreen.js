import React, { useEffect, useState } from 'react';
import {
  Text,
  SectionList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import firebase from 'firebase';
import EventListItem from '../components/EventListItem';
import colors from '../constants/colors';

export default function ItineraryScreen({ navigation }) {
  const [isLoading, setIsLoading] = useState(false);
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

  const getEvents = () => {
    setIsLoading(true);
    firebase
      .database()
      .ref('events')
      .once('value')
      .then((snapshot) => {
        const data = snapshot.val();
        const eventsByDate = sectionListEvents(data);
        setEvents(eventsByDate);
        setIsLoading(false);
      })
      .catch((error) => {
        console.warn(error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getEvents();
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
