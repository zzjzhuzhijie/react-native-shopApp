import React,{Component} from 'react';
import {View,Dimensions,StyleSheet,ScrollView,Image,TouchableOpacity} from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import {getPageFlatListData} from '../services/ShopListServices'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';
var {width} = Dimensions.get('window');

class Products extends Component{
    render(){
        var   newData = this.props.newData
        const app     = ()=>{
            var js = [];
            for(let i=0;i<newData.length;i++){
                const newDataId = newData[i].id
                const newDataI  = newData[i]
                js.push(
                    <TouchableOpacity key={newDataId} onPress={()=>{
                        Actions.shopdetail(
                            {data:newDataI}
                        )
                    }}>
                    <Card style={styles.productStyle}>
                    <CardItem cardBody>
                      <Image source={{uri:newData[i].img}} style={{height: 150, width: null, flex: 1}} resizeMode="cover"/>
                    </CardItem>
                          <Text numberOfLines={2} style={{marginTop:8,fontSize:12}}>
                          {newData[i].content}
                          </Text>
                      <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:20,paddingBottom:20}}>
                          <Text style={{color:'red',fontStyle:'italic',textAlign:"center"}}>￥{newData[i].price.number}</Text>
                          <Button style={{backgroundColor:'orange',height:30}}
                          onPress={()=>{
                              Actions.shopdetail({data:newData[i]})
                          }}>
                            <Text style={{fontSize:12}}>查看详情</Text>
                        </Button>
                      </View>
                  </Card>
                  </TouchableOpacity>
                )
            }
            return js
        }
        return(
            <Container style={{height:'auto'}}>
               <Grid>
                  <Row style={{flexWrap:'wrap', justifyContent: 'space-between'}}>
                      {app()}   
                  </Row> 
              </Grid>
          </Container>
        )
    }
}
export default class Product extends Component{
    constructor(props){
        super(props);
        this.state={
          flatListDataFromServer: [],
          isLoadMore            : false,
          page                  : 1
        }
      }
      componentDidMount(){
        this.makeRemoteRequest();
      }
      _contentViewScroll=(e)=>{
        let y             = e.nativeEvent.contentOffset.y;
        let height        = e.nativeEvent.layoutMeasurement.height;
        let contentHeight = e.nativeEvent.contentSize.height;
    if (y + height >= (contentHeight-0.5)) {//已经滚动到底部
        //console.log('底部')
        this.load();
        }
    }
    makeRemoteRequest=()=>{
        this.setState({
            isLoadMore: true,
        })
        getPageFlatListData({page:this.state.page}).then(data=>{
            this.setState({
              flatListDataFromServer: [...this.state.flatListDataFromServer,...data],
              isLoadMore            : false
            }) 
          })
    }
    load(){
        //console.log('===>success')
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
  render(){
    return(
        <ScrollView
        onMomentumScrollEnd              = {this._contentViewScroll}>
            <Products newData={this.state.flatListDataFromServer}/>
        </ScrollView>
      
    )
  }
}
const styles = StyleSheet.create({
    productStyle:{
        width  : width/2-10,
        padding: 5,
    }
})