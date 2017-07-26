import { combineReducers } from 'redux';
import categories from './reducer_categories';
import selected from './reducer_active_category';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  categories,
  selected, //any key in these end up as key in global state
  routing: routerReducer
});

export default rootReducer;
