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


import {datalength} from './src/Components/Body'


export default class App extends Component {
  render() {
    return (
      


      <View style={styles.container}>
      
         
        <Header  />
        <Body/>
        
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
