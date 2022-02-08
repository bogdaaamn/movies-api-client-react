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
    <div className="grid grid-cols-5 gap-5">
      {props.searchResult.results.map((result) => {
        return (
          <div key={result.id}>
            <a href={`/movie/${result.id}`}>
              <SearchMovieCard />
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default SearchData;
