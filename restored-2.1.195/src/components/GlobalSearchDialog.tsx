// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Y2o
// matched 2.1.88 source: src/components/GlobalSearchDialog.tsx
// class=modified  jaccard=0.0372  score=0.0779  fileCov=0.0664
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Y2o] deps: sYe, tC, Ye, kt, uo, Zor, er, Vl, vi
((z2o = R(lt(), 1)), (A1e = R(rt(), 1)), (sx = R(se(), 1)));
function GlobalSearchDialog(t0) {
  let t = nsr.c(24),
    { subtitle: n, body: r, scope: o, onProceed: s, onCancel: i } = t0;
  Wh("ultrareview-launch");
  let [a] = nme.useState(wWf),
    [l, c] = nme.useState(!1),
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((u = new AbortController()), (t[0] = u));
  else u = t[0];
  let d = nme.useRef(u),
    p;
  if (t[1] !== a) ((p = () => (a ? RAt().catch(vWf) : null)), (t[1] = a), (t[2] = p));
  else p = t[2];
  let [f] = nme.useState(p),
    m;
  if (t[3] !== i || t[4] !== s || t[5] !== a)
    ((m = (v) => {
      if (v === "proceed") {
        if (a) gn(TWf);
        (c(!0), s(d.current.signal).catch(() => c(!1)));
      } else i();
    }),
      (t[3] = i),
      (t[4] = s),
      (t[5] = a),
      (t[6] = m));
  else m = t[6];
  let g = m,
    h;
  if (t[7] !== i)
    ((h = () => {
      (d.current.abort(), i());
    }),
      (t[7] = i),
      (t[8] = h));
  else h = t[8];
  let y = h,
    b;
  if (t[9] !== n) ((b = n ?? `${nQ()} \xB7 Est. cost ${PMe()} USD`), (t[9] = n), (t[10] = b));
  else b = t[10];
  let _;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = Db.jsx(w, {
      dimColor: !0,
      children: "Loading\u2026",
    })),
      (t[11] = _));
  else _ = t[11];
  let S;
  if (
    t[12] !== r ||
    t[13] !== y ||
    t[14] !== g ||
    t[15] !== l ||
    t[16] !== o ||
    t[17] !== a ||
    t[18] !== f
  )
    ((S = Db.jsx(nme.Suspense, {
      fallback: _,
      children: Db.jsx(CWf, {
        showTerms: a,
        sourcePromise: f,
        body: r,
        scope: o,
        isLaunching: l,
        onSelect: g,
        onCancel: y,
      }),
    })),
      (t[12] = r),
      (t[13] = y),
      (t[14] = g),
      (t[15] = l),
      (t[16] = o),
      (t[17] = a),
      (t[18] = f),
      (t[19] = S));
  else S = t[19];
  let A;
  if (t[20] !== y || t[21] !== b || t[22] !== S)
    ((A = Db.jsx(zn, {
      title: "Run ultrareview in the cloud?",
      subtitle: b,
      onCancel: y,
      children: S,
    })),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S),
      (t[23] = A));
  else A = t[23];
  return A;
}
function TWf(e) {
  return e.hasSeenUltrareviewTerms
    ? e
    : {
        ...e,
        hasSeenUltrareviewTerms: !0,
      };
}
function vWf() {
  return null;
}
function wWf() {
  return !Dt().hasSeenUltrareviewTerms;
}
function CWf(e) {
  let t = nsr.c(17),
    {
      showTerms: n,
      sourcePromise: r,
      body: o,
      scope: s,
      isLaunching: i,
      onSelect: a,
      onCancel: l,
    } = e,
    c = r ? nme.use(r) : null,
    u;
  if (t[0] !== c) ((u = c && K2o(c)), (t[0] = c), (t[1] = u));
  else u = t[1];
  let d = u,
    p =
      s.mode === "pr"
        ? `Reviewing ${s.repo}#${s.prNumber} fetched from GitHub.`
        : s.headBranch === s.baseBranch
          ? `Reviewing local changes on ${s.baseBranch}.`
          : `Reviewing ${s.headBranch} against ${s.baseBranch}.`,
    f = s.mode === "branch" && s.diffStat ? s.diffStat : null,
    m =
      s.mode === "pr"
        ? "Tip: run /code-review ultra (no number) to review your current branch instead."
        : "Tip: run /code-review ultra <PR number> to fetch and review a specific GitHub PR instead.",
    g;
  if (t[2] !== o || t[3] !== f || t[4] !== p || t[5] !== n || t[6] !== d || t[7] !== m)
    ((g = n
      ? Db.jsxs(Db.Fragment, {
          children: [
            Db.jsxs(U, {
              flexDirection: "column",
              children: [
                Db.jsx(w, {
                  dimColor: !0,
                  children: p,
                }),
                f &&
                  Db.jsxs(w, {
                    dimColor: !0,
                    children: ["Scope: ", f],
                  }),
                Db.jsx(w, {
                  dimColor: !0,
                  children: "Finds and verifies bugs using a multi-agent review fleet.",
                }),
                Db.jsx(w, {
                  dimColor: !0,
                  children: m,
                }),
                d &&
                  Db.jsx(w, {
                    dimColor: !0,
                    children: d,
                  }),
                o &&
                  Db.jsx(w, {
                    dimColor: !0,
                    children: o,
                  }),
                Db.jsxs(w, {
                  dimColor: !0,
                  children: [
                    "More information: ",
                    Db.jsx(xs, {
                      url: E1e,
                      children: E1e,
                    }),
                  ],
                }),
              ],
            }),
            Db.jsx(w, {
              children: "Proceed?",
            }),
          ],
        })
      : Db.jsxs(U, {
          flexDirection: "column",
          children: [
            Db.jsx(w, {
              dimColor: !0,
              children: p,
            }),
            f &&
              Db.jsxs(w, {
                dimColor: !0,
                children: ["Scope: ", f],
              }),
            Db.jsx(w, {
              dimColor: !0,
              children: "Finds and verifies bugs using a multi-agent review fleet.",
            }),
            Db.jsx(w, {
              dimColor: !0,
              children: m,
            }),
            o &&
              Db.jsx(w, {
                dimColor: !0,
                children: o,
              }),
          ],
        })),
      (t[2] = o),
      (t[3] = f),
      (t[4] = p),
      (t[5] = n),
      (t[6] = d),
      (t[7] = m),
      (t[8] = g));
  else g = t[8];
  let h;
  if (t[9] !== i || t[10] !== l || t[11] !== a || t[12] !== n)
    ((h = i
      ? Db.jsx(IWf, {})
      : Db.jsx(Sr, {
          options: [
            {
              label: n ? "Yes" : "Run ultrareview",
              value: "proceed",
              description: "launch in Claude Code on the web",
            },
            {
              label: n ? "No" : "Not now",
              value: "cancel",
            },
          ],
          onChange: a,
          onCancel: l,
        })),
      (t[9] = i),
      (t[10] = l),
      (t[11] = a),
      (t[12] = n),
      (t[13] = h));
  else h = t[13];
  let y;
  if (t[14] !== g || t[15] !== h)
    ((y = Db.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [g, h],
    })),
      (t[14] = g),
      (t[15] = h),
      (t[16] = y));
  else y = t[16];
  return y;
}
function IWf() {
  let e = nsr.c(12),
    t = G_(),
    n;
  if (e[0] !== t.prefersReducedMotion)
    ((n = Mv(t.prefersReducedMotion)), (e[0] = t.prefersReducedMotion), (e[1] = n));
  else n = e[1];
  let r = n,
    [o, s] = Kf(r ? null : 50),
    i = r ? -100 : 19 - (Math.floor(s / 200) % 29),
    a = Math.floor(s / 120),
    l;
  if (e[2] !== a || e[3] !== r || e[4] !== s)
    ((l = Db.jsx(eMe, {
      frame: a,
      messageColor: "inactive",
      reducedMotion: r,
      time: s,
    })),
      (e[2] = a),
      (e[3] = r),
      (e[4] = s),
      (e[5] = l));
  else l = e[5];
  let c;
  if (e[6] !== i)
    ((c = Db.jsx(OVt, {
      message: "Launching",
      mode: "responding",
      messageColor: "inactive",
      glimmerIndex: i,
      flashOpacity: 0,
      shimmerColor: "subtle",
    })),
      (e[6] = i),
      (e[7] = c));
  else c = e[7];
  let u;
  if (e[8] !== o || e[9] !== l || e[10] !== c)
    ((u = Db.jsxs(U, {
      ref: o,
      flexDirection: "row",
      columnGap: 1,
      children: [l, c],
    })),
      (e[8] = o),
      (e[9] = l),
      (e[10] = c),
      (e[11] = u));
  else u = e[11];
  return u;
}
var nsr, nme, Db;
