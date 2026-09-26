import { Suspense } from "react";
import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import LoadingWorkouts from "@/components/LoadingWorkouts";
import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";

async function Library() {
  let workouts: Workout[] = [];
  let loadFailed = false;

  try {
    workouts = await getWorkouts();
  } catch {
    loadFailed = true;
  }

  return <WorkoutLibrary workouts={workouts} loadFailed={loadFailed} />;
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Suspense fallback={<LoadingWorkouts />}>
        <Library />
      </Suspense>
    </main>
  );
}
