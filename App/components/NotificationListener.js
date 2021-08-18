import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Notifications from 'expo-notifications';
import RegisterPushNotifications from '../config/RegisterPushNotifications';

export default function NotificationListener() {
  const [notifications, setNotifications] = useState({});

  RegisterPushNotifications();

  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: false,
    }),
  });

  useEffect(() => {
    Notifications.addNotificationReceivedListener((notification) =>
      setNotifications(notification)
    );
    Notifications.addNotificationResponseReceivedListener((response) =>
      console.log(response)
    );
  });

  return (
    <View>
      eturn (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* <Text>Your expo push token: {this.state.expoPushToken}</Text> */}
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Text>Title: {notifications.request.content.title}</Text>
          <Text>Body: {notifications.request.content.body}</Text>
          <Text>
            Data: {JSON.stringify(notifications.request.content.data)}
          </Text>
        </View>
      </View>
    </View>
  );
}
