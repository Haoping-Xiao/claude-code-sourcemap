// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fHa
// matched 2.1.88 source: src/utils/fsOperations.ts
// class=modified (alt of src/utils/fsOperations.ts)  jaccard=0.1055  score=0.3113  fileCov=0.1375
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var fHa = Q((MGy, pHa) => {
  var iF = Jb(),
    z4t = require("path"),
    pSp = yre().mkdirsSync,
    fSp = buo().utimesMillisSync,
    K4t = J5e();
  function mSp(e, t, n) {
    if (typeof n === "function")
      n = {
        filter: n,
      };
    ((n = n || {}),
      (n.clobber = "clobber" in n ? !!n.clobber : true),
      (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
      n.preserveTimestamps);
    let { srcStat: r, destStat: o } = K4t.checkPathsSync(e, t, "copy", n);
    return (K4t.checkParentPathsSync(e, r, t, "copy"), gSp(o, e, t, n));
  }
  function gSp(e, t, n, r) {
    if (r.filter && !r.filter(t, n)) return;
    let o = z4t.dirname(n);
    if (!iF.existsSync(o)) pSp(o);
    return cHa(e, t, n, r);
  }
  function hSp(e, t, n, r) {
    if (r.filter && !r.filter(t, n)) return;
    return cHa(e, t, n, r);
  }
  function cHa(e, t, n, r) {
    let s = (r.dereference ? iF.statSync : iF.lstatSync)(t);
    if (s.isDirectory()) return HSp(s, e, t, n, r);
    else if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return ySp(s, e, t, n, r);
    else if (s.isSymbolicLink()) return wSp(e, t, n, r);
    else if (s.isSocket()) throw Error(`Cannot copy a socket file: ${t}`);
    else if (s.isFIFO()) throw Error(`Cannot copy a FIFO pipe: ${t}`);
    throw Error(`Unknown file: ${t}`);
  }
  function ySp(e, t, n, r, o) {
    if (!t) return uHa(e, n, r, o);
    return _Sp(e, n, r, o);
  }
  function _Sp(e, t, n, r) {
    if (r.overwrite) return (iF.unlinkSync(n), uHa(e, t, n, r));
    else if (r.errorOnExist) throw Error(`'${n}' already exists`);
  }
  function uHa(e, t, n, r) {
    if ((iF.copyFileSync(t, n), r.preserveTimestamps)) bSp(e.mode, t, n);
    return Euo(n, e.mode);
  }
  function bSp(e, t, n) {
    if (SSp(e)) ESp(n, e);
    return ASp(t, n);
  }
  function SSp(e) {
    return (e & 128) === 0;
  }
  function ESp(e, t) {
    return Euo(e, t | 128);
  }
  function Euo(e, t) {
    return iF.chmodSync(e, t);
  }
  function ASp(e, t) {
    let n = iF.statSync(e);
    return fSp(t, n.atime, n.mtime);
  }
  function HSp(e, t, n, r, o) {
    if (!t) return TSp(e.mode, n, r, o);
    return dHa(n, r, o);
  }
  function TSp(e, t, n, r) {
    return (iF.mkdirSync(n), dHa(t, n, r), Euo(n, e));
  }
  function dHa(e, t, n) {
    iF.readdirSync(e).forEach((r) => vSp(r, e, t, n));
  }
  function vSp(e, t, n, r) {
    let o = z4t.join(t, e),
      s = z4t.join(n, e),
      { destStat: i } = K4t.checkPathsSync(o, s, "copy", r);
    return hSp(i, o, s, r);
  }
  function wSp(e, t, n, r) {
    let o = iF.readlinkSync(t);
    if (r.dereference) o = z4t.resolve(process.cwd(), o);
    if (!e) return iF.symlinkSync(o, n);
    else {
      let s;
      try {
        s = iF.readlinkSync(n);
      } catch (i) {
        if (i.code === "EINVAL" || i.code === "UNKNOWN") return iF.symlinkSync(o, n);
        throw i;
      }
      if (r.dereference) s = z4t.resolve(process.cwd(), s);
      if (K4t.isSrcSubdir(o, s))
        throw Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
      if (iF.statSync(n).isDirectory() && K4t.isSrcSubdir(s, o))
        throw Error(`Cannot overwrite '${s}' with '${o}'.`);
      return CSp(o, n);
    }
  }
  function CSp(e, t) {
    return (iF.unlinkSync(t), iF.symlinkSync(e, t));
  }
  pHa.exports = mSp;
});
