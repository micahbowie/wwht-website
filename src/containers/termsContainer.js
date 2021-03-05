import React from 'react';
import {connect} from 'react-redux'
import {fetchTerms} from '../actions/fetchTerms';
import Terms from '../components/Terms';


class TermsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTerms()
  }

  render () {
    return (
      <div>
        TermContainer
        <Terms terms={this.props.terms}/>
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
