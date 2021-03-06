import React from 'react'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchTerms} from '../actions/fetchTerms'
import Search from '../components/Search/Search'


class SearchContainer extends React.Component {

  componentDidMount(){
    this.props.fetchTerms()
  }
  render(){
    return(
      <div>
        <Route exact path="/" render={() => <Search terms={this.props.terms}/>}/>
      </div>
    )
  }
}

const mapStateToProps =  state => {
  return {
    terms: state.termsReducer.terms
  }
}


export default connect(mapStateToProps, {fetchTerms})(SearchContainer)
