import { Play, Pause, Disc } from 'lucide-react';
import { Track } from '../data/tracks';

interface TrackListProps {
  tracks: Track[];
  currentTrack: number | null;
  isPlaying: boolean;
  onPlay: (index: number) => void;
  onToggle: () => void;
}

export default function TrackList({ tracks, currentTrack, isPlaying, onPlay, onToggle }: TrackListProps) {
  return (
    <div className="space-y-1">
      {tracks.map((track, index) => {
        const isCurrentTrack = currentTrack === index;
        return (
          <button
            key={index}
            onClick={() => {
              if (isCurrentTrack) {
                onToggle();
              } else {
                onPlay(index);
              }
            }}
            className={`w-full group flex items-center gap-4 sm:gap-6 p-3 sm:p-4 rounded-lg transition-all duration-200 ${
              isCurrentTrack
                ? 'bg-yellow-500/10 border border-yellow-500/30'
                : 'hover:bg-white/5 border border-transparent'
            }`}
          >
            {/* Play/Pause indicator */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-yellow-500/20 transition-colors">
              {isCurrentTrack && isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-yellow-400 transition-colors ml-0.5" />
              )}
            </div>

            {/* Track number */}
            <div className="w-6 text-center flex-shrink-0">
              {isCurrentTrack && isPlaying ? (
                <Disc className="w-4 h-4 text-yellow-400 animate-spin mx-auto" />
              ) : (
                <span className="text-gray-600 text-sm font-mono">{String(index + 1).padStart(2, '0')}</span>
              )}
            </div>

            {/* Track info */}
            <div className="flex-1 text-left min-w-0">
              <div className={`font-bold text-sm sm:text-base truncate ${isCurrentTrack ? 'text-yellow-400' : 'text-white group-hover:text-yellow-400'} transition-colors`}>
                {track.title}
              </div>
              <div className="text-gray-500 text-xs sm:text-sm truncate">
                {track.artist} — {track.album}
              </div>
            </div>

            {/* Genre badge */}
            <div className="hidden sm:block flex-shrink-0">
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600 bg-white/5 px-3 py-1 rounded-full">
                {track.genre}
              </span>
            </div>

            {/* Duration */}
            <div className="text-gray-500 text-sm font-mono flex-shrink-0">
              {track.duration}
            </div>
          </button>
        );
      })}
    </div>
  );
}
