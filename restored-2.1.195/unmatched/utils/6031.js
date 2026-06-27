// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ZWc
// matched 2.1.88 source: src/cli/print.ts
// class=new  jaccard=0.005  score=0.2727  fileCov=0.0051
// note: nearest: src/cli/print.ts (0.005); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
function AZo(e) {
  return String(e).replace(/(\b\w+:\/\/)[^@/]+@/g, "$1");
}
async function e5c(e, t, n, r, o) {
  if (o.length === 0) return;
  if (ohr >= IOm) {
    if (xOm++ % 100 === 0) gu("warn", `otel fanout saturated (${ohr} in flight); dropping`);
    return;
  }
  ohr++;
  try {
    let s = Date.now(),
      i = o.map(l => (shr.get(l.url)?.openUntil ?? 0) > s);
    (await Promise.allSettled(o.map((l, c) => {
      if (i[c]) return Promise.reject(Error("circuit open"));
      return iwt(`${l.url.replace(/\/$/, "")}${e}`, {
        method: "POST",
        body: t,
        headers: {
          "Content-Type": n,
          ...(r && {
            "Content-Encoding": r
          }),
          ...l.headers
        },
        signal: AbortSignal.timeout(10000 /* 1e4 */)
      }).then(u => {
        if (u.body?.cancel().catch(() => {}), !u.ok) throw Error(`${u.status} ${u.statusText}`);
      });
    }))).forEach((l, c) => {
      if (i[c]) return;
      let u = o[c].url;
      if (l.status === "fulfilled") shr.delete(u);else {
        let d = shr.get(u) ?? {
          fails: 0,
          openUntil: 0
        };
        if (++d.fails >= kOm) d.openUntil = Date.now() + ROm, gu("warn", `otel dest ${AZo(u)} tripped; skipping 30s`);else gu("warn", `otel forward to ${AZo(u)} failed: ${AZo(l.reason)}`);
        shr.set(u, d);
      }
    });
  } finally {
    ohr--;
  }
}
var HZo,
  IOm = 128,
  ohr = 0,
  xOm = 0,
  kOm = 5,
  ROm = 30000,
  shr;