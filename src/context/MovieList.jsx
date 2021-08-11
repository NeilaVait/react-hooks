import React, { Component } from 'react';
import UserContext from './UserContext';

class MovieList extends Component {
  state = {};

  render() {
    return (
      <UserContext.Consumer>
        {() => (
          <div>
            <h1>movieList</h1>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
