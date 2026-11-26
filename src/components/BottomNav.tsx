"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/discover", label: "Discover", icon: "🔥" },
  { href: "/matches", label: "Matches", icon: "💬" },
  { href: "/safety", label: "Safety", icon: "🛡️" },
  { href: "/profile", label: "Profile", icon: "👤" },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--border)] bg-white/95 backdrop-blur-md safe-area-pb">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 py-2">
        {links.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-1 flex-col items-center gap-0.5 rounded-xl py-2 text-xs font-medium transition ${
                active
                  ? "text-[var(--primary)]"
                  : "text-[var(--muted)] hover:text-[var(--foreground)]"
              }`}
            >
              <span className="text-xl leading-none">{link.icon}</span>
              <span>{link.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
