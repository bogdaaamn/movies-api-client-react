import React from 'react';

function MoviePosterFrame(props: { posterPath: string }) {
  return (
    <div className="w-full">
      <img
        className="w-full aspect-square rounded-[22px] object-cover"
        src={`https://image.tmdb.org/t/p/w500${props.posterPath}`}
      />
    </div>
  );
}

export default MoviePosterFrame;
