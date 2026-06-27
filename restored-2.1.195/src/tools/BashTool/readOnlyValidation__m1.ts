// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Zvl
// matched 2.1.88 source: src/tools/BashTool/readOnlyValidation.ts
// class=modified (alt of src/tools/BashTool/readOnlyValidation.ts)  jaccard=0.0292  score=0.3015  fileCov=0.0313
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Zvl] deps: sN, ys, Hu
((VEf = /^(\d+),(\d+)p$/), (zEf = /^(\d+)p$/), (KEf = /^\s*(echo|printf|true|:)\b/));
JEf = new Map([
  ["cat", new Set(["-n", "--number"])],
  ["nl", new Set()],
  ["bat", new Set(["-n", "--number", "-p", "--plain"])],
  ["batcat", new Set(["-n", "--number", "-p", "--plain"])],
]);
((tAf = /^-[niwxEFGPHh]+$/),
  (nAf = /^-[ABC]\d+$/),
  (rAf = /^--(?:after-context|before-context|context)=\d+$/),
  (oAf = new Set([
    "--line-number",
    "--ignore-case",
    "--word-regexp",
    "--line-regexp",
    "--extended-regexp",
    "--fixed-strings",
    "--basic-regexp",
    "--perl-regexp",
    "--with-filename",
    "--no-filename",
    "--color=never",
    "--color=auto",
  ])));
((iAf = /^-[iSswxFnNHUP]+$/),
  (aAf = /^-[ABC]\d+$/),
  (lAf = /^--(?:after-context|before-context|context)=\d+$/),
  (cAf = new Set([
    "--ignore-case",
    "--smart-case",
    "--case-sensitive",
    "--word-regexp",
    "--line-regexp",
    "--fixed-strings",
    "--line-number",
    "--no-line-number",
    "--with-filename",
    "--no-filename",
    "--multiline",
    "--pcre2",
  ])));
function LJn(e) {
  let t = [
    {
      frac: e.sizeBytes / e.byteCap,
      over: e.sizeBytes >= e.byteCap,
      sizeDesc: Ra(e.sizeBytes),
      capDesc: Ra(e.byteCap),
      targetDesc: Ra(Math.floor(e.byteCap * ewl)),
    },
  ];
  if (e.lineCap !== void 0 && e.lineCount !== void 0)
    t.push({
      frac: e.lineCount / e.lineCap,
      over: e.lineCount >= e.lineCap,
      sizeDesc: `${e.lineCount} lines`,
      capDesc: `${e.lineCap}-line`,
      targetDesc: `${Math.floor(e.lineCap * ewl)} lines`,
    });
  let n = t.reduce((o, s) => (s.frac > o.frac ? s : o));
  if (n.frac < dAf) return null;
  let r = n.over
    ? `over the ${n.capDesc} read limit \u2014 content beyond that is dropped when this index is loaded`
    : `approaching the ${n.capDesc} read limit`;
  return `The ${e.label} at ${e.displayPath} is ${n.sizeDesc}, ${r}. Compact it to under ${n.targetDesc} now: keep one line per entry, move detail into topic files, and merge or drop stale entries.`;
}
var dAf = 0.8,
  ewl = 0.7;
