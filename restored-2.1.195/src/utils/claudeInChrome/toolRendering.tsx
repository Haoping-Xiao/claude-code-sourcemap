// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Upo
// matched 2.1.88 source: src/utils/claudeInChrome/toolRendering.tsx
// class=modified  jaccard=0.6073  score=0.6621  fileCov=0.8801
// note: deminified; 5 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: renderChromeToolResultMessage, getClaudeInChromeMCPToolOverrides
// [unwrapped __esm module Upo] deps: @ant/claude-for-chrome-mcp/src/browserTools.ts, @ant/claude-for-chrome-mcp/src/mcpServer.ts, services/analytics/index.ts, dn, services/mockRateLimits.ts, Il, utils/errors.ts, utils/imageResizer.ts, hooks/usePasteHandler.ts, utils/claudeInChrome/mcpServer.ts, utils/fsOperations.ts, services/teamMemorySync/secretScanner.ts, utils/claudeInChrome/common.ts, utils/computerUse/toolRendering.tsx
((l0a = require("url")), (eGt = new Map()));
ICp = new RegExp(`^${z0e}\\(([^)]+)\\)$`);
LCp = new Set(["image/png", "image/jpeg", "image/gif", "image/webp"]);
function renderChromeToolUseMessage(input, toolName, verbose) {
  let r = input.tabId;
  if (typeof r === "number") QZr(r);
  let secondaryInfo = [];
  switch (toolName) {
    case "navigate":
      if (typeof input.url === "string")
        try {
          let s = new URL(input.url);
          secondaryInfo.push(s.hostname);
        } catch {
          secondaryInfo.push(Rs(input.url, 30));
        }
      break;
    case "find":
      if (typeof input.query === "string") secondaryInfo.push(`pattern: ${Rs(input.query, 30)}`);
      break;
    case "computer":
      if (typeof input.action === "string") {
        let s = input.action;
        if (
          s === "left_click" ||
          s === "right_click" ||
          s === "double_click" ||
          s === "middle_click"
        ) {
          if (typeof input.ref === "string") secondaryInfo.push(`${s} on ${input.ref}`);
          else if (Array.isArray(input.coordinate))
            secondaryInfo.push(`${s} at (${input.coordinate.join(", ")})`);
          else secondaryInfo.push(s);
        } else if (s === "type" && typeof input.text === "string")
          secondaryInfo.push(`type "${Rs(input.text, 15)}"`);
        else if (s === "key" && typeof input.text === "string")
          secondaryInfo.push(`key ${input.text}`);
        else if (s === "scroll" && typeof input.scroll_direction === "string")
          secondaryInfo.push(`scroll ${input.scroll_direction}`);
        else if (s === "wait" && typeof input.duration === "number")
          secondaryInfo.push(`wait ${input.duration}s`);
        else if (s === "left_click_drag") secondaryInfo.push("drag");
        else secondaryInfo.push(s);
      }
      break;
    case "gif_creator":
      if (typeof input.action === "string") secondaryInfo.push(`${input.action}`);
      break;
    case "resize_window":
      if (typeof input.width === "number" && typeof input.height === "number")
        secondaryInfo.push(`${input.width}x${input.height}`);
      break;
    case "read_console_messages":
      if (typeof input.pattern === "string")
        secondaryInfo.push(`pattern: ${Rs(input.pattern, 20)}`);
      if (input.onlyErrors === true) secondaryInfo.push("errors only");
      break;
    case "read_network_requests":
      if (typeof input.urlPattern === "string")
        secondaryInfo.push(`pattern: ${Rs(input.urlPattern, 20)}`);
      break;
    case "shortcuts_execute":
      if (typeof input.shortcutId === "string")
        secondaryInfo.push(`shortcut_id: ${input.shortcutId}`);
      break;
    case "javascript_tool":
      if (verbose && typeof input.text === "string") return input.text;
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
  return secondaryInfo.join(", ") || null;
}
function renderChromeViewTabLink(input) {
  if (!vI()) return null;
  if (typeof input !== "object" || input === null || !("tabId" in input)) return null;
  let t =
    typeof input.tabId === "number"
      ? input.tabId
      : typeof input.tabId === "string"
        ? parseInt(input.tabId, 10)
        : NaN;
  if (isNaN(t)) return null;
  let n = `${CHROME_EXTENSION_FOCUS_TAB_URL_BASE}${t}`;
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
function renderChromeToolResultMessage(output, toolName, verbose) {
  if (verbose)
    return hBn(output, [], {
      verbose: verbose,
    });
  let r = null;
  switch (toolName) {
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
function getClaudeInChromeMCPToolOverrides(toolName) {
  return {
    userFacingName(t) {
      return `Claude in Chrome[${toolName.replace(/_mcp$/, "")}]`;
    },
    renderToolUseMessage(t, { verbose: n }) {
      return renderChromeToolUseMessage(t, toolName, n);
    },
    renderToolUseTag(t) {
      return renderChromeViewTabLink(t);
    },
    renderToolResultMessage(t, n, { verbose: r }) {
      if (!jCp(t)) return null;
      return renderChromeToolResultMessage(t, toolName, r);
    },
    ...Bpo(toolName),
  };
}
function jCp(e) {
  return typeof e === "object" && e !== null;
}
var Tqe,
  CHROME_EXTENSION_FOCUS_TAB_URL_BASE = "https://clau.de/chrome/tab/";
