interface WorkoutInstructionsProps {
  instructions: string[];
}

export default function WorkoutInstructions({
  instructions,
}: WorkoutInstructionsProps) {
  return (
    <div className="mt-8">
      <h2 className="font-body text-sm font-bold uppercase tracking-widest">
        Instructions
      </h2>

      <ol className="mt-5 space-y-4">
        {instructions.map((instruction, index) => (
          <li
            key={instruction}
            className="font-body text-sm leading-6 text-[var(--muted)]"
          >
            <span className="font-bold">{index + 1}.</span> {instruction}
          </li>
        ))}
      </ol>
    </div>
  );
}
