'use client';

import { Suspense, use, useState } from 'react';
import { GenresList, GenresView } from './genresView';
import { deliverMessage, writeFileAction } from './actions';

export default function App({ genresPromise }: { genresPromise: Promise<string[]> }) {
//export const UpdateGenresForm = ({ genresPromise }: { genresPromise: Promise<string[]> }) => {
  //const genres = use(genresPromise);

  //const updateGenresAction = async (queryData: FormData) => {
  /*async function updateGenresAction(formData) {
    //await writeFileAction(content);
  }*/
  const genres = use(genresPromise);

  const [messages, setMessages] = useState([{ text: 'Hello there!', sending: false, key: 1 }]);
  async function sendMessage(formData) {
    const sentMessage = await deliverMessage(formData.get('message'));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  return <h1>Update Genres</h1>;
/*
  return (
    <>
      <form>
        <input type="text" name="genre" />
        <button type="submit">Update genres</button>
        <Suspense fallback={'Loading...'}>
          <GenresList genres={genres} />
        </Suspense>
      </form>
    </>
  );*/
};
