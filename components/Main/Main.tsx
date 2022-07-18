import React from 'react';
import { View, Text } from 'react-native';
import { Todo } from '../../@types';
import TodoContainer from '../TodoContainer';
import TodoForm from '../TodoForm';
import styles from './MainStyles';

const Main: React.FC<{ view: string; todos: Todo[] }> = ({ view, todos }) => {
  return (
    <View style={styles.main}>
      <Text>{view}</Text>
      {view === 'In-Progress' && <TodoForm />}
      <TodoContainer todos={todos} />
    </View>
  );
};

export default Main;
