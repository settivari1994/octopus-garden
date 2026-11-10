import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X, Menu, ChevronDown, ArrowUpRight, MessageCircle } from "lucide-react";

// Some destination pages are planned; links currently lead to existing homepage sections.
const navigation = [
  { label: "DIVE", items: [
    ["Introduction to Diving", "#courses"], ["Discover Scuba", "#courses"],
    ["PADI Scuba Diver", "#courses"], ["PADI Open Water", "#courses"],
    ["Advanced Open Water", "#courses"], ["Adventure Diver", "#courses"],
    ["Rescue Diver", "#courses"], ["Emergency First Response", "#courses"],
    ["Divemaster", "#courses"], ["Freediving", "#courses"],
    ["Fun Diving", "#experience"], ["Dive Sites", "#experience"],
  ] },
  { label: "STAY", items: [["Our Cottages", "#stay"], ["The Resort", "#stay"], ["Dive + Stay Packages", "#stay"]] },
  { label: "EXPERIENCES", items: [["Snorkelling", "#courses"], ["Sunset Cruise", "#courses"], ["Island Hopping", "#courses"], ["Barren Island", "#experience"], ["Nature Experiences", "#experience"]] },
  { label: "OUR STORY", items: [["About Us", "#about"], ["Meet the Team", "#women"], ["Women of Octopus Garden", "#women"], ["Why Dive With Us", "#why-us"], ["Sustainability", "#about"]] },
  { label: "MORE", items: [["The Drift Room", "#stay"], ["Journal", "#gallery"], ["Reviews & Gallery", "#gallery"], ["Contact Us", "#contact"]] },
];
const allItems = navigation.flatMap(group => group.items.map(([label, href]) => ({ label, href, group: group.label })));
const whatsappUrl = "https://wa.me/917695056336?text=" + encodeURIComponent("Hi Octopus Garden! I'm planning a trip to Havelock and would like to speak with a dive professional.");

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeGroup, setActiveGroup] = useState(null);
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const results = useMemo(() => allItems.filter(item => `${item.label} ${item.group}`.toLowerCase().includes(query.trim().toLowerCase())), [query]);
  const closeAll = () => { setSearchOpen(false); setMobileOpen(false); setActiveGroup(null); setQuery(""); };
  useEffect(() => {
    const onKey = e => { if (e.key === "Escape") closeAll(); };
    const onOutside = e => { if (headerRef.current && !headerRef.current.contains(e.target)) closeAll(); };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => { document.removeEventListener("keydown", onKey); document.removeEventListener("pointerdown", onOutside); };
  }, []);
  useEffect(() => { if (searchOpen) searchRef.current?.focus(); }, [searchOpen]);
  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#031821]/95 text-ivory shadow-lg shadow-black/10 backdrop-blur-xl">
      <div className="mx-auto flex h-[84px] max-w-[1600px] items-center gap-3 px-5 sm:h-[92px] sm:px-8 lg:px-12 xl:gap-6">
        <a href="#home" onClick={closeAll} aria-label="Octopus Garden home" className="flex min-w-0 shrink-0 items-center gap-3">
          <img src="/images/octopus-logo.png" alt="Octopus Garden Dive Centre" className="h-[62px] w-[105px] object-contain sm:h-[72px] sm:w-[120px]" />
            <img
    src="/images/padi-5-star.jpeg"
    className="h-[32px] w-[40px] shrink-0 object-contain sm:h-[40px] sm:w-[50px]"
  />
        </a>
        <nav aria-label="Primary navigation" className="ml-auto hidden items-center gap-1 xl:flex">
          {navigation.slice(0, 4).map(group => (
            <div key={group.label} className="group relative">
              <button type="button" onClick={() => { setActiveGroup(activeGroup === group.label ? null : group.label); setSearchOpen(false); }} aria-expanded={activeGroup === group.label} className="flex items-center gap-1 rounded-full px-3 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/85 transition-colors hover:text-sand focus-visible:outline focus-visible:outline-sand">
                {group.label} <ChevronDown size={13} />
              </button>
              <div className={`${activeGroup === group.label ? "visible opacity-100" : "invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"} absolute left-0 top-full z-20 w-64 rounded-2xl border border-white/10 bg-[#052632] p-3 shadow-2xl transition-opacity`}>
                {group.items.map(([label, href]) => <a key={label} href={href} onClick={closeAll} className="block rounded-lg px-3 py-2.5 text-xs text-white/75 hover:bg-white/10 hover:text-sand">{label}</a>)}
              </div>
            </div>
          ))}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2 xl:ml-1">
          <button type="button" aria-label={searchOpen ? "Close website search" : "Search and browse all website sections"} aria-expanded={searchOpen} aria-controls="site-search-panel" onClick={() => { setSearchOpen(!searchOpen); setMobileOpen(false); setActiveGroup(null); }} className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors sm:h-11 sm:w-11 ${searchOpen ? "border-sand bg-sand text-[#031821]" : "border-white/20 text-white hover:border-sand hover:text-sand"}`}>
            {searchOpen ? <X size={19} /> : <Search size={19} />}
          </button>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 whitespace-nowrap px-2 text-[10px] font-bold uppercase tracking-[0.08em] text-sand hover:text-white lg:inline-flex"><MessageCircle size={16} /> WhatsApp a Dive Pro</a>
          <a href="#courses" onClick={closeAll} className="hidden min-h-11 items-center gap-2 whitespace-nowrap rounded-full bg-sand px-5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#031821] transition-colors hover:bg-ivory sm:inline-flex">Book Now <ArrowUpRight size={15} /></a>
          <button type="button" onClick={() => { setMobileOpen(!mobileOpen); setSearchOpen(false); setActiveGroup(null); }} aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen} aria-controls="mobile-site-navigation" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 xl:hidden">{mobileOpen ? <X size={19} /> : <Menu size={19} />}</button>
        </div>
      </div>
      {searchOpen && <div id="site-search-panel" className="absolute inset-x-0 top-full z-30 max-h-[min(76vh,650px)] overflow-y-auto border-t border-white/10 bg-[#05232e] shadow-2xl">
        <div className="mx-auto max-w-[1250px] px-5 py-7 sm:px-8 sm:py-9">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><div><p className="text-[10px] font-bold uppercase tracking-[0.24em] text-sand">Explore Octopus Garden</p><h2 className="mt-2 font-display text-3xl sm:text-4xl">What are you looking for?</h2></div><span className="text-xs text-white/50">Browse courses, stays, experiences & more</span></div>
          <label className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/[0.07] px-4 focus-within:border-sand"><Search size={19} className="shrink-0 text-sand" /><input ref={searchRef} type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search diving, cottages, courses..." className="w-full bg-transparent py-4 text-sm text-white outline-none placeholder:text-white/40" aria-label="Search website sections" /></label>
          {results.length === 0 ? <p className="py-8 text-sm text-white/60">No matching sections found. Try “diving”, “stay”, or “gallery”.</p> : <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">{navigation.map(group => { const items = results.filter(item => item.group === group.label); return items.length ? <section key={group.label}><h3 className="mb-3 border-b border-white/10 pb-3 text-[11px] font-bold tracking-[0.2em] text-sand">{group.label}</h3><div className="grid gap-1">{items.map(item => <a key={item.label} href={item.href} onClick={closeAll} className="group flex items-center justify-between rounded-lg px-2 py-2 text-sm text-white/75 hover:bg-white/10 hover:text-white">{item.label}<ArrowUpRight size={14} className="text-sand opacity-40 group-hover:opacity-100" /></a>)}</div></section> : null; })}</div>}
          <p className="mt-7 border-t border-white/10 pt-4 text-xs text-white/45">Some detailed pages are still being developed. Their links currently open the closest available homepage section.</p>
        </div>
      </div>}
      {mobileOpen && <nav id="mobile-site-navigation" aria-label="Mobile navigation" className="max-h-[75vh] overflow-y-auto border-t border-white/10 bg-[#05232e] px-5 py-5 xl:hidden sm:px-8">
        <div className="grid gap-5 sm:grid-cols-2">{navigation.map(group => <section key={group.label}><h3 className="mb-2 text-xs font-bold tracking-[0.15em] text-sand">{group.label}</h3><div className="grid grid-cols-2 gap-x-3 sm:grid-cols-1">{group.items.map(([label, href]) => <a key={label} href={href} onClick={closeAll} className="border-b border-white/5 py-2 text-xs text-white/75 hover:text-sand">{label}</a>)}</div></section>)}</div>
        <div className="mt-6 flex flex-wrap gap-3"><a href="#courses" onClick={closeAll} className="rounded-full bg-sand px-6 py-3 text-xs font-bold text-[#031821]">BOOK NOW</a><a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="rounded-full border border-sand px-6 py-3 text-xs font-bold text-sand">WHATSAPP A DIVE PRO</a></div>
      </nav>}
    </header>
  );
}
