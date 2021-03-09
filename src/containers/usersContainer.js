import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchUsers} from '../actions/fetchUsers';
import Users from '../components/Users/Users';
import User from '../components/Users/User';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div>
        <Switch>
          <Route path='/users/:id' render={(routerProps) => <User {...routerProps}users={this.props.users}/>}/>
          <Route exact path='/users' render={(routerProps) => <Users {...routerProps} users={this.props.users}/>}/>
        </Switch>
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
