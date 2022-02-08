import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchData from './SearchData';

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

function useURLParams() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function SearchPage() {
  const [data, setData] = useState<SearchResultType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  const params = useURLParams();
  const queryParam = params.get('query');
  const pageParam = params.get('page');

  useEffect(() => {
    const url = new URL(`${process.env.REACT_APP_API_URL}/search`);
    url.searchParams.append('query', queryParam || '')
    url.searchParams.append('page', pageParam || '1');

    fetch(url.toString())
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((searchResultData: SearchResultType) => {
        console.log(searchResultData)
        setData(searchResultData);
        setError(null);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [pageParam, queryParam]);

  return <div>
    {<SearchBar query={queryParam}/>}
    {loading && <p>Loading...</p>}
    {error && <p>Oops</p>}
    {data && <SearchData searchResult={data} />}
  </div>;
}

export default SearchPage;
