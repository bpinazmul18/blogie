import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadPosts } from '../store/posts'

const PostList = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadPosts())
  }, [])
  return <div>Postlist</div>
}

export default PostList
