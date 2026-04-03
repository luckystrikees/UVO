import ArtistCard from './ArtistCard';

const artists = [
  {
    id: 1,
    name: "Autismdecon",
    tagline: "La Logique au Pouvoir",
    description: "Powerful music that challenges neurotypical norms through logic and authentic expression. Autismdecon brings a unique voice to the autistic music scene.",
    image: "/audio/autismdecon.png",
    genre: "Autistic Music"
  }
];

export default function ArtistShowcase() {
  return (
    <section id="artists" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400 bg-clip-text text-transparent">
              Featured Artists
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Amplifying autistic voices through music. These artists are unapologetically proud and here to make some noise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}
