// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module RF
// matched 2.1.88 source: src/utils/diff.ts
// class=modified  jaccard=0.4422  score=0.7556  fileCov=0.5161
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function q8n(e, t) {
  if (t === 0) return e;
  return e.map((n) => ({
    ...n,
    oldStart: n.oldStart + t,
    newStart: n.newStart + t,
  }));
}
function M9t(e) {
  return e.replaceAll("&", AMPERSAND_TOKEN).replaceAll("$", DOLLAR_TOKEN);
}
function Eel(e) {
  return e.replaceAll(AMPERSAND_TOKEN, "&").replaceAll(DOLLAR_TOKEN, "$");
}
function countLinesChanged(e, t, n) {
  let r = 0,
    o = 0;
  if (e.length === 0 && n) r = (n.match(/\n/g)?.length ?? 0) + 1;
  else
    ((r = e.reduce((s, i) => s + On(i.lines, (a) => a.startsWith("+")), 0)),
      (o = e.reduce((s, i) => s + On(i.lines, (a) => a.startsWith("-")), 0)));
  (esn(r, o),
    lsn()?.add(r, {
      type: "added",
      model: t,
    }),
    lsn()?.add(o, {
      type: "removed",
      model: t,
    }),
    G("tengu_file_changed", {
      lines_added: r,
      lines_removed: o,
    }));
}
function yMe({
  filePath: e,
  oldContent: t,
  newContent: n,
  ignoreWhitespace: r = false,
  singleHunk: o = false,
  convertTabs: s = false,
}) {
  let i = s ? (l) => M9t(dY(l)) : M9t,
    a = but(e, e, i(t), i(n), void 0, void 0, {
      ignoreWhitespace: r,
      context: o ? 100000 /* 1e5 */ : Kht,
      timeout: W8n,
    });
  if (!a) return [];
  return a.hunks.map((l) => ({
    ...l,
    lines: l.lines.map(Eel),
  }));
}
function j6({ filePath: e, fileContents: t, edits: n, ignoreWhitespace: r = false }) {
  let o = M9t(dY(t)),
    s = but(
      e,
      e,
      o,
      n.reduce((i, a) => {
        let { old_string: l, new_string: c } = a,
          u = "replace_all" in a ? a.replace_all : false,
          d = M9t(dY(l)),
          p = M9t(dY(c));
        if (u) return i.replaceAll(d, () => p);
        else return i.replace(d, () => p);
      }, o),
      void 0,
      void 0,
      {
        context: Kht,
        ignoreWhitespace: r,
        timeout: W8n,
      },
    );
  if (!s) return [];
  return s.hunks.map((i) => ({
    ...i,
    lines: i.lines.map(Eel),
  }));
}
var Kht = 3,
  W8n = 5000,
  AMPERSAND_TOKEN = "<<:AMPERSAND_TOKEN:>>",
  DOLLAR_TOKEN = "<<:DOLLAR_TOKEN:>>";
