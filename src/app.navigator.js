import React from 'react';
import { DrawerNavigator, StackNavigator } from 'react-navigation';
import Post from './components/Post';
import Mentions from './components/Mentions';
import {
  Button,
  Icon
} from 'native-base';

const PostScreen = {
  screen: Post,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Post',
    drawerLabel: 'Post'

  }
}

const MenuButton = ({navigate}) => (
  <Button transparent 
    onPress={() => {
      navigate('DrawerOpen')
    }}>
    <Icon style={{color: "#fff"}} size={28} name="menu"/>
  </Button>
)

const MentionsScreen = {
  screen: Mentions,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Mentions',
    drawerLabel: 'Mentions'

  }
}

const RootScreen = {
  screen: Post,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Mentions App',
    drawerLabel: 'Mentions App'

  }
}

const MatchStack = StackNavigator({
  Root: RootScreen,
  Mentions: MentionsScreen,
  Post: PostScreen
},{
  navigationOptions: ({navigation, HeaderProps}) => ({
    headerLeft: <MenuButton navigate={navigation.navigate}/>,
    headerStyle: { backgroundColor: "#000"},
    headerTintColor: "#fff"
  }) 
})

const RouteConfig = {
  initialRoute: 'Root'
}

const AppNavigator = DrawerNavigator({
  Root: {screen: MatchStack},
  Mentions: MentionsScreen,
  Post:PostScreen
}, RouteConfig);

export default AppNavigator;
