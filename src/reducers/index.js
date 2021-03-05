import { combineReducers } from 'redux'
import termsReducer from './termsReducer'
import usersReducer from './userReducer'
import jokeReducer from './jokeReducer'

export default combineReducers({
  termsReducer,
  usersReducer,
  jokeReducer
})
