import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Jason')
  const [person, setPerson] = useState({name: 'Mario', age: 30})

  const pressHandler = () => {
    setName('Kara')
    setPerson({name: 'Luigi', age: 40})
  }

  return (
      <View style={styles.container}>
        <Text>My name is {name}.</Text>
        <Text>His name is {person.name} and his age is {person.age}.</Text>
        <View style={styles.buttonContainer}>
          <Button title='update state' onPress={pressHandler}/>
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
  buttonContainer: {
    marginTop: 20,
  }
});
