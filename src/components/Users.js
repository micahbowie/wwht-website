import React from 'react';


const Users = (props) => {
  return (
    <div>
    {props.users.map(user =>
      <li key={user.id}>{user.name} - {user.email}</li>
    )}
    </div>
  )
}

export default Users
