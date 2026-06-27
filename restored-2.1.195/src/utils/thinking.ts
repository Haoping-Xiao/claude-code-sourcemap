// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module m1
// matched 2.1.88 source: src/utils/thinking.ts
// class=modified  jaccard=0.3034  score=0.409  fileCov=0.5402
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var m1 = E(() => {
  Un();
  mye();
  Ao();
  JOt();
  Ls();
  dr();
  ((Jkd = [
    "rainbow_red",
    "rainbow_orange",
    "rainbow_yellow",
    "rainbow_green",
    "rainbow_blue",
    "rainbow_indigo",
    "rainbow_violet",
  ]),
    (Qkd = [
      "rainbow_red_shimmer",
      "rainbow_orange_shimmer",
      "rainbow_yellow_shimmer",
      "rainbow_green_shimmer",
      "rainbow_blue_shimmer",
      "rainbow_indigo_shimmer",
      "rainbow_violet_shimmer",
    ]));
});
function e0d(e) {
  let t = [],
    n = [];
  for (let r of e) {
    let o = uAn(r);
    if (o && Rvi.has(o)) t.push(r);
    else n.push(r);
  }
  return {
    allowed: t,
    disallowed: n,
  };
}
function Lvi(e) {
  if (!e || e.length === 0) return;
  if (bo()) {
    console.warn(
      "Warning: Custom betas are only available for API key users. Ignoring provided betas.",
    );
    return;
  }
  let { allowed: t, disallowed: n } = e0d(e);
  for (let r of n)
    console.warn(
      `Warning: Beta header '${r}' is not allowed. Only the following betas are supported: ${fI([...Rvi]).join(", ")}`,
    );
  return t.length > 0 ? t : void 0;
}
function QOt(e) {
  let t = W9(e, "interleaved_thinking");
  if (t !== void 0) return t;
  let n = mo(e),
    r = l_(e);
  if (r === "foundry") return !0;
  if (ZO(r)) return !n.includes("claude-3-");
  if (n === "claude-haiku-4-5" || n.includes("claude-3-")) return !1;
  return !0;
}
function t0d(e) {
  return (
    e === "claude-fable-5" ||
    e === "claude-mythos-5" ||
    e === "claude-opus-4-0" ||
    e === "claude-opus-4-1" ||
    e === "claude-opus-4-5" ||
    e === "claude-opus-4-6" ||
    e === "claude-opus-4-7" ||
    e === "claude-opus-4-8" ||
    e === "claude-sonnet-4-0" ||
    e === "claude-sonnet-4-5" ||
    e === "claude-sonnet-4-6" ||
    e === "claude-haiku-4-5"
  );
}
function n0d(e) {
  let t = mo(e),
    n = l_(e);
  if (n === "foundry") return !0;
  if (ZO(n)) return !t.includes("claude-3-");
  return JB(t, "context_management") || t === "claude-mythos-5";
}
function j4e(e) {
  let t = mo(e),
    n = l_(e);
  if (!ZO(n)) return !1;
  if (t.includes("claude-3-") || t === "claude-opus-4-0" || t === "claude-sonnet-4-0") return !1;
  return !0;
}
function LCn(e) {
  let t = W9(e, "temperature");
  if (t !== void 0) return t;
  let n = mo(e);
  if (
    n.includes("claude-3-") ||
    n === "claude-opus-4-0" ||
    n === "claude-opus-4-1" ||
    n === "claude-opus-4-5" ||
    n === "claude-opus-4-6" ||
    n === "claude-sonnet-4-0" ||
    n === "claude-sonnet-4-5" ||
    n === "claude-sonnet-4-6" ||
    n === "claude-haiku-4-5"
  )
    return !0;
  return !1;
}
function Fot(e) {
  if (e === "firstParty" || e === "anthropicAws") return !0;
  return ut(process.env.CLAUDE_CODE_ENABLE_AUTO_MODE);
}
function DCn() {
  let e = fr();
  return e !== "firstParty" && e !== "anthropicAws" && Fot(e);
}
function P9r() {
  return CM() || DCn();
}
function a_e(e) {
  {
    let t = mo(e),
      n = fr();
    if (!Fot(n)) return !1;
    if (
      t.includes("claude-3-") ||
      t === "claude-opus-4-0" ||
      t === "claude-opus-4-1" ||
      t === "claude-opus-4-5" ||
      t === "claude-sonnet-4-0" ||
      t === "claude-sonnet-4-5" ||
      t === "claude-haiku-4-5"
    )
      return !1;
    if (
      n !== "firstParty" &&
      n !== "anthropicAws" &&
      (t === "claude-opus-4-6" || t === "claude-sonnet-4-6" || t.includes("haiku"))
    )
      return !1;
    return !0;
  }
  return !1;
}
function Dvi() {
  let e = fr();
  if (e === "vertex" || e === "bedrock" || e === "mantle" || e === "gateway") return xPt;
  return p2r;
}
function M9r() {
  let e = fr();
  return e === "firstParty" || e === "anthropicAws" || e === "foundry";
}
function F4e() {
  return ut(process.env.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS) || T9("hipaa");
}
function CM() {
  return M9r() && !F4e();
}
function Qxe() {
  if (!CM()) return !1;
  if (!_u()) return !1;
  let e = fr();
  return e === "firstParty" || e === "anthropicAws";
}
function jot(e, t) {
  let n = [...V9(e)];
  if (t?.isAgenticQuery) {
    if (!n.includes(Y2e)) n.push(Y2e);
  }
  let r = OS();
  if (!r || r.length === 0) return n;
  let o = r.map(b2r);
  if (!CM())
    o = o.filter((s) => {
      if (Pvi.has(s)) return !0;
      return (
        T(`SDK beta '${s.header}' dropped on 3P`, {
          level: "debug",
        }),
        !1
      );
    });
  return [...n, ...o.filter((s) => !n.includes(s))];
}
function $te() {
  ($9r.cache?.clear?.(), V9.cache?.clear?.(), O9r.cache?.clear?.(), RCn.cache?.clear?.());
}
function N9r(e) {
  if (M9r()) return e;
  return e.filter((t) => Pvi.has(t));
}
var Rvi, RCn, $9r, V9, O9r, Pvi;
