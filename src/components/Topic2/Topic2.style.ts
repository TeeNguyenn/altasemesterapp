import {

  StyleSheet,

} from 'react-native';


export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    height: '100%',
    padding: 10
  },
  subcontainer: {
    flex: 1.3,
  },
  subcontainer1: {
    flex: 1.7,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // gap: 20,
    paddingTop: 10,
  },
  item: {
    width: '20%',
    aspectRatio: '1/1',
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  resultText: {
    color: 'white',
    fontSize: 50,

  },
  largeItem: {
    width: '40%',
    aspectRatio: '2/1',
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});