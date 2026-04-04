import { useState, useRef, useEffect } from 'react';

interface Track {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
  audioSrc: string;
  coverImage?: string;
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
  },
  {
    id: 8,
    title: "Deux Miroirs",
    artist: "Autismdecon",
    album: "La Logique au Pouvoir",
    duration: "0:00",
    cover: "🎵",
    coverImage: "/audio/deux-miroirs.png",
    audioSrc: "/audio/deux-miroirs.mp3"
  },
  {
    id: 9,
    title: "Se du Vent",
    artist: "Autismdecon",
    album: "La Logique au Pouvoir",
    duration: "0:00",
    cover: "🎵",
    coverImage: "/audio/se-du-vent.png",
    audioSrc: "/audio/se-du-vent.mp3"
  }
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
    <div className="flex-shrink-0 w-full" style={{ backgroundColor: '#0a0806', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      {/* Progress Bar */}
      <div className="w-full h-1" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
        <div
          className="h-full transition-all duration-300"
          style={{ backgroundColor: '#D4AF37', width: `${progress}%` }}
        />
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Left: Track Info */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {currentTrack.coverImage ? (
            <img src={currentTrack.coverImage} alt={currentTrack.title} className="w-10 h-10 object-cover flex-shrink-0" style={{ aspectRatio: '1/1' }} />
          ) : (
            <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 text-lg" style={{ backgroundColor: 'rgba(212,175,55,0.15)' }}>{currentTrack.cover}</div>
          )}
          <div className="min-w-0">
            <p className="text-sm font-medium truncate" style={{ color: '#F5F5F5', fontFamily: "'Inter', system-ui, sans-serif" }}>{currentTrack.title}</p>
            <p className="text-xs truncate" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Inter', system-ui, sans-serif" }}>{currentTrack.artist}</p>
          </div>
        </div>

        {/* Center: Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsShuffled(!isShuffled)}
            className="p-2 rounded transition-all"
            style={{ backgroundColor: isShuffled ? '#D4AF37' : 'rgba(255,255,255,0.06)', color: isShuffled ? '#0a0806' : 'rgba(255,255,255,0.5)' }}
            title="Shuffle"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l-3.5-3.5M4 4l5 5" />
            </svg>
          </button>

          <button
            onClick={playPrevious}
            className="p-2 rounded transition-all"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
            </svg>
          </button>

          <button
            onClick={togglePlay}
            className="p-3 rounded-full text-white transition-all duration-200"
            style={{ backgroundColor: '#C23B3B' }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#a93232'; e.currentTarget.style.transform = 'scale(1.05)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#C23B3B'; e.currentTarget.style.transform = 'scale(1)'; }}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          <button
            onClick={playNext}
            className="p-2 rounded transition-all"
            style={{ backgroundColor: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
            </svg>
          </button>

          <button
            onClick={toggleRepeat}
            className="p-2 rounded transition-all"
            style={{ backgroundColor: repeatMode !== 'off' ? '#D4AF37' : 'rgba(255,255,255,0.06)', color: repeatMode !== 'off' ? '#0a0806' : 'rgba(255,255,255,0.5)' }}
            title={`Repeat: ${repeatMode}`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </button>
        </div>

        {/* Right: Volume + Time */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <span className="text-xs font-mono hidden sm:block" style={{ color: 'rgba(255,255,255,0.4)' }}>{formatTime(currentTime)}</span>
          <svg className="w-4 h-4 hidden sm:block" style={{ color: 'rgba(255,255,255,0.5)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
            className="w-24 h-1 rounded-full appearance-none cursor-pointer hidden sm:block"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}
          />
        </div>
      </div>
    </div>
  );
}
