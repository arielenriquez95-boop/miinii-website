import { StarIcon } from "../icons/StarIcon";

export function TestimonialCard({ testimonial }) {
  return (
    <article className="group relative flex min-h-[235px] h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/25 bg-white/95 p-4 shadow-xl shadow-teal-950/10 backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-white/50 hover:bg-white hover:shadow-2xl hover:shadow-teal-950/20 sm:min-h-[245px] sm:p-5 lg:min-h-[260px]">
      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-[#16C1C1]/10 transition duration-500 group-hover:scale-125" />
      <div className="relative mb-3 flex gap-0.5 text-[#ff6f31] sm:mb-4">
        {Array.from({ length: 5 }, (_, i) => (
          <StarIcon key={i} className="h-3.5 w-3.5" />
        ))}
      </div>
      <p className="relative line-clamp-6 text-sm font-medium leading-6 text-slate-600">“{testimonial.text}”</p>
      <div className="relative mt-auto border-t border-slate-100 pt-4">
        <h3 className="text-xs font-black text-slate-950 sm:text-sm">{testimonial.name}</h3>
        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400 sm:text-xs sm:tracking-[0.14em]">{testimonial.role}</p>
      </div>
    </article>
  );
}
