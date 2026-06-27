// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module AKr
// matched 2.1.88 source: src/utils/tempfile.ts
// class=modified (alt of src/utils/tempfile.ts)  jaccard=0.1805  score=0.2012  fileCov=0.6366
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function vU() {
  if (process.env.CLAUDE_CODE_TMPDIR) return process.env.CLAUDE_CODE_TMPDIR;
  return TKr.tmpdir();
}
function B1i(e) {
  let t = process.getuid?.();
  if (t === void 0) return;
  let n =
      "Set CLAUDE_CODE_TMPDIR to a directory you control, or ask an administrator to remove it.",
    r = Cke.lstatSync(e);
  if (!r.isDirectory())
    throw Error(
      `Temp directory ${e} is not a directory (may be an attacker-planted symlink). Refusing to use it. ${n}`,
    );
  if (r.uid !== t) {
    if (t === 0 && process.env.CLAUDE_CODE_CONTAINER_ID) {
      In("warn", "tempdir_owner_mismatch", {
        observed_uid: r.uid,
      });
      return;
    }
    throw Error(
      `Temp directory ${e} is owned by uid ${r.uid}, expected ${t}. Refusing to use it \u2014 another user may have pre-created it. ${n}`,
    );
  }
  if ((r.mode & 511) !== 448) Cke.chmodSync(e, 448);
}
function qE() {
  let e = `claude-${process.getuid?.() ?? 0}`,
    t = zkn.join(vU(), e);
  if (t !== N1i) {
    if (typeof process.getuid === "function")
      (Cke.mkdirSync(t, {
        recursive: true,
        mode: 448,
      }),
        B1i(t));
    else
      try {
        Cke.mkdirSync(t, {
          recursive: true,
          mode: 448,
        });
      } catch {}
    N1i = t;
  }
  return t;
}
function Xst() {
  let e = qE();
  if (Buffer.byteLength(e) <= e1d) return e;
  let t = TKr.tmpdir();
  if (HKr?.forDir === e) return HKr.result;
  let n = zkn.join(t, `claude-${process.getuid?.() ?? 0}`),
    r = n;
  try {
    (Cke.mkdirSync(n, {
      recursive: true,
      mode: 448,
    }),
      B1i(n));
  } catch {
    r = e;
  }
  return (
    (HKr = {
      forDir: e,
      result: r,
    }),
    r
  );
}
function Jst(e = "claude-prompt", t = ".md", n) {
  let r = n?.contentHash
    ? Vkn.createHash("sha256").update(n.contentHash).digest("hex").slice(0, 16)
    : Vkn.randomUUID();
  return zkn.join(qE(), `${e}-${r}${t}`);
}
var Vkn,
  Cke,
  TKr,
  zkn,
  e1d = 44,
  N1i,
  HKr;
