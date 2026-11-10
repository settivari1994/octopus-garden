import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Clock3, Waves, UserRound, BadgeIndianRupee } from "lucide-react";

// Course details transcribed from the supplied reference screenshot.
// Confirm prices and age restrictions with the dive centre before publishing.
const courses = [
  {
    title: "Introduction to Diving",
    type: "FIRST-TIME EXPERIENCE",
    description: "This is an introductory programme which is not registered with PADI but includes basic training to get you comfortable before the dive. Following which we take you for a closely supervised dive over beautiful coral reefs thriving with marine life.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    prerequisites: "Medical form and waiver",
    depth: "12 metres",
    swimming: "Not required",
    age: "12 years & above",
    duration: "2 hours",
    price: "Shore dive ₹3,500 · Boat dive ₹5,500",
  },
  {
    title: "PADI Discover Scuba Diving",
    type: "BEGINNER EXPERIENCE",
    description: "Our PADI Discover Scuba Diving course is your ticket to an unforgettable aquatic adventure, regardless of whether you know how to swim.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=85",
    prerequisites: "Medical form and waiver",
    depth: "12 metres",
    swimming: "Not required",
    age: "12 years & above",
    duration: "2–3 hours",
    price: "Shore DSD ₹4,500 · Boat DSD ₹6,500",
  },
  {
    title: "PADI Open Water Diver Course",
    type: "PADI CERTIFICATION",
    description: "Our PADI Open Water Diver Course is your passport to an exciting aquatic world. Designed by PADI, this comprehensive course equips you with the skills and knowledge needed to dive safely and confidently.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    prerequisites: "Medical form and waiver",
    depth: "18 metres",
    swimming: "200 m swim and 10 min float",
    age: "12 years & above",
    duration: "3–4 days",
    price: "₹28,000",
  },
  {
    title: "PADI Advanced Open Water Diver Course",
    type: "PADI CERTIFICATION",
    description: "The PADI Advanced Open Water Diver course is designed to advance your diving, so you can start right after earning your PADI Open Water certification. Complete five adventure dives, by choosing from a bunch of specialties.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=85",
    prerequisites: "Open Water Diver certificate",
    depth: "30 metres",
    swimming: "—",
    age: "12 years & above",
    duration: "2 days",
    price: "₹26,500",
  },
  {
    title: "Snorkeling",
    type: "OCEAN EXPERIENCE",
    description: "Snorkeling in Havelock is a memorable and fun experience that everyone can enjoy, from kids to adults. The shallow reefs of the Andamans, with its warm tropical waters are home to a variety of marine species that will make you feel like being in an aquarium.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=85",
    prerequisites: "None",
    depth: "N/A",
    swimming: "Not required",
    age: "8 years & above",
    duration: "2 hours",
    price: "₹2,500–₹3,500",
  },
  {
    title: "Island Hopping with Sunset Cruise",
    type: "ISLAND ADVENTURE",
    description: "Set sail on a breathtaking Island Hopping with Sunset Cruise, one of the most unique and captivating experiences offered by Octopus Garden.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
    prerequisites: "None",
    depth: "N/A",
    swimming: "Not required",
    age: "2 years & above",
    duration: "1–2 hours",
    price: "From ₹2,500",
  },
];

function Detail({ label, value }) {
  return (
    <div className="min-w-0 border-t border-white/10 pt-3">
      <dt className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sand/85">{label}</dt>
      <dd className="mt-1 text-sm leading-6 text-white/85">{value}</dd>
    </div>
  );
}

export default function DivingCourses() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="padi-courses" className="relative scroll-mt-36 overflow-hidden bg-[#041C27] px-5 py-24 text-ivory sm:px-10 sm:py-32 lg:px-16">
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#116477]/15 blur-[110px]" />
      <div id="courses" className="relative mx-auto max-w-[1500px] scroll-mt-36">
        <div className="mb-14 grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.26em] text-sand">EXPLORE WITH OCTOPUS GARDEN</p>
            <h2 className="font-display text-[clamp(3rem,5.5vw,6rem)] leading-[1.05]">Find Your Next <span className="italic text-sand">Adventure.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-8 text-white/65 md:justify-self-end">From your first breath underwater to advanced PADI certifications and island escapes, discover an experience made for you.</p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, index) => (
            <motion.article
              key={course.title}
              initial={reducedMotion ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: reducedMotion ? 0 : 0.65, delay: reducedMotion ? 0 : (index % 3) * 0.09 }}
              className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0A2D39] shadow-xl shadow-black/10 transition-colors duration-300 hover:border-sand/40"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={course.image} alt={course.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061D27] via-transparent to-black/15" />
                <span className="absolute left-6 top-6 rounded-full border border-white/30 bg-black/25 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">{course.type}</span>
                <span className="absolute bottom-5 right-6 font-display text-3xl italic text-white/80">{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="font-display text-[clamp(1.8rem,2.4vw,2.5rem)] leading-[1.14] text-ivory">{course.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{course.description}</p>
                <dl className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4">
                  <Detail label="Pre-requisites" value={course.prerequisites} />
                  <Detail label="Maximum depth" value={course.depth} />
                  <Detail label="Swimming skills" value={course.swimming} />
                  <Detail label="Duration" value={course.duration} />
                  <Detail label="Age requirement" value={course.age} />
                  <Detail label="Price" value={course.price} />
                </dl>
                <div className="mt-auto pt-8">
                  <a href="#contact" aria-label={`Enquire about ${course.title}`} className="inline-flex w-full items-center justify-between rounded-full border border-sand/65 px-6 py-4 text-xs font-bold uppercase tracking-[0.15em] text-sand transition-colors hover:bg-sand hover:text-[#041C27]">
                    Know More <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        <p className="mt-8 text-xs leading-6 text-white/45">Course availability, eligibility and prices should be confirmed with the dive centre before booking.</p>
      </div>
    </section>
  );
}
