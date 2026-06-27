// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module $g
// matched 2.1.88 source: src/utils/plugins/pluginIdentifier.ts
// class=partial  jaccard=0.156  score=0.1896  fileCov=0.4683
// note: low-confidence suggestion: src/utils/plugins/pluginIdentifier.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module $g] deps: utils/plugins/schemas.ts
leo = {
  policySettings: "managed",
  userSettings: "user",
  projectSettings: "project",
  localSettings: "local",
  flagSettings: "flag"
};
IKd = new Set(["anthropic-skills", "core", "cowork-plugin-management", "data", "design", "engineering", "enterprise-search", "figma", "finance", "human-resources", "internal-apps", "legal", "marketing", "operations", "product-management", "productivity", "sales", "small-business", "ai-governance-legal", "cocounsel-legal", "commercial-legal", "corporate-legal", "employment-legal", "ip-legal", "law-student", "legal-builder-hub", "legal-clinic", "litigation-legal", "privacy-legal", "product-legal", "regulatory-legal"]);
xKd = {
  user: "userSettings",
  project: "projectSettings",
  local: "localSettings"
};
function Zj(e) {
  RKd.emit(e);
  let t = Date.now(),
    n = X0e.get(e);
  if (n) n.count++, n.lastUsedAt = t;else X0e.set(e, {
    count: 1,
    lastUsedAt: t
  });
  if (!CKi) CKi = true, process.on("exit", IKi);
  if (!blt) blt = setTimeout(IKi, kKd), blt.unref?.();
}
function IKi() {
  if (blt) clearTimeout(blt), blt = null;
  if (X0e.size === 0) return;
  let e = [...X0e.entries()];
  X0e.clear(), gn(t => {
    let n = {
      ...t.pluginUsage
    };
    for (let [r, o] of e) {
      let s = n[r];
      n[r] = {
        usageCount: (s?.usageCount ?? 0) + o.count,
        lastUsedAt: o.lastUsedAt,
        lastUsedNumStartups: t.numStartups
      };
    }
    return {
      ...t,
      pluginUsage: n
    };
  });
}
function jPn(e) {
  let t = Date.now();
  gn(n => {
    let r = e.filter(s => !n.pluginUsage?.[s]);
    if (r.length === 0) return n;
    let o = {
      ...n.pluginUsage
    };
    for (let s of r) o[s] = {
      usageCount: 0,
      lastUsedAt: t,
      lastUsedNumStartups: n.numStartups
    };
    return {
      ...n,
      pluginUsage: o
    };
  });
}
function Slt(e) {
  let t = new Set(e.map(n => n.toLowerCase()));
  for (let n of X0e.keys()) if (t.has(n.toLowerCase())) X0e.delete(n);
  gn(n => {
    let o = Object.keys(n.pluginUsage ?? {}).filter(i => t.has(i.toLowerCase()));
    if (o.length === 0) return n;
    let s = {
      ...n.pluginUsage
    };
    for (let i of o) delete s[i];
    return {
      ...n,
      pluginUsage: s
    };
  });
}
function rFt(e) {
  return Dt().pluginUsage?.[e];
}
function ueo(e) {
  return X0e.has(e);
}
function xKi(e) {
  let t = Date.now();
  gn(n => {
    let r = e.filter(s => n.pluginUsage?.[s]);
    if (r.length === 0) return n;
    let o = {
      ...n.pluginUsage
    };
    for (let s of r) {
      let i = o[s];
      if (!i) continue;
      o[s] = {
        ...i,
        lastUsedAt: t,
        lastUsedNumStartups: n.numStartups
      };
    }
    return {
      ...n,
      pluginUsage: o
    };
  });
}
function oFt(e, t, n) {
  return {
    sessionsSinceLastUse: Math.max(0, t - e.lastUsedNumStartups),
    daysSinceLastUse: Math.max(0, Math.floor((n - e.lastUsedAt) / 86400000))
  };
}
var kKd = 60000,
  RKd,
  X0e,
  blt = null,
  CKi = false;