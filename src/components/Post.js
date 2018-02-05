import React, { Component } from 'react'
import { Container, Text, Header, Content, Input, Spinner, Button, Item, Form, Label } from 'native-base';
import { NavigationActions } from 'react-navigation';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';


class Post extends Component {
  componentWillMount = () => {
    if (!this.props.isfetched) {
      this.props.fetchUsers();
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

const mapStateToProps = (state) => ({
  usersFeed: state.users.users,
  isfetched: state.users.isfetched
});

export default connect(mapStateToProps, { fetchUsers })(Post);