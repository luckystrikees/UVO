import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="font-black text-sm uppercase tracking-tighter">
                <span className="text-yellow-400">Militant</span>
                <span className="text-white"> </span>
                <span className="text-red-500">Autistic</span>
                <span className="text-white"> </span>
                <span className="text-blue-400">Pride</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A showcase of music by and for the autistic community. 
              Loud, proud, and unapologetically neurodivergent.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              {['Autistic Self Advocacy Network', 'NeuroClastic', 'Autism Women\'s Network', 'ASAN'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-500 hover:text-yellow-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Pride colors */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-widest text-white mb-4">The Spectrum</h4>
            <div className="flex gap-1 mb-4">
              {['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 'bg-blue-500', 'bg-purple-500'].map((color, i) => (
                <div key={i} className={`h-2 flex-1 rounded-sm ${color}`} />
              ))}
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The rainbow infinity symbol represents the diversity of the autism spectrum. 
              It was chosen by the autistic community as a symbol of pride and neurodiversity.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs font-bold uppercase tracking-widest">
            © 2024 Militant Autistic Pride. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs font-bold uppercase tracking-widest">
            Nothing About Us Without Us ✊
          </p>
        </div>
      </div>
    </footer>
  );
}
