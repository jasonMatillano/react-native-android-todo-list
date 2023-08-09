import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Jason')
  const [age, setAge] = useState(25)

  return (
      <View style={styles.container}>
        <Text>Enter name:</Text>
        <TextInput 
          multiline
          placeholder='e.g. Mario'
          style={styles.input}
          onChangeText={(val) => setName(val)}/>

        <Text>Enter age:</Text>
        <TextInput 
          keyboardType='numeric'
          placeholder='e.g. 25'
          style={styles.input}
          onChangeText={(val) => setAge(val)}/>
        <Text>His name is {name} and his age is {age}.</Text>
        <View style={styles.buttonContainer}>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    borderWidth: 1,
    borderColor: '#7777',
    borderRadius: 5,
    padding: 10,
    width: 200,
    margin: 10,
  }

});
