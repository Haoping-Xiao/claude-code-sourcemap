// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module har
// matched 2.1.88 source: src/upstreamproxy/upstreamproxy.ts
// class=modified (alt of src/upstreamproxy/upstreamproxy.ts)  jaccard=0.0308  score=0.1086  fileCov=0.0412
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module har] deps: Un, Is
irc = require("os");
function mJf(e) {
  let t = Vt();
  if (t === "windows") return null;
  let n = e._handle,
    r = typeof n?.fd === "number" ? n.fd : -1;
  if (r < 0) return null;
  try {
    return t === "macos" ? hJf(r) : gJf(r);
  } catch (o) {
    return (
      T(`[daemon] peer uid lookup failed: ${o instanceof Error ? o.message : String(o)}`, {
        level: "warn",
      }),
      null
    );
  }
}
function lrc(e, t = mJf) {
  let n = process.getuid?.();
  if (n == null) return null;
  let r = t(e);
  if (r == null) return null;
  if (r === n) return null;
  let o = `permission denied: connecting uid ${r} != daemon uid ${n} (retry without sudo, or as the daemon owner)`;
  return (
    T(`[daemon] rejecting control connection: ${o}`, {
      level: "error",
    }),
    o
  );
}
function gJf(e) {
  if (yar === void 0)
    yar =
      crc("libc.so.6", {
        getsockopt: {
          args: ["int", "int", "int", "ptr", "ptr"],
          returns: "int",
        },
      })?.getsockopt ?? null;
  if (yar == null) return null;
  let t = new Uint8Array(12),
    n = new Uint32Array([12]);
  if (yar(e, 1, 17, t, n) !== 0) return null;
  return new DataView(t.buffer).getUint32(4, true);
}
function hJf(e) {
  if (_ar === void 0)
    _ar =
      crc("/usr/lib/libSystem.B.dylib", {
        getpeereid: {
          args: ["int", "ptr", "ptr"],
          returns: "int",
        },
      })?.getpeereid ?? null;
  if (_ar == null) return null;
  let t = new Uint32Array(1),
    n = new Uint32Array(1);
  return _ar(e, t, n) === 0 ? Number(t[0]) : null;
}
function crc(e, t) {
  try {
    return require("bun:ffi").dlopen(e, t).symbols;
  } catch (n) {
    return (
      T(`[daemon] dlopen(${e}) failed: ${n instanceof Error ? n.message : String(n)}`, {
        level: "warn",
      }),
      null
    );
  }
}
var yar, _ar;
