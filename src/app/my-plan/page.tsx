"use client";

import { useState } from "react";
import Link from "next/link";
import { useFitLog } from "@/context/FitLogContext";
import PlanStats from "@/components/PlanStats";
import PlanExerciseCard from "@/components/PlanExerciseCard";
import type { Workout } from "@/types/workout";

type SortKey =
  | "duration-asc"
  | "duration-desc"
  | "calories-asc"
  | "rating-desc";

const sorters: Record<
  SortKey,
  (a: Workout, b: Workout) => number
> = {
  "duration-asc": (a, b) => a.duration - b.duration,
  "duration-desc": (a, b) => b.duration - a.duration,
  "calories-asc": (a, b) => a.caloriesBurned - b.caloriesBurned,
  "rating-desc": (a, b) => b.rating - a.rating,
};

export default function MyPlanPage() {
  const { plan, saved } = useFitLog();

  const [activeTab, setActiveTab] = useState<"plan" | "saved">("plan");
  const [sortKey, setSortKey] = useState<SortKey>("duration-asc");

  const source = activeTab === "plan" ? plan : saved;

  const workouts = [...source].sort(sorters[sortKey]);

  const totalMinutes = plan.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = plan.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  return (
    <main className="mx-auto max-w-[1220px] px-6 py-12 md:px-12">
      {/* Header */}
      <div>
        <h1 className="font-display text-5xl font-black uppercase leading-none">
          My Plan
        </h1>

        <p className="mt-3 text-sm text-[#9298A3]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* Stats */}
      <PlanStats
        exercises={plan.length}
        minutes={totalMinutes}
        calories={totalCalories}
      />

      {/* Controls */}
      <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex gap-1 rounded-xl border border-[#272C35] bg-[#101318] p-1">
          <button
            onClick={() => setActiveTab("plan")}
            className={`rounded-lg px-5 py-2.5 text-sm font-bold uppercase transition ${
              activeTab === "plan"
                ? "bg-[#1F242C] text-white"
                : "text-[#9298A3] hover:text-white"
            }`}
          >
            Today&apos;s Plan
          </button>

          <button
            onClick={() => setActiveTab("saved")}
            className={`rounded-lg px-5 py-2.5 text-sm font-bold uppercase transition ${
              activeTab === "saved"
                ? "bg-[#1F242C] text-white"
                : "text-[#9298A3] hover:text-white"
            }`}
          >
            Saved
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-bold uppercase tracking-wider text-[#9298A3]">
            Sort By
          </span>

          <select
            value={sortKey}
            onChange={(event) => setSortKey(event.target.value as SortKey)}
            className="rounded-lg border border-[#343A45] bg-[#15181E] px-4 py-2.5 text-sm text-white outline-none transition hover:border-[#CCFF00]"
          >
            <option value="duration-asc">Duration: Low → High</option>
            <option value="duration-desc">Duration: High → Low</option>
            <option value="calories-asc">Calories: Low → High</option>
            <option value="rating-desc">Rating: High → Low</option>
          </select>
        </div>
      </div>

      {/* Content */}
      <div className="mt-8">
        {workouts.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="space-y-4">
            {workouts.map((workout) => (
              <PlanExerciseCard
                key={workout.id}
                workout={workout}
                showDone={activeTab === "plan"}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function EmptyState() {
  return (
    <div className="flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[#272C35] bg-[#101318] px-6 py-16 text-center">
      <h2 className="font-display text-3xl font-black uppercase">
        Nothing Here Yet
      </h2>

      <p className="mx-auto mt-3 max-w-md text-sm text-[#9298A3]">
        Browse the library and add a lift to get today moving.
      </p>

      <Link
        href="/#library"
        className="mt-6 inline-block rounded-full bg-[#CCFF00] px-6 py-3 text-xs font-bold uppercase text-black shadow-[0_0_20px_rgba(204,255,0,0.25)] transition hover:brightness-90"
      >
        Go to workouts
      </Link>
    </div>
  );
}
