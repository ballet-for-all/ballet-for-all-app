import { StyleSheet } from 'react-native'

export const SignUpStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    position: 'relative'
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
    opacity: 0.4
  },
  loginWrap: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 80,
    left: '6.5%',
    justifyContent: 'center'
  },
  kakaoBtn: {
    backgroundColor: '#FDE500',
    width: 327,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appleBtn: {
    backgroundColor: 'white',
    width: 327,
    height: 56,
    borderRadius: 8,
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: [{ translateY: -50 }, { translateX: -60 }]
  }
})
