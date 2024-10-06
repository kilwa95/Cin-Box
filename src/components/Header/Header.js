import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import MovieSearch from '../MovieSearch/MovieSearch';
import LanguageSelector from '@/components/language-selector/LanguageSelector';

const Header = ({ local }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <p>
          <Link href={`/${local}`}>MyMovieApp</Link>
        </p>
      </div>
      <div className={styles.navigation}>
        <nav>
          <ul>
            <li>
              <Link href={`/${local}/series`}>Séries</Link>
            </li>
            <li>
              <Link href={`/${local}/movies`}>Films</Link>
            </li>
          </ul>
        </nav>
        <MovieSearch />
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
