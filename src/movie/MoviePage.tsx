import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieData from './MovieData';

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
    <div className="flex justify-center font-light my-3 mx-3 md:my-16 md:mx-auto">
      <div className="w-96">
        {loading && <p>Loading...</p>}
        {error && <p>Oops</p>}
        {data && <MovieData movie={data} />}
      </div>
    </div>
  );
}

export default MoviePage;
