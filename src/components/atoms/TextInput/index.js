import React from 'react';
import {StyleSheet, Text, View, TextInput as TextinputRN} from 'react-native';

const TextInput = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.title}>{label}</Text>
      <TextinputRN style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Poppins-Reguler',
    fontSize: 16,
    paddingBottom: 6,
  },
  input: {
    fontFamily: 'Poppins-Reguler',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
});
