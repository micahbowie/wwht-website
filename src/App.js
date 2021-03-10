import React from 'react';
import { connect } from 'react-redux'
import {Route} from 'react-router-dom'
import UsersContainer from './containers/usersContainer'
import TermsContainer from './containers/termsContainer'
import JokeContainer from './containers/jokeContainer'
import ListsContainer from './containers/listsContainer'
import SignupContainer from './containers/SignupContainer'
import SearchContainer from './containers/SearchContainer'

class App extends React.Component{
  render() {
    return (
      <div className="App">
        <SearchContainer/>
        <UsersContainer/>
        <TermsContainer/>
        <JokeContainer/>
        <ListsContainer/>
        <Route path="/signup" render={() => <SignupContainer/>} />
      </div>
    );

  }
}

export default App;
