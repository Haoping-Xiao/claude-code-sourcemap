// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ANo
// matched 2.1.88 source: src/tools/FileReadTool/FileReadTool.ts
// class=modified (alt of src/tools/FileReadTool/FileReadTool.ts)  jaccard=0.0094  score=0.1272  fileCov=0.01
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function Nfe() {
  return HNo.join(tr(), uNl);
}
function S$f(e) {
  return HNo.join(tr(), `${uNl}.tmp.${e.pid}.${e.startedAt}`);
}
async function dNl(e) {
  try {
    return (
      await z$.writeFile(Nfe(), De(e, null, 2), {
        flag: "wx",
      }),
      true
    );
  } catch (t) {
    if (on(t) === "EEXIST") return false;
    throw t;
  }
}
async function pNl(e) {
  let t = await mse();
  if (!t || t.pid !== e.pid || t.startedAt !== e.startedAt) return;
  await anr({
    ...t,
    bgDisabled: true,
  });
}
async function mse() {
  let e;
  try {
    let n = await z$.lstat(Nfe());
    if (!n.isFile() || n.size > 65536)
      return (
        await z$
          .rm(Nfe(), {
            recursive: true,
            force: true,
          })
          .catch(() => {}),
        null
      );
    e = await z$.readFile(Nfe(), "utf8");
  } catch (n) {
    if (wn(n)) return null;
    throw n;
  }
  let t = Ia(e, false);
  if (t && typeof t === "object") {
    let n = t;
    if (typeof n.pid === "number" && typeof n.version === "string") return t;
  }
  return null;
}
async function anr(e) {
  let t = S$f(e);
  await z$.writeFile(t, De(e, null, 2), {
    flag: "wx",
  });
  try {
    await z$.rename(t, Nfe());
  } catch (r) {
    let o = on(r);
    if (o === "EEXIST" || o === "EPERM") {
      await z$.unlink(Nfe()).catch(() => {});
      try {
        await z$.rename(t, Nfe());
      } catch (s) {
        await z$.unlink(t).catch(() => {});
        let i = on(s);
        if (i === "EEXIST" || i === "EPERM") return false;
        throw s;
      }
    } else throw (await z$.unlink(t).catch(() => {}), r);
  }
  let n = await mse();
  return n?.pid === e.pid && n?.startedAt === e.startedAt;
}
async function fNl() {
  try {
    await z$.unlink(Nfe());
  } catch (e) {
    if (!wn(e)) throw e;
  }
}
async function TNo(e) {
  let t;
  try {
    t = await z$.readFile(`/proc/${e}/cmdline`, "utf8");
  } catch {
    return true;
  }
  let n = t.split("\x00");
  return n[0] === "claude daemon" || n.slice(1, 4).includes("daemon");
}
async function uR() {
  let e = await mse();
  if (!e) return null;
  try {
    process.kill(e.pid, 0);
  } catch {
    return null;
  }
  if (!(await TNo(e.pid))) return null;
  if (!(await bv(e.pid, e.procStart))) return null;
  return e;
}
async function F7t() {
  let e = await uR().catch(() => null);
  if (!e) return null;
  return (await EEt(e.pid), e.pid);
}
async function mNl(e) {
  let t = await uR().catch(() => null);
  return !!t && t.version !== e;
}
var z$,
  HNo,
  uNl = "daemon.lock";
