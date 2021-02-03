import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Gap, TextInput, Button} from '../../components';
import {COLORS} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header title="Sign Up" subTitle="Register and eat" onBack />
      <View style={styles.container}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <View style={styles.containerPhoto}>
              <Text style={styles.addPhoto}>Add photo</Text>
            </View>
          </View>
        </View>
        <TextInput label="Fullname" placeholder="Type your fullname" />
        <Gap height={16} />
        <TextInput label="Email" placeholder="Type your email" />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password " />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.replace('MainApp')}
        />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 24,
    marginTop: 24,
    flex: 1,
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
  },
  addPhoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: COLORS.secondary,
    textAlign: 'center',
  },
});
