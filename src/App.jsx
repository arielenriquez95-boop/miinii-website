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
    <div className="min-h-screen overflow-x-hidden bg-white text-zinc-900">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatSoft {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.55;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.08);
          }
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease both;
        }

        .animate-float-soft {
          animation: floatSoft 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 5s ease-in-out infinite;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-5 md:px-6 md:py-4">
          <a href="/" className="flex shrink-0 items-center">
            <img
              src="/miinii-logo.png"
              alt="Miinii logo"
              className="h-8 w-auto sm:h-9 md:h-12"
            />
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-700 md:flex">
            <a href="#about" className="transition hover:text-[#ef6a30]">
              About
            </a>
            <a href="#how-it-works" className="transition hover:text-[#ef6a30]">
              Process
            </a>
            <a href="#products" className="transition hover:text-[#ef6a30]">
              Products
            </a>
            <a href="#faq" className="transition hover:text-[#ef6a30]">
              FAQ
            </a>
            <a href="#contact" className="transition hover:text-[#ef6a30]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full bg-[#ef6a30] px-4 py-2 text-xs font-bold text-white shadow-md shadow-orange-200 transition hover:scale-[1.03] active:scale-[0.98] sm:px-5 sm:py-2.5 sm:text-sm"
          >
            Order Now
          </a>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(31,183,166,0.18),_transparent_35%),radial-gradient(circle_at_top_left,_rgba(239,106,48,0.18),_transparent_36%)]" />
          <div className="animate-pulse-glow absolute right-[-80px] top-24 h-56 w-56 rounded-full bg-[#1fb7a6]/20 blur-3xl" />
          <div className="animate-pulse-glow absolute bottom-8 left-[-90px] h-56 w-56 rounded-full bg-[#ef6a30]/20 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-12 pt-10 sm:px-5 sm:pb-16 md:grid-cols-2 md:items-center md:gap-10 md:px-6 md:py-24 lg:py-28">
            <div className="order-2 text-center md:order-1 md:text-left">
              <div className="animate-fade-up mb-4 inline-flex max-w-full rounded-full border border-[#1fb7a6]/20 bg-[#1fb7a6]/10 px-4 py-1.5 text-xs font-bold text-[#138b80] sm:text-sm">
                Personalized keepsakes made into mini art
              </div>

              <h1 className="animate-fade-up delay-100 mx-auto max-w-[22rem] text-[2.55rem] font-black leading-[0.98] tracking-tight sm:max-w-xl sm:text-6xl md:mx-0 md:text-6xl lg:text-7xl">
                Turn your photos into{" "}
                <span className="text-[#ef6a30]">custom 3D mini figures</span>
              </h1>

              <p className="animate-fade-up delay-200 mx-auto mt-5 max-w-md text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8 md:mx-0 md:max-w-xl">
                Miinii creates custom 3D mini figures based on real people and
                pets. Each piece is carefully sculpted, resin printed, and
                hand-painted to become a one-of-a-kind gift or keepsake.
              </p>

              <div className="animate-fade-up delay-300 mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center md:justify-start">
                <a
                  href="#contact"
                  className="rounded-full bg-[#ef6a30] px-7 py-3.5 text-center font-bold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-1 active:translate-y-0"
                >
                  Start Your Order
                </a>
                <a
                  href="#how-it-works"
                  className="rounded-full border border-zinc-200 bg-white px-7 py-3.5 text-center font-bold text-zinc-700 shadow-sm transition hover:-translate-y-1 hover:border-[#1fb7a6] hover:text-[#1fb7a6] active:translate-y-0"
                >
                  See the Process
                </a>
              </div>

              <div className="animate-fade-up delay-400 mt-8 grid gap-3 text-center text-sm text-zinc-500 sm:grid-cols-3 md:text-left">
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-zinc-100">
                  <span className="font-bold text-zinc-900">Custom-made</span>
                  <br />
                  for every order
                </div>
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-zinc-100">
                  <span className="font-bold text-zinc-900">Hand-painted</span>
                  <br />
                  finish
                </div>
                <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-zinc-100">
                  <span className="font-bold text-zinc-900">Gift-ready</span>
                  <br />
                  packaging
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative mx-auto w-full max-w-[430px] md:max-w-none">
                <div className="absolute inset-x-8 bottom-3 h-16 rounded-full bg-[#ef6a30]/20 blur-2xl" />

                <div className="animate-float-soft relative mx-auto w-full overflow-hidden rounded-[2rem]">
                  <img
                    src="/hero-image.png"
                    alt="Miinii featured figure"
                    className="mx-auto h-auto w-full max-w-[390px] object-contain sm:max-w-[480px] md:max-w-[560px] lg:max-w-[620px]"
                  />
                </div>

                <div className="mt-4 grid grid-cols-3 gap-2 sm:gap-3">
                  <div className="rounded-2xl border border-zinc-100 bg-white/90 p-3 text-center shadow-sm backdrop-blur sm:rounded-3xl sm:p-4">
                    <div className="text-base font-black text-[#ef6a30] sm:text-xl md:text-2xl">
                      100%
                    </div>
                    <p className="mt-1 text-[10px] leading-4 text-zinc-600 sm:text-xs md:text-sm">
                      customized
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 bg-white/90 p-3 text-center shadow-sm backdrop-blur sm:rounded-3xl sm:p-4">
                    <div className="text-base font-black text-[#1fb7a6] sm:text-xl md:text-2xl">
                      2–4
                    </div>
                    <p className="mt-1 text-[10px] leading-4 text-zinc-600 sm:text-xs md:text-sm">
                      weeks
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-100 bg-white/90 p-3 text-center shadow-sm backdrop-blur sm:rounded-3xl sm:p-4">
                    <div className="text-base font-black text-zinc-900 sm:text-xl md:text-2xl">
                      Gift
                    </div>
                    <p className="mt-1 text-[10px] leading-4 text-zinc-600 sm:text-xs md:text-sm">
                      ready
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="mx-auto max-w-7xl px-4 py-14 sm:px-5 md:px-6 md:py-20"
        >
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-10">
            <div className="animate-fade-up">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1fb7a6]">
                About Miinii
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                A custom figure made to feel personal, memorable, and
                display-worthy
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Miinii transforms your favorite people and pets into
                handcrafted 3D mini figures. Whether it’s for a birthday,
                graduation, anniversary, memorial keepsake, or just something
                special for yourself, each piece is made with care to capture
                your story in miniature form.
              </p>
            </div>

            <div className="rounded-[2rem] bg-zinc-50 p-4 sm:p-5 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["🎁", "Meaningful gift", "Perfect for special occasions and sentimental keepsakes."],
                  ["🖌️", "Hand-finished", "Carefully painted for a crafted and premium look."],
                  ["🧍", "Made from photos", "Based on your real reference photos and ideas."],
                  ["📦", "Gift-box ready", "Finished with packaging made for gifting and display."],
                ].map(([icon, title, text]) => (
                  <div
                    key={title}
                    className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="text-3xl">{icon}</div>
                    <div className="mt-3 font-bold">{title}</div>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="bg-zinc-50 py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
            <div className="max-w-2xl">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ef6a30]">
                How it works
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                From your photos to a finished Miinii
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                A simple step-by-step process designed to make custom ordering
                easy and clear.
              </p>
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2 md:mt-12 xl:grid-cols-4">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="group rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1fb7a6]/10 text-sm font-black tracking-[0.12em] text-[#1fb7a6] transition group-hover:bg-[#ef6a30]/10 group-hover:text-[#ef6a30]">
                    {step.num}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{step.title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="products"
          className="mx-auto max-w-7xl px-4 py-14 sm:px-5 md:px-6 md:py-20"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1fb7a6]">
                Products
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Choose the Miinii that fits your story
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                Customized options for people, pets, pairs, and stylized
                concepts.
              </p>
            </div>

            <div className="rounded-3xl bg-[#ef6a30]/10 px-4 py-3 text-sm font-bold text-[#ef6a30] md:max-w-xs md:rounded-full md:py-2 md:text-center">
              Final pricing may vary depending on details and complexity
            </div>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 md:mt-12 xl:grid-cols-4">
            {products.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-zinc-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#ef6a30]/15 to-[#1fb7a6]/15 text-2xl transition group-hover:scale-110">
                  ✨
                </div>
                <div className="text-xl font-black tracking-tight">
                  {item.title}
                </div>
                <div className="mt-1 text-sm font-bold text-[#1fb7a6]">
                  {item.subtitle}
                </div>
                <p className="mt-4 leading-7 text-zinc-600">{item.desc}</p>
                <div className="mt-6 inline-flex rounded-full bg-[#ef6a30]/10 px-4 py-2 text-sm font-black text-[#ef6a30]">
                  {item.price}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-zinc-950 py-14 text-white md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-5 md:px-6">
            <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-10">
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1fb7a6]">
                  Why people love Miinii
                </div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  More than a figure — it’s a keepsake with personality
                </h2>
                <p className="mt-5 text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                  Miinii is designed for people who want something personal,
                  creative, and display-worthy. It’s a gift that feels
                  thoughtful because it is made specifically for one person, one
                  pet, one memory.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {testimonials.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[2rem] border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <div className="text-sm text-[#ef6a30]">★★★★★</div>
                    <p className="mt-4 text-sm leading-7 text-zinc-300">
                      “{item.text}”
                    </p>
                    <div className="mt-4 text-sm font-bold text-white">
                      {item.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-14 sm:px-5 md:px-6 md:py-20">
          <div className="rounded-[2rem] bg-gradient-to-r from-[#fff4ef] to-[#ecfffb] p-5 md:rounded-[2.25rem] md:p-12">
            <div className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#ef6a30]">
                  Gallery
                </div>
                <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                  Show your best custom works here
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                  Add a curated gallery of finished Miinii figures, close-up
                  details, packaging shots, and client gift moments to build
                  trust and excitement.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {["Photo 1", "Photo 2", "Photo 3", "Photo 4"].map((photo) => (
                  <div
                    key={photo}
                    className="aspect-square rounded-[1.5rem] bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-md md:rounded-[1.75rem] md:p-4"
                  >
                    <div className="flex h-full items-center justify-center rounded-[1.25rem] border border-dashed border-zinc-200 text-sm font-medium text-zinc-400">
                      {photo}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-zinc-50 py-14 md:py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-5 md:px-6">
            <div className="text-center">
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1fb7a6]">
                FAQ
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Common questions
              </h2>
            </div>

            <div className="mt-9 space-y-4 md:mt-12">
              {faqs.map((item) => (
                <div
                  key={item.q}
                  className="rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-zinc-100 transition hover:-translate-y-1 hover:shadow-md sm:p-6"
                >
                  <h3 className="text-lg font-black">{item.q}</h3>
                  <p className="mt-2 leading-7 text-zinc-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="mx-auto max-w-7xl px-4 py-14 sm:px-5 md:px-6 md:py-20"
        >
          <div className="grid gap-8 rounded-[2rem] bg-zinc-950 p-5 text-white sm:p-6 md:grid-cols-[1fr_0.9fr] md:rounded-[2.25rem] md:p-12">
            <div>
              <div className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-[#1fb7a6]">
                Contact / Order
              </div>
              <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                Ready to create your Miinii?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                Send your photos and idea, and we’ll help turn them into a
                custom 3D mini figure you can proudly display or gift.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="https://facebook.com"
                  className="rounded-full bg-[#ef6a30] px-6 py-3.5 text-center font-bold text-white shadow-lg shadow-orange-950/30 transition hover:-translate-y-1 active:translate-y-0"
                >
                  Message on Facebook
                </a>
                <a
                  href="https://instagram.com"
                  className="rounded-full border border-white/15 px-6 py-3.5 text-center font-bold text-white transition hover:-translate-y-1 hover:border-white/40 active:translate-y-0"
                >
                  View Instagram
                </a>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white p-5 text-zinc-900 md:p-6">
              <h3 className="text-xl font-black">Quick inquiry</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                This can be replaced with a form, chat button, or your direct
                contact details.
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Email
                  </div>
                  <div className="mt-1 font-semibold">your@email.com</div>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Location
                  </div>
                  <div className="mt-1 font-semibold">Philippines</div>
                </div>

                <div className="rounded-2xl bg-zinc-50 p-4">
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                    Production Time
                  </div>
                  <div className="mt-1 font-semibold">Approx. 2–4 weeks</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-center text-sm text-zinc-500 sm:px-5 md:flex-row md:items-center md:justify-between md:px-6 md:text-left">
          <div>
            <span className="font-black text-zinc-900">Miinii</span> — 3D
            custom mini figures
          </div>
          <div>Custom-made with care for meaningful gifts and keepsakes.</div>
        </div>
      </footer>
    </div>
  );
}
