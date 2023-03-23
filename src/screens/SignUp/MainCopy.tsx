import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

const { width, height } = Dimensions.get('window')

const Styles = StyleSheet.create({
  mainCopy: {
    flex: 1,
    color: '#fff',
    fontSize: 38,
    lineHeight: 46,
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: height * 0.08,
    marginLeft: width * 0.05
  }
})

export const MainCopy = () => {
  return (
    <View style={Styles.mainCopy}>
      <Text style={Styles.mainCopy}>
        매일{'\n'}
        우아해질{'\n'}
        당신을 위해
      </Text>
    </View>
  )
}
