// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lNo
// matched 2.1.88 source: src/screens/REPL.tsx
// class=new  jaccard=0.0064  score=0.423  fileCov=0.0065
// note: nearest: src/screens/REPL.tsx (0.0064); dir inferred from dep-graph -> utils; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
// module exports: call
var H1l = {};
function yMf(e) {
  return Py(e);
}
async function call(e, t, n) {
  let r = Ns() && n.trim().toLowerCase() !== "all",
    o = Ju();
  if (o) {
    if (!LO("controlChannel")) return e("Context usage isn't available over this remote connection"), null;
    try {
      let m = await o.sendControlRequest({
          subtype: "get_context_usage"
        }),
        g = await _gt(cNo.jsx(aNo, {
          data: m,
          isRemote: true,
          collapseDetailSections: r
        }));
      e(g, {
        display: "system",
        metaMessages: [N7t(m, {
          skipCollapseStatus: true
        })]
      });
    } catch (m) {
      e(`Couldn't fetch context from remote: ${be(m)}`);
    }
    return null;
  }
  let {
      messages: s,
      getAppState: i,
      options: {
        mainLoopModel: a,
        tools: l
      }
    } = t,
    c = yMf(s),
    u = process.stdout.columns || 80,
    d = i(),
    p = await fZn(c, a, async () => d.toolPermissionContext, l, d.agentDefinitions, u, t, void 0, c, d.autoCompactWindow),
    f = await _gt(cNo.jsx(aNo, {
      data: p,
      collapseDetailSections: r
    }));
  return e(f, {
    display: "system",
    metaMessages: [N7t(p)]
  }), null;
}
var cNo;