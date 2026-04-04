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
  // DANIA — dati dal .md ufficiale (IT + EN)
  // ─────────────────────────────────────────────────────────────

  denia: {
    name: "Dania",
    version: "Wuthering Waves · Versione 3.3 · Fase II",
    element: "🔥 Fusion",
    tags: ["Rectifier", "Sub-DPS / Support", "Dual Form"],
    quote: "\"La vedrete a ogni conferenza, a fare cenni come se capisse ogni parola — finché non si addormenta inesorabilmente.\"",
    image: "./assets/Denia_Card_zoom.png",
    video: "./assets/video/denia.mp4",

    modes: [
      {
        key: "burst",
        title: "⚡ Modalità di Risonanza: Esplosione",
        body: "Certe abilità applicano <b>2 pile di Effetto Esplosivo</b> ai nemici (ogni abilità può applicare l'effetto a uno stesso bersaglio una volta ogni 2 s). Quando un personaggio in campo lancia una Liberazione di risonanza o un attacco base, Dania ottiene pile di <b>Precisione • Virtuale</b> (fino a 5). Usando un attacco esteso mentre possiede tali pile ne consuma tutte e aumenta il danno del <b>100%</b> per quell'attacco."
      },
      {
        key: "harmony",
        title: "🎵 Modalità di Risonanza: Ensemble",
        body: "Certe abilità applicano <b>1 pila di Ensemble • Sfasamento</b> ai bersagli e rinfrescano la durata di <b>Ensemble • Interferenza</b> (una volta ogni 2 s per abilità). Se un bersaglio ha Ensemble • Interferenza, ogni punto di incremento della Rottura Concerto di Dania aumenta il danno finale contro quel bersaglio dello <b>0,12%</b>, fino al 50% del valore massimo della sua barra di vibrazione (effetto su uno stesso bersaglio una volta ogni 300 s)."
      }
    ],

    resources: [
      {
        name: "Nucleo di Scaglia",
        desc: "Con gli stati Guscio o Desiderio si ottiene un Nucleo ogni 12 s. Usare le abilità di introduzione fornisce un Nucleo aggiuntivo. Potenzia Esilio in Forma di Spettro.",
        max: "Max 5"
      },
      {
        name: "Particelle Virtuali",
        desc: "In Forma di Scena, gli attacchi base e l'abilità di risonanza (Bolla Bollente) generano Particelle Virtuali. Usare Saluto dopo Molto Tempo! o Sonno Incantato conferisce 25 Particelle; Tocco Delicato ne conferisce 100. In Forma di Spettro i Normal Atk le consumano: +50% danno (conta Liberation), acquisizione Cenere +100%.",
        max: "Max 100 pt"
      },
      {
        name: "Cenere",
        desc: "In Forma di Spettro, gli attacchi base e l'abilità di risonanza Richiamo Soffice generano Cenere. L'esecuzione del secondo colpo di Esilio fornisce 40 Cenere. Richiesta piena per Atto Finale · Forma di Spettro.",
        max: "Max 100 pt"
      }
    ],

    forte: [
      {
        title: "Soglia Vorace",
        body: "Dopo aver lanciato <b>Atto Finale · Forma di Spettro</b>, si crea Soglia Vorace per 30 s. Ogni 4 s attacca i nemici vicini infliggendo danno Fusion (trattato come danno da Liberazione di risonanza). Danno per attivazione (Lv.10): <b>113,61%</b>."
      },
      {
        title: "Particelle Virtuali — Effetto in Forma di Spettro",
        body: "In Forma di Spettro, se si possiedono Particelle Virtuali, gli attacchi base consumano tali particelle trasformandosi in <b>danno da Liberazione di risonanza</b> con un bonus del <b>50%</b> e raddoppiando la velocità con cui si ottiene <b>Cenere</b>."
      }
    ],

    normalAttack: {
      title: "Banchetto dei Sogni Intessuti",
      stageSetting: [
        { label: "Attacco base · Forma di Scena (4 colpi)", desc: "Fino a quattro colpi consecutivi che infliggono danno Fusion." },
        { label: "Attacco potente · Forma di Scena", desc: "Consuma vigore per sferrare un colpo circolare ai nemici vicini infliggendo danno Fusion." },
        { label: "Attacco aereo · Forma di Scena", desc: "Consuma vigore per scagliarsi verso il basso infliggendo danno Fusion." },
        { label: "Contrattacco dopo schivata · Forma di Scena", desc: "Dopo una schivata riuscita, premere l'attacco base per contrattaccare infliggendo danno Fusion; premendolo nuovamente entro un intervallo si lancia automaticamente il quarto colpo della combo." }
      ],
      spectre: [
        { label: "Attacco base · Forma di Spettro (4 colpi)", desc: "Fino a quattro colpi consecutivi che infliggono danno Fusion." },
        { label: "Attacco potente · Forma di Spettro", desc: "Consuma vigore per attirare i nemici vicini infliggendo danno Fusion." },
        { label: "Attacco aereo · Forma di Spettro", desc: "Consuma vigore per eseguire fino a quattro fendenti aerei infliggendo danno Fusion." },
        { label: "Attacco in caduta · Forma di Spettro", desc: "Tenere premuto l'attacco base in aria per precipitare infliggendo danno Fusion." },
        { label: "Contrattacco dopo schivata · Forma di Spettro", desc: "Dopo una schivata riuscita, premere l'attacco base per contrattaccare infliggendo danno Fusion; premendo ancora si lancia il quarto colpo della combo in Forma di Spettro." }
      ]
    },

    skills: [
      {
        title: "Bolla Sonnecchiante — Bolla Bollente · Forma di Scena / Sonno Incantato · Forma di Scena",
        tags: [{ label: "Fusion · CD 12s · +4 energia", type: "f" }],
        body: "<b>Bolla Bollente · Forma di Scena</b>: attira i nemici vicini infliggendo danno Fusion.<br><b>Sonno Incantato · Forma di Scena</b>: quando Dania possiede almeno un <b>Nucleo di Scaglia</b> e le sue <b>Particelle Virtuali</b> non sono al massimo, Bolla Bollente si trasforma in questa abilità. L'attivazione consuma un Nucleo di Scaglia, infligge danno Fusion e genera Particelle Virtuali.",
        values: [
          ["Bolla Bollente / Sonno Incantato (Scena) (Lv.10)", "17,42% ×3 + 52,25%"]
        ]
      },
      {
        title: "Bolla Sonnecchiante — Richiamo Soffice · Forma di Spettro / Esilio · Forma di Spettro",
        tags: [{ label: "Fusion · CD 12s · +4 energia", type: "f" }],
        body: "<b>Richiamo Soffice · Forma di Spettro</b>: attira i nemici vicini infliggendo danno Fusion.<br><b>Esilio · Forma di Spettro</b>: quando Dania possiede Nuclei di Scaglia, Richiamo Soffice diventa questa abilità. Effettua fino a due attacchi consecutivi; il secondo consuma tutti i Nuclei di Scaglia, attira i nemici e infligge danno Fusion. Il moltiplicatore del secondo colpo aumenta del 50/200/350/500/650% se vengono consumati rispettivamente 1/2/3/4/5 Nuclei. Questo attacco è considerato danno da Liberazione di risonanza.",
        values: [
          ["Richiamo Soffice (Spettro) (Lv.10)", "31,10% + 14,52% ×5"],
          ["Esilio 1° colpo (Lv.10)", "34,68% ×3"],
          ["Esilio 2° colpo (Lv.10)", "112,01%"],
          ["Bonus 2° colpo per Nuclei (1/2/3/4/5)", "+50% / +200% / +350% / +500% / +650%"]
        ]
      }
    ],

    liberation: [
      {
        title: "Atto Finale · Forma di Scena",
        tags: [{ label: "125 en. · CD 20s", type: "f" }, { label: "Guscio 8s", type: "b" }],
        body: "Infligge danno Fusion. Dopo il lancio, Dania ottiene <b>Guscio</b> per 8 s e passa automaticamente alla Forma di Spettro. Può essere usata anche in aria.<br><b>Guscio</b>: aumenta l'ATT del 30%. Ottenere questo effetto rimuove Desiderio.",
        values: [
          ["Danno (Lv.10)", "397,62%"]
        ]
      },
      {
        title: "Atto Finale · Forma di Spettro",
        tags: [{ label: "125 en. · CD 20s", type: "l" }, { label: "Desiderio 30s", type: "h" }],
        body: "Quando la barra <b>Splendore</b> (Cenere) è piena, Dania può consumare vigore e Splendore per attivare questa abilità. Infligge danno Fusion e concede lo stato <b>Desiderio</b> per 30 s, poi torna alla Forma di Scena. Può essere usata in aria.<br><b>Desiderio</b>: rigenera una Particella Virtuale al secondo. Ottenere questo effetto rimuove Guscio.",
        values: [
          ["Danno (Lv.10)", "198,81% ×4"]
        ]
      }
    ],

    variation: [
      {
        title: "Visita Cortese — Saluto dopo Molto Tempo! (Scena) / Tocco Delicato (Spettro)",
        tags: [{ label: "+10 energia · +1 Nucleo di Scaglia", type: "g" }],
        body: "<b>Saluto dopo Molto Tempo!</b>: usata in Forma di Scena per infliggere danno Fusion. Conferisce 25 Particelle Virtuali e +1 Nucleo di Scaglia.<br><b>Tocco Delicato</b>: usata in Forma di Spettro per infliggere danno Fusion e ottenere il Guscio per 8 s. Conferisce 100 Particelle Virtuali e +1 Nucleo di Scaglia.",
        values: [
          ["Saluto dopo Molto Tempo! (Lv.10)", "104,62%"],
          ["Tocco Delicato (Lv.10)", "51,74% ×3"]
        ]
      }
    ],

    inherent: [
      {
        title: "Trama Impeccabile — Modalità di Risonanza: Esplosione",
        body: "Le seguenti abilità applicano due pile di <b>Effetto Esplosivo</b> (ogni abilità una volta ogni 2 s per bersaglio):<br>· Abilità di introduzione <em>Saluto dopo Molto Tempo!</em> e <em>Tocco Delicato</em><br>· Liberazioni di risonanza <em>Atto Finale</em> (entrambe le forme) e Soglia Vorace<br>· Bolla Bollente (Scena) 1° e 2° colpo<br>· Attacco aereo (Spettro) 3° e 4° colpo<br>· Attacco base (Scena) 3° e 4° colpo<br>· Attacco base (Spettro) 3° e 4° colpo<br>Quando un personaggio in campo lancia una Liberazione di risonanza o un attacco base, Dania ottiene pile di <b>Precisione • Virtuale</b> (max 5). Usando un attacco esteso mentre possiede tali pile ne consuma tutte e aumenta il danno del <b>100%</b> per quell'attacco."
      },
      {
        title: "Trama Impeccabile — Modalità di Risonanza: Ensemble",
        body: "Le seguenti abilità applicano una pila di <b>Ensemble • Sfasamento</b> ai bersagli e rinfrescano la durata di <b>Ensemble • Interferenza</b> (una volta ogni 2 s per abilità):<br>· Abilità di introduzione <em>Saluto dopo Molto Tempo!</em> e <em>Tocco Delicato</em><br>· Liberazioni di risonanza <em>Atto Finale</em> (entrambe le forme) e Soglia Vorace<br>· Attacco base (Scena) 3° e 4° colpo<br>· Attacco base (Spettro) 3° e 4° colpo<br>Se un bersaglio ha Ensemble • Interferenza, ogni punto di incremento della Rottura Concerto di Dania aumenta il danno finale contro quel bersaglio dello <b>0,12%</b>, fino al 50% del valore massimo della sua barra di vibrazione (effetto una volta ogni 300 s)."
      }
    ],

    glossary: [
      {
        term: "Guscio",
        def: "Aumenta l'ATT del 30%. Ottenere questo effetto rimuove Desiderio."
      },
      {
        term: "Desiderio",
        def: "Rigenera una Particella Virtuale al secondo. Ottenere questo effetto rimuove Guscio."
      },
      {
        term: "Nucleo di Scaglia",
        def: "Max 5. Si ottiene 1 ogni 12 s sotto Guscio o Desiderio, +1 usando le abilità di introduzione. Potenzia il 2° colpo di Esilio: +50/200/350/500/650% con 1/2/3/4/5 Nuclei consumati."
      },
      {
        term: "Effetto Esplosivo",
        def: "Applicato da certe abilità in Modalità Esplosione (2 pile per abilità, una volta ogni 2 s per bersaglio). Aumenta il danno che il bersaglio riceve."
      },
      {
        term: "Ensemble • Sfasamento / Interferenza",
        def: "In Modalità Ensemble: Sfasamento applicato da certe abilità, rinfresca Interferenza. Con Interferenza attiva: Rottura Concerto di Dania aumenta il danno finale del 0,12% per punto di amplificazione (max 50% della barra di vibrazione, una volta ogni 300 s per bersaglio)."
      },
      {
        term: "Precisione • Virtuale",
        def: "Ottenuta quando un personaggio in campo usa Liberazione di risonanza o attacco base (max 5 pile). Usare un attacco esteso mentre si possiedono queste pile le consuma tutte e aumenta il danno del 100%."
      }
    ],

    intro_outro: [
      "Abilità di uscita — <b>Menzogna Incompiuta</b> in Modalità di Esplosione: aumenta del 40% i danni dell'Effetto Esplosivo subiti dai nemici colpiti dai personaggi in campo per 30 s.",
      "Abilità di uscita — <b>Menzogna Incompiuta</b> in Modalità di Ensemble: garantisce al prossimo personaggio che entra in campo un bonus del 15% al danno totale per 16 s; quando quel personaggio applica Ensemble • Sfasamento, il bonus sale al 40%. Cambiare personaggio termina l'effetto in anticipo.",
      "Rottura Concerto — <b>Fine del Tempo</b>: in Modalità di Ensemble applica anche Ensemble • Sfasamento e rinfresca Ensemble • Interferenza. Ogni pila di Ensemble • Sfasamento aumenta il danno finale di Dania verso quel bersaglio dello 0,12% per punto di amplificazione. Con Dania in squadra, i nemici possono accumulare un livello extra di Ensemble • Interferenza."
    ],

    sequences: [
      {
        num: "S1",
        name: "Cielo — Vuoto",
        body: "Danno da Colpo Critico +30%. Dania è insensibile alle interruzioni mentre lancia Sonno Incantato o Esilio. Entrando in battaglia in Forma di Scena ottiene Desiderio per 30 s; entrando in Forma di Spettro ottiene Guscio per 30 s."
      },
      {
        num: "S2",
        name: "Perché Darmi Consolazione",
        body: "In Modalità di Esplosione, i nemici colpiti dagli alleati subiscono il 50% di danni dell'Effetto Esplosivo in più per 15 s. In Modalità di Ensemble, il bonus al danno totale dato dall'applicazione di Ensemble • Sfasamento raddoppia."
      },
      {
        num: "S3",
        name: "Ontano Rosso tra Notte e Vento",
        body: "Atto Finale · Spettro infligge l'80% di danno in più. L'intervallo per ottenere un Nucleo di Scaglia si riduce a 6 s. In Forma di Scena, quando gli alleati raccolgono Particelle Virtuali, il loro limite massimo aumenta di 20 per 15 s; in Forma di Spettro, la Cenere ottenuta dai raccolti è raddoppiata."
      },
      {
        num: "S4",
        name: "Da Lontano, Di Ritorno al Lontano",
        body: "L'intervallo degli attacchi di Soglia Vorace si riduce a 3 s."
      },
      {
        num: "S5",
        name: "Se le Menzogne Potessero Ricucire un Cuore",
        body: "Atto Finale · Scena infligge il 100% di danni in più."
      },
      {
        num: "S6",
        name: "Nel Silenzio, Che tu Possa Trovare il Sole",
        body: "In Modalità di Esplosione, ogni abilità può applicare quattro pile aggiuntive di Effetto Esplosivo una volta ogni 4 s. In Modalità di Ensemble, ogni applicazione di Ensemble • Sfasamento prolunga la durata di Guscio e Desiderio; se a farlo è Dania, i bersagli subiscono il 40% in più di danni dell'Effetto Esplosivo."
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