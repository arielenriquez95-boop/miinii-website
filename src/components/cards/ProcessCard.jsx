export function ProcessCard({ step, index }) {
  return (
    <article className="group desktop-shimmer relative h-full w-full overflow-hidden rounded-[1.5rem] border border-slate-100 bg-[#fff8f3] p-3 text-left shadow-sm transition-[transform,box-shadow] duration-500 ease-out [@media(hover:hover)]:hover:-translate-y-2 [@media(hover:hover)]:hover:shadow-xl [@media(hover:hover)]:hover:shadow-orange-100/70 sm:rounded-[2rem] sm:p-5">
      <div className="desktop-float mb-3 aspect-[4/3] overflow-hidden rounded-[1.1rem] bg-transparent sm:mb-5 sm:rounded-[1.5rem]">
        <img src={step.image} alt={`${step.title} process image`} className="h-full w-full object-contain transition-transform duration-500 ease-out [@media(hover:hover)]:group-hover:scale-[1.04]" />
      </div>
      <div className="mb-3 inline-flex rounded-full bg-[#ff6f31] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white shadow-sm shadow-orange-200 sm:text-xs">Step {index + 1}</div>
      <h3 className="text-base font-black text-slate-950 sm:text-xl">{step.title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-600 sm:mt-3 sm:text-sm sm:leading-6">{step.text}</p>
    </article>
  );
}
