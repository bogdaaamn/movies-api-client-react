import React from 'react';
import { useParams } from 'react-router-dom';

function MoviePage() {
  let params = useParams();

  return <h1>Helloooo, {params.id}</h1>;
}

export default MoviePage;