import React from 'react'
import { TouchableOpacity, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native'

const ButtonStyles = StyleSheet.create({
  button: {
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#222'
  },
  logo: {
    width: 26,
    height: 26,
    marginRight: 6
  }
})

interface Props {
  title: string
  onPress: () => void
  buttonStyle: object
  logo: ImageSourcePropType
}

export const LoginButton = ({ title, onPress, buttonStyle, logo }: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[ButtonStyles.button, buttonStyle]}
      onPress={onPress}
    >
      <Image source={logo} style={ButtonStyles.logo} />
      <Text style={[ButtonStyles.buttonText]}>{title}</Text>
    </TouchableOpacity>
  )
}
