import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { StyleSheet } from 'react-native';

export const LocationSettingStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  searchWrap: {
    flex: 0.1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  siGoonGooDong:{
    flex: 0.8,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  si:{
    backgroundColor: '#fff',
    flex: 1,
    borderRightColor: '#eee',
    borderRightWidth: 1,
  },
  goonGo:{
    flex: 1,
    backgroundColor: '#fff',
    borderRightColor: '#eee',
    borderRightWidth: 1,
  },
  dong:{
    flex: 1,
    backgroundColor: '#fff'
  },
  input:{
    height: 48,
    backgroundColor: "#eee",
    padding: 16,
    width: '70%',
  },
  myLocation:{
    marginLeft: 16,
    width: 36,
    height: 36,
    opacity: 0.4
  },
  submit: {
    flex: 0.1,
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
})