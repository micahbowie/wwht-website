import { combineReducers } from 'redux'
import termsReducer from './termsReducer'
import usersReducer from './userReducer'
import jokeReducer from './jokeReducer'
import listsReducer from './listsReducer'

export default combineReducers({
  termsReducer,
  usersReducer,
  jokeReducer,
  listsReducer
})
