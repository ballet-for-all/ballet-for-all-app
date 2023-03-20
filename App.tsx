import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SafeAreaProvider} from "react-native-safe-area-context";
import SignUpScreen from './src/screens/SignUp/SignUp/SignUpScreen';
import LocationSetting from './src/screens/SignUp/LocationSetting/LocationSetting';
import BackButton from './src/components/BackButton';

export type StackParamList = {
  SignUp: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

export default function App () {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SignUp">
          {/* <Stack.Screen component={SignUpScreen} name="SignUp" options={{ headerShown: false }} /> */}
          <Stack.Screen 
          name="LocationSetting" 
          component={LocationSetting}
          options={{ 
            headerShown: true, 
            headerLeft: ({navigation}) => <BackButton navigation={navigation} />,
            headerStyle: {shadowColor: 'transparent' },
            title: '내 위치 설정하기', 
          }}
        />     
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
