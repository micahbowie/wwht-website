import React from 'react';


class UserForm extends React.Component {

  state ={name: '', email: '' }

  handleChange = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  render () {
    return (
      <div>
        <form>
        <h1> Create an account: </h1>
          <label>what is your name?</label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.handleChange}/><br/>
          <label>What is your email?</label>
          <input type='text' placeholder='Email'value={this.state.email}name="email" onChange={this.handleChange}/><br/>
        </form>
      </div>
    )
  }
}

export default UserForm
