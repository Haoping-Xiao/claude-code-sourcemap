// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UFo
// matched 2.1.88 source: src/utils/logoV2Utils.ts
// class=modified  jaccard=0.3376  score=0.8101  fileCov=0.3666
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var UFo = E(() => {
  co();
  ((BWl = new Set([_N, Jv])), (UWl = new WeakMap()));
});
function uor(e) {
  if (e >= 70) return "horizontal";
  return "compact";
}
function jWl(e, t, n) {
  if (t === "horizontal") {
    let o = n,
      s = FFo + cor + lor + o,
      i = e - s,
      a = Math.max(30, i),
      l = Math.min(o + a + lor + cor, e - FFo);
    if (l < o + a + lor + cor) a = l - o - lor - cor;
    return {
      leftWidth: o,
      rightWidth: a,
      totalWidth: l,
    };
  }
  let r = Math.min(e - FFo, FWl + 20);
  return {
    leftWidth: r,
    rightWidth: r,
    totalWidth: r,
  };
}
function GWl(e, t, n) {
  let r = Math.max(rn(e), rn(t), rn(n), 20);
  return Math.min(r + 4, FWl);
}
function dor(e) {
  if (!e || e.length > Wjf) return "Welcome back!";
  return `Welcome back ${e}!`;
}
function h1e(e, t) {
  if (rn(e) <= t) return e;
  let n = "/",
    r = "\u2026",
    o = 1,
    s = 1,
    i = e.split(n),
    a = i[0] || "",
    l = i.at(-1) || "",
    c = rn(a),
    u = rn(l);
  if (i.length === 1) return Rs(e, t);
  if (a === "" && o + s + u >= t) return `${n}${Rs(l, Math.max(1, t - s))}`;
  if (a !== "" && o * 2 + s + u >= t) return `${r}${n}${Rs(l, Math.max(1, t - o - s))}`;
  if (i.length === 2) {
    let f = t - o - s - u;
    return `${rae(a, f)}${r}${n}${l}`;
  }
  let d = t - c - u - o - 2 * s;
  if (d <= 0) {
    let f = Math.max(0, t - u - o - 2 * s);
    return `${rae(a, f)}${n}${r}${n}${l}`;
  }
  let p = [];
  for (let f = i.length - 2; f > 0; f--) {
    let m = i[f];
    if (m && rn(m) + s <= d) (p.unshift(m), (d -= rn(m) + s));
    else break;
  }
  if (p.length === 0) return `${a}${n}${r}${n}${l}`;
  return `${a}${n}${r}${n}${p.join(n)}${n}${l}`;
}
function fAt() {
  let e =
      process.env.DEMO_VERSION ??
      `${
        {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
        }.VERSION
      }${L2()}`,
    t = n_r(),
    n = process.env.DEMO_VERSION ? "/code/claude" : kd($t()),
    r = Oe.CLAUDE_CODE_HIDE_CWD ? "" : t ? `${n} in ${t.replace(/^https?:\/\//, "")}` : n,
    o = fr(),
    s = o !== "firstParty" ? ote[o] : bo() ? zCn() : "API Usage Billing",
    i = Dr().agent;
  return {
    version: e,
    cwd: r,
    billingType: s,
    agentName: i,
  };
}
function WWl(e, t, n) {
  if (rn(e) + 3 + rn(t) > n)
    return {
      shouldSplit: !0,
      truncatedModel: $a(e, n),
      truncatedBilling: $a(t, n),
    };
  return {
    shouldSplit: !1,
    truncatedModel: $a(e, Math.max(n - rn(t) - 3, 10)),
    truncatedBilling: t,
  };
}
function qWl(e) {
  let t = Xrr();
  if (!t) return [];
  let n;
  try {
    n = FXt(t);
  } catch {
    return [];
  }
  let r = [],
    o = Object.keys(n)
      .sort((s, i) => (cH(s, i) ? -1 : 1))
      .slice(0, 3);
  for (let s of o) {
    let i = n[s];
    if (i) r.push(...i);
  }
  return r.slice(0, e);
}
var FWl = 50,
  Wjf = 20,
  FFo = 4,
  lor = 1,
  cor = 2;
