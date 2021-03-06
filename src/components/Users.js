import React from 'react';
import User from "../components/User"
import {Route, Link} from 'react-router-dom'

const Users = (props) => {
  return (
    <div>
    {props.users.map(user =>
      <div key={user.id}><Link to={`/users/${user.id}`}> {user.name} </Link></div>
    )}
    </div>
  )
}

export default Users
