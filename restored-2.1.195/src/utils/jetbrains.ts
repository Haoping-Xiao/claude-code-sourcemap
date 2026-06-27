// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZIa
// matched 2.1.88 source: src/utils/jetbrains.ts
// class=modified  jaccard=0.427  score=0.8312  fileCov=0.4675
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ZIa] deps: ys
((x3t = require("os")),
  (eN = require("path")),
  (JIa = {
    pycharm: ["PyCharm"],
    intellij: ["IntelliJIdea", "IdeaIC"],
    webstorm: ["WebStorm"],
    phpstorm: ["PhpStorm"],
    rubymine: ["RubyMine"],
    clion: ["CLion"],
    goland: ["GoLand"],
    rider: ["Rider"],
    datagrip: ["DataGrip"],
    appcode: ["AppCode"],
    dataspell: ["DataSpell"],
    aqua: ["Aqua"],
    gateway: ["Gateway"],
    fleet: ["Fleet"],
    androidstudio: ["AndroidStudio"],
  }));
qdo = new Map();
function iE(e) {
  let t = exa.c(4),
    { children: n, color: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = gqe.jsx(U, {
      width: 2,
      flexShrink: 0,
      children: gqe.jsx(w, {
        children: nt.bullet,
      }),
    })),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== n || t[2] !== r)
    ((s = gqe.jsxs(U, {
      flexDirection: "row",
      children: [
        o,
        gqe.jsx(U, {
          flexGrow: 1,
          flexShrink: 1,
          children: gqe.jsx(w, {
            color: r,
            children: n,
          }),
        }),
      ],
    })),
      (t[1] = n),
      (t[2] = r),
      (t[3] = s));
  else s = t[3];
  return s;
}
var exa, gqe;
