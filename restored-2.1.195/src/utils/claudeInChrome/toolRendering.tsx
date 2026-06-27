// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Upo
// matched 2.1.88 source: src/utils/claudeInChrome/toolRendering.tsx
// class=modified  jaccard=0.6073  score=0.6621  fileCov=0.8801
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: renderChromeToolResultMessage, getClaudeInChromeMCPToolOverrides
// [unwrapped __esm module Upo] deps: tQe, Oun, ft, dn, ii, Il, At, xW, I1, DFn, Jt, sr, VM, $po
((l0a = require("url")), (eGt = new Map()));
ICp = new RegExp(`^${z0e}\\(([^)]+)\\)$`);
LCp = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function BCp(e, t, n) {
  let r = e.tabId;
  if (typeof r === "number") QZr(r);
  let o = [];
  switch (t) {
    case "navigate":
      if (typeof e.url === "string")
        try {
          let s = new URL(e.url);
          o.push(s.hostname);
        } catch {
          o.push(Rs(e.url, 30));
        }
      break;
    case "find":
      if (typeof e.query === "string") o.push(`pattern: ${Rs(e.query, 30)}`);
      break;
    case "computer":
      if (typeof e.action === "string") {
        let s = e.action;
        if (
          s === "left_click" ||
          s === "right_click" ||
          s === "double_click" ||
          s === "middle_click"
        ) {
          if (typeof e.ref === "string") o.push(`${s} on ${e.ref}`);
          else if (Array.isArray(e.coordinate)) o.push(`${s} at (${e.coordinate.join(", ")})`);
          else o.push(s);
        } else if (s === "type" && typeof e.text === "string") o.push(`type "${Rs(e.text, 15)}"`);
        else if (s === "key" && typeof e.text === "string") o.push(`key ${e.text}`);
        else if (s === "scroll" && typeof e.scroll_direction === "string")
          o.push(`scroll ${e.scroll_direction}`);
        else if (s === "wait" && typeof e.duration === "number") o.push(`wait ${e.duration}s`);
        else if (s === "left_click_drag") o.push("drag");
        else o.push(s);
      }
      break;
    case "gif_creator":
      if (typeof e.action === "string") o.push(`${e.action}`);
      break;
    case "resize_window":
      if (typeof e.width === "number" && typeof e.height === "number")
        o.push(`${e.width}x${e.height}`);
      break;
    case "read_console_messages":
      if (typeof e.pattern === "string") o.push(`pattern: ${Rs(e.pattern, 20)}`);
      if (e.onlyErrors === true) o.push("errors only");
      break;
    case "read_network_requests":
      if (typeof e.urlPattern === "string") o.push(`pattern: ${Rs(e.urlPattern, 20)}`);
      break;
    case "shortcuts_execute":
      if (typeof e.shortcutId === "string") o.push(`shortcut_id: ${e.shortcutId}`);
      break;
    case "javascript_tool":
      if (n && typeof e.text === "string") return e.text;
      return "";
    case "tabs_create_mcp":
    case "tabs_context_mcp":
    case "form_input":
    case "shortcuts_list":
    case "read_page":
    case "upload_image":
    case "get_page_text":
    case "update_plan":
      return "";
  }
  return o.join(", ") || null;
}
function UCp(e) {
  if (!vI()) return null;
  if (typeof e !== "object" || e === null || !("tabId" in e)) return null;
  let t =
    typeof e.tabId === "number"
      ? e.tabId
      : typeof e.tabId === "string"
        ? parseInt(e.tabId, 10)
        : NaN;
  if (isNaN(t)) return null;
  let n = `${NCp}${t}`;
  return Tqe.jsxs(w, {
    children: [
      " ",
      Tqe.jsx(xs, {
        url: n,
        children: Tqe.jsx(w, {
          color: "subtle",
          children: "[View Tab]",
        }),
      }),
    ],
  });
}
function renderChromeToolResultMessage(e, t, n) {
  if (n)
    return hBn(e, [], {
      verbose: n,
    });
  let r = null;
  switch (t) {
    case "navigate":
      r = "Navigation completed";
      break;
    case "tabs_create_mcp":
      r = "Tab created";
      break;
    case "tabs_context_mcp":
      r = "Tabs read";
      break;
    case "form_input":
      r = "Input completed";
      break;
    case "computer":
      r = "Action completed";
      break;
    case "resize_window":
      r = "Window resized";
      break;
    case "find":
      r = "Search completed";
      break;
    case "gif_creator":
      r = "GIF action completed";
      break;
    case "read_console_messages":
      r = "Console messages retrieved";
      break;
    case "read_network_requests":
      r = "Network requests retrieved";
      break;
    case "shortcuts_list":
      r = "Shortcuts retrieved";
      break;
    case "shortcuts_execute":
      r = "Shortcut executed";
      break;
    case "javascript_tool":
      r = "Script executed";
      break;
    case "read_page":
      r = "Page read";
      break;
    case "upload_image":
      r = "Image uploaded";
      break;
    case "get_page_text":
      r = "Page text retrieved";
      break;
    case "update_plan":
      r = "Plan updated";
      break;
  }
  if (r)
    return Tqe.jsx(qn, {
      height: 1,
      children: Tqe.jsx(w, {
        dimColor: true,
        children: r,
      }),
    });
  return null;
}
function getClaudeInChromeMCPToolOverrides(e) {
  return {
    userFacingName(t) {
      return `Claude in Chrome[${e.replace(/_mcp$/, "")}]`;
    },
    renderToolUseMessage(t, { verbose: n }) {
      return BCp(t, e, n);
    },
    renderToolUseTag(t) {
      return UCp(t);
    },
    renderToolResultMessage(t, n, { verbose: r }) {
      if (!jCp(t)) return null;
      return renderChromeToolResultMessage(t, e, r);
    },
    ...Bpo(e),
  };
}
function jCp(e) {
  return typeof e === "object" && e !== null;
}
var Tqe,
  NCp = "https://clau.de/chrome/tab/";
