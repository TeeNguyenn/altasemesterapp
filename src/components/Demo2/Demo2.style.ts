import {

  StyleSheet,

} from 'react-native';


export const styles = StyleSheet.create({

  home: {
  },
  header: {
    padding: 20,
    backgroundColor: 'white'

  },
  navList: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 0,

  },
  navItem: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',

  },
  container: {
    backgroundColor: '#f3f3f3',
    paddingHorizontal: 20,
    paddingBottom: 30,
    paddingTop: 20,
  },
  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 20,
    gap: 10,
    marginTop: 10

  },
  item: {
    width: '50%',
    aspectRatio: '1/1',
    backgroundColor: '#abb8c3',
    padding: 3,
  },
  img: {
    width: '100%',
    height: '100%'
  },
  footer: {
    padding: 20,
    backgroundColor: '#fefaf3',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  footerWrapper: {
    width: '50%',
    marginTop: 10
  },
  title: {
    marginBottom: 20,
    color: 'black',
    fontSize: 16,
    fontWeight: '600'
  },
  footerList: {

  },
  footerItem: {

  },
  footerLink: {
    paddingVertical: 4,
    color: '#8b8b8b',

  },
});