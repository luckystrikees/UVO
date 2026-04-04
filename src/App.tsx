import Hero from './components/Hero';
import ArtistShowcase from './components/ArtistShowcase';
import MusicPlayer from './components/MusicPlayer';
import MissionStatement from './components/MissionStatement';
import FeaturedTrack from './components/FeaturedTrack';

export default function App() {
  return (
    <div className="flex flex-col" style={{ height: '100vh', overflow: 'hidden', backgroundColor: '#0a0806' }}>
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(10, 8, 6, 0.6)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <span className="text-white font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>Autistic Music</span>
          </div>
          <div className="flex gap-4">
            <a href="#artists" className="text-slate-300 hover:text-white transition-colors" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Artists</a>
            <a href="#mission" className="text-slate-300 hover:text-white transition-colors" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>Mission</a>
          </div>
        </div>
      </nav>

      {/* Main Content Area (Scrollable) */}
      <main className="flex-1 overflow-y-auto pt-20">
        <Hero />
        {/* Wave divider */}
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,48 1440,32 L1440,64 L0,64 Z" fill="#0a0806" />
          </svg>
        </div>
        <FeaturedTrack />
        <ArtistShowcase />
        {/* Wave divider */}
        <div className="relative h-16 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-16" viewBox="0 0 1440 64" preserveAspectRatio="none">
            <path d="M0,32 C360,64 720,0 1080,32 C1260,48 1380,48 1440,32 L1440,64 L0,64 Z" fill="#0a0806" />
          </svg>
        </div>
        <MissionStatement />
      </main>

      {/* Bottom-Docked Player */}
      <MusicPlayer />

      {/* Footer */}
      <footer className="border-t py-3" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(10, 8, 6, 0.5)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', system-ui, sans-serif" }}>
            Built by and for the autistic community.
          </p>
        </div>
      </footer>
    </div>
  );
}
