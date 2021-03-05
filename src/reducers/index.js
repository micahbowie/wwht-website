import { combineReducers } from 'redux'
import termsReducer from './termsReducer'
import usersReducer from './userReducer'

export default combineReducers({
  termsReducer,
  usersReducer
})
