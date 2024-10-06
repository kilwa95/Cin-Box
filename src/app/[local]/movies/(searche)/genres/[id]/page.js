import SearchResults from '@/app/movies/(searche)/SearchResults';

const GenresIdPage = ({ params, searchParams }) => {
  const { id, local } = params;
  return (
    <SearchResults searchParams={searchParams} genreId={id} local={local} />
  );
};

export default GenresIdPage;
