import React from 'react';
import { StyleSheet, View,FlatList,Dimensions,Image,ActivityIndicator} from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import {getAllFlatListData,getPageFlatListData} from '../services/FaltListDataServices';
import TimeAgo from 'react-native-timeago';
import FitImage from 'react-native-fit-image';
import {Actions} from 'react-native-router-flux';
let moment = require('moment');  //load moment module to set local language
require('moment/locale/zh-cn'); //for import moment local language file during the application build
moment.locale('zh-cn');//set moment local language to zh-cn

class FlatListItem extends React.Component{
    render(){
        const{name,img,text,time,stars} = this.props.item;
        return (
            <Card style={{flex: 0}} onPress={()=>{
              Actions.details()
            }}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: img}} />
                <Body>
                  <Text>{name}</Text>
                  <Text note><TimeAgo time={time}/></Text>
                </Body>
              </Left>
            </CardItem>
            
            <CardItem>
            <FitImage source={{uri: img}} resizeMode="cover" style={styles.fitImage}/>
            </CardItem>

            <CardItem>
              <Body>
                <Text numberOfLines={3}>
                  {text}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{color: '#87838B'}}>
                  <Icon name="logo-github" />
                  <Text>{stars.number}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        )
    }
}


export default class List extends React.Component {
  constructor(props){
    super(props);
    this.state={
      flatListDataFromServer: [],
      page                  : 1,
      isLoadMore            : false,
      loading               : false
    }
    
  }

  makeRemoteRequest=()=>{
    this.setState({
      isLoadMore: true,
      loading   : true
    })
      getPageFlatListData({page:this.state.page}).then(data=>{
        this.setState({
          flatListDataFromServer: [...this.state.flatListDataFromServer,...data],
          isLoadMore            : false,
          loading               : false
        }) 
      })
  }
  componentDidMount(){
    this.makeRemoteRequest();
  }

  _keyExtractor = (item, index) => item.id.toString();

  loadMore=()=>{
    if(!this.state.isLoadMore){
      this.setState(prevState=>{
            return{
              page: prevState.page+1
            }
          },()=>{
            this.makeRemoteRequest();
          })
        }
    }
    

  renderHeader  = ()=>{
    return (
      <View>
        <Text>这是头部</Text>
      </View>
    )
}

renderFooter  = ()=>{
  
  if(this.state.loading) return null;
  return (
    <View 
    style={{
      paddingVertical: 20,
      borderTopWidth : 1,
      borderColor    : '#e5e5e5'
      }}>
      <ActivityIndicator animating={true} size="small"/>
      </View>
  )
}

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data                  = {this.state.flatListDataFromServer}
          keyExtractor          = {this._keyExtractor}
          ListHeaderComponent   = {this.renderHeader}
          ListFooterComponent   = {this.renderFooter}
          onEndReached          = {this.loadMore}
          onEndReachedThreshold = {0.1}
          renderItem            = {({item,index}) =>{
              return <FlatListItem item={item} index={index}/>
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
                                  backgroundColor: '#fff',
                                  padding        : 20
                                },fitImage       : {
    borderRadius: 20,
  },
  fitImageWithSize: {
    height: 100,
    width : 30,
  },
});
