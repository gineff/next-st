'use server';

import { MongoClient } from 'mongodb';
const mongodb_uri = <string>process.env.NEXT_PUBLIC_MONGODB_URI;
const client = new MongoClient(mongodb_uri);

export interface Book {
  id?: number;
  title: string;
  _id: string;
}

interface FetchResult {
  error: Error | null;
  data: Book[] | null;
}

export const fetchBooksActions = async (
  prevState: FetchResult,
  queryData: FormData
): Promise<FetchResult> => {
  try {
    const books = await fetchBooks(queryData.get('genre') as string);
    return {
      error: null,
      data: books as unknown as Book[],
    };
  } catch (e) {
    return {
      error: e as Error,
      data: null,
    };
  }
};

export const fetchBooks = async (genre: string): Promise<unknown[]> => {
  'use server';
  const fetchedBooks = await client
    .db('flibusta')
    .collection('Books')
    .find({ genre })
    .limit(10)
    .toArray();
  return fetchedBooks.map(({ bid, title }) => ({ _id: bid, title }));
};
