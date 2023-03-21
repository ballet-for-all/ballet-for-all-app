import React from 'react';
import { StatusBar }  from 'expo-status-bar';
import { TouchableOpacity, Button, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Logo from '../../../../assets/logotypes.svg';
import { SignUpStyles } from '../SignUp/SignUpStyles';
import CustomButton from '../../../Components/LoginButton/LoginButton';
import { useNavigation } from '@react-navigation/native';

const bgImage = require('../../../../public/images/background-image.png');

export default function SignUpScreen() {

  const navigation = useNavigation();

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
        <Logo style={SignUpStyles.logo}></Logo>
      </View>

      {/* 로그인 APIs */}
      <View style={SignUpStyles.loginWrap}>
        <CustomButton title="카카오 아이디로 로그인" buttonStyle={SignUpStyles.kakaoBtn} onPress={() => {navigation.navigate('TermsScreen')}}>
          <Image source={require('../../../assets/icons/kakaoLogo.png')} style={SignUpStyles.kakaoLogo} />
        </CustomButton>
        <CustomButton title="Apple ID로 로그인" buttonStyle={SignUpStyles.appleBtn} onPress={() => {navigation.navigate('TermsScreen')}}>
          <Image source={require('../../../assets/icons/appleLogo.png')} style={SignUpStyles.appleLogo} />
        </CustomButton>
      </View>

    </View>
    
  );
}