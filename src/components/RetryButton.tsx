"use client";

import { useRouter } from "next/navigation";

export default function RetryButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.refresh()}
      className="mt-6 rounded-full border border-[var(--border)] px-6 py-3 text-xs font-bold uppercase text-white transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
    >
      Try Again
    </button>
  );
}
