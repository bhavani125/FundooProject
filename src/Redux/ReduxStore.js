import {createStore} from 'redux'
import { navReducer } from './Reducer';
import { combineReducers } from 'redux';


const reducer = combineReducers({
	navReducer,
});

const store = createStore(reducer)

export default store;







