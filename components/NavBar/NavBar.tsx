import React from 'react';
import { View } from 'react-native';
import NavButton from '../NavButton/NavButton';
import styles from './NavBarStyles';

const NavBar: React.FC<{
  setView: React.Dispatch<React.SetStateAction<string>>;
}> = ({ setView }) => {
  return (
    <View style={styles.view}>
      <NavButton title='Todos' setView={setView} />
      <NavButton title='Completed' setView={setView} />
    </View>
  );
};

export default NavBar;
