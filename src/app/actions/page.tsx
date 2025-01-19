import Link from 'next/link';

export default function Actions() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 py-4">Actions</h1>
      <div className="space-y-4">
        <Link href="/actions/use-action-state" legacyBehavior>
          <a className="block text-3xl text-blue-600 hover:text-blue-800 font-semibold py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow transition duration-200">
            useActionState
          </a>
        </Link>
        <Link href="/actions/use-form-status" legacyBehavior>
          <a className="block text-3xl text-blue-600 hover:text-blue-800 font-semibold py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow transition duration-200">
            useFormStatus
          </a>
        </Link>
        <Link href="/actions/use-client" legacyBehavior>
          <a className="block text-3xl text-blue-600 hover:text-blue-800 font-semibold py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow transition duration-200">
            use client
          </a>
        </Link>
        <Link href="/actions/use" legacyBehavior>
          <a className="block text-3xl text-blue-600 hover:text-blue-800 font-semibold py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow transition duration-200">
            use
          </a>
        </Link>
        <Link
          href="/actions/use-optimistic"
          className="block text-3xl text-blue-600 hover:text-blue-800 font-semibold py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow transition duration-200"
        >
          useOptimistic
        </Link>
      </div>
    </>
  );
}
