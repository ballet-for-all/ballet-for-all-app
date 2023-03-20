import { StyleSheet, Dimensions } from 'react-native'; 

const styles = StyleSheet.create({
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
  input:{
    height: 48,
    backgroundColor: "#eee",
    padding: 16,
    width: '70%',
  },
  myLocation:{
    width:56,
    height:56,
    resizeMode: 'cover',
    marginLeft: 8
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
})

export default styles;