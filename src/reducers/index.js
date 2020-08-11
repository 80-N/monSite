import { combineReducers } from 'redux';
import counter from './counter';
import drawings from './drawings';

export default combineReducers({
  counter,
  drawings,
});
