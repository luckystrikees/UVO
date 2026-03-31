import { Artist } from '../data/artists';

interface ArtistGridProps {
  artists: Artist[];
}

export default function ArtistGrid({ artists }: ArtistGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
      {artists.map((artist, index) => (
        <div
          key={index}
          className="group relative bg-white/[0.03] border border-white/10 hover:border-red-500/50 rounded-xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:-translate-y-1"
        >
          {/* Emoji icon */}
          <div className="text-5xl sm:text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
            {artist.image}
          </div>

          {/* Name */}
          <h4 className="text-lg font-black text-white group-hover:text-red-400 transition-colors mb-2 uppercase tracking-tight">
            {artist.name}
          </h4>

          {/* Genre */}
          <div className="inline-block bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider px-2 py-1 rounded mb-3">
            {artist.genre}
          </div>

          {/* Bio */}
          <p className="text-gray-500 text-sm leading-relaxed mb-4">
            {artist.bio}
          </p>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-gray-600 font-bold uppercase tracking-wider">
            <span>{artist.tracks} tracks</span>
          </div>

          {/* Hover glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
