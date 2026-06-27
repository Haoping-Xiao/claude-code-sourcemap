// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module u0o
// matched 2.1.88 source: src/utils/hooks/ssrfGuard.ts
// class=modified  jaccard=0.4582  score=0.8974  fileCov=0.4835
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function Q_t(e) {
  let t = d0o.isIP(e);
  if (t === 4) return Hgl(e);
  if (t === 6) return Fpf(e);
  return false;
}
function Hgl(e) {
  let t = e.split(".").map(Number),
    [n, r] = t;
  if (t.length !== 4 || n === void 0 || r === void 0 || t.some((o) => Number.isNaN(o)))
    return false;
  if (n === 127) return false;
  if (n === 0) return true;
  if (n === 10) return true;
  if (n === 169 && r === 254) return true;
  if (n === 172 && r >= 16 && r <= 31) return true;
  if (n === 100 && r >= 64 && r <= 127) return true;
  if (n === 192 && r === 168) return true;
  return false;
}
function Fpf(e) {
  let t = e.toLowerCase();
  if (t === "::1") return false;
  if (t === "::") return true;
  let n = Gpf(t);
  if (n !== null) return Hgl(n);
  if (t.startsWith("fc") || t.startsWith("fd")) return true;
  let r = bi(t, ":");
  if (r && r.length === 4 && r >= "fe80" && r <= "febf") return true;
  return false;
}
function jpf(e) {
  let t = [];
  if (e.includes(".")) {
    let c = e.lastIndexOf(":"),
      u = e.slice(c + 1);
    e = e.slice(0, c);
    let d = u.split(".").map(Number);
    if (d.length !== 4 || d.some((p) => !Number.isInteger(p) || p < 0 || p > 255)) return null;
    t = [(d[0] << 8) | d[1], (d[2] << 8) | d[3]];
  }
  let n = e.indexOf("::"),
    r,
    o;
  if (n === -1) ((r = e.split(":")), (o = []));
  else {
    let c = e.slice(0, n),
      u = e.slice(n + 2);
    ((r = c === "" ? [] : c.split(":")), (o = u === "" ? [] : u.split(":")));
  }
  let i = 8 - t.length - r.length - o.length;
  if (i < 0) return null;
  let l = [...r, ...Array(i).fill("0"), ...o].map((c) => parseInt(c, 16));
  if (l.some((c) => Number.isNaN(c) || c < 0 || c > 65535)) return null;
  return (l.push(...t), l.length === 8 ? l : null);
}
function Gpf(e) {
  let t = jpf(e);
  if (!t) return null;
  if (t[0] === 0 && t[1] === 0 && t[2] === 0 && t[3] === 0 && t[4] === 0 && t[5] === 65535) {
    let n = t[6],
      r = t[7];
    return `${n >> 8}.${n & 255}.${r >> 8}.${r & 255}`;
  }
  return null;
}
function ssrfGuardedLookup(hostname, options, callback) {
  let r = "all" in options && options.all === true,
    o = d0o.isIP(hostname);
  if (o !== 0) {
    if (Q_t(hostname)) {
      callback(ssrfError(hostname, hostname), "");
      return;
    }
    let s = o === 6 ? 6 : 4;
    if (r)
      callback(null, [
        {
          address: hostname,
          family: s,
        },
      ]);
    else callback(null, hostname, s);
    return;
  }
  Agl.lookup(
    hostname,
    {
      all: true,
    },
    (s, i) => {
      if (s) {
        callback(s, "");
        return;
      }
      for (let { address: c } of i)
        if (Q_t(c)) {
          callback(ssrfError(hostname, c), "");
          return;
        }
      let a = i[0];
      if (!a) {
        callback(
          Object.assign(Error(`ENOTFOUND ${hostname}`), {
            code: "ENOTFOUND",
            hostname: hostname,
          }),
          "",
        );
        return;
      }
      let l = a.family === 6 ? 6 : 4;
      if (r)
        callback(
          null,
          i.map((c) => ({
            address: c.address,
            family: c.family === 6 ? 6 : 4,
          })),
        );
      else callback(null, a.address, l);
    },
  );
}
function ssrfError(hostname, address) {
  let n = Error(
    `HTTP hook blocked: ${hostname} resolves to ${address} (private/link-local address). Loopback (127.0.0.1, ::1) is allowed for local dev.`,
  );
  return Object.assign(n, {
    code: "ERR_HTTP_HOOK_BLOCKED_ADDRESS",
    hostname: hostname,
    address: address,
  });
}
var Agl, d0o;
