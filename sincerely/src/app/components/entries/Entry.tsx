"use client";

import React from "react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/app/ui/Dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Image from "next/image";

interface EntryProps {
  id: string;
  text: string;
  spotifyUrl?: string;
  timestamp: string | { toDate: () => Date } | null | undefined;
  imageUrl?: string;
  tags?: string[];
}

const Entry = ({ text, timestamp, spotifyUrl, imageUrl, tags }: EntryProps) => {
  // Format timestamp as MM/DD/YYYY
  const formattedTimestamp =
    typeof timestamp === "string"
      ? timestamp
      : timestamp?.toDate?.().toLocaleDateString("en-US") ?? "Undated";

  // Spotify embed logic
  const extractSpotifyEmbedUrl = (text: string): string | null => {
    const match = text.match(/https?:\/\/open\.spotify\.com\/(track|album|playlist|episode)\/([a-zA-Z0-9]+)/);
    return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}` : null;
  };
  const embedUrl = spotifyUrl || extractSpotifyEmbedUrl(text);
  const cleanText = text.replace(/https?:\/\/open\.spotify\.com\/(track|album|playlist|episode)\/[a-zA-Z0-9]+(\?[^ ]*)?/g, "").trim();

  // Check if image should be shown
  const shouldShowImage = imageUrl && (
    imageUrl.startsWith('http') || 
    imageUrl.startsWith('https') ||
    imageUrl.startsWith('/')
  );

  // Tag color mapping
  const tagColorMap: Record<string, string> = {
    love: "bg-pink-200 text-pink-700",
    class: "bg-yellow-200 text-yellow-700",
    ucr: "bg-blue-200 text-blue-700",
    other: "bg-green-200 text-green-700",
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square border p-6 break-words relative cursor-pointer overflow-hidden">
          <p className="line-clamp-10">{cleanText}</p>

          {shouldShowImage && (
            <div className="mt-2 relative w-full" style={{ paddingBottom: '75%' }}>
              <Image
                src={imageUrl}
                alt="Entry image"
                fill
                className="object-contain rounded-md p-3"
                unoptimized
                priority={false}
              />
            </div>
          )}

          {embedUrl && (
            <div className="mt-2">
              <iframe
                src={embedUrl}
                width="100%"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Spotify Preview"
              ></iframe>
            </div>
          )}

          {tags && tags.length > 0 && (
            <div className="absolute left-0 bottom-0 flex flex-wrap gap-2 p-4">
              {tags.map(tag => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded font-semibold ${
                    tagColorMap[tag.replace("#", "")] || "bg-gray-200 text-gray-700"
                  }`}
                >
                  #{tag.replace("#", "")}
                </span>
              ))}
            </div>
          )}

          <p className="absolute bottom-0 right-0 text-xs text-gray-500 p-4">
            {formattedTimestamp}
          </p>
        </div>
      </DialogTrigger>

      <DialogContent className="rounded-md aspect-3/4 md:aspect-square w-3/4">
        <VisuallyHidden asChild>
          <DialogTitle>Entry</DialogTitle>
        </VisuallyHidden>

        <div className="space-y-4 p-1 md:p-3 overflow-y-auto h-full flex flex-col justify-between">
          <div>
            <div className="text-xs md:text-sm text-gray-500">{formattedTimestamp}</div>
            <div className="break-words text-xs md:text-sm whitespace-pre-wrap">{cleanText}</div>

            {shouldShowImage && (
              <div className="mt-2 relative w-full" style={{ paddingBottom: '75%' }}>
                <Image
                  src={imageUrl}
                  alt="Entry image"
                  fill
                  className="object-contain rounded-md p-3"
                  unoptimized
                  priority={false}
                />
              </div>
            )}

            {embedUrl && (
              <iframe
                src={embedUrl}
                width="100%"
                height="152"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="mt-2"
                title="Spotify Embed"
              ></iframe>
            )}
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map(tag => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-1 rounded font-semibold ${
                    tagColorMap[tag.replace("#", "")] || "bg-gray-200 text-gray-700"
                  }`}
                >
                  #{tag.replace("#", "")}
                </span>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Entry;
