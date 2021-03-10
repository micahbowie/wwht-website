export function login(data) {
  console.log("Inside login fetch");
  return(dispatch) => {
    fetch('http://localhost:3000/login', {
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      method: 'POST',
      body: JSON.stringify(data)
    })
    .then(resp => resp.json())
    .then(resp => console.log("Is Logged in:" + resp.name))
  }
}
