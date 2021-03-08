import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom'
import {fetchLists} from '../actions/fetchLists';
import List from '../components/List'
import Lists from '../components/Lists'

class ListsContainer extends React.Component {
  componentDidMount(){
    this.props.fetchLists()
  }

  render () {
    return(
      <div>
        <Route exact path='/lists' render={(routerProps) => <Lists {...routerProps} lists={this.props.lists}/>}/>
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
