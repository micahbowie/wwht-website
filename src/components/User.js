import React from 'react';

const User = (props) => {
console.log(props);
  return (
    <li>
      {props.user.name} - {props.user.email}
    </li>
  )

}

export default User
