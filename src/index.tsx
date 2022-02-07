import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import MoviePage from './components/MoviePage';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="movie/:id" element={<MoviePage />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
