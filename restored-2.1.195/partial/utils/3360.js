// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Omo
// matched 2.1.88 source: src/utils/bash/prefix.ts
// class=partial  jaccard=0.2398  score=0.8064  fileCov=0.2544
// note: low-confidence suggestion: src/utils/bash/prefix.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Omo] deps: screens/REPL.tsx, utils/bash/registry.ts
DDe = JC(async e => $mo.find(n => n.name === e) || (await P0p(e)) || null, e => e);
function $0p(e, t) {
  if (!t?.subcommands?.length) return false;
  return t.subcommands.some(n => Array.isArray(n.name) ? n.name.includes(e) : n.name === e);
}
async function UGt(e, t = 0, n = 0) {
  if (n > 2 || t > 10) return null;
  let r = await _On(e);
  if (!r) return null;
  if (!r.commandNode) return {
    commandPrefix: null
  };
  let {
      envVars: o,
      commandNode: s
    } = r,
    i = A2t(s),
    [a, ...l] = i;
  if (!a) return {
    commandPrefix: null
  };
  let c = await DDe(a),
    u = M0p.has(a) || c?.args && V2n(c.args).some(f => f?.isCommand);
  if (u && l[0] && $0p(l[0], c)) u = false;
  let d = u ? await O0p(a, l, t, n) : await q2n(a, l, c);
  if (d === null && t === 0 && u) return null;
  let p = o.length ? `${o.join(" ")} ` : "";
  return {
    commandPrefix: d ? p + d : null
  };
}
async function O0p(e, t, n, r) {
  let o = await DDe(e);
  if (o?.args) {
    let a = V2n(o.args).findIndex(l => l?.isCommand);
    if (a !== -1) {
      let l = [e];
      for (let c = 0; c < t.length && c <= a; c++) if (c === a) {
        let u = await UGt(t.slice(c).join(" "), n + 1, r + 1);
        if (u?.commandPrefix) return l.push(...u.commandPrefix.split(" ")), l.join(" ");
        break;
      } else if (t[c] && !t[c].startsWith("-") && !UPa.test(t[c])) l.push(t[c]);
    }
  }
  let s = t.find(a => !a.startsWith("-") && !FPa.test(a) && !UPa.test(a));
  if (!s) return e;
  let i = await UGt(t.slice(t.indexOf(s)).join(" "), n + 1, r + 1);
  return !i?.commandPrefix ? null : `${e} ${i.commandPrefix}`;
}
async function jPa(e, t) {
  let n = By(e);
  if (n.length <= 1) {
    let i = await UGt(e);
    return i?.commandPrefix ? [i.commandPrefix] : [];
  }
  let r = [];
  for (let i of n) {
    let a = i.trim();
    if (t?.(a)) continue;
    let l = await UGt(a);
    if (l?.commandPrefix) r.push(l.commandPrefix);
  }
  if (r.length === 0) return [];
  let o = new Map();
  for (let i of r) {
    let a = bi(i, " "),
      l = o.get(a);
    if (l) l.push(i);else o.set(a, [i]);
  }
  let s = [];
  for (let [, i] of o) s.push(N0p(i));
  return s;
}
function N0p(e) {
  if (e.length === 0) return "";
  if (e.length === 1) return e[0];
  let n = e[0].split(" "),
    r = n.length;
  for (let o = 1; o < e.length; o++) {
    let s = e[o].split(" "),
      i = 0;
    while (i < r && i < s.length && n[i] === s[i]) i++;
    r = i;
  }
  return n.slice(0, Math.max(1, r)).join(" ");
}
async function GPa(e) {
  let t = new Set();
  for (let n of By(e)) {
    let r = n.trim(),
      o = await UGt(r);
    if (!o?.commandPrefix) continue;
    let s = await Nmo(r, o.commandPrefix),
      i = await B0p(s);
    if (i) t.add(i);
  }
  return [...t];
}
async function Nmo(e, t) {
  let n = await _On(e);
  if (n?.envVars.length) {
    let r = `${n.envVars.join(" ")} `;
    if (t.startsWith(r)) return t.slice(r.length);
  }
  return t;
}
async function B0p(e) {
  let t = e.split(" ").filter(Boolean);
  if (t.length <= 1) return e;
  let n = [t[0]],
    r = await DDe(t[0]);
  for (let o = 1; o < t.length; o++) {
    let s = t[o];
    if (s.startsWith("-")) break;
    if (r?.args && V2n(r.args).some(a => a?.isCommand)) {
      if (FPa.test(s)) continue;
      n.push(s), r = await DDe(s);
      continue;
    }
    let i = U0p(r, s);
    if (!i) break;
    n.push(s), r = i;
  }
  return n.join(" ");
}
function U0p(e, t) {
  if (!e?.subcommands?.length) return null;
  let n = t.toLowerCase();
  return e.subcommands.find(r => V2n(r.name).some(o => o.toLowerCase() === n)) ?? null;
}
var FPa,
  UPa,
  M0p,
  V2n = e => Array.isArray(e) ? e : [e];