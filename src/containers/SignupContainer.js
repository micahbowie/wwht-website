import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import SignupPage from '../components/Signup/SignupPage'

class SignupContainer extends React.Component {

  render(){
    return(
      <div>
        <Route exact path='/' render={() => <SignupPage/>}/>
      </div>
    )
  }



}

export default SignupContainer
