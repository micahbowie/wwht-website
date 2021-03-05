export function postUser(state) {
  return(dispatch) => {
    fetch('http://localhost:3000/users', {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      method: 'POST',
      body: JSON.stringify(state)
    })
  }
}
