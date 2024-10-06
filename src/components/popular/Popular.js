import { getMovieByPath } from '@/utils/movieClient';
import React from 'react';
import MediaCard from '../media-card/MediaCard';
import styles from './Popular.module.scss';
import { getDictionary } from '@/utils/dictionaries';

const Popular = async ({ local }) => {
  const { results } = await getMovieByPath('/movie/popular', [], local);
  const popularMovies = results.slice(0, 6);
  const i18n = await getDictionary(local);

  return (
    <div>
      <h2>{i18n.popular.title}</h2>
      <div className={styles.container}>
        {popularMovies.map((movie) => (
          <MediaCard key={movie.id} media={movie} local={local} />
        ))}
      </div>
    </div>
  );
};
export default Popular;
