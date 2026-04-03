export default function Hero() {
  return (
    <section className="relative h-screen min-h-[720px] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: "url('/hero-background.png')" }}
      />

      {/* Overlay (contrast control) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,8,6,0.65)_0%,rgba(10,8,6,0.25)_40%,rgba(10,8,6,0.25)_60%,rgba(10,8,6,0.75)_100%)]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[900px] px-6 -mt-[25vh]">

        {/* Label */}
        <div className="text-[12px] tracking-[0.18em] uppercase text-white/60 mb-5" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
          Neurodiversity-Affirming Platform
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(48px,6vw,72px)] leading-tight mb-4" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 500, color: "#F5F5F5" }}>
          Autistic Music
        </h1>

        {/* Subheading */}
        <p className="text-[clamp(16px,1.5vw,20px)] mb-9" style={{ fontFamily: "'Inter', system-ui, sans-serif", color: "rgba(255,255,255,0.8)", letterSpacing: "0.02em" }}>
          Unmasked. Structured. Precise.
        </p>

        {/* Actions */}
        <div className="flex gap-4 justify-center flex-wrap mt-[60px]">

          {/* Primary Button */}
          <button
            onClick={() => document.querySelector('#music-player')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-7 py-3.5 rounded-full font-medium text-[15px] text-white transition-all duration-200"
            style={{ backgroundColor: "#C23B3B" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#a93232")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#C23B3B")}
          >
            Start Listening
          </button>

          {/* Secondary Button */}
          <button
            onClick={() => document.querySelector('#mission')?.scrollIntoView({ behavior: 'smooth' })}
            className="border px-7 py-3.5 rounded-full font-medium text-[15px] transition-all duration-200"
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.85)"; }}
          >
            Explore
          </button>

        </div>
      </div>
    </section>
  );
}
