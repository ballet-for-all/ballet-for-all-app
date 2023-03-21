import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Logo from '../../../assets/logotypes.svg';
import { SplashStyles } from '../SplashScreen/SplashStyles';


const bgImage = require('../../../public/images/background-image.png');

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SignUpScreen');
    }, 3000);
  }, []);
  return (
    <View style={SplashStyles.container}>
      {/* StatusBar */}
      <StatusBar style="light" />

      {/* 백그라운드 이미지 */}
      <View style={SplashStyles.image}>
        <ImageBackground source={bgImage} style={SplashStyles.image} />
      </View>

      {/* 메인카피 */}
      <View style={SplashStyles.mainCopy}>
        <Text style={SplashStyles.mainCopy}>
          매일{'\n'}
          우아해질{'\n'}
          당신을 위해
        </Text>
      </View>

      {/* 로고 */}
      <View style={SplashStyles.logo}>
        <Logo style={SplashStyles.logo}></Logo>
      </View>
    </View>
    
  );
}