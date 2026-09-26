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
      <div className="mx-auto flex max-w-[1184px] flex-wrap items-center justify-between gap-x-4 gap-y-2 px-6 py-4 md:h-20 md:flex-nowrap md:gap-0 md:py-0">
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src="/images/fitlog-logo.png"
            alt="FitLog"
            width={28}
            height={28}
          />

          <span className="text-xl font-bold tracking-tight">FITLOG</span>
        </Link>

        {/* Navigation */}
        <nav className="order-last flex w-full items-center justify-center gap-2 md:order-none md:w-auto md:justify-start">
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
        <div className="order-2 flex items-center gap-4 text-sm md:order-none md:gap-6">
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