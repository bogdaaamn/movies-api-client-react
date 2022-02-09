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

function ClockIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}

function MovieData(props: { movie: MovieType }) {
  return (
    <div>
      <h1 className="uppercase text-4xl md:text-5xl mb-4 font-bold">
        {props.movie.title}
      </h1>
      {/* <p>{props.movie.tagline}</p> */}

      {props.movie.overview && (
        <p className="text-2xl md:text-xl mb-4">{props.movie.overview}</p>
      )}

      {props.movie.runtime && props.movie.release_date && (
        <p className="text-2xl text-gray-600 md:text-xl flex items-center gap-1 mb-4">
          <ClockIcon />
          <span>{props.movie.runtime} min</span>
          <CalendarIcon />
          <span>{props.movie.release_date}</span>
        </p>
      )}
    </div>
  );
}

export default MovieData;
