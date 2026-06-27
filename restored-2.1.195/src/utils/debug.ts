// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module je
// matched 2.1.88 source: src/utils/debug.ts
// class=modified  jaccard=0.181  score=0.4715  fileCov=0.2271
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var je = E(() => {
  Qi();
  ft();
  Rm();
  fd();
  Prs();
  fn();
  At();
  ys();
  ED();
  zH();
  Jt();
  ((bB = require("fs/promises")),
    (Kge = require("path")),
    (qEr = {
      verbose: 0,
      debug: 1,
      info: 2,
      warn: 3,
      error: 4,
    }),
    (HUe = Cn(() => {
      let e = process.env.CLAUDE_CODE_DEBUG_LOG_LEVEL?.toLowerCase().trim();
      if (e && Object.hasOwn(qEr, e)) return e;
      return "debug";
    })));
  vO = Cn(() => {
    let e = qin();
    return (
      bis ||
      ut(process.env.DEBUG) ||
      ut(process.env.DEBUG_SDK) ||
      e.includes("--debug") ||
      e.includes("-d") ||
      wO() ||
      e.some((t) => t.startsWith("--debug=")) ||
      XJe() !== null
    );
  });
  ((YEr = Cn(() => {
    let e = qin().find((n) => n.startsWith("--debug="));
    if (!e) return null;
    let t = e.substring(8);
    return Lrs(t);
  })),
    (wO = Cn(() => {
      let e = qin();
      return e.includes("--debug-to-stderr") || e.includes("-d2e");
    })),
    (XJe = Cn(() => {
      let e = qin();
      for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (n.startsWith("--debug-file=")) return _is(n.substring(13));
        if (n === "--debug-file" && t + 1 < e.length) return _is(e[t + 1]);
      }
      return null;
    })));
  Gin = Promise.resolve();
  tAr = Cn(async () => {
    try {
      let e = Yge(),
        t = Kge.dirname(e),
        n = Kge.join(t, "latest");
      (await bB.unlink(n).catch(() => {}), await bB.symlink(e, n));
    } catch {}
  });
});
function vis() {
  if (!oAr)
    oAr = new Intl.DisplayNames(["en"], {
      type: "language",
    });
  return oAr;
}
function BS() {
  if (!nAr)
    nAr = new Intl.Segmenter(void 0, {
      granularity: "grapheme",
    });
  return nAr;
}
function zIt(e) {
  if (!e) return "";
  return BS().segment(e)[Symbol.iterator]().next().value?.segment ?? "";
}
function GK(e) {
  if (!e) return "";
  let t = "";
  for (let { segment: n } of BS().segment(e)) t = n;
  return t;
}
function TUe(e) {
  if (!e) return 0;
  let t = 0;
  for (let n of BS().segment(e)) t++;
  return t;
}
function zin(e) {
  if (!e) return [];
  return Array.from(BS().segment(e), (t) => t.segment);
}
function iAr() {
  if (!rAr)
    rAr = new Intl.Segmenter(void 0, {
      granularity: "word",
    });
  return rAr;
}
function wis(e) {
  let t = e.trim();
  if (t === "") return 0;
  let n = t.split(/\s+/).length,
    r = 0;
  for (let o of iAr().segment(t)) if (o.isWordLike) r++;
  return Math.max(n, r);
}
function aAr(e, t) {
  let n = `${e}:${t}`,
    r = Ais.get(n);
  if (!r)
    ((r = new Intl.RelativeTimeFormat("en", {
      style: e,
      numeric: t,
    })),
      Ais.set(n, r));
  return r;
}
function KIt() {
  if (!sAr) sAr = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return sAr;
}
function Cis() {
  if (Vin === null)
    try {
      let e = Intl.DateTimeFormat().resolvedOptions().locale;
      Vin = new Intl.Locale(e).language;
    } catch {
      Vin = void 0;
    }
  return Vin;
}
function x7c(e) {
  if (!e) return "";
  let t = His.get(e);
  if (t !== void 0) return t;
  let n = Object.entries(e).sort(([o], [s]) => (o < s ? -1 : o > s ? 1 : 0)),
    r = "";
  for (let [o, s] of n) r += `${o}=${String(s)};`;
  return (His.set(e, r), r);
}
function Kin(e, t) {
  let n = `${e ?? ""}|${x7c(t)}`,
    r = Tis.get(n);
  if (!r) ((r = new Intl.DateTimeFormat(e, t)), Tis.set(n, r));
  return r;
}
var nAr = null,
  rAr = null,
  oAr = null,
  Ais,
  sAr = null,
  Vin = null,
  His,
  Tis;
