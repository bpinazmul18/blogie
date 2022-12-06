import { combineReducers } from 'redux'
import blogsReducer from './posts'

export default combineReducers({
  posts: blogsReducer,
})
