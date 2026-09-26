import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto mt-6 max-w-[1184px] px-6">
      <div className="flex min-h-[315px] items-center justify-between overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] px-10 py-8">
        {/* Left Content */}
        <div className="max-w-[620px]">
          <p className="mb-4 text-xs font-bold tracking-widest text-[var(--accent)]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-3xl font-black uppercase leading-[0.95] tracking-tight md:text-4xl">
            Train with intent.
            <br />
            Log every set.
          </h1>

          <p className="mt-5 max-w-[520px] text-sm leading-6 text-[var(--muted)]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>

          <Link
            href="#library"
            className="mt-6 inline-flex items-center rounded-md bg-[var(--accent)] px-5 py-3 text-xs font-bold uppercase text-black transition hover:brightness-90"
          >
            Browse Workouts
          </Link>
        </div>

        {/* Banner Image */}
        <div className="hidden h-[280px] w-[360px] items-end justify-center md:flex">
          <Image
            src="/images/fitlog-banner.png"
            alt="FitLog workout illustration"
            width={360}
            height={360}
            className="h-full w-auto object-contain"
            preload
          />
        </div>
      </div>
    </section>
  );
}
