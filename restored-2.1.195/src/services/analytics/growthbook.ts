// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Un
// matched 2.1.88 source: src/services/analytics/growthbook.ts
// class=modified  jaccard=0.0296  score=0.9478  fileCov=0.0296
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Un] deps: Sms, IB, ft, er, je, Lx, wr, At, Gx, vn, Y9, dr, ih, Jt, Ote, sst, y1
((gke = new Map()),
  (bkn = new Set()),
  (e8 = new Map()),
  (aNt = new Set()),
  (Uzr = new Set()),
  (Pst = Mi()));
((jzr = Cn(() => {
  if (!uW()) return null;
  let e = qzr(),
    t = Rms(),
    n = "https://api.anthropic.com/",
    o =
      ad() || hJe() || Ir()
        ? K9()
        : {
            headers: {},
            error: "trust not established",
          },
    s = !o.error;
  Gzr = s;
  let i = new cdn({
    apiHost: n,
    clientKey: t,
    attributes: e,
    remoteEval: true,
    cacheKeyAttributes: ["id", "organizationUUID"],
    ...(!o.error && {
      apiHostRequestHeaders: o.headers,
    }),
    ...false,
  });
  if (((H_e = i), !s))
    return {
      client: i,
      initialized: Promise.resolve(),
    };
  let a = i
    .init({
      timeout: 5000,
    })
    .then(async (l) => {
      if (H_e !== i) return;
      let c = await MOi(i);
      if (H_e !== i) return;
      if (c) {
        for (let u of aNt) Skn(u);
        (aNt.clear(), $Oi(), Pst.emit());
      }
    })
    .catch((l) => {});
  return (
    (sNt = () => H_e?.destroy()),
    (iNt = () => H_e?.destroy()),
    process.on("beforeExit", sNt),
    process.on("exit", iNt),
    {
      client: i,
      initialized: a,
    }
  );
})),
  (iL = Cn(async () => {
    let e = jzr();
    if (!e) return null;
    if (!Gzr) {
      if (ad() || hJe() || Ir()) {
        if (!K9().error) {
          if ((Mst(), (e = jzr()), !e)) return null;
        }
      }
    }
    return (await e.initialized, BOi(), e.client);
  })));
pwi(at);
qwi(at);
function Hkn(e, t) {
  let n = e.toLowerCase();
  for (let r of t)
    if (typeof r === "string" && r.length > 0 && n.includes(r.toLowerCase())) return true;
  return false;
}
function w7(e) {
  let t = e
    .toLowerCase()
    .replace(/\u0131/g, "i")
    .replace(/\u017f/g, "s");
  return (
    t
      .replace(/[\u200c-\u200f\u202a-\u202e\u206a-\u206f\ufeff]/g, "")
      .replace(/:.*$/, "")
      .replace(/[. ]+$/, "") || t
  );
}
function H3e(e, t, n) {
  let r = e.slice(t.length).split(UOi.sep),
    o = r.length - 1;
  for (let s = 0; s < r.length; s++) {
    let i = w7(r[s]);
    if (gOd.has(i)) return true;
    if (s === o && n?.has(i)) return true;
  }
  return false;
}
var UOi, gOd;
