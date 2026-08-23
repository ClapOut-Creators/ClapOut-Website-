import { User } from "lucide-react";
import { socialProofPhotos } from "../../data/brands";
import type { SocialProofPhoto } from "../../types/content";

const TILE_BG = [
  "bg-neutral-200 dark:bg-white/10",
  "bg-neutral-300 dark:bg-white/20",
  "bg-stone-200 dark:bg-white/10",
  "bg-stone-300 dark:bg-white/20",
];

function PhotoTile({
  photo,
  index,
}: {
  photo: SocialProofPhoto;
  index: number;
}) {
  return (
    <div
      className={`relative aspect-square w-20 shrink-0 overflow-hidden rounded-2xl sm:w-32 md:w-40 ${
        TILE_BG[index % TILE_BG.length]
      }`}
    >
      {photo.src ? (
        <img
          src={photo.src}
          alt={photo.alt}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full items-center justify-center"
          role="img"
          aria-label={photo.alt}
        >
          <User className="h-5 w-5 text-neutral-400 sm:h-8 sm:w-8 md:h-10 md:w-10" />
        </div>
      )}
      {photo.tag && (
        <span className="absolute bottom-1 left-1 rounded-full bg-black/70 px-1.5 py-0.5 text-[0.5rem] font-semibold uppercase tracking-wide text-white sm:bottom-2 sm:left-2 sm:px-2 sm:text-[0.6rem]">
          {photo.tag}
        </span>
      )}
    </div>
  );
}

function PhotoMarqueeRow({
  photos,
  rowIndex,
  reverse,
}: {
  photos: SocialProofPhoto[];
  rowIndex: number;
  reverse?: boolean;
}) {
  const track = [...photos, ...photos];

  return (
    <div className="relative overflow-hidden">
      <div
        className={`photo-marquee-track flex w-max items-center gap-3 sm:gap-4 ${reverse ? "reverse" : ""}`}
      >
        {track.map((photo, i) => (
          <PhotoTile
            key={`${rowIndex}-${i}`}
            photo={photo}
            index={rowIndex * 6 + i}
          />
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent sm:w-20 dark:from-dark-bg" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent sm:w-20 dark:from-dark-bg" />
    </div>
  );
}

export default function SocialProofSection() {
  const chunkSize = Math.ceil(socialProofPhotos.length / 3);
  const rows = [
    socialProofPhotos.slice(0, chunkSize),
    socialProofPhotos.slice(chunkSize, chunkSize * 2),
    socialProofPhotos.slice(chunkSize * 2),
  ];

  return (
    <section className="bg-white py-20 transition-colors md:py-28 dark:bg-dark-bg">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="font-sfpro text-lg uppercase tracking-wide text-[#A3A3A3] dark:text-dark-body">
          Used by industry leaders
        </p>
        <h2 className="mt-4 font-poppins text-4xl font-semibold text-black/80 md:text-5xl dark:text-white">
          The creators and brands behind the campaigns.
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-sfpro text-lg font-normal text-[#464646] dark:text-dark-body">
          Streamers, labels, and brands run campaigns here. Their clips are the
          ones your network gets paid to post.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-4 md:mt-16 w-full md:w-[calc(100%-190px)] md:max-w-[1537px] mx-auto">
        {rows.map((row, i) => (
          <PhotoMarqueeRow
            key={i}
            photos={row}
            rowIndex={i}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
}
