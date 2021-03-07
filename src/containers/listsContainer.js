import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'
import {fetchLists} from '../actions/fetchLists';
import List from '../components/List'


class ListsContainer extends React.Component {
  componentDidMount(){
    this.props.fetchLists()
  }

  render () {
    return(
      <div>
        <Route path='/lists/:id' render={(routerProps) => <List {...routerProps} lists={this.props.lists}/>}/>
      </div>
    )
  }
}

const mapStateToProps =  state => {
  return {
    lists: state.listsReducer.lists
  }
}

export default connect(mapStateToProps,{fetchLists})(ListsContainer);
