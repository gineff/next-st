import { Suspense } from 'react';
import { Book, fetchBooks } from '../use-action-state/actions/fetchBooks';
import { BooksView } from './booksView';
import { Timer } from './timer';

const Books = async () => {
  const books = (await fetchBooks('Боевая фантастика')) as unknown as Book[];
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return <BooksView books={books} />;
};

export default function UseClient() {
  return (
    <Suspense fallback={<Timer />}>
      <Books />
    </Suspense>
  );
}
