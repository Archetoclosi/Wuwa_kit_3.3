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
      "Intro — Frostedge: Deal Glacio DMG, considered Resonance Liberation DMG, and apply 1 stack of **Glacio Chafe** on hit. In **Present Self**, casting this skill restores 100 points of **Dedication**. In **Foreclaimed Self**, press **Normal Attack** within a certain period after casting this skill to cast **Basic Attack - Foreclaimed Self Stage 2**.",
      "Outro — Snowlight Blessing: Glacio DMG dealt by nearby Resonators other than Hiyuki in the team is Amplified by 20% against targets affected by **Glacio Chafe** for 20s."
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
        desc: "Hiyuki holds up to 300 points of Dedication. While in Present Self, casting Basic Attack — Present Self Stage 3 and Resonance Skill — Present Self restores 100 points of Dedication.",
        max: "Max 300 pt"
      },
      {
        name: "Bitterfrost",
        desc: "Hiyuki holds up to 300 points of Bitterfrost. Casting Normal Attacks — Foreclaimed Self other than Frost Splinter: Foreclaimed Self, Frostblight: Jade Cleave, and Frostblight: Petallfall restores Bitterfrost on hit.",
        max: "Max 300 pt"
      },
      {
        name: "Snow-rust",
        desc: "A maximum of 3 points. Casting Foreclaiming: Inward Vision grants 3 points of Snow-rust.",
        max: "Max 3 stacks"
      },
      {
        name: "Flaming Sakura",
        desc: "Flaming Sakura stacks up to 3 times. Each time Snow-rust is consumed through Frost Rite, gain 1 stack of Flaming Sakura.",
        max: "Max 3 stacks"
      },
      {
        name: "Lingering Might",
        desc: "Lingering Might stacks up to 3 times. Each time Snow-rust is consumed through Frost Rite, gain 1 stack of Lingering Might.",
        max: "Max 3 stacks"
      }
    ],

    forte: [
      {
        title: "Glacio Bite",
        body: "While Hiyuki is in the team, <b>Glacio Chafe</b> applied to enemies by any Resonator is converted to <b>Glacio Bite</b>. Every time a new stack of Glacio Bite is inflicted on a target, an instance of Glacio Bite DMG is triggered based on that enemy's current <b>Glacio Bite stack limit</b>. When <b>Foreclaiming: Inward Vision</b> or <b>Frost Rite</b> is performed, if the target has no fewer than 10 stacks of Glacio Bite, consume 10 stacks of Glacio Bite and trigger <b>Frostbind</b> once. When Hiyuki joins the team, remove all stacks of <b>Glacio Chafe</b> from the targets. When Hiyuki leaves the team, if there is no other Resonator in the team who can convert Glacio Chafe into Glacio Bite, all enemies' Glacio Bite stacks are cleared."
      },
      {
        title: "Present Self",
        body: "Hiyuki starts in <b>Present Self</b>. While in Present Self, casting <b>Basic Attack — Present Self Stage 3</b> or <b>Resonance Skill — Present Self</b> restores 100 points of <b>Dedication</b>."
      },
      {
        title: "Foreclaimed Self",
        body: "Hiyuki enters <b>Foreclaimed Self</b> after casting <b>Foreclaiming: Inward Vision</b>."
      }
    ],

    normalAttack: {
      title: "Flowing Sakura Blade Art",
      presentSelf: [
        { label: "Basic Attack — Present Self (5 stages)", desc: "Perform up to 5 consecutive attacks, dealing Glacio DMG. Basic Attack — Present Self Stage 3 applies 1 stack of Glacio Chafe on hit." },
        { label: "Heavy Attack — Present Self", desc: "Consume STA to deal Glacio DMG. Press Normal Attack within a certain period after casting this skill to cast Basic Attack — Present Self Stage 3." },
        { label: "Frost Splinter — Present Self", desc: "When Dedication is full, Heavy Attack — Present Self is replaced with Frost Splinter — Present Self. Shoot out 3 arrows one by one at the cost of STA, each consuming 100 points of Dedication to deal Glacio DMG, considered Resonance Liberation DMG. Frost Splinter — Present Self applies 1 stack of Glacio Chafe on hit. Foreclaiming: Inward Vision unlocks when the last arrow hits or is blocked by a target." },
        { label: "Mid-Air Attack — Present Self", desc: "Consume STA to perform a Plunging Attack from mid-air, dealing Glacio DMG." },
        { label: "Dodge Counter — Present Self", desc: "Press Normal Attack within a certain period after dodging to attack the target, dealing Glacio DMG. Press Normal Attack within a certain period after casting this skill to perform Basic Attack — Present Self Stage 3." }
      ],
      foreclaimedSelf: [
        { label: "Basic Attack — Foreclaimed Self (5 stages)", desc: "Perform up to 5 consecutive attacks, dealing Glacio DMG. Basic Attack — Foreclaimed Self Stage 3, 4, and 5 each apply 1 stack of Glacio Chafe on hit." },
        { label: "Heavy Attack — Foreclaimed Self", desc: "In Foreclaimed Self, hold Normal Attack to enter Hold Breath, continuously consuming STA. When Normal Attack is released or STA is depleted, Heavy Attack — Foreclaimed Self will be cast automatically, dealing Glacio DMG. Press Normal Attack within a certain period after casting this skill to perform Basic Attack — Foreclaimed Self Stage 2. If Hiyuki is attacked by an enemy within a certain period during Heavy Attack — Foreclaimed Self, that instance of damage is reduced by 100%, and nearby targets are staggered. Press Normal Attack within a certain period after casting this skill to chain into Basic Attack — Foreclaimed Self Stage 4 instead." },
        { label: "Frost Splinter: Foreclaimed Self", desc: "When Flaming Sakura is full, Heavy Attack — Foreclaimed Self is replaced with Frost Splinter: Foreclaimed Self. Hold Normal Attack while on the ground to cast this skill. While airborne, hold Normal Attack to descend and then cast this skill. Consume STA and 3 points of Flaming Sakura to deal Glacio DMG, considered Resonance Liberation DMG. Time is temporarily stopped during this move. Casting this skill grants 1 stack of Ringing Frost. Frost Splinter: Foreclaimed Self applies 1 stack of Glacio Chafe on hit." },
        { label: "Mid-Air Attack — Foreclaimed Self (Stages 1–2)", desc: "Consume STA to perform up to 2 consecutive attacks in mid-air, dealing Glacio DMG. Mid-Air Attack — Foreclaimed Self Stage 2 applies 1 stack of Glacio Chafe on hit. The Mid-Air Attack — Foreclaimed Self combo will not be reset before Hiyuki lands on the ground or if skills other than Frost Rite are cast within a short period. Press Normal Attack within a certain period after casting Mid-Air Attack — Foreclaimed Self Stage 2 to perform Mid-Air Plunging Attack — Foreclaimed Self." },
        { label: "Mid-Air Plunging Attack — Foreclaimed Self", desc: "Consume STA to descend from mid-air and perform a Plunging Attack, dealing Glacio DMG. Mid-Air Plunging Attack — Foreclaimed Self applies 1 stack of Glacio Chafe on hit." },
        { label: "Dodge Counter — Foreclaimed Self", desc: "Press Normal Attack within a certain period after dodging to attack the target, dealing Glacio DMG. Press Normal Attack within a certain period after casting this skill to perform Basic Attack — Foreclaimed Self Stage 2." }
      ]
    },

    skills: [
      {
        title: "Frostblight — Resonance Skill · Present Self",
        tags: [{ label: "Glacio · CD 20s", type: "c" }],
        body: "Deal Glacio DMG. In Present Self, casting this skill restores 100 points of Dedication. Press Normal Attack within a certain period after casting this skill to perform Basic Attack — Present Self Stage 3. If Dedication is below 300 points, hold Normal Attack within a certain period after casting this skill to perform Basic Attack — Present Self Stage 3.",
        values: [
          ["Resonance Skill · Present Self (Lv.10)", "21.00% × 4 + 84.00%"]
        ]
      },
      {
        title: "Frostblight: Jade Cleave",
        tags: [{ label: "Glacio · CD 12s (shared with Petallfall)", type: "c" }],
        body: "While on the ground, press Normal Attack + Resonance Skill to pull in nearby targets and deal Glacio DMG. If Hiyuki is attacked by an enemy within a certain period during Frostblight: Jade Cleave, that instance of damage is reduced by <b>100%</b>. This skill shares a Cooldown with Frostblight: Petallfall.",
        values: [
          ["Jade Cleave (Lv.10)", "57.66% × 4"]
        ]
      },
      {
        title: "Frostblight: Petallfall",
        tags: [{ label: "Glacio · CD 12s (shared with Jade Cleave)", type: "c" }],
        body: "While in mid-air, press Resonance Skill to pull in nearby targets and deal Glacio DMG. If Hiyuki is attacked by an enemy within a certain period during Frostblight: Petallfall, that instance of damage is reduced by <b>100%</b>. This skill shares a Cooldown with Frostblight: Jade Cleave.",
        values: [
          ["Petallfall (Lv.10)", "47.72% × 4 + 47.72%"]
        ]
      }
    ],

    liberation: [
      {
        title: "Foreclaiming: Inward Vision",
        tags: [{ label: "CD 25s", type: "c" }, { label: "No Resonance Energy", type: "g" }],
        body: "Foreclaiming: Inward Vision becomes available when Hiyuki is in <b>Present Self</b>. While in Present Self, press Resonance Liberation to cast this skill, dealing Glacio DMG. Upon casting this skill, gain 3 points of <b>Snow-rust</b>, remove 300 points of <b>Dedication</b>, and enter <b>Foreclaimed Self</b>. Foreclaiming: Inward Vision applies 4 stacks of <b>Glacio Chafe</b> on hit. <em>Casting Foreclaiming: Inward Vision does not consume Resonance Energy.</em>",
        values: [
          ["Damage (Lv.10)", "397.62%"],
          ["Energy Restored", "+20"]
        ]
      },
      {
        title: "Foreclaiming: Blade Liberation",
        tags: [{ label: "Liberation · 125 en. · CD 25s", type: "l" }],
        body: "While in <b>Foreclaimed Self</b>, hold Resonance Liberation to enter a charging state. During this state, time is temporarily stopped. <b>Resonator switching is disabled.</b> After 1s, 1 point of <b>Snow-rust</b> is consumed, then 1 additional point is consumed every 0.7s thereafter. Release Resonance Liberation to deal Glacio DMG. Each point of Snow-rust consumed while charging the attack increases the DMG Multiplier of this attack. After casting, exit Foreclaimed Self.",
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
      body: "If Hiyuki has at least 100 points of Bitterfrost, performing any of the following actions causes her to flash backward and enter <b>Fudoshin</b>: Hold Normal Attack within a certain period after casting <b>Frostblight: Jade Cleave</b> or <b>Frostblight: Petallfall</b>; Hold Resonance Skill within a certain period after casting <b>Frostblight: Jade Cleave</b> or <b>Frostblight: Petallfall</b>. While in Fudoshin, if a direction and the forward input is held down, Hiyuki instead flashes behind the enemy and enters Fudoshin. While in Fudoshin, press Normal Attack and consume 100 points of Bitterfrost to cast <b>Frost Rite</b>, dealing Glacio DMG. If the target has no fewer than 2 stacks of Glacio Bite, considered Resonance Liberation DMG. If Bitterfrost remains at 100 points or above after casting this skill, press Normal Attack within a certain period to cast Frost Rite again. If Hiyuki already has Snow-rust, consume 1 stack of Snow-rust to increase the DMG Multiplier of this Frost Rite, apply 3 stacks of <b>Glacio Chafe</b> on hit, and gain 1 stack of <b>Lingering Might</b>. If Hiyuki is attacked by an enemy within a certain period after casting any Normal Attacks — Foreclaimed Self, that instance of damage is reduced by 100%.",
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
        body: "Deal Glacio DMG, considered Resonance Liberation DMG, and apply 1 stack of <b>Glacio Chafe</b> on hit. In Present Self, casting this skill restores 100 points of <b>Dedication</b>. In Foreclaimed Self, press Normal Attack within a certain period after casting this skill to cast Basic Attack — Foreclaimed Self Stage 2.",
        values: [["Damage (Lv.10)", "129.23%"]]
      }
    ],

    inherent: [
      {
        title: "Ringing Frost",
        body: "When a Resonator in the team applies <b>Glacio Chafe</b> or <b>Havoc Bane</b>, Hiyuki gains 1 stack of <b>Ringing Frost</b>, up to 3 stacks. Each Resonator can trigger this effect only once. Based on the number of stacks of Ringing Frost, the following bonuses are unlocked:<br>· <b>1 stack:</b> Glacio Bite DMG is amplified by 50% against targets against active Resonator.<br>· <b>2 stacks:</b> Hiyuki's Crit. DMG is increased by 40%. While Hiyuki is on the field, each time she applies Glacio Chafe, she additionally deals an instance of Glacio Bite DMG equal to 100% of her ATK.<br>· <b>3 stacks:</b> Glacio Bite DMG is additionally amplified by 30% against targets around the active Resonator.<br>This effect resets when new Resonators are switched in."
      },
      {
        title: "Ephemeral Realm",
        body: "When Hiyuki stays out of combat for more than <b>4s</b> and has fewer than 1 point of Snow-rust, restore Snow-rust."
      }
    ],

    glossary: [
      {
        term: "Glacio Chafe",
        def: "Glacio Chafe deals Glacio DMG when being inflicted on a target. Each stack of Glacio Chafe reduces the target's movement speed. When Glacio Chafe is stacked to its max, the target will be frozen, and all stacks of Glacio Chafe will be removed. Struggle to accelerate your recovery from the frozen state. Glacio Chafe stacks up to 10 times by default. The higher the stacks, the more DMG dealt, and the longer frozen duration."
      },
      {
        term: "Frostbind",
        def: "Targets in this state cannot perform any actions within the duration. The effect lasts for 2s."
      },
      {
        term: "Present Self",
        def: "Hiyuki starts in Present Self. While in Present Self, casting Basic Attack — Present Self Stage 3 or Resonance Skill — Present Self restores 100 points of Dedication."
      },
      {
        term: "Dedication",
        def: "Hiyuki holds up to 300 points of Dedication. While in Present Self, casting Basic Attack — Present Self Stage 3 and Resonance Skill — Present Self restores 100 points of Dedication."
      },
      {
        term: "Foreclaimed Self",
        def: "Casting Foreclaiming: Inward Vision causes Hiyuki to enter Foreclaimed Self."
      }
    ],

    tuneBreak: "Tune Break — Sword: When the target's Off-Tune Level is full, the Resonator may cast Tune Break on the target.",

    intro_outro: [
      "Intro — Frostedge: Deal Glacio DMG (Liberation DMG), apply 1 stack of Glacio Chafe on hit. In Present Self: restores 100 Dedication. In Foreclaimed Self: chains to Basic Attack — Foreclaimed Self Stage 2.",
      "Outro — Snowlight Blessing: Glacio DMG dealt by nearby Resonators other than Hiyuki in the team is amplified by 20% against targets affected by <b>Glacio Chafe</b> for 20s."
    ],

    sequences: [
      {
        num: "S1",
        name: "Springless",
        body: "The DMG Multipliers of <b>Normal Attacks — Foreclaimed Self</b> other than <b>Frost Splinter: Foreclaimed Self</b> are increased by 120%. Basic Attack — Foreclaimed Self Stage 3 now has an increased range and pulls enemies within range toward the center once."
      },
      {
        num: "S2",
        name: "To Burn Cold in Silence",
        body: "<b>Frost Rite's</b> DMG Multiplier is increased by 110%. After staying out of combat for more than 4s, the following effects are triggered: restore 3 points of Snow-rust; reset the Cooldown of 2 charges of <b>Frostblight: Jade Cleave</b>; restore an additional 50 points of Bitterfrost for the next 2 casts of <b>Frostblight: Jade Cleave</b> or <b>Frostblight: Petallfall</b>."
      },
      {
        num: "S3",
        name: "No Self, No Bound",
        body: "Every 2s after joining the team, gain 1 stack of <b>Ringing Frost</b>. The DMG Multipliers of <b>Rimeblade: Present Self</b> and <b>Rimeblade: Foreclaimed Self</b> are increased by 120%. At 2 stacks of Ringing Frost, while Hiyuki is on the field, the DMG Multiplier of the additional Negative Statuses applied each time she inflicts <b>Glacio Chafe</b> is increased by 488%."
      },
      {
        num: "S4",
        name: "Like Reeds on Tides",
        body: "Casting <b>Resonance Skill — Present Self</b>, <b>Frostblight: Jade Cleave</b>, or <b>Frostblight: Petallfall</b> increases the damage dealt by all nearby Resonators in the team by 20% for 30s."
      },
      {
        num: "S5",
        name: "Vessel of Thousand Wishes",
        body: "The DMG Multipliers of <b>Resonance Skill — Present Self</b>, <b>Frostblight: Jade Cleave</b>, and <b>Frostblight: Petallfall</b> are increased by 80%."
      },
      {
        num: "S6",
        name: "Into a Night Without End",
        body: "The DMG Multipliers of <b>Foreclaiming: Inward Vision</b> and <b>Foreclaiming: Blade Liberation</b> are increased by 150%. At 2 stacks of <b>Ringing Frost</b>, the effect \"While Hiyuki is on the field, each time she applies Glacio Chafe, she additionally deals an instance of Glacio Bite DMG\" changes to \"While Hiyuki is on the field, each time a Resonator in the team applies Glacio Chafe, she additionally deals an instance of Glacio Bite DMG\". At 2 stacks of Ringing Frost, the total Glacio Bite DMG enemies around the active Resonator take is increased by 25%. At 2 stacks of Ringing Frost, Hiyuki's Crit. DMG is increased by 40%. After staying out of combat for more than 4s, restore 3 points of Snow-rust."
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
