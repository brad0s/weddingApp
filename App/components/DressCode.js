import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default function DressCode() {
  return (
    <View style={styles.container}>
      <Text style={styles.request}>
        The bride & groom would like to respectfully request all attendees of
        the private wedding ceremony to dress in the weddding colors for this
        event. The wedding colors are listed below:
      </Text>
      <View style={styles.paletteContainer}>
        <View
          style={[
            styles.palette,
            {
              backgroundColor: colors.weddingColors.white,
              borderColor: colors.theme2.pkatinum,
              borderWidth: 1,
              marginBottom: 2,
            },
          ]}
        >
          <Text style={styles.paletteText}>white</Text>
        </View>
        <View
          style={[
            styles.palette,
            { backgroundColor: colors.weddingColors.almond },
          ]}
        >
          <Text style={styles.paletteText}>almond</Text>
        </View>
        <View
          style={[
            styles.palette,
            { backgroundColor: colors.weddingColors.khakiWeb },
          ]}
        >
          <Text style={styles.paletteText}>khaki</Text>
        </View>
        <View
          style={[
            styles.palette,
            { backgroundColor: colors.weddingColors.ashGray },
          ]}
        >
          <Text style={styles.paletteText}>ash gray</Text>
        </View>
        <View
          style={[
            styles.palette,
            { backgroundColor: colors.weddingColors.morningBlue },
          ]}
        >
          <Text style={[styles.paletteText, styles.contrast]}>sage</Text>
        </View>
        <View
          style={[
            styles.palette,
            { backgroundColor: colors.weddingColors.xanadu },
          ]}
        >
          <Text style={[styles.paletteText, styles.contrast]}>xanadu</Text>
        </View>
        <View
          style={[
            styles.palette,
            { backgroundColor: colors.weddingColors.artichoke },
          ]}
        >
          <Text style={[styles.paletteText, styles.contrast]}>artichoke</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  paletteContainer: {
    flex: 1,
    flexDirection: 'column',
    margin: 20,
  },
  palette: {
    flex: 1,
    marginVertical: 1,
    borderRadius: 2,
    padding: 5,
    height: 50,
    justifyContent: 'flex-end',
  },
  paletteText: { fontSize: 12, fontWeight: '600', letterSpacing: 2 },
  contrast: {
    color: colors.theme2.babyPowder,
  },
  request: {
    marginHorizontal: 20,
    fontFamily: 'Roboto_400Regular',
    letterSpacing: 1,
    color: colors.theme2.raisinBlack,
  },
});
