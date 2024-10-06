import { getMovieByPath } from '@/utils/movieClient';
import { notFound } from 'next/navigation';
import React, { Suspense } from 'react';
import MovieDetails from '@/components/MovieDetails/MovieDetails';
import SimilarMovies from '@/components/SimilarMovies/SimilarMovies';

export const dynamic = 'force-static';
export const revalidate = 3600;

const MovieIdPage = async ({ params: { id, local } }) => {
  const movie = await getMovieByPath(`/movie/${id}`, [], local);

  if (!movie.original_title) {
    return notFound();
  }

  return (
    <div>
      <MovieDetails movie={movie} />
      <Suspense fallback={<p>Chargement ...</p>}>
        <SimilarMovies movieId={movie.id} local={local} />
      </Suspense>
    </div>
  );
};

export default MovieIdPage;
