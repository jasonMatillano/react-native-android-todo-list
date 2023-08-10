import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            <Text style={styles.boxThree}>three</Text>
            <Text style={styles.boxFour}>four</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center',
        padding: 10,
        backgroundColor: '#ddd',
    },
    boxOne: {
        flex: 1,
        backgroundColor: 'violet',
        padding: 10,
      },
      boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 10,
        // alignSelf: 'flex-end',
      },
      boxThree: {
        flex: 1,
        backgroundColor: 'coral',
        padding: 10,
      },
      boxFour: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 10,
        // alignSelf: 'flex-start',
      }
})