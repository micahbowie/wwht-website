import React from 'react';


const Joke = (props) => {
  return(
    <div>
    {props.joke.map(joke =>
      <div>
        <h3>Here is your joke:</h3>
        <h4>{joke.setup}</h4>
        <h5>{joke.punchline}</h5>
      </div>)}
    </div>
  )
}

export default Joke
