// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jFc
// matched 2.1.88 source: src/components/TeleportProgress.tsx
// class=modified  jaccard=0.288  score=0.5036  fileCov=0.4023
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: teleportWithProgress, TeleportProgress
function TeleportProgress(e) {
  let t = WFc.c(16),
    { currentStep: n, sessionId: r } = e,
    [o, s] = Kf(100),
    i = Math.floor(s / 100) % kXo.length,
    a;
  if (t[0] !== n) ((a = (g) => g.key === n), (t[0] = n), (t[1] = a));
  else a = t[1];
  let l = GFc.findIndex(a),
    c = kXo[i],
    u;
  if (t[2] !== c)
    ((u = M3.jsx(U, {
      marginBottom: 1,
      children: M3.jsxs(w, {
        bold: true,
        color: "claude",
        children: [c, " Teleporting session\u2026"],
      }),
    })),
      (t[2] = c),
      (t[3] = u));
  else u = t[3];
  let d;
  if (t[4] !== r)
    ((d =
      r &&
      M3.jsx(U, {
        marginBottom: 1,
        children: M3.jsx(w, {
          dimColor: true,
          children: r,
        }),
      })),
      (t[4] = r),
      (t[5] = d));
  else d = t[5];
  let p;
  if (t[6] !== l || t[7] !== i)
    ((p = GFc.map((g, h) => {
      let y = h < l,
        b = h === l,
        _ = h > l,
        S,
        A;
      if (y) ((S = nt.tick), (A = "green"));
      else if (b) ((S = kXo[i]), (A = "claude"));
      else ((S = nt.circle), (A = void 0));
      return M3.jsxs(
        U,
        {
          flexDirection: "row",
          children: [
            M3.jsx(U, {
              width: 2,
              children: M3.jsx(w, {
                color: A,
                dimColor: _,
                children: S,
              }),
            }),
            M3.jsx(w, {
              dimColor: _,
              bold: b,
              children: g.label,
            }),
          ],
        },
        g.key,
      );
    })),
      (t[6] = l),
      (t[7] = i),
      (t[8] = p));
  else p = t[8];
  let f;
  if (t[9] !== p)
    ((f = M3.jsx(U, {
      flexDirection: "column",
      marginLeft: 2,
      children: p,
    })),
      (t[9] = p),
      (t[10] = f));
  else f = t[10];
  let m;
  if (t[11] !== o || t[12] !== u || t[13] !== d || t[14] !== f)
    ((m = M3.jsxs(U, {
      ref: o,
      flexDirection: "column",
      paddingX: 1,
      paddingY: 1,
      children: [u, d, f],
    })),
      (t[11] = o),
      (t[12] = u),
      (t[13] = d),
      (t[14] = f),
      (t[15] = m));
  else m = t[15];
  return m;
}
async function teleportWithProgress(e, t) {
  let n = () => {};
  function r() {
    let [a, l] = qFc.useState("validating");
    return (
      (n = l),
      M3.jsx(TeleportProgress, {
        currentStep: a,
        sessionId: t,
      })
    );
  }
  e.render(
    M3.jsx(AH, {
      children: M3.jsx(r, {}),
    }),
  );
  let o = await i8e(t, n);
  n("checking_out");
  let { branchName: s, branchError: i } = await s9t(o.branch);
  return {
    messages: o9t(o.log, i),
    branchName: s,
  };
}
var WFc, qFc, M3, kXo, GFc;
