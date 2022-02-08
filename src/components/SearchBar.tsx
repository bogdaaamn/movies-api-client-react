import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar(props: { query: string | null }) {
  const [searchQuery, setSearchQuery] = useState(props.query || '');
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?query=${searchQuery}`);
  }, [navigate, searchQuery]);

  return (
    <div>
      <input
        value={searchQuery}
        onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
        type="text"
        id="search-bar"
        placeholder="Search movies..."
        name="query"
      />
    </div>
  );
}

export default SearchBar;
