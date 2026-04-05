// ─── HELPERS ───────────────────────────────────────────────────

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html !== undefined) e.innerHTML = html;
  return e;
}

function tags(list) {
  if (!list || !list.length) return '';
  return '<div class="tags">' + list.map(t =>
    `<span class="tag tag-${t.type}">${t.label}</span>`
  ).join('') + '</div>';
}

function vtable(rows) {
  if (!rows || !rows.length) return '';
  return '<table class="vtable">' + rows.map(r =>
    `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`
  ).join('') + '</table>';
}

// ── Helper condiviso: riquadro valori numerici ──────────────────
// Accetta sia array [[label, val], …] sia null/undefined (no-op).
function buildValuesBox(values) {
  if (!values || !values.length) return null;
  const vbox = div('skill-values-box');
  values.forEach(([k, v]) => {
    const row = div('skill-value-row');
    row.appendChild(el('span', 'skill-value-label', k));
    row.appendChild(el('span', 'skill-value-num', v));
    vbox.appendChild(row);
  });
  return vbox;
}

function sectionLabel(text) {
  return el('div', 'section-label', text);
}

function div(cls) { return el('div', cls); }

function divider() {
  const d = document.createElement('div');
  d.className = 'div';
  return d;
}

// ─── SHARED SECTIONS ───────────────────────────────────────────

function buildHero(c) {
  const hero = div('hero');
  const info = div('hero-info');
  info.appendChild(el('div', 'hero-version', c.version));
  info.appendChild(el('h1', 'hero-name', c.name));
  const tagsEl = div('hero-tags');
  tagsEl.innerHTML = `<span class="hero-tag element">${c.element}</span>` +
    c.tags.map(t => `<span class="hero-tag">${t}</span>`).join('');
  info.appendChild(tagsEl);
  info.appendChild(el('p', 'hero-quote', c.quote));
  hero.appendChild(info);

  const imgWrap = div('hero-img-wrap');
  imgWrap.appendChild(div('hero-img-glow'));
  if (c.video) {
    const vid = document.createElement('video');
    vid.className = 'hero-img';
    vid.src = c.video;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.style.pointerEvents = 'none';
    imgWrap.appendChild(vid);
  } else {
    const img = document.createElement('img');
    img.className = 'hero-img';
    img.src = c.image;
    img.alt = c.name;
    const fallback = div('hero-img-fallback');
    fallback.style.display = 'none';
    fallback.innerHTML = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="1.5" opacity="0.4"/><circle cx="32" cy="32" r="14" stroke="currentColor" stroke-width="1.5" opacity="0.4"/></svg><span>Immagine non disponibile</span>`;
    img.onerror = () => { img.style.display = 'none'; fallback.style.display = 'flex'; };
    imgWrap.appendChild(img);
    imgWrap.appendChild(fallback);
  }
  hero.appendChild(imgWrap);
  return hero;
}

function buildStats(stats, label) {
  if (!stats) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Statistiche Base (Lv.90)'));
  const grid = div('stats-grid');
  const entries = [
    ['HP', stats.hp], ['ATK', stats.atk], ['DEF', stats.def],
    ['Energy Regen', stats.energyRegen], ['Crit. Rate', stats.critRate], ['Crit. DMG', stats.critDmg]
  ];
  entries.forEach(([k, v]) => {
    const cell = div('stat-cell');
    cell.appendChild(el('div', 'stat-label', k));
    cell.appendChild(el('div', 'stat-value', v));
    grid.appendChild(cell);
  });
  sec.appendChild(grid);
  return sec;
}

function buildTraces(traces, label) {
  if (!traces) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Bonus Traces'));
  const grid = div('stats-grid');
  const labelMap = {
    hp: 'HP', atk: 'ATK', def: 'DEF',
    energyRegen: 'Energy Regen', critRate: 'Crit. Rate', critDmg: 'Crit. DMG'
  };
  Object.entries(traces).forEach(([k, v]) => {
    const cell = div('stat-cell');
    cell.appendChild(el('div', 'stat-label', labelMap[k] || k));
    cell.appendChild(el('div', 'stat-value', v));
    grid.appendChild(cell);
  });
  sec.appendChild(grid);
  return sec;
}

function buildWeapon(weapon, label) {
  if (!weapon) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Arma Signature'));
  const card = div('glass weapon-card');
  const head = div('weapon-head');
  head.appendChild(el('div', 'weapon-name', weapon.name));
  head.appendChild(el('div', 'weapon-sub', weapon.sub));
  head.appendChild(el('div', 'weapon-rank', weapon.rank));
  card.appendChild(head);
  card.appendChild(el('div', 'card-body', weapon.body));
  sec.appendChild(card);
  return sec;
}

function buildResources(resources, label) {
  if (!resources || !resources.length) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Risorse'));
  const grid = div('res-grid');
  resources.forEach(r => {
    const card = div('res-card skill-card');
    card.appendChild(el('div', 'res-name', r.name));
    if (r.desc) card.appendChild(el('div', 'res-desc skill-desc', r.desc));
    if (r.max)  card.appendChild(el('div', 'res-max', r.max));
    const vbox = buildValuesBox(r.values);
    if (vbox) card.appendChild(vbox);
    grid.appendChild(card);
  });
  sec.appendChild(grid);
  return sec;
}

function buildForte(forte, label) {
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Forte Circuit — Meccanica principale'));
  forte.forEach(f => {
    const box = div('forte-box skill-card');
    box.appendChild(el('div', 'forte-title', f.title));
    if (f.body) box.appendChild(el('div', 'forte-body skill-desc', f.body));
    const vbox = buildValuesBox(f.values);
    if (vbox) box.appendChild(vbox);
    sec.appendChild(box);
  });
  return sec;
}

function buildNormalAttack(na) {
  if (!na) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(`Normal Attack — ${na.title}`));

  const buildGroup = (list, title) => {
    if (!list || !list.length) return null;
    const box = div('na-group');
    box.appendChild(el('div', 'na-group-title', title));
    list.forEach(item => {
      const card = div('na-card skill-card');
      card.appendChild(el('div', 'na-row-label', item.label));
      if (item.desc) card.appendChild(el('div', 'na-row-desc skill-desc', item.desc));
      const vbox = buildValuesBox(item.values);
      if (vbox) card.appendChild(vbox);
      box.appendChild(card);
    });
    return box;
  };

  // Supporta sia la struttura vecchia (presentSelf/foreclaimedSelf) sia quella nuova (normalForm)
  const groups = [
    [na.normalForm,      'Normal Form'],
    [na.presentSelf,     'Present Self'],
    [na.foreclaimedSelf, 'Foreclaimed Self / Pre-seeking']
  ];
  groups.forEach(([list, title]) => {
    const node = buildGroup(list, title);
    if (node) sec.appendChild(node);
  });

  return sec;
}

function buildSkillSection(skills, label) {
  const sec = div('section');
  sec.appendChild(sectionLabel(label));
  skills.forEach(s => {
    const card = div('glass skill-card');
    const head = div('card-head');
    head.appendChild(el('div', 'card-title', s.title));
    head.innerHTML += tags(s.tags);
    card.appendChild(head);
    if (s.body) card.appendChild(el('div', 'card-body skill-desc', s.body));
    const vbox = buildValuesBox(s.values);
    if (vbox) card.appendChild(vbox);
    sec.appendChild(card);
  });
  return sec;
}

function buildInherent(inherent, label) {
  if (!inherent || !inherent.length) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Inherent Skills'));
  inherent.forEach(s => {
    const box = div('inherent-box');
    box.appendChild(el('div', 'inherent-title', s.title));
    box.appendChild(el('div', 'inherent-body', s.body));
    sec.appendChild(box);
  });
  return sec;
}

function buildGlossary(glossary, label) {
  if (!glossary || !glossary.length) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Glossario Termini'));
  const grid = div('glossary-grid');
  glossary.forEach(g => {
    const card = div('glossary-card');
    card.appendChild(el('div', 'glossary-term', g.term));
    card.appendChild(el('div', 'glossary-def', g.def));
    grid.appendChild(card);
  });
  sec.appendChild(grid);
  return sec;
}

function buildIntroOutro(pills, label) {
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Intro / Outro'));
  const row = div('pill-row');
  pills.forEach(p => {
    row.appendChild(el('div', 'pill', p));
  });
  sec.appendChild(row);
  return sec;
}

function buildSequences(seqs, label) {
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Sequenze Risonanza'));
  const grid = div('seq-grid');
  seqs.forEach(s => {
    const card = div('seq-card skill-card');
    card.appendChild(el('div', 'seq-num', s.num));
    card.appendChild(el('div', 'seq-name', s.name));
    if (s.body) card.appendChild(el('div', 'seq-body skill-desc', s.body));
    const vbox = buildValuesBox(s.values);
    if (vbox) card.appendChild(vbox);
    grid.appendChild(card);
  });
  sec.appendChild(grid);
  return sec;
}

function buildEchoSets(echoSets, label, showCN) {
  if (!echoSets || !echoSets.length) return null;
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Echo Set'));
  const grid = div('glossary-grid');
  echoSets.forEach(s => {
    const card = div('glossary-card');
    const nameEl = el('div', 'glossary-term', s.name);
    if (showCN) nameEl.innerHTML += ` <span style="opacity:0.55;font-weight:400;">${s.nameCN}</span>`;
    card.appendChild(nameEl);
    const body = el('div', 'glossary-def');
    body.innerHTML =
      `<b>2-pc:</b> ${s.two}<br>` +
      (showCN ? `<span style="opacity:0.5;font-size:11px;">${s.twoCN}</span><br>` : '') +
      `<br><b>5-pc:</b> ${s.five}` +
      (showCN ? `<br><span style="opacity:0.5;font-size:11px;">${s.fiveCN}</span>` : '');
    card.appendChild(body);
    grid.appendChild(card);
  });
  sec.appendChild(grid);
  return sec;
}

function appendIfExists(root, node) {
  if (node) root.appendChild(node);
}

// ─── HIYUKI ────────────────────────────────────────────────────

const HIYUKI_LABELS = {
  it: {
    stats:     'Statistiche Base (Lv.90)',
    traces:    'Bonus Traces',
    weapon:    'Arma Signature',
    resources: 'Risorse',
    forte:     'Forte Circuit — Meccanica principale',
    skill:     'Resonance Skill',
    libr:      'Resonance Liberation',
    frostRite: 'Fudoshin · Frost Rite',
    intro:     'Intro Skill',
    inherent:  'Inherent Skills',
    glossary:  'Glossario Termini',
    introOutro:'Intro / Outro',
    echoSets:  'Echo Set',
    sequences: 'Sequenze Risonanza'
  },
  en: {
    stats:     'Base Stats (Lv.90)',
    traces:    'Bonus Traces',
    weapon:    'Signature Weapon',
    resources: 'Resources',
    forte:     'Forte Circuit — Core Mechanic',
    skill:     'Resonance Skill',
    libr:      'Resonance Liberation',
    frostRite: 'Fudoshin · Frost Rite',
    intro:     'Intro Skill',
    inherent:  'Inherent Skills',
    glossary:  'Key Terms Glossary',
    introOutro:'Intro / Outro',
    tuneBreak: 'Tune Break',
    echoSets:  'Echo Set',
    sequences: 'Resonance Sequences'
  }
};

function renderHiyuki(root, c, lang) {
  const L = HIYUKI_LABELS[lang] || HIYUKI_LABELS.it;

  root.appendChild(buildHero(c));

  // Stats + Weapon affiancate
  const topRow = div('top-row');
  appendIfExists(topRow, buildStats(c.stats, L.stats));
  appendIfExists(topRow, buildWeapon(c.weapon, L.weapon));
  root.appendChild(topRow);
  appendIfExists(root, buildTraces(c.traces, L.traces));

  root.appendChild(divider());
  root.appendChild(buildResources(c.resources, L.resources));
  root.appendChild(divider());
  root.appendChild(buildForte(c.forte, L.forte));
  root.appendChild(divider());

  // Normal Attack
  appendIfExists(root, buildNormalAttack(c.normalAttack));
  root.appendChild(divider());

  root.appendChild(buildSkillSection(c.skills, L.skill));
  root.appendChild(buildSkillSection(c.liberation, L.libr));

  // Frost Rite
  if (c.frostRite) {
    const sec = div('section');
    sec.appendChild(sectionLabel(L.frostRite));
    const card = div('glass skill-card');
    const head = div('card-head');
    head.appendChild(el('div', 'card-title', c.frostRite.title));
    head.innerHTML += tags(c.frostRite.tags);
    card.appendChild(head);
    card.appendChild(el('div', 'card-body skill-desc', c.frostRite.body));
    const vbox = buildValuesBox(c.frostRite.values);
    if (vbox) card.appendChild(vbox);
    sec.appendChild(card);
    root.appendChild(sec);
  }

  root.appendChild(buildSkillSection(c.variation, L.intro));
  root.appendChild(divider());

  appendIfExists(root, buildInherent(c.inherent, L.inherent));
  root.appendChild(divider());

  appendIfExists(root, buildGlossary(c.glossary, L.glossary));
  root.appendChild(divider());

  root.appendChild(buildIntroOutro(c.intro_outro, L.introOutro));
  root.appendChild(divider());
  root.appendChild(buildSequences(c.sequences, L.sequences));
}

// ─── DENIA ─────────────────────────────────────────────────────

function renderDenia(root, c) {
  // Hero (immagine a sinistra per Denia)
  const hero = div('hero hero-denia');
  const imgWrap = div('hero-img-wrap');
  imgWrap.appendChild(div('hero-img-glow'));
  if (c.video) {
    const vid = document.createElement('video');
    vid.className = 'hero-img';
    vid.src = c.video;
    vid.autoplay = true;
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.style.pointerEvents = 'none';
    imgWrap.appendChild(vid);
  } else {
    const img = document.createElement('img');
    img.className = 'hero-img';
    img.src = c.image;
    img.alt = c.name;
    const fallback = div('hero-img-fallback');
    fallback.style.display = 'none';
    fallback.innerHTML = `<svg width="64" height="64" viewBox="0 0 64 64" fill="none"><circle cx="32" cy="32" r="30" stroke="currentColor" stroke-width="1.5" opacity="0.4"/><circle cx="32" cy="32" r="14" stroke="currentColor" stroke-width="1.5" opacity="0.4"/></svg><span>Immagine non disponibile</span>`;
    img.onerror = () => { img.style.display = 'none'; fallback.style.display = 'flex'; };
    imgWrap.appendChild(img);
    imgWrap.appendChild(fallback);
  }
  hero.appendChild(imgWrap);

  const info = div('hero-info');
  info.appendChild(el('div', 'hero-version', c.version));
  info.appendChild(el('h1', 'hero-name', c.name));
  const tagsEl = div('hero-tags');
  tagsEl.innerHTML = `<span class="hero-tag element">${c.element}</span>` +
    c.tags.map(t => `<span class="hero-tag">${t}</span>`).join('');
  info.appendChild(tagsEl);
  info.appendChild(el('p', 'hero-quote', c.quote));
  hero.appendChild(info);
  root.appendChild(hero);

  // Banner "trascrizione in arrivo" se pending
  if (c._transcriptionPending) {
    const banner = div('pending-banner');
    banner.innerHTML = '⏳ Dati basati su leak pre-release — in attesa della trascrizione ufficiale EN per confermare termini e valori.';
    root.appendChild(banner);
  }

  // Stats + Weapon (quando disponibili)
  if (c.stats || c.weapon) {
    const topRow = div('top-row');
    appendIfExists(topRow, buildStats(c.stats));
    appendIfExists(topRow, buildWeapon(c.weapon));
    root.appendChild(topRow);
  }

  // Modalità
  const modeSec = div('section');
  modeSec.appendChild(sectionLabel('Modalità Risonanza'));
  const modeGrid = div('mode-grid');
  c.modes.forEach(m => {
    const card = div(`mode-card mode-${m.key}`);
    card.appendChild(el('div', 'mode-title', m.title));
    card.appendChild(el('div', 'mode-body', m.body));
    modeGrid.appendChild(card);
  });
  modeSec.appendChild(modeGrid);
  root.appendChild(modeSec);

  root.appendChild(buildResources(c.resources));
  root.appendChild(divider());
  root.appendChild(buildForte(c.forte, 'Forte Circuit'));

  // Normal Attack (quando disponibile)
  appendIfExists(root, buildNormalAttack(c.normalAttack));

  root.appendChild(buildSkillSection(c.skills, 'Resonance Skill'));
  root.appendChild(buildSkillSection(c.liberation, 'Resonance Liberation'));
  root.appendChild(buildSkillSection(c.variation, 'Variation Skill / Intro'));
  root.appendChild(divider());

  appendIfExists(root, buildInherent(c.inherent));
  if (c.inherent && c.inherent.length) root.appendChild(divider());

  appendIfExists(root, buildGlossary(c.glossary));
  if (c.glossary && c.glossary.length) root.appendChild(divider());

  root.appendChild(buildIntroOutro(c.intro_outro));
  root.appendChild(divider());
  root.appendChild(buildSequences(c.sequences));
}
