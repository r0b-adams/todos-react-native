import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import { vh } from './helpers/viewportUnits';
import { Todos } from './@types';

const styles = StyleSheet.create({
  app: {
    height: vh(100),
  },
});

export default function App() {
  const [view, setView] = useState('Todos');
  const [todos, setTodos] = useState<Todos>({
    inProgress: [],
    completed: [],
  });

  return (
    <View style={styles.app}>
      <Header />
      {view === 'Todos' && <Main view={view} todos={todos.inProgress} />}
      {view === 'Completed' && <Main view={view} todos={todos.completed} />}
      <Footer setView={setView} />
    </View>
  );
}
