import React from 'react';

function StarIcon() {
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
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
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

function SearchMovieCard(props: {
  title: string;
  posterPath?: string;
  votes?: number;
  date?: string;
}) {
  return (
    <div className="card card-bordered flex flex-col md:flex-row gap-4">
      <img
        className="md:w-1/3 w-full aspect-square object-cover rounded-[16px]"
        src={
          props.posterPath
            ? `https://image.tmdb.org/t/p/w342${props.posterPath}`
            : 'https://user-images.githubusercontent.com/22895284/153280705-5635e0ad-fc05-4c48-a562-109c24fc7aa0.jpeg'
        }
      />

      <div className="flex flex-col-reverse md:flex-col content-center justify-center gap-4">
        <p className="flex-shrink text-xl text-gray-600 md:text-xl flex items-center gap-1">
          <StarIcon />
          <span>{props.votes}</span>
          <CalendarIcon />
          <span>{props.date}</span>
        </p>
        <h2 className="md:text-5xl text-4xl uppercase font-bold">
          {props.title}
        </h2>
      </div>
    </div>
  );
}

export default SearchMovieCard;
