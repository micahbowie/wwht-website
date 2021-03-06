import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchTerms} from '../actions/fetchTerms';
import Terms from '../components/Terms';
import Term from '../components/Term';

class TermsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTerms()
  }

  render () {
    return (
      <div>
        <Route path='/terms/:id' render={(routerProps) => <Term {...routerProps}terms={this.props.terms}/>}/>
        <Route exact path='/terms' render={(routerProps) => <Terms {...routerProps} terms={this.props.terms}/>}/>
      </div>
    )
  }

}

const mapStateToProps =  state => {
  return {
    terms: state.termsReducer.terms
  }
}

export default connect(mapStateToProps, {fetchTerms})(TermsContainer)
