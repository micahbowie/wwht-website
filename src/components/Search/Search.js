import React from 'react'
import {Link} from 'react-router-dom'

class Search extends React.Component {
  state = { searchTerm: ""}

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  renderTerm = term => {

    return (
      <div>
        <Link to={`/terms/${term.id}`}>{term.name}</Link>
      </div>
    )

  }

  render(){
    let terms = this.props.terms
    const {searchTerm} = this.state;
    const filteredTerms = terms.filter(term => {
      if(searchTerm == "") {
        return term
      } else if (term.name.toLowerCase().includes(searchTerm.toLowerCase())){
        return term
      }
    })
    return(
      <div>
        <input type="text" placeholder="Search..." onChange={this.handleChange}/>
        <div>
          {searchTerm ?
          filteredTerms.map(term => {
            return this.renderTerm(term)
          }) : null}
        </div>
      </div>
    )
  }
}

export default Search
