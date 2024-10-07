import LogoutButton from '@/components/logout-button/LogoutButton';
import styles from './page.module.scss';
import { getServerSession } from 'next-auth';
import prisma from '@/utils/prisma';
import { getHydratedMovies } from '@/utils/movieClient';
import MediaCard from '@/components/media-card/MediaCard';
import { getDictionary } from '@/utils/dictionaries';

const ProfilePage = async ({ params: { local } }) => {
  const { user: userSession } = await getServerSession();
  const i18n = await getDictionary(local);

  const { movieLikes } = await prisma.user.findFirst({
    where: { email: userSession.email },
    include: {
      movieLikes: true,
    },
  });

  const movies = await getHydratedMovies(
    movieLikes.map((movie) => movie.movieId)
  );
  return (
    <div className={styles.profile}>
      <div className={styles.head}>
        <h1>{i18n.favoriteMovies.title}</h1>
        <LogoutButton />
      </div>
      <div className={styles.list}>
        {movies.map((movie) => (
          <MediaCard media={movie} locale={local} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
