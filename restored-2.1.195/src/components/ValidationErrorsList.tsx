// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hse
// matched 2.1.88 source: src/components/ValidationErrorsList.tsx
// class=modified  jaccard=0.2586  score=0.5762  fileCov=0.3194
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module hse] deps: Ye
((FNl = R(lt(), 1)), (Snr = R(se(), 1)));
function Enr(e) {
  let t = jNl.c(8),
    { errors: n } = e;
  if (n.length === 0) return null;
  let r, o, s;
  if (t[0] !== n) {
    let a = n.reduce(_temp, {}),
      l = Object.keys(a).sort();
    ((r = U),
      (o = "column"),
      (s = l.map((c) => {
        let u = a[c] || [];
        u.sort(V$f);
        let d = new Map();
        return (
          u.forEach((p) => {
            if (p.suggestion || p.docLink) {
              let f = `${p.suggestion || ""}|${p.docLink || ""}`;
              if (!d.has(f))
                d.set(f, {
                  suggestion: p.suggestion,
                  docLink: p.docLink,
                });
            }
          }),
          Mq.jsxs(
            U,
            {
              flexDirection: "column",
              children: [
                Mq.jsx(w, {
                  children: c,
                }),
                Mq.jsx(hs, {
                  variant: "tree",
                  children: u.map(q$f),
                }),
                d.size > 0 &&
                  Mq.jsx(U, {
                    flexDirection: "column",
                    marginTop: 1,
                    children: Array.from(d.values()).map(_temp3),
                  }),
              ],
            },
            c,
          )
        );
      })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s));
  } else ((r = t[1]), (o = t[2]), (s = t[3]));
  let i;
  if (t[4] !== r || t[5] !== o || t[6] !== s)
    ((i = Mq.jsx(r, {
      flexDirection: o,
      children: s,
    })),
      (t[4] = r),
      (t[5] = o),
      (t[6] = s),
      (t[7] = i));
  else i = t[7];
  return i;
}
function _temp3(e, t) {
  return Mq.jsxs(
    U,
    {
      flexDirection: "column",
      marginBottom: 1,
      children: [
        e.suggestion &&
          Mq.jsx(w, {
            dimColor: true,
            wrap: "wrap",
            children: e.suggestion,
          }),
        e.docLink &&
          Mq.jsx(qL, {
            url: e.docLink,
          }),
      ],
    },
    `suggestion-pair-${t}`,
  );
}
function q$f(e, t) {
  let n = K$f(e);
  return Mq.jsx(
    hs.Node,
    {
      children: n
        ? Mq.jsxs(w, {
            children: [
              n,
              ": ",
              Mq.jsx(w, {
                dimColor: true,
                children: e.message,
              }),
            ],
          })
        : Mq.jsx(w, {
            dimColor: true,
            children: e.message,
          }),
    },
    t,
  );
}
function V$f(e, t) {
  if (!e.path && t.path) return -1;
  if (e.path && !t.path) return 1;
  return (e.path || "").localeCompare(t.path || "");
}
function _temp(e, t) {
  let n = t.file || "(file not specified)";
  if (!e[n]) e[n] = [];
  return (e[n].push(t), e);
}
function K$f(e) {
  if (!e.path) return null;
  let t = e.path.split("."),
    n = t[t.length - 1];
  if (
    e.invalidValue !== null &&
    e.invalidValue !== void 0 &&
    n !== void 0 &&
    !isNaN(parseInt(n, 10))
  ) {
    let r = typeof e.invalidValue === "string" ? `"${e.invalidValue}"` : String(e.invalidValue);
    return [...t.slice(0, -1), r].join(".");
  }
  return e.path;
}
var jNl, Mq;
