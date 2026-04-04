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
      <footer className="border-t py-6" style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(10, 8, 6, 0.5)" }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-3">
            <a href="https://bandcamp.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="Bandcamp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>
            </a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="Spotify">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="mailto:contact@autisticscholars.org" className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="Email">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', system-ui, sans-serif" }}>
            Built by and for the autistic community.
          </p>
        </div>
      </footer>
    </div>
  );
}
