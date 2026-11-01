"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";

interface SessionRecordingProps {
  videoId: string;
  title: string;
}

export default function SessionRecording({ videoId, title }: SessionRecordingProps) {
  const [playing, setPlaying] = useState(false);
  const [thumbnailUnavailable, setThumbnailUnavailable] = useState(false);

  if (playing) {
    return (
      <div className="relative aspect-video w-full bg-black">
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
          title={`Recording: ${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Play recording: ${title}`}
      className="group relative block aspect-video w-full overflow-hidden bg-accent/10 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent"
    >
      {!thumbnailUnavailable && (
        <Image
          src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
          alt=""
          fill
          unoptimized
          sizes="(min-width: 768px) 50vw, 100vw"
          onError={() => setThumbnailUnavailable(true)}
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
        />
      )}
      <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-20 items-center justify-center rounded-xl bg-red-600 shadow-lg transition-colors group-hover:bg-red-500">
          <Play className="ml-1 h-7 w-7 fill-current" aria-hidden="true" />
        </span>
      </span>
      <span className="absolute inset-x-4 bottom-3 flex items-center justify-between font-mono text-xs">
        <span>PLAY RECORDING</span>
        <span>YouTube</span>
      </span>
    </button>
  );
}
