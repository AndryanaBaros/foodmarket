import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProfileDummy} from '../../assets';
import ProfileTab from '../../components/molecules/ProfileTab';
import {COLORS} from '../../utils';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image style={styles.containerPhoto} source={ProfileDummy} />
          </View>
        </View>
        <View style={styles.desc}>
          <Text style={styles.name}>Andryana Baros</Text>
          <Text style={styles.email}>andry.baros@gmail.com</Text>
        </View>
      </View>
      <View style={styles.tabProfile}>
        <ProfileTab />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingBottom: 24,
  },
  photo: {
    alignItems: 'center',
    paddingBottom: 16,
    paddingTop: 26,
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: COLORS.secondary,
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPhoto: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: COLORS.lightGray,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: COLORS.secondary,
    textAlign: 'center',
  },
  tabProfile: {
    flex: 1,
    paddingTop: 24,
  },
  desc: {
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: 'black',
  },
  email: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    color: COLORS.secondary,
  },
});
