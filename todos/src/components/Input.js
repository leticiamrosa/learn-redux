import React from 'react';
import { TextInput, StyleSheet, } from 'react-native';

const Input = ({onChangeText, value}) => (
    <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
    />
);

const styles = StyleSheet.create({
   input: {
      paddingTop: 32,
      paddingBottom: 16,
      paddingLeft: 16,
      paddingRight: 16,
   } 
});

export default Input;