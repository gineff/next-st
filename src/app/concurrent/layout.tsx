export default function ConcurrentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <main className="flex flex-col gap-8 row-start-2 items-center max-w-5xl mx-auto">
        {children}
      </main>
    </div>
  );
}
