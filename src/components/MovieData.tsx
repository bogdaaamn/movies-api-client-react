import React from 'react';

type MovieType = {
  id: number,
  title: string,
  tagline: string,
  overview: string,
  poster_path: string,
  release_date: string,
  runtime: number,
  trailer: string,
}

function MovieData(props: {movie: MovieType}) {
  return <div>
    <h1>{props.movie.title}</h1>
    <h2>{props.movie.tagline}</h2>
    <p>{props.movie.overview}</p>
  </div>;
}

export default MovieData;