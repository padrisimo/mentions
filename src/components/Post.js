import React, { Component } from 'react'
import { Container, ActionSheet, Text, Header, Content, Input, Spinner, Button, Item, Form, Label } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

const DESTRUCTIVE_INDEX = 3;
const CANCEL_INDEX = 4;
const BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];


class Post extends Component {
  state = { text: "" }
  
  componentWillMount = () => {
    if (!this.props.isfetched) {
      this.props.fetchUsers();
    }
  }
  textChecker(text) {
    if (text.indexOf('@') >= 0 ) {
      ActionSheet.show(
        {
          options: BUTTONS,
          cancelButtonIndex: CANCEL_INDEX,
          destructiveButtonIndex: DESTRUCTIVE_INDEX,
          title: "Testing ActionSheet"
        },
        buttonIndex => {
          console.log('user fetched')
          //this.setState({ text: ... });
        }
      )
    }
  } 
  

render() {
  if (!this.props.isfetched) {
    return <Spinner />
  }

  return (
    <Container>
      <Content style={{ marginLeft: 10, marginRight: 10 }}>
        <Form>
          <Item regular style={{ marginBottom: 10, marginTop: 10, borderColor: 'gray', borderWidth: 1 }}>
            <Input
              multiline={true}
              onChangeText={text => this.setState({text}, this.textChecker(text))}
              style={{ height: 300, borderWidth: 0 }}
              //value={this.state.text}
              placeholder='post some stuff here about gihub users' />
          </Item>
          <Button
            dark
            block
            style={{ marginBottom: 10 }}
            onPress={() => alert('yea')}>
            <Text>post it!</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  )
}
}

const mapStateToProps = (state) => ({
  usersFeed: state.users.users,
  isfetched: state.users.isfetched
});

export default connect(mapStateToProps, { fetchUsers })(Post);