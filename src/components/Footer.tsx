import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-[1184px] flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/fitlog-logo.png"
            alt="FitLog"
            width={24}
            height={24}
          />
          <span className="text-lg font-bold tracking-tight">FITLOG</span>
        </Link>

        <p className="text-xs text-[var(--muted)]">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
}
