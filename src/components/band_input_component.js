import React from 'react';

export default class BandInput extends React.Component {

  onSubmit(){
    console.log("NOMG I'm in teh onSubmit() functions")
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
