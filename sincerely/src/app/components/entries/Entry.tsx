"use client"; 

import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/app/ui/Dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface EntryProps {
  id: string;
  text: string;
  spotifyUrl?: string;
  timestamp: any;
}

const Entry = ({ text, id, timestamp, spotifyUrl }: EntryProps) => {
  const formattedTimestamp = timestamp?.toDate?.().toLocaleDateString() || "Undated";

  const extractSpotifyEmbedUrl = (text: string): string | null => {
    const match = text.match(/https?:\/\/open\.spotify\.com\/(track|album|playlist|episode)\/([a-zA-Z0-9]+)/);
    return match ? `https://open.spotify.com/embed/${match[1]}/${match[2]}` : null;
  };

  const embedUrl = spotifyUrl || extractSpotifyEmbedUrl(text);
  const cleanText = text.replace(/https?:\/\/open\.spotify\.com\/(track|album|playlist|episode)\/[a-zA-Z0-9]+(\?[^ ]*)?/g, "").trim();


  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square border p-6 break-words relative cursor-pointer overflow-hidden">
          <p className="line-clamp-10">{cleanText}</p>

          {embedUrl && (
            <div className="mt-2">
              <iframe
                src={embedUrl}
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title="Spotify Preview"
              ></iframe>
            </div>
          )}

          <p className="absolute bottom-0 right-0 text-xs text-gray-500 p-4">{formattedTimestamp}</p>
        </div>
      </DialogTrigger>

      <DialogContent className="rounded-md aspect-3/4 md:aspect-square w-3/4">
        <VisuallyHidden asChild>
          <DialogTitle>Entry</DialogTitle>
        </VisuallyHidden>

        <div className="space-y-4 p-1 md:p-3 overflow-y-auto">
          <div className="text-xs md:text-sm text-gray-500">{formattedTimestamp}</div>
          <div className="break-words text-xs md:text-sm whitespace-pre-wrap">{cleanText}</div>
          {embedUrl && (
            <iframe
              src={embedUrl}
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              allowTransparency
              className="mt-2"
              title="Spotify Embed"
            ></iframe>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Entry;
