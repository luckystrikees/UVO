export default function MissionStatement() {
  return (
    <section id="mission" className="py-20 px-4 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        {/* Quote icon */}
        <div className="mb-8">
          <svg className="w-16 h-16 text-amber-500 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>
        
        {/* Main mission text */}
        <blockquote className="text-2xl md:text-4xl font-bold text-white mb-8 leading-relaxed">
          "We're not here to be cured. We're here to be <span className='text-amber-400'>heard</span>."
        </blockquote>
        
        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-500" />
          <div className="w-2 h-2 bg-amber-500 rounded-full" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-500" />
        </div>
        
        {/* Mission paragraphs */}
        <div className="space-y-6 text-slate-300 text-lg">
          <p>
            This platform exists to amplify autistic voices through music that's raw, real, and revolutionary. 
            We reject the narrative that autism needs fixing. Instead, we celebrate neurodivergence as a vital 
            part of human diversity.
          </p>
          
          <p>
            Our artists create music from lived autistic experiences—songs about sensory overload, special
            interests, the exhaustion of masking, and the liberation of being truly seen. This isn't
            inspiration porn. This is <span className="text-red-400 font-semibold">resistance</span>.
          </p>
          
          <p>
            Whether you're autistic yourself or an ally, we invite you to listen, learn, and join the movement 
            for a world that embraces neurodiversity instead of trying to erase it.
          </p>
        </div>
        
        {/* Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-amber-900/20 border border-amber-500/30">
            <div className="text-4xl mb-4">✊</div>
            <h3 className="text-xl font-bold text-white mb-2">Militant Pride</h3>
            <p className="text-slate-400 text-sm">We don't ask for acceptance. We demand it.</p>
          </div>

          <div className="p-6 rounded-2xl bg-red-900/20 border border-red-500/30">
            <div className="text-4xl mb-4">🎭</div>
            <h3 className="text-xl font-bold text-white mb-2">Unmasking</h3>
            <p className="text-slate-400 text-sm">Authenticity over assimilation. Always.</p>
          </div>

          <div className="p-6 rounded-2xl bg-purple-900/20 border border-purple-500/30">
            <div className="text-4xl mb-4">🌈</div>
            <h3 className="text-xl font-bold text-white mb-2">Neurodiversity</h3>
            <p className="text-slate-400 text-sm">Different, not deficient. Proud, not sorry.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
