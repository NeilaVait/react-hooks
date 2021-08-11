import React, { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
// import CounterHook from './components/CounterHook';
import MoviePage from './context/MoviePage';
import UserContext from './context/UserContext';
import Login from './context/Login';

class App extends Component {
  state = {
    user: {
      name: 'James',
      age: 41,
    },
  };

  handleLogin = (username) => {
    console.log('handlelogin ran', username);
    this.setState({ user: { ...this.state.user, name: username } });
  };

  render() {
    return (
      <UserContext.Provider value={{ user: this.state.user, onLogin: this.handleLogin }}>
        <div className="App container">
          {/* <CounterHook /> */}
          <MoviePage />
          <Login />
        </div>
      </UserContext.Provider>
    );
  }
}

export default App;
