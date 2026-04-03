# Audio Files Directory

Place your audio files (MP3, WAV, OGG) in this folder.

## Supported formats
- `.mp3` - Most common, recommended
- `.wav` - Uncompressed, larger files
- `.ogg` - Open format

## Naming convention
Use kebab-case for filenames:
```
artist-name-song-title.mp3
```

Example:
```
the-spectrum-rebels-neurodivergent-anthem.mp3
echo-chamber-stimming-is-resistance.mp3
```

## How to add songs
1. Add your audio file to this folder
2. Update the `tracks` array in `src/components/MusicPlayer.tsx`
3. Add the `audioSrc` field pointing to `/audio/your-file.mp3`
