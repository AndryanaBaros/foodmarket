import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';
import {COLORS} from '../../../utils';

const Rating = ({rate}) => {
  return (
    <View style={styles.ratingContainer}>
      <View style={styles.startcontainer}>
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOn />
        <IcStarOff />
      </View>
      <Text style={styles.rating}>{rate}</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  ratingContainer: {
    paddingTop: 6,
    flexDirection: 'row',
    paddingBottom: 12,
  },
  startcontainer: {
    flexDirection: 'row',
    paddingLeft: 12,
  },
  rating: {
    paddingLeft: 4,
    color: COLORS.secondary,
  },
});
