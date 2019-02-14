import React, { Component } from 'react';
   import {
   Platform,
  StyleSheet,
  Text,
   View,
  Image,
  Dimensions,

} from 'react-native';

 //引用插件
 import Swiper from 'react-native-swiper';

// 取得屏幕的宽高Dimensions
const { width, height } = Dimensions.get('window');

 export default class Caiousel extends Component {

  constructor(props) {
   super(props);
    this.state = {

    swiperShow: false,
  
 };
}

 // 轮播图
renderBanner() {
     if (this.state.swiperShow) {
     return (
     <Swiper
       style                 = {styles.wrapper}
       height                = {width * 40 / 75}
       showsButtons          = {false}
       removeClippedSubviews = {false}                   //这个很主要啊，解决白屏问题
       autoplay              = {true}
       horizontal            = {true}
       paginationStyle       = {styles.paginationStyle}
       dotStyle              = {styles.dotStyle}
       activeDotStyle        = {styles.activeDotStyle}
  >
      <Image source={require('../assets/banner.png')} style={styles.bannerImg} />
      <Image source={require('../assets/banner.png')} style={styles.bannerImg} />
      <Image source={require('../assets/banner.png')} style={styles.bannerImg} />
      <Image source={require('../assets/banner.png')} style={styles.bannerImg} />
      

  </Swiper>

  );

} else {
   return (
      <View style={styles.wrapper}>
          <Image source={require('../assets/1.jpg')} style={styles.bannerImg} />
      </View>
    );
  }
}

componentDidMount() {
  setTimeout(() => {
  this.setState({
      swiperShow: true,
  });
 }, 1)
  }


render() {
return (
  <View style={styles.container}>
  {this.renderBanner()}
  </View>
      );
   }
 }

 const styles = StyleSheet.create({
  container: {
  height: 150,
    },

   wrpaper: {
   width : width,
   height: 150,

  },
  bannerImg:{
      width : width,
      height: 150
  },
    paginationStyle: {
       bottom: 6,
     },
      dotStyle: {
       width          : 22,
       height         : 3,
       backgroundColor: '#fff',
       opacity        : 0.4,
       borderRadius   : 0,
   },
     activeDotStyle: {
          width          : 22,
          height         : 3,
          backgroundColor: '#fff',
          borderRadius   : 0,
     },

});