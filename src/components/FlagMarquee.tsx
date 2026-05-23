const flags = Array.from({ length: 28 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const ext = [23, 26, 27].includes(i + 1) ? "jpg" : "png";
  return `/images/flags/flag-${n}.${ext}`;
});

const doubled = [...flags, ...flags];

export default function FlagMarquee() {
  return (
    <div className="w-full bg-black border-y border-white/10 py-4 overflow-hidden" style={{ contain: "paint" }}>

      {/* Mobile: 110×65 → 134px/item × 28 = 3752px */}
      <div className="md:hidden">
        <div
          className="flex"
          style={{ animation: "marquee-mobile 35s linear infinite", willChange: "transform", width: "max-content" }}
        >
          {doubled.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, marginLeft: 12, marginRight: 12, width: 110, height: 65 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" style={{ width: 110, height: 65, borderRadius: 4, opacity: 0.8, objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: 220×129 → 244px/item × 28 = 6832px */}
      <div className="hidden md:block">
        <div
          className="flex"
          style={{ animation: "marquee 60s linear infinite", willChange: "transform", width: "max-content" }}
        >
          {doubled.map((src, i) => (
            <div key={i} style={{ flexShrink: 0, marginLeft: 12, marginRight: 12, width: 220, height: 129 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" style={{ width: 220, height: 129, borderRadius: 4, opacity: 0.8, objectFit: "cover", display: "block" }} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
