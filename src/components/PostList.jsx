import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadPosts } from '../store/posts'
import UserHeader from './UserHeader'

const PostList = (props) => {
  console.log(props)
  useEffect(() => {
    props.loadPosts()
  }, [])

  const renderedList = props.posts.map((post) => {
    return (
      <div className="item" key={post.id}>
        <i className="large middle aligned icon user"></i>
        <div className="content">
          <div className="description">
            <h2 className="header">{post.title}</h2>
            <p>{post.body}</p>
          </div>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    )
  })

  return <div className="ui relaxed divided list">{renderedList}</div>
}

const mapStateToProps = (state) => {
  return { posts: state.entities.posts.list }
}

export default connect(mapStateToProps, { loadPosts })(PostList)
