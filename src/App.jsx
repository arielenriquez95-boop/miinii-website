function PngHeroPlaceholder() {
  return (
    <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f8fafc_45%,_#eef2f7_100%)]">
      {/* soft glow */}
      <div className="absolute left-1/2 top-[18%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#ff6f31]/10 blur-3xl" />
      <div className="absolute bottom-10 left-1/2 h-10 w-40 -translate-x-1/2 rounded-full bg-slate-300/40 blur-2xl" />

      <div className="relative flex flex-col items-center justify-center text-center">
        <div className="mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/80 shadow-lg shadow-slate-200">
          <svg
            className="h-10 w-10 text-[#ff6f31]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M7 16V8" />
            <path d="M17 16V8" />
            <path d="M3 12h18" />
            <path d="M8 5h8" />
            <path d="M8 19h8" />
            <path d="M9 8l-2 8" />
            <path d="M15 8l2 8" />
          </svg>
        </div>

        <p className="max-w-xs px-4 text-xl font-black text-slate-900 sm:text-2xl">
          Place your Miinii PNG image here
        </p>
        <p className="mt-2 max-w-sm px-6 text-sm leading-6 text-slate-500">
          Best for a borderless cutout product image with transparent background.
        </p>
      </div>
    </div>
  );
}

function PremiumCollageCard({ title, subtitle = "Image placeholder", className = "", delay = "" }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[1.75rem] bg-white p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_22px_60px_rgba(15,23,42,0.14)] ${delay} ${className}`}
    >
      <div className="absolute inset-0 rounded-[1.75rem] bg-gradient-to-br from-white via-transparent to-[#ff6f31]/5 pointer-events-none" />
      <div className="relative flex h-full flex-col overflow-hidden rounded-[1.2rem] bg-[linear-gradient(145deg,#ffffff,#f8fafc)]">
        <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,_rgba(255,111,49,0.12),_transparent_35%)]" />

        <div className="flex flex-1 items-center justify-center p-6">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff3ec] text-[#ff6f31] shadow-sm">
              <svg
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M7 15l3-3a1.5 1.5 0 0 1 2.1 0L17 17" />
                <circle cx="9" cy="9" r="1.2" />
              </svg>
            </div>
            <p className="text-sm font-bold text-slate-900 sm:text-base">{title}</p>
            <p className="mt-1 text-xs text-slate-500 sm:text-sm">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 px-4 py-3">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Miinii
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Photo Slot
          </span>
        </div>
      </div>
    </div>
  );
}
