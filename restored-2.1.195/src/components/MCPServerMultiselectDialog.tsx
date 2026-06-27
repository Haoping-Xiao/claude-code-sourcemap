// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ydc
// matched 2.1.88 source: src/components/MCPServerMultiselectDialog.tsx
// class=modified  jaccard=0.3936  score=0.8508  fileCov=0.4228
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var ydc = E(() => {
  kt();
  Ox();
  dr();
  mE();
  vi();
  A9o();
  BZt = R(se(), 1);
});
function bdc({ serverNames: e, pluginServerNames: t, onDone: n }) {
  function r(s) {
    let i = jo() || {},
      a = i.enabledMcpjsonServers || [],
      l = i.disabledMcpjsonServers || [],
      [c, u] = aFe(e, (p) => s.includes(p));
    G("tengu_mcp_multidialog_choice", {
      approved: c.length,
      rejected: u.length,
    });
    let d = !1;
    if (c.length > 0) {
      let p = Uo([...a, ...c]),
        { error: f } = io("localSettings", {
          enabledMcpjsonServers: p,
        });
      d ||= f != null;
    }
    if (u.length > 0) {
      let p = Uo([...l, ...u]),
        { error: f } = io("localSettings", {
          disabledMcpjsonServers: p,
        });
      d ||= f != null;
    }
    n({
      persistFailed: d,
    });
  }
  let o = _dc.useCallback(() => {
    let i = (jo() || {}).disabledMcpjsonServers || [],
      a = Uo([...i, ...e]),
      { error: l } = io("localSettings", {
        disabledMcpjsonServers: a,
      });
    n({
      persistFailed: l != null,
    });
  }, [e, n]);
  return sV.jsxs(sV.Fragment, {
    children: [
      sV.jsxs(zn, {
        title: `${e.length} new MCP servers found in this project`,
        subtitle: "Select any you wish to enable.",
        color: "warning",
        onCancel: o,
        hideInputGuide: !0,
        children: [
          sV.jsx(Wcr, {}),
          sV.jsx(MOe, {
            options: e.map((s) => ({
              label: ACe(s, t?.has(s) ?? !1),
              value: s,
            })),
            defaultValue: e,
            onSubmit: r,
            onCancel: o,
            hideIndexes: !0,
          }),
        ],
      }),
      sV.jsx(U, {
        paddingX: 1,
        children: sV.jsx(w, {
          dimColor: !0,
          italic: !0,
          children: sV.jsxs(Tn, {
            children: [
              sV.jsx(ht, {
                chord: "space",
                action: "select",
              }),
              sV.jsx(ht, {
                chord: "enter",
                action: "confirm",
              }),
              sV.jsx(mr, {
                action: "confirm:no",
                context: "Confirmation",
                fallback: "Esc",
                description: "reject all",
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
var _dc, sV;
