import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import {connect} from "react-redux"

const mapStateToProps=(state)=>{
  return {
      counter: state.counter.counter,
 }
}

class HomeScene extends Component{
  render(){
    return(
      <View>
        <Text>HomeScene</Text>
        <Text>counter: {this.props.counter}</Text>
       <Button title="跳转至详情页" onPress={()=>{
          Actions.details({id:123,other:'other'});
        }}/>
      </View>
    )
  }
}

export default connect(mapStateToProps)(HomeScene)