export default function FeaturedTrack() {
  return (
    <section className="py-16 px-4 relative overflow-hidden" style={{ backgroundColor: "rgba(10, 8, 6, 0.9)" }}>
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-64 h-64 rounded-full blur-3xl" style={{ backgroundColor: "rgba(212,175,55,0.08)" }} />
        <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full blur-3xl" style={{ backgroundColor: "rgba(194,59,59,0.06)" }} />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4" style={{ backgroundColor: "rgba(212,175,55,0.2)", color: "#D4AF37", fontFamily: "'Inter', system-ui, sans-serif" }}>
            Featured Release
          </span>
          <h2 className="text-3xl md:text-5xl font-black mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F5F5" }}>
            <span>La Logique au Pouvoir</span>
          </h2>
          <p className="mt-2" style={{ color: "rgba(255,255,255,0.6)", fontFamily: "'Inter', system-ui, sans-serif" }}>by Autismdecon</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Album Art */}
          <div className="flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300" style={{ backgroundColor: "rgba(212,175,55,0.3)" }} />
              <img
                src="/audio/la-logique-au-pouvoir.png"
                alt="La Logique au Pouvoir album cover"
                className="relative w-full max-w-sm rounded-2xl shadow-2xl"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}
              />
            </div>
          </div>

          {/* Track Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F5F5" }}>
              Now Available
            </h3>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', system-ui, sans-serif" }}>
              Autismdecon is driven by message, not just voice. The music is a definitive refusal to accept the flawed, radical pathology of autism. It doesn't waste time trying to prove or disprove anything to the neurotypical world; instead, it operates entirely from an autistic baseline as the logical default. Every song is fiercely autistic-centric, giving an entirely new meaning to unapologetic.
            </p>

            {/* Track listing */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-mono text-sm" style={{ color: "#D4AF37" }}>01</span>
                <span className="flex-1" style={{ color: "#F5F5F5", fontFamily: "'Inter', system-ui, sans-serif" }}>19.12 Precises</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', system-ui, sans-serif" }}>La Logique au Pouvoir</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-mono text-sm" style={{ color: "#D4AF37" }}>02</span>
                <span className="flex-1" style={{ color: "#F5F5F5", fontFamily: "'Inter', system-ui, sans-serif" }}>La Logique au Pouvoir</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', system-ui, sans-serif" }}>La Logique au Pouvoir</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-mono text-sm" style={{ color: "#D4AF37" }}>03</span>
                <span className="flex-1" style={{ color: "#F5F5F5", fontFamily: "'Inter', system-ui, sans-serif" }}>Deux Miroirs</span>
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "'Inter', system-ui, sans-serif" }}>La Logique au Pouvoir</span>
              </div>
            </div>

            {/* Play button */}
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('playArtist', { detail: 'Autismdecon' }));
                document.querySelector('#music-player')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold shadow-lg transition-all duration-200"
              style={{ backgroundColor: "#C23B3B", color: "#fff", fontFamily: "'Inter', system-ui, sans-serif" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#a93232"; e.currentTarget.style.transform = "scale(1.05)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#C23B3B"; e.currentTarget.style.transform = "scale(1)"; }}
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
