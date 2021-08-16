import React, { useState } from 'react';
import { Text } from 'react-native';
import moment from 'moment';

export default function Countdown() {
  const now = moment();
  const weddingDate = moment(new Date(2021, 9, 16 + 1, 0, 0));
  const [countdown, setCountdown] = useState(weddingDate.diff(now, 'days'));

  if (countdown < 0) {
    setCountdown(0);
  }

  return <Text>{countdown}</Text>;
}
