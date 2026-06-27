// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module PR
// matched 2.1.88 source: src/utils/errors.ts
// class=modified  jaccard=0.3397  score=0.7414  fileCov=0.3853
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function lh(e) {
  try {
    return e instanceof ru || e instanceof tf || (e instanceof Error && e.name === "AbortError");
  } catch {
    return false;
  }
}
function Xie(e, t) {
  return e instanceof Error && e.message === t;
}
function Zr(e) {
  return e instanceof Error ? e : Error(String(e));
}
function be(e) {
  return e instanceof Error ? e.message : String(e);
}
function on(e) {
  if (e && typeof e === "object" && "code" in e && typeof e.code === "string") return e.code;
  return;
}
function xd(e) {
  let t = on(e);
  return t && /^[A-Z][A-Z0-9_]{0,63}$/.test(t) ? t : void 0;
}
function BK(e) {
  let t = e?.name;
  return typeof t === "string" && /^[A-Z][a-zA-Z]*$/.test(t) ? t : void 0;
}
function BJe(e) {
  let t = xd(e) ?? BK(e);
  return t === void 0 ? void 0 : kh(t);
}
function Zos(e) {
  let t = BK(e);
  return t === void 0 ? void 0 : kh(t);
}
function ess(e) {
  return e !== void 0 && /^[A-Z][A-Za-z0-9_]*$/.test(e) ? kh(e) : void 0;
}
function yUe(e) {
  return typeof e === "string" && /^[A-Z][a-zA-Z]*$/.test(e) ? e : void 0;
}
function tss(e) {
  return typeof e === "string" && /^[a-z][a-z_]{0,39}$/.test(e) ? kh(e) : We("unparseable");
}
function nss(e) {
  let t = yUe(e);
  return t === void 0 ? void 0 : kh(t);
}
function rss(e) {
  let t = e?.constructor?.name;
  return typeof t === "string" && /^[A-Za-z][A-Za-z0-9_]{0,39}$/.test(t)
    ? kh(t)
    : We("unparseable");
}
function oss(e) {
  return /^[^/\\]+:\d+:\d+$/.test(e) ? e : void 0;
}
function gd(e) {
  return e !== null && typeof e === "object" && "errno" in e && typeof e.errno === "number";
}
function wn(e) {
  return on(e) === "ENOENT";
}
function Qie(e) {
  return on(e) === "EISDIR";
}
function sss(e) {
  if (e && typeof e === "object" && "path" in e && typeof e.path === "string") return e.path;
  return;
}
function iss(e, t = 5) {
  if (!(e instanceof Error)) return String(e);
  if (!e.stack) return e.message;
  let n = e.stack.split(`
`),
    r = n[0] ?? e.message,
    o = n.slice(1).filter((s) => s.trim().startsWith("at "));
  if (o.length <= t) return e.stack;
  return [r, ...o.slice(0, t)].join(`
`);
}
function Vo(e) {
  let t = on(e);
  return (
    t === "ENOENT" ||
    t === "EACCES" ||
    t === "EPERM" ||
    t === "ENOTDIR" ||
    t === "ELOOP" ||
    t === "ENAMETOOLONG" ||
    t === "EROFS"
  );
}
function R_(e, t) {
  if (t?.(e)) return true;
  if (!e || typeof e !== "object" || !("isAxiosError" in e) || !e.isAxiosError) return false;
  let n = e.response?.status;
  return n === void 0 || n === 401 || n === 403 || n === 429;
}
function $A(e) {
  let t = be(e);
  if (!e || typeof e !== "object" || !("isAxiosError" in e) || !e.isAxiosError)
    return {
      kind: "other",
      message: t,
    };
  let n = e,
    r = n.response?.status;
  if (r === 401 || r === 403)
    return {
      kind: "auth",
      status: r,
      message: t,
    };
  if (n.code === "ECONNABORTED")
    return {
      kind: "timeout",
      status: r,
      message: t,
    };
  if (n.code === "ECONNREFUSED" || n.code === "ENOTFOUND")
    return {
      kind: "network",
      status: r,
      message: t,
    };
  return {
    kind: "http",
    status: r,
    message: t,
  };
}
var NIt,
  NK,
  ru,
  _B,
  oM,
  qb,
  mi,
  Rh = (e, t) =>
    e !== null && typeof e === "object"
      ? Object.assign(e, {
          telemetryMessage: t,
        })
      : e,
  Jie;
