import React from 'react';
import { connect } from 'react-redux'
import UsersContainer from './containers/usersContainer'
import TermsContainer from './containers/termsContainer'
import JokeContainer from './containers/jokeContainer'
import ListsContainer from './containers/listsContainer'


class App extends React.Component{
  render() {
    return (
      <div className="App">
        <UsersContainer/>
        <TermsContainer/>
        <JokeContainer/>
        <ListsContainer/>
      </div>
    );

  }
}

export default App;
