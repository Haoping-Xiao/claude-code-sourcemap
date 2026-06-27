// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module mfo
// matched 2.1.88 source: src/utils/computerUse/toolRendering.tsx
// class=modified  jaccard=0.4965  score=0.8893  fileCov=0.5292
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var mfo = E(() => {
  je();
  S_e();
  ffo();
  lpt();
  upt = require("util");
});
function QSe(e, t) {
  e((n) => {
    let r = t(n.computerUseMcpState);
    if (r === n.computerUseMcpState) return n;
    return {
      ...n,
      computerUseMcpState: r,
    };
  });
}
function dGt(e) {
  return e ? `(${e[0]}, ${e[1]})` : "";
}
function ARa(e) {
  return {
    userFacingName() {
      return `Computer Use[${e}]`;
    },
    renderToolUseMessage(t) {
      switch (e) {
        case "screenshot":
        case "left_mouse_down":
        case "left_mouse_up":
        case "cursor_position":
        case "list_granted_applications":
        case "read_clipboard":
          return "";
        case "left_click":
        case "right_click":
        case "middle_click":
        case "double_click":
        case "triple_click":
        case "mouse_move":
          return dGt(t.coordinate);
        case "left_click_drag":
          return t.start_coordinate
            ? `${dGt(t.start_coordinate)} \u2192 ${dGt(t.coordinate)}`
            : `to ${dGt(t.coordinate)}`;
        case "type":
          return typeof t.text === "string" ? `"${Rs(t.text, 40)}"` : "";
        case "key":
        case "hold_key":
          return typeof t.text === "string" ? t.text : "";
        case "scroll":
          return [
            t.direction,
            t.amount && `\xD7${t.amount}`,
            t.coordinate && `at ${dGt(t.coordinate)}`,
          ]
            .filter(Boolean)
            .join(" ");
        case "zoom": {
          let n = t.region;
          return Array.isArray(n) && n.length === 4 ? `[${n[0]}, ${n[1]}, ${n[2]}, ${n[3]}]` : "";
        }
        case "wait":
          return typeof t.duration === "number" ? `${t.duration}s` : "";
        case "write_clipboard":
          return typeof t.text === "string" ? `"${Rs(t.text, 40)}"` : "";
        case "open_application":
          return typeof t.bundle_id === "string" ? String(t.bundle_id) : "";
        case "request_access": {
          let n = t.apps;
          if (!Array.isArray(n)) return "";
          return n
            .map((o) => (typeof o?.displayName === "string" ? o.displayName : ""))
            .filter(Boolean)
            .join(", ");
        }
        case "computer_batch": {
          let n = t.actions;
          return Array.isArray(n) ? `${n.length} actions` : "";
        }
        default:
          return "";
      }
    },
    renderToolResultMessage(t, n, { verbose: r }) {
      if (r || typeof t !== "object" || t === null) return null;
      let o = JIp[e];
      if (!o) return null;
      return gfo.jsx(qn, {
        height: 1,
        children: gfo.jsx(w, {
          dimColor: true,
          children: o,
        }),
      });
    },
  };
}
var gfo, JIp;
