import React, { Component } from 'react';
import UserContext from './UserContext';
import MovieRow from './MovieRow';

class MovieList extends Component {
  // pasiekiamas visoje klaseje 2 budas
  static contextType = UserContext;

  componentDidMount() {
    console.log('movie list mounted to dom');
    console.log('usercontext', this.context);
  }

  render() {
    return (
      // kai norim renderyje context
      <UserContext.Consumer>
        {(userContext) => (
          <div>
            <h1>movieList</h1>
            <p>
              {userContext.user.name}({userContext.user.age}) likes this movie list
            </p>
            <MovieRow />
          </div>
        )}
      </UserContext.Consumer>
    );
  }
}

// kai norim context visur kitur
// MovieList.contextType = UserContext;

export default MovieList;
