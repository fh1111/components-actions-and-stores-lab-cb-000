import React from 'react';

export default class BandInput extends React.Component {
    render(){
      return(
            <div>
                <form>
                    <label>Enter Band: </label>
                    <input />
                    <button type="submit">Submit</button>
                </form>
            </div>
          )
    }
}
