import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../assets';
import {Gap} from '../../components/atoms';
import {FoodCard, HomeProfile, HomeTab} from '../../components/molecules';

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.card}>
              <Gap width={24} />
              <FoodCard image={FoodDummy1} title="Chicken Sauce" rate="4.2" />
              <FoodCard image={FoodDummy2} title="Spaghetti" rate="4.0" />
              <FoodCard image={FoodDummy3} title="Coffee" rate="4.1" />
              <FoodCard image={FoodDummy4} title="Mochachino" rate="4.7" />
              <Gap width={24} />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTab />
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: 'yellow',
  },
  card: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
