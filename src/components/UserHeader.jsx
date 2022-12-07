import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../store/users'

const UserHeader = (props) => {
  useEffect(() => {
    props.loadUser(props.userId)
  }, [])

  if (!props.user) return

  return <div className="header">{props.user.name}</div>
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users.list.find((user) => user.id === ownProps.userId),
  }
}

export default connect(mapStateToProps, { loadUser })(UserHeader)
