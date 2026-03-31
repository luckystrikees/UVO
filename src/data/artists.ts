export interface Artist {
  name: string;
  bio: string;
  genre: string;
  tracks: number;
  image: string;
}

export const artists: Artist[] = [
  {
    name: "The Neurodivergents",
    bio: "Raw punk energy meets unapologetic autistic identity. Formed in 2021, they've become the voice of a generation that refuses to be cured.",
    genre: "Punk Rock",
    tracks: 24,
    image: "🎸",
  },
  {
    name: "Sensory Overload",
    bio: "Industrial soundscapes that mirror the intensity of autistic experience. Their music is a confrontation with a world built for neurotypical brains.",
    genre: "Industrial",
    tracks: 18,
    image: "⚡",
  },
  {
    name: "Autistic & Loud",
    bio: "Hardcore punk with a message: we will not be silenced, we will not mask, and we will not apologize for who we are.",
    genre: "Hardcore Punk",
    tracks: 31,
    image: "📢",
  },
  {
    name: "The Meltdowns",
    bio: "Post-punk band named with defiant pride. Their music channels the raw emotion of autistic meltdowns into powerful art.",
    genre: "Post-Punk",
    tracks: 15,
    image: "🌊",
  },
  {
    name: "Rainbow Static",
    bio: "Noise rock that celebrates the beautiful chaos of neurodivergent perception. Their albums are sonic representations of the infinite spectrum.",
    genre: "Noise Rock",
    tracks: 22,
    image: "🌈",
  },
  {
    name: "Defiant Neurons",
    bio: "Thrash metal meets disability justice. Every riff is a rejection of the medical model and every scream is a demand for autonomy.",
    genre: "Thrash Metal",
    tracks: 19,
    image: "🧠",
  },
  {
    name: "Hyperfixation",
    bio: "Synth punk powered by special interests. Their obsessive creative energy produces music that is as deep and intense as their passions.",
    genre: "Synth Punk",
    tracks: 27,
    image: "🔥",
  },
  {
    name: "Self-Advocates",
    bio: "Anarcho-punk collective of autistic musicians. Their music is inseparable from their activism — every song is a call to action.",
    genre: "Anarcho-Punk",
    tracks: 33,
    image: "✊",
  },
];
