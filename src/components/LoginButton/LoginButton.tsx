import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const LoginButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={[ButtonStyles.button, buttonStyle]} onPress={onPress}>
      <Text style={[ButtonStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonStyles = StyleSheet.create({
  button: {
    backgroundColor: '#fde500',  
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
});

export default LoginButton;
