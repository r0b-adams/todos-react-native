import { View, Text } from 'react-native';
import header from './HeaderStyles';

const Header = () => {
  return (
    <View style={header}>
      <Text>My Todos</Text>
    </View>
  );
};

export default Header;
