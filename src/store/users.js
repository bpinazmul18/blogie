import _ from 'lodash'
import { fetchUser } from '../services/users'

// ActionTypes
const LOAD_USER = 'LOAD_USER'

// Actions
export const loadUser = (userId) => (dispatch) => {
  _loadUser(userId, dispatch)
}

export const _loadUser = _.memoize(async (userId, dispatch) => {
  const response = await fetchUser(userId)
  dispatch({
    type: LOAD_USER,
    payload: response.data,
  })
})

// Initial state
const initalState = {
  list: [],
  lastFetch: null,
  loading: false,
}

// Reducer
const usersReducer = (users = initalState, action) => {
  if (action.type === LOAD_USER) {
    return {
      ...users,
      list: [...users.list, action.payload],
      lastFetch: Date.now(),
      loading: false,
    }
  }
  return users
}

export default usersReducer
