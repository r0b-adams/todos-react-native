import styles from './FooterStyles';
import { NavBar } from '../NavBar';
import { View } from 'react-native';

const Footer: React.FC<{ setView: React.Dispatch<React.SetStateAction<string>> }> = ({ setView }) => {
  return (
    <View style={styles.view}>
      <NavBar setView={setView} />
    </View>
  );
};

export default Footer;
