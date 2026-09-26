import Image from "next/image";
import Link from "next/link";
import { getWorkout } from "@/lib/api";

interface WorkoutDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function WorkoutDetailsPage({
  params,
}: WorkoutDetailsPageProps) {
  const { id } = await params;
  const workout = await getWorkout(id);

  return (
    <main className="mx-auto max-w-[1184px] px-6 py-10">
      <Link
        href="/"
        className="mb-8 inline-flex text-sm text-[var(--muted)] transition hover:text-white"
      >
        ← Back to workouts
      </Link>

      <div className="grid overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] lg:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[420px] bg-[#111419]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

        {/* Details */}
        <div className="p-8 md:p-10">
          <div className="mb-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <h1 className="text-4xl font-black uppercase leading-none tracking-tight md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 text-sm leading-6 text-[var(--muted)]">
            {workout.description}
          </p>

          {/* Specs */}
          <div className="mt-8 border-y border-[var(--border)]">
            <SpecRow label="Equipment" value={workout.equipment} />
            <SpecRow label="Difficulty" value={workout.difficulty} />
            <SpecRow label="Sets" value={String(workout.sets)} />
            <SpecRow label="Reps" value={workout.reps} />
            <SpecRow label="Duration" value={`${workout.duration} min`} />
            <SpecRow
              label="Calories"
              value={`${workout.caloriesBurned} kcal`}
            />
            <SpecRow label="Rating" value={String(workout.rating)} />
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-sm font-bold uppercase tracking-widest">
              Instructions
            </h2>

            <ol className="mt-5 space-y-4">
              {workout.instructions.map((instruction, index) => (
                <li
                  key={instruction}
                  className="flex gap-4 text-sm leading-6 text-[var(--muted)]"
                >
                  <span className="font-bold text-[var(--accent)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span>{instruction}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button className="rounded-md bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase text-black transition hover:brightness-90">
              Add to today&apos;s plan
            </button>

            <button className="rounded-md border border-[var(--border)] px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#1c2027]">
              Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function SpecRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[var(--border)] py-3 last:border-b-0">
      <span className="text-xs uppercase tracking-wide text-[var(--muted)]">
        {label}
      </span>

      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
