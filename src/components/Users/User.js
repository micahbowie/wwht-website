import React from 'react';
import {Route, Link} from 'react-router-dom'
import UserList from '../Lists/UserList'

const User = (props) => {
  let user = props.users[props.match.params.id-1]
  let userLists = user ? user.lists : null

  return (
    <div>
      <h4>
        { user ? user.name : null}
      </h4>
      <h5>
       {user ? user.email : null}
      </h5>
      <h5>Here are your lists: </h5>
      <div>
        <UserList lists={userLists}/>
      </div>
    </div>
  )

}

export default User
