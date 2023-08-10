import React, { useState, useRef  } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function AddTodo( {submitHandler} ) { //receive prop func from App.js
    const textInputRef = useRef(null);

    const handleClearText = () => {
      if (textInputRef.current) {
        textInputRef.current.clear();
      }
    };

    const [text, setText] = useState('');

    const changeHandler = (text) => {
      setText(text);
    }

    const onPressAdd = () => {
        submitHandler(text);
    }

    return (
        <View>
          <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}// track the change and value of TextInput
          ></TextInput>
          <Button
            onPress={() => onPressAdd()}
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
    
