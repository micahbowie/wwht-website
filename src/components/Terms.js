import React from 'react';


const Terms = (props) => {
  return (
    <div>
      {props.terms.map(term =>
        <ul key={term.id}>
          <strong>{term.name}</strong>
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
