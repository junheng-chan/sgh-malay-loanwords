// Replace these sample rows with your real selected examples.
// Put audio files in /audio and spectrogram screenshots in /spectrograms.
// Recommended audio format: .mp3 or .wav. Recommended image format: .png or .jpg.

window.EXAMPLES = [
  {
  id: "HF7_iso_kampung_1",
  word: "SgH [kampɔŋ]",
  source: "Malay kampung /kampoŋ/",
  correspondence: [
    "Malay /k/ → SgH [k]",
    "Malay /m/ → SgH [m]",
    "Malay /ŋ/ → SgH [ŋ]"
  ],
  category: "direct",
  speaker: "HF7",
  context: "isolated",
  malayAudio: "audio/MF1_iso_kampung_3.wav",
  audio: "audio/HF7_iso_kampung_1.wav",
  spectrogram: "spectrograms/HF7_iso_kampung_1.png",
  note: "Direct mapping."
},
  {
  id: "HF7_nat_baru_c_1",
  word: "SgH [baɾu]",
  source: "Malay baru /baɾu/",
  correspondence: [
    "Malay /b/ → SgH [b]",
    "Malay /ɾ/ → SgH [l] ~ [ɾ]",
  ],
  category: "variable",
  speaker: "HF7",
  context: "natural utterance",
  malayAudio: "audio/MF1_iso_baru_3.wav",
  audio: "audio/HF7_nat_baru_c_1.wav",
  spectrogram: "spectrograms/HF7_nat_baru_c_1.png",
  note: "Tap-like /ɾ/ variant of the lateral /l/ realisation, coded from burst-like spectrogram evidence."
},
  {
  id: "HF9_iso_manggis_1",
  word: "[maŋɛʔ]",
  source: "Malay manggis /maŋges/",
  correspondence: [
    "Malay /m/ → SgH [m]",
    "Malay /ŋg/ → SgH [ŋ]",
    "Malay final /s/ → SgH [t] ~ [ʔ]"
  ],
  category: "adaptive",
  speaker: "HF9",
  context: "isolated",
  malayAudio: "audio/MF1_iso_manggis_3.wav",
  audio: "audio/HF9_iso_manggis_1.wav",
  spectrogram: "spectrograms/HF9_iso_manggis_1.png",
  note: "Stop /g/ assimilated in nasal cluster; final /s/ adapted as glottal coda, visible via creaky vowel."
},
];
