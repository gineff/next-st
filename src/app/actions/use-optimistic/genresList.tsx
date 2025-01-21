
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
