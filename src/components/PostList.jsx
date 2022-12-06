import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../store/posts'

const PostList = (props) => {
  useEffect(() => {
    props.loadPosts()
  }, [])
  return <div>PostList</div>
}

export default connect(null, { loadPosts })(PostList)
