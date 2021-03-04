
export function fetchUsers() {
  return(dispatch) => {
    console.log("Inside fetch");
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => dispatch({
      type: 'FETCH_USERS',
      payload: data
    }))
  }
}
