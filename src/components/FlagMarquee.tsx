import Image from "next/image";

const flags = Array.from({ length: 28 }, (_, i) => {
  const n = String(i + 1).padStart(2, "0");
  const ext = [23, 26, 27].includes(i + 1) ? "jpg" : "png";
  return `/images/flags/flag-${n}.${ext}`;
});

export default function FlagMarquee() {
  const items = [...flags, ...flags];

  return (
    <div className="w-full overflow-hidden bg-black border-y border-white/10 py-4">
      <div className="flex w-max animate-marquee">
        {items.map((src, i) => (
          <div key={i} className="shrink-0 mx-3">
            <Image
              src={src}
              alt=""
              width={220}
              height={129}
              className="rounded opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
