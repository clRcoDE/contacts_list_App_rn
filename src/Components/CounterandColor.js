import React, { Component } from 'react';
import { View, Text,  StyleSheet,Button} from 'react-native';

export default class CounterandColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count : 2
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.allView}>
        <Button title={' + 3 '}  onPress={()=>{this.setState({ count:this.state.count+3})}}/>
        <Text>{this.state.count}</Text>
        <Button title={' - 1 '} onPress={()=>{this.setState({count:this.state.count-1})}}/>
        </View>
      </View>
    );
  }
}

const styles=StyleSheet.create({

container:{
  flex:8,
  backgroundColor:'lightgreen',
  justifyContent: 'center',
  alignItems: 'center',
},
allView:{
 borderColor:'black',
borderWidth:4,
flexDirection: 'row',
justifyContent: 'space-evenly',
width:300,
height:250,
alignItems: 'center',

}

})
