import React, { Component } from 'react';
import MovieList from './MovieList';

class MoviePage extends Component {
  state = {};
  render() {
    return (
      <div>
        MoviePage
        <MovieList />
      </div>
    );
  }
}

export default MoviePage;
