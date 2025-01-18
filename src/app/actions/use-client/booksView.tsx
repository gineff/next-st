'use client';
import { Book } from '../use-action-state/actions/fetchBooks';

export const BooksView = ({ books }: { books: Book[] }) => {
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
