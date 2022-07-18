import 'react-native-get-random-values';
import { v4 as createID } from 'uuid';

import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const TodoForm = () => {
  const [text, setText] = useState('');

  const handleInputChange = (text: string) => setText(() => text);

  return (
    <View>
      <TextInput
        multiline
        placeholder='Enter todo...'
        onChangeText={handleInputChange}
      />
      <Button title='Add Todo' />
    </View>
  );
};

export default TodoForm;
