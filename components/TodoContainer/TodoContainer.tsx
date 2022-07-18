import { View, Text } from 'react-native';
import React from 'react';
import { Todo } from '../../@types';

const TodoContainer: React.FC<{ todos: Todo[] }> = ({ todos }) => {
  console.log(todos);
  return (
    <View>
      <Text>CONTAINER</Text>
    </View>
  );
};

export default TodoContainer;
