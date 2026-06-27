// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HEa
// matched 2.1.88 source: node_modules/@inquirer/input/dist/esm/index.mjs
// class=partial  jaccard=0.1825  score=0.9105  fileCov=0.1858
// note: low-confidence suggestion: node_modules/@inquirer/input/dist/esm/index.mjs; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module HEa] deps: DBn
sE = G5e((e, t) => {
  let {
      transformer: n = p => p ? "yes" : "no"
    } = e,
    [r, o] = Q1("idle"),
    [s, i] = Q1(""),
    a = RSe(e.theme),
    l = F5e({
      status: r,
      theme: a
    });
  j5e((p, f) => {
    if (Yut(p)) {
      let m = e.default !== false;
      if (/^(y|yes)/i.test(s)) m = true;else if (/^(n|no)/i.test(s)) m = false;
      i(n(m)), o("done"), t(m);
    } else i(f.line);
  });
  let c = s,
    u = "";
  if (r === "done") c = a.style.answer(s);else u = ` ${a.style.defaultAnswer(e.default === false ? "y/N" : "Y/n")}`;
  let d = a.style.message(e.message, r);
  return `${l} ${d}${u} ${c}`;
});
var Oy;