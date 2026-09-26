interface PlanStatsProps {
  exercises: number;
  minutes: number;
  calories: number;
}

export default function PlanStats({
  exercises,
  minutes,
  calories,
}: PlanStatsProps) {
  return (
    <div className="mt-8 grid grid-cols-1 overflow-hidden rounded-2xl border border-[#272C35] bg-[#15181E] sm:grid-cols-3">
      <StatColumn label="Exercises" value={exercises} highlight />
      <StatColumn label="Minutes" value={minutes} />
      <StatColumn label="Calories" value={calories} />
    </div>
  );
}

function StatColumn({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: number;
  highlight?: boolean;
}) {
  return (
    <div className="border-b border-[#272C35] px-6 py-7 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
      <p className="text-xs font-bold uppercase tracking-wider text-[#9298A3]">
        {label}
      </p>

      <p
        className={`mt-3 font-display text-4xl font-black ${
          highlight ? "text-[#CCFF00]" : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
