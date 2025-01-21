'use client';

import { useRef } from 'react';

interface UpdateGenresFormProps {
  addGenre: (genre: string) => Promise<void>;
}

export const UpdateGenresForm: React.FC<UpdateGenresFormProps> = ({ addGenre }) => {
  const ref = useRef<HTMLFormElement>(null);
  const formAction = async (formData: FormData) => {
    const genre = formData.get('genre')?.toString();

    if (genre) {
      await addGenre(genre);
      ref.current?.reset();
    }
  };

  return (
    <form
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4"
      action={formAction}
      ref={ref}
    >
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
        type="submit"
        className="w-full py-2 px-4 text-white font-semibold rounded-lg transition duration-200 bg-blue-600 hover:bg-blue-700"
      >
        Update genres
      </button>
    </form>
  );
};
