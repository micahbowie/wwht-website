
export function fetchLists() {
  console.log("fetched lists");
  return(dispatch) => {
    fetch('http://localhost:3000/lists')
    .then(response => response.json())
    .then(lists => dispatch({
      type: 'FETCH_LISTS',
      payload: lists
    }))
  }
}
