import React from 'react';

const User = (props) => {
  let user = props.users[props.match.params.id-1]
  return (
    <li>
      { user ? user.name : null} - {user ? user.email : null}
    </li>
  )

}

export default User
