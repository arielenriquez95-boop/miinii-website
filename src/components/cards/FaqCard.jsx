export function FaqCard({ faq }) {
  return (
    <article className="group relative flex min-h-[185px] h-full flex-col overflow-hidden rounded-[1.35rem] bg-white p-4 shadow-md shadow-orange-100/50 ring-1 ring-orange-100/70 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:ring-[#16C1C1]/30 sm:min-h-[205px] sm:p-5 lg:min-h-[220px]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#0F766E] via-[#16C1C1] to-[#0E7490]" />
      <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#16C1C1]/10 transition duration-500 group-hover:scale-125" />
      <h3 className="relative pr-2 text-sm font-black leading-5 text-slate-950 sm:text-lg sm:leading-6">{faq.q}</h3>
      <p className="relative mt-3 text-sm leading-5 text-slate-600 sm:leading-6">{faq.a}</p>
    </article>
  );
}
