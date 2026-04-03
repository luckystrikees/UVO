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
        </div>
      </div>
    </section>
  );
}
