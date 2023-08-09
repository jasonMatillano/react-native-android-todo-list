import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({ 
    item: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 10,
        borderStyle:'solid',
    }
});