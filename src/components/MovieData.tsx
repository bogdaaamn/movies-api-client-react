import React from 'react';

type MovieType = {
  id: number;
  title: string;
  tagline: string;
  overview: string;
  poster_path: string;
  release_date: string;
  runtime: number;
  trailer: string;
};

function MovieData(props: { movie: MovieType }) {
  return (
    <div>
      <h1 className="uppercase text-4xl font-bold mb-3">{props.movie.title}</h1>
      <p>{props.movie.tagline}</p>

      {props.movie.overview && (
        <>
          <h2 className="uppercase font-bold text-primary mt-5 mb-2">
            Storyline
          </h2>
          <p>{props.movie.overview}</p>
        </>
      )}

      {props.movie.release_date && (
        <>
          <h2 className="uppercase font-bold text-primary mt-5 mb-2">
            Release date
          </h2>
          <p>{props.movie.release_date}</p>
        </>
      )}

      {props.movie.runtime && (
        <>
          <h2 className="uppercase font-bold text-primary mt-5 mb-2">
            Duration
          </h2>
          <p>{props.movie.runtime} minutes</p>
        </>
      )}
    </div>
  );
}

export default MovieData;
