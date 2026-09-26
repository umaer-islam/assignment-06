import Image from "next/image";
import Link from "next/link";
import { Workout } from "@/types/workout";

interface WorkoutCardProps {
  workout: Workout;
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] transition hover:border-[#3a414d]"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Muscle groups */}
        <div className="mb-4 flex flex-wrap gap-2">
          {workout.muscleGroups.map((group) => (
            <span
              key={group}
              className="rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-bold uppercase text-black"
            >
              {group}
            </span>
          ))}
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold uppercase tracking-tight">
          {workout.name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-[var(--muted)]">
          {workout.equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-[var(--border)]" />

        {/* Stats */}
        <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
          <span>◷ {workout.duration} min</span>
          <span>♨ {workout.caloriesBurned} kcal</span>
          <span>☆ {workout.rating}</span>
        </div>
      </div>
    </Link>
  );
}
