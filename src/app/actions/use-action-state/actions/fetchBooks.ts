'use server';

import { MongoClient } from 'mongodb';
const mongodb_uri = <string>process.env.NEXT_PUBLIC_MONGODB_URI;
const client = new MongoClient(mongodb_uri);

interface Book {
  id: number;
  title: string;
  _id: string;
}

interface FetchResult {
  error: Error | null;
  data: Book[] | null;
}

export const fetchBooks = async (
  prevState: FetchResult,
  queryData: FormData
): Promise<FetchResult> => {
  try {
    const books = await client
      .db('flibusta')
      .collection('Books')
      .find({ genre: queryData.get('genre') })
      .limit(10)
      .toArray();
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
