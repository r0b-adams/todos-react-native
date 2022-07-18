import { Pressable, Text } from 'react-native';
import styles from './NavButtonStyles';

const NavButton: React.FC<{
  title: string;
  setView: React.Dispatch<React.SetStateAction<string>>;
}> = ({ title, setView }) => {
  return (
    <Pressable style={styles.pressable} onPress={() => setView(() => title)}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default NavButton;
