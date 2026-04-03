import Hero from './components/Hero';
import ArtistShowcase from './components/ArtistShowcase';
import MusicPlayer from './components/MusicPlayer';
import MissionStatement from './components/MissionStatement';
import FeaturedTrack from './components/FeaturedTrack';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-amber-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl">Unapologetically Autistic</span>
          </div>
          <div className="flex gap-4">
            <a href="#artists" className="text-slate-300 hover:text-white transition-colors">Artists</a>
            <a href="#mission" className="text-slate-300 hover:text-white transition-colors">Mission</a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <Hero />
        {/* Wave divider */}
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,48 1440,32 L1440,64 L0,64 Z" fill="rgb(30 27 75)" />
          </svg>
        </div>
        <FeaturedTrack />
        <ArtistShowcase />
        {/* Wave divider */}
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,48 1440,32 L1440,64 L0,64 Z" fill="rgb(30 27 75)" />
          </svg>
        </div>
        <MissionStatement />
        <div id="music-player" className="max-w-4xl mx-auto p-4">
          <MusicPlayer />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-amber-500/30 mt-16 bg-slate-900/50">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <p className="text-slate-400 mb-6">
            This platform was built with passion by and for the autistic community.
          </p>
          
          {/* Social links */}
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://bandcamp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-amber-900/30 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-800/50 hover:text-amber-300 hover:border-amber-400/50 transition-all duration-300"
              aria-label="Bandcamp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/>
              </svg>
            </a>
            <a
              href="https://open.spotify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-amber-900/30 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-800/50 hover:text-amber-300 hover:border-amber-400/50 transition-all duration-300"
              aria-label="Spotify"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-amber-900/30 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-800/50 hover:text-amber-300 hover:border-amber-400/50 transition-all duration-300"
              aria-label="YouTube"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a
              href="mailto:contact@autisticscholars.org"
              className="w-12 h-12 rounded-full bg-amber-900/30 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:bg-amber-800/50 hover:text-amber-300 hover:border-amber-400/50 transition-all duration-300"
              aria-label="Email"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a href="#" className="text-amber-400 hover:text-amber-300">About</a>
            <a href="#" className="text-amber-400 hover:text-amber-300">Contact</a>
            <a href="#" className="text-amber-400 hover:text-amber-300">Donate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
