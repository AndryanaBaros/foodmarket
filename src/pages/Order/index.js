import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, OrderTab} from '../../components';
import Home from '../Home';

const Order = () => {
  return (
    <View style={styles.page}>
      <Header title="Your Orders" subTitle="wait for the best meal" />
      <View style={styles.tabContainer}>
        <OrderTab />
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    paddingTop: 24,
  },
});
