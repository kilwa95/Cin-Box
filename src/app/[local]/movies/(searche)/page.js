import React from 'react';
import SearchResults from './SearchResults';

const MoviesPage = ({ searchParams, params }) => {
  const { local } = params;
  return <SearchResults searchParams={searchParams} local={local} />;
};
export default MoviesPage;
