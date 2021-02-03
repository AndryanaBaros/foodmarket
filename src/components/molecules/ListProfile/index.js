import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IcNext} from '../../../assets';

const ListProfile = ({label}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <IcNext />
    </View>
  );
};

export default ListProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
    paddingHorizontal: 24,
  },
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
  },
});
