import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {COLORS} from '../../../utils';
import ListFood from '../ListFood';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: 'black',
      height: 3,
      width: '15%',
      marginLeft: '6%',
    }}
    style={{backgroundColor: 'white', elevation: 1.2}}
    tabStyle={{borderColor: 'black', width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppins-Medium',
          color: focused ? 'black' : COLORS.secondary,
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  return (
    <View style={styles.container}>
      <ListFood
        image={FoodDummy1}
        title="Chicken"
        subTitle="IDR 200.000"
        rate="4.2"
      />
      <ListFood
        image={FoodDummy2}
        title="Spaghetti"
        subTitle="IDR 150.000"
        rate="4.7"
      />
      <ListFood
        image={FoodDummy3}
        title="Coffee"
        subTitle="IDR 50.000"
        rate="4.8"
      />
      <ListFood
        image={FoodDummy4}
        title="Mocachino"
        subTitle="IDR 35.000"
        rate="4.1"
      />
      <ListFood
        image={FoodDummy2}
        title="Spaghetti"
        subTitle="IDR 150.000"
        rate="4.7"
      />
    </View>
  );
};

const Popular = () => {
  return (
    <View style={styles.container}>
      <ListFood
        image={FoodDummy4}
        title="Mocachino"
        subTitle="IDR 35.000"
        rate="4.1"
      />
      <ListFood
        image={FoodDummy2}
        title="Spaghetti"
        subTitle="IDR 150.000"
        rate="4.7"
      />
      <ListFood
        image={FoodDummy1}
        title="Chicken"
        subTitle="IDR 200.000"
        rate="4.2"
      />
      <ListFood
        image={FoodDummy3}
        title="Coffee"
        subTitle="IDR 50.000"
        rate="4.8"
      />
    </View>
  );
};

const Recomended = () => {
  return (
    <View style={styles.container}>
      <ListFood
        image={FoodDummy3}
        title="Coffee"
        subTitle="IDR 50.000"
        rate="4.8"
      />
      <ListFood
        image={FoodDummy2}
        title="Spaghetti"
        subTitle="IDR 150.000"
        rate="4.7"
      />
      <ListFood
        image={FoodDummy1}
        title="Chicken"
        subTitle="IDR 200.000"
        rate="4.2"
      />
      <ListFood
        image={FoodDummy4}
        title="Mocachino"
        subTitle="IDR 35.000"
        rate="4.1"
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
  });

  return (
    <TabView
      style={{backgroundColor: 'white'}}
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default HomeTab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
});
