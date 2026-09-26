"use client";

import { useFitLog } from "@/context/FitLogContext";
import toast from "react-hot-toast";

import type { Workout } from "@/types/workout";

interface WorkoutActionsProps {
  workout: Workout;
}

export default function WorkoutActions({
  workout,
}: WorkoutActionsProps) {
  const {
    plan,
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
  } = useFitLog();

  const alreadyInPlan = isInPlan(workout.id);
  const alreadySaved = isSaved(workout.id);
  const planFull = plan.length >= 5 && !alreadyInPlan;

  const handleAddToPlan = () => {
    if (alreadyInPlan) return;

    if (plan.length >= 5) {
      toast.error("Today's plan can contain up to 5 workouts.");
      return;
    }

    addToPlan(workout);
    toast.success("Added to today's plan");
  };

  const handleSave = () => {
    if (alreadySaved) return;

    saveWorkout(workout);
    toast.success("Saved for later");
  };

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <button
        onClick={handleAddToPlan}
        disabled={alreadyInPlan}
        aria-disabled={planFull}
        className="rounded-lg bg-[#CCFF00] px-6 py-3 text-sm font-bold text-black transition hover:brightness-90 aria-disabled:cursor-not-allowed aria-disabled:opacity-50 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadyInPlan ? "Already in today's plan" : "Add to today's plan"}
      </button>

      <button
        onClick={handleSave}
        disabled={alreadySaved}
        className="rounded-lg border border-[#343A45] px-6 py-3 text-sm font-medium text-white transition hover:border-[#CCFF00] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {alreadySaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
