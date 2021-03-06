import React from 'react';
import {Route, Link} from 'react-router-dom'

const Terms = (props) => {
  return (
    <div>
      {props.terms.map(term =>
        <ul key={term.id}>
          <Link to={`/terms/${term.id}`}><strong>{term.name}</strong></Link>
          <li>{term.what}</li>
          <li>{term.why}</li>
          <li>{term.how}</li>
          <br/>
        </ul>
      )}
    </div>
  )
}

export default Terms
