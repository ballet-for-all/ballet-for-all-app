import { StyleSheet } from 'react-native';

export const TermsStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    paddingLeft: 24,
    paddingRight: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 40,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    letterSpacing: -0.1,
    lineHeight: 28
  },
  backSpaceBtn: {
    width: 24,
    height: 24,
  },
  submitWrap: {
    flex: 1,
  },
  submit: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#e5e5e5',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    width: 375,
  },
  submitText: {
    fontSize: 18,
    paddingBottom: 24,
    color: '#999'
  },
  checkText: {
    paddingBottom: 16,
    fontSize: 16,
  },
  termsWrap: {

  },
  checkTitle: {
    paddingTop: 220,
    fontSize: 16,
    flexDirection: 'row',
  },
  detailWrap:{
    marginTop: 72
  },
  checkDetail: {
    fontSize: 16,
    paddingBottom: 20,
    textDecorationLine: 'underline'
  }
});

