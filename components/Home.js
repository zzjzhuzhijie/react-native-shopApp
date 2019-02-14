import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class Home extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button rounded light>
            <Text>Light</Text>
          </Button>
          <Button rounded>
            <Text>Primary</Text>
          </Button>
          <Button rounded success>
            <Text>Success</Text>
          </Button>
          <Button rounded info>
            <Text>Info</Text>
          </Button>
          <Button rounded warning>
            <Text>Warning</Text>
          </Button>
          <Button rounded danger>
            <Text>Danger</Text>
          </Button>
          <Button rounded dark>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}