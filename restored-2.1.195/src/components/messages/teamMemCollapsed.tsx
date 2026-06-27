// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module eKn
// matched 2.1.88 source: src/components/messages/teamMemCollapsed.tsx
// class=modified  jaccard=0.7535  score=0.8487  fileCov=0.8704
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module eKn] deps: utils/ghPrStatus.ts, hooks/useTerminalSize.ts, context/notifications.tsx, tools/shared/gitOperationTracking.ts
((Aal = R(lt(), 1)), (Hal = R(rt(), 1)), (zpe = R(se(), 1)));
function val(e) {
  return (
    (e.teamMemorySearchCount ?? 0) > 0 ||
    (e.teamMemoryReadCount ?? 0) > 0 ||
    (e.teamMemoryWriteCount ?? 0) > 0
  );
}
function TeamMemCountParts(t0) {
  let t = Tal.c(23),
    { message: n, isActiveGroup: r, hasPrecedingParts: o } = t0,
    s = n.teamMemoryReadCount ?? 0,
    i = n.teamMemorySearchCount ?? 0,
    a = n.teamMemoryWriteCount ?? 0;
  if (s === 0 && i === 0 && a === 0) return null;
  let l;
  if (t[0] !== o || t[1] !== r || t[2] !== s || t[3] !== i || t[4] !== a) {
    let c = [],
      u = o ? 1 : 0;
    if (s > 0) {
      let d = r ? (u === 0 ? "Recalling" : "recalling") : u === 0 ? "Recalled" : "recalled";
      if (u > 0) {
        let g;
        if (t[6] === Symbol.for("react.memo_cache_sentinel"))
          ((g = K6.jsx(
            w,
            {
              children: ", ",
            },
            "comma-tmr",
          )),
            (t[6] = g));
        else g = t[6];
        c.push(g);
      }
      let p;
      if (t[7] !== s)
        ((p = K6.jsx(w, {
          bold: true,
          children: s,
        })),
          (t[7] = s),
          (t[8] = p));
      else p = t[8];
      let f = s === 1 ? "memory" : "memories",
        m;
      if (t[9] !== p || t[10] !== f || t[11] !== d)
        ((m = K6.jsxs(
          w,
          {
            children: [d, " ", p, " team", " ", f],
          },
          "team-mem-read",
        )),
          (t[9] = p),
          (t[10] = f),
          (t[11] = d),
          (t[12] = m));
      else m = t[12];
      (c.push(m), u++);
    }
    if (i > 0) {
      let d = r ? (u === 0 ? "Searching" : "searching") : u === 0 ? "Searched" : "searched";
      if (u > 0) {
        let m;
        if (t[13] === Symbol.for("react.memo_cache_sentinel"))
          ((m = K6.jsx(
            w,
            {
              children: ", ",
            },
            "comma-tms",
          )),
            (t[13] = m));
        else m = t[13];
        c.push(m);
      }
      let p = `${d} team memories`,
        f;
      if (t[14] !== p)
        ((f = K6.jsx(
          w,
          {
            children: p,
          },
          "team-mem-search",
        )),
          (t[14] = p),
          (t[15] = f));
      else f = t[15];
      (c.push(f), u++);
    }
    if (a > 0) {
      let d = r ? (u === 0 ? "Writing" : "writing") : u === 0 ? "Wrote" : "wrote";
      if (u > 0) {
        let g;
        if (t[16] === Symbol.for("react.memo_cache_sentinel"))
          ((g = K6.jsx(
            w,
            {
              children: ", ",
            },
            "comma-tmw",
          )),
            (t[16] = g));
        else g = t[16];
        c.push(g);
      }
      let p;
      if (t[17] !== a)
        ((p = K6.jsx(w, {
          bold: true,
          children: a,
        })),
          (t[17] = a),
          (t[18] = p));
      else p = t[18];
      let f = a === 1 ? "memory" : "memories",
        m;
      if (t[19] !== p || t[20] !== f || t[21] !== d)
        ((m = K6.jsxs(
          w,
          {
            children: [d, " ", p, " team", " ", f],
          },
          "team-mem-write",
        )),
          (t[19] = p),
          (t[20] = f),
          (t[21] = d),
          (t[22] = m));
      else m = t[22];
      c.push(m);
    }
    ((l = K6.jsx(K6.Fragment, {
      children: c,
    })),
      (t[0] = o),
      (t[1] = r),
      (t[2] = s),
      (t[3] = i),
      (t[4] = a),
      (t[5] = l));
  } else l = t[5];
  return l;
}
var Tal, K6;
