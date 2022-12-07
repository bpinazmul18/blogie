import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../store/users'

const UserHeader = (props) => {
  useEffect(() => {
    props.loadUser(props.userId)
  }, [])

  const user = props.users.find((user) => user.id === props.userId)
  if (!user) return

  return <div className="header">{user.name}</div>
}

const mapStateToProps = (state) => {
  return { users: state.entities.users.list }
}

export default connect(mapStateToProps, { loadUser })(UserHeader)
