function escapeHTML(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statusClass(status) {
  const s = String(status || "uncertain").toLowerCase();
  if (["direct", "adaptive", "variable", "uncertain"].includes(s)) return s;
  return "uncertain";
}

function imageBlock(row) {
  if (!row.spectrogram) {
    return `<div class="missing-image">Add spectrogram filename in <code>data/examples.js</code></div>`;
  }
  return `<img src="${escapeHTML(row.spectrogram)}" alt="Spectrogram for ${escapeHTML(row.malayLemma)}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className: 'missing-image', innerHTML: 'Spectrogram file not found<br><code>${escapeHTML(row.spectrogram)}</code>'}))" />`;
}

function renderExamples() {
  const grid = document.querySelector("#examplesGrid");
  const examples = [
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
    }
  ];
  const q = document.querySelector("#searchBox")?.value.trim().toLowerCase() || "";
  const status = document.querySelector("#statusFilter")?.value || "";

  const filtered = examples.filter(row => {
    const matchesSearch = JSON.stringify(row).toLowerCase().includes(q);
    const matchesStatus = !status || String(row.status).toLowerCase() === status;
    return matchesSearch && matchesStatus;
  });

  if (!filtered.length) {
    grid.innerHTML = `<article class="card empty-state">No examples match the current filter.</article>`;
    return;
  }

  grid.innerHTML = filtered.map(row => `
    <article class="example-card">
      <div class="example-media">${imageBlock(row)}</div>
      <div class="example-body">
        <div class="card-top">
          <div>
            <h3 class="word-title"><em>${escapeHTML(row.malayLemma)}</em> → ${escapeHTML(row.sghForm || row.realisation || "")}</h3>
            <p class="gloss">${escapeHTML(row.gloss)}</p>
          </div>
          <span class="pill ${statusClass(row.status)}">${escapeHTML(row.status)}</span>
        </div>

        <div class="annotation-grid">
          <div class="annotation-box"><span class="label">Target</span><span class="value">${escapeHTML(row.target)}</span></div>
          <div class="annotation-box"><span class="label">Realisation</span><span class="value">${escapeHTML(row.realisation)}</span></div>
          <div class="annotation-box"><span class="label">Speaker</span><span class="value">${escapeHTML(row.speaker)}</span></div>
          <div class="annotation-box"><span class="label">Context</span><span class="value">${escapeHTML(row.context || "isolation/carrier")}</span></div>
        </div>

        <p class="note">${escapeHTML(row.note)}</p>
        <audio controls preload="none" src="${escapeHTML(row.audio)}">Audio unavailable</audio>
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderExamples();
  document.querySelector("#searchBox")?.addEventListener("input", renderExamples);
  document.querySelector("#statusFilter")?.addEventListener("change", renderExamples);
});
