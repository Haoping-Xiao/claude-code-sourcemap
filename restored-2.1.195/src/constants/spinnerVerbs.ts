// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tgo
// matched 2.1.88 source: src/constants/spinnerVerbs.ts
// class=modified  jaccard=0.7989  score=0.8291  fileCov=0.9564
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tgo] deps: dr
ego = [
  "Accomplishing",
  "Actioning",
  "Actualizing",
  "Architecting",
  "Baking",
  "Beaming",
  "Beboppin'",
  "Befuddling",
  "Billowing",
  "Blanching",
  "Bloviating",
  "Boogieing",
  "Boondoggling",
  "Booping",
  "Bootstrapping",
  "Brewing",
  "Bunning",
  "Burrowing",
  "Calculating",
  "Canoodling",
  "Caramelizing",
  "Cascading",
  "Catapulting",
  "Cerebrating",
  "Channeling",
  "Channelling",
  "Choreographing",
  "Churning",
  "Clauding",
  "Coalescing",
  "Cogitating",
  "Combobulating",
  "Composing",
  "Computing",
  "Concocting",
  "Considering",
  "Contemplating",
  "Cooking",
  "Crafting",
  "Creating",
  "Crunching",
  "Crystallizing",
  "Cultivating",
  "Deciphering",
  "Deliberating",
  "Determining",
  "Dilly-dallying",
  "Discombobulating",
  "Doing",
  "Doodling",
  "Drizzling",
  "Ebbing",
  "Effecting",
  "Elucidating",
  "Embellishing",
  "Enchanting",
  "Envisioning",
  "Evaporating",
  "Fermenting",
  "Fiddle-faddling",
  "Finagling",
  "Flamb\xE9ing",
  "Flibbertigibbeting",
  "Flowing",
  "Flummoxing",
  "Fluttering",
  "Forging",
  "Forming",
  "Frolicking",
  "Frosting",
  "Gallivanting",
  "Galloping",
  "Garnishing",
  "Generating",
  "Gesticulating",
  "Germinating",
  "Gitifying",
  "Grooving",
  "Gusting",
  "Harmonizing",
  "Hashing",
  "Hatching",
  "Herding",
  "Honking",
  "Hullaballooing",
  "Hyperspacing",
  "Ideating",
  "Imagining",
  "Improvising",
  "Incubating",
  "Inferring",
  "Infusing",
  "Ionizing",
  "Jitterbugging",
  "Julienning",
  "Kneading",
  "Leavening",
  "Levitating",
  "Lollygagging",
  "Manifesting",
  "Marinating",
  "Meandering",
  "Metamorphosing",
  "Misting",
  "Moonwalking",
  "Moseying",
  "Mulling",
  "Mustering",
  "Musing",
  "Nebulizing",
  "Nesting",
  "Newspapering",
  "Noodling",
  "Nucleating",
  "Orbiting",
  "Orchestrating",
  "Osmosing",
  "Perambulating",
  "Percolating",
  "Perusing",
  "Philosophising",
  "Photosynthesizing",
  "Pollinating",
  "Pondering",
  "Pontificating",
  "Pouncing",
  "Precipitating",
  "Prestidigitating",
  "Processing",
  "Proofing",
  "Propagating",
  "Puttering",
  "Puzzling",
  "Quantumizing",
  "Razzle-dazzling",
  "Razzmatazzing",
  "Recombobulating",
  "Reticulating",
  "Roosting",
  "Ruminating",
  "Saut\xE9ing",
  "Scampering",
  "Schlepping",
  "Scurrying",
  "Seasoning",
  "Shenaniganing",
  "Shimmying",
  "Simmering",
  "Skedaddling",
  "Sketching",
  "Slithering",
  "Smooshing",
  "Sock-hopping",
  "Spelunking",
  "Spinning",
  "Sprouting",
  "Stewing",
  "Sublimating",
  "Swirling",
  "Swooping",
  "Symbioting",
  "Synthesizing",
  "Tempering",
  "Thinking",
  "Thundering",
  "Tinkering",
  "Tomfoolering",
  "Topsy-turvying",
  "Transfiguring",
  "Transmuting",
  "Twisting",
  "Undulating",
  "Unfurling",
  "Unravelling",
  "Vibing",
  "Waddling",
  "Wandering",
  "Warping",
  "Whatchamacalliting",
  "Whirlpooling",
  "Whirring",
  "Whisking",
  "Wibbling",
  "Working",
  "Wrangling",
  "Zesting",
  "Zigzagging",
];
function dEe(e) {
  return uEe.getState()[e ?? ls()] ?? VGt;
}
function RMa(e) {
  let t = e ?? ls();
  return pjn.useSyncExternalStore(uEe.subscribe, () => uEe.getState()[t] ?? VGt);
}
function LMa(e) {
  return pjn.useSyncExternalStore(
    uEe.subscribe,
    () => (uEe.getState()[e] ?? VGt).thinkingStartedAt,
  );
}
function MDe(e, t) {
  uEe.setState((n) => {
    let r = e in n,
      o = n[e] ?? {
        ...VGt,
        defaultVerb: HL(zpt()) ?? "",
      },
      s = t(o);
    if (s === o && r) return n;
    return {
      ...n,
      [e]: s,
    };
  });
}
function fjn(e) {
  uEe.setState((t) => {
    if (!(e in t)) return t;
    let { [e]: n, ...r } = t;
    return r;
  });
}
function Ade(e) {
  function t(u) {
    let d = Date.now();
    MDe(e, (p) =>
      p.mode === u
        ? p
        : {
            ...p,
            mode: u,
            thinkingStartedAt: u === "thinking" ? d : null,
          },
    );
  }
  function n(u) {
    MDe(e, (d) =>
      d.overrideMessage === u
        ? d
        : {
            ...d,
            overrideMessage: u,
          },
    );
  }
  function r(u, d) {
    MDe(e, (p) =>
      p.overrideColor === u && p.overrideShimmerColor === d
        ? p
        : {
            ...p,
            overrideColor: u,
            overrideShimmerColor: d,
          },
    );
  }
  function o(u) {
    MDe(e, (d) =>
      d.turnEffort === u
        ? d
        : {
            ...d,
            turnEffort: u,
          },
    );
  }
  function s(u) {
    MDe(e, (d) =>
      d.retryStatus === u
        ? d
        : {
            ...d,
            retryStatus: u,
          },
    );
  }
  function i(u, d = null) {
    let p = Date.now();
    MDe(e, (f) => {
      if (f.isCompacting === u && f.compactingHintText === d) return f;
      let m = u ? (f.compactingStartTime ?? p) : null;
      return {
        ...f,
        isCompacting: u,
        compactingHintText: d,
        compactingStartTime: m,
      };
    });
  }
  function a() {
    MDe(e, (u) =>
      u.overrideMessage === null &&
      u.overrideColor === null &&
      u.overrideShimmerColor === null &&
      !u.isCompacting &&
      u.compactingHintText === null &&
      u.compactingStartTime === null
        ? u
        : {
            ...u,
            overrideMessage: null,
            overrideColor: null,
            overrideShimmerColor: null,
            isCompacting: false,
            compactingHintText: null,
            compactingStartTime: null,
          },
    );
  }
  function l() {
    let u = HL(zpt()) ?? "";
    MDe(e, (d) => ({
      ...d,
      overrideMessage: null,
      overrideColor: null,
      overrideShimmerColor: null,
      isCompacting: false,
      compactingHintText: null,
      compactingStartTime: null,
      turnEffort: null,
      retryStatus: null,
      defaultVerb: u,
    }));
  }
  function c(u) {
    switch (u.type) {
      case "hooks_start":
        (r("claudeBlue_FOR_SYSTEM_SPINNER", "claudeBlueShimmer_FOR_SYSTEM_SPINNER"),
          n(
            u.hookType === "pre_compact"
              ? "Running PreCompact hooks\u2026"
              : u.hookType === "post_compact"
                ? "Running PostCompact hooks\u2026"
                : "Running SessionStart hooks\u2026",
          ));
        return;
      case "compact_start":
        (n("Compacting conversation"), i(true, u.hintText ?? null));
        return;
      case "compact_end":
        a();
        return;
    }
  }
  return {
    setMode: t,
    setMessage: n,
    setColors: r,
    setTurnEffort: o,
    setRetryStatus: s,
    setCompacting: i,
    resetCompactionState: a,
    resetOverrides: l,
    applyCompactProgress: c,
  };
}
function zGt(e) {
  Ade(ls()).setMode(e);
}
function ngo(e) {
  Ade(ls()).setMessage(e);
}
function DMa(e) {
  Ade(ls()).setTurnEffort(e);
}
function PMa(e) {
  Ade(ls()).setRetryStatus(e);
}
function MMa(e) {
  return pjn.useSyncExternalStore(uEe.subscribe, () => (uEe.getState()[e] ?? VGt).retryStatus);
}
function $Ma() {
  Ade(ls()).resetOverrides();
}
function OMa(e) {
  Ade(ls()).applyCompactProgress(e);
}
var pjn, VGt, uEe;
