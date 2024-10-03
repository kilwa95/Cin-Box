import SearchResults from '@/app/movies/(searche)/SearchResults';

const GenresIdPage = ({ params, searchParams }) => {
  return <SearchResults searchParams={searchParams} genreId={params.id} />;
};

export default GenresIdPage;
