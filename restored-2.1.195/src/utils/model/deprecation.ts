// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module pir
// matched 2.1.88 source: src/utils/model/deprecation.ts
// class=modified  jaccard=0.0768  score=0.1334  fileCov=0.1532
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var pir = E(() => {
  dn();
  je();
  vn();
  co();
  Cv();
  MJl();
  Y4o();
  $Jt = class $Jt extends Error {
    subtype;
    constructor(e, t) {
      super(
        `[RemoteSessionManager] control_request '${e}' got no response after ${t / 1000}s \u2014 the worker may still apply it`,
      );
      this.subtype = e;
    }
  };
});
function fir(e) {
  let t = mo(ya(e)),
    n = fr(),
    r = e.trim().toLowerCase(),
    o = Sy(r) ? ya(r).trim() : r,
    s = td() && dle(o) && nje(),
    i = Object.hasOwn(UJl, t) ? UJl[t] : void 0;
  if (i) {
    let a = i.retirementDates[n];
    if (a || s)
      return {
        isDeprecated: !0,
        modelName: i.modelName,
        retirementDate: a,
        remappedTo: s ? (i.remappedTo ?? null) : null,
      };
  }
  return {
    isDeprecated: !1,
  };
}
function FJl(e) {
  if (td() && dle(mo(ya(e))) && nje()) return !0;
  let t = fir(e);
  if (!t.isDeprecated) return !1;
  if (t.remappedTo) return !0;
  if (t.retirementDate) {
    let n = new Date(t.retirementDate);
    return !Number.isNaN(n.getTime()) && n < new Date();
  }
  return !1;
}
function jJl(e) {
  if (!e) return null;
  let t = fir(e);
  if (!t.isDeprecated) return null;
  if (t.remappedTo)
    return {
      message: `${t.modelName} now runs as ${t.remappedTo}`,
      action: "/model to change",
    };
  if (t.retirementDate) {
    let n = new Date(t.retirementDate),
      r = !Number.isNaN(n.getTime()) && n < new Date();
    return {
      message: `${t.modelName} ${r ? "retired" : "retires"} ${t.retirementDate}`,
      action: "/model to switch",
    };
  }
  return null;
}
function mir(e) {
  if (!e) return null;
  let t = fir(e);
  if (!t.isDeprecated || !t.remappedTo) return Z4o(e);
  let n = O_(),
    r = $h(n) ?? n;
  return `\u26A0 ${t.modelName.replace(/^Claude /, "")} remaps to ${r}. CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP=1 opts out`;
}
function Z4o(e) {
  if (!e) return null;
  let t = fir(e);
  if (!t.isDeprecated) return null;
  if (t.remappedTo) {
    let n = O_(),
      r = $h(n) ?? n;
    return `\u26A0 ${e.trim()} is automatically remapped to ${r} (${t.remappedTo}). Set CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP=1 to keep the requested model.`;
  }
  if (t.retirementDate) {
    let n = new Date(t.retirementDate),
      o = !Number.isNaN(n.getTime()) && n < new Date() ? "was retired on" : "will be retired on";
    return `\u26A0 ${t.modelName} ${o} ${t.retirementDate}. Consider switching to a newer model.`;
  }
  return null;
}
var UJl;
