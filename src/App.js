import React from 'react';
import { connect } from 'react-redux'
// import { fetchUsers } from './actions/fetchUsers';
import UsersContainer from './containers/usersContainer'


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <UsersContainer/>
      </div>
    );

  }
}

export default App;
