import React,{Component} from 'react';
import {View,Image,Dimensions,TextInput,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Footer } from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";
import {connect} from "react-redux";
import CheckBox from 'react-native-checkbox';
import {checkAllYes,checkAllNo,addCart,removeCart,deCart,deCartYes,deCartNo,addCartShop,optionCartNum,chengeCheck} from '../actions/'
var   {width,height}  = Dimensions.get('window');
const mapStateToProps = (state)=>{
  return {
      carts: state.carts
 }
}
class ShopCart extends Component{
  constructor(props){
    super(props);
    this.state={
      MyCheckBtn: true
    }
  }

   opinion=(i)=>{
     this.props.deCart(this.props.carts[i])
     if(this.props.carts[i].quantity<=0){
      Alert.alert(
        '警告',
        '你确定要删除吗',
        [
          {text: '确定', onPress: () => {this.props.deCartYes(this.props.carts[i])}, style: 'cancel'},
          {text: '取消', onPress: () => {this.props.deCartNo(this.props.carts[i])}},
        ],
      )
     }
   }

mycheckbtn=()=>{
  const {carts} = this.props
  this.setState({
    MyCheckBtn: !this.state.MyCheckBtn
  })
  if(this.state.MyCheckBtn==true){
    for(let i=0;i<carts.length;i++){
      this.props.checkAllNo(this.props.carts[i])
    }
  } else{
    for(let i=0;i<carts.length;i++){
      this.props.checkAllYes(this.props.carts[i])
    }
  }
  /* var cbtn = true;
  for(let i=0;i<carts.length;i++){
    if(carts[i].checkBool==false){
      cbtn = false
    }
  }
  if(cbtn){
    this.setState({
      MyCheckBtn: true
    })
  }else{
    this.setState({
      MyCheckBtn: false
    })
  } */
}

allprice=()=>{
  const {carts}  = this.props
  var   allprice = 0;
  for(let i=0;i<carts.length;i++){
    if(carts[i].checkBool){
      allprice += carts[i].price.number*carts[i].quantity
    }
  }
  return allprice;
}
allnum=()=>{
  const {carts} = this.props
  var   allnum  = 0;
  for(let i=0;i<carts.length;i++){
    if(carts[i].checkBool){
      allnum += carts[i].quantity
    }
  }
  return allnum;
}
changecheckbox=(da)=>{
  this.props.chengeCheck(da)
  const {carts} = this.props
  var   cbtn    = 0
  for(var i=0;i<carts.length;i++){
    if(carts[i].checkBool){
      cbtn += 1;
    }
  }
  if(cbtn==carts.length){
    this.setState({
      MyCheckBtn: true
    })
  }else{
    this.setState({
      MyCheckBtn: false
    })
  }

}
   cartFooter=()=>{
    const {carts} = this.props
     if(carts.length<1){
       return null
     }else{
       return(
         <Footer style={{height:'auto'}}>
         <Grid>
            <Col style={{ backgroundColor: '#fff',}}>
            <Row style={{height:'auto', marginLeft:15}}>
               <CheckBox
                checkboxStyle = {{width:20,height:20,backgroundColor:'orange'}}
                label         = {'全选/不全选'}
                checked       = {this.state.MyCheckBtn}
                onChange      = {(checked) => this.mycheckbtn()}
              />      
            </Row>
            <Row style={{height:'auto',marginLeft:15}}>
              <Text>总价为：<Text style={{color:'red'}}>￥{(this.allprice()).toFixed(2)}</Text></Text>
            </Row>
            </Col>
            <Col >
            <Row>
              <Col size={1} style={{ backgroundColor: '#fff'}}><Text>数量：{this.allnum()}</Text></Col>
              <Col size={2}  style={{ backgroundColor: 'orange'}}>
              <Text style={{textAlign:'center',marginTop:'auto',marginBottom:'auto'}}>立即购买</Text></Col>
            </Row>   
            </Col>
          </Grid>
         </Footer>
       )
     }
   }
  render(){
    const {carts}   = this.props
    const fortoshop = ()=>{
      var sp = [];
      if(carts.length<1){
        return (
          <View style={{justifyContent:'center',alignItems:'center',height:height*2/3}}>
            <Image style={{height:200,width:200}} source={{uri:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=297588516,981007206&fm=15&gp=0.jpg'}}/>
            <Text>购物车没有商品，去选购一些吧(/0_ 0/)</Text>
          </View>
        )
      }
     for(let i=0;i<carts.length;i++){
       const lid = this.props.carts[i].id
       sp.push(
         <Card key={i}>
             <CardItem>
               <Grid>
               <Col  size={1}><Image source={{uri:carts[i].img}} style={{height: 100, width: 'auto'}}/></Col>
               <Col  size={2} style={{padding:5}}>
               <Row style={{height:'auto'}}>
                 <Text style={{color:'#333',fontSize:15}}>{carts[i].title}</Text>
               </Row>
               <Row style={{height:'auto',marginTop:10}}>
               <Col>
                  <Text style={{color:'red'}}>￥{carts[i].price.number}</Text>
               </Col>
               <Right>
               <Button style={{height:35}} transparent onPress={()=>{
                   Alert.alert(
                    '警告',
                    '你确定要删除吗',
                    [
                      {text: '确定', onPress: () => {this.props.removeCart(this.props.carts[i])}, style: 'cancel'},
                      {text: '取消', onPress: () => {null}},
                    ],
                  )
                   
                 }}>
                   <Text style={{color:'#ccc',fontSize:12}}>删除</Text>
                 </Button>
               </Right>
               </Row>
               </Col>
             </Grid>
             </CardItem>
             <CardItem>
               <Left>
               <CheckBox
               checkboxStyle = {{width:20,height:20,backgroundColor:'orange'}}
               label         = {null}
               checked       = {this.props.carts[i].checkBool}
               onChange      = {(checked) => this.changecheckbox(this.props.carts[i])/* props.chengeCheck(this.props.carts[i]) */}
                />
                 <Text style={{color:'#333'}}>小计：<Text style={{color:'red'}}>￥{(carts[i].price.number*carts[i].quantity).toFixed(2)}</Text></Text>
               </Left>
               
                 <Button style={{height:35,backgroundColor:'orange'}} onPress={()=>{
                   this.opinion(i)
                 }}><Text>-</Text></Button>
                 <TextInput value={carts[i].quantity.toString()} style={{textAlign:"center",paddingLeft:5,paddingRight:5,backgroundColor:'#ccc',height:35}}
                  onChangeText = {(event)=>{
                    this.props.optionCartNum(this.props.carts[i],event)
                  }}
                 > 
                 </TextInput>
                 <Button style={{height:35,backgroundColor:'orange'}} onPress={()=>{
                   this.props.addCartShop(carts[i])
                 }}><Text>+</Text></Button>
               </CardItem>
           </Card>
       )
     } 
     return sp;
   }
    return(
      <Container>
      <Content>
        {fortoshop()}
      </Content>
      {this.cartFooter()}
    </Container>
    )
  }
}
export default connect(mapStateToProps,{checkAllYes,checkAllNo,addCart,removeCart,deCart,deCartYes,deCartNo,addCartShop,optionCartNum,chengeCheck})(ShopCart);