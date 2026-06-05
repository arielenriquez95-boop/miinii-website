export const processSteps = [
  { title: "3D Sculpting", text: "Your Miinii is digitally sculpted based on your reference photos.", image: "/process-sculpting.png" },
  { title: "3D Printing", text: "Printed in high resolution for clean details and a premium miniature look.", image: "/process-printing.png" },
  { title: "Hand Painting", text: "Each piece is carefully painted by hand to bring your Miinii to life.", image: "/process-painting.png" },
  { title: "Finishing & Packaging", text: "Finished, quality checked, and packed in a gift-ready Miinii box.", image: "/process-packaging.png" },
];

export const products = [
  {
    title: "Miinii Pop!",
    image: "/miinii-pop.png",
    oldPrice: "₱3,490",
    price: "₱2,990+",
    shortText: "Funko-inspired custom mini figure with a cute collectible style.",
    details: ["Available in Solo 4\" and Duo 4\"", "Final price may vary depending on details", "Comes with Personalized Miinii Pop! Box", "Estimated production: 2–3 weeks"],
  },
  {
    title: "Miinii Rono",
    image: "/miinii-rono.png",
    oldPrice: "₱3,990",
    price: "₱2,990+",
    shortText: "Hirono-inspired custom mini figure with a cute collectible style.",
    details: ["Available in 4\" and 5\"", "Final price may vary depending on details", "Estimated production: 2–3 weeks"],
  },
  {
    title: "Miinii Me",
    image: "/miinii-me.png",
    oldPrice: "₱4,490",
    price: "₱3,490+",
    shortText: "A personalized mini realistic figure based on your outfit, pose, and reference photos.",
    details: ["Available in 6\" • 7\" • 8\"", "Final price may vary depending on details", "Estimated production: 2–4 weeks"],
  },
  {
    title: "Miinii Pet",
    image: "/miinii-pet.png",
    oldPrice: "₱4,990",
    price: "₱3,490+",
    shortText: "A custom pet keepsake made for fur parents and animal lovers.",
    details: ["Available in 2\" and 3\", and ref magnets", "Final price may vary depending on details", "Estimated production: 2–4 weeks"],
  },
  {
    title: "Miinii Mini",
    image: "/miinii-mini.png",
    oldPrice: "₱3,990",
    price: "₱2,490+",
    shortText: "Cutest Mini version perfect for gift.",
    details: ["Available in 2\" • 3\" • 4\"", "Final price may vary depending on details", "Estimated production: 2–3 weeks"],
  },
  {
    title: "Miinii Request",
    image: "/miinii-request.png",
    price: "Custom quote",
    shortText: "For special concepts, props, scenes, and fully custom requests.",
    details: ["Price depends on size, complexity, and added details", "Good for unique gift ideas and special concepts", "Timeline may vary depending on complexity"],
  },
];

export const testimonials = [
  ["Joie, Miinii Pop!", "TikTok", "What you see is what you get 😍 Expectations are met! Can't wait for my tito's reaction pag nakita nya to 😁 Thank you po ulit! 🫶"],
  ["Gilbert, Miinii Me", "Facebook", "Miinii captured the features and likeness of my son and sinigurado nilang pulido ang pagkakagawa. Very affordable and it was neatly packed. Thank you Miinii for the wonderful art figure."],
  ["Jah, Miinii Pop!", "TikTok", "I love love love their works! already bought 2 miinii pops and will for sure order more next time! owner is very responsive and kind!"],
  ["Michael, Miinii Rono", "Facebook", "I am absolutely obsessed with my new custom Hirono! He managed to shrink me down and make me look adorable..."],
  ["Alyaurs, Miinii Pop!", "Instagram", "We totally love the customized mini pop of our best girl, Lena! 🥹 The quality, details, and effort put into every part of it exceeded our expectations."],
  ["Kiamika, Miinii Pet", "Facebook", "Nagpagawa ako ng miinii figure ng deceased dog ko at sobrang detailed nung pagkakagawa.  Kamukhang kamukha din!"],
].map(([name, role, text]) => ({ name, role, text }));

export const faqs = [
  ["What is Miinii?", "Miinii creates custom 3D mini figures based on your photos, pets, favorite moments, or special requests."],
  ["How does the process work?", "Send your reference photos, we create a digital 3D preview, you approve the design, then we print, paint, and prepare your Miinii."],
  ["What kind of photos should I send?", "Clear front, side, and back photos are best. For pets, include photos showing their face, body, color, markings, and pose."],
  ["Do I get to approve the design before printing?", "Yes. We send a digital preview first, and printing only starts after your approval."],
  ["How long does it take to make?", "Production usually takes around 2–4 weeks, depending on the complexity and current order queue."],
  ["How much is the down payment?", "A 50% down payment is required to start the project. The remaining balance is paid before shipping or delivery."],
  ["Are the figures hand-painted?", "Yes. Each figure is individually painted by hand, so small variations may happen, making every piece unique."],
  ["Do you accept international orders?", "Yes, international orders may be accepted depending on the destination and shipping options available."],
].map(([q, a]) => ({ q, a }));

export const collageItems = [
  ["Gallery 1", "/Gallery1.mp4"],
  ["Gallery 2", "/Gallery2.mp4"],
  ["Gallery 3", "/Gallery3.mp4"],
  ["Gallery 4", "/Gallery4.mp4"],
  ["Gallery 5", "/Gallery5.mp4"],
  ["Gallery 6", "/Gallery6.mp4"],
].map(([title, image]) => ({ title, image }));

export const navSections = [
  { id: "process", label: "process" },
  { id: "products", label: "products" },
  { id: "gallery", label: "gallery" },
  { id: "about", label: "About Us" },
  { id: "testimonials", label: "testimonials" },
  { id: "faq", label: "FAQ" },
];

export const socialLinks = [
  { href: "https://ig.me/m/MiiniiStudios", type: "message", label: "Message Us", variant: "outline" },
  { href: "https://www.facebook.com/MiiniiStudios", type: "facebook", label: "Facebook", variant: "solid" },
  { href: "https://www.tiktok.com/@miiniistudios", type: "tiktok", label: "TikTok", variant: "solid" },
  { href: "https://instagram.com/MiiniiStudios", type: "instagram", label: "Instagram", variant: "solid" },
];
