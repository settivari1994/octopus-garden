
import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";

// Original customer testimonials from the existing website.
// Ratings are temporary display values until verified.
const testimonials = [
  {
    name: "Praveen Durgirala",
    location: "India",
    rating: 5,
    review:
      "Right from start I was comfortable. They ensured I was comfortable during my in-water training. Thoroughly enjoyed the experience. Instructors and Dive masters were great. Provided me with a lot of time to get used to water. Photos & videos came out fantastic.",
  },
  {
    name: "Shishir Chand",
    location: "Canada",
    rating: 4.5,
    review:
      "Did a fun dive with the team. Had a great time, saw so much sea life. The Dive master was very professional and took care of everything. I just relaxed and enjoyed my dive. Highly recommend.",
  },
  {
    name: "Sunita & Giuseppe",
    location: "Portugal",
    rating: 5,
    review:
      "An intimate and highly professional dive shop in Havelock. Devlina and Hari are highly experienced divers who made sure our dives were safe, both for us & the reefs, enjoyable and informative. There are many bigger dive shops in the island but we chose to go with Dev and Hari as you feel well taken care of and the people experience is something you do not want to miss. It is like being a part of the dive family.",
  },
];

// Temporary underwater gallery photographs.
// Replace these URLs with your own images later.
const photos = [
  {
    src: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1000&q=85",
    alt: "Scuba diver exploring blue water",
  },
  {
    src: "https://images.unsplash.com/photo-1518467166778-b88f373ffec7?auto=format&fit=crop&w=1000&q=85",
    alt: "Sea turtle swimming underwater",
  },
  {
    src: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=85",
    alt: "Marine life near a coral reef",
  },
  {
    src: "https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1000&q=85",
    alt: "Ocean underwater scene",
  },
  {
    src: "https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=1000&q=85",
    alt: "Underwater reef and fish",
  },
  {
    src: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=1000&q=85",
    alt: "Coral reef close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1000&q=85",
    alt: "Blue tropical ocean",
  },
  {
    src: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1000&q=85",
    alt: "Sunlight over ocean water",
  },
];

// Supports full and half-star ratings.
function StarRating({ rating }) {
  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const percentage = Math.max(
          0,
          Math.min(100, (rating - star + 1) * 100)
        );

        return (
          <span
            key={star}
            className="relative inline-block h-5 w-5 shrink-0"
            aria-hidden="true"
          >
            {/* Empty star */}
            <Star
              size={20}
              className="absolute inset-0 fill-transparent text-sand/30"
            />

            {/* Filled portion */}
            <span
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${percentage}%` }}
            >
              <Star
                size={20}
                className="fill-sand text-sand"
              />
            </span>
          </span>
        );
      })}

      <span className="ml-2 text-xs font-semibold text-sand">
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function TestimonialsGallery() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="gallery"
      className="scroll-mt-32 bg-[#041C27] text-ivory"
    >
      {/* TESTIMONIALS SECTION */}
      <div className="relative overflow-hidden px-5 py-24 sm:px-10 lg:px-16 lg:py-32">
        {/* Subtle ocean glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(37,120,144,0.35), transparent 65%)",
          }}
        />

        <div className="relative mx-auto max-w-[1400px]">
          {/* Section heading */}
          <motion.div
            initial={
              reducedMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-sand">
              Stories from beneath the surface
            </p>

            <h2 className="font-display text-[clamp(2.8rem,5vw,5.5rem)] leading-tight">
              What People{" "}
              <span className="italic text-sand">
                Say About Us
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65">
              Guest stories and unforgettable moments at
              Octopus Garden Dive Centre.
            </p>
          </motion.div>

          {/* Testimonial cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((review, index) => (
              <motion.blockquote
                key={review.name}
                initial={
                  reducedMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.1,
                }}
                className="
                  group flex h-full flex-col
                  rounded-2xl border border-white/10
                  bg-white/[0.045] p-7
                  backdrop-blur-sm
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-sand/40
                  hover:bg-white/[0.07]
                  sm:p-9
                "
              >
                {/* Rating and quote icon */}
                <div className="mb-7 flex items-center justify-between gap-3">
                  <span className="text-[10px] uppercase tracking-widest text-sand">Guest review</span>

                  <span
                    aria-hidden="true"
                    className="font-display text-5xl leading-none text-sand/70"
                  >
                    “
                  </span>
                </div>

                {/* Original testimonial text */}
                <p className="flex-1 text-sm leading-8 text-white/85">
                  {review.review}
                </p>

                {/* Customer details */}
                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-base font-semibold text-ivory">
                    {review.name}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-[0.16em] text-sand/80">
                    {review.location}
                  </p>
                </div>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-1 p-1 sm:gap-1.5 sm:p-1.5 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={
                reducedMotion
                  ? false
                  : { opacity: 0, scale: 0.96 }
              }
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              transition={{
                duration: 0.55,
                delay: (index % 4) * 0.06,
              }}
              className="
                group relative aspect-square
                overflow-hidden bg-[#0B3440]
              "
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="
                  h-full w-full object-cover
                  transition-transform duration-700
                  group-hover:scale-110
                "
              />

              {/* Hover overlay */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-[#031821]/0
                  transition-colors duration-500
                  group-hover:bg-[#031821]/25
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
