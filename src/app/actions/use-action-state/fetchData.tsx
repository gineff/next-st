import { useActionState, useState } from 'react';
import { fetchBooksActions, fetchBooks } from './actions/fetchBooks';

export const FetchData = () => {
  const [fetchedData, queryAction, isPending] = useActionState(fetchBooksActions, {
    error: null,
    data: null,
  });
  const { error, data } = fetchedData;

  const [books, setBooks] = useState([]);
  const handleFetch = async () => {
    const fetchedBooks = await fetchBooks('Боевая фантастика');
    setBooks(fetchedBooks);
  };

  return (
    <>
      <form className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">fetchData</h1>

        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            id="genre"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter genre"
          />
        </div>

        <button
          disabled={isPending}
          className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition duration-200 
      ${isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
    `}
          formAction={queryAction}
        >
          {isPending ? 'Loading...' : 'Fetch'}
        </button>

        {data && (
          <div>
            {data.map((book) => (
              <div key={book._id}>
                <p>{book.title}</p>
              </div>
            ))}
          </div>
        )}
        {error && (
          <div>
            <p>Error: {error.message}</p>
          </div>
        )}
      </form>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-gray-800">fetchData without form</h1>
        <button
          className={`w-full py-2 px-4 text-blue-600 font-semibold rounded-lg transition duration-200 `}
          onClick={handleFetch}
        >
          Fetch
        </button>
        <div>
          {books.map((book) => (
            <div key={book._id}>
              <p>{book.title}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
