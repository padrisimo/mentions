import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Post from './components/Post';
import Mentions from './components/Mentions';

const PostScreen = {
  screen: Post,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Post',
    drawerLabel: 'Post'

  }
}

const MentionsScreen = {
  screen: Mentions,
  navigationOptions: {
    headerMode: 'screen',
    headerTitle: 'Mentions',
    drawerLabel: 'Mentions'

  }
}

const RouteConfig = {
  initialRoute: 'PostScreen'
}

const AppNavigator = DrawerNavigator({
  Post: PostScreen,
  Mentions: MentionsScreen
}, RouteConfig);

export default AppNavigator;
