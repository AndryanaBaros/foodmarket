import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4} from '../../../assets';
import {COLORS} from '../../../utils';
import ListFood from '../ListFood';
import ListProfile from '../ListProfile';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: 'black',
      height: 3,
      width: '15%',
      marginLeft: '17%',
    }}
    style={{backgroundColor: 'white', elevation: 1.2, paddingLeft: 12}}
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

const Account = () => {
  return (
    <View style={styles.container}>
      <ListProfile label="Edit Profile" />
      <ListProfile label="Home Address" />
      <ListProfile label="Security" />
      <ListProfile label="Payments" />
    </View>
  );
};

const BRSCoffee = () => {
  return (
    <View style={styles.container}>
      <ListProfile label="Home Address" />
      <ListProfile label="Edit Profile" />
      <ListProfile label="Security" />
      <ListProfile label="Payments" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const ProfileTab = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Account'},
    {key: '2', title: 'BRSCoffee'},
  ]);

  const renderScene = SceneMap({
    1: Account,
    2: BRSCoffee,
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

export default ProfileTab;

const styles = StyleSheet.create({
  container: {
    paddingTop: 8,
  },
});
