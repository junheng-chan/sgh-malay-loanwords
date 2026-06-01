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

function getCategory(row) {
  return row.category || row.status || "uncertain";
}

function getTitle(row) {
  const word = row.word || row.sghForm || row.realisation || "Example";
  const source = row.source || row.malayLemma || "";
  return source ? `${source} → ${word}` : word;
}

function getCorrespondence(row) {
  const corr = row.correspondence || row.target || row.realisation || "";
  if (Array.isArray(corr)) {
    return corr.map(item => `<li>${escapeHTML(item)}</li>`).join("");
  }
  return `<li>${escapeHTML(corr)}</li>`;
}

function imageBlock(row) {
  if (!row.spectrogram) {
    return `<div class="missing-image">No spectrogram</div>`;
  }
  return `<img src="${escapeHTML(row.spectrogram)}" alt="Spectrogram for ${escapeHTML(row.word || row.malayLemma || "token")}" onerror="this.replaceWith(Object.assign(document.createElement('div'), {className: 'missing-image', innerHTML: 'Spectrogram not found<br><code>${escapeHTML(row.spectrogram)}</code>'}))" />`;
}

function audioBlock(row) {
  const malayAudio = row.malayAudio || row.sourceAudio || "";
  const sghAudio = row.audio || row.sghAudio || "";

  if (!malayAudio && !sghAudio) {
    return `<p class="no-audio">No audio clip</p>`;
  }

  return `
    <div class="audio-pair">
      ${malayAudio ? `
        <div class="audio-item">
          <span class="audio-label">Malay source</span>
          <audio controls preload="none" src="${escapeHTML(malayAudio)}">Audio unavailable</audio>
        </div>
      ` : ""}
      ${sghAudio ? `
        <div class="audio-item">
          <span class="audio-label">SgH realisation</span>
          <audio controls preload="none" src="${escapeHTML(sghAudio)}">Audio unavailable</audio>
        </div>
      ` : ""}
    </div>
  `;
}

function renderExamples() {
  const grid = document.querySelector("#examplesGrid");
  const examples = window.EXAMPLES || [];
  const q = document.querySelector("#searchBox")?.value.trim().toLowerCase() || "";
  const category = document.querySelector("#statusFilter")?.value || "";

  const filtered = examples.filter(row => {
    const matchesSearch = JSON.stringify(row).toLowerCase().includes(q);
    const matchesCategory = !category || String(getCategory(row)).toLowerCase() === category;
    return matchesSearch && matchesCategory;
  });

  if (!filtered.length) {
    grid.innerHTML = `<article class="empty-state">No examples match the current filter.</article>`;
    return;
  }

  grid.innerHTML = filtered.map(row => `
    <article class="example-card">
      <div class="example-media">${imageBlock(row)}</div>
      <div class="example-body">
        <div class="card-top">
          <div>
            <h3>${escapeHTML(getTitle(row))}</h3>
            <p class="subline">${escapeHTML(row.speaker || "")}${row.context ? " · " + escapeHTML(row.context) : ""}</p>
          </div>
          <span class="pill ${statusClass(getCategory(row))}">${escapeHTML(getCategory(row))}</span>
        </div>

        <ul class="corr-list">${getCorrespondence(row)}</ul>
        ${row.note ? `<p class="note">${escapeHTML(row.note)}</p>` : ""}
        ${audioBlock(row)}
      </div>
    </article>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderExamples();
  document.querySelector("#searchBox")?.addEventListener("input", renderExamples);
  document.querySelector("#statusFilter")?.addEventListener("change", renderExamples);
});
