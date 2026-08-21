// Japanese N2 Grammar SRS — self-graded, fully client-side (localStorage).

const STORAGE_KEY = "jpSrsState_v1";
const SETTINGS_KEY = "jpSrsSettings_v1";

// Interval ladder in days. Index 0 = brand new (due immediately).
// Matches the original spec (0, 2, 5, 10) then extends gently for long-term retention.
const INTERVALS = [0, 2, 5, 10, 21, 45, 90, 180];

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function addDays(dateStr, days) {
  const d = new Date(dateStr + "T00:00:00");
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadSettings() {
  const defaults = { sessionSize: 8, newPerDay: 3 };
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? Object.assign(defaults, JSON.parse(raw)) : defaults;
  } catch (e) {
    return defaults;
  }
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function getItemState(state, id) {
  return state[id] || { level: 0, due: null, seen: false };
}

// Converts [[word, reading], ...] pairs into <ruby> markup inside a JA sentence.
function applyFurigana(sentence, pairs) {
  let html = sentence;
  (pairs || []).forEach(([word, reading]) => {
    if (!word || html.indexOf(word) === -1) return;
    const rubyHtml = `<ruby>${word}<rt>${reading}</rt></ruby>`;
    html = html.replace(word, rubyHtml);
  });
  return html;
}

// ---- Session queue building ----

function buildQueue(pool, state, settings) {
  const today = todayStr();
  const due = [];
  const fresh = [];

  pool.forEach((item) => {
    const s = getItemState(state, item.id);
    if (!s.seen) {
      fresh.push(item);
    } else if (s.due && s.due <= today) {
      due.push({ item, due: s.due });
    }
  });

  due.sort((a, b) => (a.due < b.due ? -1 : 1));
  let queue = due.map((d) => d.item);

  const newSlots = Math.max(0, settings.newPerDay);
  queue = queue.concat(fresh.slice(0, newSlots));

  if (queue.length > settings.sessionSize) {
    queue = queue.slice(0, settings.sessionSize);
  }
  return queue;
}

function countDueAndNew(pool, state) {
  const today = todayStr();
  let due = 0, fresh = 0;
  pool.forEach((item) => {
    const s = getItemState(state, item.id);
    if (!s.seen) fresh++;
    else if (s.due && s.due <= today) due++;
  });
  return { due, fresh, total: pool.length };
}

// ---- Grading ----
// natural  -> advance one level, schedule next interval
// awkward  -> same level, but reappear sooner (tomorrow)
// wrong    -> reset to level 0, reappear tomorrow
function gradeItem(state, id, grade) {
  const s = getItemState(state, id);
  const today = todayStr();
  let next = { seen: true, level: s.level, due: null };

  if (grade === "natural") {
    next.level = Math.min(s.level + 1, INTERVALS.length - 1);
    next.due = addDays(today, INTERVALS[next.level]);
  } else if (grade === "awkward") {
    next.level = s.level;
    next.due = addDays(today, 1);
  } else {
    next.level = 0;
    next.due = addDays(today, 1);
  }

  state[id] = next;
  saveState(state);
  return next;
}

// ---- App state ----

let appState = loadState();
let appSettings = loadSettings();
let sessionQueue = [];
let sessionIndex = 0;
let sessionResults = { natural: 0, awkward: 0, wrong: 0 };
let currentFuriganaOn = true;

const screens = {
  home: document.getElementById("screen-home"),
  session: document.getElementById("screen-session"),
  summary: document.getElementById("screen-summary"),
  browse: document.getElementById("screen-browse"),
  settings: document.getElementById("screen-settings"),
};

function showScreen(name) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[name].classList.add("active");
}

function renderHome() {
  const counts = countDueAndNew(GRAMMAR_POOL, appState);
  document.getElementById("stat-due").textContent = counts.due;
  document.getElementById("stat-new").textContent = Math.min(counts.fresh, appSettings.newPerDay);
  document.getElementById("stat-total").textContent = counts.total;

  const startBtn = document.getElementById("btn-start-session");
  const queuePreview = buildQueue(GRAMMAR_POOL, appState, appSettings);
  if (queuePreview.length === 0) {
    startBtn.disabled = true;
    startBtn.textContent = "All caught up ✓";
  } else {
    startBtn.disabled = false;
    startBtn.textContent = `Start session (${queuePreview.length})`;
  }
}

function renderExample(ex) {
  const jaHtml = applyFurigana(ex.jp, ex.furigana);
  return `<div class="example">
      <p class="example-ja">${jaHtml}</p>
      <p class="example-en">${ex.en}</p>
    </div>`;
}

function renderVocabItem(v) {
  const jaHtml = v.reading && v.reading !== v.jp
    ? `<ruby>${v.jp}<rt>${v.reading}</rt></ruby>`
    : v.jp;
  return `<div class="vocab-item">
      <span class="vocab-ja">${jaHtml}</span>
      <span class="vocab-en">${v.en}</span>
    </div>`;
}

function renderCard() {
  const item = sessionQueue[sessionIndex];
  document.getElementById("session-progress-label").textContent =
    `${sessionIndex + 1} / ${sessionQueue.length}`;
  document.getElementById("session-progress-bar").style.width =
    `${((sessionIndex) / sessionQueue.length) * 100}%`;

  document.getElementById("card-title").textContent = item.title;
  document.getElementById("card-meaning").textContent = item.meaning;
  document.getElementById("card-examples").innerHTML =
    item.examples.map(renderExample).join("");
  document.getElementById("card-prompt").textContent = item.prompt;

  document.getElementById("card-details").classList.add("hidden");
  document.getElementById("btn-toggle-details").textContent = "View more ▾";

  document.getElementById("answer-input").value = "";
  document.getElementById("answer-reveal").classList.add("hidden");
  document.getElementById("answer-input-wrap").classList.remove("hidden");
  document.getElementById("btn-show-answer").classList.remove("hidden");
  document.getElementById("grade-buttons").classList.add("hidden");

  document.getElementById("vocab-list").innerHTML =
    (item.vocab || []).map(renderVocabItem).join("");
  document.getElementById("vocab-reveal").classList.add("hidden");
  document.getElementById("btn-show-vocab").classList.remove("hidden");

  const modelHtml = applyFurigana(item.modelAnswer, item.modelFurigana);
  document.getElementById("model-answer").innerHTML = modelHtml;
  document.getElementById("model-note").textContent = item.note;
}

function toggleDetails() {
  const details = document.getElementById("card-details");
  const btn = document.getElementById("btn-toggle-details");
  const isHidden = details.classList.toggle("hidden");
  btn.textContent = isHidden ? "View more ▾" : "Hide ▴";
}

function revealVocab() {
  document.getElementById("vocab-reveal").classList.remove("hidden");
  document.getElementById("btn-show-vocab").classList.add("hidden");
}

function startSession() {
  sessionQueue = buildQueue(GRAMMAR_POOL, appState, appSettings);
  sessionIndex = 0;
  sessionResults = { natural: 0, awkward: 0, wrong: 0 };
  if (sessionQueue.length === 0) {
    renderHome();
    showScreen("home");
    return;
  }
  showScreen("session");
  renderCard();
}

function revealAnswer() {
  document.getElementById("answer-reveal").classList.remove("hidden");
  document.getElementById("btn-show-answer").classList.add("hidden");
  document.getElementById("grade-buttons").classList.remove("hidden");
}

function gradeAndAdvance(grade) {
  const item = sessionQueue[sessionIndex];
  gradeItem(appState, item.id, grade);
  sessionResults[grade]++;

  sessionIndex++;
  if (sessionIndex >= sessionQueue.length) {
    renderSummary();
    showScreen("summary");
  } else {
    renderCard();
  }
}

function renderSummary() {
  document.getElementById("summary-natural").textContent = sessionResults.natural;
  document.getElementById("summary-awkward").textContent = sessionResults.awkward;
  document.getElementById("summary-wrong").textContent = sessionResults.wrong;
  const reviewed = sessionResults.natural + sessionResults.awkward + sessionResults.wrong;
  document.getElementById("summary-total").textContent = reviewed;
}

function renderBrowse() {
  const today = todayStr();
  const list = document.getElementById("browse-list");
  list.innerHTML = GRAMMAR_POOL.map((item) => {
    const s = getItemState(appState, item.id);
    let statusLabel, statusClass;
    if (!s.seen) {
      statusLabel = "new";
      statusClass = "status-new";
    } else if (s.due && s.due <= today) {
      statusLabel = "due";
      statusClass = "status-due";
    } else {
      statusLabel = `next ${s.due}`;
      statusClass = "status-scheduled";
    }
    return `<div class="browse-row">
        <div>
          <div class="browse-title">${item.title}</div>
          <div class="browse-meaning">${item.meaning}</div>
        </div>
        <span class="browse-status ${statusClass}">${statusLabel}</span>
      </div>`;
  }).join("");
}

function renderSettings() {
  document.getElementById("input-session-size").value = appSettings.sessionSize;
  document.getElementById("input-new-per-day").value = appSettings.newPerDay;
}

function saveSettingsFromForm() {
  const sessionSize = parseInt(document.getElementById("input-session-size").value, 10) || 8;
  const newPerDay = parseInt(document.getElementById("input-new-per-day").value, 10) || 3;
  appSettings = { sessionSize, newPerDay };
  saveSettings(appSettings);
  renderHome();
  showScreen("home");
}

function resetProgress() {
  if (!confirm("This will erase all your SRS progress on this device. Continue?")) return;
  appState = {};
  saveState(appState);
  renderHome();
  showScreen("home");
}

// ---- Wire up events ----

document.getElementById("btn-start-session").addEventListener("click", startSession);
document.getElementById("btn-browse").addEventListener("click", () => {
  renderBrowse();
  showScreen("browse");
});
document.getElementById("btn-settings").addEventListener("click", () => {
  renderSettings();
  showScreen("settings");
});
document.getElementById("btn-back-from-browse").addEventListener("click", () => {
  renderHome();
  showScreen("home");
});
document.getElementById("btn-save-settings").addEventListener("click", saveSettingsFromForm);
document.getElementById("btn-cancel-settings").addEventListener("click", () => {
  renderHome();
  showScreen("home");
});
document.getElementById("btn-reset-progress").addEventListener("click", resetProgress);

document.getElementById("btn-toggle-details").addEventListener("click", toggleDetails);
document.getElementById("btn-show-vocab").addEventListener("click", revealVocab);
document.getElementById("btn-show-answer").addEventListener("click", revealAnswer);
document.getElementById("btn-grade-natural").addEventListener("click", () => gradeAndAdvance("natural"));
document.getElementById("btn-grade-awkward").addEventListener("click", () => gradeAndAdvance("awkward"));
document.getElementById("btn-grade-wrong").addEventListener("click", () => gradeAndAdvance("wrong"));

document.getElementById("btn-end-session").addEventListener("click", () => {
  renderSummary();
  showScreen("summary");
});
document.getElementById("btn-summary-done").addEventListener("click", () => {
  renderHome();
  showScreen("home");
});

// ---- Init ----
renderHome();
showScreen("home");
