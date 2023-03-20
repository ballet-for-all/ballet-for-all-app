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
  }
})

export default styles;