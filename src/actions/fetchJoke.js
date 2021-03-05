
export function fetchJoke() {
  console.log("In joke fetch");
  return(dispatch) => {
    fetch('http://localhost:3000/joke')
    .then(response => response.json())
    .then(joke => dispatch({
      type: 'FETCH_JOKE',
      payload: joke
    }))
  }
}
