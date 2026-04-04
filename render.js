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

function sectionLabel(text) {
  const d = el('div', 'section-label', text);
  return d;
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
  hero.appendChild(imgWrap);

  return hero;
}

function buildResources(resources) {
  const sec = div('section');
  sec.appendChild(sectionLabel('Risorse'));
  const grid = div('res-grid');
  resources.forEach(r => {
    const card = div('res-card');
    card.appendChild(el('div', 'res-name', r.name));
    card.appendChild(el('div', 'res-desc', r.desc));
    card.appendChild(el('div', 'res-max', r.max));
    grid.appendChild(card);
  });
  sec.appendChild(grid);
  return sec;
}

function buildForte(forte, label) {
  const sec = div('section');
  sec.appendChild(sectionLabel(label || 'Forte Circuit — Meccanica principale'));
  forte.forEach(f => {
    const box = div('forte-box');
    box.appendChild(el('div', 'forte-title', f.title));
    box.appendChild(el('div', 'forte-body', f.body));
    sec.appendChild(box);
  });
  return sec;
}

function buildSkillSection(skills, label) {
  const sec = div('section');
  sec.appendChild(sectionLabel(label));
  skills.forEach(s => {
    const card = div('glass');
    const head = div('card-head');
    head.appendChild(el('div', 'card-title', s.title));
    head.innerHTML += tags(s.tags);
    card.appendChild(head);
    card.appendChild(el('div', 'card-body', s.body));
    card.innerHTML += vtable(s.values);
    sec.appendChild(card);
  });
  return sec;
}

function buildIntroOutro(pills) {
  const sec = div('section');
  sec.appendChild(sectionLabel('Intro / Outro'));
  const row = div('pill-row');
  pills.forEach(p => {
    row.appendChild(el('div', 'pill', p));
  });
  sec.appendChild(row);
  return sec;
}

function buildSequences(seqs) {
  const sec = div('section');
  sec.appendChild(sectionLabel('Sequenze Risonanza'));
  const grid = div('seq-grid');
  seqs.forEach(s => {
    const card = div('seq-card');
    card.appendChild(el('div', 'seq-num', s.num));
    card.appendChild(el('div', 'seq-name', s.name));
    card.appendChild(el('div', 'seq-body', s.body));
    grid.appendChild(card);
  });
  sec.appendChild(grid);
  return sec;
}

// ─── HIYUKI ────────────────────────────────────────────────────

function renderHiyuki(root, c) {
  root.appendChild(buildHero(c));
  root.appendChild(buildResources(c.resources));
  root.appendChild(divider());
  root.appendChild(buildForte(c.forte, 'Forte Circuit — Meccanica principale'));
  root.appendChild(divider());
  root.appendChild(buildSkillSection(c.skills, 'Resonance Skill'));
  root.appendChild(buildSkillSection(c.liberation, 'Resonance Liberation'));

  // IAI special block
  const iaiSec = div('section');
  iaiSec.appendChild(sectionLabel('Iai'));
  const iaiCard = div('glass');
  const iaiHead = div('card-head');
  iaiHead.appendChild(el('div', 'card-title', c.iai.title));
  iaiHead.innerHTML += tags(c.iai.tags);
  iaiCard.appendChild(iaiHead);
  iaiCard.appendChild(el('div', 'card-body', c.iai.body));
  iaiCard.innerHTML += vtable(c.iai.values);
  iaiSec.appendChild(iaiCard);
  root.appendChild(iaiSec);

  root.appendChild(buildSkillSection(c.variation, 'Variation Skill'));
  root.appendChild(divider());
  root.appendChild(buildIntroOutro(c.intro_outro));
  root.appendChild(divider());
  root.appendChild(buildSequences(c.sequences));
}

// ─── DENIA ─────────────────────────────────────────────────────

function renderDenia(root, c) {
  // Hero (image left for Denia)
  const hero = div('hero hero-denia');
  const imgWrap = div('hero-img-wrap');
  imgWrap.appendChild(div('hero-img-glow'));
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
  root.appendChild(buildSkillSection(c.skills, 'Resonance Skill'));
  root.appendChild(buildSkillSection(c.liberation, 'Resonance Liberation'));
  root.appendChild(buildSkillSection(c.variation, 'Variation Skill'));
  root.appendChild(divider());
  root.appendChild(buildIntroOutro(c.intro_outro));
  root.appendChild(divider());
  root.appendChild(buildSequences(c.sequences));
}
