// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module I9r
// matched 2.1.88 source: src/utils/context.ts
// class=modified  jaccard=0.1358  score=0.2348  fileCov=0.2437
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var I9r = E(() => {
  Ree();
  Qi();
  Xr();
  Rc();
  Yxe();
  og();
  oo();
  je();
  fn();
  Rd();
  qd();
  Jt();
  Ls();
  ((mvi = require("fs")),
    (vCn = require("fs/promises")),
    (C9r = require("path")),
    (gvi = ve(() =>
      H.object({
        id: H.string(),
        max_input_tokens: H.number().optional(),
        max_tokens: H.number().optional(),
      }).strip(),
    )),
    (jkd = ve(() =>
      H.object({
        models: H.array(gvi()),
        timestamp: H.number(),
      }),
    )));
  w9r = Cn(
    (e) => {
      try {
        let t = mvi.readFileSync(e, "utf-8"),
          n = jkd().safeParse(Ia(t, false));
        return n.success ? n.data.models : null;
      } catch {
        return null;
      }
    },
    (e) => e,
  );
});
function Sye() {
  return ut(process.env.CLAUDE_CODE_DISABLE_1M_CONTEXT);
}
function Sy(e) {
  if (Sye()) return false;
  return /\[1m\]/i.test(e);
}
function rU(e) {
  if (Sye()) return false;
  let t = mo(e);
  if (!VIe(t)?.context?.native_1m && t !== "claude-mythos-5" && t !== "claude-mythos-preview")
    return false;
  let n = l_(e);
  return (n === "firstParty" && _u()) || n === "anthropicAws" || n === "mantle";
}
function vAn(e) {
  return (
    e.includes("claude-3-") ||
    e === "claude-opus-4-0" ||
    e === "claude-opus-4-1" ||
    e === "claude-opus-4-5" ||
    e === "claude-haiku-4-5"
  );
}
function I9(e) {
  if (Sye()) return false;
  let t = mo(e);
  if (vAn(t)) return false;
  if (VIe(t)?.context?.supports_1m_beta || t === "claude-mythos-5") return true;
  return ZO(l_(e));
}
function nH(e, t) {
  let n = Avi();
  if (n !== void 0) return n;
  if (x9r(e, t)) return Pte;
  return Hvi(e, t);
}
function Avi() {
  if (Oe.DISABLE_COMPACT && process.env.CLAUDE_CODE_MAX_CONTEXT_TOKENS) {
    let e = parseInt(process.env.CLAUDE_CODE_MAX_CONTEXT_TOKENS, 10);
    if (!isNaN(e) && e > 0) return e;
  }
  return;
}
function x9r(e, t) {
  return cJe() && Avi() === void 0 && Hvi(e, t) > Pte;
}
function Hvi(e, t) {
  if (Sy(e)) return 1000000 /* 1e6 */;
  if (t?.includes(FY.header) && I9(e)) return 1000000 /* 1e6 */;
  if (rU(e)) return 1000000 /* 1e6 */;
  let n = wCn(e);
  if (n !== null) return n;
  let r = Oe.CLAUDE_CODE_MAX_CONTEXT_TOKENS;
  if (r !== void 0 && r > 0 && !mo(zo(e)).startsWith("claude-")) return r;
  return YOt;
}
function Tvi() {
  return x0();
}
function vvi() {
  return Dt().autoCompactWindowsCache ?? null;
}
function wCn(e) {
  if (Sye()) return null;
  if (Sy(e)) return null;
  if (mo(e) !== "claude-sonnet-4-6") return null;
  let t = x0()?.kelp_forest_sonnet;
  if (typeof t !== "string") return null;
  let n = parseInt(t, 10);
  if (!Number.isFinite(n) || n <= 0) return null;
  return n;
}
function CCn(e, t) {
  if (!e)
    return {
      used: null,
      remaining: null,
    };
  let n = e.input_tokens + e.cache_creation_input_tokens + e.cache_read_input_tokens,
    r = Math.round((n / t) * 100),
    o = Math.min(100, Math.max(0, r));
  return {
    used: o,
    remaining: 100 - o,
  };
}
function Vkd(e) {
  let t = x0()?.heather_vale;
  if (typeof t !== "object" || t === null || Array.isArray(t)) return null;
  let n = t[e];
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) return null;
  return n;
}
function Xxe(e) {
  let t,
    n,
    r = mo(e);
  if (r === "claude-fable-5" || r === "claude-mythos-5") ((t = 64000), (n = 128000));
  else if (r === "claude-opus-4-8") ((t = 64000), (n = 128000));
  else if (r === "claude-opus-4-7") ((t = 64000), (n = 128000));
  else if (r === "claude-sonnet-4-6") ((t = 32000), (n = 128000));
  else if (r === "claude-opus-4-6") ((t = 64000), (n = 128000));
  else if (
    r === "claude-opus-4-5" ||
    r === "claude-sonnet-4-0" ||
    r === "claude-sonnet-4-5" ||
    r === "claude-haiku-4-5"
  )
    ((t = 32000), (n = 64000));
  else if (r === "claude-opus-4-1" || r === "claude-opus-4-0") ((t = 32000), (n = 32000));
  else if (r === "claude-3-opus") ((t = 4096), (n = 4096));
  else if (r === "claude-3-sonnet") ((t = 8192), (n = 8192));
  else if (r === "claude-3-haiku") ((t = 4096), (n = 4096));
  else if (r === "claude-3-5-sonnet" || r === "claude-3-5-haiku") ((t = 8192), (n = 8192));
  else if (r === "claude-3-7-sonnet") ((t = 32000), (n = 64000));
  else ((t = Wkd), (n = qkd));
  let o = Vkd(r);
  if (o !== null) t = Math.min(o, n);
  let s = bvi(e);
  if (s?.max_tokens && s.max_tokens >= 4096) ((n = s.max_tokens), (t = Math.min(t, n)));
  return {
    default: t,
    upperLimit: n,
  };
}
function wvi(e) {
  return Xxe(e).upperLimit - 1;
}
var YOt = 200000,
  Pte = 200000,
  Evi = 20000,
  Wkd = 32000,
  qkd = 128000;
