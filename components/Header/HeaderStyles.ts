import { StyleSheet } from 'react-native';
import { vh } from '../../helpers/viewportUnits';

const HeaderStyles = StyleSheet.create({
  view: {
    marginTop: 25,
    height: vh(5),
    width: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#aaa',
    borderStyle: 'dashed',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default HeaderStyles;
