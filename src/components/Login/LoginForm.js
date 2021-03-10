import React from 'react'
import { connect } from 'react-redux'
import { Router} from 'react-router';
import { login } from '../../actions/login'

class LoginForm extends React.Component {
  constructor(props){
    super(props); {
      this.state = {
        email: '',
        password: '',
        erros: {},
        isLoading: false
      }
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange =  this.onChange.bind(this);
    }
  }

  onSubmit(event) {
    event.preventDefault()
    this.setState({errors:{}, isLoading: true})
    console.log(this.state);
    this.props.login(this.state)
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
      const {errors, email, password, isLoading} = this.state
    return(
      <div>
      <h1>Login here</h1>
      <form onSubmit={this.onSubmit}>
        <label>Email: </label>
        <input type='text' placeholder='Email'value={this.state.email}name="email" onChange={this.onChange}/><br/>
        <label>Password: </label>
        <input type='password' placeholder='Password'value={this.state.password}name="password" onChange={this.onChange}/><br/>
        <input type='submit'/>
      </form>
      </div>
    )
  }
}

export default  connect(null, {login})(LoginForm)
