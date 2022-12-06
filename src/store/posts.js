import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from './api'

// Reducer
const slice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    postsRequestFailed: (posts, action) => {
      posts.loading = false
    },

    postsRequested: (posts, action) => {
      posts.loading = true
    },

    postsReceived: (posts, action) => {
      posts.list = action.payload
      posts.loading = false
      posts.lastFetch = Date.now()
    },
  },
})

export const { postsReceived, postsRequested, postsRequestFailed } =
  slice.actions
export default slice.reducer

// Action creators
const url = '/posts'
export const loadPosts = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      url,
      onStart: postsRequested.type,
      onSuccess: postsReceived.type,
      onError: postsRequestFailed.type,
    })
  )
}
