import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {COLORS} from '../../utils';

const SignIn = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Header title="Sign In" subTitle="find your best ever meal" />
      <View style={styles.container}>
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Sign in" onPress={() => navigation.navigate('SignUp')} />
        <Gap height={12} />
        <Button
          label="Create New Account"
          color={COLORS.secondary}
          textColor="white"
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    backgroundColor: 'white',
    paddingVertical: 24,
    marginTop: 24,
    flex: 1,
  },
});
