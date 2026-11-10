
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const courses = [
  { label: "PADI Courses", href: "#padi-courses" },
  { label: "Discover Scuba Diving", href: "#padi-courses" },
  { label: "Introduction to Diving", href: "#padi-courses" },
  { label: "Open Water Diver Course", href: "#padi-courses" },
  { label: "Adventure Diver Course", href: "#padi-courses" },
  { label: "Dive Master Course", href: "#padi-courses" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#031821] pb-20 text-ivory sm:pb-0"
    >
      {/* Subtle ocean glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(31,100,117,0.24),transparent_65%)]" />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-10 pt-20 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">

          {/* Logo and branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <a href="#home" className="inline-block">
              <img
                src="/images/octopus-logo.png"
                alt="Octopus Garden Dive Centre"
                className="h-32 w-auto max-w-[210px] object-contain"
              />
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/60">
              Explore the depths of paradise with unforgettable
              diving experiences in the Andaman Islands.
            </p>
          </motion.div>

          {/* Address */}
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-sand">
              Find Us
            </p>

            <div className="flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-sand"
              />

              <address className="not-italic text-sm leading-8 text-white/70">
                Beach no.5
                <br />
                Swaraj Dweep (Havelock)
                <br />
                Andaman & Nicobar Islands
                <br />
                744211
              </address>
            </div>
          </div>

          {/* PADI course links */}
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-sand">
              Explore Courses
            </p>

            <ul className="space-y-3">
              {courses.map((course) => (
                <li key={course.label}>
                  <a
                    href={course.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-sand"
                  >
                    {course.label}

                    <ArrowUpRight
                      size={13}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="mb-7 text-xs font-semibold uppercase tracking-[0.22em] text-sand">
              Get In Touch
            </p>

            <div className="space-y-5">
              <a
                href="tel:+917695056336"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-sand"
              >
                <Phone size={18} className="shrink-0 text-sand" />
                +91 76950 56336
              </a>

              <a
                href="mailto:info@octopusgarden.in"
                className="flex items-center gap-3 text-sm text-white/70 transition-colors hover:text-sand"
              >
                <Mail size={18} className="shrink-0 text-sand" />
                info@octopusgarden.in
              </a>
            </div>

            {/* PADI logo */}
            <div className="mt-9">
              <img
                src="/images/padi-good.jpeg"
                alt="PADI"
                className="h-16 w-20 rounded-md bg-white p-2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="mt-16 border-t border-white/10 pt-7">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-white/45">
              © {new Date().getFullYear()} Octopus Garden Dive Centre.
              All rights reserved.
            </p>

            <a
              href="#home"
              className="text-xs uppercase tracking-[0.15em] text-sand transition-colors hover:text-white"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
