export default function MissionStatement() {
  return (
    <section id="mission" className="py-20 px-4" style={{ backgroundColor: "rgba(10, 8, 6, 0.95)" }}>
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote icon */}
        <div className="mb-8">
          <svg className="w-16 h-16 mx-auto" style={{ color: "#D4AF37" }} fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Main mission text */}
        <blockquote className="text-2xl md:text-4xl font-bold mb-8 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F5F5" }}>
          "We're not here to be cured. We're here to be <span style={{ color: "#D4AF37" }}>heard</span>."
        </blockquote>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-24" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.5))" }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#D4AF37" }} />
          <div className="h-px w-24" style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.5))" }} />
        </div>

        {/* Mission paragraphs */}
        <div className="space-y-6 text-lg" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'Inter', system-ui, sans-serif" }}>
          <p>
            This platform exists to amplify autistic voices through music that's raw, real, and revolutionary.
            We reject the narrative that autism needs fixing. Instead, we celebrate neurodivergence as a vital
            part of human diversity.
          </p>

          <p>
            Our artists create music from lived autistic experiences—songs about sensory overload, special
            interests, the exhaustion of masking, and the liberation of being truly seen. This isn't
            inspiration porn. This is <span className="font-semibold" style={{ color: "#C23B3B" }}>resistance</span>.
          </p>

          <p>
            Whether you're autistic yourself or an ally, we invite you to listen, learn, and join the movement
            for a world that embraces neurodiversity instead of trying to erase it.
          </p>
        </div>

        {/* Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <div className="text-4xl mb-4">✊</div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F5F5" }}>Militant Pride</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', system-ui, sans-serif" }}>We don't ask for acceptance. We demand it.</p>
          </div>

          <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(194,59,59,0.08)", border: "1px solid rgba(194,59,59,0.2)" }}>
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F5F5" }}>Unmasking</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', system-ui, sans-serif" }}>Authenticity over assimilation. Always.</p>
          </div>

          <div className="p-6 rounded-2xl" style={{ backgroundColor: "rgba(212,175,55,0.08)", border: "1px solid rgba(212,175,55,0.2)" }}>
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: "#F5F5F5" }}>Neurodiversity</h3>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)", fontFamily: "'Inter', system-ui, sans-serif" }}>Different, not deficient. Proud, not sorry.</p>
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-8">
            <a href="https://bandcamp.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="Bandcamp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M0 18.75l7.437-13.5H24l-7.438 13.5z"/></svg>
            </a>
            <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="Spotify">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="YouTube">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="mailto:contact@autisticscholars.org" className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300" style={{ backgroundColor: "rgba(212,175,55,0.15)", borderColor: "rgba(212,175,55,0.3)", color: "#D4AF37" }} onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.25)"; e.currentTarget.style.color = "#E8C84A"; }} onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "rgba(212,175,55,0.15)"; e.currentTarget.style.color = "#D4AF37"; }} aria-label="Email">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
