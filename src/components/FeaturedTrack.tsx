export default function FeaturedTrack() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-pink-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold rounded-full mb-4">
            Featured Release
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              La Logique au Pouvoir
            </span>
          </h2>
          <p className="text-slate-400 text-lg mt-2">by Autismdecon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Album Art */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              <img
                src="/audio/la-logique-au-pouvoir.png"
                alt="La Logique au Pouvoir album cover"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl border border-purple-500/30"
              />
            </div>
          </div>

          {/* Track Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Now Available
            </h3>
            <p className="text-slate-300 text-lg mb-6 leading-relaxed">
              Autismdecon brings a powerful voice to the autistic music scene with music that challenges neurotypical norms through logic and authentic expression.
            </p>

            {/* Track listing */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                <span className="text-purple-400 font-mono text-sm">01</span>
                <span className="text-white flex-1">19.12 Precises</span>
                <span className="text-slate-500 text-sm">La Logique au Pouvoir</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-purple-900/20 rounded-lg border border-purple-500/20">
                <span className="text-purple-400 font-mono text-sm">02</span>
                <span className="text-white flex-1">La Logique au Pouvoir</span>
                <span className="text-slate-500 text-sm">La Logique au Pouvoir</span>
              </div>
            </div>

            {/* Play button */}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('playArtist', { detail: 'Autismdecon' }));
                document.querySelector('#music-player')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-bold rounded-full shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
