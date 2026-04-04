const CHARACTERS = {

  hiyuki: {
    name: "Hiyuki",
    version: "Wuthering Waves · Versione 3.3 · Fase I",
    element: "❄ Glacio (Cryo)",
    tags: ["Spada", "Main DPS", "Dual Form"],
    quote: "\"L'incarnazione della purezza glaciale. I desideri che le vengono affidati nei brevi incontri con gli altri la spingono avanti, aprendo un cammino.\"",
    image: "./assets/Hiyuki_Card_zoom.png",

    resources: [
      {
        name: "Resolve",
        desc: "Guadagnato da Normal Atk Stage 3 e Resonance Skill · Eternal (+100 ciascuno). Abilita Permafrost · Eternal.",
        max: "Max 300 pt"
      },
      {
        name: "Tenacity",
        desc: "Guadagnato da Frost Penalty e Normal Atk · Preseek (on hit). Abilita Iai Stance quando ≥ 100.",
        max: "Max 300 pt"
      },
      {
        name: "Wu Frost · Iai",
        desc: "Ottenuto castando Preseek · Jianxin (3 stack). Consumato da Iai per potenziarne il danno e applicare 3 stack di Gradual Effect.",
        max: "Max 3 stack"
      },
      {
        name: "Frozen Chill",
        desc: "Guadagnato ogni volta che Iai consuma Wu Frost · Iai. Abilita Withered Frost · Preseek quando pieno.",
        max: "Max 3 stack"
      },
      {
        name: "Forged Snow",
        desc: "Guadagnato ogni uso di Withered Frost · Preseek. Consumato da Preseek · Returning Blade per aumentarne il danno.",
        max: "Max 3 stack"
      }
    ],

    forte: [
      {
        title: "Frost Freeze Effect",
        body: "Mentre Hiyuki è in squadra, gli stack di <b>Gradual Effect</b> applicati dai compagni diventano <b>Frost Freeze Effect</b>. Quando vengono applicati, infliggono danni in base al cap attuale. Preseek · Jianxin e Iai su bersagli con ≥ 10 stack consumano 10 stack e attivano una <b>Frost Crystallization</b>. Entrando in squadra, tutti gli stack Gradual Effect sui bersagli vengono azzerati."
      },
      {
        title: "Eternal → Preseek",
        body: "Hiyuki inizia in <b>Eternal</b>. Usando Permafrost · Eternal (Resolve pieno), poi Preseek · Jianxin, entra in <b>Preseek</b>. In Preseek, quando Tenacity ≥ 100, certi attacchi attivano <b>Iai Stance</b> per un Iai potenziato (Liberation damage)."
      }
    ],

    skills: [
      {
        title: "Frost Penalty · Eternal",
        tags: [{ label: "Cryo · CD 20s", type: "c" }],
        body: "Infligge danni Cryo, recupera 100 Resolve. Versione da terra: <b>Jade Cut</b> — tira i nemici vicini, danni Cryo. Versione in volo: <b>Fallen Blossom</b>. Entrambe condividono CD 12s. Se colpita subito dopo l'uso, riduce il danno subito del 100%.",
        values: [
          ["Jade Cut (Lv.10)", "57.66% × 4"],
          ["Fallen Blossom (Lv.10)", "47.72% × 4 + 47.72%"],
          ["Resonance Skill · Eternal (Lv.10)", "21.00% × 4 + 84.00%"]
        ]
      }
    ],

    liberation: [
      {
        title: "Preseek · Jianxin",
        tags: [{ label: "CD 25s", type: "c" }, { label: "No energia", type: "g" }],
        body: "Disponibile in <b>Eternal</b>, dopo Permafrost. Infligge danni Cryo, guadagna 3 Wu Frost · Iai, azzera 300 Resolve e Tenacity, entra in Preseek. Applica 4 stack Gradual Effect. <em>Non consuma Resonance Energy.</em>",
        values: [
          ["Danno (Lv.10)", "397.62%"],
          ["Energia recuperata", "+20"]
        ]
      },
      {
        title: "Preseek · Returning Blade",
        tags: [{ label: "Liberation", type: "l" }, { label: "125 en. · CD 25s", type: "c" }],
        body: "In <b>Preseek</b>, tieni premuto Liberation. Tempo fermato brevemente. Dopo 1s consuma 1 Forged Snow, poi 1 ogni 0.7s. Rilasciare infligge danni. Più stack Forged Snow consumati = moltiplicatore maggiore. Esce da Preseek.",
        values: [
          ["0 stack", "99.41% + 397.62%"],
          ["1 stack", "258.46% + 1033.82%"],
          ["2 stack", "417.51% + 1670.01%"],
          ["3 stack", "576.55% + 2306.20%"]
        ]
      }
    ],

    iai: {
      title: "Iai Stance → Iai",
      tags: [{ label: "Liberation damage", type: "l" }],
      body: "Quando Tenacity ≥ 100, certe azioni in Preseek attivano <b>Iai Stance</b>. Premendo Normal Atk si esegue Iai (consuma 100 Tenacity). Se Wu Frost · Iai disponibile, consuma 1 stack: danno potenziato + 3 stack Gradual Effect + 1 Frozen Chill. Se si subisce un colpo durante la finestra, danno ridotto 100%.",
      values: [
        ["Con Wu Frost · Iai (Lv.10)", "243.35% + 40.56% × 4"],
        ["Senza Wu Frost · Iai (Lv.10)", "162.23% + 27.04% × 4"],
        ["Costo Stamina Iai Stance", "20"]
      ]
    },

    variation: [
      {
        title: "Frost Edge",
        tags: [{ label: "Liberation", type: "l" }, { label: "+10 energia", type: "g" }],
        body: "Infligge danni Cryo (Liberation). Applica 1 stack Gradual Effect. In Eternal: recupera 100 Resolve. In Preseek: il Normal Atk successivo scala a Stage 2.",
        values: [["Danno (Lv.10)", "129.23%"]]
      }
    ],

    intro_outro: [
      "Intro: Danni Cryo degli alleati su nemici con Gradual Effect <b>+20%</b> per 20s",
      "Outro: Harmony Break · Swift Blade — attiva Dissonance Break"
    ],

    sequences: [
      {
        num: "S1",
        name: "Spring Unseen",
        body: "Moltiplicatori Normal/Heavy/Mid-air Attack Eternal +120%. Stage 3 Eternal attira i nemici vicini al centro."
      },
      {
        num: "S2",
        name: "Burning Cold in Silence",
        body: "Danno Residence +110%. Fuori combattimento >4s: recupera 3 Wu Frost · Iai, resetta CD Jade Cut ×2, Jade/Fallen Blossom +50 Tenacity ×2."
      },
      {
        num: "S3",
        name: "I Am Nothing, Yet Boundless",
        body: "+1 Frost Brand ogni 2s in campo. Permafrost/Withered Frost +120%. Con 2 Frost Brand: ogni applicazione Gradual Effect aumenta moltiplicatore Anomaly +488%."
      },
      {
        num: "S4",
        name: "Like Reeds Adrift",
        body: "Usare Resonance Skill · Eternal, Jade Cut o Fallen Blossom: danno di tutto il party +20% per 30s."
      },
      {
        num: "S5",
        name: "A Thousand Wishes, All Seeking Me",
        body: "Resonance Skill Eternal, Jade Cut e Fallen Blossom: moltiplicatore danno +80%."
      },
      {
        num: "S6",
        name: "Even if the Road Ahead is Endless Night",
        body: "Preseek · Jianxin e Returning Blade +150%. Con 2 Frost Brand: Frost Freeze Effect +25% danno finale. Con 3 Frost Brand: Crit DMG Hiyuki +40%. Fuori combattimento >4s: recupera 3 Forged Snow."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────

  denia: {
    name: "Denia",
    version: "Wuthering Waves · Versione 3.3 · Fase II",
    element: "🔥 Fusion",
    tags: ["Broadblade", "Sub-DPS / Support", "Dual Form"],
    quote: "\"La vedrete a ogni conferenza, a fare cenni come se capisse ogni parola — finché non si addormenta inesorabilmente.\"",
    image: "./assets/Denia_Card_zoom.png",

    modes: [
      {
        key: "burst",
        title: "⚡ Burst",
        body: "Certe skill applicano <b>Burst Effect</b> (2 stack) ai nemici. Quando i nemici subiscono Burst Effect, Denia guadagna <b>Hollow Void</b> (max 5). Corrosive Field con Hollow Void: danno +100%, consuma 1 stack."
      },
      {
        key: "harmony",
        title: "🎵 Harmony",
        body: "Certe skill applicano <b>Harmony · Drift</b> ai nemici, aggiornando Harmony · Interference. I compagni che applicano Drift accumulano fino al 50% del max Dissonance Value sui bersagli (1 volta ogni 300s)."
      }
    ],

    resources: [
      {
        name: "Dark Core",
        desc: "+1 ogni 12s sotto Scorching o Vortex Layer. +1 usando Long Time No See! o Knock Knock. Potenzia Banishment in Phantasm.",
        max: "Max 5 stack"
      },
      {
        name: "Void Particles",
        desc: "Da Normal Atk/Skill in Stage Form. Dream Bait +25. Long Time No See! +25. Knock Knock +100. In Phantasm Form i Normal Atk li consumano: +50% danno (conta Liberation).",
        max: "Max 100 pt"
      },
      {
        name: "Slag",
        desc: "Da Normal Atk e Gentle Summon in Phantasm Form. Banishment Stage 2 +40. Richiesto pieno per Curtain's Final Scene · Phantasm.",
        max: "Max 100 pt"
      }
    ],

    forte: [
      {
        title: "Corrosive Field",
        body: "Generato dopo Curtain's Final Scene · Phantasm Form, dura 30s. Attacca ogni 4s, tirando i nemici vicini e infliggendo danni Fusion (Liberation). In modalità Burst con Hollow Void disponibile: danno +100%, consuma 1 Hollow Void."
      },
      {
        title: "Void Particles — Effetto in Phantasm Form",
        body: "Se Void Particles > 0, i Normal Atk in Phantasm li consumano: il danno conta come <b>Liberation damage</b>, moltiplicatore +50%, acquisizione Slag +100%."
      }
    ],

    skills: [
      {
        title: "Stage Form — Simulated Bubble / Dream Bait",
        tags: [{ label: "Fusion · CD 12s", type: "f" }],
        body: "<b>Simulated Bubble</b>: tira i nemici, danni Fusion. Se si possiede Dark Core e Void Particles non è al massimo → sostituita da <b>Dream Bait</b> (consuma 1 Dark Core, stesso danno).",
        values: [["Danno (Lv.10)", "17.42% × 3 + 52.25%"]]
      },
      {
        title: "Phantasm Form — Gentle Summon / Banishment",
        tags: [{ label: "CD 4s (Banish)", type: "f" }],
        body: "<b>Gentle Summon</b>: tira i nemici, danni Fusion. Se si possiede Dark Core → sostituita da <b>Banishment</b>: 2 colpi, il 2° consuma tutti i Dark Core. Moltiplicatore aggiuntivo per Dark Core consumati.",
        values: [
          ["Banishment Stage 1", "34.68% × 3"],
          ["Banishment Stage 2", "112.01%"],
          ["+50% / +200% / +350% / +500% / +650%", "1 / 2 / 3 / 4 / 5 core"]
        ]
      }
    ],

    liberation: [
      {
        title: "Curtain's Final Scene · Stage Form",
        tags: [{ label: "125 en.", type: "f" }, { label: "Scorching 8s", type: "b" }],
        body: "Danni Fusion. Guadagna <b>Scorching</b> (ATK +30%, rimuove Vortex Layer). Passa a Phantasm Form. Usabile in volo.",
        values: [
          ["Danno (Lv.10)", "397.62%"],
          ["Energia recuperata", "+20"]
        ]
      },
      {
        title: "Curtain's Final Scene · Phantasm Form",
        tags: [{ label: "Liberation ×4", type: "l" }, { label: "Vortex Layer 30s", type: "h" }],
        body: "Disponibile quando <b>Slag è pieno</b>. Consuma tutto Slag e Void Particles. Danni Fusion ×4. Guadagna <b>Vortex Layer</b> (+1 Void Particle/s, rimuove Scorching). Genera <b>Corrosive Field</b> (30s). Passa a Stage Form.",
        values: [
          ["Danno (Lv.10)", "198.81% × 4"],
          ["Corrosive Field ogni hit", "113.61%"]
        ]
      }
    ],

    variation: [
      {
        title: "Long Time No See! (Stage) · Knock Knock (Phantasm)",
        tags: [{ label: "+10 energia", type: "g" }],
        body: "<b>Long Time No See!</b>: danni Fusion, +10 energia, +1 Dark Core, +25 Void Particles.<br><b>Knock Knock</b>: danni Fusion ×3, guadagna Scorching 8s, +1 Dark Core, +100 Void Particles.",
        values: [
          ["Long Time No See! (Lv.10)", "104.62%"],
          ["Knock Knock (Lv.10)", "51.74% × 3"]
        ]
      }
    ],

    intro_outro: [
      "Intro Burst: personaggi in zona <b>+40%</b> danno Burst Effect per 30s",
      "Intro Harmony: prossimo personaggio <b>+15%→40%</b> tutti i danni per 16s",
      "Outro: Timed Obliteration (Dissonance Break) — in Harmony: +0.12% danno finale per stack Interference × punto Dissonance Break amp"
    ],

    sequences: [
      {
        num: "S1",
        name: "The Sky Has Nothing",
        body: "Crit DMG +30%. Dream Bait e Banishment: immune agli interrupt. In Stage Form all'inizio: Vortex Layer 30s. In Phantasm: Scorching 8s."
      },
      {
        num: "S2",
        name: "Why Comfort Me",
        body: "Burst: chi applica Burst Effect +50% Fusion DMG (15s). Harmony: chi applica Drift +20 Dissonance Break amp (15s), target accumula fino al 100% Dissonance Value. Banishment +40%."
      },
      {
        num: "S3",
        name: "The Alder Races Through Night",
        body: "Curtain's Phantasm +80%. Dark Core ogni 6s. Vortex Layer: +4 Void Particles/s. Con Scorching: Liberation Phantasm recupera +30 Concerto Energy. Con Dark Core>0: Normal Stage 4 e Simulated Bubble +300%, contano come Liberation."
      },
      {
        num: "S4",
        name: "From Afar, Back to Afar",
        body: "Corrosive Field attacca ogni 3s invece di 4s."
      },
      {
        num: "S5",
        name: "If Lies Could Mend the Heart",
        body: "Curtain's Final Scene · Stage Form: danno +100%."
      },
      {
        num: "S6",
        name: "May You Find the Sun in Silence",
        body: "Burst: Corrosive Field conta come Burst Effect; colpendo applica Corroded (6s) — danno da crit Burst +40%. Harmony: Corrosive Field +120%; Dissonance Break su nemici con Drift aggiunge 1 stack Interference (ogni 3s)."
      }
    ]
  }

};
