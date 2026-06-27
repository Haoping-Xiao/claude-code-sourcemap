// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module uSc
// matched 2.1.88 source: src/utils/fileHistory.ts
// class=new  jaccard=0.0366  score=0.5003  fileCov=0.038
// note: nearest: src/utils/fileHistory.ts (0.0366); dir inferred from dep-graph -> context; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var uSc = E(() => {
  uo();
  Ven = R(rt(), 1), pzo = [], fzo = new Set();
});
var dSc = 3;
function Xdr(e) {
  let t = pSc.createHash("sha256").update(e).digest("hex").slice(0, 8);
  return mzo.join(pL(), `.draft-${t}`);
}
function mSc(e) {
  return De({
    ...e,
    ts: Date.now()
  });
}
async function Jdr(e, t) {
  try {
    await HNe.mkdir(pL(), {
      recursive: true
    }), await eg(Xdr(e), mSc(t));
  } catch {}
}
function gSc(e, t) {
  try {
    oj(Xdr(e), mSc(t));
  } catch {}
}
async function hSc(e) {
  await HNe.unlink(Xdr(e)).catch(() => {});
}
async function _Sc(e) {
  let t = await nR(Xdr(e), 8388608);
  if (t === null) return;
  let n;
  try {
    n = ySc().safeParse(Ft(t));
  } catch {
    return;
  }
  if (!n.success) return;
  let {
    q: r,
    collapsed: o,
    ts: s
  } = n.data;
  if (Date.now() - s > fSc) return;
  return {
    q: r,
    collapsed: o ?? []
  };
}
async function Qdr() {
  return yl("job_sweep_drafts", async () => {
    let e;
    try {
      e = await HNe.readdir(pL());
    } catch {
      return;
    }
    let t = Date.now();
    await Promise.all(e.filter(n => n.startsWith(".draft-")).map(async n => {
      let r = mzo.join(pL(), n),
        o = await nR(r, 8388608);
      if (o !== null) try {
        let s = ySc().safeParse(Ft(o));
        if (s.success && t - s.data.ts <= fSc) return;
      } catch {}
      await HNe.rm(r, {
        recursive: true,
        force: true
      }).catch(() => {});
    }));
  });
}
var pSc,
  HNe,
  mzo,
  fSc = 86400000,
  ySc;