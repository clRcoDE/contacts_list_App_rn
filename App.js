/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,KeyboardAvoidingView} from 'react-native';
import Header from './src/Components/Header';
import Body from './src/Components/Body';
import CounterandColor from './src/Components/CounterandColor'
import StateTraining from './src/Components/StateTraining'


import {datalength} from './src/Components/Body'


export default class App extends Component {
  render() {
    return (
      


      <View style={styles.container}>
      
         
        <Header  />
        <Body/>
        
        {/* <CounterandColor/> */}
        {/* <StateTraining/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderColor:'navy',
    borderWidth:2
  },
});
