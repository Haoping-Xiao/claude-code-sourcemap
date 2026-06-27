// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module S9e
// matched 2.1.88 source: src/utils/staticRender.tsx
// class=partial  jaccard=0.2344  score=0.7144  fileCov=0.2586
// note: low-confidence suggestion: src/utils/staticRender.tsx; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var S9e = E(() => {
  kt();
  vy();
  aS();
  dn();
  iza();
  H0();
  uza();
});
function Lzp() {}
function V_(e) {
  let t = dza.c(5),
    {
      children: n
    } = e,
    {
      exit: r
    } = TW(),
    o,
    s;
  if (t[0] !== r) o = () => {
    let a = setTimeout(r, 0);
    return () => clearTimeout(a);
  }, s = [r], t[0] = r, t[1] = o, t[2] = s;else o = t[1], s = t[2];
  pza.useLayoutEffect(o, s);
  let i;
  if (t[3] !== n) i = ygt.jsx(ygt.Fragment, {
    children: n
  }), t[3] = n, t[4] = i;else i = t[4];
  return i;
}
async function _gt(e, t) {
  let n = "",
    r = false,
    o = new fza.PassThrough();
  if (t !== void 0) o.columns = t;
  return o.on("data", i => {
    if (r) return;
    r = true, n = i.toString();
  }), await (await b8(ygt.jsx(V_, {
    children: ygt.jsx(CLn, {
      value: Lzp,
      children: e
    })
  }), {
    stdout: o,
    patchConsole: false
  })).waitUntilExit(), n;
}
async function mza(e, t) {
  let n = await _gt(e, t);
  return Ja(n);
}
var dza, pza, fza, ygt;