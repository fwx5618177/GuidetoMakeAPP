import React from "react";
import { View, TextInput, StyleSheet } from 'react-native'

const Input = () => {
    const styles = StyleSheet.create({
        inputContainer: {
            marginLeft: 20,
            marginRight: 20,
            shadowOpacity: 0.2,
            shadowRadius: 3,
            shadowColor: '#000',
            shadowOffset: {
                width: 2,
                height: 2,
            }
        },
        input: {
            height: 60,
            backgroundColor: '#fff',
            paddingLeft: 10,
            paddingRight: 10,
        }
    })
    
    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='Inout' placeholderTextColor={'#CACACA'} selectionColor='#666' />
        </View>
    )
}

export default Input