// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ED
// matched 2.1.88 source: src/utils/stringUtils.ts
// class=modified  jaccard=0.4101  score=0.6358  fileCov=0.536
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module ED] deps: FK
h7c = new Set(["EPIPE", "EIO", "ENXIO", "EBADF"]);
function Ff(e, t) {
  return e.repeat(Number.isFinite(t) && t > 0 ? t : 0);
}
function wx(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Cx(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function bn(e, t, n = t + "s") {
  return e === 1 ? t : n;
}
function mwe(e, t) {
  if (e.length <= t) return e;
  let n = [];
  for (let r of e) {
    if (n.length >= t) break;
    n.push(r);
  }
  return n.join("");
}
function Ix(e, t) {
  if (e.length <= t) return e;
  let n = e.slice(0, t),
    r = n.charCodeAt(t - 1);
  return r >= 55296 && r <= 56319 ? n.slice(0, -1) : n;
}
function zJe(e, t) {
  if (e.length <= t) return e;
  let n = e.slice(-t),
    r = n.charCodeAt(0);
  return r >= 56320 && r <= 57343 ? n.slice(1) : n;
}
function Nin(e) {
  if (Oin) return Oin(e);
  return !_7c.test(e);
}
function Bin(e) {
  if (ais) return ais(e);
  return e.replace(lis, "\uFFFD");
}
function cis(e) {
  if (Oin && Oin(e)) return e;
  return e.replace(lis, "");
}
function KJe(e) {
  let t = false,
    n = [e];
  while (n.length > 0) {
    let r = n.pop();
    if (Array.isArray(r))
      for (let o = 0; o < r.length; o++) {
        let s = r[o];
        if (typeof s === "string") {
          if (!Nin(s)) ((r[o] = Bin(s)), (t = true));
        } else if (s !== null && typeof s === "object") n.push(s);
      }
    else if (r !== null && typeof r === "object") {
      let o = r;
      for (let s of Object.keys(o)) {
        let i = o[s];
        if (typeof i === "string") {
          if (!Nin(i)) ((o[s] = Bin(i)), (t = true));
        } else if (i !== null && typeof i === "object") n.push(i);
      }
    }
  }
  return t;
}
function Uin(e) {
  let t = [e];
  while (t.length > 0) {
    let n = t.pop();
    if (Array.isArray(n))
      for (let r = 0; r < n.length; r++) {
        let o = n[r];
        if (typeof o === "string") {
          if (!Nin(o)) return true;
        } else if (o !== null && typeof o === "object") t.push(o);
      }
    else if (n !== null && typeof n === "object") {
      let r = n;
      for (let o of Object.keys(r)) {
        let s = r[o];
        if (typeof s === "string") {
          if (!Nin(s)) return true;
        } else if (s !== null && typeof s === "object") t.push(s);
      }
    }
  }
  return false;
}
function bi(e, t) {
  let n = e.indexOf(t);
  return n === -1 ? e : e.slice(0, n);
}
function Gd(e) {
  return bi(
    e,
    `
`,
  );
}
function hu(e, t, n = 0) {
  let r = 0,
    o = e.indexOf(t, n);
  while (o !== -1) (r++, (o = e.indexOf(t, o + 1)));
  return r;
}
function jK(e) {
  return e.replace(/[\uFF10-\uFF19]/g, (t) => String.fromCharCode(t.charCodeAt(0) - 65248));
}
function nae(e) {
  return e.replaceAll("\u3000", " ");
}
function safeJoinLines(lines, t = ",", n = uis) {
  let o = "";
  for (let s of lines) {
    let i = o ? t : "",
      a = i + s;
    if (o.length + a.length <= n) o += a;
    else {
      let l = n - o.length - i.length - 14;
      if (l > 0) o += i + s.slice(0, l) + "...[truncated]";
      else o += "...[truncated]";
      return o;
    }
  }
  return o;
}
class EndTruncatingAccumulator {
  maxSize;
  content = "";
  isTruncated = false;
  totalBytesReceived = 0;
  constructor(e = uis) {
    this.maxSize = e;
  }
  append(e) {
    let t = typeof e === "string" ? e : e.toString();
    if (
      ((this.totalBytesReceived += t.length),
      this.isTruncated && this.content.length >= this.maxSize)
    )
      return;
    if (this.content.length + t.length > this.maxSize) {
      let n = this.maxSize - this.content.length;
      if (n > 0) this.content += t.slice(0, n);
      this.isTruncated = true;
    } else this.content += t;
  }
  toString() {
    if (!this.isTruncated) return this.content;
    let e = this.totalBytesReceived - this.maxSize,
      t = Math.round(e / 1024);
    return (
      this.content +
      `
... [output truncated - ${t}KB removed]`
    );
  }
  clear() {
    ((this.content = ""), (this.isTruncated = false), (this.totalBytesReceived = 0));
  }
  get length() {
    return this.content.length;
  }
  get truncated() {
    return this.isTruncated;
  }
  get totalBytes() {
    return this.totalBytesReceived;
  }
}
function jin(e, t) {
  let n = e.split(`
`);
  if (n.length <= t) return e;
  return (
    n.slice(0, t).join(`
`) + "\u2026"
  );
}
function SUe(e, t) {
  if (e.length <= t) return e;
  let n = Ix(e, t);
  return `${n}\u2026 [+${e.length - n.length} chars]`;
}
var _7c,
  lis,
  Oin,
  ais,
  uis = 33554432;
