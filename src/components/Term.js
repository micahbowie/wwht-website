import React from 'react';

const Term = (props) => {
  let term = props.terms[props.match.params.id-1]
  return (
    <li>
      { term ? term.name : null} 
    </li>
  )

}

export default Term
