import SearchReducer from './SearchReducer';
import UpvotesReducer from './UpvotesReducer';
import LoginReducer from './LoginReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  SearchReducer,
  UpvotesReducer,
  LoginReducer
});

export default rootReducer;
