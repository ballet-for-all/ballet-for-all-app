import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Icon, Image, StyleSheet, Text, View } from 'react-native';
import { TermsStyles } from './TermsStyles';
import CustomButton from '../../../Components/LoginButton/LoginButton';
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function TermsScreen() {

  
  return (

    <View style={TermsStyles.container}> 
      <StatusBar style="black" />

      {/* 약관동의 제목,부제목 */}

      <View>
        <Text style={TermsStyles.title}>약관 동의</Text>
          <Text style={TermsStyles.subtitle}>
            모두의 발레 서비스 제공을 위해{'\n'}
            이용약관에 동의해주세요.
          </Text>
      </View>

      {/* 약관동의 체크버튼 */}
      <View style={TermsStyles.checkTitle}>
        
          <View style={TermsStyles.termsWrap}>

            <BouncyCheckbox 
              text="약관 전체 동의"
              fillColor="#222" 
              size={20} 
              textStyle={{textDecorationLine: "none"}}
            />

            <Text style={TermsStyles.checkText}>만 14세 이상입니다. (필수)</Text>
            <Text style={TermsStyles.checkText}>위치정보 서비스 이용약관에 동의합니다.(필수)</Text>
            <Text style={TermsStyles.checkText}>개인정보 수집 ∙ 이용에 동의합니다. (필수)</Text>
            <Text style={TermsStyles.checkText}>개인정보 제3자 제공에 동의합니다. (필수)</Text>
            <Text style={TermsStyles.checkText}>이벤트, 할인 혜택 알림 수신에 동의합니다. (선택)</Text>
          </View>
        
          <View style={TermsStyles.detailWrap}>
            <Text style={TermsStyles.checkDetail}>보기</Text>
            <Text style={TermsStyles.checkDetail}>보기</Text>
            <Text style={TermsStyles.checkDetail}>보기</Text>
          </View>
      </View>
      {/* 가입하기 버튼 */}
      

      <View style={TermsStyles.submitWrap}>
        <CustomButton 
          title="가입하기" 
          onPress={()=>{console.log('hi')}} 
          buttonStyle={TermsStyles.submit}
          textStyle={TermsStyles.submitText} />
      </View>
      
    </View>
  );
}