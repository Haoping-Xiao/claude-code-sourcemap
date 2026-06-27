// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module okc
// matched 2.1.88 source: src/utils/permissions/getNextPermissionMode.ts
// class=new  jaccard=0.0538  score=0.089  fileCov=0.12
// note: nearest: src/utils/permissions/getNextPermissionMode.ts (0.0538); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var okc = E(() => {
  ft();
  ZE();
  og();
  je();
  Bi();
  vn();
  co();
  Ls();
  qd();
  Jt();
  Fpr = [{
    template: "find security vulnerabilities in {scope} and rank them by severity",
    genericScope: "this codebase"
  }, {
    template: "write tests for {scope} where coverage looks thin",
    genericScope: "the recent changes"
  }, {
    template: "find and explain TODO and FIXME comments around {scope}",
    genericScope: "this repo"
  }], MNe = Fpr.map(e => e.template.replace("{scope}", e.genericScope)), aTm = `You narrow the scope of three generic coding tasks using a repo's recently merged PRs.

The three tasks (do NOT change their wording \u2014 you only fill in {scope}):
${Fpr.map((e, t) => `${t + 1}. ${e.template}`).join(`
`)}

Output: a JSON array of exactly 3 strings \u2014 one {scope} phrase per task, in order.

Each {scope} phrase must:
- Name a feature or area the PR author would RECOGNIZE from their own PR titles (e.g. "the OAuth refresh flow", "the sandbox network proxy", "the FleetView dispatch path")
- Be 2-6 words. No file paths, no function names, no lists.
- Read naturally when dropped into the sentence above.

If no PR gives a recognizable anchor for a task, return "" for that slot and the generic will be used.

Output JSON only \u2014 no prose, no code fence.`, vKo = new Map();
});
function ikc(e) {
  let t = e?.agent ?? Dr().agent;
  if (!e && !t) return;
  let n = e?.permissionMode ? jO(e.permissionMode) : void 0,
    r = uj() || Boolean(Dt().bypassPermissionsModeAccepted),
    o = n === "bypassPermissions" && !r || n === "auto" && !RG() ? void 0 : n,
    s = e?.allowBypass && r ? !0 : void 0,
    i = e?.effort?.toLowerCase(),
    a = i && uce(i) ? i : void 0;
  if (!o && !e?.model && !a && !t && !s) return;
  return {
    permissionMode: o,
    model: e?.model,
    effort: a,
    agent: t,
    allowBypass: s
  };
}
function akc(e) {
  return !!e.permissionMode && e.permissionMode !== "default" || !!e.model || !!e.effort || !!e.agent || !!e.allowBypass;
}
function lkc(e) {
  let t = skc.c(17),
    {
      defaults: n
    } = e,
    {
      permissionMode: r,
      model: o,
      effort: s,
      agent: i,
      allowBypass: a
    } = n,
    l = !!r && r !== "default",
    c = a && !l;
  if (!l && !o && !s && !i && !c) return null;
  let u;
  if (t[0] !== r || t[1] !== l) u = l && $Ne.jsxs(w, {
    color: BB(r),
    children: [Ret(r), " ", _Y(r).toLowerCase()]
  }), t[0] = r, t[1] = l, t[2] = u;else u = t[2];
  let d;
  if (t[3] !== c) d = c && $Ne.jsxs(w, {
    color: BB("bypassPermissions"),
    children: [Ret("bypassPermissions"), " bypass available"]
  }), t[3] = c, t[4] = d;else d = t[4];
  let p;
  if (t[5] !== i) p = i && $Ne.jsxs(w, {
    dimColor: !0,
    children: ["@", i]
  }), t[5] = i, t[6] = p;else p = t[6];
  let f;
  if (t[7] !== o) f = o && $Ne.jsx(w, {
    dimColor: !0,
    children: o
  }), t[7] = o, t[8] = f;else f = t[8];
  let m;
  if (t[9] !== s) m = s && $Ne.jsx(w, {
    dimColor: !0,
    children: s
  }), t[9] = s, t[10] = m;else m = t[10];
  let g;
  if (t[11] !== u || t[12] !== d || t[13] !== p || t[14] !== f || t[15] !== m) g = $Ne.jsxs(Tn, {
    children: [u, d, p, f, m]
  }), t[11] = u, t[12] = d, t[13] = p, t[14] = f, t[15] = m, t[16] = g;else g = t[16];
  return g;
}
var skc, $Ne;