export default function MiiniiOnePageWebsite() {
  const products = [
    {
      title: "Miinii Me",
      subtitle: "Custom human mini figure",
      desc: "A personalized mini figure made from your photos, carefully sculpted, resin printed, and hand-painted.",
      price: "Starts at ₱3,490+",
    },
    {
      title: "Miinii Pet",
      subtitle: "Custom pet mini figure",
      desc: "Turn your beloved pet into a keepsake mini figure with charming details and a handcrafted finish.",
      price: "Starts at ₱3,490+",
    },
    {
      title: "Miinii Duo",
      subtitle: "Two-person custom figure",
      desc: "Perfect for couples, best friends, and memorable gift ideas made into one meaningful display piece.",
      price: "Custom quote",
    },
    {
      title: "Miinii POP",
      subtitle: "Cute stylized figure",
      desc: "A playful and adorable version of you in Miinii’s signature stylized look.",
      price: "Custom quote",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Send your photos",
      desc: "Share clear reference photos and your preferred pose, outfit, or concept.",
    },
    {
      num: "02",
      title: "3D sculpting preview",
      desc: "We create your digital 3D preview for checking before production starts.",
    },
    {
      num: "03",
      title: "Resin printing & painting",
      desc: "Your Miinii is printed in high resolution and carefully hand-painted.",
    },
    {
      num: "04",
      title: "Finishing & gift packaging",
      desc: "Your custom figure is finalized, quality checked, and packed in a signature Miinii gift box.",
    },
  ];

  const faqs = [
    {
      q: "How do I order?",
      a: "Send us your photos, preferred size or concept, and any special details. We’ll guide you through the next steps.",
    },
    {
      q: "Do I get to approve the design first?",
      a: "Yes. 3D printing only proceeds once you approve the digital preview.",
    },
    {
      q: "How long does it take?",
      a: "Standard production usually takes around 2–4 weeks depending on the complexity and queue.",
    },
    {
      q: "Will the final product look exactly like the preview?",
      a: "The preview is for approval and guidance. Small differences may happen once the figure is printed and hand-painted.",
    },
    {
      q: "Is this a good gift?",
      a: "Yes. Miinii is designed to be a meaningful custom gift for birthdays, anniversaries, graduations, pets, and special milestones.",
    },
    {
      q: "Do you ship nationwide?",
      a: "Yes, shipping options can be arranged depending on your location.",
    },
  ];

  const testimonials = [
    {
      name: "Happy Client",
      text: "Super unique and meaningful. The final figure felt very personal and beautifully made.",
    },
    {
      name: "Gift Buyer",
      text: "Perfect as a keepsake gift. The details and packaging made it extra special.",
    },
    {
      name: "Pet Owner",
      text: "Our custom pet Miinii turned out adorable. It captured the charm of our pet really well.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
          <div className="min-w-0">
            <div className="text-xl font-black tracking-tight text-[#ef6a30] sm:text-2xl">Miinii</div>
            <div className="text-[11px] text-zinc-500 sm:text-xs">3D custom mini figures</div>
          </div>
          <nav className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="transition hover:text-[#ef6a30]">About</a>
            <a href="#how-it-works" className="transition hover:text-[#ef6a30]">How it Works</a>
            <a href="#products" className="transition hover:text-[#ef6a30]">Products</a>
            <a href="#faq" className="transition hover:text-[#ef6a30]">FAQ</a>
            <a href="#contact" className="transition hover:text-[#ef6a30]">Contact</a>
          </nav>
          <a
            href="#contact"
            className="shrink-0 rounded-full bg-[#ef6a30] px-4 py-2 text-xs font-semibold text-white shadow-sm transition hover:scale-[1.02] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Order Now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(31,183,166,0.14),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(239,106,48,0.15),_transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 sm:py-20 md:grid-cols-2 md:items-center md:py-24 lg:py-28">
            <div>
              <div className="mb-4 inline-flex max-w-full rounded-full border border-[#1fb7a6]/20 bg-[#1fb7a6]/10 px-3 py-1.5 text-xs font-medium text-[#138b80] sm:px-4 sm:text-sm">
                Personalized keepsakes made into mini art
              </div>
              <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                Turn your photos into <span className="text-[#ef6a30]">custom 3D mini figures</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-600 sm:mt-6 sm:text-lg sm:leading-8">
                Miinii creates custom 3D mini figures based on real people and pets. Each piece is carefully sculpted,
                resin printed, and hand-painted to become a one-of-a-kind gift or keepsake.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a
                  href="#contact"
                  className="w-full rounded-full bg-[#ef6a30] px-6 py-3.5 text-center font-semibold text-white shadow-lg shadow-orange-200 transition hover:translate-y-[-1px] sm:w-auto sm:px-7"
                >
                  Start Your Order
                </a>
                <a
                  href="#how-it-works"
                  className="w-full rounded-full border border-zinc-200 px-6 py-3.5 text-center font-semibold text-zinc-700 transition hover:border-[#1fb7a6] hover:text-[#1fb7a6] sm:w-auto sm:px-7"
                >
                  See the Process
                </a>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-zinc-500 sm:mt-10 sm:flex sm:flex-wrap sm:gap-6">
                <div><span className="font-semibold text-zinc-900">Custom-made</span> for every order</div>
                <div><span className="font-semibold text-zinc-900">Hand-painted</span> finish</div>
                <div><span className="font-semibold text-zinc-900">Gift-ready</span> packaging</div>
              </div>
            </div>

            <div className="grid gap-4 md:pl-4 lg:pl-10">
              <div className="rounded-[1.5rem] border border-zinc-100 bg-white p-3 shadow-xl shadow-zinc-200/40 sm:rounded-[2rem] sm:p-5">
                <div className="aspect-[4/4.7] rounded-[1.25rem] bg-gradient-to-br from-[#fff4ef] via-white to-[#ecfffb] p-4 sm:rounded-[1.5rem] sm:p-6">
                  <div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-zinc-200 bg-white/80 px-4 text-center sm:rounded-[1.25rem]">
                    <div>
                      <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-[#ef6a30]/10 text-3xl sm:h-24 sm:w-24 sm:text-4xl">
                        🧡
                      </div>
                      <p className="px-2 text-base font-semibold text-zinc-700 sm:px-6 sm:text-lg">Your Miinii hero image, product photo, or featured figure can go here.</p>
                      <p className="mt-2 px-2 text-sm leading-6 text-zinc-500 sm:px-6">Replace this with your best product shot or lifestyle mockup.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-zinc-100 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-black text-[#ef6a30]">100%</div>
                  <p className="mt-1 text-sm text-zinc-600">customized from your references</p>
                </div>
                <div className="rounded-3xl border border-zinc-100 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-black text-[#1fb7a6]">2–4 weeks</div>
                  <p className="mt-1 text-sm text-zinc-600">standard production timeline</p>
                </div>
                <div className="rounded-3xl border border-zinc-100 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-black text-zinc-900">Gift-ready</div>
                  <p className="mt-1 text-sm text-zinc-600">signature Miinii packaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1fb7a6] sm:text-sm">About Miinii</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">A custom figure made to feel personal, memorable, and display-worthy</h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Miinii transforms your favorite people and pets into handcrafted 3D mini figures. Whether it’s for a birthday,
                graduation, anniversary, memorial keepsake, or just something special for yourself, each piece is made with care
                to capture your story in miniature form.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                From digital sculpting to resin printing and hand painting, the process is focused on detail, character, and a
                premium custom-made feel.
              </p>
            </div>
            <div className="rounded-[1.5rem] bg-zinc-50 p-5 sm:rounded-[2rem] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="text-3xl">🎁</div>
                  <div className="mt-3 font-bold">Meaningful gift</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Perfect for special occasions and sentimental keepsakes.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="text-3xl">🖌️</div>
                  <div className="mt-3 font-bold">Hand-finished</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Carefully painted for a crafted and premium look.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="text-3xl">🧍</div>
                  <div className="mt-3 font-bold">Made from photos</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Based on your real reference photos and ideas.</p>
                </div>
                <div className="rounded-3xl bg-white p-5 shadow-sm">
                  <div className="text-3xl">📦</div>
                  <div className="mt-3 font-bold">Gift-box ready</div>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">Finished with packaging made for gifting and display.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-zinc-50 py-14 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ef6a30] sm:text-sm">How it works</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">From your photos to a finished Miinii</h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                A simple step-by-step process designed to make custom ordering easy and clear.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {steps.map((step) => (
                <div key={step.num} className="rounded-[1.5rem] bg-white p-5 shadow-sm ring-1 ring-zinc-100 sm:rounded-[2rem] sm:p-6">
                  <div className="text-sm font-black tracking-[0.18em] text-[#1fb7a6]">{step.num}</div>
                  <h3 className="mt-4 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1fb7a6] sm:text-sm">Products</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Choose the Miinii that fits your story</h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Offer customized options for people, pets, pairs, and stylized concepts.
              </p>
            </div>
            <div className="w-full rounded-2xl bg-[#ef6a30]/10 px-4 py-3 text-sm font-medium text-[#ef6a30] md:w-auto md:rounded-full md:py-2">
              Final pricing may vary depending on details and complexity
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {products.map((item) => (
              <div key={item.title} className="group rounded-[1.5rem] border border-zinc-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:rounded-[2rem] sm:p-6">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ef6a30]/15 to-[#1fb7a6]/15 text-2xl">
                  ✨
                </div>
                <div className="text-xl font-black tracking-tight">{item.title}</div>
                <div className="mt-1 text-sm font-medium text-[#1fb7a6]">{item.subtitle}</div>
                <p className="mt-4 leading-7 text-zinc-600 sm:min-h-[96px]">{item.desc}</p>
                <div className="mt-6 font-semibold text-[#ef6a30]">{item.price}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-950 py-14 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1fb7a6] sm:text-sm">Why people love Miinii</div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">More than a figure — it’s a keepsake with personality</h2>
                <p className="mt-5 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                  Miinii is designed for people who want something personal, creative, and display-worthy. It’s a gift that feels
                  thoughtful because it is made specifically for one person, one pet, one memory.
                </p>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((item) => (
                  <div key={item.name} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur sm:rounded-[2rem]">
                    <div className="text-lg">★★★★★</div>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">“{item.text}”</p>
                    <div className="mt-4 text-sm font-semibold text-white">{item.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="rounded-[1.75rem] bg-gradient-to-r from-[#fff4ef] to-[#ecfffb] p-5 sm:rounded-[2.25rem] sm:p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#ef6a30] sm:text-sm">Gallery</div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Show your best custom works here</h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                  Add a curated gallery of finished Miinii figures, close-up details, packaging shots, and client gift moments to build trust and excitement.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="aspect-square rounded-[1.25rem] bg-white p-3 shadow-sm sm:rounded-[1.75rem] sm:p-4"><div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-zinc-200 text-sm text-zinc-400 sm:rounded-[1.25rem]">Photo 1</div></div>
                <div className="aspect-square rounded-[1.25rem] bg-white p-3 shadow-sm sm:rounded-[1.75rem] sm:p-4"><div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-zinc-200 text-sm text-zinc-400 sm:rounded-[1.25rem]">Photo 2</div></div>
                <div className="aspect-square rounded-[1.25rem] bg-white p-3 shadow-sm sm:rounded-[1.75rem] sm:p-4"><div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-zinc-200 text-sm text-zinc-400 sm:rounded-[1.25rem]">Photo 3</div></div>
                <div className="aspect-square rounded-[1.25rem] bg-white p-3 shadow-sm sm:rounded-[1.75rem] sm:p-4"><div className="flex h-full items-center justify-center rounded-[1rem] border border-dashed border-zinc-200 text-sm text-zinc-400 sm:rounded-[1.25rem]">Photo 4</div></div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-zinc-50 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="text-center">
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1fb7a6] sm:text-sm">FAQ</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Common questions</h2>
            </div>
            <div className="mt-10 space-y-4 sm:mt-12">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-[1.25rem] bg-white p-5 shadow-sm ring-1 ring-zinc-100 sm:rounded-[1.75rem] sm:p-6">
                  <h3 className="text-lg font-bold">{item.q}</h3>
                  <p className="mt-2 leading-7 text-zinc-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20">
          <div className="grid gap-6 rounded-[1.75rem] bg-zinc-950 p-5 text-white sm:rounded-[2.25rem] sm:p-8 md:grid-cols-[1fr_0.9fr] md:gap-8 md:p-12">
            <div>
              <div className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#1fb7a6] sm:text-sm">Contact / Order</div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Ready to create your Miinii?</h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                Send your photos and idea, and we’ll help turn them into a custom 3D mini figure you can proudly display or gift.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                <a href="https://facebook.com" className="w-full rounded-full bg-[#ef6a30] px-6 py-3 text-center font-semibold text-white sm:w-auto">Message on Facebook</a>
                <a href="https://instagram.com" className="w-full rounded-full border border-white/15 px-6 py-3 text-center font-semibold text-white sm:w-auto">View Instagram</a>
              </div>
            </div>

            <div className="rounded-[1.5rem] bg-white p-5 text-zinc-900 sm:rounded-[1.75rem] sm:p-6">
              <h3 className="text-xl font-black">Quick inquiry</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">This can be replaced with a form, chat button, or your direct contact details.</p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Email</div>
                  <div className="mt-1 font-medium break-all">your@email.com</div>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Location</div>
                  <div className="mt-1 font-medium">Philippines</div>
                </div>
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Production Time</div>
                  <div className="mt-1 font-medium">Approx. 2–4 weeks</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-zinc-500 sm:px-6 sm:py-8 md:flex-row md:items-center md:justify-between md:gap-4">
          <div>
            <span className="font-bold text-zinc-900">Miinii</span> — 3D custom mini figures
          </div>
          <div>Custom-made with care for meaningful gifts and keepsakes.</div>
        </div>
      </footer>
    </div>
  );
}
