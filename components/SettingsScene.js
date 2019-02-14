import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux"
import {increase,decrease} from "../actions"

const mapStateToProps=(state)=>{

  return {
      counter : state.counter.counter,
      counter1: state.counter.counter1,
 }
}

class SettingsScene extends Component{
  render(){
    const {counter,counter1,increase,decrease} = this.props;
    return(
      <View>
        <Text>SettingsScene</Text>
        <Text>counter : {counter}</Text>
        <Text>counter1: {counter1}</Text>
        <Button onPress={increase} title="counter++"/>
        <Button onPress={decrease} title="counter1--"/>
      </View>
    )
  }
}

const CounterContainer = connect(mapStateToProps,{increase,decrease})(SettingsScene);

export default CounterContainer;