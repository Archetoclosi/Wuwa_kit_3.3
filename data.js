const CHARACTERS = {

  hiyuki: {
    name: "Hiyuki",
    version: "Wuthering Waves · Versione 3.3 · Fase I",
    element: "❄ Glacio",
    tags: ["Sword", "Main DPS", "Dual Form"],
    quote: "\"L'incarnazione della purezza glaciale. I desideri che le vengono affidati nei brevi incontri con gli altri la spingono avanti, aprendo un cammino.\"",
    image: "./assets/Hiyuki_Card_zoom.png",
    video: "./assets/video/hiyuki.mp4",

    // ── STAT BASE (Lv.90) ───────────────────────────────────────
    stats: {
      hp: "10,300",
      atk: "1,176",
      def: "1,112",
      energyRegen: "100.0%",
      critRate: "5.0%",
      critDmg: "150.0%"
    },

    traces:{
      critRate: "8%",
      atk: "12%",
    },

    // ── ARMA SIGNATURE ──────────────────────────────────────────
    weapon: {
      name: "Frostburn",
      sub: "ATK 587 · Crit. Rate +24.3%",
      rank: "Rank 1 — Self No More",
      body: "ATK aumentato del <b>12%</b>. Quando il wielder applica <b>Glacio Chafe</b>, il Glacio DMG è amplificato del <b>28%</b> e il Resonance Liberation DMG ignora l'<b>8%</b> della DEF del bersaglio per 6s."
    },

    // ── RISORSE / BARRE ─────────────────────────────────────────
    resources: [
      {
        name: "Dedication",
        desc: "Guadagnata da Basic Attack Stage 3 (Present Self) e Resonance Skill · Present Self (+100 ciascuno). Abilita Frost Splinter quando piena.",
        max: "Max 300 pt"
      },
      {
        name: "Bitterfrost",
        desc: "Guadagnata da Normal Attacks · Foreclaimed Self (tranne Frost Splinter), Frostblight: Jade Cleave e Petallfall (on hit). Abilita Fudoshin quando ≥ 100.",
        max: "Max 300 pt"
      },
      {
        name: "Snow-rust",
        desc: "Ottenuto castando Foreclaiming: Inward Vision (3 stack). Consumato da Frost Rite per potenziarne il danno, applicare 3 stack di Glacio Chafe e guadagnare 1 Flaming Sakura.",
        max: "Max 3 stack"
      },
      {
        name: "Flaming Sakura",
        desc: "Guadagnato ogni volta che Snow-rust è consumato da Frost Rite. Abilita Frost Splinter · Foreclaimed Self quando piena.",
        max: "Max 3 stack"
      },
      {
        name: "Lingering Might",
        desc: "Guadagnato ogni uso di Frost Rite che consuma Snow-rust. Stack fino a 3 volte.",
        max: "Max 3 stack"
      }
    ],

    // ── FORTE CIRCUIT ────────────────────────────────────────────
    forte: [
      {
        title: "Glacio Bite",
        body: "Mentre Hiyuki è in squadra, gli stack di <b>Glacio Chafe</b> applicati da qualsiasi Resonator diventano <b>Glacio Bite</b>. Ogni volta che viene inflitto un nuovo stack, viene attivato un'istanza di <b>Glacio Bite DMG</b> basata sullo stack limit corrente del nemico. Quando <b>Foreclaiming: Inward Vision</b> o <b>Frost Rite</b> viene eseguito su un bersaglio con ≥ 10 stack, consuma 10 stack e attiva <b>Frostbind</b>. Uscendo dalla squadra (senza altri converter), tutti i Glacio Bite vengono azzerati."
      },
      {
        title: "Present Self → Foreclaimed Self",
        body: "Hiyuki inizia in <b>Present Self</b>. Basic Attack Stage 3 e Resonance Skill · Present Self recuperano 100 <b>Dedication</b> ciascuno. Castando <b>Foreclaiming: Inward Vision</b> (Liberation da Present Self), guadagna 3 <b>Snow-rust</b>, rimuove 300 Dedication ed entra in <b>Foreclaimed Self</b>. In Foreclaimed Self, quando Bitterfrost ≥ 100, certe azioni attivano <b>Fudoshin</b> → <b>Frost Rite</b> (Liberation DMG)."
      }
    ],

    // ── NORMAL ATTACK ────────────────────────────────────────────
    normalAttack: {
      title: "Flowing Sakura Blade Art",
      presentSelf: [
        { label: "Basic Attack (5 stage)", desc: "Fino a 5 attacchi consecutivi Glacio. Stage 3 applica 1 stack Glacio Chafe." },
        { label: "Heavy Attack", desc: "Consuma STA, danni Glacio. Se Dedication è piena sostituita da Frost Splinter · Present Self." },
        { label: "Frost Splinter · Present Self", desc: "3 frecce (Dedication piena), ognuna consuma 100 Dedication. Danni Glacio, conta come Liberation DMG. Applica 1 Glacio Chafe. Sblocca Foreclaiming: Inward Vision dopo l'ultima freccia." }
      ],
      foreclaimedSelf: [
        { label: "Basic Attack (5 stage)", desc: "Fino a 5 attacchi Glacio. Stage 3, 4, 5 applicano 1 stack Glacio Chafe ciascuno." },
        { label: "Heavy Attack / Hold", desc: "Hold → Hold Breath (consuma STA). Release o STA vuota → Glacio DMG. Parrying hit: riduce danno 100%, stagger nemici vicini." },
        { label: "Frost Splinter · Foreclaimed Self", desc: "Hold Normal Attack a terra (o in volo per scendere). Consuma STA e 3 Flaming Sakura → danni Glacio (Liberation DMG). Tempo temporaneamente fermo. Guadagna 1 Ringing Frost. Applica 1 Glacio Chafe." },
        { label: "Mid-Air Attack (Stage 1-2)", desc: "Fino a 2 attacchi in volo. Stage 2 applica 1 Glacio Chafe. Il combo non si resetta prima dell'atterraggio o con skill diverse da Frost Rite." },
        { label: "Mid-Air Plunging Attack", desc: "Dopo Mid-Air Stage 2: Normal Attack per plunge, danni Glacio, applica 1 Glacio Chafe." }
      ]
    },

    // ── RESONANCE SKILL ──────────────────────────────────────────
    skills: [
      {
        title: "Frostblight (Resonance Skill · Present Self)",
        tags: [{ label: "Glacio · CD 20s", type: "c" }],
        body: "Infligge danni Glacio, recupera 100 Dedication. Normal Attack entro un certo periodo → Basic Attack Stage 3. Se Dedication < 300, Hold Normal Attack → Basic Attack Stage 3.",
        values: [
          ["Resonance Skill · Present Self (Lv.10)", "21.00% × 4 + 84.00%"]
        ]
      },
      {
        title: "Frostblight: Jade Cleave",
        tags: [{ label: "Glacio · CD 12s (cond. con Petallfall)", type: "c" }],
        body: "A terra: Normal Attack + Skill. Tira i nemici vicini, danni Glacio. Parrying hit entro un certo periodo: danno ridotto <b>100%</b>.",
        values: [
          ["Jade Cleave (Lv.10)", "57.66% × 4"]
        ]
      },
      {
        title: "Frostblight: Petallfall",
        tags: [{ label: "Glacio · CD 12s (cond. con Jade Cleave)", type: "c" }],
        body: "In volo: Resonance Skill. Tira i nemici vicini, danni Glacio. Parrying hit entro un certo periodo: danno ridotto <b>100%</b>.",
        values: [
          ["Petallfall (Lv.10)", "47.72% × 4 + 47.72%"]
        ]
      }
    ],

    // ── RESONANCE LIBERATION ─────────────────────────────────────
    liberation: [
      {
        title: "Foreclaiming: Inward Vision",
        tags: [{ label: "CD 25s", type: "c" }, { label: "No Resonance Energy", type: "g" }],
        body: "Disponibile in <b>Present Self</b> dopo aver completato Frost Splinter · Present Self. Press Liberation → danni Glacio, guadagna 3 <b>Snow-rust</b>, rimuove 300 Dedication, entra in <b>Foreclaimed Self</b>. Applica 4 stack Glacio Chafe. <em>Non consuma Resonance Energy.</em>",
        values: [
          ["Danno (Lv.10)", "397.62%"],
          ["Energia recuperata", "+20"]
        ]
      },
      {
        title: "Foreclaiming: Blade Liberation",
        tags: [{ label: "Liberation · 125 en. · CD 25s", type: "l" }],
        body: "In <b>Foreclaimed Self</b>: Hold Liberation → charging state. Tempo fermo. Resonator switch disabilitato. Dopo 1s consuma 1 Snow-rust, poi 1 ogni 0.7s. Release → danni Glacio. Più Snow-rust consumati = moltiplicatore maggiore. Esce da Foreclaimed Self.",
        values: [
          ["0 Snow-rust (Lv.10)", "99.41% + 397.62%"],
          ["1 Snow-rust", "258.46% + 1033.82%"],
          ["2 Snow-rust", "417.51% + 1670.01%"],
          ["3 Snow-rust", "576.55% + 2306.20%"]
        ]
      }
    ],

    // ── FROST RITE (IAI / FUDOSHIN) ──────────────────────────────
    frostRite: {
      title: "Fudoshin → Frost Rite",
      tags: [{ label: "Liberation DMG", type: "l" }],
      body: "Quando Bitterfrost ≥ 100, Jade Cleave o Petallfall possono sbloccare un Hold Normal Attack / Resonance Skill per entrare in <b>Fudoshin</b> (flash backward o dietro al nemico se si tiene la direzione). In Fudoshin: Normal Attack consuma 100 Bitterfrost → <b>Frost Rite</b> (Glacio Liberation DMG). Se il bersaglio ha ≥ 2 Glacio Bite conta come Liberation DMG. Se si possiede Snow-rust, consuma 1 stack: danno potenziato + 3 Glacio Chafe + 1 Lingering Might. Parrying hit durante Normal Attacks · Foreclaimed Self: danno ridotto 100%.",
      values: [
        ["Con Snow-rust (Lv.10)", "243.35% + 40.56% × 4"],
        ["Senza Snow-rust (Lv.10)", "162.23% + 27.04% × 4"],
        ["Bitterfrost cost", "100 pt"]
      ]
    },

    // ── VARIATION / INTRO / OUTRO ────────────────────────────────
    variation: [
      {
        title: "Frostedge (Intro Skill)",
        tags: [{ label: "Liberation DMG · +10 en.", type: "g" }],
        body: "Danni Glacio (Liberation DMG). Applica 1 stack Glacio Chafe. In Present Self: recupera 100 Dedication. In Foreclaimed Self: Normal Attack successivo → Basic Attack Stage 2.",
        values: [["Danno (Lv.10)", "129.23%"]]
      }
    ],

    // ── INHERENT SKILLS ──────────────────────────────────────────
    inherent: [
      {
        title: "Ringing Frost",
        body: "Quando un Resonator in squadra applica <b>Glacio Chafe</b> o <b>Havoc Bane</b>, Hiyuki guadagna 1 stack di <b>Ringing Frost</b> (max 3, 1 per Resonator). Bonus per stack:<br>· <b>1 stack:</b> Glacio Bite DMG amplificato del 50% contro il bersaglio del Resonator attivo.<br>· <b>2 stack:</b> Crit. DMG Hiyuki +40%; ogni applicazione di Glacio Chafe da parte di Hiyuki aggiunge un'istanza di Glacio Bite DMG (= 100% ATK).<br>· <b>3 stack:</b> Glacio Bite DMG amplificato di un ulteriore 30% contro bersagli vicini al Resonator attivo.<br>Si resetta ad ogni cambio di Resonator."
      },
      {
        title: "Ephemeral Realm",
        body: "Se Hiyuki rimane fuori dal combattimento per più di <b>4s</b> e ha meno di 1 Snow-rust, ripristina Snow-rust."
      }
    ],

    // ── GLOSSARIO TERMINI CHIAVE ─────────────────────────────────
    glossary: [
      {
        term: "Glacio Chafe",
        def: "Infligge Glacio DMG all'applicazione. Ogni stack riduce la velocità di movimento del bersaglio. Al cap (10 stack default) il bersaglio viene <b>frozen</b> e tutti gli stack rimossi. Più stack = più DMG e freeze più lungo."
      },
      {
        term: "Glacio Bite",
        def: "Conversione di Glacio Chafe da parte di Hiyuki. Ogni nuovo stack attiva un'istanza di Glacio Bite DMG. ≥ 10 stack + Inward Vision / Frost Rite → consuma 10 stack e attiva <b>Frostbind</b>."
      },
      {
        term: "Frostbind",
        def: "Il bersaglio non può eseguire azioni per <b>2s</b>."
      },
      {
        term: "Fudoshin",
        def: "Stance attivata da Hold input dopo Jade Cleave / Petallfall (Bitterfrost ≥ 100). Flash backward (o dietro al nemico). In questa stance: Normal Attack → Frost Rite."
      }
    ],

    // ── INTRO / OUTRO ────────────────────────────────────────────
    intro_outro: [
      "Intro — Frostedge: Glacio DMG degli alleati su nemici con Glacio Chafe <b>+20%</b> per 20s",
      "Outro — Snowlight Blessing: Glacio DMG dei Resonator vicini (non Hiyuki) su nemici con Glacio Chafe amplificato del <b>20%</b> per 20s"
    ],

    // ── SEQUENZE / RESONANCE CHAIN ───────────────────────────────
    sequences: [
      {
        num: "S1",
        name: "Springless",
        body: "Moltiplicatori Normal Attacks · Foreclaimed Self (escluso Frost Splinter) +120%. Basic Attack Stage 3 · Foreclaimed Self: range aumentato, tira i nemici vicini al centro."
      },
      {
        num: "S2",
        name: "To Burn Cold in Silence",
        body: "Frost Rite DMG Multiplier +110%. Fuori combattimento >4s: ripristina 3 Snow-rust, resetta CD di 2 cariche di Jade Cleave, +50 Bitterfrost per i prossimi 2 cast di Jade Cleave / Petallfall."
      },
      {
        num: "S3",
        name: "No Self, No Bound",
        body: "+1 Ringing Frost ogni 2s in campo. Rimeblade · Present Self e Rimeblade · Foreclaimed Self +120%. Con 2 Ringing Frost: ogni applicazione Glacio Chafe aumenta il moltiplicatore del Negative Status aggiuntivo +488%."
      },
      {
        num: "S4",
        name: "Like Reeds on Tides",
        body: "Usare Resonance Skill · Present Self, Jade Cleave o Petallfall: danno di tutti i Resonator vicini +20% per 30s."
      },
      {
        num: "S5",
        name: "Vessel of Thousand Wishes",
        body: "Resonance Skill · Present Self, Jade Cleave e Petallfall: DMG Multiplier +80%."
      },
      {
        num: "S6",
        name: "Into a Night Without End",
        body: "Foreclaiming: Inward Vision e Blade Liberation +150%. Con 2 Ringing Frost: l'effetto Glacio Bite su field si estende all'intero team (non solo Hiyuki), Glacio Bite DMG totale +25%, Crit. DMG Hiyuki +40%. Fuori combattimento >4s: ripristina 3 Snow-rust."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // HIYUKI — English version (from official EN transcription)
  // ─────────────────────────────────────────────────────────────

  hiyuki_en: {
    name: "Hiyuki",
    version: "Wuthering Waves · Version 3.3 · Phase I",
    element: "❄ Glacio",
    tags: ["Sword", "Main DPS", "Dual Form"],
    quote: "\"The embodiment of glacial purity. The wishes entrusted to her in brief encounters with others drive her forward, carving a path.\"",
    image: "./assets/Hiyuki_Card_zoom.png",
    video: "./assets/video/hiyuki.mp4",

    stats: {
      hp: "10,300",
      atk: "1,176",
      def: "1,112",
      energyRegen: "100.0%",
      critRate: "5.0%",
      critDmg: "150.0%"
    },

    traces: {
      critRate: "8%",
      atk: "12%",
    },

    weapon: {
      name: "Frostburn",
      sub: "ATK 587 · Crit. Rate +24.3%",
      rank: "Rank 1 — Self No More",
      body: "ATK is increased by <b>12%</b>. When the wielder applies <b>Glacio Chafe</b>, Glacio DMG is amplified by <b>28%</b>, and Resonance Liberation DMG ignores <b>8%</b> of the target's DEF for 6s."
    },

    resources: [
      {
        name: "Dedication",
        desc: "Gained from Basic Attack Stage 3 (Present Self) and Resonance Skill · Present Self (+100 each). Enables Frost Splinter when full.",
        max: "Max 300 pt"
      },
      {
        name: "Bitterfrost",
        desc: "Gained from Normal Attacks · Foreclaimed Self (except Frost Splinter), Frostblight: Jade Cleave and Petallfall (on hit). Enables Fudoshin when ≥ 100.",
        max: "Max 300 pt"
      },
      {
        name: "Snow-rust",
        desc: "Obtained by casting Foreclaiming: Inward Vision (3 stacks). Consumed by Frost Rite to boost its damage, apply 3 stacks of Glacio Chafe and gain 1 Flaming Sakura.",
        max: "Max 3 stacks"
      },
      {
        name: "Flaming Sakura",
        desc: "Gained each time Snow-rust is consumed by Frost Rite. Enables Frost Splinter · Foreclaimed Self when full.",
        max: "Max 3 stacks"
      },
      {
        name: "Lingering Might",
        desc: "Gained each time Frost Rite consumes Snow-rust. Stacks up to 3 times.",
        max: "Max 3 stacks"
      }
    ],

    forte: [
      {
        title: "Glacio Bite",
        body: "While Hiyuki is in the team, <b>Glacio Chafe</b> applied to enemies by any Resonator is converted to <b>Glacio Bite</b>. Every time a new stack is inflicted, an instance of <b>Glacio Bite DMG</b> is triggered based on the enemy's current stack limit. When <b>Foreclaiming: Inward Vision</b> or <b>Frost Rite</b> is performed on a target with ≥ 10 stacks, consume 10 stacks and trigger <b>Frostbind</b>. When Hiyuki leaves the team (without another converter), all Glacio Bite stacks are cleared."
      },
      {
        title: "Present Self → Foreclaimed Self",
        body: "Hiyuki starts in <b>Present Self</b>. Basic Attack Stage 3 and Resonance Skill · Present Self each restore 100 <b>Dedication</b>. Casting <b>Foreclaiming: Inward Vision</b> (Liberation from Present Self) grants 3 <b>Snow-rust</b>, removes 300 Dedication and enters <b>Foreclaimed Self</b>. In Foreclaimed Self, when Bitterfrost ≥ 100, certain actions trigger <b>Fudoshin</b> → <b>Frost Rite</b> (Liberation DMG)."
      }
    ],

    normalAttack: {
      title: "Flowing Sakura Blade Art",
      presentSelf: [
        { label: "Basic Attack (5 stages)", desc: "Up to 5 consecutive Glacio attacks. Stage 3 applies 1 stack of Glacio Chafe." },
        { label: "Heavy Attack", desc: "Consume STA, deal Glacio DMG. Replaced by Frost Splinter · Present Self when Dedication is full." },
        { label: "Frost Splinter · Present Self", desc: "3 arrows (Dedication full), each consuming 100 Dedication. Glacio DMG, counts as Liberation DMG. Applies 1 Glacio Chafe. Unlocks Foreclaiming: Inward Vision after the last arrow." }
      ],
      foreclaimedSelf: [
        { label: "Basic Attack (5 stages)", desc: "Up to 5 Glacio attacks. Stages 3, 4, 5 each apply 1 stack of Glacio Chafe." },
        { label: "Heavy Attack / Hold", desc: "Hold → Hold Breath (consumes STA). Release or STA depleted → Glacio DMG. Parrying hit: reduces damage by 100%, staggers nearby enemies." },
        { label: "Frost Splinter · Foreclaimed Self", desc: "Hold Normal Attack on the ground (or in mid-air to descend). Consumes STA and 3 Flaming Sakura → Glacio DMG (Liberation DMG). Time is temporarily stopped. Gains 1 Ringing Frost. Applies 1 Glacio Chafe." },
        { label: "Mid-Air Attack (Stages 1-2)", desc: "Up to 2 mid-air attacks. Stage 2 applies 1 Glacio Chafe. The combo is not reset before landing or when casting skills other than Frost Rite." },
        { label: "Mid-Air Plunging Attack", desc: "After Mid-Air Stage 2: Normal Attack to plunge, Glacio DMG, applies 1 Glacio Chafe." }
      ]
    },

    skills: [
      {
        title: "Frostblight (Resonance Skill · Present Self)",
        tags: [{ label: "Glacio · CD 20s", type: "c" }],
        body: "Deal Glacio DMG, restore 100 Dedication. Normal Attack within a certain period → Basic Attack Stage 3. If Dedication < 300, Hold Normal Attack → Basic Attack Stage 3.",
        values: [
          ["Resonance Skill · Present Self (Lv.10)", "21.00% × 4 + 84.00%"]
        ]
      },
      {
        title: "Frostblight: Jade Cleave",
        tags: [{ label: "Glacio · CD 12s (shared with Petallfall)", type: "c" }],
        body: "On the ground: Normal Attack + Skill. Pulls nearby targets, deals Glacio DMG. Parrying hit within a certain period: damage reduced by <b>100%</b>.",
        values: [
          ["Jade Cleave (Lv.10)", "57.66% × 4"]
        ]
      },
      {
        title: "Frostblight: Petallfall",
        tags: [{ label: "Glacio · CD 12s (shared with Jade Cleave)", type: "c" }],
        body: "In mid-air: Resonance Skill. Pulls nearby targets, deals Glacio DMG. Parrying hit within a certain period: damage reduced by <b>100%</b>.",
        values: [
          ["Petallfall (Lv.10)", "47.72% × 4 + 47.72%"]
        ]
      }
    ],

    liberation: [
      {
        title: "Foreclaiming: Inward Vision",
        tags: [{ label: "CD 25s", type: "c" }, { label: "No Resonance Energy", type: "g" }],
        body: "Available in <b>Present Self</b> after completing Frost Splinter · Present Self. Press Liberation → Glacio DMG, gain 3 <b>Snow-rust</b>, remove 300 Dedication, enter <b>Foreclaimed Self</b>. Applies 4 stacks of Glacio Chafe. <em>Does not consume Resonance Energy.</em>",
        values: [
          ["Damage (Lv.10)", "397.62%"],
          ["Energy Restored", "+20"]
        ]
      },
      {
        title: "Foreclaiming: Blade Liberation",
        tags: [{ label: "Liberation · 125 en. · CD 25s", type: "l" }],
        body: "In <b>Foreclaimed Self</b>: Hold Liberation → charging state. Time is temporarily stopped. Resonator switching is disabled. After 1s consumes 1 Snow-rust, then 1 every 0.7s. Release → Glacio DMG. More Snow-rust consumed = higher multiplier. Exits Foreclaimed Self.",
        values: [
          ["0 Snow-rust (Lv.10)", "99.41% + 397.62%"],
          ["1 Snow-rust", "258.46% + 1033.82%"],
          ["2 Snow-rust", "417.51% + 1670.01%"],
          ["3 Snow-rust", "576.55% + 2306.20%"]
        ]
      }
    ],

    frostRite: {
      title: "Fudoshin → Frost Rite",
      tags: [{ label: "Liberation DMG", type: "l" }],
      body: "When Bitterfrost ≥ 100, Jade Cleave or Petallfall can unlock a Hold Normal Attack / Resonance Skill to enter <b>Fudoshin</b> (flash backward, or behind the enemy if directional input is held). In Fudoshin: Normal Attack consumes 100 Bitterfrost → <b>Frost Rite</b> (Glacio Liberation DMG). If the target has ≥ 2 Glacio Bite stacks, counts as Liberation DMG. If Snow-rust is held, consume 1 stack: boosted damage + 3 Glacio Chafe + 1 Lingering Might. Parrying hit during Normal Attacks · Foreclaimed Self: damage reduced by 100%.",
      values: [
        ["With Snow-rust (Lv.10)", "243.35% + 40.56% × 4"],
        ["Without Snow-rust (Lv.10)", "162.23% + 27.04% × 4"],
        ["Bitterfrost cost", "100 pt"]
      ]
    },

    variation: [
      {
        title: "Frostedge (Intro Skill)",
        tags: [{ label: "Liberation DMG · +10 en.", type: "g" }],
        body: "Glacio DMG (Liberation DMG). Applies 1 stack of Glacio Chafe. In Present Self: restores 100 Dedication. In Foreclaimed Self: next Normal Attack → Basic Attack Stage 2.",
        values: [["Damage (Lv.10)", "129.23%"]]
      }
    ],

    inherent: [
      {
        title: "Ringing Frost",
        body: "When a Resonator in the team applies <b>Glacio Chafe</b> or <b>Havoc Bane</b>, Hiyuki gains 1 stack of <b>Ringing Frost</b> (max 3, 1 per Resonator). Bonuses per stack:<br>· <b>1 stack:</b> Glacio Bite DMG is amplified by 50% against the active Resonator's target.<br>· <b>2 stacks:</b> Hiyuki's Crit. DMG +40%; each time she applies Glacio Chafe, she additionally deals an instance of Glacio Bite DMG (= 100% ATK).<br>· <b>3 stacks:</b> Glacio Bite DMG is additionally amplified by 30% against targets near the active Resonator.<br>Resets with each Resonator switch."
      },
      {
        title: "Ephemeral Realm",
        body: "If Hiyuki stays out of combat for more than <b>4s</b> and has fewer than 1 Snow-rust, restore Snow-rust."
      }
    ],

    glossary: [
      {
        term: "Glacio Chafe",
        def: "Deals Glacio DMG when inflicted on a target. Each stack reduces the target's movement speed. At the cap (10 stacks by default), the target is <b>frozen</b> and all stacks are removed. More stacks = more DMG and longer freeze duration."
      },
      {
        term: "Glacio Bite",
        def: "Conversion of Glacio Chafe by Hiyuki. Each new stack triggers an instance of Glacio Bite DMG. ≥ 10 stacks + Inward Vision / Frost Rite → consume 10 stacks and trigger <b>Frostbind</b>."
      },
      {
        term: "Frostbind",
        def: "The target cannot perform any actions for <b>2s</b>."
      },
      {
        term: "Fudoshin",
        def: "Stance activated by Hold input after Jade Cleave / Petallfall (Bitterfrost ≥ 100). Flash backward (or behind the enemy). In this stance: Normal Attack → Frost Rite."
      }
    ],

    intro_outro: [
      "Intro — Frostedge: Glacio DMG dealt by allied Resonators against targets with Glacio Chafe <b>+20%</b> for 20s",
      "Outro — Snowlight Blessing: Glacio DMG dealt by nearby Resonators (not Hiyuki) against targets with Glacio Chafe is amplified by <b>20%</b> for 20s"
    ],

    sequences: [
      {
        num: "S1",
        name: "Springless",
        body: "DMG Multipliers of Normal Attacks · Foreclaimed Self (except Frost Splinter) +120%. Basic Attack Stage 3 · Foreclaimed Self: increased range, pulls nearby enemies toward the center."
      },
      {
        num: "S2",
        name: "To Burn Cold in Silence",
        body: "Frost Rite DMG Multiplier +110%. Out of combat >4s: restore 3 Snow-rust, reset CD of 2 charges of Jade Cleave, +50 Bitterfrost for the next 2 casts of Jade Cleave / Petallfall."
      },
      {
        num: "S3",
        name: "No Self, No Bound",
        body: "+1 Ringing Frost every 2s while on the field. Rimeblade · Present Self and Rimeblade · Foreclaimed Self +120%. At 2 Ringing Frost: each Glacio Chafe application increases the additional Negative Status multiplier by +488%."
      },
      {
        num: "S4",
        name: "Like Reeds on Tides",
        body: "Casting Resonance Skill · Present Self, Jade Cleave or Petallfall: damage dealt by all nearby Resonators in the team +20% for 30s."
      },
      {
        num: "S5",
        name: "Vessel of Thousand Wishes",
        body: "Resonance Skill · Present Self, Jade Cleave and Petallfall: DMG Multiplier +80%."
      },
      {
        num: "S6",
        name: "Into a Night Without End",
        body: "Foreclaiming: Inward Vision and Blade Liberation +150%. At 2 Ringing Frost: the Glacio Bite on-field effect extends to the whole team (not just Hiyuki), total Glacio Bite DMG +25%, Hiyuki's Crit. DMG +40%. Out of combat >4s: restore 3 Snow-rust."
      }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  // DENIA — dati in attesa della trascrizione ufficiale
  // ─────────────────────────────────────────────────────────────

  denia: {
    name: "Denia",
    version: "Wuthering Waves · Versione 3.3 · Fase II",
    element: "🔥 Fusion",
    tags: ["Rectifier", "Sub-DPS / Support", "Dual Form"],
    quote: "\"La vedrete a ogni conferenza, a fare cenni come se capisse ogni parola — finché non si addormenta inesorabilmente.\"",
    image: "./assets/Denia_Card_zoom.png",
    video: "./assets/video/denia.mp4",

    // TODO — da aggiornare con trascrizione ufficiale EN
    _transcriptionPending: true,

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

    inherent: [], // da completare con trascrizione

    glossary: [], // da completare con trascrizione

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

const ECHO_SETS = {
  it: [
    {
      name: "Reel of Spliced Memories",
      nameCN: "剪心辑梦之影",
      two: "ATK aumentato del <b>10%</b>.",
      twoCN: "攻击提升10%。",
      five: "Quando un personaggio infligge <b>Tune Rupture - Shifting</b> o <b>Tune Strain - Shifting</b> su un nemico, il Tune Break Boost di tutti i Resonator nel team aumenta di <b>20 punti</b> per 30 secondi. Questo effetto non può essere accumulato con effetti dello stesso nome.",
      fiveCN: "角色为敌人添加【震谐·偏移】或【集谐·偏移】时，队伍中角色谐度破坏增幅提升20点，持续30秒，同名效果之间不可叠加。"
    },
    {
      name: "Wishes of Quiet Snowfall",
      nameCN: "雪落无声之愿",
      two: "Glacio DMG aumentato del <b>10%</b>.",
      twoCN: "冷凝伤害提升10%。",
      five: "Quando un personaggio infligge <b>Glacio Chafe</b> su un nemico, il Glacio DMG aumenta del <b>10%</b> per 15 secondi e il personaggio ottiene l'effetto <b>Snowfall</b>. Questo effetto può essere attivato una volta ogni 25 secondi. Mentre l'effetto Snowfall è attivo:<br>· Quando le skill del personaggio rimuovono con successo almeno 1 stack di <b>Glacio Chafe</b> dal bersaglio, l'effetto Snowfall viene rimosso, aumentando la Crit. Rate del personaggio del <b>25%</b> per 15 secondi.<br>· Dopo che il personaggio usa la Outro Skill, l'effetto Snowfall viene rimosso, aumentando il Glacio DMG del prossimo Resonator che entra in campo tramite Intro Skill del <b>25%</b> per 15 secondi.",
      fiveCN: "角色为敌人添加【霜渐效应】时，冷凝伤害提升10%，持续15秒。自身获得【落雪】效果，该效果每25秒可触发1次。拥有【落雪】效果时：<br>·角色自身技能成功清除目标至少1层【霜渐效应】时，将清除【落雪】效果，使自身暴击提升25%，持续15秒。<br>·角色施放延奏技能后，将清除【落雪】效果，使下一个变奏技能登场的角色冷凝伤害提升25%，持续15秒。"
    }
  ],
  en: [
    {
      name: "Reel of Spliced Memories",
      nameCN: "剪心辑梦之影",
      two: "ATK increased by <b>10%</b>.",
      twoCN: "攻击提升10%。",
      five: "When a character inflicts <b>Tune Rupture - Shifting</b> or <b>Tune Strain - Shifting</b> on an enemy, the Tune Break Boost of all Resonators in the team is increased by <b>20 points</b> for 30 seconds. This effect cannot be stacked with effects of the same name.",
      fiveCN: "角色为敌人添加【震谐·偏移】或【集谐·偏移】时，队伍中角色谐度破坏增幅提升20点，持续30秒，同名效果之间不可叠加。"
    },
    {
      name: "Wishes of Quiet Snowfall",
      nameCN: "雪落无声之愿",
      two: "Glacio DMG increased by <b>10%</b>.",
      twoCN: "冷凝伤害提升10%。",
      five: "When a character inflicts <b>Glacio Chafe</b> on an enemy, their Glacio DMG is increased by <b>10%</b> for 15 seconds, and they gain the <b>Snowfall</b> effect. This effect can be triggered once every 25 seconds. While the Snowfall effect is active:<br>· When the character's own skills successfully remove at least 1 stack of <b>Glacio Chafe</b> from the target, the Snowfall effect is cleared, increasing the character's Crit. Rate by <b>25%</b> for 15 seconds.<br>· After the character casts their Outro Skill, the Snowfall effect is cleared, increasing the Glacio DMG of the next Resonator to enter the field via Intro Skill by <b>25%</b> for 15 seconds.",
      fiveCN: "角色为敌人添加【霜渐效应】时，冷凝伤害提升10%，持续15秒。自身获得【落雪】效果，该效果每25秒可触发1次。拥有【落雪】效果时：<br>·角色自身技能成功清除目标至少1层【霜渐效应】时，将清除【落雪】效果，使自身暴击提升25%，持续15秒。<br>·角色施放延奏技能后，将清除【落雪】效果，使下一个变奏技能登场的角色冷凝伤害提升25%，持续15秒。"
    }
  ]
};
