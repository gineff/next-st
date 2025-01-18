import { Suspense } from 'react';
import { Book, fetchBooks } from '../use-action-state/actions/fetchBooks';
import { BooksView } from './booksView';
import { Timer } from './timer';

const Books = async () => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  const booksPromise = fetchBooks('Боевая фантастика') as unknown as Promise<Book[]>;
  return <BooksView booksPromise={booksPromise} />;
};

export default function Use() {
  return (
    <Suspense fallback={<Timer />}>
      <Books />
    </Suspense>
  );
}
