// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module V9i
// matched 2.1.88 source: src/tools/FileReadTool/imageProcessor.ts
// class=modified  jaccard=0.1879  score=0.2947  fileCov=0.3416
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var V9i = Q((isy, q9i) => {
  /*!
  Copyright 2013 Lovell Fuller and others.
  SPDX-License-Identifier: Apache-2.0
  */
  var abe = s9i();
  l9i()(abe);
  m9i()(abe);
  h9i()(abe);
  E9i()(abe);
  D9i()(abe);
  M9i()(abe);
  U9i()(abe);
  W9i()(abe);
  q9i.exports = abe;
});
async function lbe() {
  if (EDn) return EDn.default;
  if (dm())
    try {
      let n = await Promise.resolve().then(() => (pQr(), dQr)),
        r = n.sharp || n.default;
      return (
        (EDn = {
          default: r,
        }),
        r
      );
    } catch {
      console.warn("Native image processor not available, falling back to sharp");
    }
  let e = await Promise.resolve().then(() => R(V9i(), 1)),
    t = N8d(e);
  return (
    (EDn = {
      default: t,
    }),
    t
  );
}
function N8d(e) {
  let t = typeof e === "function" ? e : e.default;
  if (typeof t !== "function")
    throw Object.assign(
      Error(
        "sharp module loaded but its export is not callable (native libvips binding likely failed to load)",
      ),
      {
        code: "ERR_DLOPEN_FAILED",
      },
    );
  return t;
}
var EDn = null;
var ADn = () => {};
function ja(e) {
  return e
    .map((t) => {
      let n = String(t);
      if (n === "") return "''";
      if (/^[A-Za-z0-9_./:=@+,-]+$/.test(n)) return n;
      return "'" + n.replaceAll("'", `'"'"'`) + "'";
    })
    .join(" ");
}
class I0e {
  wslDistroName;
  constructor(e) {
    this.wslDistroName = e;
  }
  async toLocalPath(e) {
    if (!e) return e;
    if (this.wslDistroName) {
      let o = e.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
      if (o && o[1] !== this.wslDistroName) return e;
    }
    let { stdout: t, code: n } = await $n("wslpath", ["-u", e], {
        useCwd: !1,
      }),
      r = t.trim();
    if (n === 0 && r) return r;
    return e.replaceAll("\\", "/").replace(/^([A-Z]):/i, (o, s) => `/mnt/${s.toLowerCase()}`);
  }
  async toIDEPath(e) {
    if (!e) return e;
    let { stdout: t, code: n } = await $n("wslpath", ["-w", e], {
        useCwd: !1,
      }),
      r = t.trim();
    if (n === 0 && r) return r;
    return e;
  }
}
function z9i(e, t) {
  let n = e.match(/^\\\\wsl(?:\.localhost|\$)\\([^\\]+)(.*)$/);
  if (n) return n[1] === t;
  return !0;
}
