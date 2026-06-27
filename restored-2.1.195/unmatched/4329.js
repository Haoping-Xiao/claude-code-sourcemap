// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nyl
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Nyl = E(() => {
  Xr();
  ql();
  Ye();
  ii();
  Jt();
  K6e = R(se(), 1);
});
function wmf() {
  if (X7n) return X7n;
  return X7n = new Bun.Transpiler({
    loader: "js",
    replMode: !0
  }), X7n;
}
function J7n(e) {
  let t = wmf(),
    n = t.transformSync(e);
  return Imf(t, e), n;
}
function Imf(e, t) {
  let n;
  try {
    n = e.scanImports(t.replace(/^#!.*\n?/, ""));
  } catch {
    return;
  }
  for (let {
    kind: r
  } of n) {
    let o = Cmf[r];
    if (!o) continue;
    throw Error(`Module loading (${o}) is not available in REPL \u2014 the vm context is sealed. ` + "Use the tool globals instead: await Read({file_path: '...'}), await Glob({pattern: '...'}), the registered shell tool, etc.");
  }
}
function Q7n(e) {
  if (e === null || typeof e !== "object") return e;
  if (Byl.types.isProxy(e)) return e;
  let t = Object.getOwnPropertyDescriptor(e, "value");
  return t && "value" in t ? t.value : e;
}
var Byl, X7n, Cmf;