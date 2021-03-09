import React from 'react';
import {connect} from 'react-redux';
import {postUser} from '../../actions/postUser';

class UserForm extends React.Component {
  constructor(props){
    super(props); {
      this.state = {
        name: '',
        email: '',
        password: ''
      }
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.postUser(this.state)
    this.setState({name: '', email: '', password: ''})
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1> Create an account: </h1>
          <label>Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>Email: </label>
          <input type='text' placeholder='Email'value={this.state.email}name="email" onChange={this.handleChange}/><br/>
          <label>Password: </label>
          <input type='text' placeholder='Email'value={this.state.password}name="password" onChange={this.handleChange}/><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default connect(null, {postUser})(UserForm)
