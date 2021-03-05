import React from 'react';
import {connect} from 'react-redux';
import {postUser} from '../actions/postUser';
class UserForm extends React.Component {

  state ={name: '', email: '' }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postUser(this.state)
    this.setState({name: '', email: '' })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1> Create an account: </h1>
          <label>what is your name?</label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>What is your email?</label>
          <input type='text' placeholder='Email'value={this.state.email}name="email" onChange={this.handleChange}/><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {postUser})(UserForm)
