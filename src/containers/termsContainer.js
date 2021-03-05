import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'
import {fetchTerms} from '../actions/fetchTerms';
import Terms from '../components/Terms';


class TermsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTerms()
  }

  render () {
    return (
      <div>
         <Route path='/terms' render={() => <Terms terms={this.props.terms}/>}/>
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
