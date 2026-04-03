import ArtistCard from './ArtistCard';

const artists = [
  {
    id: 1,
    name: "Autismdecon",
    tagline: "La Logique au Pouvoir",
    description: "Powerful music that challenges neurotypical norms through logic and authentic expression. Autismdecon brings a unique voice to the autistic music scene.",
    image: "/audio/la-logique-au-pouvoir.png",
    genre: "Autistic Music"
  },
  {
    id: 2,
    name: "Echo Chamber",
    tagline: "Electronic Sounds of Stimming",
    description: "Bass-heavy electronic beats that celebrate repetitive movements. Stimming isn't a symptom—it's resistance.",
    image: "🎧",
    genre: "Electronic"
  },
  {
    id: 3,
    name: "Raw & Unfiltered",
    tagline: "Indie Folk Authenticity",
    description: "Acoustic storytelling about masking, burnout, and the journey to embracing our authentic autistic selves.",
    image: "🎸",
    genre: "Indie Folk"
  },
  {
    id: 4,
    name: "The Monotropes",
    tagline: "Progressive Rock Deep Dives",
    description: "Complex compositions inspired by special interests. Our music goes deep, just like we do.",
    image: "🎹",
    genre: "Progressive Rock"
  },
  {
    id: 5,
    name: "Chaos Theory",
    tagline: "Experimental Sensory Soundscapes",
    description: "Pushing boundaries with sounds that mirror sensory experiences. Loud, intense, and gloriously overwhelming.",
    image: "🔊",
    genre: "Experimental"
  },
  {
    id: 6,
    name: "Neuroqueer Collective",
    tagline: "Hip-Hop with Attitude",
    description: "Hard-hitting beats and lyrics that challenge neurotypical norms. We're autistic, we're queer, we're unstoppable.",
    image: "🎤",
    genre: "Hip-Hop"
  }
];

export default function ArtistShowcase() {
  return (
    <section id="artists" className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
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
