import React from 'react';

export default class BandInput extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', payload: {title: 'New Band'}})
  }

  render(){
    return(
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Enter Band: </label>
          <input />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
