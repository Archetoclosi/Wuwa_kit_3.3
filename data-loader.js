// ─── GOOGLE SHEETS CSV LOADER ──────────────────────────────────
// Sostituisce la parte "skills" di data.js con dati live da Google Sheets.
// I dati statici (hero, stats, weapon, ecc.) restano in DATA_STATIC qui sotto.
// ───────────────────────────────────────────────────────────────

// ── URL CSV pubblicati da Google Sheets ─────────────────────────
// Per aggiornare: Foglio → File → Pubblica sul web → CSV → copia URL
const SHEET_URLS = {
  denia:  'https://docs.google.com/spreadsheets/d/e/2PACX-1vRpN7KeeGEcT1FI66xa5vSShJdC3Nd1PAyuqScUNC0pn9wyhEvxmgaZXpHCqAOOMNpsSNIVzopmm8ws/pub?output=csv',
  feixue: 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTsSPx-4Cq3B_rHkw11Exmc76ZtwSLCASpZTIy914_Sh5Xk-j1EORQNForHm8bgXx06Q0GjX9mJ--4l/pub?output=csv'
};

// ── Dati statici (non presenti nel foglio) ──────────────────────
const DATA_STATIC = {

  denia: {
    name: "Dania",
    version: "Wuthering Waves · Versione 3.3 · Fase I",
    element: "🔥 Fusion",
    tags: ["Rectifier", "Main DPS", "Dual Form"],
    quote: "\"Ogni spettacolo ha la sua fine — ma il ricordo rimane, tra chi era presente.\"",
    image: "./assets/Denia_Card_zoom.png",
    video: "./assets/video/denia.mp4",
    stats: {
      hp: "—", atk: "—", def: "—",
      energyRegen: "100.0%", critRate: "5.0%", critDmg: "150.0%"
    },
    weapon: null,
    modes: [
      {
        key: "burst",
        title: "Modalità di Risonanza: Esplosione",
        body: "Le abilità elencate applicano <b>Effetto Esplosivo</b> ai nemici. Aumenta il danno subito dai bersagli."
      },
      {
        key: "harmony",
        title: "Modalità di Risonanza: Ensemble",
        body: "Le abilità elencate applicano <b>Ensemble · Sfasamento</b> e rinfrescano <b>Ensemble · Interferenza</b>. Con Interferenza attiva: Rottura Concerto aumenta il danno finale dello 0,12% per punto di amplificazione."
      }
    ],
    intro_outro: [
      "Abilità di uscita — <b>Menzogna Incompiuta</b> in Modalità Esplosione: aumenta del 40% i danni dell'Effetto Esplosivo subiti dai nemici colpiti dai personaggi in campo per 30 s.",
      "Abilità di uscita — <b>Menzogna Incompiuta</b> in Modalità Ensemble: garantisce al prossimo personaggio che entra in campo un bonus del 15% al danno totale per 16 s; quando quel personaggio applica Ensemble · Sfasamento, il bonus sale al 40%.",
      "Rottura Concerto — <b>Fine del Tempo</b>: in Modalità Ensemble applica anche Ensemble · Sfasamento e rinfresca Ensemble · Interferenza."
    ]
  },

  feixue: {
    name: "Hiyuki",
    version: "Wuthering Waves · Versione 3.3 · Fase I",
    element: "❄ Glacio",
    tags: ["Sword", "Main DPS", "Dual Form"],
    quote: "\"L'incarnazione della purezza glaciale. I desideri che le vengono affidati nei brevi incontri con gli altri la spingono avanti.\"",
    image: "./assets/Hiyuki_Card_zoom.png",
    video: "./assets/video/hiyuki.mp4",
    stats: {
      hp: "10,300", atk: "1,176", def: "1,112",
      energyRegen: "100.0%", critRate: "5.0%", critDmg: "150.0%"
    },
    traces: { critRate: "8%", atk: "12%" },
    weapon: {
      name: "Frostburn",
      sub: "ATK 587 · Crit. Rate +24.3%",
      rank: "Rank 1 — Self No More",
      body: "ATK aumentato del <b>12%</b>. Quando il wielder applica <b>Glacio Chafe</b>, il Glacio DMG è amplificato del <b>28%</b> e il Resonance Liberation DMG ignora l'<b>8%</b> della DEF del bersaglio per 6s."
    },
    intro_outro: [
      "Intro — Frostedge: Deal Glacio DMG (Liberation DMG), applica 1 stack <b>Glacio Chafe</b>. In <b>Present Self</b> ripristina 100 Dedication; in <b>Foreclaimed Self</b> abilita Basic Attack Stage 2.",
      "Outro — Snowlight Blessing: il Glacio DMG dei Resonator vicini è amplificato del 20% contro bersagli con <b>Glacio Chafe</b> per 20s."
    ]
  }

};

// ── CSV parser minimale ─────────────────────────────────────────
function parseCSV(text) {
  const rows = [];
  const lines = text.split(/\r?\n/);
  for (const line of lines) {
    if (!line.trim()) continue;
    const cols = [];
    let cur = '', inQuote = false;
    for (let i = 0; i < line.length; i++) {
      const ch = line[i];
      if (ch === '"') {
        if (inQuote && line[i + 1] === '"') { cur += '"'; i++; }
        else inQuote = !inQuote;
      } else if (ch === ',' && !inQuote) {
        cols.push(cur.trim() || null);
        cur = '';
      } else {
        cur += ch;
      }
    }
    cols.push(cur.trim() || null);
    rows.push(cols);
  }
  return rows;
}

// ── Converti righe CSV → struttura dati per render.js ──────────
function csvToSkillData(rows) {
  // Salta header
  const data = rows.slice(1).filter(r => r.some(c => c));

  // Raggruppa per Category
  const groups = {};
  const order = [];
  for (const [cat, subskill, desc, dmg, cd, energy] of data) {
    if (!cat) continue;
    if (!groups[cat]) { groups[cat] = []; order.push(cat); }
    groups[cat].push({ subskill, desc, dmg, cd, energy });
  }

  const result = {
    normalAttack: null,
    skills: [],
    liberation: [],
    intro: [],       // solo intro skill
    outro: [],       // outro + concerto break → pills
    forte: [],
    resources: [],
    inherent: [],
    glossary: [],
    sequences: []
  };

  for (const cat of order) {
    const rows = groups[cat];
    const catLow = cat.toLowerCase();

    // ── Basic Attack → normalAttack ──────────────────────────
    if (catLow.startsWith('basic attack')) {
      const title = cat.replace(/^basic attack\s*[–—-]\s*/i, '');
      if (!result.normalAttack) {
        result.normalAttack = { title, normalForm: [], presentSelf: [], foreclaimedSelf: [] };
      }
      for (const r of rows) {
        const label = r.subskill || '';
        const labelLow = label.toLowerCase();
        const values = r.dmg ? [['DMG', r.dmg]] : null;
        const entry = { label, desc: r.desc || '', values };
        if (labelLow.includes('pre-seeking') || labelLow.includes('foreclaimed')) {
          result.normalAttack.foreclaimedSelf.push(entry);
        } else {
          // "Normal Form", "Present Self", o qualsiasi altro → gruppo principale
          result.normalAttack.normalForm.push(entry);
        }
      }
    }

    // ── Resonance Skill ──────────────────────────────────────
    else if (catLow.startsWith('resonance skill')) {
      for (const r of rows) {
        const values = [];
        if (r.dmg)    values.push(['DMG (Lv.10)', r.dmg]);
        if (r.cd)     values.push(['Cooldown', r.cd]);
        if (r.energy) values.push(['Energia', r.energy]);
        result.skills.push({
          title: r.subskill || cat,
          tags: buildTags(r),
          body: r.desc || '',
          values: values.length ? values : null
        });
      }
    }

    // ── Resonance Liberation ─────────────────────────────────
    else if (catLow.startsWith('resonance liberation')) {
      for (const r of rows) {
        // Buff/status vanno nel glossario
        const isStatus = r.subskill && (
          r.subskill.toLowerCase() === 'shell' ||
          r.subskill.toLowerCase() === 'longing' ||
          r.subskill.toLowerCase().startsWith('resource')
        );
        if (isStatus) {
          result.glossary.push({ term: r.subskill, def: r.desc || '' });
          continue;
        }
        const values = [];
        if (r.dmg)    values.push(['DMG (Lv.10)', r.dmg]);
        if (r.cd)     values.push(['Cooldown', r.cd]);
        if (r.energy) values.push(['Energia', r.energy]);
        result.liberation.push({
          title: r.subskill || cat,
          tags: buildTags(r),
          body: r.desc || '',
          values: values.length ? values : null
        });
      }
    }

    // ── Intro Skill ──────────────────────────────────────────
    else if (catLow.startsWith('intro skill')) {
      for (const r of rows) {
        const values = [];
        if (r.dmg)    values.push(['DMG (Lv.10)', r.dmg]);
        if (r.energy) values.push(['Concerto Energy', r.energy]);
        result.intro.push({
          title: r.subskill || cat,
          tags: [{ label: 'Intro Skill', type: 'g' }],
          body: r.desc || '',
          values: values.length ? values : null
        });
      }
    }

    // ── Outro Skill → pill ───────────────────────────────────
    else if (catLow.startsWith('outro skill')) {
      for (const r of rows) {
        const label = r.subskill ? `Outro — <b>${r.subskill}</b>` : 'Outro Skill';
        const body = [r.desc, r.dmg ? `<b>${r.dmg}</b>` : ''].filter(Boolean).join(' ');
        result.outro.push(label + (body ? ': ' + body : ''));
      }
    }

    // ── Concerto Break → pill ────────────────────────────────
    else if (catLow.startsWith('concerto break')) {
      for (const r of rows) {
        const label = r.subskill ? `Concerto Break — <b>${r.subskill}</b>` : 'Concerto Break';
        result.outro.push(label + (r.desc ? ': ' + r.desc : ''));
      }
    }

    // ── Forte Circuit → forte + resources ────────────────────
    else if (catLow.startsWith('forte circuit')) {
      for (const r of rows) {
        const labelLow = (r.subskill || '').toLowerCase();
        if (labelLow.startsWith('resource')) {
          result.resources.push({
            name: r.subskill.replace(/^resource\s*(limit\s*)?[–—-]?\s*/i, ''),
            desc: r.desc || '',
            max: ''
          });
        } else {
          const values = r.dmg ? [['DMG (Lv.10)', r.dmg]] : null;
          result.forte.push({
            title: r.subskill || cat,
            body: r.desc || '',
            values
          });
        }
      }
    }

    // ── Resonance Chain → sequences ──────────────────────────
    else if (catLow.startsWith('resonance chain')) {
      const seqNums = ['S1','S2','S3','S4','S5','S6'];
      rows.forEach((r, i) => {
        const values = r.dmg ? [['Effetto', r.dmg]] : null;
        result.sequences.push({
          num: seqNums[i] || `S${i+1}`,
          name: r.subskill || '',
          body: r.desc || '',
          values
        });
      });
    }

    // ── Inherent Skills ──────────────────────────────────────
    else if (catLow.startsWith('inherent skill')) {
      for (const r of rows) {
        result.inherent.push({ title: r.subskill || '', body: r.desc || '' });
      }
    }

    // ── Fallback: forte generico ──────────────────────────────
    else {
      for (const r of rows) {
        if (r.subskill || r.desc) {
          result.forte.push({ title: r.subskill || cat, body: r.desc || '' });
        }
      }
    }
  }

  return result;
}

// Determina i tag CSS dalla riga
function buildTags(r) {
  const tags = [];
  const subLow = (r.subskill || '').toLowerCase();
  // Tipo elemento/danno
  if (subLow.includes('glacio') || subLow.includes('frost') || subLow.includes('cold')) {
    if (r.cd) tags.push({ label: `Glacio · CD ${r.cd}`, type: 'c' });
    else tags.push({ label: 'Glacio', type: 'c' });
  } else if (subLow.includes('fusion') || subLow.includes('fire')) {
    if (r.cd) tags.push({ label: `Fusion · CD ${r.cd}`, type: 'f' });
    else tags.push({ label: 'Fusion', type: 'f' });
  } else {
    if (r.cd) tags.push({ label: `CD ${r.cd}`, type: 'b' });
  }
  if (r.energy && r.energy.includes('cost')) {
    tags.push({ label: r.energy, type: 'l' });
  }
  return tags;
}

// ── Loader principale ────────────────────────────────────────────
async function loadCharacterFromSheet(key) {
  const url = SHEET_URLS[key];
  if (!url) throw new Error(`Nessun URL definito per: ${key}`);

  const res = await fetch(url);
  if (!res.ok) throw new Error(`Fetch fallito per ${key}: ${res.status}`);
  const text = await res.text();

  const rows = parseCSV(text);
  const skillData = csvToSkillData(rows);
  const staticData = DATA_STATIC[key];

  // Merge: dati statici + skill dal foglio
  const merged = Object.assign({}, staticData, skillData);
  // intro_outro statico ha priorità; fallback sulle pills outro del foglio
  merged.intro_outro = (staticData.intro_outro && staticData.intro_outro.length)
    ? staticData.intro_outro
    : (skillData.outro || []);
  // variation non usata più — svuotare per evitare sezioni doppie
  merged.variation = [];
  return merged;
}

// ── Utility: mostra loading state ────────────────────────────────
function showLoading(root, charName) {
  root.innerHTML = `
    <div style="
      display:flex; flex-direction:column; align-items:center;
      justify-content:center; min-height:60vh; gap:1.5rem;
      color:var(--text-muted); font-family:'Inter',sans-serif;
    ">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style="animation:spin 1.2s linear infinite">
        <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2" opacity="0.2"/>
        <path d="M24 4 A20 20 0 0 1 44 24" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
      <span style="font-size:13px;letter-spacing:0.1em;">Caricamento dati ${charName}…</span>
    </div>
    <style>@keyframes spin { to { transform: rotate(360deg); } }</style>
  `;
}

function showError(root, charName, err) {
  root.innerHTML = `
    <div style="
      display:flex; flex-direction:column; align-items:center;
      justify-content:center; min-height:60vh; gap:1rem;
      color:var(--text-muted); font-family:'Inter',sans-serif; text-align:center;
    ">
      <span style="font-size:2rem;">⚠️</span>
      <span style="font-size:14px; color:var(--c1);">Impossibile caricare i dati di ${charName}</span>
      <span style="font-size:12px; max-width:400px; line-height:1.6;">${err.message}<br><br>
        Verifica che il foglio Google sia pubblicato come CSV:<br>
        <em>File → Pubblica sul web → CSV</em>
      </span>
    </div>
  `;
}