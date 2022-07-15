import { View, Text } from 'react-native';
import styles from './HeaderStyles';

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>React Native Todos!</Text>
    </View>
  );
};

export default Header;
