import React from 'react';
import { connect } from 'react-redux'
import { fetchUsers } from '../actions/fetchUsers';
import UsersForm from '../components/UsersForm';
import Users from '../components/Users';


class UsersContainer extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div>
        User Container
        <UsersForm/>
        <Users/>
      </div>
    )
  }

}

const mapStateToProps =  state => {
  return{
    users: state.users
  }
}

export default connect(mapStateToProps, {fetchUsers})(UsersContainer);
