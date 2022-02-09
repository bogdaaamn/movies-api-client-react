import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar(props: { query: string | null; className?: string }) {
  const [searchQuery, setSearchQuery] = useState(props.query || '');
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`?query=${searchQuery}`);
  }, [navigate, searchQuery]);

  return (
    <div className={props.className}>
      <input
        className="w-full font-bold uppercase text-4xl md:text-5xl border-b-4 border-gray-400 focus:border-black outline-none"
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
