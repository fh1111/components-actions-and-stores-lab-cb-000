import React from 'react';

export default class BandInput extends React.Component {

  onSubmit(){
    event.preventDefault();
    console.log("NOMG I'm in teh onSubmit() functions")
  }

    render(){
        return(
        <div>
            <form onSubmit={this.onSubmit.bind(this)}>
                <label>Enter Band: </label>
                <input />
                <button type="submit">Submit</button>
            </form>
        </div>
      )

    }

}
