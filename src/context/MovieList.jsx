import React, { Component } from 'react';
import UserContext from './UserContext';

class MovieList extends Component {
  state = {};

  render() {
    return (
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            <h1>movieList</h1>
            <p>
              {userContext.name}({userContext.age}) likes this movie list
            </p>
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

export default MovieList;
