// import { ArrowUpRight } from 'lucide-react';
// export default function AdventureSection() {
//   return (
//     <section id="adventure" className="relative isolate flex min-h-[440px] scroll-mt-36 items-center justify-center overflow-hidden px-5 py-24 text-center sm:min-h-[540px]">
//       <div className="absolute inset-0 -z-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/underwater-bg.png')" }} />
//       <div className="absolute inset-0 -z-10 bg-[#031821]/65" />
//       <div className="max-w-4xl">
//         <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-sand">The Andaman Islands Await</p>
//         <h2 className="font-display text-[clamp(3rem,6vw,7rem)] leading-[1.05]">Pick Your Next <span className="italic text-sand">Adventure.</span></h2>
//         <a href="#courses" className="mt-9 inline-flex items-center gap-3 rounded-full bg-sand px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] !text-[#071F2B] transition-transform hover:-translate-y-1">Explore More <ArrowUpRight size={18} /></a>
//       </div>
//     </section>
//   );
// }



import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

export default function AdventureSection() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playAttempt = video.play();
          if (playAttempt?.catch) playAttempt.catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(section);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="adventure"
      className="relative isolate flex min-h-[440px] scroll-mt-36 items-center justify-center overflow-hidden px-5 py-24 text-center sm:min-h-[540px]"
    >
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        poster="/images/underwater-bg.png"
        aria-hidden="true"
        tabIndex={-1}
        className="pointer-events-none absolute inset-0 -z-20 h-full w-full object-cover"
      >
        <source src="/videos/scuba.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[#031821]/65" />
      <div className="relative z-10 max-w-4xl">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-sand">
          The Andaman Islands Await
        </p>
        <h2 className="font-display text-[clamp(3rem,6vw,7rem)] leading-[1.05]">
          Pick Your Next <span className="italic text-sand">Adventure.</span>
        </h2>
        <a
          href="#courses"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-sand px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] !text-[#071F2B] transition-transform hover:-translate-y-1"
        >
          Explore More <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
