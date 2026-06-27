// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Dzl
// matched 2.1.88 source: src/commands/plan/plan.tsx
// class=partial  jaccard=0.2067  score=0.3779  fileCov=0.3133
// note: low-confidence suggestion: src/commands/plan/plan.tsx; 1 renamed
// ─────────────────────────────────────────────────────────────────────────
var Dzl = E(() => {
  Gqf = {
    type: "local-jsx",
    name: "permissions",
    aliases: ["allowed-tools"],
    description: "Manage allow and deny tool permission rules",
    load: () => Promise.resolve().then(() => (kzl(), Izl))
  }, Lzl = Gqf;
});
var Mzl = {};
_t(Mzl, {
  call: () => call
});
function Wqf(e) {
  let t = Pzl.c(10),
    {
      planContent: n,
      planPath: r,
      editorName: o
    } = e,
    s;
  if (t[0] !== r) s = Rse.jsx(LH, {
    subtitle: r,
    children: "Current Plan"
  }), t[0] = r, t[1] = s;else s = t[1];
  let i;
  if (t[2] !== n) i = Rse.jsx(U, {
    marginTop: 1,
    children: Rse.jsx(w, {
      children: n
    })
  }), t[2] = n, t[3] = i;else i = t[3];
  let a;
  if (t[4] !== o) a = o && Rse.jsxs(U, {
    marginTop: 1,
    children: [Rse.jsx(w, {
      dimColor: !0,
      children: '"/plan open"'
    }), Rse.jsx(w, {
      dimColor: !0,
      children: " to edit this plan in "
    }), Rse.jsx(w, {
      bold: !0,
      dimColor: !0,
      children: o
    })]
  }), t[4] = o, t[5] = a;else a = t[5];
  let l;
  if (t[6] !== s || t[7] !== i || t[8] !== a) l = Rse.jsxs(U, {
    flexDirection: "column",
    children: [s, i, a]
  }), t[6] = s, t[7] = i, t[8] = a, t[9] = l;else l = t[9];
  return l;
}
async function call(e, t, n) {
  let {
      getAppState: r,
      setAppState: o
    } = t,
    i = r().toolPermissionContext.mode,
    a = i !== "plan";
  if (a) Lge(i, "plan"), o(g => ({
    ...g,
    toolPermissionContext: My(myt(g.toolPermissionContext), {
      type: "setMode",
      mode: "plan",
      destination: "session"
    })
  }));
  if (NA()) return e(a ? "Enabled plan mode" : "Already in plan mode."), null;
  if (a) {
    let g = n.trim();
    if (g && g !== "open") return e("Enabled plan mode", {
      shouldQuery: !0
    }), null;
    if (!jAt()) return e("Enabled plan mode"), null;
  }
  let l = bP(),
    c = _P();
  if (!l) return e(a ? "Enabled plan mode" : "Already in plan mode. No plan written yet."), null;
  if (n.trim().split(/\s+/)[0] === "open") {
    let g = await yz(c);
    if (g.error) e(g.error);else e(`Opened plan in editor: ${c}`);
    return null;
  }
  let d = $q(),
    p = d ? yk(d) : void 0,
    m = await mza(Rse.jsx(Wqf, {
      planContent: l,
      planPath: c,
      editorName: p
    }));
  return e(m), null;
}
var Pzl, Rse;