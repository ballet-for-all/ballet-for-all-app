import React from "react";
import { StatusBar } from 'expo-status-bar';
import {StackParamList} from "../../../App";
import { SignUpStyles } from './SignUpStyles';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { TouchableOpacity, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import Logo from '@/assets/icons/logotypes.svg';
import bgImage from '@/assets/images/background-image.png';

export type SignUpScreenProps = NativeStackNavigationProp<StackParamList, "SignUp">

  const SignUpScreen = (_props: SignUpScreenProps) => {
  
    const insets = useSafeAreaInsets();

    const navigation = useNavigation();
    
    const submitHandler = () => {
      console.log('hi');      
    }

  return (
    
    <View style={SignUpStyles.container}>
      {/* StatusBar */}
      <StatusBar style="light" />

      {/* 백그라운드 이미지 */}
      <View style={SignUpStyles.image}>
        <ImageBackground source={bgImage} style={SignUpStyles.image} />
      </View>

      {/* 메인카피 */}
      <View style={SignUpStyles.mainCopy}>
        <Text style={SignUpStyles.mainCopy}>
          매일{'\n'}
          우아해질{'\n'}
          당신을 위해
        </Text>
      </View>
    </View>

  )
}

export default SignUpScreen;
