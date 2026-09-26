"use client";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1184px] flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="font-display text-4xl font-black uppercase">
        Something went wrong
      </h1>

      <p className="mt-3 max-w-md text-sm text-[var(--muted)]">
        {error.message ||
          "We couldn't load this page right now. Please try again."}
      </p>

      <button
        onClick={reset}
        className="mt-6 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase text-black transition hover:brightness-90"
      >
        Try again
      </button>
    </main>
  );
}
