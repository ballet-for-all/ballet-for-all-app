import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Stylesheet, 
    View, 
    Text, 
    CheckBox, 
    TextInput, 
    Image, 
    TouchableOpacity,
    ScrollView,
 } from 'react-native';
import { LocationSettingStyles } from "./LocationSettingStyles";
import CustomButton from '../../../Components/LoginButton/LoginButton';

export default function LocationSetting() {

  return (
    <View style={LocationSettingStyles.container}> 


      <StatusBar style="black" />

      {/* 검색영역 */}
      <View style={LocationSettingStyles.searchWrap}>
        <TextInput 
        style={LocationSettingStyles.input}
        placeholder="동이름(읍,면)으로 검색"></TextInput>

      {/* 시군구동 선택영역*/}
        <View>
          <Image source={require('../../../assets/icons/myLocation.png')} style={LocationSettingStyles.myLocation}></Image>
        </View>
      </View>
      <View style={LocationSettingStyles.siGoonGooDong}>
        <ScrollView style={LocationSettingStyles.si} />
        <ScrollView style={LocationSettingStyles.goonGo} />
        <ScrollView style={LocationSettingStyles.dong} />
      </View>


      {/* 설정하기 버튼 */}
      <View style={LocationSettingStyles.submit}>
      <CustomButton 
      title="설정하기" 
      onPress={()=>{console.log('hi')}} 
      buttonStyle={LocationSettingStyles.submit}
      textStyle={LocationSettingStyles.submitText} />
      </View>

    </View>


  );
}