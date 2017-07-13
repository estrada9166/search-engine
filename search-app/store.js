import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

const initialState = {
  text: '',
  links: [],
  length: 0,
  display: false
}

export const reducer = (state = initialState, action ) => {
  if(action.type === "SEARCH_WORD") {
    return Object.assign({}, state, { text: action.text, display: action.display })
  }
  return state;
}


// ACTIONS
export const inputChange = text => dispatch => {
  return dispatch ({ type: 'SEARCH_WORD', text, display: false })
}


export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}