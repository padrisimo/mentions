import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import AppNavigator from './app.navigator';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from './reducers';

import { Root } from 'native-base';
import getTheme from '../native-base-theme/components';
import custom from '../native-base-theme/variables/custom';

const createStoreWithMiddleware = applyMiddleware(logger, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <StyleProvider style={getTheme(custom)}>
          <Root>
            <AppNavigator />
          </Root>
        </StyleProvider>
      </Provider>
    );
  }
}