import React from 'react';
import {Route, Link} from 'react-router-dom'


const UserList = (props) => {
  let lists = props.lists
  console.log(lists);
  return (
    <div>
    <ul>
      { lists ? lists.map (list =>
        <li>
          <Link to={`/lists/${list.id}`}>{list.name}</Link>
        </li>
    ) : null}
    </ul>
    </div>
  )

}

export default UserList
