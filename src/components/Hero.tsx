import { Zap, ChevronDown } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
}

export default function Hero({ onExplore }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500 rounded-full blur-[128px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 border border-yellow-500/50 bg-yellow-500/10 px-4 py-2 mb-8">
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-yellow-400 text-xs font-bold uppercase tracking-[0.3em]">Neurodivergent & Unapologetic</span>
        </div>

        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black leading-[0.85] mb-8 tracking-tighter">
          <span className="block text-white">MILITANT</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-blue-400">
            AUTISTIC
          </span>
          <span className="block text-white">PRIDE</span>
        </h1>

        <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto mb-12 leading-relaxed">
          Music that refuses to be quiet. Sounds that reject the cure. A movement that
          celebrates the full, fierce, unmasked reality of autistic existence.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onExplore}
            className="group bg-yellow-500 hover:bg-yellow-400 text-black font-black text-sm uppercase tracking-wider px-10 py-5 transition-all hover:scale-105 flex items-center gap-3"
          >
            <Zap className="w-5 h-5 group-hover:animate-pulse" />
            Explore the Sound
          </button>
          <button className="text-gray-500 hover:text-white font-bold text-sm uppercase tracking-wider px-10 py-5 transition-colors flex items-center gap-2">
            Read the Manifesto
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
