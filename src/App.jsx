import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
import MoviePage from './context/MoviePage';
import UserContext from './context/UserContext';

class App extends Component {
  state = {
    userName: 'james',
  };

  render() {
    return (
      <UserContext.Provider value={this.state.userName}>
        <div className="App container">
          {/* <CounterHook /> */}
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
