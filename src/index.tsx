import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import './index.css';
import MoviePage from './movie/MoviePage';
import SearchPage from './search/SearchPage';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="movie/:id" element={<MoviePage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="*" element={<Navigate to="/search" />} />
    </Routes>
  </BrowserRouter>,
  rootElement,
);
