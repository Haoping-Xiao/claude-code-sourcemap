// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qmc
// matched 2.1.88 source: src/hooks/useLogMessages.ts
// class=modified  jaccard=0.2536  score=0.4733  fileCov=0.3534
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Qmc] deps: zH, FAe
Ucm = new Set(["failed", "cancelled", "killed", "error"]);
function Zmc(e, t = false, n = false) {
  let r = Ht((p) => p.teamContext),
    o = wZ.useRef(0),
    s = wZ.useRef(void 0),
    i = wZ.useRef(void 0),
    a = wZ.useRef(void 0),
    l = wZ.useRef(true),
    c = wZ.useRef(0),
    u = wZ.useRef(new Set()),
    d = wZ.useRef(0);
  (wZ.useEffect(() => {
    jcm?.initSessionLog();
  }, []),
    wZ.useEffect(() => {
      if (nUe().transcriptSource === "ccr-api") return;
      if (t) {
        d.current = e.length;
        return;
      }
      let p = e[0]?.uuid,
        f = o.current,
        m = i.current === void 0,
        g = f === 0 || e[f - 1]?.uuid === a.current || (!l.current && f === e.length),
        h = p !== void 0 && !m && p === i.current && f <= e.length && g,
        y = p !== void 0 && !m && p === i.current && f > e.length,
        b = h ? f : 0,
        _ = h || m ? d.current : b,
        S = KQt(e, Math.max(b, _), n);
      if (!h) d.current = S;
      let A = e[S - 1];
      if (((a.current = A?.uuid), (l.current = A === void 0 || Ose(A)), S === b)) return;
      let v = b === 0 && S === e.length ? e : e.slice(b, S),
        C = h ? s.current : void 0;
      if (b === 0) u.current.clear();
      Slr(v, u.current);
      let x = ++c.current,
        I = r?.selfAgentName;
      if (
        (nz(
          v,
          el() && I
            ? {
                teamName: r?.teamName,
                agentName: I,
              }
            : {},
          C,
          u.current,
        ).then((k) => {
          if (x !== c.current) return;
          if (k && !h) s.current = k;
        }),
        h || m || y)
      ) {
        let k = Gze(v, u.current).findLast(pme);
        if (k) s.current = k.uuid;
      }
      ((o.current = S), (i.current = p));
    }, [e, t, n, r?.teamName, r?.selfAgentName]));
}
var wZ,
  jcm = null;
