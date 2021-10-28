import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from "redux-thunk";
import {createWrapper, HYDRATE} from 'next-redux-wrapper'

import rootReducer from './reducers'
const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return rootReducer;
  }
};

export const makeStore = (context) => {
  const store = createStore(reducer, bindMiddleware([thunkMiddleware]))

  return store
}

export const wrapper = createWrapper(makeStore, { debug: true })
