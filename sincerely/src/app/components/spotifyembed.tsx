"use client";

import { useState, FormEvent, ChangeEvent } from "react";

const SpotifyEmbed: React.FC = () => {
  const [url, setUrl] = useState<string>("");
  const [embedUrl, setEmbedUrl] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const id = extractTrackId(url);
    if (id) {
      setEmbedUrl(`https://open.spotify.com/embed/track/${id}`);
    }
  };

  const extractTrackId = (link: string): string | null => {
    const match = link.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md space-y-4">
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          className="w-full border rounded px-3 py-2"
          placeholder="Paste Spotify track URL"
          value={url}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setUrl(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
        >
          Embed
        </button>
      </form>

      {embedUrl && (
        <iframe
          src={embedUrl}
          width="100%"
          height="152"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          // allowTransparency={true}
          title="Spotify Track Embed"
        ></iframe>
      )}
    </div>
  );
};

export default SpotifyEmbed;
