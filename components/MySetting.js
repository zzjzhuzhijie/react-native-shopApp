import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon,View } from 'native-base';
class Myset extends Component{
  render(){
    return(
      <Container>
      <Content>
        <List>
          <ListItem>
            <Left>
              <Text>我的钱包</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem >
           <Left>
              <Text>账户充值</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>开通会员</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem style={{marginTop:12}}>
            <Left>
              <Text>我的签到</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <View style={{height:12,backgroundColor:'#eee'}}></View>
          <ListItem>
            <Left>
              <Text>我的订单</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>我的收藏</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Text>我的评论</Text>
            </Left>
            <Right>
              <Icon name="arrow-forward" />
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
    )
  }
}
export default class MySetting extends Component {
  render() {
    return (
        <Myset/>
    );
  }
}