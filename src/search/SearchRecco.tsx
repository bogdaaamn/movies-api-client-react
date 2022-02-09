import React from 'react';
import SearchMovieCard from './SearchMovieCard';

const reccoData = [
  {
    id: 120467,
    vote_average: 8.1,
    poster_path: '/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
    release_date: '2014-02-26',
    title: 'The Grand Budapest Hotel',
  },
  {
    id: 556574,
    vote_average: 8.4,
    poster_path: '/h1B7tW0t399VDjAcWJh8m87469b.jpg',
    release_date: '2020-07-03',
    title: 'Hamilton',
  },
  {
    id: 530385,
    vote_average: 7.1,
    poster_path: '/eycO6M2s38xO1888Gq2gSrXf0A6.jpg',
    release_date: '2019-07-03',
    title: 'Midsommar',
  },
  {
    id: 103663,
    vote_average: 8.1,
    poster_path: '/jkixsXzRh28q3PCqFoWcf7unghT.jpg',
    release_date: '2012-10-25',
    title: 'The Hunt',
  },
  {
    id: 15121,
    vote_average: 7.7,
    poster_path: '/xvXiJggaxRrU4jLjTXCmqnqEsGd.jpg',
    release_date: '1965-03-29',
    title: 'The Sound of Music',
  },
];

function SearchRecco(props: { className?: string }) {
  return (
    <div className={props.className}>
      <h1 className="text-4xl uppercase font-bold mb-6">{`Bogdan's Recommendations`}</h1>
      <div className="flex flex-col gap-10">
        {reccoData.map((result) => {
          return (
            <div key={result.id}>
              <a href={`/movie/${result.id}`}>
                <SearchMovieCard
                  title={result.title}
                  posterPath={result.poster_path}
                  votes={result.vote_average}
                  date={result.release_date}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SearchRecco;
