// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module v1l
// matched 2.1.88 source: src/commands/context/index.ts
// class=modified  jaccard=0.1608  score=0.1901  fileCov=0.5104
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module v1l] deps: services/analytics/index.ts
((dNo = {
  name: "context",
  description: "Visualize current context usage as a colored grid",
  argumentHint: "[all]",
  isEnabled: () => !Ir(),
  type: "local-jsx",
  thinClientDispatch: "control-request",
  load: () => Promise.resolve().then(() => (T1l(), H1l)),
}),
  (pNo = {
    type: "local",
    name: "context",
    supportsNonInteractive: true,
    description: "Show current context usage",
    get isHidden() {
      return !Ir();
    },
    isEnabled() {
      return Ir();
    },
    load: () => Promise.resolve().then(() => (B7t(), uNo)),
  }));
function mNo(e = 0) {
  let n = qQ.useContext(SW)?.setTimeout ?? nat,
    [r, o] = qQ.useState(null),
    [s, i] = qQ.useState(fNo),
    [a, l] = qQ.useState(true),
    c = qQ.useRef(false);
  return (
    qQ.useEffect(() => {
      let u = false,
        d = new AbortController();
      async function p() {
        try {
          let m = await ftl(d.signal);
          if (u) return;
          let g = m?.source.kind === "branch" ? m.source.baseRef : "HEAD",
            h = await mtl(d.signal, g);
          if (u) return;
          if (m !== null) o(m);
          else if (!c.current) o(null);
          if (h !== null) i(h);
          else if (!c.current) i(fNo);
          ((c.current = true), l(false));
        } catch (m) {
          if (u) return;
          if (!c.current) (o(null), i(fNo));
          ((c.current = true), l(false));
        }
      }
      let f = n(p, c.current ? EMf : 0);
      return () => {
        ((u = true), f(), d.abort());
      };
    }, [e]),
    qQ.useMemo(() => {
      if (!r)
        return {
          stats: null,
          files: [],
          hunks: new Map(),
          loading: a,
          source: {
            kind: "working-tree",
          },
        };
      let { stats: u, perFileStats: d, source: p } = r,
        f = [];
      for (let [m, g] of d) {
        let h = g.isUntracked,
          y = s.skippedLarge.has(m),
          b = g.added + g.removed,
          _ = !y && !g.isBinary && b > SMf;
        f.push({
          path: m,
          linesAdded: g.added,
          linesRemoved: g.removed,
          isBinary: g.isBinary,
          isLargeFile: y,
          isTruncated: _,
          isUntracked: h,
        });
      }
      return (
        f.sort((m, g) => m.path.localeCompare(g.path)),
        {
          stats: u,
          files: f,
          hunks: s.hunks,
          loading: false,
          source: p,
        }
      );
    }, [r, s, a])
  );
}
var qQ,
  SMf = 400,
  EMf = 150,
  fNo;
