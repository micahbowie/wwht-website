
export function fetchTerms() {
  return(dispatch) => {
    fetch('http://localhost:3000/terms')
    .then(response => response.json())
    .then(terms => dispatch({
      type: 'FETCH_TERMS',
      payload: terms
    }))
  }
}
