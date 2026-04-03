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
  return (
    <div className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-1">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Artist Image */}
      <div className="relative h-48 overflow-hidden">
        {artist.image.startsWith('/') ? (
          <img src={artist.image} alt={artist.name} className="absolute inset-0 w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 flex items-center justify-center">
            <span className="text-7xl">{artist.image}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative p-5">
        <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold rounded-full mb-3">
          {artist.genre}
        </span>
        
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-purple-300 transition-colors">
          {artist.name}
        </h3>
        
        <p className="text-purple-400 text-sm font-medium mb-3">{artist.tagline}</p>
        
        <p className="text-slate-400 text-sm leading-relaxed">
          {artist.description}
        </p>
        
        {/* Play button overlay */}
        <button className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/20 hover:scale-110">
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
