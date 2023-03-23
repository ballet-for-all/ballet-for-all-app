import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ImageBackground, ImageSourcePropType, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { LoginButton } from './LoginButton'
import { MainCopy } from './MainCopy'
import { SignUpStyles } from './SignUpStyles'
import { StackParamList } from '../../../App'
import appleLogo from '../../assets/icons/appleLogo.png'
import kakaoLogo from '../../assets/icons/kakaoLogo.png'
import bgImage from '../../assets/images/background-image.png'

export type SignUpScreenProps = NativeStackNavigationProp<StackParamList, 'SignUp'>

export const SignUpScreen = (_props: SignUpScreenProps) => {
  const insets = useSafeAreaInsets()

  const submitHandler = () => {
    // TODO(supermantoman): 구현하기.
  }

  return (
    <View
      style={{
        ...SignUpStyles.container,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingEnd: insets.right
      }}
    >
      <StatusBar style="light" />
      <ImageBackground source={bgImage} style={SignUpStyles.image} />
      <MainCopy />
      {/* TODO(supermantoman): Logotype 고치기 */}
      {/* <View style={SignUpStyles.logo}> */}
      {/* <Logotype height="100%" width="100%" /> */}
      {/* </View> */}
      <View style={SignUpStyles.loginWrap}>
        <LoginButton
          buttonStyle={SignUpStyles.kakaoBtn}
          logo={kakaoLogo as ImageSourcePropType}
          title="카카오 아이디로 로그인"
          onPress={submitHandler}
        />
        <LoginButton
          buttonStyle={SignUpStyles.appleBtn}
          logo={appleLogo as ImageSourcePropType}
          title="Apple ID로 로그인"
          onPress={submitHandler}
        />
      </View>
    </View>
  )
}
