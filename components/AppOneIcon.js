import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

//导入json数据
var BadgeData = require('../source/shareData.json');

//导入屏幕分辨率的框架
var Dimensions = require('Dimensions');
//定义一些全局的变量
//屏幕的宽度
var {width} = Dimensions.get('window');

//定义一些全局的变量
var cols    = 5;
var boxW    = 60;
var vMargin = (width - cols*boxW)/(cols+1);
var hMargin = 25;


export default class AppOneIcon extends Component{
    render(){
        return (
            <View style={styles.container}>
                {/*返回6个包*/}
                {this.renderAllBadge()}
            </View>
        );
    }

    // 返回所有的包
    renderAllBadge(){
        // 定义数组装所有的子组件
        var allBadge = [];
        // 遍历json数据
        for (var i=0;i<BadgeData.data.length;i++){
            // 取出每一个数据对象
            var badge = BadgeData.data[i];
            // 装入数据
            allBadge.push(
                <View key={i} style={styles.outViewStyle}>
                    <Image
                        style  = {styles.iconStyle}
                        source = {{uri:badge.icon}}
                    ></Image>
                    <Text style={styles.mainTitleStyle}>
                        {badge.title}
                    </Text>
                </View>
            );
        }
        // 返回数组
        return allBadge;
    }
}

//设置样式
const styles = StyleSheet.create({
    container: {
        
    //    确定主轴的方向
        flexDirection: 'row',
    //    一行显示不完的话换行显示
        flexWrap       : 'wrap',
        backgroundColor: '#fff',
        marginTop      : 12,
        paddingBottom  : 20
    },
    outViewStyle:{
    //    设置侧轴的对齐方式
        alignItems: 'center',
        width     : boxW,
        height    : boxW,
        marginLeft: vMargin,
        marginTop : hMargin
    },
    iconStyle:{
        width       : 50,
        height      : 50,
        marginBottom: 5
    },
    mainTitleStyle:{

    }
});