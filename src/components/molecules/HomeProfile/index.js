import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {ProfileDummy} from '../../../assets';
import {COLORS} from '../../../utils';

const HomeProfile = () => {
  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.title}>BRS Coffee</Text>
        <Text style={styles.subTitle}>Let’s get some foods</Text>
      </View>
      <Image style={styles.image} source={ProfileDummy} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 22,
    color: COLORS.black,
  },
  subTitle: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 14,
    color: COLORS.secondary,
  },
  image: {
    width: 55,
    height: 55,
  },
});
