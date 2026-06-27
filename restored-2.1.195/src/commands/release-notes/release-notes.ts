// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module KKe
// matched 2.1.88 source: src/commands/release-notes/release-notes.ts
// class=modified  jaccard=0.1073  score=0.1367  fileCov=0.3334
// note: deminified; 4 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: formatVersion, formatAll, call, ReleaseNotesPicker
// [unwrapped __esm module KKe] deps: ft, Rx, db, er, je, fn, At, vn, qd, sr
((BXt = require("path")), (Yrr = R(Uj(), 1)));
var VGl = {};
function formatVersion(e, t) {
  let n = `Version ${e}:`,
    r = t.map((o) => `\xB7 ${o}`).join(`
`);
  return `${n}
${r}`;
}
function formatAll(e) {
  return e
    .slice()
    .sort(([t], [n]) => (cH(t, n) ? 1 : -1))
    .map(([t, n]) => formatVersion(t, n)).join(`

`);
}
async function call(e) {
  try {
    let r = new Promise((o, s) => setTimeout((i) => i(Error("Timeout")), 500, s));
    await Promise.race([AFo(), r]);
  } catch {}
  let t = await UXt(),
    n = Jrr(t)
      .slice()
      .sort(([r], [o]) => (cH(r, o) ? -1 : 1));
  if (n.length === 0)
    return (
      e(`See the full changelog at: ${OGl}`, {
        display: "system",
      }),
      null
    );
  return YKe.jsx(ReleaseNotesPicker, {
    notes: n,
    onDone: e,
  });
}
function ReleaseNotesPicker(e) {
  let t = GGl.c(20),
    { notes: n, onDone: r } = e,
    o = `${n.length} versions`,
    s;
  if (t[0] !== o)
    ((s = {
      label: "Show all",
      description: o,
      value: jGl,
    }),
      (t[0] = o),
      (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] !== n || t[3] !== s) ((i = [s, ...n.map(Y2f)]), (t[2] = n), (t[3] = s), (t[4] = i));
  else i = t[4];
  let a = i,
    l;
  if (t[5] !== n || t[6] !== r)
    ((l = function (h) {
      if (h === jGl) {
        r(formatAll(n), {
          display: "system",
        });
        return;
      }
      let y = n.find((b) => {
        let [_] = b;
        return _ === h;
      });
      if (!y) {
        r(void 0, {
          display: "skip",
        });
        return;
      }
      r(formatVersion(y[0], y[1]), {
        display: "system",
      });
    }),
      (t[5] = n),
      (t[6] = r),
      (t[7] = l));
  else l = t[7];
  let c = l,
    u;
  if (t[8] !== r)
    ((u = () =>
      r(void 0, {
        display: "skip",
      })),
      (t[8] = r),
      (t[9] = u));
  else u = t[9];
  let d;
  if (t[10] === Symbol.for("react.memo_cache_sentinel"))
    ((d = YKe.jsx(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: YKe.jsx(w, {
        dimColor: true,
        children: "Select a version to view its notes.",
      }),
    })),
      (t[10] = d));
  else d = t[10];
  let p;
  if (t[11] !== r)
    ((p = () =>
      r(void 0, {
        display: "skip",
      })),
      (t[11] = r),
      (t[12] = p));
  else p = t[12];
  let f;
  if (t[13] !== c || t[14] !== a || t[15] !== p)
    ((f = YKe.jsx(Sr, {
      options: a,
      visibleOptionCount: 10,
      onChange: c,
      onCancel: p,
    })),
      (t[13] = c),
      (t[14] = a),
      (t[15] = p),
      (t[16] = f));
  else f = t[16];
  let m;
  if (t[17] !== u || t[18] !== f)
    ((m = YKe.jsxs(zn, {
      title: "Release notes",
      onCancel: u,
      children: [d, f],
    })),
      (t[17] = u),
      (t[18] = f),
      (t[19] = m));
  else m = t[19];
  return m;
}
function Y2f(e) {
  let [t, n] = e;
  return {
    label: `Version ${t}`,
    description: `${n.length} ${n.length === 1 ? "item" : "items"}`,
    value: t,
  };
}
var GGl,
  YKe,
  jGl = "__show_all__";
