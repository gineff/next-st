'use client';
import { useEffect, useOptimistic, useState } from 'react';
import { getGenresAction, writeFileAction } from './actions';
import { UpdateGenresForm } from './updateGenresForm';
import { GenresList } from './genresList';

export default function UseOptimistic() {
  const [genres, setGenres] = useState<string[]>([]);

  useEffect(() => {
    const fetchGenres = async () => {
      const genres = await getGenresAction();
      setGenres(genres);
    };
    fetchGenres();
  }, []);

  const [optimisticGenres, addOptimisticGenre] = useOptimistic(
    genres,
    (state: string[], newGenre: string) => [...state, newGenre]
  );

  const addGenre = async (genre: string) => {
    addOptimisticGenre(genre);
    try {
      await writeFileAction(JSON.stringify([...genres, genre]));
      setGenres((genres) => [...genres, genre]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <UpdateGenresForm addGenre={addGenre} />
      <GenresList genres={optimisticGenres} />
    </>
  );
}
