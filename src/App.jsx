import React, { useState } from 'react';

// The "export default function App" is the exact key to fixing Error 130
export default function App() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    { id: 1, title: "Gentle Frequencies", artist: "Echo Drift", duration: "3:45" },
    { id: 2, title: "Sensory Sunset", artist: "Lumina", duration: "4:20" },
    { id: 3, title: "Focus & Flow", artist: "The Proud Mind", duration: "2:55" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* Modern Sticky Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tight text-indigo-400">
            United Voices
          </div>
          <nav className="space-x-8 text-sm font-medium text-slate-300">
            <a href="#mission" className="hover:text-white transition-colors">Our Mission</a>
            <a href="#showcase" className="hover:text-white transition-colors">The Music</a>
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-full transition-all">
              Submit a Track
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-24">
        <section id="mission" className="max-w-3xl mb-32">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Music for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Fiercely Proud.
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl">
            Welcome to unitedvoices.online. A curated, sensory-friendly audio space designed to affirm, soothe, and celebrate neurodiversity. No auto-play. No visual clutter. Just pure sound.
          </p>
        </section>

        {/* Custom Music Showcase */}
        <section id="showcase">
          <h2 className="text-2xl font-semibold mb-8 border-b border-slate-800 pb-4">Featured Artists</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <div 
                key={track.id} 
                className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 hover:bg-slate-800 transition-colors group cursor-pointer"
                onClick={() => setActiveTrack(track)}
              >
                <div className="w-full h-48 bg-slate-700 rounded-xl mb-6 flex items-center justify-center text-slate-500 group-hover:bg-slate-600 transition-colors">
                  [ Cover Art ]
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium text-white">{track.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{track.artist}</p>
                  </div>
                  <button 
                    className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
                      activeTrack?.id === track.id ? 'bg-indigo-500 text-white' : 'bg-slate-700 text-slate-300 group-hover:bg-indigo-500 group-hover:text-white'
                    }`}
                    aria-label={`Play ${track.title}`}
                  >
                    ▶
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating Modern Audio Player */}
      {activeTrack && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] max-w-2xl bg-slate-800 border border-slate-700 shadow-2xl rounded-2xl p-4 flex items-center space-x-4 animate-fade-in-up">
          <div className="h-12 w-12 bg-slate-600 rounded-lg flex-shrink-0"></div>
          <div className="flex-grow">
            <div className="text-sm font-medium text-white">{activeTrack.title}</div>
            <div className="text-xs text-slate-400">{activeTrack.artist}</div>
          </div>
          <div className="flex items-center space-x-4">
             <span className="text-xs text-slate-400">0:00 / {activeTrack.duration}</span>
             <button className="text-slate-300 hover:text-white text-xl">⏸</button>
          </div>
        </div>
      )}
    </div>
  );
}