import Hero from "@/components/Hero";
import WorkoutLibrary from "@/components/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";
import type { Workout } from "@/types/workout";

export default async function Home() {
  let workouts: Workout[] = [];
  let loadFailed = false;

  try {
    workouts = await getWorkouts();
  } catch {
    loadFailed = true;
  }

  return (
    <main className="min-h-screen">
      <Hero />
      <WorkoutLibrary workouts={workouts} loadFailed={loadFailed} />
    </main>
  );
}
