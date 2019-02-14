import React from 'react';
import { StyleSheet, View, ScrollView,Dimensions,Image} from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import Caiousel from './Caiousel'
import AppOneIcon from './AppOneIcon';
import AppOneImg from './AppOneImg';
import { red } from 'ansi-colors';
var {width} = Dimensions.get('window');
//定义一些全局的变量
var cols    = 3;
var boxW    = 100;
var vMargin = (width - cols*boxW)/(cols+1);
var hMargin = 25;


/* icon */

//设置样式

class Search extends React.Component{
  render(){
    return(
      <Container style={{height:55}}>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="搜索商品" />
            <Icon name="aperture" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    )
  }
}

class AppTop extends React.Component{
  render(){
      return(
          <View >
          <Caiousel/>
        </View>
      )
  }

}

class AppMain extends React.Component{
  render(){
      return(
        <View >
          <ScrollView>
           <AppOneIcon/> 
           </ScrollView>
        </View>
      )
  }
}
class PhoneImg extends React.Component{
  render(){
      return(
        <View>
           <Image source={require('../assets/sp-001.png')} style={{height:150,width:width}}/>
        </View>
      )
  }
}

class AppOneShop extends React.Component{
  render(){
      return(
        <Container style={{marginTop:12,height:'auto'}}>
          <Grid >
            <Row style={{marginTop:10,padding:5,height:'auto',    justifyContent: 'center',alignContent  : 'center',}}>
              <Col><Image source={require('../assets/iPhone-001.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>华为Mate20</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
              <Col><Image source={require('../assets/iPhone-004.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>华为P20</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
              <Col><Image source={require('../assets/iPhone-007.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>华为畅享MAX</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
            </Row>
            <Row style={{marginTop:10,padding:5,height:'auto',    justifyContent: 'center',alignContent  : 'center',}}>
              <Col><Image source={require('../assets/iPhone-002.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>雷蛇北海巨妖</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
              <Col><Image source={require('../assets/iPhone-005.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>华为畅享MAX</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
              <Col><Image source={require('../assets/iPhone-008.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>华为P20</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
            </Row>
            <Row style={{marginTop:10,padding:5,height:'auto',    justifyContent: 'center',alignContent  : 'center',}}>
              <Col><Image source={require('../assets/iPhone-003.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>雷蛇北海巨妖</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
              <Col><Image source={require('../assets/iPhone-006.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>华为畅享MAX</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
              <Col><Image source={require('../assets/iPhone-009.png')} style={styles.iphoneImg}/><Text style={styles.textStyle}>华为P20</Text><Text style={styles.pageshop}>￥4.299.00</Text></Col>
            </Row>
          </Grid>
      </Container>
      )
  }
}
export default class Homepage extends React.Component {
  render () {
    return (
      <ScrollView>
        <Search/>
        <AppTop/>
        <AppMain/>
        <AppOneImg/>
        <PhoneImg/>
        <AppOneShop/>
        <Text style={{textAlign:"center",color:"#333",fontSize:12}}>再拉也没有了 = 。 = </Text>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  iphoneImg:{
    height     : 120,
    width      : 100,
    marginLeft : 'auto',
    marginRight: 'auto'
  },
  textStyle:{
    textAlign: 'center',
    marginTop: 10,
    fontSize : 12,
  },
  pageshop:{
    fontSize : 12,
    color    : 'red',
    textAlign: 'center',
    marginTop: 15
  }
});