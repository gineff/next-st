
export const GenresList = ({ genres }: { genres: string[] }) => {
  return (
    <div>
      {genres.map((genre, i) => (
        <div key={i}>
          <p>{genre}</p>
        </div>
      ))}
    </div>
  );
};
