import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers';
import Users from '../components/Users';
import UsersForm from '../components/UsersForm';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div>
        <Route path='/users/new' component={UsersForm}/>
        <br/>
        <Users users={this.props.users}/>
      </div>
    )
  }

}

const mapStateToProps =  state => {
  return {
    users: state.usersReducer.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
