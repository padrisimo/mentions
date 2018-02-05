import React, { Component } from 'react'
import { Container, Header, Content, Input, Item, Label } from 'native-base';
import { NavigationActions } from 'react-navigation';

export default class Post extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Item regular>
            <Input 
              multiline={true}
              style={{height: 400, borderColor: 'gray', borderWidth: 1, marginTop: 10}}
              placeholder='Regular Textbox'/>
          </Item>
        </Content>
      </Container>
    )
  }
}