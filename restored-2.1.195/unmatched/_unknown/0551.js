// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module o_s
// matched 2.1.88 source: node_modules/whatwg-url/lib/url-state-machine.js
// class=new  jaccard=0.0128  score=0.7857  fileCov=0.0128
// note: nearest: node_modules/whatwg-url/lib/url-state-machine.js (0.0128); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module o_s]
ESu = new Set(["localhost"]), HSu = {
  http: 80,
  https: 443,
  ws: 80,
  wss: 443,
  ftp: 21
};
function vSu(e, t) {
  e = e || 10;
  let n = Array(e),
    r = Array(e),
    o = 0,
    s = 0,
    i;
  return t = t !== void 0 ? t : 1000, function (l) {
    let c = Date.now(),
      u = r[s];
    if (!i) i = c;
    n[o] = l, r[o] = c;
    let d = s,
      p = 0;
    while (d !== o) p += n[d++], d = d % e;
    if (o = (o + 1) % e, o === s) s = (s + 1) % e;
    if (c - i < t) return;
    let f = u && c - u;
    return f ? Math.round(p * 1000 / f) : void 0;
  };
}
var s_s;