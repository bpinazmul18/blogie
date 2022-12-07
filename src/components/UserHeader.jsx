import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadUser } from '../store/users'

const UserHeader = (props) => {
  useEffect(() => {
    props.loadUser(props.userId)
  }, [])
  return <div>User Header</div>
}

export default connect(null, { loadUser })(UserHeader)
