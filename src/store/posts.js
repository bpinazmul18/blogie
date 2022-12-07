// ActionTypes
import { fetchPosts } from '../services/posts'
const LOAD_POSTS = 'LOAD_POSTS'

// Actions
export const loadPosts = () => async (dispatch) => {
  const response = await fetchPosts()
  dispatch({
    type: LOAD_POSTS,
    payload: response.data,
  })
}

// Initial state
const initalState = {
  list: [],
  selectPosts: null,
  lastFetch: null,
  loading: false,
}

// Reducer
const postsReducer = (posts = initalState, action) => {
  if (action.type === LOAD_POSTS) {
    return {
      ...posts,
      list: action.payload,
      lastFetch: Date.now(),
      loading: false,
    }
  }
  return posts
}

export default postsReducer
