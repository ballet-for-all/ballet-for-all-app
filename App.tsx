import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { FirebaseProvider } from './firebase/FirebaseProvider'
import { firebaseContainer } from './firebase/firebaseContainer'
import SignUpScreen from './screens/SignUp/SignUpScreen'

export type StackParamList = {
  SignUp: undefined
}

const Stack = createNativeStackNavigator<StackParamList>()

export default function App () {
  return (
    <FirebaseProvider value={firebaseContainer}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SignUp">
            <Stack.Screen component={SignUpScreen} name="SignUp" options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </FirebaseProvider>
  )
}
