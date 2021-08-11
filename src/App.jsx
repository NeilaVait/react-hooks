import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
import MoviePage from './context/MoviePage';
import UserContext from './context/UserContext';

class App extends Component {
  state = {
    user: {
      name: 'James',
      age: 41,
    },
  };

  handleLogin = (username) => {
    console.log('handlelogin ran', username);
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state.user, onLogin: this.handleLogin }}>
        <div className="App container">
          {/* <CounterHook /> */}
          <MoviePage />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
