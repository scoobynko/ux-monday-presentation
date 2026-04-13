export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center gap-12 py-16 px-8">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Claude Code Demo
          </h1>
          <p className="text-lg text-zinc-500 dark:text-zinc-400">
            UX Monday Presentation
          </p>
        </div>

        {/* Demo container — build your component here during the presentation */}
        <div className="w-full min-h-[400px] rounded-xl border-2 border-dashed border-zinc-300 dark:border-zinc-700 flex items-center justify-center bg-white dark:bg-zinc-950">
          <p className="text-zinc-400 dark:text-zinc-600 text-sm select-none">
            Build something here...
          </p>
        </div>
      </main>
    </div>
  );
}
