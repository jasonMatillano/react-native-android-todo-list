import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodo( {inputText,submitHandler} ) { //receive prop func from App.js

    const [text, setText] = useState('');

    const changeHandler = (text) => {
        setText(text);
    }

    return (
        <View>
          <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}// track the change and value of TextInput
          ></TextInput>
          <Button
            onPress={() => submitHandler(inputText)}
            title='add todo'
            color='coral'
          ></Button>
        </View>
    );

}

const styles = StyleSheet.create({
    input: {
      marginBottom: 10,
      paddingHorizontal: 8,
      paddingVertical: 6,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
});
    
