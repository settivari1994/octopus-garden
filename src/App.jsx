import { motion, useReducedMotion } from "motion/react";
import { ArrowDownRight, ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "./components/Header";
import UnderwaterScene from "./components/UnderwaterScene";
import AboutSection from "./components/AboutSection";
import AdventureSection from "./components/AdventureSection";
import DivingCourses from "./components/DivingCourses";
import TestimonialsGallery from "./components/TestimonialsGallary";
import Footer from "./components/Footer";
import TrustBar from "./components/TrustBar";
import WhyChooseUs from "./components/WhyChooseUs";
import ExperiencePathways from "./components/ExperiencePathways";
import WomenOfOctopus from "./components/WomenOfOctopus";
import FinalCTA from "./components/FinalCTA";
import MobileBookingBar from "./components/MobileBookingBar";
import StaySection from "./components/StaySection";

const experiences = [
  {
    number: "01",
    title: "Scuba Diving",
    subtitle: "Explore the deep blue",
    description: "Discover vibrant reefs and marine life in the extraordinary waters of the Andaman Islands.",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=85",
    alt: "Scuba diver exploring the underwater world",
  },
  {
    number: "02",
    title: "Discover Scuba",
    subtitle: "Your first breath underwater",
    description: "Experience the wonder of diving with guidance designed for first-time explorers.",
    image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1200&q=85",
    alt: "Sea turtle swimming above a coral reef",
  },
  {
    number: "03",
    title: "Ocean Adventures",
    subtitle: "Beyond the ordinary",
    description: "Immerse yourself in the colors, textures, and calm of the ocean around the islands.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=85",
    alt: "Blue ocean waves",
  },
];

const ease = [0.22, 1, 0.36, 1];

function Reveal({ children, className = "", delay = 0 }) {
  const reducedMotion = useReducedMotion();
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: reducedMotion ? 0 : 0.85, delay: reducedMotion ? 0 : delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const reducedMotion = useReducedMotion();

  return (
    <main className="min-h-screen overflow-x-clip bg-ocean text-ivory">
      <Header />

      <UnderwaterScene>
        <div className="relative mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-center px-5 pb-20 pt-44 sm:px-10 lg:px-16 lg:pt-52">
          <motion.div
            initial={reducedMotion ? false : "hidden"}
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.15 } } }}
            className="relative z-10 max-w-5xl"
          >
            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="mb-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-sand sm:text-sm"
            >
              WOMEN-LED · PADI 5 STAR DIVE RESORT · HAVELOCK
            </motion.p>
            <motion.h1
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease } } }}
              className="font-display max-w-5xl text-[clamp(3rem,6.5vw,7rem)] leading-[1.04]"
            >
              Stay by the sea.<br /><span className="italic text-sand">Dive with professionals.</span>
            </motion.h1>
            <motion.p
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
              className="mt-8 max-w-lg text-sm leading-8 text-white/90 sm:text-base"
            >
              A women-led PADI 5 Star Dive Resort in Havelock, Andaman Islands — where professional diving meets a relaxed island stay.
            </motion.p>
            <motion.div
              variants={{ hidden: { opacity: 0, y: 22 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease } } }}
              className="mt-9 flex flex-wrap items-center gap-5"
            >
              <a href="#courses" className="group inline-flex min-h-12 items-center gap-4 rounded-full bg-sand px-7 py-4 text-[11px] font-bold uppercase tracking-[0.13em] !text-ocean transition-all duration-300 hover:-translate-y-1 hover:bg-ivory">
                BOOK YOUR DIVE <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#stay" className="inline-flex min-h-12 items-center border-b border-white/70 px-2 text-[11px] font-bold uppercase tracking-[0.13em] transition-colors hover:text-sand">
                PLAN YOUR STAY
              </a>
              <a href="#contact" className="text-[11px] font-bold uppercase tracking-[0.13em] text-sand underline underline-offset-8">WHATSAPP A DIVE PROFESSIONAL</a>
            </motion.div>
          </motion.div>
          <a href="#experience" className="absolute bottom-8 left-5 hidden items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/85 sm:flex sm:left-10 lg:left-16">
            Scroll to explore <ArrowDownRight size={18} />
          </a>
          <span className="absolute right-6 top-1/2 hidden -translate-y-1/2 [writing-mode:vertical-rl] text-[10px] uppercase tracking-[0.3em] text-white/75 lg:block">
            Discover the world beneath
          </span>
        </div>
      </UnderwaterScene>
      <TrustBar />
      <AboutSection />
      <WhyChooseUs />
      <ExperiencePathways />
      <StaySection />
      <WomenOfOctopus />

      <section id="experience" className="relative scroll-mt-24 bg-[#062633] px-5 py-24 sm:px-10 sm:py-32 lg:px-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-ocean to-transparent" />
        <div className="relative mx-auto max-w-[1600px]">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <Reveal>
              <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.27em] text-sand">Explore the Andamans</p>
              <h2 className="font-display text-[clamp(3.1rem,5.5vw,6.4rem)] leading-[1.03]">
                Adventures<br /><span className="italic text-sand">Beneath the Blue.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="md:justify-self-end">
              <p className="max-w-md text-sm leading-8 text-white/70 sm:text-base">
                From your first breath underwater to exploring breathtaking coral reefs, discover unforgettable scuba-diving experiences in the Andaman Islands.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3 lg:mt-20">
            {experiences.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.12}>
                <article className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0B3440] shadow-2xl shadow-black/10">
                  <div className="image-hover relative aspect-[4/5] overflow-hidden sm:aspect-[5/5] md:aspect-[3/4]">
                    <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#031821] via-[#031821]/15 to-transparent" />
                    <span className="absolute left-6 top-6 text-xs font-semibold tracking-[0.2em] text-white">{item.number} / 03</span>
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                      <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-sand">{item.subtitle}</p>
                      <h3 className="font-display text-4xl leading-none sm:text-5xl">{item.title}</h3>
                    </div>
                  </div>
                  <div className="flex min-h-36 items-end justify-between gap-4 p-6 sm:p-8">
                    <p className="max-w-[17rem] text-sm leading-7 text-white/70">{item.description}</p>
                    <a href="#contact" aria-label={`Enquire about ${item.title}`} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-sand/50 text-sand transition-all duration-300 hover:-translate-y-1 hover:bg-sand hover:text-ocean">
                      <ArrowUpRight size={19} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AdventureSection />
      <DivingCourses />
      <TestimonialsGallery />
      <FinalCTA />
      <Footer />
      <MobileBookingBar />


      {/* <footer id="contact" className="scroll-mt-24 border-t border-white/10 bg-ocean px-5 py-12 sm:px-10 lg:px-16">

        <div className="flex items-center gap-4">
          <img
            src="/images/padi-star.jpeg"
            alt="PADI"
            style={{
              width: "55px",
              height: "55px",
              objectFit: "contain",
              display: "block",
              borderRadius: "6px",
              padding: "4px",
            }}
          />

          <div>
            <p className="text-sm font-semibold text-ivory">
              Octopus Garden Dive Centre
            </p>
            <p className="mt-1 text-xs text-white/60">
              Explore the depths of paradise
            </p>
          </div>
        </div>
      </footer> */}
    </main>
  );
}
