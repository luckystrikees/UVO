import Hero from './components/Hero';
import ArtistShowcase from './components/ArtistShowcase';
import MusicPlayer from './components/MusicPlayer';
import MissionStatement from './components/MissionStatement';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 flex items-center justify-center">
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
        <MissionStatement />
        <ArtistShowcase />
        <div className="max-w-4xl mx-auto p-4">
          <MusicPlayer />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-500/30 mt-16">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <p className="text-slate-400 mb-4">
            This platform was built with passion by and for the autistic community.
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="text-purple-400 hover:text-purple-300">About</a>
            <a href="#" className="text-purple-400 hover:text-purple-300">Contact</a>
            <a href="#" className="text-purple-400 hover:text-purple-300">Donate</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
