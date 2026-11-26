"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Demo: skip real auth and go to discover
    setTimeout(() => {
      router.push("/discover");
    }, 600);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--background)]">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6 py-12">
        <div className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold">
            <span>📍</span> Mtaani
          </Link>
          <p className="mt-2 text-[var(--muted)]">Welcome back</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="mb-1.5 block text-sm font-medium">Email or phone</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com or 07XX..."
              className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3.5 text-base outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-rose-100"
              required
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3.5 text-base outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-rose-100"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[var(--primary)] py-4 text-base font-semibold text-white transition hover:bg-[var(--primary-dark)] disabled:opacity-60 active:scale-[0.98]"
          >
            {loading ? "Signing in…" : "Log in"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[var(--muted)]">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-[var(--primary)]">
            Sign up
          </Link>
        </p>

        <p className="mt-4 text-center text-xs text-[var(--muted)]">
          Demo mode — any credentials will work
        </p>
      </div>
    </div>
  );
}
