// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cva
// matched 2.1.88 source: src/utils/fsOperations.ts
// class=modified (alt of src/utils/fsOperations.ts)  jaccard=0.1055  score=0.3113  fileCov=0.1375
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __commonJS module cva] (exports=pWy, module=lva)
var pWy = {};
var lva = {
  exports: pWy,
};
var aF = Jb(),
  t3t = require("path"),
  dAp = bre().mkdirsSync,
  pAp = Duo().utimesMillisSync,
  n3t = Z5e();
function fAp(e, t, n) {
  if (typeof n === "function")
    n = {
      filter: n,
    };
  ((n = n || {}),
    (n.clobber = "clobber" in n ? !!n.clobber : true),
    (n.overwrite = "overwrite" in n ? !!n.overwrite : n.clobber),
    n.preserveTimestamps);
  let { srcStat: r, destStat: o } = n3t.checkPathsSync(e, t, "copy", n);
  return (n3t.checkParentPathsSync(e, r, t, "copy"), mAp(o, e, t, n));
}
function mAp(e, t, n, r) {
  if (r.filter && !r.filter(t, n)) return;
  let o = t3t.dirname(n);
  if (!aF.existsSync(o)) dAp(o);
  return sva(e, t, n, r);
}
function gAp(e, t, n, r) {
  if (r.filter && !r.filter(t, n)) return;
  return sva(e, t, n, r);
}
function sva(e, t, n, r) {
  let s = (r.dereference ? aF.statSync : aF.lstatSync)(t);
  if (s.isDirectory()) return AAp(s, e, t, n, r);
  else if (s.isFile() || s.isCharacterDevice() || s.isBlockDevice()) return hAp(s, e, t, n, r);
  else if (s.isSymbolicLink()) return vAp(e, t, n, r);
  else if (s.isSocket()) throw Error(`Cannot copy a socket file: ${t}`);
  else if (s.isFIFO()) throw Error(`Cannot copy a FIFO pipe: ${t}`);
  throw Error(`Unknown file: ${t}`);
}
function hAp(e, t, n, r, o) {
  if (!t) return iva(e, n, r, o);
  return yAp(e, n, r, o);
}
function yAp(e, t, n, r) {
  if (r.overwrite) return (aF.unlinkSync(n), iva(e, t, n, r));
  else if (r.errorOnExist) throw Error(`'${n}' already exists`);
}
function iva(e, t, n, r) {
  if ((aF.copyFileSync(t, n), r.preserveTimestamps)) _Ap(e.mode, t, n);
  return Muo(n, e.mode);
}
function _Ap(e, t, n) {
  if (bAp(e)) SAp(n, e);
  return EAp(t, n);
}
function bAp(e) {
  return (e & 128) === 0;
}
function SAp(e, t) {
  return Muo(e, t | 128);
}
function Muo(e, t) {
  return aF.chmodSync(e, t);
}
function EAp(e, t) {
  let n = aF.statSync(e);
  return pAp(t, n.atime, n.mtime);
}
function AAp(e, t, n, r, o) {
  if (!t) return HAp(e.mode, n, r, o);
  return ava(n, r, o);
}
function HAp(e, t, n, r) {
  return (aF.mkdirSync(n), ava(t, n, r), Muo(n, e));
}
function ava(e, t, n) {
  aF.readdirSync(e).forEach((r) => TAp(r, e, t, n));
}
function TAp(e, t, n, r) {
  let o = t3t.join(t, e),
    s = t3t.join(n, e),
    { destStat: i } = n3t.checkPathsSync(o, s, "copy", r);
  return gAp(i, o, s, r);
}
function vAp(e, t, n, r) {
  let o = aF.readlinkSync(t);
  if (r.dereference) o = t3t.resolve(process.cwd(), o);
  if (!e) return aF.symlinkSync(o, n);
  else {
    let s;
    try {
      s = aF.readlinkSync(n);
    } catch (i) {
      if (i.code === "EINVAL" || i.code === "UNKNOWN") return aF.symlinkSync(o, n);
      throw i;
    }
    if (r.dereference) s = t3t.resolve(process.cwd(), s);
    if (n3t.isSrcSubdir(o, s))
      throw Error(`Cannot copy '${o}' to a subdirectory of itself, '${s}'.`);
    if (aF.statSync(n).isDirectory() && n3t.isSrcSubdir(s, o))
      throw Error(`Cannot overwrite '${s}' with '${o}'.`);
    return wAp(o, n);
  }
}
function wAp(e, t) {
  return (aF.unlinkSync(t), aF.symlinkSync(e, t));
}
lva.exports = fAp;
