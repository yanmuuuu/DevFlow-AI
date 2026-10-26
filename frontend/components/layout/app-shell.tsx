import Link from "next/link";

const navItems = [
  { href: "/", label: "Workspace" },
  { href: "/knowledge", label: "项目知识" },
  { href: "/rag", label: "RAG 工作室" },
  { href: "/repos", label: "Repos" },
  { href: "/action-drafts", label: "Drafts" },
  { href: "/workflow-runs", label: "Runs" },
  { href: "/workspaces", label: "Reports" },
  { href: "/code-graph", label: "Code Graph" },
  { href: "/evals", label: "Evals" }
];

function CatMark() {
  return (
    <svg viewBox="0 0 48 40" className="h-8 w-9 shrink-0" aria-hidden="true">
      <path className="meow-tail" d="M38 30c5-1 8-5 6-10" fill="none" stroke="#5cc897" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M8 14 6 2l10 7M36 14l2-12-10 7" fill="#ffffff" stroke="#3db17e" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9.5 10.5 8.5 5.5l4 3M34.5 10.5l1-5-4 3" fill="#ffc9d6" />
      <ellipse cx="22" cy="22" rx="16" ry="13" fill="#ffffff" stroke="#3db17e" strokeWidth="2" />
      <ellipse className="meow-eye" cx="16" cy="21" rx="2" ry="2.6" fill="#1f5f47" />
      <ellipse className="meow-eye" cx="28" cy="21" rx="2" ry="2.6" fill="#1f5f47" />
      <path d="M21 25.5h2l-1 1.2z" fill="#ff9fb5" />
      <path d="M19 27.5c1.4 1.4 2.4 1.4 3 0 .6 1.4 1.6 1.4 3 0" fill="none" stroke="#1f5f47" strokeWidth="1.2" strokeLinecap="round" />
      <ellipse cx="12" cy="26" rx="2.6" ry="1.6" fill="#ffd3de" opacity="0.8" />
      <ellipse cx="32" cy="26" rx="2.6" ry="1.6" fill="#ffd3de" opacity="0.8" />
    </svg>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen">
      <div className="border-b border-line bg-white/85 px-4 py-2.5 shadow-sm shadow-teal-100/70 backdrop-blur">
        <div className="flex flex-wrap items-center gap-2">
          <div className="mr-3 flex items-center gap-1.5">
            <CatMark />
            <span className="text-sm font-bold tracking-wide text-teal-800">DevFlow AI</span>
            <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[11px] font-semibold text-teal-600">喵~</span>
          </div>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-full px-3 py-1.5 text-sm text-slate-600 transition hover:bg-teal-50 hover:text-teal-800">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full p-3">{children}</div>
    </main>
  );
}
