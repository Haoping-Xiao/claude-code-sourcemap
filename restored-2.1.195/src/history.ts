// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iZr
// matched 2.1.88 source: src/history.ts
// class=modified  jaccard=0.2387  score=0.5216  fileCov=0.3057
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iZr] deps: dn, db, je, fn, At
((U8i = require("crypto")), (GDn = require("path")), (jDn = new Map()), (Vce = new Map()));
function L0e(e) {
  return (e.match(/\r\n|\r|\n/g) || []).length;
}
function Kat(e, t) {
  if (t === 0) return `[Pasted text #${e}]`;
  return `[Pasted text #${e} +${t} lines]`;
}
function KDn(e) {
  return `[Image #${e}]`;
}
function jM(e) {
  if (!e) return [];
  let t = /\[(Pasted text|Image|\.\.\.Truncated text) #(\d+)(?: \+\d+ lines)?(\.)*\]/g;
  return [...e.matchAll(t)]
    .map((r) => ({
      id: parseInt(r[2] || "0"),
      match: r[0],
      index: r.index,
    }))
    .filter((r) => r.id > 0);
}
function S6d(e) {
  return e.match.startsWith("[...Truncated text")
    ? `[...Truncated text #${e.id} \u2014 content no longer available...]`
    : `[Pasted text #${e.id} \u2014 content no longer available]`;
}
function sX(e, t) {
  let n = jM(e),
    r = e;
  for (let o = n.length - 1; o >= 0; o--) {
    let s = n[o],
      i = t[s.id];
    if (i?.type !== "text") continue;
    r = r.slice(0, s.index) + i.content + r.slice(s.index + s.match.length);
  }
  return r;
}
function K8i(e, t) {
  let n = null;
  for (let o of jM(e)) {
    if (t[o.id]?.type !== "text") continue;
    if (!n || o.id > n.id) n = o;
  }
  if (!n) return null;
  let r = t[n.id].content;
  if (r.length > YDn) return null;
  return {
    expanded: e.slice(0, n.index) + r + e.slice(n.index + n.match.length),
    id: n.id,
    cursorOffset: n.index + r.length,
  };
}
function E6d(e) {
  return Ft(e);
}
async function* XDn() {
  let e = zce.slice(),
    t = new Set(e.map((o) => `${o.timestamp}\x00${o.sessionId ?? ""}`));
  for (let o = e.length - 1; o >= 0; o--) yield e[o];
  let n = lZr.join(tr(), "history.jsonl"),
    r = false;
  try {
    for await (let o of $in(n))
      try {
        let s = E6d(o),
          i = `${s.timestamp}\x00${s.sessionId ?? ""}`;
        if (J8i.has(i) || t.has(i)) continue;
        yield s;
      } catch (s) {
        (T(`Failed to parse history line: ${s}`), (r = true));
      }
    if (r) It("history_load", "history_load_parse_failed");
    else xe("history_load");
  } catch (o) {
    if (on(o) === "ENOENT") {
      xe("history_load");
      return;
    }
    throw o;
  }
}
async function* cZr() {
  for await (let e of XDn()) yield await qDn(e);
}
async function* Y8i(e = "project") {
  let t = rc(),
    n = Rt(),
    r = new Set();
  for await (let o of XDn()) {
    if (!o || typeof o.project !== "string") continue;
    if (e === "project" && o.project !== t) continue;
    if (e === "session" && o.sessionId !== n) continue;
    if (r.has(o.display)) continue;
    if (
      (r.add(o.display),
      yield {
        display: o.display,
        timestamp: o.timestamp,
        resolve: () => qDn(o),
      },
      r.size >= WDn)
    )
      return;
  }
}
async function X8i(e) {
  let t = rc(),
    n = 0,
    r = 0;
  try {
    for await (let o of XDn()) {
      if (!o || typeof o.project !== "string") continue;
      if (o.project !== t) continue;
      if ((n++, !e || e(o.display))) r++;
      if (n >= WDn) break;
    }
  } catch {
    return null;
  }
  return r;
}
async function* QDn() {
  let e = rc(),
    t = Rt(),
    n = [],
    r = 0;
  for await (let o of XDn()) {
    if (!o || typeof o.project !== "string") continue;
    if (o.project !== e) continue;
    if (o.sessionId === t) (yield await qDn(o), r++);
    else n.push(o);
    if (r + n.length >= WDn) break;
  }
  for (let o of n) {
    if (r >= WDn) return;
    (yield await qDn(o), r++);
  }
}
async function A6d(e) {
  if (e.content)
    return {
      id: e.id,
      type: e.type,
      content: e.content,
      mediaType: e.mediaType,
      filename: e.filename,
    };
  if (e.contentHash) {
    let t = await W8i(e.contentHash);
    if (t)
      return {
        id: e.id,
        type: e.type,
        content: t,
        mediaType: e.mediaType,
        filename: e.filename,
      };
  }
  return null;
}
function H6d(e) {
  let t = e ?? "missing-hash";
  if (V8i.has(t)) return;
  (V8i.add(t), It("paste_store", "paste_store_content_lost"));
}
function T6d(e, t) {
  if (t.size === 0) return e;
  let n = jM(e),
    r = e;
  for (let o = n.length - 1; o >= 0; o--) {
    let s = n[o];
    if (!t.has(s.id) || s.match.startsWith("[Image")) continue;
    r = r.slice(0, s.index) + S6d(s) + r.slice(s.index + s.match.length);
  }
  return r;
}
async function qDn(e) {
  let t = e.pastedContents || {},
    n = {},
    r = new Set();
  for (let [o, s] of Object.entries(t)) {
    let i = await A6d(s);
    if (i) n[Number(o)] = i;
    else if (s.type === "text") (r.add(Number(o)), H6d(s.contentHash));
  }
  return {
    display: T6d(e.display, r),
    pastedContents: n,
  };
}
async function Q8i() {
  if (zce.length === 0) return;
  let e;
  try {
    let t = lZr.join(tr(), "history.jsonl");
    (await qs().append(t, "", 384),
      (e = await Ay(t, {
        stale: 10000 /* 1e4 */,
        retries: {
          retries: 3,
          minTimeout: 50,
        },
        onCompromised: (r) =>
          T(`History lock compromised: ${r}`, {
            level: "error",
          }),
      })));
    let n = zce.map(
      (r) =>
        De(r) +
        `
`,
    );
    ((zce = []), await qs().append(t, n.join(""), 384), xe("history_save"));
  } catch (t) {
    (T(`Failed to write prompt history: ${t}`), It("history_save", "history_save_write_failed"));
  } finally {
    if (e) await e().catch(ke);
  }
}
async function Z8i(e) {
  if (aZr || zce.length === 0) return;
  if (e > 5) return;
  aZr = true;
  try {
    await Q8i();
  } finally {
    if (((aZr = false), zce.length > 0)) (await Nn(500), Z8i(e + 1));
  }
}
function v6d(e, t, n, r) {
  if (!e || e.display !== t.display) return false;
  if (e.project !== n || e.sessionId !== r) return false;
  let o = Object.keys(e.pastedContents).length > 0,
    s = !!t.pastedContents && Object.keys(t.pastedContents).length > 0;
  return !o && !s;
}
async function w6d(e) {
  let t =
      typeof e === "string"
        ? {
            display: e,
            pastedContents: {},
          }
        : e,
    n = rc(),
    r = Rt();
  if (v6d(CUt, t, n, r)) {
    zDn = true;
    return;
  }
  let o = {};
  if (t.pastedContents)
    for (let [i, a] of Object.entries(t.pastedContents)) {
      if (a.type === "image") continue;
      if (a.content.length <= b6d)
        o[Number(i)] = {
          id: a.id,
          type: a.type,
          content: a.content,
          mediaType: a.mediaType,
          filename: a.filename,
        };
      else {
        let l = F8i(a.content);
        ((o[Number(i)] = {
          id: a.id,
          type: a.type,
          contentHash: l,
          mediaType: a.mediaType,
          filename: a.filename,
        }),
          G8i(l, a.content));
      }
    }
  let s = {
    ...t,
    pastedContents: o,
    timestamp: Date.now(),
    project: n,
    sessionId: r,
  };
  (zce.push(s), (CUt = s), (zDn = false), (VDn = Z8i(0)));
}
function Yat(e) {
  if (ut(process.env.CLAUDE_CODE_SKIP_PROMPT_HISTORY) || lje()) return;
  if (!z8i)
    ((z8i = true),
      Ci(async () => {
        if (VDn) await VDn;
        if (zce.length > 0) await Q8i();
      }));
  w6d(e);
}
function e6i() {
  if (zDn) {
    zDn = false;
    return;
  }
  if (!CUt) return;
  let e = CUt;
  CUt = null;
  let t = zce.lastIndexOf(e);
  if (t !== -1) zce.splice(t, 1);
  else J8i.add(`${e.timestamp}\x00${e.sessionId ?? ""}`);
}
var lZr,
  WDn = 100,
  b6d = 1024,
  YDn = 100000 /* 1e5 */,
  JDn,
  V8i,
  zce,
  aZr = false,
  VDn = null,
  z8i = false,
  CUt = null,
  zDn = false,
  J8i;
