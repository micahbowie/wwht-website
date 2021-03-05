import React from 'react';
import {connect} from 'react-redux'

class TermsContainer extends React.Component {

  componentDidMount() {

  }

  render () {
    return (
      <div>
        TermContainer
      </div>
    )
  }

}

const mapStateToProps =  state => {
  return {
    terms: state.terms
  }
}

export default connect(mapStateToProps)(TermsContainer)
