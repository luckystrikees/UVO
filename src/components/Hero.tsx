export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-background.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-slate-900/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Translucent backplate */}
        <div className="inline-block p-8 md:p-12 rounded-3xl bg-black/5">
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="block text-white">AUTISTIC</span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              PRIDE
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-200 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
            Unapologetic sounds.
            <span className="text-amber-400 font-semibold"> Loud, proud, and militant.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
          <button
            onClick={() => document.querySelector('#music-player')?.scrollIntoView({ behavior: 'smooth' })}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-600 text-white font-bold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Start Listening
            </span>
          </button>

          <button
            onClick={() => document.querySelector('#mission')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Join the Movement
            </span>
          </button>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
