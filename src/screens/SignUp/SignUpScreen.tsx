import React from "react";
import { StatusBar } from 'expo-status-bar';
import {StackParamList} from "../../../App";
import { SignUpStyles } from './SignUpStyles';
import {useSafeAreaInsets} from "react-native-safe-area-context";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import { TouchableOpacity, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import bgImage from '@/assets/images/background-image.png';
import LoginButton from '@/components/LoginButton/LoginButton';
import kakaoLogo from '@/assets/icons/kakaoLogo.png';
import appleLogo from '@/assets/icons/appleLogo.png';
import Logotype from '@/assets/icons/Logotypes';

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

      {/* 로고 */}
      <View style={SignUpStyles.logo}>
        <Logotype width="100%" height="100%" />
      </View>

      <View style={SignUpStyles.loginWrap}>
        <LoginButton 
          title="카카오 아이디로 로그인" 
          logo={kakaoLogo}
          buttonStyle={SignUpStyles.kakaoBtn} 
          onPress={submitHandler} 
        />
        <LoginButton 
          title="Apple ID로 로그인" 
          logo={appleLogo}
          buttonStyle={SignUpStyles.appleBtn} 
          onPress={submitHandler} 
        />
      </View>
      
    </View>

  )
}

export default SignUpScreen;
