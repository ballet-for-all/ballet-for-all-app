import React from 'react';
import styles from './LocationSettingStyles';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet, 
    View, 
    Text, 
    TextInput, 
    Image, 
    TouchableOpacity,
    ScrollView,
 } from 'react-native';
import setLocationBtn from '@/assets/icons/locationIcon.png';


function LocationSetting() {

  return (

    <View style={styles.container}> 

      <StatusBar style="black" />

      <View style={styles.searchWrap}>
        <TextInput 
        style={styles.input}
        placeholder="동이름(읍,면)으로 검색"></TextInput>

      <View>
        <Image source={setLocationBtn} style={styles.myLocation} />
      </View>
    </View>

    <View style={styles.siGoonGooDong}>
        <ScrollView style={styles.si}>
          <Text>테스트텍스트</Text>
        </ScrollView>
        <ScrollView style={styles.goonGo} />
        <ScrollView style={styles.dong} />
    </View>

     
    </View>

  );
}

export default LocationSetting;