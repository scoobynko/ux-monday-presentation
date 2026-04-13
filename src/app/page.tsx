import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <main className="flex flex-1 w-full max-w-4xl flex-col items-center gap-12 py-16 px-8">
        <div className="flex w-full items-start justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Claude Code Demo
            </h1>
            <p className="text-lg text-muted-foreground">
              UX Monday Presentation
            </p>
          </div>
          <ThemeToggle />
        </div>

        {/* Demo container — build your component here during the presentation */}
        <div className="w-full min-h-[400px] rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-card">
          <p className="text-muted-foreground text-sm select-none">
            Build something here...
          </p>
        </div>
      </main>
    </div>
  );
}
