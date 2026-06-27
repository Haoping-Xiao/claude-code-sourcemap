// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module z6l
// matched 2.1.88 source: src/upstreamproxy/upstreamproxy.ts
// class=modified (alt of src/upstreamproxy/upstreamproxy.ts)  jaccard=0.0316  score=0.1191  fileCov=0.0412
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module z6l]
((gqf = {
  type: "local-jsx",
  name: "theme",
  description: "Change the theme",
  requires: {
    ink: true,
  },
  load: () => Promise.resolve().then(() => (V6l(), q6l)),
}),
  (Rjo = gqf));
function Y6l(e, t, n, r) {
  let o = Vt();
  if (o === "windows" || !K6l.isAbsolute(e)) return;
  let s;
  try {
    if (r) ((s = process.cwd()), process.chdir(r));
    let i = require("bun:ffi"),
      { symbols: a } = i.dlopen(o === "macos" ? "/usr/lib/libSystem.B.dylib" : "libc.so.6", {
        execve: {
          args: ["ptr", "ptr", "ptr"],
          returns: "int",
        },
      }),
      l = [],
      c = (f) => {
        let m = Buffer.from(f + "\x00", "utf8");
        return (l.push(m), BigInt(i.ptr(m)));
      },
      u = (f) => {
        let m = new BigUint64Array(f.length + 1);
        return (f.forEach((g, h) => (m[h] = c(g))), m);
      },
      d = Object.entries(n).flatMap(([f, m]) => (m === void 0 ? [] : [`${f}=${m}`])),
      p = Buffer.from(e + "\x00", "utf8");
    (a.execve(p, u(t), u(d)),
      T(`execve(${e}) failed \u2014 falling back to spawn`, {
        level: "warn",
      }));
  } catch (i) {
    T(`execReplaceProcess: ${be(i)} \u2014 falling back to spawn`, {
      level: "warn",
    });
  } finally {
    if (s !== void 0)
      try {
        process.chdir(s);
      } catch {}
  }
}
var K6l;
