import React,{Component} from 'react';
import {View,Text,Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
export default class DetailScene extends Component{
  constructor(props){
    super(props);
    this.state={
      count: 0
    }
  }

  increase=()=>{
    this.setState({
      count: this.state.count+1
    })
  }



  componentWillMount(){
    this.props.navigation.setParams({
      _increase: this.increase
    })
  }
  render(){
    return(
      <View>
        <Text>id   : {this.props.id}</Text>
        <Text>other: {this.props.other}</Text>
        <Text>count: {this.state.count}</Text>
        <Button onPress={()=>{
          this.increase();
        }} title="count++"/>

        <Button onPress={()=>{
          Actions.pop();
        }} title="返回"/>
      </View>
    )
  }
}