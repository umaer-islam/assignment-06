import Image from "next/image";
import { getWorkout } from "@/lib/api";
import WorkoutSpecs from "@/components/WorkoutSpecs";
import WorkoutInstructions from "@/components/WorkoutInstructions";
import WorkoutActions from "@/components/WorkoutActions";

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
    <main className="mx-auto max-w-[1184px] px-6 py-12">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Left: Image */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] bg-[#111419] lg:aspect-auto lg:h-[min(733px,calc(100vh-180px))]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 586px"
            preload
          />
        </div>

        {/* Right: Details */}
        <div>
          <h1 className="text-4xl font-black uppercase leading-none tracking-tight md:text-[44px]">
            {workout.name}
          </h1>

          <p className="mt-4 max-w-[46ch] text-base leading-[1.5] text-[var(--muted)]">
            {workout.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {workout.muscleGroups.map((group) => (
              <span
                key={group}
                className="rounded-full bg-[var(--accent)] px-3 py-1 text-[10px] font-bold uppercase text-black"
              >
                {group}
              </span>
            ))}
          </div>

          <WorkoutSpecs workout={workout} />
          <WorkoutInstructions instructions={workout.instructions} />
          <WorkoutActions workout={workout} />
        </div>
      </div>
    </main>
  );
}
