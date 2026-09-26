import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[1184px] flex-col items-center justify-center px-6 py-16 text-center">
      <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
        404
      </p>

      <h1 className="mt-4 font-display text-5xl font-black uppercase leading-none">
        Page Not Found
      </h1>

      <p className="mt-4 max-w-md text-sm text-[var(--muted)]">
        The page you&apos;re looking for doesn&apos;t exist or has been
        moved.
      </p>

      <Link
        href="/"
        className="mt-8 rounded-full bg-[var(--accent)] px-6 py-3 text-xs font-bold uppercase text-black transition hover:brightness-90"
      >
        Back to workouts
      </Link>
    </main>
  );
}
