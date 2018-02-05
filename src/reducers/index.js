import { combineReducers } from 'redux';
import UserReducer from './UsersReducer.js';

const rootReducer = combineReducers({
  users: UserReducer
});

export default rootReducer;