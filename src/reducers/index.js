import { combineReducers } from 'redux';
import counter from './counter';
import drawings from './drawings';
import user from './user';

export default combineReducers({
  counter,
  drawings,
  user,
});
