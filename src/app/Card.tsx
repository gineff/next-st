'use client';

import { useActionState } from 'react';
import { requestEmail } from './actionsd';

function Card() {
  const [state, formAction, isPending] = useActionState(requestEmail, 'n/a');

  //const email = await requestEmail();
  //return <div>Email: {email}</div>;

  return (
    <form className="card" action={formAction}>
      {isPending && <p>Loading...</p>}
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        email is {state}
      </button>
    </form>
  );
}

export default Card;
