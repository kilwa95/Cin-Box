import React from 'react';
import SearchResults from '@/app/movies/(searche)/SearchResults';

const MoviesPage = ({ searchParams }) => {
  return <SearchResults searchParams={searchParams} />;
};
export default MoviesPage;
