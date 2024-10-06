import { getMovieByPath } from '@/utils/movieClient';
import { getDictionary } from '@/utils/dictionaries';
import Link from 'next/link';
import styles from './Genres.module.scss';

const Genres = async ({ local }) => {
  const { genres } = await getMovieByPath('/genre/movie/list', [], local);
  const i18n = await getDictionary(local);

  return (
    <div>
      <h2>{i18n.genres.title}</h2>
      <div className={styles.container}>
        {genres.map((genre) => (
          <div key={genre.id} className={styles.genre}>
            <Link href={`/${local}/movies/genres/${genre.id}`}>
              <p>{genre.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
