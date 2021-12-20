import { combineReducers } from 'redux';
import gnbMenu from './gnbMenu';
import layout from './layout';
import member from './member';
import { penderReducer } from 'redux-pender';

console.log("reducers")
const rootReducer = combineReducers({
    gnbMenu,
    layout,
    member,
    pender: penderReducer
});

export default rootReducer;
