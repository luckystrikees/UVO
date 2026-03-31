import { useState, useEffect, useRef } from 'react';
import { Volume2, Heart, Zap, Radio, Shield, BookOpen, Menu, X, Disc } from 'lucide-react';
import { tracks } from './data/tracks';
import { artists } from './data/artists';
import { manifestos } from './data/manifestos';
import Hero from './components/Hero';
import TrackList from './components/TrackList';
import ArtistGrid from './components/ArtistGrid';
import ManifestoSection from './components/ManifestoSection';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';

function App() {
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPlaying && currentTrack !== null) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentTrack]);

  const playTrack = (index: number) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const togglePlay = () => setIsPlaying(!isPlaying);

  const nextTrack = () => {
    if (currentTrack !== null) {
      const next = (currentTrack + 1) % tracks.length;
      playTrack(next);
    }
  };

  const prevTrack = () => {
    if (currentTrack !== null) {
      const prev = (currentTrack - 1 + tracks.length) % tracks.length;
      playTrack(prev);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/95 backdrop-blur-md border-b border-yellow-500/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button onClick={() => scrollTo('hero')} className="flex items-center gap-2 group">
              <Zap className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
              <span className="font-black text-lg tracking-tighter uppercase">
                <span className="text-yellow-400">Militant</span>
                <span className="text-white"> </span>
                <span className="text-red-500">Autistic</span>
                <span className="text-white"> </span>
                <span className="text-blue-400">Pride</span>
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Tracks', id: 'tracks' },
                { label: 'Artists', id: 'artists' },
                { label: 'Manifesto', id: 'manifesto' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('tracks')}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm uppercase tracking-wider px-4 py-2 transition-colors"
              >
                Listen Now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-yellow-500/30">
            <div className="px-4 py-4 space-y-3">
              {[
                { label: 'Tracks', id: 'tracks' },
                { label: 'Artists', id: 'artists' },
                { label: 'Manifesto', id: 'manifesto' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="block w-full text-left text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-yellow-400 transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <Hero onExplore={() => scrollTo('tracks')} />

      {/* Tracks Section */}
      <section id="tracks" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <Disc className="w-6 h-6 text-yellow-400 animate-spin-slow" />
            <h2 className="text-yellow-400 font-black text-sm uppercase tracking-[0.3em]">Featured Tracks</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 leading-tight">
            THE SOUND OF<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400">
              NEURODIVERGENT FURY
            </span>
          </h3>
          <TrackList
            tracks={tracks}
            currentTrack={currentTrack}
            isPlaying={isPlaying}
            onPlay={playTrack}
            onToggle={togglePlay}
          />
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/10 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-2">
            <Radio className="w-6 h-6 text-red-500" />
            <h2 className="text-red-500 font-black text-sm uppercase tracking-[0.3em]">The Artists</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 leading-tight">
            VOICES THAT<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-400 to-green-400">
              REFUSE TO BE SILENCED
            </span>
          </h3>
          <ArtistGrid artists={artists} />
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-6 h-6 text-blue-400" />
            <h2 className="text-blue-400 font-black text-sm uppercase tracking-[0.3em]">The Manifesto</h2>
          </div>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-12 leading-tight">
            OUR DEMANDS ARE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400">
              NON-NEGOTIABLE
            </span>
          </h3>
          <ManifestoSection items={manifestos} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="border-2 border-yellow-500 p-8 sm:p-12 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black px-4">
              <Shield className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-3xl sm:text-4xl font-black mb-6 uppercase">
              Join the <span className="text-yellow-400">Movement</span>
            </h3>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              This is more than music. This is a declaration of existence. Every track is a fist raised against 
              a world that demands we mask, shrink, and disappear. We refuse. We are loud. We are proud. 
              We are autistic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo('tracks')}
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm uppercase tracking-wider px-8 py-4 transition-all hover:scale-105 flex items-center justify-center gap-2"
              >
                <Volume2 className="w-5 h-5" />
                Listen Now
              </button>
              <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-black font-black text-sm uppercase tracking-wider px-8 py-4 transition-all hover:scale-105 flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Support Artists
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Audio Player */}
      {currentTrack !== null && (
        <AudioPlayer
          track={tracks[currentTrack]}
          isPlaying={isPlaying}
          progress={progress}
          onToggle={togglePlay}
          onNext={nextTrack}
          onPrev={prevTrack}
        />
      )}
    </div>
  );
}

export default App;
