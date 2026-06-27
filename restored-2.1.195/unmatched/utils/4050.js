// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LMe
// matched 2.1.88 source: src/utils/attachments.ts
// class=new  jaccard=0.0046  score=0.4378  fileCov=0.0046
// note: nearest: src/utils/attachments.ts (0.0046); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var LMe = E(() => {
  wr();
  dr();
});
function Npe(e, t, {
  maxEditDistance: n = 1
} = {}) {
  let r = t.flatMap(i => [i.name, ...(i.aliases ?? [])]),
    o,
    s = n + 1;
  for (let i of r) {
    if (Math.abs(i.length - e.length) > n) continue;
    let a = i8t(e, i);
    if (a < s) s = a, o = i;
  }
  return o;
}
function i8t(e, t) {
  if (e === t) return 0;
  let n = e.length,
    r = t.length,
    o = Array.from({
      length: n + 1
    }, (s, i) => Array.from({
      length: r + 1
    }, (a, l) => i === 0 ? l : l === 0 ? i : 0));
  for (let s = 1; s <= n; s++) for (let i = 1; i <= r; i++) {
    let a = e[s - 1] === t[i - 1] ? 0 : 1;
    if (o[s][i] = Math.min(o[s - 1][i] + 1, o[s][i - 1] + 1, o[s - 1][i - 1] + a), s > 1 && i > 1 && e[s - 1] === t[i - 2] && e[s - 2] === t[i - 1]) o[s][i] = Math.min(o[s][i], o[s - 2][i - 2] + 1);
  }
  return o[n][r];
}
function DMe() {
  return ut(process.env.CLAUDE_CODE_SYNC_SKILLS);
}
function prl(e) {
  let t,
    n = new Promise(r => {
      t = r;
    });
  return C6n.set(e, {
    promise: n,
    resolve: t
  }), t;
}
function I6n(e) {
  let t = C6n.get(e);
  return t ? t.promise : Promise.resolve({
    ok: true
  });
}
function frl(e) {
  D8e.set(e.name, e);
}
function mrl(e) {
  D8e.delete(e);
}
function grl(e) {
  return D8e.get(e.name) === e;
}
function hrl(e) {
  let t = 0;
  for (let n of D8e.keys()) if (!e.has(n)) D8e.delete(n), t++;
  for (let n of C6n.keys()) if (!e.has(n)) C6n.delete(n);
  return t;
}
function yrl() {
  return D8e.size === 0 ? [] : Array.from(D8e.values());
}
var C6n, D8e;