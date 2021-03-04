
export function fetchUsers() {
  console.log("Inside fetch");
  return(dispatch) => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_USERS',
      payload: data
    }))
  }
}
