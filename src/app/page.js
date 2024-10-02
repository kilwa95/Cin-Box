import Popular from '../components/popular/Popular';
import Genres from '../components/Genres/Genres';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.main}>
      <Popular />
      <Genres />
    </div>
  );
}
