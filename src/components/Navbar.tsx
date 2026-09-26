"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useFitLog } from "@/context/FitLogContext";

const baseLinkClass =
  "rounded-full px-5 py-2 text-sm transition hover:text-white";

const activeLinkClass = "bg-[#1A2312] text-[#C2F800]";

export default function Navbar() {
  const { plan, saved } = useFitLog();
  const pathname = usePathname();

  const onHome = pathname === "/";
  const onMyPlan = pathname.startsWith("/my-plan");
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
            className={`${baseLinkClass} ${
              onHome
                ? activeLinkClass
                : "text-[var(--muted)]"
            }`}
          >
            Workouts
          </Link>

          <Link
            href="/my-plan"
            className={`${baseLinkClass} ${
              onMyPlan
                ? activeLinkClass
                : "text-[var(--muted)] hover:bg-[#182308] hover:text-[var(--accent)]"
            }`}
          >
            My Plan
          </Link>
        </nav>

        {/* Counters */}
        <div className="flex items-center gap-6 text-sm">
          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[var(--muted)]">Plan</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--accent)] px-1.5 text-xs font-bold text-black">
              {plan.length}
            </span>
          </Link>

          <Link href="/my-plan" className="flex items-center gap-2">
            <span className="text-[var(--muted)]">Saved</span>
            <span className="flex h-5 min-w-5 items-center justify-center rounded-full border border-[var(--border)] px-1.5 text-xs text-[var(--muted)]">
              {saved.length}
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}