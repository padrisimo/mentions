import React, { Component } from 'react'
import { Container, ActionSheet, Text, Header, Content, Input, Spinner, Button, Item, Form, Label } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Post extends Component {
  state = { text: "" }

  componentWillMount = () => {
    if (!this.props.isfetched) {
      this.props.fetchUsers();
    }
  }
  textChecker(text) {
    const trigger = text.indexOf('@');
    
    if (trigger >= 0 && text.slice(-1) != '@') {
      const indexChart = text.charAt(trigger + 1);
      const USERS = this.props.usersFeed.filter(user => (user.login.charAt(0) === indexChart)).map(name => name.login);
      const BUTTONS = ["Cancel", ...USERS];
        ActionSheet.show(
          {
            options: BUTTONS,
            cancelButtonIndex: 0,
            title: "Github Users"
          },
          buttonIndex => {
            console.log(buttonIndex)
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
                onChangeText={text => this.setState({ text }, this.textChecker(text))}
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