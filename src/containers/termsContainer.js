import React from 'react';
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {fetchTerms} from '../actions/fetchTerms';
import Terms from '../components/Terms/Terms';
import Term from '../components/Terms/Term';

class TermsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchTerms()
  }

  render () {
    return (
      <div>
        <Switch>
          <Route exact path='/terms' render={(routerProps) => <Terms {...routerProps} terms={this.props.terms}/>}/>
          <Route path='/terms/:id' render={(routerProps) => <Term {...routerProps}terms={this.props.terms}/>}/>
        </Switch>
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
