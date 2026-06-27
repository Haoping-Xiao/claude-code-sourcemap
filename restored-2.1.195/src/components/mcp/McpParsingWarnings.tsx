// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cNl
// matched 2.1.88 source: src/components/mcp/McpParsingWarnings.tsx
// class=modified  jaccard=0.3616  score=0.4599  fileCov=0.6285
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var cNl = E(() => {
  Ye();
  xne();
  bEt();
  xoe();
  ((aNl = R(lt(), 1)), (qOe = R(se(), 1)));
});
function u$f(e) {
  let t = ENo.c(38),
    { scope: n, parsingErrors: r, warnings: o } = e,
    s = r.length > 0,
    i = o.length > 0;
  if (!s && !i) return null;
  let a;
  if (t[0] !== n) ((a = cF(n)), (t[0] = n), (t[1] = a));
  else a = t[1];
  let l = a,
    c;
  if (t[2] !== r || t[3] !== o)
    ((c = new Set([...r, ...o].map(d$f).filter(Boolean))), (t[2] = r), (t[3] = o), (t[4] = c));
  else c = t[4];
  let u = c,
    d;
  if (t[5] !== l || t[6] !== u)
    ((d = u.size === 1 ? [...u][0] : l), (t[5] = l), (t[6] = u), (t[7] = d));
  else d = t[7];
  let p = d,
    f;
  if (t[8] !== s || t[9] !== i)
    ((f =
      (s || i) &&
      Lb.jsxs(w, {
        color: s ? "error" : "warning",
        children: ["[", s ? "Failed to parse" : "Contains warnings", "]", " "],
      })),
      (t[8] = s),
      (t[9] = i),
      (t[10] = f));
  else f = t[10];
  let m;
  if (t[11] !== n) ((m = h3t(n)), (t[11] = n), (t[12] = m));
  else m = t[12];
  let g;
  if (t[13] !== m)
    ((g = Lb.jsx(w, {
      children: m,
    })),
      (t[13] = m),
      (t[14] = g));
  else g = t[14];
  let h;
  if (t[15] !== f || t[16] !== g)
    ((h = Lb.jsxs(U, {
      children: [f, g],
    })),
      (t[15] = f),
      (t[16] = g),
      (t[17] = h));
  else h = t[17];
  let y;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((y = Lb.jsx(w, {
      dimColor: true,
      children: "Location: ",
    })),
      (t[18] = y));
  else y = t[18];
  let b;
  if (t[19] !== p)
    ((b = Lb.jsxs(U, {
      children: [
        y,
        Lb.jsx(w, {
          dimColor: true,
          children: p,
        }),
      ],
    })),
      (t[19] = p),
      (t[20] = b));
  else b = t[20];
  let _;
  if (t[21] !== p || t[22] !== r) {
    let C;
    if (t[24] !== p)
      ((C = (x, I) => {
        let k = x.mcpErrorMetadata?.serverName,
          D = x.file && x.file !== p;
        return Lb.jsx(
          hs.Node,
          {
            children: Lb.jsxs(w, {
              children: [
                Lb.jsx(w, {
                  color: "error",
                  children: "[Error]",
                }),
                Lb.jsxs(w, {
                  dimColor: true,
                  children: [
                    " ",
                    D && `(${x.file}) `,
                    k && `[${k}] `,
                    x.path && x.path !== "" ? `${x.path}: ` : "",
                    x.message,
                  ],
                }),
              ],
            }),
          },
          `error-${I}`,
        );
      }),
        (t[24] = p),
        (t[25] = C));
    else C = t[25];
    ((_ = r.map(C)), (t[21] = p), (t[22] = r), (t[23] = _));
  } else _ = t[23];
  let S;
  if (t[26] !== p || t[27] !== o) {
    let C;
    if (t[29] !== p)
      ((C = (x, I) => {
        let k = x.mcpErrorMetadata?.serverName,
          D = x.file && x.file !== p;
        return Lb.jsx(
          hs.Node,
          {
            children: Lb.jsxs(w, {
              children: [
                Lb.jsx(w, {
                  color: "warning",
                  children: "[Warning]",
                }),
                Lb.jsxs(w, {
                  dimColor: true,
                  children: [
                    " ",
                    D && `(${x.file}) `,
                    k && `[${k}] `,
                    x.path && x.path !== "" ? `${x.path}: ` : "",
                    x.message,
                  ],
                }),
              ],
            }),
          },
          `warning-${I}`,
        );
      }),
        (t[29] = p),
        (t[30] = C));
    else C = t[30];
    ((S = o.map(C)), (t[26] = p), (t[27] = o), (t[28] = S));
  } else S = t[28];
  let A;
  if (t[31] !== _ || t[32] !== S)
    ((A = Lb.jsx(U, {
      marginLeft: 1,
      children: Lb.jsxs(hs, {
        variant: "tree",
        children: [_, S],
      }),
    })),
      (t[31] = _),
      (t[32] = S),
      (t[33] = A));
  else A = t[33];
  let v;
  if (t[34] !== A || t[35] !== h || t[36] !== b)
    ((v = Lb.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [h, b, A],
    })),
      (t[34] = A),
      (t[35] = h),
      (t[36] = b),
      (t[37] = v));
  else v = t[37];
  return v;
}
function d$f(e) {
  return e.file;
}
function SEt() {
  let e = ENo.c(3),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
    let l = [
        {
          scope: "user",
          config: bT("user"),
        },
        {
          scope: "project",
          config: bT("project"),
        },
        {
          scope: "local",
          config: bT("local"),
        },
        {
          scope: "enterprise",
          config: bT("enterprise"),
        },
      ],
      c = ydo(l.filter(_$f).map(y$f));
    ((t = {
      scopes: b$f(l, {
        enterpriseActive: Z1(),
        mcpLocked: VE("mcp"),
        isProjectServerApproved: h$f,
      }),
      conflicts: c,
    }),
      (e[0] = t));
  } else t = e[0];
  let { scopes: n, conflicts: r } = t,
    o = n.some(g$f),
    s = r.length > 0 || n.some(m$f);
  if (!o && !s) return null;
  let i;
  if (e[1] === Symbol.for("react.memo_cache_sentinel"))
    ((i = Lb.jsx(nx, {
      title: "MCP config diagnostics",
      status: o ? "error" : "warning",
    })),
      (e[1] = i));
  else i = e[1];
  let a;
  if (e[2] === Symbol.for("react.memo_cache_sentinel"))
    ((a = Lb.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      marginBottom: 1,
      children: [
        i,
        Lb.jsx(U, {
          marginTop: 1,
          children: Lb.jsxs(w, {
            dimColor: true,
            children: [
              "For help configuring MCP servers, see:",
              " ",
              Lb.jsx(xs, {
                url: "https://code.claude.com/docs/en/mcp",
                children: "https://code.claude.com/docs/en/mcp",
              }),
            ],
          }),
        }),
        n.map(f$f),
        r.length > 0 &&
          Lb.jsxs(U, {
            flexDirection: "column",
            marginTop: 1,
            children: [
              Lb.jsx(w, {
                color: "warning",
                children: "[Conflicting scopes]",
              }),
              Lb.jsx(hs, {
                variant: "tree",
                children: r.map(p$f),
              }),
            ],
          }),
      ],
    })),
      (e[2] = a));
  else a = e[2];
  return a;
}
function p$f(e, t) {
  return Lb.jsxs(
    hs.Group,
    {
      children: [
        Lb.jsx(hs.Node, {
          color: "warning",
          children: e.message,
        }),
        e.suggestion &&
          Lb.jsx(hs.Node, {
            dimColor: true,
            children: e.suggestion,
          }),
      ],
    },
    `conflict-${t}`,
  );
}
function f$f(e) {
  let { scope: t, config: n } = e;
  return Lb.jsx(
    u$f,
    {
      scope: t,
      parsingErrors: snr(n.errors, "fatal"),
      warnings: snr(n.errors, "warning"),
    },
    t,
  );
}
function m$f(e) {
  let { config: t } = e;
  return snr(t.errors, "warning").length > 0;
}
function g$f(e) {
  let { config: t } = e;
  return snr(t.errors, "fatal").length > 0;
}
function h$f(e) {
  return aqe(e) === "approved";
}
function y$f(e) {
  return {
    scope: e.scope,
    servers: e.config.servers,
  };
}
function _$f(e) {
  return e.scope !== "enterprise";
}
function snr(e, t) {
  return e.filter((n) => n.mcpErrorMetadata?.severity === t);
}
function b$f(e, t) {
  let n = (r, o) => {
    if (!(o in r.config.servers)) return false;
    if (r.scope === "project") return t.isProjectServerApproved(o);
    return true;
  };
  return e.map((r, o) => {
    let s = r.scope !== "enterprise" && (t.enterpriseActive || t.mcpLocked),
      i = e.slice(o + 1),
      a = (l) => i.some((c) => n(c, l));
    return {
      ...r,
      config: {
        ...r.config,
        errors: r.config.errors.filter((l) => {
          if (l.mcpErrorMetadata?.severity !== "warning") return true;
          if (s) return false;
          let c = l.mcpErrorMetadata.serverName;
          return !c || !a(c);
        }),
      },
    };
  });
}
var ENo, Lb;
