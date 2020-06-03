import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App.css';

// import { HomePage } from './pages/Home/HomePage';
import HomePage from './pages/Home/HomePage';
import { store } from './redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  }
}

export default App;
