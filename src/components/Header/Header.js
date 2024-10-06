import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MovieSearch from '../MovieSearch/MovieSearch';
import LanguageSelector from '@/components/language-selector/LanguageSelector';
import { getDictionary } from '@/utils/dictionaries';

const Header = async ({ local }) => {
  const i18n = await getDictionary(local);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href={`/${local}`}>MovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${local}/series`}>{i18n.series.title}</Link>
            </li>
            <li>
              <Link href={`/${local}/movies`}>{i18n.movies.title}</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch local={local} />
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
