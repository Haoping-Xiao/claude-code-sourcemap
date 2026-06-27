// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Vv
// matched 2.1.88 source: src/utils/attachments.ts
// class=modified (alt of src/utils/attachments.ts)  jaccard=0.0207  score=0.3575  fileCov=0.0215
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Vv] deps: kt, dn, Du, lT, ii, $pe, LQn, Hu, sr, ys, bk, KI, aE, dC, Lo, hYt, vn, aS, je, At, Pqe, sF, G4, dr, bMe, xW, I1, Ao, k0, Zf, dre, ft, Qbe, M8e, BE, lf, uDe, ik, fp, At, oc, ty, fh, N0o, Gy, oo, Yf, xF, bH, S_, ft, GX, IX, T3e, LX, i0l, VM, kZn, S_e, MZn, _pt, co, wr, fn, m1, yYt, HU, Il, Cp, u$, ZU, QMo, Un, sp, Jt, S0n, YWe, BMo, Lne, sA, b0l, PDo, Rd, Uh, M7, YI, Mp, Sj, hP, bk, Il
((RSt = require("fs/promises")),
  (Nk = require("path")),
  (r$o = require("crypto")),
  (NCf = (Eoe(), ro(Ope))),
  (FZn = (f4(), ro(URe)).BRIEF_TOOL_NAME),
  (_Yt = {
    TURNS_SINCE_WRITE: 10,
    TURNS_BETWEEN_REMINDERS: 10,
  }));
((n$o = {
  TURNS_BETWEEN_ATTACHMENTS: 5,
  FULL_REMINDER_EVERY_N_ATTACHMENTS: 5,
}),
  (E0l = {
    TURNS_BETWEEN_MAINTENANCE: 10,
  }),
  (A0l = {
    MAX_SESSION_BYTES: 61440,
  }));
BCf = new Set(["prompt", "task-notification"]);
aIf = new Set([
  "extract_memories",
  "auto_dream",
  X1n,
  Qio,
  "prompt_suggestion",
  "speculation",
  "compact",
]);
SYt = new Map();
e$o = new Set();
async function xIf() {
  (await Promise.all(
    Array.from(u$o).map((e) =>
      iz
        .rm(e, {
          force: true,
        })
        .catch(() => {}),
    ),
  ),
    u$o.clear());
}
async function W0l(e) {
  let t = LSt.join(e, DSt),
    n = LSt.join(t, String(process.pid));
  try {
    (await iz.mkdir(t, {
      recursive: true,
    }),
      await eg(
        n,
        De({
          pid: process.pid,
          procStart: await zPt(),
        }),
      ));
  } catch (r) {
    T(`Failed to write ${DSt} marker: ${e}: ${r}`);
    return;
  }
  (u$o.add(n), (IIf ??= Ci(xIf)));
}
async function q0l(e) {
  if (e.length === 0) return;
  let t = LSt.join(kI(), G0l);
  try {
    let r = await iz.stat(t);
    if (Date.now() - r.mtimeMs < kIf) return;
  } catch {}
  let n = await Promise.allSettled(e.map((r) => HYt(r)));
  for (let [r, o] of n.entries())
    if (o.status === "rejected") T(`Failed to sweep ${DSt}: ${e[r]}: ${o.reason}`);
  try {
    await iz.writeFile(t, new Date().toISOString(), "utf-8");
  } catch (r) {
    T(`Failed to stamp ${G0l}: ${r}`);
  }
}
async function HYt(e, t) {
  let n = LSt.join(e, DSt),
    r;
  try {
    r = await iz.readdir(n);
  } catch (s) {
    if (Vo(s)) return false;
    throw s;
  }
  let o = false;
  for (let s of r) {
    if (s.includes(".tmp.")) {
      o = true;
      continue;
    }
    let i = LSt.join(n, s),
      a;
    try {
      a = await iz.readFile(i, "utf-8");
    } catch {}
    if (a === "") {
      o = true;
      continue;
    }
    let l = CIf().safeParse(Ia(a, false));
    if (t?.excludeSelf && l.success && l.data.pid === process.pid) continue;
    if (
      l.success &&
      (l.data.pid === 1 || zR(l.data.pid)) &&
      (await bv(l.data.pid, l.data.procStart))
    ) {
      o = true;
      continue;
    }
    await iz.rm(i, {
      force: true,
    });
  }
  return o;
}
var iz,
  LSt,
  DSt = ".in_use",
  CIf,
  u$o,
  IIf,
  G0l = ".last_inuse_sweep",
  kIf = 86400000;
