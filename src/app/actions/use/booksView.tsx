'use client';
import { use } from 'react';
import { Book } from '../use-action-state/actions/fetchBooks';

export const BooksView = ({ booksPromise }: { booksPromise: Promise<Book[]> }) => {
  const books = use(booksPromise);
  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
};
