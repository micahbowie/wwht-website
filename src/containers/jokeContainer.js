import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'
import {fetchJoke} from '../actions/fetchJoke';
import Joke from '../components/joke'


class JokeContainer extends React.Component {
  componentDidMount(){
    this.props.fetchJoke()
  }

  render () {
    return(
      <div>
        <Route path='/joke' render={() => <Joke joke={this.props.joke}/>}/>
      </div>
    )
  }
}

const mapStateToProps =  state => {
  return {
    joke: state.jokeReducer.joke
  }
}

export default connect(mapStateToProps,{fetchJoke})(JokeContainer);
