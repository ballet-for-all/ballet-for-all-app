import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

export const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative',
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    opacity: 0.6,
  },
  mainCopy: {
    flex: 1,
    color: '#fff',
    fontSize: '38',
    lineHeight: '46',
    fontWeight: 'bold',
    position: 'absolute',
    marginTop: height * 0.08, 
    marginLeft: width * 0.05, 
  },
  logo: {
    flex: 1,
    position: 'absolute',
    top: '46.5%',
    left: '47.5%',
    transform: [{ translateX: -25 }, { translateY: -25 }],
  },
  loginWrap: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    left: '6.5%',
    justifyContent: 'center',
},
  kakaoBtn: {
    backgroundColor: '#FDE500',
    width: 327,
    height: 56,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appleBtn: {
    backgroundColor: 'white',
    width: 327,
    height: 56,
    borderRadius: 4,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  kakaoLogo: {
    width: 40,
    height: 40,
  }
});

