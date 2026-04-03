import { useState, useRef, useEffect, useCallback } from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string; // Emoji fallback or image URL
  audioSrc: string; // Path to audio file: '/audio/filename.mp3'
  coverImage?: string; // Optional: Path to cover image
}

const tracks: Track[] = [
  {
    id: 6,
    title: "19.12 Precises",
    artist: "Autismdecon",
    album: "La Logique au Pouvoir",
    duration: "0:00",
    cover: "🎵",
    coverImage: "/audio/19-12-precises.png",
    audioSrc: "/audio/19-12-precises.mp3"
  },
  {
    id: 7,
    title: "La Logique au Pouvoir",
    artist: "Autismdecon",
    album: "La Logique au Pouvoir",
    duration: "0:00",
    cover: "🎵",
    coverImage: "/audio/la-logique-au-pouvoir.png",
    audioSrc: "/audio/la-logique-au-pouvoir.mp3"
  }
  // ADD NEW SONGS HERE - Copy this format:
  // {
  //   id: 6,
  //   title: "Your Song Title",
  //   artist: "Artist Name",
  //   album: "Album Name",
  //   duration: "3:30",
  //   cover: "🎵",  // Emoji or you can use image URL
  //   audioSrc: "/audio/your-file.mp3"
  // }
];

export default function MusicPlayer() {
  const [currentTrack, setCurrentTrack] = useState<Track>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState<'off' | 'all' | 'one'>('off');
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Listen for play-from-artist-card events
  useEffect(() => {
    const handlePlayArtist = (e: CustomEvent<string>) => {
      const artistName = e.detail;
      const firstTrack = tracks.find(t => t.artist === artistName);
      if (firstTrack) {
        setCurrentTrack(firstTrack);
        setProgress(0);
        setIsPlaying(true);
      }
    };

    window.addEventListener('playArtist', handlePlayArtist as EventListener);
    return () => window.removeEventListener('playArtist', handlePlayArtist as EventListener);
  }, []);

  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Update audio source when track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.audioSrc;
      audioRef.current.load();
      if (isPlaying) {
        audioRef.current.play().catch(() => setIsPlaying(false));
      }
    }
  }, [currentTrack]);

  // Handle play/pause
  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => setIsPlaying(false));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Update progress based on audio playback
  useEffect(() => {
    if (!audioRef.current) return;

    const updateProgress = () => {
      if (audioRef.current && audioRef.current.duration) {
        const progressPercent = (audioRef.current.currentTime / audioRef.current.duration) * 100;
        setProgress(progressPercent);
        setCurrentTime(audioRef.current.currentTime);
      }
    };

    audioRef.current.addEventListener('timeupdate', updateProgress);
    audioRef.current.addEventListener('ended', () => {
      if (repeatMode === 'one') {
        audioRef.current!.currentTime = 0;
        audioRef.current!.play();
      } else {
        playNext();
      }
    });

    return () => {
      audioRef.current?.removeEventListener('timeupdate', updateProgress);
    };
  }, [repeatMode, currentTrack]);

  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Format time helper
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const playNext = () => {
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    let nextIndex;
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * tracks.length);
    } else {
      nextIndex = (currentIndex + 1) % tracks.length;
    }
    setCurrentTrack(tracks[nextIndex]);
    setProgress(0);
  };

  const playPrevious = () => {
    const currentIndex = tracks.findIndex(t => t.id === currentTrack.id);
    let prevIndex;
    if (isShuffled) {
      prevIndex = Math.floor(Math.random() * tracks.length);
    } else {
      prevIndex = (currentIndex - 1 + tracks.length) % tracks.length;
    }
    setCurrentTrack(tracks[prevIndex]);
    setProgress(0);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const handleTrackSelect = (track: Track) => {
    setCurrentTrack(track);
    setProgress(0);
    setIsPlaying(true);
  };

  const toggleRepeat = () => {
    const modes: ('off' | 'all' | 'one')[] = ['off', 'all', 'one'];
    const currentIndex = modes.indexOf(repeatMode);
    setRepeatMode(modes[(currentIndex + 1) % modes.length]);
  };

  return (
    <div className="bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 rounded-3xl p-6 shadow-2xl border border-purple-500/30">
      {/* Album Art & Current Track */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-48 h-48 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-amber-500 shadow-xl mb-4 overflow-hidden">
          {currentTrack.coverImage ? (
            <img src={currentTrack.coverImage} alt={currentTrack.title} className="w-full h-full object-cover" />
          ) : (
            <span className="text-8xl">{currentTrack.cover}</span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-white mb-1">{currentTrack.title}</h3>
        <p className="text-purple-300 text-lg">{currentTrack.artist}</p>
        <p className="text-purple-400/70 text-sm">{currentTrack.album}</p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="relative h-2 bg-purple-900/50 rounded-full overflow-hidden">
          <div
            className="absolute h-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-purple-300 text-xs mt-2">
          <span>{formatTime(currentTime)}</span>
          <span>{currentTrack.duration}</span>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={() => setIsShuffled(!isShuffled)}
          className={`p-2 rounded-lg transition-all ${isShuffled ? 'bg-purple-500 text-white' : 'text-purple-300 hover:bg-purple-800/50'}`}
          title="Shuffle"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l-3.5-3.5M4 4l5 5" />
          </svg>
        </button>
        
        <button
          onClick={playPrevious}
          className="p-3 rounded-full bg-purple-800/50 text-purple-200 hover:bg-purple-700 transition-all"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
          </svg>
        </button>
        
        <button
          onClick={togglePlay}
          className="p-5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-amber-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all"
        >
          {isPlaying ? (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        
        <button
          onClick={playNext}
          className="p-3 rounded-full bg-purple-800/50 text-purple-200 hover:bg-purple-700 transition-all"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </button>
        
        <button
          onClick={toggleRepeat}
          className={`p-2 rounded-lg transition-all ${repeatMode !== 'off' ? 'bg-purple-500 text-white' : 'text-purple-300 hover:bg-purple-800/50'}`}
          title={`Repeat: ${repeatMode}`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          {repeatMode === 'one' && <span className="text-xs absolute">1</span>}
        </button>
      </div>

      {/* Volume Control */}
      <div className="flex items-center gap-3 mb-6">
        <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="flex-1 h-2 bg-purple-900/50 rounded-full appearance-none cursor-pointer accent-purple-500"
        />
      </div>

      {/* Playlist */}
      <div className="border-t border-purple-700/50 pt-4">
        <h4 className="text-purple-300 font-semibold mb-3 text-sm uppercase tracking-wider">Playlist</h4>
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => handleTrackSelect(track)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                currentTrack.id === track.id
                  ? 'bg-purple-600/50 border border-purple-400/50'
                  : 'bg-purple-800/30 hover:bg-purple-700/50 border border-transparent'
              }`}
            >
              {track.coverImage ? (
                <img src={track.coverImage} alt={track.title} className="w-8 h-8 rounded object-cover" />
              ) : (
                <span className="text-2xl">{track.cover}</span>
              )}
              <div className="flex-1 text-left">
                <p className={`font-medium ${currentTrack.id === track.id ? 'text-white' : 'text-purple-200'}`}>
                  {track.title}
                </p>
                <p className="text-purple-400 text-sm">{track.artist}</p>
              </div>
              {currentTrack.id === track.id && isPlaying && (
                <div className="flex items-end gap-0.5 h-4">
                  <div className="w-1 bg-amber-400 animate-pulse" style={{ height: '60%' }}></div>
                  <div className="w-1 bg-purple-400 animate-pulse" style={{ height: '100%', animationDelay: '0.1s' }}></div>
                  <div className="w-1 bg-red-400 animate-pulse" style={{ height: '40%', animationDelay: '0.2s' }}></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
