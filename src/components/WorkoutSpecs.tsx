import { Workout } from "@/types/workout";

interface WorkoutSpecsProps {
  workout: Workout;
}

export default function WorkoutSpecs({ workout }: WorkoutSpecsProps) {
  const rows: [string, string][] = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", String(workout.sets)],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", String(workout.rating)],
  ];

  return (
    <div className="mt-8 overflow-hidden rounded-[14px] border border-[#252a33] bg-[var(--surface)]">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="flex items-center justify-between gap-4 border-b border-[#252a33] px-5 py-3 last:border-b-0"
        >
          <span className="text-[11px] uppercase tracking-wide text-[var(--muted)]">
            {label}
          </span>

          <span className="text-right text-sm font-medium">{value}</span>
        </div>
      ))}
    </div>
  );
}
