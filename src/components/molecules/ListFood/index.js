import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../../../utils';
import Rating from '../Rating';

const ListFood = ({image, title, subTitle, rate}) => {
  return (
    <View style={styles.listFood}>
      <Image style={styles.image} source={image} />
      <View style={styles.desc}>
        <Text style={styles.textFood}>{title}</Text>
        <Text style={styles.textIDR}>{subTitle}</Text>
      </View>
      <Rating rate={rate} />
    </View>
  );
};

export default ListFood;

const styles = StyleSheet.create({
  listFood: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
  },
  desc: {
    paddingLeft: 12,
    flex: 1,
  },
  textFood: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    color: 'black',
  },
  textIDR: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    color: COLORS.secondary,
  },
});
