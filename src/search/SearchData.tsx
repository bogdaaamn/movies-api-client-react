import React from 'react';
import SearchMovieCard from './SearchMovieCard';

type SearchResultType = {
  page: number;
  results: [
    {
      id: number;
      vote_average: number;
      poster_path: string;
      release_date: string;
      title: string;
    },
  ];
  total_pages: number;
  total_results: number;
};

function SearchData(props: { searchResult: SearchResultType }) {
  return (
    <div className="flex flex-col gap-10">
      {props.searchResult.results.map((result) => {
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
  );
}

export default SearchData;
