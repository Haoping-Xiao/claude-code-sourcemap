// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module BFe
// matched 2.1.88 source: src/utils/sessionStoragePortable.ts
// class=modified  jaccard=0.3434  score=0.4312  fileCov=0.6276
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var BFe = E(() => {
  Rm();
  QZe();
  ((WEs = require("child_process")), (qEs = require("util")), (yPu = qEs.promisify(WEs.execFile)));
});
function KEs(e, t) {
  let n = EG(e, "entrypoint") ?? Kb(t, "entrypoint");
  if (n && jpn.has(n)) return !0;
  let r =
      e
        .split(
          `
`,
        )
        .find((s) => s.includes('"parentUuid":')) ?? e,
    o = EG(r, "sessionKind");
  return o === "daemon" || o === "daemon-worker";
}
function FS(e) {
  if (typeof e !== "string") return null;
  return _Pu.test(e) ? e : null;
}
function YEs(e) {
  if (!e.includes("\\")) return e;
  try {
    return JSON.parse(`"${e}"`);
  } catch {
    return e;
  }
}
function EG(e, t) {
  let n = [`"${t}":"`, `"${t}": "`];
  for (let r of n) {
    let o = e.indexOf(r);
    if (o < 0) continue;
    let s = o + r.length,
      i = s;
    while (i < e.length) {
      if (e[i] === "\\") {
        i += 2;
        continue;
      }
      if (e[i] === '"') return YEs(e.slice(s, i));
      i++;
    }
  }
  return;
}
function Kb(e, t) {
  let n = [`"${t}":"`, `"${t}": "`],
    r,
    o = -1;
  for (let s of n) {
    let i = 0;
    while (!0) {
      let a = e.indexOf(s, i);
      if (a < 0) break;
      let l = a + s.length,
        c = l;
      while (c < e.length) {
        if (e[c] === "\\") {
          c += 2;
          continue;
        }
        if (e[c] === '"') {
          if (a > o) ((r = YEs(e.slice(l, c))), (o = a));
          break;
        }
        c++;
      }
      i = c + 1;
    }
  }
  return r;
}
async function The(e, t) {
  return JEs(e, t, "w");
}
async function XEs(e, t) {
  return JEs(e, t, "a");
}
async function JEs(e, t, n) {
  let r = VEs.createWriteStream(e, {
    mode: 384,
    flags: n,
  });
  try {
    for (let o of t)
      if (
        !r.write(
          JSON.stringify(o) +
            `
`,
        )
      )
        await Qkr.once(r, "drain");
    (r.end(), await Qkr.once(r, "finish"));
  } catch (o) {
    throw (r.destroy(), o);
  }
}
function Gpn(e) {
  let t = 0,
    n = {
      commandFallback: "",
    };
  while (t < e.length) {
    let r = e.indexOf(
        `
`,
        t,
      ),
      o = r >= 0 ? e.slice(t, r) : e.slice(t);
    if (
      ((t = r >= 0 ? r + 1 : e.length),
      !o.includes('"type":"user"') && !o.includes('"type": "user"'))
    )
      continue;
    if (o.includes('"tool_result"')) continue;
    if (o.includes('"isMeta":true') || o.includes('"isMeta": true')) continue;
    if (o.includes('"isCompactSummary":true') || o.includes('"isCompactSummary": true')) continue;
    try {
      let s = JSON.parse(o),
        i = sRt(s, n);
      if (i !== void 0) return i;
    } catch {
      continue;
    }
  }
  return n.commandFallback;
}
function QEs(e) {
  let t = {
    commandFallback: "",
  };
  for (let n of e) {
    if (typeof n !== "object" || n === null) continue;
    let r = sRt(n, t);
    if (r !== void 0) return r;
  }
  return t.commandFallback;
}
async function ZEs(e, t, n) {
  try {
    let r = await ij.open(e, "r");
    try {
      let o = await r.read(n, 0, Mw, 0);
      if (o.bytesRead === 0)
        return {
          head: "",
          tail: "",
        };
      let s = n.toString("utf8", 0, o.bytesRead),
        i = Math.max(0, t - Mw),
        a = s;
      if (i > 0) {
        let l = await r.read(n, 0, Mw, i);
        a = n.toString("utf8", 0, l.bytesRead);
      }
      return {
        head: s,
        tail: a,
      };
    } finally {
      await r.close();
    }
  } catch {
    return {
      head: "",
      tail: "",
    };
  }
}
async function bPu(e) {
  try {
    if (!(await ij.lstat(e)).isFile()) return !1;
  } catch (n) {
    return !(n && typeof n === "object" && "code" in n && n.code === "ENOENT");
  }
  let t;
  try {
    t = await ij.open(e, "r");
  } catch (n) {
    return !(n && typeof n === "object" && "code" in n && n.code === "ENOENT");
  }
  try {
    let n = zEs.createInterface({
      input: t.createReadStream(),
    });
    for await (let r of n)
      if (r.includes('"type":"user"') || r.includes('"type":"assistant"')) return (n.close(), !0);
    return !1;
  } catch {
    return !0;
  } finally {
    await t.close().catch(() => {});
  }
}
async function xae(e, t, n) {
  let r = await jA(t);
  if (FS(e) === null)
    return {
      path: uY.join(aj(r), "invalid-resume-id.jsonl"),
      hasMessages: !1,
      via: "computed",
    };
  let o = uY.join(aj(r), `${e}.jsonl`),
    s = [];
  if (n !== void 0)
    s.push(
      n.endsWith(`${e}.jsonl`)
        ? {
            path: n,
            via: "linkScanPath",
          }
        : {
            path: uY.join(uY.dirname(n), `${e}.jsonl`),
            via: "linkScanDir",
          },
    );
  for (let a of await Px(r))
    s.push({
      path: uY.join(a, `${e}.jsonl`),
      via: "projectDir",
    });
  s.push({
    path: o,
    via: "computed",
  });
  let i = new Set();
  for (let a of s) {
    if (i.has(a.path)) continue;
    if ((i.add(a.path), await bPu(a.path)))
      return {
        ...a,
        hasMessages: !0,
      };
  }
  return {
    ...s[0],
    hasMessages: !1,
  };
}
async function Wpn(e) {
  try {
    let t = await ij.open(e, "r");
    try {
      let n = await t.stat(),
        r = Buffer.allocUnsafe(Mw),
        o = await t.read(r, 0, Mw, 0);
      if (o.bytesRead === 0) return null;
      let s = r.toString("utf8", 0, o.bytesRead),
        i = Math.max(0, n.size - Mw),
        a = s;
      if (i > 0) {
        let l = await t.read(r, 0, Mw, i);
        a = r.toString("utf8", 0, l.bytesRead);
      }
      return {
        mtime: n.mtime.getTime(),
        size: n.size,
        head: s,
        tail: a,
      };
    } finally {
      await t.close();
    }
  } catch {
    return null;
  }
}
function SPu(e) {
  return Math.abs(eCe(e)).toString(36);
}
function LE(e) {
  let t = e.replace(/[^a-zA-Z0-9]/g, "-");
  if (t.length <= ZZe) return t;
  return `${t.slice(0, ZZe)}-${SPu(e)}`;
}
function PO() {
  return uY.join(tr(), "projects");
}
function aj(e) {
  return uY.join(PO(), LE(e));
}
async function jA(e) {
  try {
    return o_(await ij.realpath(e));
  } catch {
    return o_(e);
  }
}
async function Px(e) {
  let t = aj(e),
    n = [];
  try {
    (await ij.readdir(t), n.push(t));
  } catch {}
  let r = LE(e);
  if (r.length <= ZZe) return n;
  let o = r.slice(0, ZZe) + "-",
    s = PO();
  try {
    for (let i of await ij.readdir(s, {
      withFileTypes: !0,
    })) {
      if (!i.isDirectory() || !i.name.startsWith(o)) continue;
      let a = uY.join(s, i.name);
      if (a !== t) n.push(a);
    }
  } catch {}
  return n;
}
async function eAs(e) {
  return (await Px(e))[0];
}
async function rCe(e, t) {
  let n = `${e}.jsonl`;
  async function r(i, a) {
    let l = uY.join(i, n);
    try {
      let c = await ij.stat(l);
      if (c.size > 0)
        return {
          filePath: l,
          projectPath: a,
          fileSize: c.size,
        };
    } catch {}
    return;
  }
  if (t) {
    let i = await jA(t);
    for (let l of await Px(i)) {
      let c = await r(l, i);
      if (c) return c;
    }
    let a;
    try {
      a = await e9(i);
    } catch {
      a = [];
    }
    for (let l of a) {
      if (l === i) continue;
      for (let c of await Px(l)) {
        let u = await r(c, l);
        if (u) return u;
      }
    }
    return;
  }
  let o = PO(),
    s;
  try {
    s = await ij.readdir(o);
  } catch {
    return;
  }
  for (let i of s) {
    let a = await r(uY.join(o, i), void 0);
    if (a) return a;
  }
  return;
}
function HPu() {
  return (APu ??= Buffer.from('"compact_boundary"'));
}
function tAs(e) {
  try {
    let t = JSON.parse(e);
    if (t.type !== "system" || t.subtype !== "compact_boundary") return null;
    return {
      hasPreservedSegment: Boolean(
        t.compactMetadata?.preservedSegment || t.compactMetadata?.preservedMessages,
      ),
    };
  } catch {
    return null;
  }
}
function UFe(e, t, n, r) {
  let o = r - n;
  if (o <= 0) return;
  if (e.len + o > e.buf.length) {
    let s = Buffer.allocUnsafe(Math.min(Math.max(e.buf.length * 2, e.len + o), e.cap));
    (e.buf.copy(s, 0, 0, e.len), (e.buf = s));
  }
  (t.copy(e.buf, e.len, n, r), (e.len += o));
}
function Upn(e, t, n, r) {
  return r - n >= t.length && e.compare(t, 0, t.length, n, n + t.length) === 0;
}
function CPu(e, t, n) {
  if (((e.straddleSnapCarryLen = 0), (e.straddleSnapTailEnd = 0), e.carryLen === 0)) return 0;
  let r = e.carryBuf,
    o = t.indexOf(iRt);
  if (o === -1 || o >= n) return 0;
  let s = o + 1;
  if (Upn(r, Fpn, 0, e.carryLen))
    ((e.straddleSnapCarryLen = e.carryLen), (e.straddleSnapTailEnd = s), (e.lastSnapSrc = null));
  else if (e.carryLen < Fpn.length) return 0;
  else {
    if (Upn(r, TPu, 0, e.carryLen)) {
      let i = tAs(r.toString("utf-8", 0, e.carryLen) + t.toString("utf-8", 0, o));
      if (i?.hasPreservedSegment) e.hasPreservedSegment = !0;
      else if (i)
        ((e.out.len = 0),
          (e.boundaryStartOffset = e.bufFileOff),
          (e.hasPreservedSegment = !1),
          (e.lastSnapSrc = null));
    }
    (UFe(e.out, r, 0, e.carryLen), UFe(e.out, t, 0, s));
  }
  return ((e.bufFileOff += e.carryLen + s), (e.carryLen = 0), s);
}
function IPu(e, t, n) {
  let r = t.indexOf(n),
    o = 0,
    s = 0,
    i = -1,
    a = -1,
    l = t.indexOf(iRt);
  while (l !== -1) {
    let c = l + 1;
    if (r !== -1 && r < s) r = t.indexOf(n, s);
    if (Upn(t, Fpn, s, c)) (UFe(e.out, t, o, s), (i = s), (a = c), (o = c));
    else if (r >= s && r < Math.min(s + wPu, c)) {
      let u = tAs(t.toString("utf-8", s, l));
      if (u?.hasPreservedSegment) e.hasPreservedSegment = !0;
      else if (u)
        ((e.out.len = 0),
          (e.boundaryStartOffset = e.bufFileOff + s),
          (e.hasPreservedSegment = !1),
          (e.lastSnapSrc = null),
          (i = -1),
          (e.straddleSnapCarryLen = 0),
          (o = s));
      r = t.indexOf(n, r + n.length);
    }
    ((s = c), (l = t.indexOf(iRt, s)));
  }
  return (
    UFe(e.out, t, o, s),
    {
      lastSnapStart: i,
      lastSnapEnd: a,
      trailStart: s,
    }
  );
}
function xPu(e, t, n, r, o) {
  if (r !== -1) {
    if (((e.lastSnapLen = o - r), e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length))
      e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    (t.copy(e.lastSnapBuf, 0, r, o), (e.lastSnapSrc = e.lastSnapBuf));
  } else if (e.straddleSnapCarryLen > 0) {
    if (
      ((e.lastSnapLen = e.straddleSnapCarryLen + e.straddleSnapTailEnd),
      e.lastSnapBuf === void 0 || e.lastSnapLen > e.lastSnapBuf.length)
    )
      e.lastSnapBuf = Buffer.allocUnsafe(e.lastSnapLen);
    (e.carryBuf.copy(e.lastSnapBuf, 0, 0, e.straddleSnapCarryLen),
      n.copy(e.lastSnapBuf, e.straddleSnapCarryLen, 0, e.straddleSnapTailEnd),
      (e.lastSnapSrc = e.lastSnapBuf));
  }
}
function kPu(e, t, n) {
  if (((e.carryLen = t.length - n), e.carryLen > 0)) {
    if (e.carryBuf === void 0 || e.carryLen > e.carryBuf.length)
      e.carryBuf = Buffer.allocUnsafe(e.carryLen);
    t.copy(e.carryBuf, 0, n, t.length);
  }
}
function RPu(e) {
  if (e.carryLen > 0) {
    let t = e.carryBuf;
    if (Upn(t, Fpn, 0, e.carryLen)) ((e.lastSnapSrc = t), (e.lastSnapLen = e.carryLen));
    else UFe(e.out, t, 0, e.carryLen);
  }
  if (e.lastSnapSrc) {
    if (e.out.len > 0 && e.out.buf[e.out.len - 1] !== iRt) UFe(e.out, vPu, 0, 1);
    UFe(e.out, e.lastSnapSrc, 0, e.lastSnapLen);
  }
}
async function qpn(e, t) {
  let n = HPu(),
    r = EPu,
    o = {
      out: {
        buf: Buffer.allocUnsafe(Math.min(t, 8388608)),
        len: 0,
        cap: t + 1,
      },
      boundaryStartOffset: 0,
      hasPreservedSegment: !1,
      lastSnapSrc: null,
      lastSnapLen: 0,
      lastSnapBuf: void 0,
      bufFileOff: 0,
      carryLen: 0,
      carryBuf: void 0,
      straddleSnapCarryLen: 0,
      straddleSnapTailEnd: 0,
    },
    s = Buffer.allocUnsafe(r),
    i = await ij.open(e, "r");
  try {
    let a = 0;
    while (a < t) {
      let { bytesRead: l } = await i.read(s, 0, Math.min(r, t - a), a);
      if (l === 0) break;
      a += l;
      let c = CPu(o, s, l),
        u;
      if (o.carryLen > 0) {
        let p = o.carryLen + (l - c);
        ((u = Buffer.allocUnsafe(p)),
          o.carryBuf.copy(u, 0, 0, o.carryLen),
          s.copy(u, o.carryLen, c, l));
      } else u = s.subarray(c, l);
      let d = IPu(o, u, n);
      (xPu(o, u, s, d.lastSnapStart, d.lastSnapEnd),
        kPu(o, u, d.trailStart),
        (o.bufFileOff += d.trailStart));
    }
    RPu(o);
  } finally {
    await i.close();
  }
  return {
    boundaryStartOffset: o.boundaryStartOffset,
    postBoundaryBuf: o.out.buf.subarray(0, o.out.len),
    hasPreservedSegment: o.hasPreservedSegment,
  };
}
var Qkr,
  VEs,
  ij,
  uY,
  zEs,
  Mw = 65536,
  jpn,
  _Pu,
  ZZe = 200,
  EPu = 1048576,
  oCe = 5242880,
  APu,
  Fpn,
  TPu,
  iRt = 10,
  vPu,
  wPu = 256;
