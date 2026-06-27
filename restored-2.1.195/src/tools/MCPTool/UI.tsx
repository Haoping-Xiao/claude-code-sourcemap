// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module tSa
// matched 2.1.88 source: src/tools/MCPTool/UI.tsx
// class=modified  jaccard=0.2103  score=0.4837  fileCov=0.2711
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module tSa] deps: _i, Ye, ql, T4t
((p_p = R(lt(), 1)), (eSa = R(se(), 1)));
function rSa(e, { verbose: t }) {
  if (Object.keys(e).length === 0) return "";
  let n = Pae(e);
  if (n !== null) return n;
  return Object.entries(e)
    .map(([r, o]) => {
      let s = De(o);
      return `${r}: ${s}`;
    })
    .join(", ");
}
function renderToolUseProgressMessage(e) {
  let t = e.at(-1);
  if (!t?.data)
    return pS.jsx(qn, {
      height: 1,
      children: pS.jsx(w, {
        dimColor: true,
        children: "Running\u2026",
      }),
    });
  let { progress: n, total: r, progressMessage: o } = t.data;
  if (n === void 0)
    return pS.jsx(qn, {
      height: 1,
      children: pS.jsx(w, {
        dimColor: true,
        children: "Running\u2026",
      }),
    });
  if (r !== void 0 && r > 0) {
    let s = Math.min(1, Math.max(0, n / r)),
      i = Math.round(s * 100);
    return pS.jsx(qn, {
      children: pS.jsxs(U, {
        flexDirection: "column",
        children: [
          o &&
            pS.jsx(w, {
              dimColor: true,
              children: o,
            }),
          pS.jsxs(U, {
            flexDirection: "row",
            gap: 1,
            children: [
              pS.jsx(ZW, {
                ratio: s,
                width: 20,
              }),
              pS.jsxs(w, {
                dimColor: true,
                children: [i, "%"],
              }),
            ],
          }),
        ],
      }),
    });
  }
  return pS.jsx(qn, {
    height: 1,
    children: pS.jsx(w, {
      dimColor: true,
      children: o ?? `Processing\u2026 ${n}`,
    }),
  });
}
function renderToolResultMessage(e, t, { verbose: n, input: r }) {
  let o = e;
  if (!n) {
    let c = trySlackSendCompact(o, r);
    if (c !== null)
      return pS.jsx(qn, {
        height: 1,
        children: pS.jsxs(w, {
          children: [
            "Sent a message to",
            " ",
            pS.jsx(bd, {
              children: sP(c.url, c.channel),
            }),
          ],
        }),
      });
  }
  let s = g4t(o),
    a =
      s > f_p
        ? `${nt.warning} Large MCP response (~${ou(s)} tokens), this can fill up context quickly`
        : null,
    l;
  if (Array.isArray(o)) {
    let c = o.map((u, d) => {
      if (u.type === "image")
        return pS.jsx(
          U,
          {
            justifyContent: "space-between",
            overflowX: "hidden",
            width: "100%",
            children: pS.jsx(qn, {
              height: 1,
              children: pS.jsx(w, {
                children: "[Image]",
              }),
            }),
          },
          d,
        );
      return pS.jsx(
        m_p,
        {
          item: u,
          verbose: n,
        },
        d,
      );
    });
    l = pS.jsx(U, {
      flexDirection: "column",
      width: "100%",
      children: c,
    });
  } else if (!o)
    l = pS.jsx(U, {
      justifyContent: "space-between",
      overflowX: "hidden",
      width: "100%",
      children: pS.jsx(qn, {
        height: 1,
        children: pS.jsx(w, {
          dimColor: true,
          children: "(No content)",
        }),
      }),
    });
  else
    l = pS.jsx(J1, {
      content: o,
      verbose: n,
    });
  if (a)
    return pS.jsxs(U, {
      flexDirection: "column",
      children: [
        pS.jsx(qn, {
          height: 1,
          children: pS.jsx(w, {
            color: "warning",
            children: a,
          }),
        }),
        l,
      ],
    });
  return l;
}
function m_p(e) {
  let t = nSa.c(7),
    { item: n, verbose: r } = e,
    o =
      n.type === "text" && "text" in n && n.text !== null && n.text !== void 0
        ? String(n.text)
        : "",
    s;
  if (t[4] !== o || t[5] !== r)
    ((s = pS.jsx(J1, {
      content: o,
      verbose: r,
    })),
      (t[4] = o),
      (t[5] = r),
      (t[6] = s));
  else s = t[6];
  return s;
}
function g_p(e, { maxChars: t, maxKeys: n }) {
  let r = e.trim();
  if (r.length === 0 || r.length > t || r[0] !== "{") return null;
  let o;
  try {
    o = Ft(r);
  } catch {
    return null;
  }
  if (o === null || typeof o !== "object" || Array.isArray(o)) return null;
  let s = Object.entries(o);
  if (s.length === 0 || s.length > n) return null;
  return s;
}
function trySlackSendCompact(e, t) {
  let n = e;
  if (Array.isArray(e)) {
    let c = e.find((u) => u.type === "text");
    n = c && "text" in c ? c.text : void 0;
  }
  if (typeof n !== "string" || !n.includes('"message_link"')) return null;
  let o = g_p(n, {
    maxChars: 2000,
    maxKeys: 6,
  })?.find(([c]) => c === "message_link")?.[1];
  if (typeof o !== "string") return null;
  let s = h_p.exec(o);
  if (!s) return null;
  let i = t,
    a = i?.channel_id ?? i?.channel ?? s[1],
    l = typeof a === "string" && a ? a : "slack";
  return {
    channel: l.startsWith("#") ? l : `#${l}`,
    url: o,
  };
}
var nSa,
  pS,
  f_p = 10000 /* 1e4 */,
  h_p;
