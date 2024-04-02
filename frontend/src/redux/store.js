
import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import { thunk } from 'redux-thunk';
import { reducer as AuthReducer } from './auth/reducer';
import { reducer as ChatReducer } from './chat/reducer';

const reducer = combineReducers({ AuthReducer, ChatReducer });
export const store = legacy_createStore(reducer, applyMiddleware(thunk));

