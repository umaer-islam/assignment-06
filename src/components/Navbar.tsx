import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="border-b border-[var(--border)]">
      <div className="mx-auto flex h-20 max-w-[1184px] items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/fitlog-logo.png"
            alt="FitLog"
            width={28}
            height={28}
          />

          <span className="text-xl font-bold tracking-tight">FITLOG</span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-full px-5 py-2 text-sm text-[var(--muted)] transition hover:text-white"
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className="rounded-full px-5 py-2 text-sm text-[var(--muted)] transition hover:bg-[#182308] hover:text-[var(--accent)]"
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[var(--muted)]">Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--accent)] px-1.5 text-xs font-bold text-black">
              0
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[var(--muted)]">Saved</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[var(--border)] px-1.5 text-xs text-[var(--muted)]">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}