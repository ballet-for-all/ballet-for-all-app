import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const LoginButton = ({ title, onPress, buttonStyle, textStyle, logo }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} style={[ButtonStyles.button, buttonStyle]} onPress={onPress}>
      <Image source={logo} style={ButtonStyles.logo}/>
      <Text style={[ButtonStyles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const ButtonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222',
  },
  logo: {
    width: 26,
    height: 26,
    marginRight: 6
  }
});

export default LoginButton;
