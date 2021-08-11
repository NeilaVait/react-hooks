import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
import MoviePage from './context/MoviePage';

class App extends Component {
  state = {
    userName: 'james',
  };

  render() {
    return (
      <div className="App container">
        {/* <CounterHook /> */}
        <MoviePage />
      </div>
    );
  }
}

export default App;
