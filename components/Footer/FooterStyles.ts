import { StyleSheet } from 'react-native';
import { vh } from '../../helpers/viewportUnits';

const FooterStyles = StyleSheet.create({
  view: {
    height: vh(10),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 2,
    borderTopColor: '#aaa',
    borderStyle: 'solid',
  },
});

export default FooterStyles;
