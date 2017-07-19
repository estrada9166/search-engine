import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

const initialState = {
  text: '',
  links: [],
  length: 0,
  display: false
}

export const reducer = (state = initialState, action ) => {
  if (action.type === 'SEARCH_WORD') {
    return Object.assign({}, state, { text: action.text, display: action.display });
  } else if (action.type === 'RESULT') {
    return Object.assign({}, state, { links: action.links });
  }
  return state;
}


// ACTIONS
export const inputChange = text => dispatch => {
  return dispatch ({ type: 'SEARCH_WORD', text, display: false })
}

export const search = text => dispatch => {
  return axios.get(`http://localhost:8000/api/search/${text}/?from=0&to=10`)
  .then(response => {
    console.log(response.data)
    dispatch ({ type: 'RESULT', links: response.data })
  })
}


export const initStore = (initialState = initialState) => {
  return createStore(reducer, initialState, applyMiddleware(thunkMiddleware))
}