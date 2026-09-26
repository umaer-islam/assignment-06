"use client";

import Image from "next/image";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";

import type { Workout } from "@/types/workout";

interface PlanExerciseCardProps {
  workout: Workout;
  showDone: boolean;
}

export default function PlanExerciseCard({
  workout,
  showDone,
}: PlanExerciseCardProps) {
  const { removeFromPlan, removeFromSaved, markAsDone, isDone } =
    useFitLog();

  const completed = isDone(workout.id);

  const handleRemove = () => {
    if (showDone) {
      removeFromPlan(workout.id);
    } else {
      removeFromSaved(workout.id);
    }
  };

  return (
    <div
      className={`flex flex-col gap-4 rounded-xl border border-[#272C35] bg-[#15181E] p-4 transition sm:flex-row sm:items-center ${
        completed ? "opacity-70" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-lg bg-[#111419] sm:h-20 sm:w-36">
        <Image
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover"
          sizes="144px"
        />
      </div>

      {/* Info */}
      <div className="min-w-0 flex-1">
        <h3
          className={`font-display text-lg font-bold uppercase tracking-tight ${
            completed ? "text-[#9298A3] line-through" : ""
          }`}
        >
          {workout.name}
        </h3>

        <p className="mt-1 text-xs text-[#9298A3]">{workout.equipment}</p>

        <div className="mt-3 flex flex-wrap gap-4 text-xs text-[#9298A3]">
          <span>
            <span className="text-[#CCFF00]">◷</span> {workout.duration} min
          </span>
          <span>
            <span className="text-[#CCFF00]">🔥</span> {workout.caloriesBurned}{" "}
            kcal
          </span>
          <span>
            <span className="text-[#CCFF00]">★</span> {workout.rating}
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        <Link
          href={`/workouts/${workout.id}`}
          className="rounded-full border border-[#343A45] px-4 py-2 text-xs font-bold uppercase transition hover:border-[#CCFF00]"
        >
          View Details
        </Link>

        {showDone && (
          <button
            onClick={() => markAsDone(workout.id)}
            disabled={completed}
            className="rounded-full bg-[#CCFF00] px-4 py-2 text-xs font-bold uppercase text-black transition hover:brightness-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {completed ? "✓ Completed" : "✓ Mark as Done"}
          </button>
        )}

        <button
          onClick={handleRemove}
          aria-label={`Remove ${workout.name}`}
          className="text-base text-[#9298A3] transition hover:text-[#CCFF00]"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
