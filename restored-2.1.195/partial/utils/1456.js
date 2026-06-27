// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DD
// matched 2.1.88 source: src/utils/model/modelOptions.ts
// class=partial  jaccard=0.0646  score=0.5195  fileCov=0.0687
// note: low-confidence suggestion: src/utils/model/modelOptions.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DD = E(() => {
  hye = ["sonnet", "opus", "haiku", "fable", "best", "sonnet[1m]", "opus[1m]", "fable[1m]", "opusplan"];
  spd = ["sonnet", "opus", "haiku", "fable"];
});
function ipd(e) {
  return mo(ya(e.trim().toLowerCase()));
}
function apd(e) {
  let t = new Set();
  for (let n of e ?? []) if (!n.entitled) t.add(ipd(n.apiName));
  return t;
}
function cte(e, t) {
  if (t.size === 0) return false;
  let n = ya(e.trim().toLowerCase()),
    r = v0(n) ? zo(n) : n;
  return t.has(mo(r));
}
function v9() {
  let e = fr();
  if (e !== "firstParty" && e !== "gateway") return new Set();
  return apd($Pt());
}
function Ooi(e, t) {
  for (let n = e.indexOf(t); n !== -1; n = e.indexOf(t, n + 1)) {
    let r = n === 0 || !/[a-z0-9]/i.test(e[n - 1]),
      o = n + t.length,
      s = o === e.length || !/[a-z0-9]/i.test(e[o]);
    if (r && s) return true;
  }
  return false;
}
function lpd(e, t, n) {
  if (v0(e)) {
    let r = n ? MPt(e) : zo(e).toLowerCase();
    return r !== null && Ooi(r, t);
  }
  return Ooi(e, t);
}
function Noi(e, t) {
  if (!e.startsWith(t)) return false;
  return e.length === t.length || e[t.length] === "-";
}
function cpd(e, t) {
  let n = v0(e) ? zo(e).toLowerCase() : e;
  if (Noi(n, t)) return true;
  if (!t.startsWith("claude-") && Noi(n, `claude-${t}`)) return true;
  return false;
}
function Boi(e, t) {
  for (let n of t) {
    if (tU(n)) continue;
    let r = n.indexOf(e);
    if (r === -1) continue;
    let o = r + e.length;
    if (o === n.length || n[o] === "-") return true;
  }
  return false;
}
function Uoi(e, t) {
  let n = ya(e).toLowerCase();
  for (let [r, o] of Object.entries(t)) if (ya(o).toLowerCase() === n) return r;
  return e;
}
function hAn(e, t) {
  let n = ya(zo(e).trim().toLowerCase()),
    r = MPt(e);
  if (r !== null && ya(r) === n) return true;
  if (v0(n)) return false;
  return xa(n, {
    ...t,
    envFreeAliasResolution: true
  });
}
function xa(e, t) {
  if (t?.allowlist === void 0) {
    try {
      if (mLt().length > 0 && !gLt()) return false;
    } catch {
      return false;
    }
    if (cte(e, v9())) return false;
  }
  let n = jo() || {},
    r = t?.allowlist ?? n.availableModels;
  if (!r) return true;
  if (r.length === 0) return false;
  let o = r.map(l => ya(l.trim().toLowerCase())),
    s = ya(e.trim().toLowerCase());
  if (o.includes(s) && !tU(s)) {
    if (t?.envFreeAliasResolution || !v0(s) || hAn(s, t)) return true;
  }
  let i;
  if (t?.overridesMap !== void 0) i = Uoi(e, t.overridesMap);else if (t?.ignoreModelOverrides) i = e;else {
    let l;
    try {
      l = yn("policySettings");
    } catch {
      return false;
    }
    i = l?.availableModels !== void 0 ? Uoi(e, l.modelOverrides ?? {}) : Hnt(e);
  }
  let a = ya(i.trim().toLowerCase());
  if (o.includes(a)) {
    if (!tU(a) || !Boi(a, o)) {
      if (t?.envFreeAliasResolution || a !== s || !v0(a) || hAn(a, t)) return true;
    }
  }
  for (let l of o) if (tU(l) && !Boi(l, o) && lpd(a, l, t?.envFreeAliasResolution)) return true;
  if (v0(a)) {
    let l = zo(a).toLowerCase();
    if (o.includes(l)) return true;
  }
  for (let l of o) if (!tU(l) && v0(l)) {
    let c = t?.envFreeAliasResolution ? MPt(l) : zo(l).toLowerCase();
    if (c !== null && ya(c) === a) return true;
  }
  for (let l of o) if (!tU(l) && !v0(l)) {
    if (cpd(a, l)) return true;
  }
  return false;
}