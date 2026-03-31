import { Manifesto } from '../data/manifestos';

interface ManifestoSectionProps {
  items: Manifesto[];
}

export default function ManifestoSection({ items }: ManifestoSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="group relative bg-white/[0.02] border border-white/10 hover:border-blue-400/40 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:bg-white/[0.04]"
        >
          {/* Number */}
          <div className="text-5xl sm:text-6xl font-black text-white/5 group-hover:text-blue-400/10 transition-colors absolute top-4 right-6">
            {String(index + 1).padStart(2, '0')}
          </div>

          {/* Title */}
          <h4 className="text-lg sm:text-xl font-black text-white group-hover:text-blue-400 transition-colors mb-4 uppercase tracking-tight relative">
            {item.title}
          </h4>

          {/* Content */}
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed relative">
            {item.content}
          </p>

          {/* Hover glow */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      ))}
    </div>
  );
}
