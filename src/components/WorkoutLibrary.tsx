import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

export default function WorkoutLibrary({
  workouts,
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

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} workout={workout} />
        ))}
      </div>
    </section>
  );
}
