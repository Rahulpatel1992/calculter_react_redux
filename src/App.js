import React, { Component } from 'react';   
import './App.css';
import Calculter  from './Components/calculter';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer'


const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
         <Calculter />
     </Provider>
    );
  }
}

export default App;
