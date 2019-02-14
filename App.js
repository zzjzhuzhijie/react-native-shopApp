import React from 'react';
//import HomeScene from './components/HomeScene'
//import Home from './components/Home'
import DetailScene from './components/DetailScene'
//import Caiousel from './components/Caiousel'
//import SettingsScene from './components/SettingsScene'
import Homepage from './components/Homepage'
//import SettingsDetailScene from './components/SettingsDetailScene'
import List from './components/List'
import TabIcon from './components/TabIcon'
import {AppLoading} from 'expo';
import {Router,Stack,Scene,Tabs} from 'react-native-router-flux';
import { View,Image,Text,Dimensions} from 'react-native';
import store from "./store"
import {Provider} from "react-redux"
import Product from'./components/Product';
import MySetting from'./components/MySetting';
import ShopCart from'./components/ShopCart';
import ShopDetail from'./components/ShopDetail';

/* const RightButton=(props)=>{
  //console.log(props)
  return(
    <View>
      <Text onPress={()=>{props._increase()}}>右边按钮</Text>
    </View>
  )
} */

const HomeNavBar=(props)=>{
  return(
    <View
    style={{
      height         : 80,
      backgroundColor: 'transparent',
      justifyContent : 'center',
      alignItems     : 'center',
      paddingTop     : 20
    }}
    >
      <Image source={require('./assets/orange.jpg')} style={{
        height  : 80,
        width   : Dimensions.get('window').width,
        position: "absolute"
      }}/>
      <Text style={{color:'#fff',fontWeight:'bold'}}>
        分期商城
      </Text>
    </View>
  )
}


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      loading: true
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto'       : require('./Fonts/Roboto.ttf'),
      'Roboto_medium': require('./Fonts/Roboto_medium.ttf'),
    });
    this.setState({
      loading: false
    })
  }

  render() {
      if(this.state.loading){
        return(
          <AppLoading/>
        )
      }
    return (
      <Provider store={store}>
        <Router>
          <Tabs key="tabbar"
          activeBackgroundColor   = "#d2e9ff"
          inactiveBackgroundColor = "#fff">
          <Stack key="root" title="首页" icon={TabIcon} iconName="home"
            navigationBarStyle = {{backgroundColor:'#00ccff'}}  /* 整个栈样式 */
            >
              <Scene key="details" 
              component           = {DetailScene}
              title               = "详情页"
              back                = {true}
              backTitle           = "返回标题"                          /* ios */
              backButtonTintColor = "red"                           /* 返回箭头颜色 */
              backButtonTextStyle = {{fontSize:30,color:'orange'}}  /* ios */
              navBarButtonColor   = "blue"                          /* 字体颜色 -----| */
              navigationBarStyle  = {{backgroundColor:'#00ccff'}}   /* 顶部颜色      |*/
              titleStyle          = {{color:'black'}}               /* 标题字体属性__|*/
/*               renderRightButton   = {RightButton} */
              />
              {/* <Scene key="home" component={HomeScene} title="首页" initial navBar = {HomeNavBar}/> */}
              <Scene key="home" component={Homepage} title="首页" initial navBar = {HomeNavBar}/>
          </Stack>

{/*             <Stack key="settings" title="设置页"navigationBarStyle = {{backgroundColor:'#00ccff'}} icon={TabIcon} iconName="cog">
              <Scene key="settingsdetails" component = {SettingsDetailScene} title= "设置详情页"/>
              <Scene key="settings" component={SettingsScene} title="设置页" initial />
          </Stack> */}
          <Stack key="product" title="商品"navigationBarStyle = {{backgroundColor:'#00ccff'}} icon={TabIcon} iconName="shopping-bag">
              <Scene key="product" component={Product} title="商品列表" />
              <Scene key="shopdetail" component={ShopDetail} title="详情页" />
            </Stack>
            
            <Stack key="userdynamic" title="动态"navigationBarStyle = {{backgroundColor:'#00ccff'}} icon={TabIcon} iconName="comments">
              <Scene key="userdynamic" component={List} title="用户动态" />
            </Stack>
{/*           <Stack key="homeScene" title="首页信息"navigationBarStyle = {{backgroundColor:'#00ccff'}} icon={TabIcon} iconName="shopping-bag">
          <Scene key="homeScene" component={HomeScene} title="首页信息" initial navBar = {HomeNavBar}/>
          </Stack> */}

{/*           <Stack key="caiousel" title="轮播测试"navigationBarStyle = {{backgroundColor:'#00ccff'}} icon={TabIcon} iconName="shopping-bag">
            <Scene key="caiousel" component={Caiousel} title="轮播测试" initial navBar = {HomeNavBar}/>
          </Stack> */}


            <Stack key="shopcart" title="购物车"navigationBarStyle = {{backgroundColor:'#00ccff'}} icon={TabIcon} iconName="shopping-cart">
              <Scene key="shopcart" component={ShopCart} title="购物车" />
            </Stack>
            <Stack key="mysetting" title="我的"navigationBarStyle = {{backgroundColor:'#00ccff'}} icon={TabIcon} iconName="github-alt">
              <Scene key="mysetting" component={MySetting} title="我的设置" />
            </Stack>
          </Tabs>
        </Router>
       </Provider>
    );
  }
}