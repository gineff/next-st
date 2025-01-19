import { getGenresAction } from './actions';

export const GenresList = ({ genres }: { genres: string[] }) => {
  return (
    <div>
      {genres.map((genre) => (
        <div key={genre}>
          <p>{genre}</p>
        </div>
      ))}
    </div>
  );
};
/*
export const GenresView = async () => {
  const genresPromise = getGenresAction();
  return (
    <>
      <h1 className="text-2xl font-bold text-gray-800">Genres</h1>
      <GenresList genresPromise={genresPromise} />;
    </>
  );
};
*/
