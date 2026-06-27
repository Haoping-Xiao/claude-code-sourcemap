// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module CBo
// matched 2.1.88 source: src/components/mcp/MCPListPanel.tsx
// class=modified  jaccard=0.3269  score=0.3977  fileCov=0.6475
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module CBo] deps: si, Ye, ps, Cre, cqe, sr, Cc, mE, Bs, vi, f_, Ko, gKe, EC
((bse = R(rt(), 1)), (rd = R(se(), 1)));
function t2l(e) {
  switch (e) {
    case "project":
      return {
        label: "Project MCPs",
        path: cF(e),
      };
    case "user":
      return {
        label: "User MCPs",
        path: cF(e),
      };
    case "local":
      return {
        label: "Local MCPs",
        path: cF(e),
      };
    case "enterprise":
      return {
        label: "Enterprise MCPs",
      };
    case "agent": {
      let t = TO();
      return {
        label: "Active agent MCPs",
        path: t ? `@${t} frontmatter` : "agent frontmatter",
      };
    }
    case "dynamic":
      return {
        label: "Built-in MCPs",
        path: "always available",
      };
    default:
      return {
        label: e,
      };
  }
}
function W1f(e) {
  let t = rXt.c(12),
    { s: n } = e;
  if (n.duplicateOf.startsWith("plugin:")) {
    let r;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((r = uc.jsx(w, {
        dimColor: true,
        children: "To use this connector instead, disable the plugin server in /plugins",
      })),
        (t[0] = r));
    else r = t[0];
    return r;
  }
  switch (n.duplicateOfScope) {
    case "local":
    case "user":
    case "project": {
      let r;
      if (t[1] !== n.duplicateOf)
        ((r = xy("mcp remove", n.duplicateOf)), (t[1] = n.duplicateOf), (t[2] = r));
      else r = t[2];
      let o = r,
        s;
      if (t[3] !== o || t[4] !== n.duplicateOf || t[5] !== n.duplicateOfScope)
        ((s = o
          ? uc.jsxs(uc.Fragment, {
              children: [
                "run ",
                uc.jsx(w, {
                  bold: true,
                  children: o,
                }),
              ],
            })
          : `remove the ${n.duplicateOfScope}-scope server "${n.duplicateOf}"`),
          (t[3] = o),
          (t[4] = n.duplicateOf),
          (t[5] = n.duplicateOfScope),
          (t[6] = s));
      else s = t[6];
      let i;
      if (t[7] !== s)
        ((i = uc.jsxs(w, {
          dimColor: true,
          children: ["To use this connector instead,", " ", s],
        })),
          (t[7] = s),
          (t[8] = i));
      else i = t[8];
      return i;
    }
    case "dynamic": {
      let r;
      if (t[9] === Symbol.for("react.memo_cache_sentinel"))
        ((r = uc.jsx(w, {
          dimColor: true,
          children: "To use this connector instead, drop it from your --mcp-config flag",
        })),
          (t[9] = r));
      else r = t[9];
      return r;
    }
    case "enterprise":
    case "managed": {
      let r;
      if (t[10] === Symbol.for("react.memo_cache_sentinel"))
        ((r = uc.jsx(w, {
          dimColor: true,
          children: "An admin-managed server takes precedence here",
        })),
          (t[10] = r));
      else r = t[10];
      return r;
    }
    default: {
      let r;
      if (t[11] === Symbol.for("react.memo_cache_sentinel"))
        ((r = uc.jsx(w, {
          dimColor: true,
          children:
            "To use this connector instead, remove the duplicate server from your configuration",
        })),
          (t[11] = r));
      else r = t[11];
      return r;
    }
  }
}
function q1f(e) {
  let t = new Map();
  for (let n of e) {
    let r = n.scope;
    if (!t.has(r)) t.set(r, []);
    t.get(r).push(n);
  }
  for (let [, n] of t) n.sort((r, o) => r.name.localeCompare(o.name));
  return t;
}
function Fnr(e) {
  let t = rXt.c(8),
    { label: n, path: r } = e,
    o;
  if (t[0] !== n)
    ((o = uc.jsx(w, {
      bold: true,
      children: n,
    })),
      (t[0] = n),
      (t[1] = o));
  else o = t[1];
  let s = r ?? false,
    i;
  if (t[2] !== r || t[3] !== s)
    ((i = uc.jsx(mz, {
      when: s,
      children: r,
    })),
      (t[2] = r),
      (t[3] = s),
      (t[4] = i));
  else i = t[4];
  let a;
  if (t[5] !== o || t[6] !== i)
    ((a = uc.jsxs(U, {
      paddingLeft: 2,
      children: [o, i],
    })),
      (t[5] = o),
      (t[6] = i),
      (t[7] = a));
  else a = t[7];
  return a;
}
function IBo({
  servers: e,
  suppressedClaudeAiConnectors: t = [],
  toolCountsByServer: n = {},
  agentServers: r,
  onSelectServer: o,
  onSelectAgentServer: s,
  onComplete: i,
  showUnusedConnectors: a,
  onToggleUnusedConnectors: l,
}) {
  let [c, u] = _3.useState(0),
    { rows: d } = bb(br()),
    p = YE(),
    f = _3.useMemo(() => {
      let $ = new Set(e.filter((q) => q.scope === "agent").map((q) => q.name));
      if ($.size === 0) return r;
      return r.filter((q) => !$.has(q.name));
    }, [e, r]),
    m = _3.useMemo(() => {
      let $ = e.filter((q) => q.client.config.type !== "claudeai-proxy");
      return q1f($);
    }, [e]),
    { claudeAiServers: g, unusedClaudeAiServers: h } = _3.useMemo(() => {
      let $ = kUn(),
        q = [],
        W = [];
      for (let V of e) {
        if (V.client.config.type !== "claudeai-proxy") continue;
        if ((V.client.type === "needs-auth" || V.client.type === "failed") && !$.has(V.name))
          W.push(V);
        else q.push(V);
      }
      return (
        q.sort((V, Y) => V.name.localeCompare(Y.name)),
        W.sort((V, Y) => V.name.localeCompare(Y.name)),
        {
          claudeAiServers: q,
          unusedClaudeAiServers: W,
        }
      );
    }, [e]),
    y = _3.useMemo(
      () => (m.get("dynamic") ?? []).sort(($, q) => $.name.localeCompare(q.name)),
      [m],
    ),
    b = _3.useMemo(() => {
      let $ = [];
      for (let q of e2l) {
        let W = m.get(q) ?? [];
        for (let V of W)
          $.push({
            type: "server",
            server: V,
          });
      }
      for (let q of g)
        $.push({
          type: "server",
          server: q,
        });
      if (h.length > 0) {
        if (
          ($.push({
            type: "unused-connectors-fold",
          }),
          a)
        )
          for (let q of h)
            $.push({
              type: "server",
              server: q,
            });
      }
      for (let q of f)
        $.push({
          type: "agent-server",
          agentServer: q,
        });
      for (let q of y)
        $.push({
          type: "server",
          server: q,
        });
      return $;
    }, [m, g, h, a, f, y]),
    _ = _3.useCallback(() => {
      i("MCP dialog dismissed", {
        display: "system",
      });
    }, [i]),
    S = _3.useCallback(() => {
      let $ = b[c];
      if (!$) return;
      if ($.type === "server") o($.server);
      else if ($.type === "agent-server") s($.agentServer);
      else if ($.type === "unused-connectors-fold") l();
    }, [b, c, o, s, l]);
  (No(
    {
      "confirm:previous": () => u(($) => ($ === 0 ? b.length - 1 : $ - 1)),
      "confirm:next": () => u(($) => ($ === b.length - 1 ? 0 : $ + 1)),
      "confirm:yes": S,
      "confirm:no": _,
    },
    {
      context: "Confirmation",
    },
  ),
    _3.useEffect(() => {
      u(($) => Math.min($, Math.max(0, b.length - 1)));
    }, [b.length]));
  let A = vO(),
    v = _3.useMemo(() => {
      let $ = a ? void 0 : new Set(h.map((q) => q.name));
      return e.some((q) => q.client.type === "failed" && !$?.has(q.name));
    }, [e, h, a]),
    C = _3.useMemo(() => {
      let $ = [],
        q = 0;
      function W(V, Y) {
        let z = q++;
        $.push({
          key: Y,
          selectableIndex: z,
          node: uc.jsx(V1f, {
            server: V,
            isSelected: c === z,
            toolCount: n[V.name],
          }),
        });
      }
      for (let V of e2l) {
        let Y = m.get(V);
        if (!Y || Y.length === 0) continue;
        let z = t2l(V);
        $.push({
          key: `heading-${V}`,
          node: uc.jsx(Fnr, {
            label: z.label,
            path: z.path,
          }),
        });
        for (let K of Y) W(K, `${V}-${K.name}`);
        $.push({
          key: `spacer-${V}`,
          node: uc.jsx(w, {
            children: " ",
          }),
        });
      }
      if (g.length > 0 || h.length > 0 || t.length > 0) {
        $.push({
          key: "heading-claudeai",
          node: uc.jsx(Fnr, {
            label: "claude.ai",
          }),
        });
        for (let V of g) W(V, `claudeai-${V.name}`);
        if (h.length > 0) {
          let V = q++;
          if (
            ($.push({
              key: "claudeai-unused-fold",
              selectableIndex: V,
              node: uc.jsx(U, {
                children: uc.jsxs(w, {
                  color: c === V ? "suggestion" : void 0,
                  children: [
                    c === V ? `${nt.pointer} ` : "  ",
                    a ? nt.arrowDown : nt.arrowRight,
                    " ",
                    "Show unused connectors",
                    " ",
                    uc.jsxs(w, {
                      dimColor: true,
                      children: ["(", h.length, ")"],
                    }),
                  ],
                }),
              }),
            }),
            a)
          )
            for (let Y of h) W(Y, `claudeai-${Y.name}`);
        }
        for (let V of t)
          ($.push({
            key: `suppressed-${V.name}`,
            node: uc.jsxs(U, {
              children: [
                uc.jsx(w, {
                  children: "  ",
                }),
                uc.jsx(w, {
                  children: V.name,
                }),
                uc.jsxs(w, {
                  dimColor: true,
                  children: [
                    " ",
                    "\xB7 ",
                    nt.radioOff,
                    " hidden \u2014 same URL as your server '",
                    V.duplicateOf,
                    "'",
                  ],
                }),
              ],
            }),
          }),
            $.push({
              key: `suppressed-hint-${V.name}`,
              node: uc.jsx(U, {
                paddingLeft: 4,
                children: uc.jsx(W1f, {
                  s: V,
                }),
              }),
            }));
        $.push({
          key: "spacer-claudeai",
          node: uc.jsx(w, {
            children: " ",
          }),
        });
      }
      if (f.length > 0) {
        $.push({
          key: "heading-agent-mcps",
          node: uc.jsx(Fnr, {
            label: "Agent MCPs",
          }),
        });
        let V = q;
        for (let Y of Uo(f.flatMap((z) => z.sourceAgents))) {
          ($.push({
            key: `spacer-agent-${Y}`,
            node: uc.jsx(w, {
              children: " ",
            }),
          }),
            $.push({
              key: `subheading-agent-${Y}`,
              node: uc.jsx(U, {
                paddingLeft: 2,
                children: uc.jsxs(w, {
                  dimColor: true,
                  children: ["@", Y],
                }),
              }),
            }));
          for (let z of f.filter((K) => K.sourceAgents.includes(Y))) {
            let K = V + f.indexOf(z);
            $.push({
              key: `agent-${Y}-${z.name}`,
              selectableIndex: K,
              node: uc.jsx(z1f, {
                agentServer: z,
                isSelected: c === K,
              }),
            });
          }
        }
        ((q = V + f.length),
          $.push({
            key: "spacer-agent-mcps",
            node: uc.jsx(w, {
              children: " ",
            }),
          }));
      }
      if (y.length > 0) {
        let V = t2l("dynamic");
        $.push({
          key: "heading-dynamic",
          node: uc.jsx(Fnr, {
            label: V.label,
            path: V.path,
          }),
        });
        for (let Y of y) W(Y, `dynamic-${Y.name}`);
        $.push({
          key: "spacer-dynamic",
          node: uc.jsx(w, {
            children: " ",
          }),
        });
      }
      if ($.at(-1)?.key.startsWith("spacer-")) $.pop();
      return $;
    }, [m, g, h, a, t, f, y, c, n]);
  if (e.length === 0 && f.length === 0 && t.length === 0) return null;
  let x = e.length + f.length,
    k = Math.max(G1f, d - (p ? j1f : F1f) - (v ? 1 : 0)),
    D = C.length > k,
    P = D ? Math.max(1, k - 2) : k,
    O = Math.max(
      0,
      C.findIndex(($) => $.selectableIndex === c),
    ),
    L = _b(O - Math.floor(P / 2), 0, Math.max(0, C.length - P)),
    M = C.slice(L, L + P),
    N = L,
    B = C.length - (L + M.length);
  return uc.jsxs(U, {
    flexDirection: "column",
    children: [
      uc.jsx(SEt, {}),
      uc.jsx(zn, {
        title: "Manage MCP servers",
        subtitle: `${x} ${bn(x, "server")}`,
        onCancel: _,
        hideInputGuide: true,
        children: uc.jsxs(U, {
          flexDirection: "column",
          children: [
            N > 0 &&
              uc.jsx(U, {
                paddingLeft: 2,
                children: uc.jsxs(w, {
                  dimColor: true,
                  children: [Wee, " ", N, " more above"],
                }),
              }),
            M.map(($) =>
              uc.jsx(
                n2l.Fragment,
                {
                  children: $.node,
                },
                $.key,
              ),
            ),
            B > 0 &&
              uc.jsx(U, {
                paddingLeft: 2,
                children: uc.jsxs(w, {
                  dimColor: true,
                  children: [r9, " ", B, " more below"],
                }),
              }),
            uc.jsxs(U, {
              flexDirection: "column",
              marginTop: D ? 0 : 1,
              children: [
                v &&
                  uc.jsx(w, {
                    dimColor: true,
                    children: A
                      ? "\u203B Error logs shown inline with --debug"
                      : "\u203B Run claude --debug to see error logs",
                  }),
                uc.jsxs(w, {
                  dimColor: true,
                  children: [
                    uc.jsx(xs, {
                      url: "https://code.claude.com/docs/en/mcp",
                      children: "https://code.claude.com/docs/en/mcp",
                    }),
                    " ",
                    "for help",
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
      uc.jsx(U, {
        paddingX: 1,
        children: uc.jsx(w, {
          dimColor: true,
          italic: true,
          children: uc.jsxs(Tn, {
            children: [
              uc.jsx(ht, {
                chord: ["up", "down"],
                action: "navigate",
              }),
              uc.jsx(ht, {
                chord: "enter",
                action: "confirm",
              }),
              uc.jsx(mr, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "cancel",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
function V1f(e) {
  let t = rXt.c(35),
    { server: n, isSelected: r, toolCount: o } = e,
    [s] = na(),
    i,
    a;
  if (n.client.type === "disabled") {
    let b;
    if (t[0] !== s) ((b = Io("inactive", s)(nt.radioOff)), (t[0] = s), (t[1] = b));
    else b = t[1];
    ((i = b), (a = "disabled"));
  } else if (n.client.type === "connected") {
    let b = !!n.client.capabilities?.tools;
    if (n.client.toolsListError) {
      let _;
      if (t[2] !== s) ((_ = Io("warning", s)(nt.triangleUpOutline)), (t[2] = s), (t[3] = _));
      else _ = t[3];
      ((i = _), (a = "connected \xB7 tools fetch failed"));
    } else if (b && o === 0) {
      let _;
      if (t[4] !== s) ((_ = Io("warning", s)(nt.triangleUpOutline)), (t[4] = s), (t[5] = _));
      else _ = t[5];
      ((i = _), (a = "connected \xB7 no tools"));
    } else if (b && o !== void 0) {
      let _;
      if (t[6] !== s) ((_ = Io("success", s)(nt.tick)), (t[6] = s), (t[7] = _));
      else _ = t[7];
      i = _;
      let S;
      if (t[8] !== o) ((S = bn(o, "tool")), (t[8] = o), (t[9] = S));
      else S = t[9];
      a = `connected \xB7 ${o} ${S}`;
    } else {
      let _;
      if (t[10] !== s) ((_ = Io("success", s)(nt.tick)), (t[10] = s), (t[11] = _));
      else _ = t[11];
      ((i = _), (a = "connected"));
    }
  } else if (n.client.type === "pending") {
    let b;
    if (t[12] !== s) ((b = Io("inactive", s)(nt.radioOff)), (t[12] = s), (t[13] = b));
    else b = t[13];
    i = b;
    let { reconnectAttempt: _, maxReconnectAttempts: S } = n.client;
    if (_ && S) a = `reconnecting (${_}/${S})\u2026`;
    else a = "connecting\u2026";
  } else if (n.client.type === "needs-auth") {
    let b;
    if (t[14] !== s) ((b = Io("warning", s)(nt.triangleUpOutline)), (t[14] = s), (t[15] = b));
    else b = t[15];
    ((i = b), (a = "needs authentication"));
  } else {
    let b;
    if (t[16] !== s) ((b = Io("error", s)(nt.cross)), (t[16] = s), (t[17] = b));
    else b = t[17];
    ((i = b), (a = n.client.errorCode === "INVALID_CONFIG" ? "config issue" : "failed"));
  }
  let l = r ? "suggestion" : void 0,
    c = r ? `${nt.pointer} ` : "  ",
    u;
  if (t[18] !== l || t[19] !== c)
    ((u = uc.jsx(w, {
      color: l,
      children: c,
    })),
      (t[18] = l),
      (t[19] = c),
      (t[20] = u));
  else u = t[20];
  let d = r ? "suggestion" : void 0,
    p;
  if (t[21] !== n.name || t[22] !== d)
    ((p = uc.jsx(w, {
      color: d,
      children: n.name,
    })),
      (t[21] = n.name),
      (t[22] = d),
      (t[23] = p));
  else p = t[23];
  let f = !r,
    m;
  if (t[24] !== i || t[25] !== f)
    ((m = uc.jsxs(w, {
      dimColor: f,
      children: [" \xB7 ", i, " "],
    })),
      (t[24] = i),
      (t[25] = f),
      (t[26] = m));
  else m = t[26];
  let g = !r,
    h;
  if (t[27] !== a || t[28] !== g)
    ((h = uc.jsx(w, {
      dimColor: g,
      children: a,
    })),
      (t[27] = a),
      (t[28] = g),
      (t[29] = h));
  else h = t[29];
  let y;
  if (t[30] !== u || t[31] !== p || t[32] !== m || t[33] !== h)
    ((y = uc.jsxs(U, {
      children: [u, p, m, h],
    })),
      (t[30] = u),
      (t[31] = p),
      (t[32] = m),
      (t[33] = h),
      (t[34] = y));
  else y = t[34];
  return y;
}
function z1f(e) {
  let t = rXt.c(20),
    { agentServer: n, isSelected: r } = e,
    [o] = na(),
    s;
  if (t[0] !== n.needsAuth || t[1] !== o)
    ((s = n.needsAuth ? Io("warning", o)(nt.triangleUpOutline) : Io("inactive", o)(nt.radioOff)),
      (t[0] = n.needsAuth),
      (t[1] = o),
      (t[2] = s));
  else s = t[2];
  let i = s,
    a = n.needsAuth ? "may need auth" : "agent-only",
    l = r ? "suggestion" : void 0,
    c = r ? `${nt.pointer} ` : "  ",
    u;
  if (t[3] !== l || t[4] !== c)
    ((u = uc.jsx(w, {
      color: l,
      children: c,
    })),
      (t[3] = l),
      (t[4] = c),
      (t[5] = u));
  else u = t[5];
  let d = r ? "suggestion" : void 0,
    p;
  if (t[6] !== n.name || t[7] !== d)
    ((p = uc.jsx(w, {
      color: d,
      children: n.name,
    })),
      (t[6] = n.name),
      (t[7] = d),
      (t[8] = p));
  else p = t[8];
  let f = !r,
    m;
  if (t[9] !== i || t[10] !== f)
    ((m = uc.jsxs(w, {
      dimColor: f,
      children: [" \xB7 ", i, " "],
    })),
      (t[9] = i),
      (t[10] = f),
      (t[11] = m));
  else m = t[11];
  let g = !r,
    h;
  if (t[12] !== a || t[13] !== g)
    ((h = uc.jsx(w, {
      dimColor: g,
      children: a,
    })),
      (t[12] = a),
      (t[13] = g),
      (t[14] = h));
  else h = t[14];
  let y;
  if (t[15] !== h || t[16] !== u || t[17] !== p || t[18] !== m)
    ((y = uc.jsxs(U, {
      children: [u, p, m, h],
    })),
      (t[15] = h),
      (t[16] = u),
      (t[17] = p),
      (t[18] = m),
      (t[19] = y));
  else y = t[19];
  return y;
}
var rXt,
  n2l,
  _3,
  uc,
  F1f = 12,
  j1f = 5,
  G1f = 3,
  e2l;
