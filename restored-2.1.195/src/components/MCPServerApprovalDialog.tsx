// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module A9o
// matched 2.1.88 source: src/components/MCPServerApprovalDialog.tsx
// class=modified  jaccard=0.4466  score=0.6756  fileCov=0.5685
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module A9o] deps: Ye
((gdc = R(lt(), 1)), (qcr = R(se(), 1)));
function hdc({ serverName: e, isPluginServer: t = !1, onDone: n }) {
  function r(o) {
    switch (
      (G("tengu_mcp_dialog_choice", {
        choice: $e(o),
      }),
      o)
    ) {
      case "yes":
      case "yes_all": {
        let i = (jo() || {}).enabledMcpjsonServers || [],
          a = !1;
        if (!i.includes(e)) {
          let { error: l } = io("localSettings", {
            enabledMcpjsonServers: [...i, e],
          });
          a ||= l != null;
        }
        if (o === "yes_all") {
          let { error: l } = io("localSettings", {
            enableAllProjectMcpServers: !0,
          });
          a ||= l != null;
        }
        n({
          persistFailed: a,
        });
        break;
      }
      case "no": {
        let i = (jo() || {}).disabledMcpjsonServers || [],
          a = !1;
        if (!i.includes(e)) {
          let { error: l } = io("localSettings", {
            disabledMcpjsonServers: [...i, e],
          });
          a = l != null;
        }
        n({
          persistFailed: a,
        });
        break;
      }
    }
  }
  return BZt.jsxs(zn, {
    title: `New MCP server found in this project: ${ACe(e, t)}`,
    color: "warning",
    onCancel: () => r("no"),
    children: [
      BZt.jsx(Wcr, {}),
      BZt.jsx(Sr, {
        options: [
          {
            label: "Use this MCP server",
            value: "yes",
          },
          {
            label: "Use this and all future MCP servers in this project",
            value: "yes_all",
          },
          {
            label: "Continue without using this MCP server",
            value: "no",
          },
        ],
        onChange: (o) => r(o),
        onCancel: () => r("no"),
      }),
    ],
  });
}
var BZt;
