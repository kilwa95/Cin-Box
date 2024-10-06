import Popular from '@/components/popular/Popular';
import Genres from '@/components/Genres/Genres';
import styles from './page.module.css';

export default function Home({ params }) {
  const { local } = params;
  return (
    <div className={styles.main}>
      <Popular local={local} />
      <Genres local={local} />
    </div>
  );
}
