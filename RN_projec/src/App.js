import React, { Component } from "react"
import { Platform, StyleSheet, Text, View } from 'react-native'
import Input from "./Input"

const instructions = Platform.select({
    ios: 'Press Cmd + R to reload, \n' +
    'Cmd + D or share for dev menu',
    android: 'Double tap R on your keyboard to reload, \n' +
    'Shake or press menu button for dev menu',
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
})

export default class App extends Component {
    constructor() {
        super()
        
        this.state = {
          year: 2016
        }
      }
    
      updateYear() {
        this.state.year = 2017
      }

      update() {
          this.forceUpdate()
      }
  
      
    render() {

        return (<>
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    welcome!
                </Text>

                <Text style={styles.instructions}>
                    To get started
                </Text>

                <Text style={styles.instructions}>
                    {instructions}
                </Text>

                <Text onPress={() => this.updateYear()}>The year is: {this.state.year}</Text>

                <Text onPress={() => this.update()}>forceUpdate</Text>
                <Input />
            </View>

            
        </>)
    }
}
