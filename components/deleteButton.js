import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';// import icons from '@expo/vector-icons

export default function DeleteButton({ pressHandler, item }) {
    return (
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
          <MaterialIcons name='delete' size={18} color='#bbb' />
      </TouchableOpacity>
    )
  }