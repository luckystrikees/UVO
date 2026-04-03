interface Artist {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  genre: string;
}

interface ArtistCardProps {
  artist: Artist;
}

export default function ArtistCard({ artist }: ArtistCardProps) {
  const handlePlay = () => {
    // Dispatch custom event to trigger playback in MusicPlayer
    window.dispatchEvent(new CustomEvent('playArtist', { detail: artist.name }));
    // Scroll to music player
    document.querySelector('#music-player')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Artist Image */}
      <div className="relative h-48 overflow-hidden">
        {artist.image.startsWith('/') ? (
          <img src={artist.image} alt={artist.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" style={{ backgroundColor: "rgba(212,175,55,0.15)" }}>
            <span className="text-7xl">{artist.image}</span>
          </div>
        )}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,8,6,0.8), transparent)" }} />
      </div>

      {/* Content */}
      <div className="relative p-5">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3" style={{ backgroundColor: "rgba(212,175,55,0.2)", color: "#D4AF37", fontFamily: "'Inter', system-ui, sans-serif" }}>
          {artist.genre}
        </span>

        <h3 className="text-xl font-bold mb-1 transition-colors" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F5F5" }}>
          {artist.name}
        </h3>

        <p className="text-sm font-medium mb-3" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', system-ui, sans-serif" }}>{artist.tagline}</p>

        <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', system-ui, sans-serif" }}>
          {artist.description}
        </p>

        {/* Play button overlay */}
        <button
          onClick={handlePlay}
          className="absolute top-4 right-4 w-12 h-12 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
          style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(4px)" }}
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
