import React,{Component} from 'react';
import {Dimensions,StyleSheet,ScrollView,Image,TouchableOpacity,TextInput} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Text, Left, Right,Icon, Button, Input } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {connect} from "react-redux";
import {addCart,addone,deone,xgone,clone} from '../actions/'
var {width} = Dimensions.get('window');

const mapStateToProps=(state)=>{
  return {
      number: state.detail.numOne
 }
}


 class ShopDetail extends Component{

  componentDidMount(){
    this.props.clone();
  }


/*    constructor(props){
    super(props);
    this.state={
      number: 1
    }
  } */ 
  increase=()=>{
    this.props.addone();
  }
 
  decrease=()=>{
    this.props.deone();
  }

  changeText=(e)=>{
    this.props.xgone(e);
    /* if(!isNaN(e)){
      if(e>99){
        this.setState({
          number: 99
        })
      }else if(e<1){
          this.setState({
            number: 1
          })
      }else{
        this.setState({
          number: e
        })
      }
    }else{
      this.setState({
        number: this.state.number
      })
    }  */
  } 
  addcarts= (shop)=>{
    this.props.addCart(shop,this.props.number)
  }
  render(){
      const {img,content,price,stars,title} = this.props.data;
      const {number}                        = this.props;
            
    return(
<Container>
        <Content>
          <Card>
          <CardItem cardBody>
              <Image source={{uri: img}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Text style={{borderRadius:10,backgroundColor:'red',fontSize:12,color:'#fff'}}>&nbsp;&nbsp;天猫&nbsp;&nbsp;</Text>
              <Text style={{marginLeft:10,paddingRight:20}}>{title}</Text>
            </CardItem>
            <CardItem style={{height:25}}>
              <Left><Text style={{color:'red',fontSize:18}}>￥{price.number}</Text></Left>
              <Right><Text style={{fontSize:15,color:'orange'}}><Icon name="star" style={{fontSize:15,color:'orange'}}/>加入收藏</Text></Right>
            </CardItem>
            <CardItem>
              <Left><Text style={styles.fl}>快递：0.00</Text></Left>
              <Body><Text style={{fontSize:12,color:'#aaa',textAlign:'center',backgroundColor:'red'}}>月销854</Text></Body>
              <Right><Text style={styles.fl}>浙江杭州</Text></Right>
            </CardItem>
            <CardItem style={{backgroundColor:'#ffecec'}}>
              <Icon name="aperture" style={{color:'red'}}/>
              <Text style={{fontSize:15,color:'red'}}>限时限量，疯狂抢购</Text>
            </CardItem>
            <CardItem>
              <Left><Text style={styles.fl}>优惠</Text></Left>
              <Body><Text style={{fontSize:12,marginLeft:20}}>使用优惠至少可抵20元</Text></Body>
              <Right><Text style={styles.fl}>查看 ></Text></Right>
            </CardItem>
            <CardItem>
              <Left>
                <Button style={styles.btn} onPress={()=>{this.decrease()}} ><Text>-</Text></Button>
              <TextInput onChangeText={(event)=>{
                                          this.changeText(event)
                                       }} value             = {number.toString()} style = {{textAlign:'center',height:35,backgroundColor:'#eee',paddingLeft:5,paddingRight:5}}></TextInput>
              <Button style={styles.btn} onPress={()=>{this.increase()}}><Text>+</Text></Button>
              </Left>
              
              <Right>
              <Button style={styles.btn} onPress={()=>{
                this.addcarts(this.props.data)
              }}><Text>加入购物车</Text></Button>
              </Right>
            </CardItem>
            <CardItem style={{backgroundColor:'#ccc'}}>
              <Body style={{backgroundColor:'#eee',width:width}}>
                <Text><Text style={{color:'red'}}>商品详情：</Text>{content}</Text>
              </Body>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: img}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <Text numberOfLines={1}>描述：{title}</Text>
            <CardItem cardBody>
              <Image source={{uri: img}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <Text numberOfLines={1}>描述：{title}</Text>
            <CardItem cardBody>
              <Image source={{uri: img}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>       
            <Text numberOfLines={1}>描述：{title}</Text>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  fl:{
    fontSize: 12,
    color   : '#aaa'
  },
  btn:{
    backgroundColor: 'orange',
    height         : 35
  }
})
export default connect(mapStateToProps,{addCart,addone,deone,xgone,clone})(ShopDetail);
/*           
<Body>
                  <Grid>
                      <Col style={{flexDirection:"row"}}>
                        <Text style={{width:50,borderRadius:10,backgroundColor:'orange',fontSize:12,textAlign:"center"}}>天猫</Text>
                        <Text>{content}</Text>
                      </Col>
                  </Grid>
              </Body>
<Grid>
              <Col>
              <Row><Image source={{uri:img}} style={{width:width-20}}/></Row>
              <Row><Text>123</Text></Row>
            </Col>
          </Grid> */