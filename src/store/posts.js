// ActionTypes
const LOAD_POSTS = 'LOAD_POSTS'
// Actions
export const loadPosts = () => ({
  type: LOAD_POSTS,
})

// Reducer

const initalState = {
  list: [],
  selectPosts: null,
  lastFetch: null,
}

const postsReducer = (posts = initalState, action) => {
  return posts
}

export default postsReducer
