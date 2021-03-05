
export function fetchTerms() {
  return(dispatch) => {
    fetch('http://localhost:3000/terms')
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_TERMS',
      payload: data
    }))
  }
}
