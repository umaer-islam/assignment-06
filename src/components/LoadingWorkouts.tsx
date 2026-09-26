export default function LoadingWorkouts() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[var(--border)] border-t-[var(--accent)]" />

        <p className="text-sm text-[var(--muted)]">
          Loading workouts…
        </p>
      </div>
    </div>
  );
}
