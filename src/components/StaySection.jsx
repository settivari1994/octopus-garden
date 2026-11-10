
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

// Room images
const rooms = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  image: `/images/room${index + 1}.jpeg`,
}));

const whatsappUrl =
  "https://wa.me/917695056336?text=" +
  encodeURIComponent(
    "Hi Octopus Garden! I would like to enquire about accommodation at Havelock Island."
  );

export default function StaySection() {
  const [selected, setSelected] = useState(null);

  const closeGallery = () => setSelected(null);

  const next = () => {
    setSelected((current) =>
      current === null ? 0 : (current + 1) % rooms.length
    );
  };

  const previous = () => {
    setSelected((current) =>
      current === null
        ? 0
        : (current - 1 + rooms.length) % rooms.length
    );
  };

  // Keyboard navigation and scroll locking
  useEffect(() => {
    if (selected === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowRight") {
        setSelected((current) =>
          (current + 1) % rooms.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelected((current) =>
          (current - 1 + rooms.length) % rooms.length
        );
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <>
      <section
        id="stay"
        className="
          relative isolate scroll-mt-24 overflow-hidden
          bg-gradient-to-b
          from-[#071F2B]
          via-[#104A59]
          to-[#071F2B]
          px-5 py-20 text-[#F5F0E6]
          sm:px-8 lg:px-12 lg:py-28
        "
      >
        {/* Decorative background lighting */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -left-40 top-20
            -z-10 h-[450px] w-[450px]
            rounded-full bg-[#56B8C8]/10 blur-[110px]
          "
        />

        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -right-40 bottom-10
            -z-10 h-[500px] w-[500px]
            rounded-full bg-[#D5C19A]/10 blur-[120px]
          "
        />

        <div className="mx-auto max-w-[1400px]">
          {/* Section heading */}
          <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.3em] text-[#D5C19A]">
                OCTOPUS GARDEN · ISLAND LIVING
              </p>

              <h2 className="font-display text-5xl leading-[1.05] tracking-tight text-[#F5F0E6] sm:text-6xl md:text-7xl">
                Stay a Little
                <br />
                <span className="italic text-[#D5C19A]">
                  Longer.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-8 text-white/70">
              Slow mornings, ocean air, and a place to unwind.
              Discover the quieter side of island life at
              Octopus Garden, Havelock Island.
            </p>
          </div>

          {/* Room gallery */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, index) => (
              <button
                key={room.id}
                type="button"
                onClick={() => setSelected(index)}
                aria-label={`View accommodation photo ${room.id}`}
                className="
                  group relative overflow-hidden rounded-2xl
                  border border-white/10
                  bg-[#123B47] text-left
                  shadow-lg shadow-black/10
                  transition-all duration-500
                  hover:-translate-y-1
                  hover:border-[#D5C19A]/50
                  hover:shadow-2xl hover:shadow-black/25
                "
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={room.image}
                    alt={`Octopus Garden accommodation photo ${room.id}`}
                    loading="lazy"
                    className="
                      h-full w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#031821]/80 via-transparent to-transparent" />

                {/* Image information */}
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-5 sm:p-6">
                  <div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D5C19A]">
                      Island Living
                    </span>

                    <p className="mt-2 text-xs text-white/80">
                      Explore our stay
                    </p>
                  </div>

                  <span
                    className="
                      flex h-11 w-11 items-center justify-center
                      rounded-full border border-white/50
                      text-white transition-all duration-300
                      group-hover:border-[#D5C19A]
                      group-hover:bg-[#D5C19A]
                      group-hover:text-[#071F2B]
                    "
                  >
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Bottom booking section */}
          <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-white/20 pt-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-display text-2xl text-[#F5F0E6] sm:text-3xl">
                Your island escape begins here.
              </p>

              <p className="mt-2 text-sm text-white/60">
                Get in touch to plan your perfect island stay.
              </p>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex min-h-12 items-center justify-center
                gap-3 rounded-full
                bg-[#D5C19A] px-7 py-4
                text-[11px] font-bold uppercase
                tracking-[0.12em] text-[#071F2B]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#F5F0E6]
                hover:shadow-xl
              "
            >
              Enquire About Your Stay
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Fullscreen gallery rendered outside the section */}
      {selected !== null &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Stay photo gallery"
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              bg-[#031821]/95 p-4
              backdrop-blur-xl
            "
            onClick={closeGallery}
          >
            {/* Close button */}
            <button
              type="button"
              aria-label="Close gallery"
              onClick={(event) => {
                event.stopPropagation();
                closeGallery();
              }}
              className="
                absolute right-5 top-5 z-50
                flex h-12 w-12 items-center justify-center
                rounded-full border border-white/30
                bg-white/20 text-white
                transition-colors hover:bg-white/30
              "
            >
              <X size={26} />
            </button>

            {/* Previous image */}
            <button
              type="button"
              aria-label="Previous photo"
              onClick={(event) => {
                event.stopPropagation();
                previous();
              }}
              className="
                absolute left-3 z-50
                rounded-full border border-white/20
                bg-white/20 p-3 text-white
                transition-colors hover:bg-white/30
                sm:left-8
              "
            >
              <ChevronLeft size={26} />
            </button>

            {/* Selected image */}
            <img
              src={rooms[selected].image}
              alt={`Octopus Garden stay photo ${selected + 1}`}
              onClick={(event) => event.stopPropagation()}
              className="
                max-h-[80vh] max-w-[85vw]
                rounded-xl object-contain
                shadow-2xl
              "
            />

            {/* Next image */}
            <button
              type="button"
              aria-label="Next photo"
              onClick={(event) => {
                event.stopPropagation();
                next();
              }}
              className="
                absolute right-3 z-50
                rounded-full border border-white/20
                bg-white/20 p-3 text-white
                transition-colors hover:bg-white/30
                sm:right-8
              "
            >
              <ChevronRight size={26} />
            </button>

            {/* Gallery counter */}
            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#D5C19A]">
                Octopus Garden · Stay
              </p>

              <p className="mt-2 text-xs tracking-widest text-white/70">
                {selected + 1} / {rooms.length}
              </p>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
