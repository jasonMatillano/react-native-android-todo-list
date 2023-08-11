import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import DeleteButton from './deleteButton';

export default function TodoItem({ pressHandler, item }) {
  return (
      <View style={styles.item}>
        <DeleteButton item={item} pressHandler={pressHandler}/>
        <Text style={styles.itemText}>{item.text}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: 10,
    flexDirection: 'row',
    // alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
  }
});