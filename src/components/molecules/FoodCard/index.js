import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {FoodDummy1, IcStarOff, IcStarOn} from '../../../assets';
import {COLORS} from '../../../utils';
import Rating from '../Rating';

const FoodCard = ({image, title, rating, rate}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.text}>{title}</Text>
      <Rating rate={rate} />
    </View>
  );
};

export default FoodCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 14,
    overflow: 'hidden',
    marginRight: 24,
  },
  text: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    paddingLeft: 12,
    paddingTop: 12,
  },
  image: {
    width: 200,
    height: 140,
    resizeMode: 'cover',
  },
});
