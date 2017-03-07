import { combineReducers } from 'redux';
import mainData from './mainData';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  mainData,
  routing: routerReducer
});

export default rootReducer;
