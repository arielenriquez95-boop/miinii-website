import { MediaPreview } from "../MediaPreview";

export function GalleryCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group desktop-shimmer relative block aspect-[4/5] w-full overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/5 p-0 text-left shadow-[0_18px_50px_rgba(0,0,0,0.22)] transition duration-500 [@media(hover:hover)]:hover:z-20 [@media(hover:hover)]:hover:scale-105 [@media(hover:hover)]:hover:bg-white/10 [@media(hover:hover)]:hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] focus:outline-none focus:ring-2 focus:ring-[#16C1C1] focus:ring-offset-2 focus:ring-offset-[#070B18] sm:rounded-[1.75rem]"
      aria-label={`Open ${item.title} gallery item`}
    >
      <MediaPreview src={item.image} alt={`${item.title} gallery item`} className="size-full object-cover transition duration-500 group-hover:scale-105" lazy />
      <div className="pointer-events-none absolute inset-0 bg-slate-950/0 transition duration-500 group-hover:bg-slate-950/15" />
    </button>
  );
}
