// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Apo
// matched 2.1.88 source: src/services/mcp/InProcessTransport.ts
// class=partial  jaccard=0.1186  score=0.1449  fileCov=0.3956
// note: low-confidence suggestion: src/services/mcp/InProcessTransport.ts; dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Apo = E(() => {
  oke();
  Vb();
});
class Hpo {
  serverName;
  sendMcpMessage;
  isClosed = !1;
  onclose;
  onerror;
  onmessage;
  constructor(e, t) {
    this.serverName = e;
    this.sendMcpMessage = t;
  }
  async start() {}
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    let t = await this.sendMcpMessage(this.serverName, e);
    if (this.onmessage) this.onmessage(t);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = !0, this.onclose?.();
  }
}
class Tpo {
  sendMcpMessage;
  isClosed = !1;
  constructor(e) {
    this.sendMcpMessage = e;
  }
  onclose;
  onerror;
  onmessage;
  async start() {}
  async send(e) {
    if (this.isClosed) throw Error("Transport is closed");
    this.sendMcpMessage(e);
  }
  async close() {
    if (this.isClosed) return;
    this.isClosed = !0, this.onclose?.();
  }
}
function Nka(e) {
  if (!e.endsWith("/SKILL.md")) return;
  let t = e.slice(0, -9);
  return /^[a-z][a-z0-9+.-]*:\/\/./i.test(t) ? t : void 0;
}
function vFn(e, t, n) {
  let r = t,
    o = t + n;
  while (r < o && e[r] !== 0) r++;
  return Buffer.from(e.buffer, e.byteOffset + t, r - t).toString("utf8");
}
function wpo(e, t, n) {
  if ((e[t] & 128) !== 0) throw new vpo("base-256 tar numeric fields are not supported");
  let r = vFn(e, t, n).trim();
  if (r.length === 0) return 0;
  if (!/^[0-7]+$/.test(r)) throw new vpo(`tar header octal field contains non-octal bytes: "${r}"`);
  return parseInt(r, 8);
}
function nCp(e, t) {
  let n = wpo(e, t + 148, 8),
    r = 0,
    o = 0;
  for (let s = 0; s < ept; s++) {
    let i = s >= 148 && s < 156 ? 32 : e[t + s];
    r += i, o += i < 128 ? i : i - 256;
  }
  return n === r || n === o;
}
function Cpo(e) {
  return e.split(/[/\\]/).filter(t => t !== "" && t !== ".").join("/");
}
function Ipo(e) {
  return e.normalize("NFC").toLowerCase();
}
function rCp(e) {
  let t = {},
    n = 0;
  while (n < e.length) {
    let r = n;
    while (r < e.length && e[r] !== 32) r++;
    let o = parseInt(Buffer.from(e.buffer, e.byteOffset + n, r - n).toString("ascii"), 10);
    if (!Number.isFinite(o) || o <= 0 || n + o > e.length) break;
    let s = Buffer.from(e.buffer, e.byteOffset + r + 1, o - (r - n) - 2).toString("utf8"),
      i = s.indexOf("=");
    if (i > 0) {
      let a = s.slice(0, i),
        l = s.slice(i + 1);
      if (a === "path") t.path = l;else if (a === "size") {
        let c = Number(l);
        if (Number.isFinite(c) && c >= 0) t.size = c;
      }
    }
    n += o;
  }
  return t;
}
function oCp(e, t) {
  let n = {},
    r = new Map(),
    o,
    s,
    i = 0,
    a = 0,
    l = 0;
  while (l + ept <= e.length) {
    let c = !0;
    for (let I = 0; I < ept; I++) if (e[l + I] !== 0) {
      c = !1;
      break;
    }
    if (c) break;
    if (!nCp(e, l)) throw new Bka(l);
    let u = wpo(e, l + 124, 12),
      d = wpo(e, l + 100, 8),
      p = String.fromCharCode(e[l + 156]) || "0",
      f = vFn(e, l, 100),
      g = vFn(e, l + 257, 6) === "ustar" ? vFn(e, l + 345, 155) : "",
      h = eCp.has(p),
      y = !h && s !== void 0 ? s : u,
      b = l + ept,
      _ = Math.ceil(y / ept) * ept;
    if (b + y > e.length) throw Error("Truncated tar: entry data extends past end of archive");
    let S = e.subarray(b, b + y);
    if (l = b + _, h) {
      if (p === "L") {
        let I = S.length;
        while (I > 0 && S[I - 1] === 0) I--;
        o = Buffer.from(S.buffer, S.byteOffset, I).toString("utf8");
      } else if (p === "x" || p === "X") {
        let I = rCp(S);
        o = I.path ?? o, s = I.size ?? s;
      }
      continue;
    }
    let A = o ?? (g ? `${g}/${f}` : f);
    if (o = void 0, s = void 0, Zwp.has(p)) throw new wFn(A);
    if (tCp.has(p)) throw new CFn(A, p);
    if (!odo(A)) throw new z3t(A, "path traversal or absolute path");
    if (p === "5" || A.endsWith("/")) continue;
    if (p !== "0" && p !== "\x00" && p !== "7") continue;
    let v = Cpo(A),
      C = Ipo(v),
      x = r.get(C);
    if (x !== void 0 && x !== A) throw new K3t(x, A);
    if (r.set(C, A), A = v, a++, a > t.maxFiles) throw new IFn(t.maxFiles);
    if (i += y, i > t.maxBytes) throw new Y3t(t.maxBytes);
    n[A] = {
      data: S,
      mode: d & 4095
    };
  }
  return n;
}
async function sCp(e, t) {
  let {
      Gunzip: n
    } = await Promise.resolve().then(() => (Y5e(), G4t)),
    r = [],
    o = 0,
    s = new n((c, u) => {
      if (o += c.length, o > t) throw new Y3t(t);
      r.push(c);
    }),
    i = 65536;
  for (let c = 0; c < e.length; c += i) {
    let u = Math.min(c + i, e.length);
    s.push(e.subarray(c, u), u === e.length);
  }
  if (r.length === 1) return r[0];
  let a = new Uint8Array(o),
    l = 0;
  for (let c of r) a.set(c, l), l += c.length;
  return a;
}
async function Uka(e, t) {
  let r = e.length >= 2 && e[0] === 31 && e[1] === 139 ? await sCp(e, t.maxBytes) : e;
  return oCp(r, t);
}
var ept = 512,
  Zwp,
  eCp,
  tCp,
  z3t,
  wFn,
  CFn,
  Bka,
  vpo,
  K3t,
  IFn,
  Y3t;