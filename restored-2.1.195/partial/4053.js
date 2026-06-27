// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mwo
// matched 2.1.88 source: src/services/api/dumpPrompts.ts
// class=partial  jaccard=0.1963  score=1  fileCov=0.1963
// note: low-confidence suggestion: src/services/api/dumpPrompts.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var mwo = E(() => {
  er();
  Ao();
});
function Ntf(e) {
  return Erl.createHash("sha256").update(e).digest("hex");
}
function Arl(e) {
  R6n.delete(e);
}
function Hrl() {
  R6n.clear();
}
function Ftf(e) {
  return;
}
function jtf(e) {
  return L6n.join(tr(), "dump-prompts", `${e ?? Rt()}.jsonl`);
}
function Gtf(e, t) {
  hwo.promises.mkdir(L6n.dirname(e), {
    recursive: !0
  }).then(() => hwo.promises.appendFile(e, t + `
`)).catch(() => {});
}
function Wtf(e, t, n, r) {
  try {
    return;
  } catch {} finally {
    n.dumpInFlight = !1;
  }
}
function Trl(e) {
  let t = jtf(e);
  return async (n, r) => {
    let o = R6n.get(e) ?? {
      initialized: !1,
      lastInitDataHash: "",
      dumpInFlight: !1
    };
    if (R6n.set(e, o), r?.method === "POST" && r.body && !o.dumpInFlight) {
      o.dumpInFlight = !0;
      let s = new Date().toISOString();
      setImmediate(Wtf, r.body, s, o, t);
    }
    return globalThis.fetch(n, r);
  };
}
var Erl,
  hwo,
  L6n,
  Btf,
  Utf = 5,
  gwo,
  R6n;