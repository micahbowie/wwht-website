import React from 'react';
import {Route} from 'react-router-dom'


const List = (props) => {
  let list = props.lists[props.match.params.id-1]
  let listTerms = list ? list.terms : null

  return (
    <div>
      <h1> {list ? list.name : null} </h1>
      <ul>
      { listTerms ? listTerms.map (term =>
        <div>
          <h5> {term.name}</h5>
          <li> {term.why } </li>
          <li> {term.what } </li>
          <li> {term.how} </li>
        </div>
      ) : null}
      </ul>
    </div>
  )

}

export default List
