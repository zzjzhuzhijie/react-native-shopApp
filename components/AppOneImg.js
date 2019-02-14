import React,{Component} from 'react';
import { Col, Row, Grid } from "react-native-easy-grid";
import { Text ,Container} from 'native-base';
import {Image,StyleSheet,Dimensions} from 'react-native';
var {width} = Dimensions.get('window');
export default class AppOneImg extends Component{
  render(){
    return(
        <Container style={{marginTop:12,height:230,paddingTop:10,width:width}}>
          <Grid>
            <Col style={{justifyContent:"space-around",alignItems:"center"}}>
                <Row>
                    <Image source={require('../assets/icon-sp-001.png')} style={styles.imgstyle}/>
                </Row>
                <Row>
                <Image source={require('../assets/icon-sp-002.png')} style={styles.imgstyle}/>
                </Row>
            </Col>
            <Col style={{justifyContent:"space-around",alignItems:"center"}}>
                <Row>
                <Image source={require('../assets/icon-sp-003.png')} style={styles.imgstyle}/>
                </Row>
                <Row>
                <Image source={require('../assets/icon-sp-004.png')} style={styles.imgstyle}/>
                </Row>
            </Col>
          </Grid>
        </Container>
    )
  }
}
const styles = StyleSheet.create({
    imgstyle:{
        width : 170,
        height: 100,
    }
});