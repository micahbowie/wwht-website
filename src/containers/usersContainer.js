import React from 'react';
import { connect } from 'react-redux'
import UsersForm from '../components/UsersForm';
import Users from '../components/Users';

class UsersContainer extends React.Component {
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

}

export default connect()(UsersContainer);
