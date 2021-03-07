import React from 'react';
import {Route, Link} from 'react-router-dom'

const User = (props) => {
  let user = props.users[props.match.params.id-1]
  let userList = user ? user.lists : null

  return (
    <div>
      <h4>
        { user ? user.name : null}
      </h4>
      <h5>
       {user ? user.email : null}
      </h5>
      <h5>Here are your lists: </h5>
      <ul>
      { userList ? userList.map (list =>
        <li>
          <Link to={`/lists/${list.id}`}><li>{list.name}</li></Link>
        </li>
    ) : null}
      </ul>
    </div>
  )

}

export default User
