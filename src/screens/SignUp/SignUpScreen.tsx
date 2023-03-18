import React from "react";
import {Text} from "react-native"
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {StackParamList} from "../../../App";
import {useSafeAreaInsets} from "react-native-safe-area-context";

export type SignUpScreenProps = NativeStackNavigationProp<StackParamList, "SignUp">

const SignUpScreen = (_props: SignUpScreenProps) => {
  const insets = useSafeAreaInsets()

  return (
    <Text style={{
      paddingTop: insets.top,
      paddingBottom: insets.bottom,
      paddingLeft: insets.left,
      paddingEnd: insets.right,
    }}>
      sign up screen
    </Text>
  )
}

export default SignUpScreen
