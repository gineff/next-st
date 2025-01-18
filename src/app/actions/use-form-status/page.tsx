'use client';

import { useFormStatus } from 'react-dom';
import { Book, fetchBooks } from '../use-action-state/actions/fetchBooks';
import { useState } from 'react';

const Fetch = () => {
  const { pending, ...rest } = useFormStatus();
  console.log('rest', rest);
  return (
    <button
      type="submit"
      disabled={pending}
      className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition duration-200 
${pending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
`}
    >
      {pending ? 'Loading...' : 'Fetch'}
    </button>
  );
};

export default function FormStatus() {
  const [books, setBooks] = useState<Book[]>([]);
  const fetchHandler = async () => {
    const fetchedBooks = (await fetchBooks('Боевая фантастика')) as unknown as Book[];
    setBooks(fetchedBooks);
  };

  return (
    <>
      <form
        action={fetchHandler}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-gray-800">Fetch books</h1>
        <Fetch />
      </form>
      <div>
        {books.map((book) => (
          <div key={book._id}>
            <p>{book.title}</p>
          </div>
        ))}
      </div>
    </>
  );
}
