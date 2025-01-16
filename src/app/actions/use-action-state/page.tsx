'use client';

import { useActionState } from 'react';
import { updateName } from './actions/updateName';



export default function UseActionStatePage() {
  const [state, submitAction, isPending] = useActionState(updateName, 'n/a');

  return (
    <form
      action={submitAction}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md space-y-4"
    >
      <h1 className="text-2xl font-bold text-gray-800">Reverse User Name</h1>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name: {state}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your name"
        />
      </div>

      <button
        type="submit"
        disabled={isPending}
        className={`w-full py-2 px-4 text-white font-semibold rounded-lg transition duration-200 
      ${isPending ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'}
    `}
      >
        Update
      </button>
    </form>
  );
}
