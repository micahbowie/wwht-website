import React from 'react';

const User = (props) => {
  let user = props.users[props.match.params.id-1]
  // let userList = user.lists

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
  list
      </ul>
    </div>
  )

}

export default User
