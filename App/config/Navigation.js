import React from 'react';
import { Pressable, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import ItineraryScreen from '../screens/ItineraryScreen';
import DetailsScreen from '../screens/DetailsScreen';
import EventDetailsScreen from '../screens/EventDetailsScreen';
import colors from '../constants/colors';
import DressCodeScreen from '../screens/DressCodeScreen';

export default function Navigation() {
  const Tab = createBottomTabNavigator();

  const ItineraryStack = createNativeStackNavigator();
  const itineraryStackScreen = () => (
    <ItineraryStack.Navigator>
      <ItineraryStack.Group>
        <ItineraryStack.Screen
          name="ItineraryStack"
          component={ItineraryScreen}
          options={{ headerShown: false }}
        />
        <ItineraryStack.Screen
          name="Event"
          component={EventDetailsScreen}
          options={({ route }) => ({
            title: route.params.title,
            headerStyle: {
              backgroundColor: colors.theme2.babyPowder,
            },
            headerTitleStyle: {
              color: colors.theme2.raisinBlack,
            },
          })}
        />
      </ItineraryStack.Group>
      <ItineraryStack.Group
        screenOptions={({ navigation }) => ({
          presentation: 'modal',
          headerLeft: null,
          headerRight: () => (
            <Pressable onPress={() => navigation.pop()}>
              <Ionicons
                name="close"
                size={28}
                color={colors.weddingColors.xanadu}
              />
            </Pressable>
          ),
        })}
      >
        <ItineraryStack.Screen
          name="DressCode"
          component={DressCodeScreen}
          options={{
            title: 'Wedding Attire',
          }}
        />
      </ItineraryStack.Group>
    </ItineraryStack.Navigator>
  );

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Itinerary') {
              iconName = focused ? 'calendar' : 'calendar-outline';
            } else if (route.name === 'Info') {
              iconName = focused
                ? 'information-circle'
                : 'information-circle-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.weddingColors.xanadu,
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: colors.theme2.babyPowder },
        })}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Itinerary"
          component={itineraryStackScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen name="Info" component={DetailsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
