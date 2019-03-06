import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from './store';
import bandReducer from './reducers/band_reducer'
import BandInput from './components/band_input_component';


const store = createStore(reducer)

function render(){
  ReactDOM.render(<BandInput />, document.getElementById('container'))
}
