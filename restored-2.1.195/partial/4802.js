// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cUo
// matched 2.1.88 source: src/components/design-system/LoadingState.tsx
// class=partial  jaccard=0.0685  score=0.0802  fileCov=0.3182
// note: low-confidence suggestion: src/components/design-system/LoadingState.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cUo = E(() => {
  w8();
});
function wjl(e) {
  let t = vjl.c(17),
    {
      plugin: n
    } = e,
    r = Ht(cBf),
    o = Ht(lBf),
    s = Ht(aBf),
    i;
  if (t[0] !== o || t[1] !== s || t[2] !== n.manifest.name || t[3] !== r) {
    let m = j1o([...r, ...o], rH(s ?? void 0)),
      g;
    if (t[5] !== n.manifest.name) g = h => h.pluginName === n.manifest.name, t[5] = n.manifest.name, t[6] = g;else g = t[6];
    i = m.byPlugin.find(g), t[0] = o, t[1] = s, t[2] = n.manifest.name, t[3] = r, t[4] = i;
  } else i = t[4];
  let a = i,
    l;
  if (t[7] !== n.manifest.name) l = MP.jsxs(w, {
    bold: !0,
    children: [n.manifest.name, " \xB7 Usage"]
  }), t[7] = n.manifest.name, t[8] = l;else l = t[8];
  let c, u;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) c = MP.jsx(w, {
    bold: !0,
    children: "Skill-listing footprint"
  }), u = MP.jsx(w, {
    dimColor: !0,
    wrap: "wrap",
    children: "What this plugin's skill descriptions add to the system prompt (cached input after the first turn). Agents and MCP tools not yet counted."
  }), t[9] = c, t[10] = u;else c = t[9], u = t[10];
  let d;
  if (t[11] !== a) d = MP.jsxs(U, {
    flexDirection: "column",
    children: [c, u, a && a.skills.length > 0 ? MP.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      children: [a.skills.map(iBf), MP.jsxs(U, {
        flexDirection: "row",
        marginTop: 1,
        children: [MP.jsx(U, {
          width: 32,
          children: MP.jsx(w, {
            children: "Total"
          })
        }), MP.jsxs(w, {
          children: [a.skillCount, " ", bn(a.skillCount, "skill"), " \xB7 ~", a.approxTokens, " tok/turn"]
        })]
      })]
    }) : MP.jsx(w, {
      dimColor: !0,
      children: "No model-invocable skills loaded for this plugin"
    })]
  }), t[11] = a, t[12] = d;else d = t[12];
  let p;
  if (t[13] === Symbol.for("react.memo_cache_sentinel")) p = MP.jsx(U, {
    flexDirection: "column",
    children: MP.jsx(w, {
      dimColor: !0,
      wrap: "wrap",
      children: "For per-skill invocation counts and cost attribution, see /usage"
    })
  }), t[13] = p;else p = t[13];
  let f;
  if (t[14] !== l || t[15] !== d) f = MP.jsxs(U, {
    flexDirection: "column",
    gap: 1,
    children: [l, d, p]
  }), t[14] = l, t[15] = d, t[16] = f;else f = t[16];
  return f;
}
function iBf(e) {
  return MP.jsxs(U, {
    flexDirection: "row",
    children: [MP.jsx(U, {
      width: 32,
      children: MP.jsxs(w, {
        dimColor: !0,
        children: ["/", e.name]
      })
    }), MP.jsxs(w, {
      dimColor: !0,
      children: ["~", e.approxTokens, " tok/turn"]
    })]
  }, e.name);
}
function aBf(e) {
  return e.mainLoopModel;
}
function lBf(e) {
  return e.mcp.commands;
}
function cBf(e) {
  return e.plugins.commands;
}
var vjl, MP;