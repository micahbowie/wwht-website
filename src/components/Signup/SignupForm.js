import React from 'react';


class SignupForm extends React.Component {
  constructor(props){
    super(props); {
      this.state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name: </label>
          <input type='text' placeholder='Name' value={this.state.name} name="name" onChange={this.onChange}/><br/>
          <label>Email: </label>
          <input type='text' placeholder='Email'value={this.state.email}name="email" onChange={this.onChange}/><br/>
          <label>Password: </label>
          <input type='password' placeholder='Password'value={this.state.password}name="password" onChange={this.onChange}/><br/>
          <label>Confirm Password: </label>
          <input type='password' placeholder='Password'value={this.state.confirmPassword}name="confirmpassword" onChange={this.onChange}/><br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }



}

export default SignupForm
