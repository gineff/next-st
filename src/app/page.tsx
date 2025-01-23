import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h3 className="text-4xl text-blue-600 dark:text-blue-500">Разбор React</h3>
        <Link href="/actions">
          <div className="text-2xl text-blue-600 dark:text-blue-500 hover:underline">
            Form actions
          </div>
        </Link>
        <Link href="/concurrent">
          <div className="text-2xl text-blue-600 dark:text-blue-500 hover:underline">
            Concurrent rendering
          </div>
        </Link>
      </main>
    </div>
  );
}
