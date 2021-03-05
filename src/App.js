import React from 'react';
import { connect } from 'react-redux'
import UsersContainer from './containers/usersContainer'
import TermsContainer from './containers/termsContainer'


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <UsersContainer/>
        <TermsContainer/>
      </div>
    );

  }
}

export default App;
