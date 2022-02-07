import React, { useEffect, useState } from 'react';

type SearchResultType = {
  page: number,
  results: [{
    id: number;
    vote_average: number;
    poster_path: string;
    release_date: string;
    title: string;
  }],
  total_pages: number,
  total_results: number,
}

function SearchData(props: { searchResult: SearchResultType }) {
  return <ul>
    {props.searchResult.results.map(result => {
      return <li><a href={`/movie/${result.id}`}>{result.title}</a></li>;
    })}
  </ul>;
}

export default SearchData;