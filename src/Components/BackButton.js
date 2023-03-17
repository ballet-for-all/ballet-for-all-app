import React from 'react';
import { TouchableOpacity, Text, ImageBackground, Image } from 'react-native';
import backButton from '../assets/icons/backspace.png'
import { useNavigation } from '@react-navigation/native';

export default function BackButton() {

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => {navigation.goBack()}}>
      <Image source={backButton} style={{ width: 25, height: 25, marginLeft: 24, }} />
    </TouchableOpacity>
  );
}
