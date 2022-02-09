import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieData from './MovieData';
import MovieTrailerFrame from './MovieTrailerFrame';

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

function MoviePage() {
  const [data, setData] = useState<MovieType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const params = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/movies/${params.id}`)
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((movieData: MovieType) => {
        console.log(movieData);
        setData(movieData);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <div>
      <div className="flex flex-col h-screen font-light p-5 pt-40 md:pl-20">
        <div className="md:w-[38rem] flex-grow w-full">
          {loading && <p className="text-xl">Loading...</p>}
          {error && <p className="text-xl">Oops! There was an error :(</p>}
          {data && <MovieData movie={data} />}
        </div>
        {(data?.trailer && (
          <div className="flex gap-2">
            <p className="animate-bounce">▼</p>
            <p className="text-2xl md:text-xl">
              Scroll down to watch the trailer
            </p>
            <p className="animate-bounce">▼</p>
          </div>
        )) ||
          (data && (
            <p className="text-2xl md:text-xl">
              ✕ There is no trailer available ✕
            </p>
          ))}
      </div>
      {data && data.trailer && (
        <div className="h-screen">
          <MovieTrailerFrame url={data.trailer} />
        </div>
      )}
    </div>
  );
}

export default MoviePage;
