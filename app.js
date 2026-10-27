/* Mijn Woorden — dependency-free offline vocabulary trainer */
const STORAGE_PROGRESS = 'mijnWoorden.progress.v1';
const STORAGE_CUSTOM = 'mijnWoorden.custom.v1';
const APP_VERSION = '5.2';
const THEME3_PERSIAN_DATA = 'eyJhYW5sZWdnZW4iOiLYp9it2K/Yp9irINqp2LHYr9mGIiwiYWFuc2NoYWZmZW4iOiLYrtix24zYr9in2LHbjCDaqdix2K/ZhiIsImRlIGF1dG9ub21pZSI6Itiu2YjYr9mF2K7Yqtin2LHbjCIsImJlaG91ZGVuIjoi2K3Zgdi4INqp2LHYr9mGIiwiYmVzdHVkZXJlbiI6Itio2LHYsdiz24wg2qnYsdiv2YYiLCJkZSBiZXdlZ2luZyI6Itis2YbYqNi0IiwiZGUgYmlqIjoi2LLZhtio2YjYsSIsImhldCBnaWYiOiLYs9mFIiwiZGUgZ29sZiI6ItmF2YjYrCIsImh1aWRpZyI6Itqp2YbZiNmG24wiLCJkZSBodWlzdmVzdGluZyI6ItmF2LPaqdmGIiwiaGV0IGlkZWFhbCI6Itii2LHZhdin2YYiLCJkZSBpbml0aWF0aWVmbmVtZXIiOiLYoti62KfYstqv2LEiLCJpbnZsb2VkcmlqayI6Itio2KfZhtmB2YjYsCIsImlyb25pc2NoIjoi2LfYudmG2YfigIzYotmF24zYsiIsImlzb2xlcmVuIjoi2LnYp9uM2YIg2qnYsdiv2YYiLCJrYXBpdGFsaXN0aXNjaCI6Itiz2LHZhdin24zZh+KAjNiv2KfYsduMIiwiZGUga2xhc3NlIjoi2LfYqNmC2YciLCJrbGVpbnNjaGFsaWciOiLaqdmI2obaqeKAjNmF2YLbjNin2LMiLCJsb2thYWwiOiLZhdit2YTbjCIsImRlIG1vZXN0dWluIjoi2KjYp9i62obZhyDYs9io2LLbjNis2KfYqiIsImhldCBwbGFudHNvZW4iOiLZgdi22KfbjCDYs9io2LIiLCJkZSBwcm9ibGVtYXRpZWsiOiLZhdi52LbZhNin2KoiLCJoZXQgcHJvdGVzdCI6Itin2LnYqtix2KfYtiIsInVpdHdlcmtlbiI6Itio2YfigIzYqtmB2LXbjNmEINiq2K/ZiNuM2YYg2qnYsdiv2YYiLCJ2ZWdlbiI6Itis2KfYsdmIINqp2LHYr9mGIiwiZGUgdmVyZHV1cnphbWluZyI6Itm+2KfbjNiv2KfYsdiz2KfYstuMIiwiZGUgdmVydGVnZW53b29yZGlnZXIiOiLZhtmF2KfbjNmG2K/ZhyIsImRlIHZlcnZ1aWxpbmciOiLYotmE2YjYr9qv24wiLCJkZSB2b3JzdCI6ItuM2K7YqNmG2K/Yp9mGIiwid2luc3RnZXZlbmQiOiLYs9mI2K/YotmI2LEiLCJ6YWFpZW4iOiLaqdin2LTYqtmGINio2LDYsSIsInp3ZXJmLSAoendlcmZhZnZhbCwgendlcmZ2dWlsLCBldGMuKSI6Itiy2KjYp9mE2Ycg2b7Ysdin2qnZhtiv2YciLCJkZSBhY3RpdmlzdCI6ItmB2LnYp9mEINin2KzYqtmF2KfYuduMIiwiYmV3ZXJlbiI6Itin2K/YudinINqp2LHYr9mGIiwiYmlqZWVuYnJlbmdlbiI6Itqv2LHYryDZh9mFINii2YjYsdiv2YYiLCJkZSBiaW9sb29nIjoi2LLbjNiz2KrigIzYtNmG2KfYsyIsImRlIGJyb24iOiLZhdmG2KjYuSIsImRlIGJ1aXMiOiLZhNmI2YTZhyIsImRlIGNyaXRpY3VzIjoi2YXZhtiq2YLYryIsImRpbmVyZW4iOiLYtNin2YUg2K7ZiNix2K/ZhiIsImRlIGRvbmF0aWUiOiLaqdmF2qkg2YXYp9mE24wiLCJkcmlqdmVuIjoi2LTZhtin2YjYsSDYqNmI2K/ZhiIsImR1aWtlbiI6Iti62YjYp9i124wg2qnYsdiv2YYiLCJlcmtlbm5lbiI6Itm+2LDbjNix2YHYqtmGIiwiZGUgZmFicmlrYW50Ijoi2KrZiNmE24zYr9qp2YbZhtiv2YciLCJnZW5hYW1kIjoi2KjZhyDZhtin2YUiLCJncm9vdHNjaGFsaWciOiLYqNiy2LHar+KAjNmF2YLbjNin2LMiLCJkZSBoYXZlbiI6Itio2YbYr9ixIiwiaGVyZ2VicnVpa2VuIjoi2KfYs9iq2YHYp9iv2Ycg2YXYrNiv2K8g2qnYsdiv2YYiLCJkZSBob2V2ZWVsaGVpZCI6ItmF2YLYr9in2LEiLCJkZSBpbnN0YWxsYXRpZSI6Itiq2KPYs9uM2LPYp9iqIiwiZGUgbWFzc2EiOiLYp9mG2KjZiNmHIiwiaGV0IG1hdGVyaWFhbCI6ItmF2KfYr9mHIiwiaGV0IG5ldCI6Itiq2YjYsSIsIm9tc2NocmlqdmVuIjoi2KrZiNi124zZgSDaqdix2K/ZhiIsImhldCBvbnR3ZXJwIjoi2LfYsditIiwiZGUgb3ByaWNodGVyIjoi2KjZhtuM2KfZhuKAjNqv2LDYp9ixIiwib3B2YW5nZW4iOiLYrNmF2LnigIzYotmI2LHbjCDaqdix2K/ZhiIsInBvdGVudGllZWwiOiLYqNin2YTZgtmI2YciLCJkZSByZWRlbmVyaW5nIjoi2KfYs9iq2K/ZhNin2YQiLCJoZXQgc3Byb29ramUiOiLYp9mB2LPYp9mG2YciLCJ0ZWxldXJzdGVsbGVuZCI6ItmG2KfYp9mF24zYr9qp2YbZhtiv2YciLCJ0b2VqdWljaGVuIjoi2KfYs9iq2YLYqNin2YQg2qnYsdiv2YYiLCJoZXQgdm9vcndlcnAiOiLYtNuM2KEiLCJ3ZWd3ZXJwLSAoYnYuIGRlIHdlZ3dlcnB2ZXJwYWtraW5nKSI6ItuM2qnigIzYqNin2LHZhdi12LHZgSIsImFhbnRhc3RlbiI6Itii2LPbjNioINiy2K/ZhiIsImFhbnZhbGxlbiI6Itit2YXZhNmHINqp2LHYr9mGIiwiYmVoZXJlbiI6ItmF2K/bjNix24zYqiDaqdix2K/ZhiIsImJlc2NoYWRpZ2VuIjoi2K7Ysdin2Kgg2qnYsdiv2YYiLCJiZXppdHRlbiI6ItmF2KfZhNqpINio2YjYr9mGIiwiZG9vcm1pZGRlbiI6Itin2LIg2YjYs9i3IiwiaGV0IGV2ZW53aWNodCI6Itiq2LnYp9iv2YQiLCJoZXQgZ2V3YXMiOiLZhdit2LXZiNmEINiy2LHYp9i524wiLCJoYW5kaGF2ZW4iOiLYp9is2LHYpyDZiCDYrdmB2Lgg2qnYsdiv2YYiLCJkZSBoZWN0YXJlIjoi2Yfaqdiq2KfYsSIsImRlIGhlaWRlIjoi2K7ZhNmG2q/Ystin2LEiLCJpbW1lcnMiOiLYstuM2LHYpyAvINio2KfZhNin2K7YsdmHIiwiZGUgaW5mcmFzdHJ1Y3R1dXIiOiLYstuM2LHYs9in2K7YqiIsImluZ3JpanBlbiI6ItmF2K/Yp9iu2YTZhyDaqdix2K/ZhiIsImphZ2VuIjoi2LTaqdin2LEg2qnYsdiv2YYiLCJkZSBqYWdlciI6Iti02qnYp9ix2obbjCIsImRlIG11aXMiOiLZhdmI2LQiLCJuYWRlbGlnIjoi2LLbjNin2YbigIzYotmI2LEiLCJoZXQgbmVzdCI6ItmE2KfZhtmHIiwib3ZlcmxldmVuIjoi2LLZhtiv2Ycg2YXYp9mG2K/ZhiIsInBhcnRpY3VsaWVyIjoi2K7YtdmI2LXbjCIsImRlIHBvcHVsYXRpZSI6Itis2YXYuduM2Kog2q/ZiNmG2YciLCJoZXQgcnVuZCI6Itqv2KfZiCIsInNjaGlldGVuIjoi2LTZhNuM2qkg2qnYsdiv2YYiLCJkZSBzdGlrc3RvZiI6ItmG24zYqtix2YjamNmGIiwidWl0c3RvdGVuIjoi2YXZhtiq2LTYsSDaqdix2K/ZhiIsImhldCB2YXJrZW4iOiLYrtmI2qkiLCJ2ZXJzdG9yZW4iOiLZhdiu2KrZhCDaqdix2K/ZhiIsImRlIHZsYWt0ZSI6Itiv2LTYqiIsImRlIHZvcyI6Itix2YjYqNin2YciLCJkZSB3b2xmIjoi2q/YsdqvIiwiemljaCB2b29ydHBsYW50ZW4iOiLYqtmI2YTbjNiv2YXYq9mEINqp2LHYr9mGIiwiaGV0IHpvb2dkaWVyIjoi2b7Ys9iq2KfZhtiv2KfYsSIsImhldCB6d2lqbiI6Itqv2LHYp9iyIn0=';

const app = document.querySelector('#app');
const subtitle = document.querySelector('#subtitle');
const backButton = document.querySelector('#backButton');
const installButton = document.querySelector('#installButton');

let route = 'home';
let selectedLevel = 'ALL';
let selectedCollection = null;
let deferredInstallPrompt = null;
let practice = null;

const readJson = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
const progress = readJson(STORAGE_PROGRESS, {});
let customWords = readJson(STORAGE_CUSTOM, []);

const allWords = () => [...STARTER_VOCABULARY, ...customWords];
const saveProgress = () => localStorage.setItem(STORAGE_PROGRESS, JSON.stringify(progress));
const saveCustom = () => localStorage.setItem(STORAGE_CUSTOM, JSON.stringify(customWords));
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

function migrateTheme2PersonalWordsToB2() {
  if (typeof EXTRA_B2 === 'undefined') return;
  const builtIn = new Map(EXTRA_B2.map(word => [word.dutch.toLocaleLowerCase('nl'), word]));
  let changed = false;
  customWords = customWords.filter(word => {
    if (word.collection !== 'Thema 2 - Nieuwe woorden') return true;
    const replacement = builtIn.get(word.dutch.toLocaleLowerCase('nl'));
    if (!replacement) return true;
    const previous = progress[word.id];
    if (previous && (!progress[replacement.id] || (previous.updated || 0) > (progress[replacement.id].updated || 0))) {
      progress[replacement.id] = previous;
    }
    delete progress[word.id];
    changed = true;
    return false;
  });
  if (changed) { saveCustom(); saveProgress(); }
}
migrateTheme2PersonalWordsToB2();

function repairTheme3Persian() {
  let translations;
  try {
    const bytes = Uint8Array.from(atob(THEME3_PERSIAN_DATA), character => character.charCodeAt(0));
    translations = JSON.parse(new TextDecoder().decode(bytes));
  } catch { return; }
  let changed = false;
  customWords = customWords.map(word => {
    if (!String(word.collection || '').startsWith('Thema 3 - Taak ')) return word;
    const persian = translations[word.dutch];
    if (!persian || word.persian === persian) return word;
    changed = true;
    return { ...word, persian };
  });
  if (changed) saveCustom();
}
repairTheme3Persian();

function setRoute(next, options = {}) {
  route = next;
  if (options.level) selectedLevel = options.level;
  if (Object.prototype.hasOwnProperty.call(options, 'collection')) selectedCollection = options.collection;
  document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item.dataset.route === route));
  backButton.classList.toggle('hidden', !['practice','level'].includes(route));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  render();
}

document.querySelectorAll('.nav-item').forEach(item => item.addEventListener('click', () => setRoute(item.dataset.route)));
backButton.addEventListener('click', () => setRoute(route === 'practice' ? 'level' : 'home'));

window.addEventListener('beforeinstallprompt', event => {
  event.preventDefault(); deferredInstallPrompt = event; installButton.classList.remove('hidden');
});
installButton.addEventListener('click', async () => {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt(); await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null; installButton.classList.add('hidden');
});
if ('serviceWorker' in navigator) window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js'));

function levelWords(level = selectedLevel) {
  return allWords().filter(word => level === 'ALL' || word.level === level);
}

function dueWords(words) {
  const now = Date.now();
  const due = words.filter(word => !progress[word.id]?.due || progress[word.id].due <= now);
  return due.length ? due : words;
}

function statFor(level) {
  const words = levelWords(level);
  const studied = words.filter(word => progress[word.id]?.seen).length;
  const mastered = words.filter(word => (progress[word.id]?.streak || 0) >= 3).length;
  return { total: words.length, studied, mastered };
}

function render() {
  const titles = { home:'Nederlands oefenen, stap voor stap', level:`${selectedCollection || selectedLevel}-oefeningen`, practice:'Oefenen', words:'Mijn woordenlijst', progress:'Mijn voortgang', import:'Woorden toevoegen' };
  subtitle.textContent = titles[route] || titles.home;
  ({ home: renderHome, level: renderLevel, practice: renderPractice, words: renderWords, progress: renderProgress, import: renderImport }[route] || renderHome)();
}

function customCollections() {
  const groups = new Map();
  customWords.forEach(word => {
    const name = word.collection || word.category || 'Eigen lijst';
    if (!groups.has(name)) groups.set(name, { name, level: word.level || 'B1', words: [] });
    groups.get(name).words.push(word);
  });
  return [...groups.values()];
}

function renderHome() {
  const b1 = statFor('B1'); const b2 = statFor('B2');
  const collections = customCollections();
  app.innerHTML = `
    <section class="hero">
      <div class="eyebrow">Welkom terug · versie ${APP_VERSION}</div>
      <h1>Welke woorden wil je vandaag oefenen?</h1>
      <p>Kies een niveau. Moeilijke woorden komen automatisch vaker terug.</p>
    </section>
    <div class="level-grid">
      <button class="level-card" data-level="B1"><span class="level-tag">B1</span><strong>Praktische woorden</strong><small>${b1.total} woorden · ${b1.studied} geoefend</small></button>
      <button class="level-card b2" data-level="B2"><span class="level-tag">B2</span><strong>Gevorderde woorden</strong><small>${b2.total} woorden · ${b2.studied} geoefend</small></button>
    </div>
    <section class="section panel">
      <div class="row space-between"><div><div class="eyebrow">Vandaag</div><h2 style="margin:5px 0 2px">Korte gemengde ronde</h2></div><span class="pill">10 kaarten</span></div>
      <p>Een combinatie van B1, B2 en woorden die je moeilijk vond.</p>
      <button id="quickPractice" class="primary">Begin met oefenen</button>
    </section>
    ${collections.length ? `<section class="section"><div class="eyebrow">Eigen lijsten</div><h2>Oefenen per thema</h2><div class="mode-grid">${collections.map(group => `<button class="mode-card" data-collection="${escapeHtml(group.name)}"><strong>${escapeHtml(group.name)}</strong><small>${group.words.length} woorden · ${escapeHtml(group.level)}</small></button>`).join('')}</div></section>` : ''}`;
  app.querySelectorAll('[data-level]').forEach(button => button.addEventListener('click', () => setRoute('level', { level: button.dataset.level, collection: null })));
  app.querySelector('#quickPractice').addEventListener('click', () => startPractice('mixed', 'ALL'));
  app.querySelectorAll('[data-collection]').forEach(button => button.addEventListener('click', () => setRoute('level', { level: 'ALL', collection: button.dataset.collection })));
}

function renderLevel() {
  const count = levelWords().filter(word => !selectedCollection || (word.collection || word.category) === selectedCollection).length;
  app.innerHTML = `
    <section class="hero"><div class="eyebrow">${selectedCollection ? 'Eigen lijst' : `Niveau ${selectedLevel}`}</div><h1>${escapeHtml(selectedCollection || 'Kies een oefening')}</h1><p>${count} woorden beschikbaar in deze verzameling.</p></section>
    <div class="mode-grid">
      <button class="mode-card" data-mode="cards"><span class="mode-icon">◫</span><strong>Flashcards</strong><small>Bekijk betekenis en voorbeeld</small></button>
      <button class="mode-card" data-mode="verbs"><span class="mode-icon">↻</span><strong>Werkwoorden</strong><small>Verleden tijd en participium</small></button>
      <button class="mode-card" data-mode="difficult"><span class="mode-icon">★</span><strong>Moeilijk</strong><small>Herhaal zwakke woorden</small></button>
      <button class="mode-card" data-mode="mixed"><span class="mode-icon">⤨</span><strong>Gemengd</strong><small>Alles door elkaar</small></button>
    </div>`;
  app.querySelectorAll('[data-mode]').forEach(button => button.addEventListener('click', () => startPractice(button.dataset.mode, selectedLevel, selectedCollection)));
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [result[i], result[j]] = [result[j], result[i]]; }
  return result;
}

function startPractice(mode, level, collection = null) {
  selectedLevel = level;
  selectedCollection = collection;
  let pool = levelWords(level);
  if (collection) pool = pool.filter(word => (word.collection || word.category) === collection);
  // A selected theme is a complete review session: include every word in it,
  // even when some words are not yet due in spaced repetition.
  if (!collection) pool = dueWords(pool);
  if (mode === 'verbs') pool = pool.filter(word => word.type === 'verb');
  if (mode === 'difficult') {
    const difficult = pool.filter(word => (progress[word.id]?.lastRating || 0) <= 1 && progress[word.id]?.seen);
    pool = difficult.length ? difficult : pool;
  }
  const max = collection ? pool.length : (mode === 'mixed' ? 10 : 15);
  practice = { mode, collection, index: 0, words: shuffle(pool).slice(0, max), revealed: false, sessionRatings: [] };
  setRoute('practice');
}

function verbPrompt(word) {
  const choices = [
    { label:'Wat is de verleden tijd?', answer:`${word.pastSingular} / ${word.pastPlural}` },
    { label:'Wat is het voltooid deelwoord?', answer:`${word.auxiliary} ${word.participle}` },
    { label:'Wat is de tegenwoordige tijd?', answer:`ik ${word.presentIk} · hij/zij ${word.presentHij}` }
  ];
  return choices[Math.abs(hashCode(word.id)) % choices.length];
}
const hashCode = text => [...text].reduce((hash, char) => ((hash << 5) - hash) + char.charCodeAt(0), 0);

function renderPractice() {
  if (!practice?.words.length) {
    app.innerHTML = `<div class="empty"><h2>Geen passende woorden gevonden</h2><p>Oefen eerst enkele flashcards of voeg woorden toe.</p><button class="primary" id="emptyBack">Terug</button></div>`;
    app.querySelector('#emptyBack').addEventListener('click', () => setRoute('level'));
    return;
  }
  if (practice.index >= practice.words.length) return renderSessionComplete();
  const word = practice.words[practice.index];
  const isVerbMode = practice.mode === 'verbs' && word.type === 'verb';
  const prompt = isVerbMode ? verbPrompt(word) : null;
  const mainAnswer = isVerbMode ? prompt.answer : word.english;
  const percentage = Math.round((practice.index / practice.words.length) * 100);
  app.innerHTML = `
    <div class="practice-wrap">
      <div class="practice-meta"><span>${practice.index + 1} van ${practice.words.length}</span><span>${word.level} · ${escapeHtml(word.category)}</span></div>
      <div class="progress-track"><div class="progress-fill" style="width:${percentage}%"></div></div>
      <article class="flashcard">
        <div class="prompt">${escapeHtml(isVerbMode ? prompt.label : 'Lees de zin. Wat betekent het woord?')}</div>
        <div class="word">${escapeHtml(word.dutch)}</div>
        ${(word.pronunciation || word.stress) ? `<div class="pronunciation">${word.pronunciation ? `<span><strong>IPA:</strong> ${escapeHtml(word.pronunciation)}</span>` : ''}${word.stress ? `<span><strong>Klemtoon:</strong> ${escapeHtml(word.stress)}</span>` : ''}</div>` : ''}
        ${word.example ? `<div class="example example-front">${escapeHtml(word.example)}</div>` : ''}
        ${!practice.revealed ? `<div class="hint">Denk eerst na en toon daarna het antwoord.</div><button id="reveal" class="reveal-button">Toon het antwoord</button>` : `
          <div class="answer">
            <div class="translation">${escapeHtml(mainAnswer)}</div>
            ${!isVerbMode ? `<div class="translation persian" lang="fa">${escapeHtml(word.persian)}</div>` : ''}
            ${word.type === 'noun' ? `<div class="forms"><strong>Meervoud:</strong> ${escapeHtml(word.plural)}</div>` : ''}
            ${word.type === 'verb' ? verbForms(word) : ''}
          </div>`}
      </article>
      ${practice.revealed ? `<div class="rating-row"><button class="rating again" data-rating="0">Opnieuw</button><button class="rating hard" data-rating="1">Moeilijk</button><button class="rating good" data-rating="2">Goed</button></div>` : ''}
    </div>`;
  app.querySelector('#reveal')?.addEventListener('click', () => { practice.revealed = true; renderPractice(); });
  app.querySelectorAll('[data-rating]').forEach(button => button.addEventListener('click', () => rateWord(word, Number(button.dataset.rating))));
}

function verbForms(word) {
  return `<div class="forms">
    <div><strong>Tegenwoordig:</strong> ik ${escapeHtml(word.presentIk)} · hij/zij ${escapeHtml(word.presentHij)}</div>
    <div><strong>Verleden:</strong> ${escapeHtml(word.pastSingular)} / ${escapeHtml(word.pastPlural)}</div>
    <div><strong>Voltooid:</strong> ${escapeHtml(word.auxiliary)} ${escapeHtml(word.participle)}</div>
  </div>`;
}

function rateWord(word, rating) {
  const current = progress[word.id] || { seen: 0, streak: 0 };
  const waits = [2 * 60 * 1000, 24 * 60 * 60 * 1000, Math.max(2, (current.streak || 0) + 1) * 3 * 24 * 60 * 60 * 1000];
  progress[word.id] = { seen: current.seen + 1, streak: rating === 2 ? (current.streak || 0) + 1 : 0, lastRating: rating, due: Date.now() + waits[rating], updated: Date.now() };
  saveProgress(); practice.sessionRatings.push(rating); practice.index += 1; practice.revealed = false; renderPractice();
}

function renderSessionComplete() {
  const good = practice.sessionRatings.filter(r => r === 2).length;
  const hard = practice.sessionRatings.filter(r => r === 1).length;
  const again = practice.sessionRatings.filter(r => r === 0).length;
  app.innerHTML = `<section class="panel" style="text-align:center;margin-top:35px"><div style="font-size:3rem">✓</div><h1>Ronde klaar!</h1><p>Goed gedaan. Je antwoorden bepalen wanneer elk woord terugkomt.</p><div class="stats-grid"><div class="stat-card"><div class="stat-number">${good}</div><div class="stat-label">Goed</div></div><div class="stat-card"><div class="stat-number">${hard}</div><div class="stat-label">Moeilijk</div></div><div class="stat-card"><div class="stat-number">${again}</div><div class="stat-label">Opnieuw</div></div></div><button id="done" class="primary" style="margin-top:20px">Naar start</button></section>`;
  app.querySelector('#done').addEventListener('click', () => setRoute('home'));
}

function renderWords() {
  app.innerHTML = `
    <section class="hero"><div class="eyebrow">Verzameling</div><h1>Alle woorden</h1><p>Zoek op Nederlands, Engels of Perzisch.</p></section>
    <div class="toolbar"><input id="search" class="field" placeholder="Zoeken…"><select id="levelFilter"><option value="ALL">B1 + B2</option><option>B1</option><option>B2</option></select><select id="typeFilter"><option value="ALL">Alles</option><option value="verb">Werkwoorden</option><option value="noun">Zelfst. naamw.</option><option value="other">Andere</option></select></div>
    <div id="wordList" class="word-list"></div>`;
  const update = () => {
    const query = app.querySelector('#search').value.trim().toLocaleLowerCase('nl');
    const level = app.querySelector('#levelFilter').value;
    const type = app.querySelector('#typeFilter').value;
    const filtered = allWords().filter(word => (level === 'ALL' || word.level === level) && (type === 'ALL' || (type === 'other' ? !['verb','noun'].includes(word.type) : word.type === type)) && [word.dutch,word.english,word.persian,word.pronunciation,word.stress].join(' ').toLocaleLowerCase('nl').includes(query));
    app.querySelector('#wordList').innerHTML = filtered.length ? filtered.map(word => `<div class="word-row"><div><strong>${escapeHtml(word.dutch)}</strong>${(word.pronunciation || word.stress) ? `<small class="word-pronunciation">${escapeHtml(word.pronunciation || word.stress)}</small>` : ''}<small>${escapeHtml(word.english)} · <span class="fa" lang="fa">${escapeHtml(word.persian)}</span></small></div><div><span class="pill ${word.level.toLowerCase()}">${word.level}</span>${word.type === 'verb' ? ' <span class="pill verb">ww</span>' : ''}</div></div>`).join('') : `<div class="empty">Geen woorden gevonden.</div>`;
  };
  ['search','levelFilter','typeFilter'].forEach(id => app.querySelector(`#${id}`).addEventListener('input', update)); update();
}

function renderProgress() {
  const b1 = statFor('B1'); const b2 = statFor('B2'); const totalSeen = b1.studied + b2.studied;
  app.innerHTML = `
    <section class="hero"><div class="eyebrow">Overzicht</div><h1>Mijn voortgang</h1><p>Een woord geldt als beheerst na drie opeenvolgende goede antwoorden.</p></section>
    <div class="stats-grid"><div class="stat-card"><div class="stat-number">${allWords().length}</div><div class="stat-label">Totaal</div></div><div class="stat-card"><div class="stat-number">${totalSeen}</div><div class="stat-label">Geoefend</div></div><div class="stat-card"><div class="stat-number">${b1.mastered + b2.mastered}</div><div class="stat-label">Beheerst</div></div><div class="stat-card"><div class="stat-number">${Object.values(progress).reduce((sum,p)=>sum+(p.seen||0),0)}</div><div class="stat-label">Antwoorden</div></div></div>
    <section class="section panel"><h2>Per niveau</h2>${levelMeter('B1',b1)}${levelMeter('B2',b2)}</section>
    <section class="section panel"><h2>Opnieuw beginnen</h2><p>Dit verwijdert alleen je oefenvoortgang. De woorden blijven bewaard.</p><button id="reset" class="danger">Wis mijn voortgang</button></section>`;
  app.querySelector('#reset').addEventListener('click', () => { if (confirm('Weet je zeker dat je alle oefenvoortgang wilt wissen?')) { Object.keys(progress).forEach(key => delete progress[key]); saveProgress(); renderProgress(); } });
}
function levelMeter(level, stat) {
  const studied = stat.total ? Math.round(stat.studied/stat.total*100) : 0;
  return `<div class="meter-row"><div class="meter-label"><strong>${level}</strong><span>${stat.studied} van ${stat.total} geoefend</span></div><div class="meter"><div style="width:${studied}%"></div></div></div>`;
}

function renderImport() {
  app.innerHTML = `
    <section class="hero"><div class="eyebrow">Eigen lijsten</div><h1>Woorden toevoegen</h1><p>Importeer een volledige CSV-lijst, of plak eenvoudige regels.</p></section>
    <section class="panel form-grid">
      <label>CSV-bestand<input id="importFile" class="field" type="file" accept=".csv,text/csv"></label>
      <button id="importCsv" class="primary">Importeer CSV-bestand</button>
      <div class="notice"><strong>Volledige CSV</strong><br>Bewaar thema, uitspraak, woordsoort, voorbeeld, meervoud en alle werkwoordsvormen.</div>
      <div class="notice"><strong>Voorbeeld</strong><br>de afspraak; appointment; قرار ملاقات<br>overtuigen; to convince; متقاعد کردن</div>
      <label>Niveau<select id="importLevel"><option>B1</option><option>B2</option></select></label>
      <label>Categorie<input id="importCategory" class="field" value="Eigen lijst"></label>
      <label>Woordenlijst<textarea id="importText" placeholder="Nederlands; English; فارسی"></textarea></label>
      <button id="importWords" class="primary">Importeer woorden</button>
      <div id="importMessage"></div>
    </section>`;
  app.querySelector('#importWords').addEventListener('click', importWords);
  app.querySelector('#importCsv').addEventListener('click', importCsvFile);
}

function parseDelimitedLine(line, delimiter = ';') {
  const result = []; let value = ''; let quoted = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"' && line[i + 1] === '"' && quoted) { value += '"'; i += 1; }
    else if (char === '"') quoted = !quoted;
    else if (char === delimiter && !quoted) { result.push(value.trim()); value = ''; }
    else value += char;
  }
  result.push(value.trim()); return result;
}

async function importCsvFile() {
  const file = app.querySelector('#importFile').files[0];
  if (!file) { app.querySelector('#importMessage').innerHTML = '<div class="notice">Kies eerst een CSV-bestand.</div>'; return; }
  const text = (await file.text()).replace(/^\uFEFF/, '');
  const lines = text.split(/\r?\n/).filter(line => line.trim());
  if (lines.length < 2) { app.querySelector('#importMessage').innerHTML = '<div class="notice">Het bestand bevat geen woorden.</div>'; return; }
  const delimiter = lines[0].includes(';') ? ';' : ',';
  const headers = parseDelimitedLine(lines[0], delimiter).map(header => header.trim());
  const records = lines.slice(1).map(line => Object.fromEntries(headers.map((header, index) => [header, parseDelimitedLine(line, delimiter)[index] || ''])));
  const stamp = Date.now();
  const parsed = records.filter(row => row.dutch).map((row, index) => ({
    id: `custom-${stamp}-${index}`, collection: row.collection || row.category || 'Eigen lijst',
    level: row.level || 'B1', category: row.category || row.collection || 'Eigen lijst', type: row.type || 'other',
    dutch: row.dutch, english: row.english || '', persian: row.persian || '', example: row.example || '', plural: row.plural || '',
    pronunciation: row.pronunciation || '', stress: row.stress || '',
    presentIk: row.presentIk || '', presentHij: row.presentHij || '', pastSingular: row.pastSingular || '', pastPlural: row.pastPlural || '',
    participle: row.participle || '', auxiliary: row.auxiliary || ''
  }));
  const existing = new Map(customWords.map((word, index) => [`${word.collection || word.category}|${word.dutch}`.toLocaleLowerCase('nl'), index]));
  let added = 0; let updated = 0;
  parsed.forEach(word => {
    const key = `${word.collection}|${word.dutch}`.toLocaleLowerCase('nl');
    const existingIndex = existing.get(key);
    if (existingIndex === undefined) {
      customWords.push(word); existing.set(key, customWords.length - 1); added += 1;
    } else {
      const current = customWords[existingIndex];
      customWords[existingIndex] = { ...word, id: current.id };
      updated += 1;
    }
  });
  saveCustom();
  app.querySelector('#importMessage').innerHTML = `<div class="notice">${added} woorden toegevoegd · ${updated} bestaande woorden bijgewerkt.</div>`;
  if (parsed.length) app.querySelector('#importFile').value = '';
}

function importWords() {
  const level = app.querySelector('#importLevel').value;
  const category = app.querySelector('#importCategory').value.trim() || 'Eigen lijst';
  const lines = app.querySelector('#importText').value.split(/\r?\n/).map(line => line.trim()).filter(Boolean);
  const parsed = lines.map((line,index) => {
    const [dutch, english = '', persian = ''] = line.split(/[;\t]/).map(item => item.trim());
    return dutch ? { id:`custom-${Date.now()}-${index}`, collection:category, level, category, dutch, english, persian, type:'other', example:'' } : null;
  }).filter(Boolean);
  customWords.push(...parsed); saveCustom();
  app.querySelector('#importMessage').innerHTML = parsed.length ? `<div class="notice">${parsed.length} woorden zijn toegevoegd.</div>` : `<div class="notice">Geen geldige regels gevonden.</div>`;
  if (parsed.length) app.querySelector('#importText').value = '';
}

render();
