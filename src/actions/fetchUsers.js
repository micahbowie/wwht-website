
export function fetchUsers() {
  return(dispatch) => {
    console.log("Inside fetch");
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(users => dispatch({
      type: 'FETCH_USERS',
      payload: users
    }))
  }
}
