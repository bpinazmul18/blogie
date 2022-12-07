import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../store/posts'

const PostList = (props) => {
  console.log(props)
  useEffect(() => {
    props.loadPosts()
  }, [])
  return <div>PostList</div>
}

const mapStateToProps = (state) => {
  return { posts: state.entities.posts.list }
}

export default connect(mapStateToProps, { loadPosts })(PostList)
