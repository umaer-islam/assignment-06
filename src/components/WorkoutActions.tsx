export default function WorkoutActions() {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <button className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase text-black transition hover:brightness-90">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        >
          <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9.5v5M20.5 9.5v5M6.5 12h11" />
        </svg>
        Add to today&apos;s plan
      </button>

      <button className="inline-flex items-center justify-center gap-2 rounded-md border border-[#303744] bg-transparent px-5 py-3 text-xs font-bold uppercase text-white transition hover:bg-[#1c2027]">
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 4h12v16l-6-4-6 4z" />
        </svg>
        Save for later
      </button>
    </div>
  );
}
