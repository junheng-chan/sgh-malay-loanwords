// Replace these sample rows with your real selected examples.
// Put audio files in /audio and spectrogram screenshots in /spectrograms.
// Recommended audio format: .mp3 or .wav. Recommended image format: .png or .jpg.

window.EXAMPLES = [
  {
  id: "HF7_iso_kampung_1",
  word: "kampung",
  source: "Malay kampung",
  correspondence: [
    "Malay /k/ → SgH [k]",
    "Malay /m/ → SgH [m]",
    "Malay /ŋ/ → SgH [ŋ]"
  ],
  category: "direct",
  speaker: "HF7",
  audio: "audio/HF7_iso_kampung_1.wav",
  spectrogram: "spectrograms/HF7_iso_kampung_1.png",
  note: "Direct mapping."
},
  {
    malayLemma: "baru",
    sghForm: "balu",
    gloss: "just; recently",
    target: "Malay /r/",
    realisation: "[l]",
    speaker: "S1",
    context: "carrier sentence",
    status: "variable",
    note: "Lateral-like token; compare with the tap-like example below.",
    audio: "audio/baru_S1_lateral.mp3",
    spectrogram: "spectrograms/baru_S1_lateral.png"
  },
  {
    malayLemma: "baru",
    sghForm: "balu / baru-like",
    gloss: "just; recently",
    target: "Malay /r/",
    realisation: "[ɾ]",
    speaker: "S3",
    context: "isolation",
    status: "variable",
    note: "Brief tap-like realisation; preliminary coding based on burst-like vertical spectrogram evidence.",
    audio: "audio/baru_S3_tap.mp3",
    spectrogram: "spectrograms/baru_S3_tap.png"
  },
  {
    malayLemma: "suka",
    sghForm: "suka-like form",
    gloss: "like",
    target: "initial /s/",
    realisation: "[s]",
    speaker: "S2",
    context: "carrier sentence",
    status: "direct",
    note: "Relatively stable direct correspondence in onset position.",
    audio: "audio/suka_S2.mp3",
    spectrogram: "spectrograms/suka_S2.png"
  },
  {
    malayLemma: "jamban",
    sghForm: "replace with SgH form",
    gloss: "toilet",
    target: "Malay orthographic j /dʒ/",
    realisation: "[dz]-like affricate",
    speaker: "S4",
    context: "isolation",
    status: "adaptive",
    note: "Affricate-like adaptation; replace this with your actual coding.",
    audio: "audio/jamban_S4.mp3",
    spectrogram: "spectrograms/jamban_S4.png"
  }
];
