import Link from 'next/link';

export default function Concurrent() {
  return (
    <>
      <h1 className="text-4xl font-bold text-gray-800 py-4">Actions</h1>
      <div className="space-y-4">
        <Link href="/concurrent/use-transition" legacyBehavior>
          <a className="block text-3xl text-blue-600 hover:text-blue-800 font-semibold py-3 px-4 rounded-lg bg-gray-100 hover:bg-gray-200 shadow transition duration-200">
            useTransition
          </a>
        </Link>
      </div>
    </>
  );
}
