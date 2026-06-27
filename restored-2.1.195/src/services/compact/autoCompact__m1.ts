// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Wct
// matched 2.1.88 source: src/services/compact/autoCompact.ts
// class=modified (alt of src/services/compact/autoCompact.ts)  jaccard=0.0454  score=0.112  fileCov=0.0709
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function aia(e) {
  return typeof e === "number" && Number.isFinite(e) && e >= 0 && e < 1 ? e : null;
}
function tap(e) {
  if (typeof e !== "object" || e === null) return null;
  let t = e,
    n = aia(t.repl),
    r = aia(t.sdk);
  return n === null || r === null
    ? null
    : {
        repl: n,
        sdk: r,
      };
}
function uia(e) {
  if (typeof e !== "object" || e === null || Array.isArray(e)) return null;
  let t = [],
    n = null;
  for (let [r, o] of Object.entries(e)) {
    let s = tap(o);
    if (s === null) return null;
    if (r === "default") {
      n = s;
      continue;
    }
    let i = Number(r);
    if (!Number.isSafeInteger(i) || i <= 0) return null;
    t.push({
      windowSize: i,
      ...s,
    });
  }
  if (t.length === 0 && n === null) return null;
  return {
    entries: t,
    defaultEntry: n,
  };
}
function dia(e, t) {
  let n = e.entries.find((r) => r.windowSize === t);
  if (n !== void 0)
    return {
      kind: "exact",
      entry: n,
    };
  return e.defaultEntry === null
    ? null
    : {
        kind: "default",
        entry: e.defaultEntry,
      };
}
function c1n(e, t) {
  let n = e - 13000,
    r = t.testPctOverride;
  if (r !== void 0 && !isNaN(r) && r > 0 && r <= 100) return Math.min(Math.floor(e * (r / 100)), n);
  return n;
}
function Yso(e, t) {
  return Math.min(e - Math.round(e * t.precomputeBufferFraction), c1n(e, t));
}
function pia(e, t, n, r = t) {
  let o = c1n(t, n),
    s = n.enabled ? o : t,
    i = s - 20000,
    a = n.testBlockingOverride,
    l = a !== void 0 && !isNaN(a) && a > 0 ? a : r - 3000,
    c = Math.max(0, Math.round(((s - e) / s) * 100));
  if (e >= l)
    return {
      level: "blocked",
      pctLeft: c,
    };
  if (n.enabled && e >= o)
    return {
      level: "compact",
      pctLeft: c,
    };
  if (e >= i)
    return {
      level: "warn",
      pctLeft: c,
    };
  return {
    level: "ok",
  };
}
var lia = 13000,
  cia = 3000,
  Kso = 0.2;
var Xso = () => {};
function Zso(e) {
  let t = e.trim().toLowerCase();
  if (t === "auto") return "auto";
  let n;
  if (t.endsWith("m")) n = parseFloat(t) * 1000000 /* 1e6 */;
  else if (t.endsWith("k")) n = parseFloat(t) * 1000;
  else {
    let r = parseInt(t, 10);
    n = r >= 100 && r <= 1000 ? r * 1000 : r;
  }
  if (!Number.isFinite(n) || n < u1n || n > Qso) return;
  return Math.round(n);
}
function eio(e) {
  if (!pC()) return;
  if (Ir()) return;
  if (e !== sia) return;
  let t = l1n();
  if (!t) return;
  let n = Zso(t);
  return typeof n === "number" ? n : void 0;
}
function mia(e, t) {
  if (t && Object.hasOwn(e, t)) return e[t];
  return e.default;
}
function yia(e) {
  if (typeof e === "number") return e;
  if (typeof e !== "object" || e === null || Array.isArray(e)) return;
  let { surfaces: t, ...n } = e,
    r = Di(),
    o = Oe.CLAUDE_CODE_ENTRYPOINT,
    s = o && t && Object.hasOwn(t, o) ? t[o] : void 0;
  if (s) {
    let i = mia(s, r);
    if (i !== void 0) return i;
  }
  return mia(n, r);
}
function nap(e) {
  if (!pC()) return;
  if (!Object.hasOwn(fia, e)) return;
  return yia(fia[e]);
}
function oap(e) {
  if (!pC())
    return {
      window: null,
      replacesDefault: false,
    };
  let t = (s) => (typeof s === "number" && Number.isInteger(s) && s >= u1n && s <= Qso ? s : null),
    n = (s) => {
      if (typeof s !== "object" || s === null || Array.isArray(s))
        return {
          window: null,
          present: false,
        };
      if (!Object.hasOwn(s, e))
        return {
          window: null,
          present: false,
        };
      return {
        window: t(yia(s[e])),
        present: true,
      };
    },
    r = n(Tvi()?.rowan_thicket),
    o = n(vvi());
  return {
    window: r.window ?? o.window,
    replacesDefault: o.present,
  };
}
function A4(e, t) {
  let n = mo(e),
    r = OS(),
    o = nH(e, r);
  if (process.env.CLAUDE_CODE_AUTO_COMPACT_WINDOW) {
    let l = Fue(
      "CLAUDE_CODE_AUTO_COMPACT_WINDOW",
      process.env.CLAUDE_CODE_AUTO_COMPACT_WINDOW,
      u1n,
      Qso,
    );
    if (l.status !== "invalid") {
      let c = Math.max(u1n, l.effective);
      return {
        window: Math.min(o, c),
        configured: c,
        source: "env",
      };
    }
  }
  if (t !== void 0)
    return {
      window: Math.min(o, t),
      configured: t,
      source: "settings",
    };
  let s = oap(n);
  if (s.window !== null)
    return {
      window: Math.min(o, s.window),
      configured: s.window,
      source: "clientdata",
    };
  let i = eio(n);
  if (i !== void 0)
    return {
      window: Math.min(o, i),
      configured: i,
      source: "experiment",
    };
  if (o < 1000000 /* 1e6 */ && (rap.has(n) || x9r(e, r)))
    return {
      window: Math.min(o, Pte),
      configured: Pte,
      source: "model-default",
    };
  let a = s.replacesDefault ? void 0 : nap(n);
  if (a !== void 0)
    return {
      window: Math.min(o, a),
      configured: a,
      source: "model-default",
    };
  return {
    window: o,
    configured: o,
    source: "auto",
  };
}
function nLe(e, t) {
  return A4(e, t).source !== "auto";
}
function d1n(e, t) {
  return A4(e, t).source;
}
function are(e, t) {
  let n = Math.min(qct(e), hia),
    r = pC() ? t : void 0,
    { window: o } = A4(e, r);
  return o - n;
}
function sap(e) {
  let t = Math.min(qct(e), hia);
  return nH(e, OS()) - t;
}
function aap(e) {
  if (gia) return;
  ((gia = true),
    G("tengu_precompute_arm_table_malformed", {
      payloadType: e,
    }));
}
function Jso() {
  let e = at("tengu_amber_rokovoko", Kso);
  return typeof e === "number" && Number.isFinite(e) && e >= 0 && e < 1 ? e : Kso;
}
function tio(e, t, n) {
  let r = at(iap, null);
  if (r === null || r === void 0)
    return {
      fraction: Jso(),
      source: "scalar",
    };
  let o = uia(r);
  if (o === null)
    return (
      aap($e(Array.isArray(r) ? "array" : typeof r)),
      {
        fraction: Jso(),
        source: "malformed",
      }
    );
  let s = pC() ? t : void 0,
    { window: i } = A4(e, s),
    a = dia(o, i);
  if (a === null)
    return {
      fraction: Jso(),
      source: "table_no_match",
    };
  let l = n === "sdk" ? "sdk" : "repl",
    c = a.entry[l];
  return a.kind === "exact"
    ? {
        fraction: c,
        source: "table_exact",
        matchedWindowKey: a.entry.windowSize,
      }
    : {
        fraction: c,
        source: "table_default",
      };
}
function lap(e, t, n) {
  return tio(e, t, n).fraction;
}
function nio(e, t, n) {
  let r = process.env.CLAUDE_AUTOCOMPACT_PCT_OVERRIDE,
    o = process.env.CLAUDE_CODE_BLOCKING_LIMIT_OVERRIDE;
  return {
    enabled: pC(),
    precomputeBufferFraction: lap(e, t, n),
    testPctOverride: r ? parseFloat(r) : void 0,
    testBlockingOverride: o ? parseInt(o, 10) : void 0,
  };
}
function Ajt(e, t) {
  return c1n(are(e, t), nio(e, t));
}
function rLe(e, t, n) {
  let r = nio(t, n),
    o = r.enabled ? n : void 0;
  return pia(e, are(t, o), r, sap(t));
}
function _ia(e, t, n, r) {
  let o = nio(t, n, r),
    s = o.enabled ? n : void 0,
    i = are(t, s);
  if (!nLe(t, n)) return e >= Yso(i, o);
  let { window: a } = A4(t, s);
  if (a < Pte) return false;
  return e >= Yso(i, o);
}
var hia = 20000,
  u1n = 100000 /* 1e5 */,
  Qso = 1000000 /* 1e6 */,
  fia,
  rap,
  iap = "tengu_amber_moleskin",
  gia = false;
