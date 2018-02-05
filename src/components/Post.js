import React, { Component } from 'react'
import { Container, Text, Header, Content, Input, Button, Item, Form, Label } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class Post extends Component {
  render() {
    return (
      <Container>
        <Content style={{ marginLeft: 10, marginRight: 10}}>
          <Form>
            <Item regular style={{ marginBottom: 10 }}>
              <Input
                multiline={true}
                style={{ height: 300, borderColor: 'gray', borderWidth: 1, marginTop: 10 }}
                placeholder='post some stuff here about gihub users' />
            </Item>
            <Button
              dark
              block
              style={{ marginBottom: 10 }}
              onPress={() => alert('yea')}>
              <Text>Post</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}