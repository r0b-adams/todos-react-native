import { StyleSheet, View } from 'react-native';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import { vh } from './helpers/viewportUnits';

export default function App() {
  return (
    <View style={styles.app}>
      <Header />
      <Main />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: vh(100),
  },
});
