import { Workout } from "@/types/workout";

const API_URL = "https://api.api-store.workers.dev/api/fitlog";

const MAX_ATTEMPTS = 3;

async function fetchFromApi<T>(
  path: string,
  errorMessage: string
): Promise<T> {
  let lastError: unknown;

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const response = await fetch(`${API_URL}${path}`, {
        next: { revalidate: 300 },
      });

      if (response.ok) {
        return response.json();
      }

      lastError = new Error(errorMessage);

      if (response.status !== 429) {
        break;
      }
    } catch (error) {
      lastError = error;
    }

    if (attempt < MAX_ATTEMPTS) {
      await new Promise((resolve) => setTimeout(resolve, attempt * 1000));
    }
  }

  throw lastError instanceof Error
    ? lastError
    : new Error(errorMessage);
}

export async function getWorkouts(): Promise<Workout[]> {
  return fetchFromApi<Workout[]>("", "Failed to fetch workouts");
}

export async function getWorkout(id: string): Promise<Workout> {
  return fetchFromApi<Workout>(`/${id}`, "Workout not found");
}
