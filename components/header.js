import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 36,
        backgroundColor: 'coral'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})