import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { Track } from '../data/tracks';

interface AudioPlayerProps {
  track: Track;
  isPlaying: boolean;
  progress: number;
  onToggle: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function AudioPlayer({ track, isPlaying, progress, onToggle, onNext, onPrev }: AudioPlayerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-t border-yellow-500/30">
      {/* Progress bar */}
      <div className="h-1 bg-white/10 w-full">
        <div
          className="h-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400 transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center gap-3 sm:gap-6">
          {/* Track info */}
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm sm:text-base text-white truncate">
              {track.title}
            </div>
            <div className="text-gray-500 text-xs sm:text-sm truncate">
              {track.artist} — {track.album}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={onPrev}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <SkipBack className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={onToggle}
              className="p-3 sm:p-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full transition-all hover:scale-105"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
              )}
            </button>
            <button
              onClick={onNext}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <SkipForward className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Volume icon */}
          <div className="hidden sm:flex items-center gap-2 text-gray-500">
            <Volume2 className="w-4 h-4" />
            <span className="text-xs font-mono">{track.duration}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
