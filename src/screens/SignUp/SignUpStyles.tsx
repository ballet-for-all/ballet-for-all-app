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
});

