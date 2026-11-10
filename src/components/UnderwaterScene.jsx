import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

const bubbles = Array.from({ length: 18 }, (_, index) => ({
  id: index,
  left: `${7 + ((index * 29) % 86)}%`,
  size: 3 + (index % 4) * 3,
  duration: 11 + (index % 6) * 2,
  delay: -(index * 1.8),
  drift: index % 2 ? 22 : -22,
}));

export default function UnderwaterScene({ children }) {
  const sceneRef = useRef(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 65,
    damping: 26,
    restDelta: 0.001,
  });

  const imageY = useTransform(smoothProgress, [0, 1], [0, 95]);
  const imageScale = useTransform(smoothProgress, [0, 1], [1.08, 1.14]);
  const lightY = useTransform(smoothProgress, [0, 1], [0, 55]);
  const lightOpacity = useTransform(smoothProgress, [0, 1], [0.25, 0.08]);

  return (
    <section
      id="home"
      ref={sceneRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ocean"
    >
      {/* Single image: includes turtle, diver, fish, and coral. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-12 z-0 bg-cover bg-[60%_center] sm:bg-center"
        style={{
          backgroundImage: "url('/images/underwater-bg.png')",
          y: reducedMotion ? 0 : imageY,
          scale: reducedMotion ? 1.08 : imageScale,
          willChange: reducedMotion ? "auto" : "transform",
        }}
      />

      {/* Keep heading readable over the photographic background. */}
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#021722]/90 via-[#021722]/50 to-[#021722]/5" />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ocean via-ocean/10 to-[#021722]/15" />

      {/* Light beams shift gently with scrolling. */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          y: reducedMotion ? 0 : lightY,
          opacity: reducedMotion ? 0.14 : lightOpacity,
          background:
            "repeating-conic-gradient(from 190deg at 75% -15%, transparent 0deg 8deg, rgba(170,235,240,0.14) 9deg 12deg, transparent 13deg 23deg)",
          maskImage: "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      {/* Small ambient bubbles rise continuously. */}
      {!reducedMotion && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[3] overflow-hidden"
        >
          {bubbles.map((bubble) => (
            <motion.span
              key={bubble.id}
              className="absolute rounded-full border border-white/30 bg-white/10"
              style={{
                left: bubble.left,
                bottom: "-4%",
                width: bubble.size,
                height: bubble.size,
              }}
              animate={{
                y: [0, -1100],
                x: [0, bubble.drift],
                opacity: [0, 0.4, 0],
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>
      )}

      {/* Existing App.jsx hero text and buttons. */}
      <div className="relative z-10">{children}</div>
    </section>
  );
}



// import { useRef, useEffect } from "react";

// export default function UnderwaterScene({ children }) {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const video = videoRef.current;
//     if (!video) return;

//     console.log("Video URL:", video.currentSrc);

//     video.play().catch((error) => {
//       console.error("Autoplay failed:", error);
//     });
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden bg-black"
//     >
//       <video
//         ref={videoRef}
//         autoPlay
//         muted
//         loop
//         playsInline
//         controls
//         preload="auto"
//         className="absolute inset-0 h-full w-full object-cover"
//         onLoadedData={() => {
//           console.log("Video loaded successfully");
//         }}
//         onPlaying={() => {
//           console.log("Video is playing");
//         }}
//         onError={(e) => {
//           console.error(
//             "Video error:",
//             e.currentTarget.error
//           );
//         }}
//       >
//         <source
//           src="/videos/underwater-hero.MP4"
//           type="video/mp4"
//         />
//       </video>

//       <div className="pointer-events-none relative z-10">
//         {children}
//       </div>
//     </section>
//   );
// }
