import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";
import RetryButton from "./RetryButton";

interface WorkoutLibraryProps {
  workouts: Workout[];
  loadFailed?: boolean;
}

export default function WorkoutLibrary({
  workouts,
  loadFailed = false,
}: WorkoutLibraryProps) {
  return (
    <section
      id="library"
      className="mx-auto max-w-[1184px] px-6 py-16"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-black uppercase tracking-tight md:text-4xl">
          The Library
        </h2>

        <p className="mt-1 text-sm text-[var(--muted)]">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      {loadFailed ? (
        <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[var(--surface)] px-6 py-16 text-center">
          <h3 className="font-display text-2xl font-black uppercase">
            Unable to load workouts
          </h3>

          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--muted)]">
            Something went wrong while loading the workout library.
          </p>

          <RetryButton />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      )}
    </section>
  );
}
