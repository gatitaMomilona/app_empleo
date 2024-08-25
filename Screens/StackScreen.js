import { Text, View, StyleSheet } from 'react-native'
import React from 'react'


export const StackScreen = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>StackScreen</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: '#006400'
    }
})

export default StackScreen;
