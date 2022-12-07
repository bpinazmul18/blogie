import { fetchUser } from '../services/users'

// ActionTypes
const LOAD_USER = 'LOAD_USER'

// Actions
export const loadUser = (userId) => async (dispatch) => {
  const response = await fetchUser(userId)
  dispatch({
    type: LOAD_USER,
    payload: response.data,
  })
}

// Initial state
const initalState = {
  user: null,
  lastFetch: null,
  loading: false,
}

// Reducer
const usersReducer = (users = initalState, action) => {
  if (action.type === LOAD_USER) {
    return {
      ...users,
      user: action.payload,
      lastFetch: Date.now(),
      loading: false,
    }
  }
  return users
}

export default usersReducer