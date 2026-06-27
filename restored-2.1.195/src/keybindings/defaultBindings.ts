// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module YLn
// matched 2.1.88 source: src/keybindings/defaultBindings.ts
// class=modified  jaccard=0.5488  score=0.6567  fileCov=0.7696
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var YLn = E(() => {
  Is();
  ((KLn = Vt()),
    (ZWd = KLn === "windows" || KLn === "wsl"),
    (e5d = ZWd ? "alt+v" : "ctrl+v"),
    (t5d =
      KLn !== "windows" ||
      (gG()
        ? lKr("1.4.0", ">=1.2.23")
        : lKr(process.versions.node, ">=22.17.0 <23.0.0 || >=24.2.0"))),
    (sqi = t5d ? "shift+tab" : "meta+m"),
    (wat = [
      {
        context: "Global",
        bindings: {
          "ctrl+c": "app:interrupt",
          "ctrl+d": "app:exit",
          "ctrl+t": "app:toggleTodos",
          "ctrl+o": "app:toggleTranscript",
          "ctrl+shift+b": "app:toggleBrief",
          ...{},
          "ctrl+r": "history:search",
          ...{},
          ...{
            "ctrl+]": "app:openArtifact",
          },
        },
      },
      {
        context: "Chat",
        bindings: {
          escape: "chat:cancel",
          "ctrl+l": "chat:clearInput",
          "cmd+k": "chat:clearScreen",
          "ctrl+x ctrl+k": "chat:killAgents",
          [sqi]: "chat:cycleMode",
          "meta+p": "chat:modelPicker",
          "meta+o": "chat:fastMode",
          "meta+t": "chat:thinkingToggle",
          "meta+w": "chat:workflowKeywordToggle",
          enter: "chat:submit",
          "ctrl+j": "chat:newline",
          up: "history:previous",
          down: "history:next",
          "ctrl+_": "chat:undo",
          "ctrl+-": "chat:undo",
          "ctrl+shift+-": "chat:undo",
          "ctrl+shift+_": "chat:undo",
          "ctrl+x ctrl+e": "chat:externalEditor",
          "ctrl+g": "chat:externalEditor",
          "ctrl+s": "chat:stash",
          [e5d]: "chat:imagePaste",
          ...(KLn === "wsl" && {
            "ctrl+v": "chat:imagePaste",
          }),
          ...{
            space: "voice:pushToTalk",
          },
        },
      },
      {
        context: "Autocomplete",
        bindings: {
          tab: "autocomplete:accept",
          escape: "autocomplete:dismiss",
          up: "autocomplete:previous",
          down: "autocomplete:next",
        },
      },
      {
        context: "Settings",
        bindings: {
          escape: "confirm:no",
          up: "select:previous",
          down: "select:next",
          k: "select:previous",
          j: "select:next",
          "ctrl+p": "select:previous",
          "ctrl+n": "select:next",
          space: "select:accept",
          enter: "select:accept",
          "/": "settings:search",
          r: "settings:retry",
          d: "settings:periodDay",
          w: "settings:periodWeek",
          t: "settings:sortByTokens",
          "ctrl+u": "scroll:halfPageUp",
          "ctrl+d": "scroll:halfPageDown",
        },
      },
      {
        context: "Doctor",
        bindings: {
          f: "doctor:fix",
        },
      },
      {
        context: "Confirmation",
        bindings: {
          y: "confirm:yes",
          n: "confirm:no",
          enter: "confirm:yes",
          escape: "confirm:no",
          up: "confirm:previous",
          down: "confirm:next",
          tab: "confirm:nextField",
          space: "confirm:toggle",
          [sqi]: "confirm:cycleMode",
          "ctrl+e": "confirm:toggleExplanation",
        },
      },
      {
        context: "Tabs",
        bindings: {
          tab: "tabs:next",
          "shift+tab": "tabs:previous",
          right: "tabs:next",
          left: "tabs:previous",
        },
      },
      {
        context: "Transcript",
        bindings: {
          "ctrl+e": "transcript:toggleShowAll",
          "ctrl+c": "transcript:exit",
          escape: "transcript:exit",
          q: "transcript:exit",
          "ctrl+u": "scroll:halfPageUp",
          "ctrl+d": "scroll:halfPageDown",
          "ctrl+b": "scroll:fullPageUp",
          "ctrl+f": "scroll:fullPageDown",
          "ctrl+n": "scroll:lineDown",
          "ctrl+p": "scroll:lineUp",
          g: "scroll:top",
          "shift+g": "scroll:bottom",
          j: "scroll:lineDown",
          k: "scroll:lineUp",
          space: "scroll:fullPageDown",
          b: "scroll:fullPageUp",
          up: "scroll:lineUp",
          down: "scroll:lineDown",
          home: "scroll:top",
          end: "scroll:bottom",
        },
      },
      {
        context: "HistorySearch",
        bindings: {
          "ctrl+r": "historySearch:next",
          escape: "historySearch:accept",
          tab: "historySearch:accept",
          "ctrl+c": "historySearch:cancel",
          enter: "historySearch:execute",
          "ctrl+s": "historySearch:cycleScope",
        },
      },
      {
        context: "Task",
        bindings: {
          "ctrl+x ctrl+b": "task:background",
          "ctrl+b": "task:background",
        },
      },
      {
        context: "ThemePicker",
        bindings: {
          "ctrl+t": "theme:toggleSyntaxHighlighting",
          "ctrl+e": "theme:editCustom",
        },
      },
      {
        context: "Scroll",
        bindings: {
          pageup: "scroll:pageUp",
          pagedown: "scroll:pageDown",
          wheelup: "scroll:lineUp",
          wheeldown: "scroll:lineDown",
          "ctrl+home": "scroll:top",
          "ctrl+end": "scroll:bottom",
          "ctrl+shift+c": "selection:copy",
          "cmd+c": "selection:copy",
          "shift+left": "selection:extendLeft",
          "shift+right": "selection:extendRight",
          "shift+up": "selection:extendUp",
          "shift+down": "selection:extendDown",
          "shift+home": "selection:extendLineStart",
          "shift+end": "selection:extendLineEnd",
        },
      },
      {
        context: "Help",
        bindings: {
          escape: "help:dismiss",
        },
      },
      {
        context: "Attachments",
        bindings: {
          right: "attachments:next",
          left: "attachments:previous",
          backspace: "attachments:remove",
          delete: "attachments:remove",
          down: "attachments:exit",
          escape: "attachments:exit",
        },
      },
      {
        context: "Footer",
        bindings: {
          up: "footer:up",
          "ctrl+p": "footer:up",
          down: "footer:down",
          "ctrl+n": "footer:down",
          right: "footer:next",
          left: "footer:previous",
          enter: "footer:openSelected",
          escape: "footer:clearSelection",
          x: "footer:close",
        },
      },
      {
        context: "MessageSelector",
        bindings: {
          up: "messageSelector:up",
          down: "messageSelector:down",
          k: "messageSelector:up",
          j: "messageSelector:down",
          "ctrl+p": "messageSelector:up",
          "ctrl+n": "messageSelector:down",
          "ctrl+up": "messageSelector:top",
          "shift+up": "messageSelector:top",
          "meta+up": "messageSelector:top",
          "shift+k": "messageSelector:top",
          "ctrl+down": "messageSelector:bottom",
          "shift+down": "messageSelector:bottom",
          "meta+down": "messageSelector:bottom",
          "shift+j": "messageSelector:bottom",
          enter: "messageSelector:select",
        },
      },
      {
        context: "DiffDialog",
        bindings: {
          escape: "diff:dismiss",
          left: "diff:previousSource",
          right: "diff:nextSource",
          up: "diff:previousFile",
          down: "diff:nextFile",
          enter: "diff:viewDetails",
          j: "diff:nextFile",
          k: "diff:previousFile",
          pageup: "scroll:pageUp",
          pagedown: "scroll:pageDown",
          space: "scroll:fullPageDown",
          "shift+space": "scroll:fullPageUp",
          b: "scroll:fullPageUp",
          g: "scroll:top",
          "shift+g": "scroll:bottom",
          home: "scroll:top",
          end: "scroll:bottom",
        },
      },
      {
        context: "ModelPicker",
        bindings: {
          left: "modelPicker:decreaseEffort",
          right: "modelPicker:increaseEffort",
          s: "modelPicker:thisSessionOnly",
        },
      },
      {
        context: "Select",
        bindings: {
          up: "select:previous",
          down: "select:next",
          j: "select:next",
          k: "select:previous",
          "ctrl+n": "select:next",
          "ctrl+p": "select:previous",
          pageup: "select:pageUp",
          pagedown: "select:pageDown",
          home: "select:first",
          end: "select:last",
          enter: "select:accept",
          escape: "select:cancel",
        },
      },
      {
        context: "Plugin",
        bindings: {
          space: "plugin:toggle",
          i: "plugin:install",
          f: "plugin:favorite",
        },
      },
    ]));
});
function TGe(e) {
  let t = e.split("+"),
    n = {
      key: "",
      ctrl: !1,
      alt: !1,
      shift: !1,
      meta: !1,
      super: !1,
    };
  for (let r of t) {
    let o = r.toLowerCase();
    switch (o) {
      case "ctrl":
      case "control":
        n.ctrl = !0;
        break;
      case "alt":
      case "opt":
      case "option":
        n.alt = !0;
        break;
      case "shift":
        n.shift = !0;
        break;
      case "meta":
        n.meta = !0;
        break;
      case "cmd":
      case "command":
      case "super":
      case "win":
        n.super = !0;
        break;
      case "esc":
        n.key = "escape";
        break;
      case "return":
        n.key = "enter";
        break;
      case "del":
        n.key = "delete";
        break;
      case "space":
        n.key = " ";
        break;
      case "\u2191":
        n.key = "up";
        break;
      case "\u2193":
        n.key = "down";
        break;
      case "\u2190":
        n.key = "left";
        break;
      case "\u2192":
        n.key = "right";
        break;
      default:
        n.key = o;
        break;
    }
  }
  return n;
}
function CW(e) {
  if (e === " ") return [TGe("space")];
  return e.trim().split(/\s+/).map(TGe);
}
function n5d(e) {
  let t = [];
  if (e.ctrl) t.push("ctrl");
  if (e.alt) t.push("alt");
  if (e.shift) t.push("shift");
  if (e.meta) t.push("meta");
  if (e.super) t.push("cmd");
  let n = iqi(e.key);
  return (t.push(n), t.join("+"));
}
function iqi(e) {
  switch (e) {
    case "escape":
      return "Esc";
    case " ":
      return "space";
    case "tab":
      return "tab";
    case "enter":
      return "Enter";
    case "backspace":
      return "Backspace";
    case "delete":
      return "Delete";
    case "up":
      return "\u2191";
    case "down":
      return "\u2193";
    case "left":
      return "\u2190";
    case "right":
      return "\u2192";
    case "pageup":
      return "PageUp";
    case "pagedown":
      return "PageDown";
    case "home":
      return "Home";
    case "end":
      return "End";
    default:
      return e;
  }
}
function nX(e) {
  return e.map(n5d).join(" ");
}
function ZJr(e, t = "linux") {
  let n = [];
  if (e.ctrl) n.push("ctrl");
  if (e.alt || e.meta) n.push(t === "macos" ? "opt" : "alt");
  if (e.shift) n.push("shift");
  if (e.super) n.push(t === "macos" ? "cmd" : "super");
  let r = iqi(e.key);
  return (n.push(r), n.join("+"));
}
function aqi(e, t = "linux") {
  return e.map((n) => ZJr(n, t)).join(" ");
}
function XLn(e) {
  let t = [];
  for (let n of e)
    for (let [r, o] of Object.entries(n.bindings))
      t.push({
        chord: CW(r),
        action: o,
        context: n.context,
      });
  return t;
}
function lqi() {
  let e = Vt(),
    t = [...aUt, ...eQr];
  if (e === "macos") t.push(...tQr);
  return t;
}
function vGe(e) {
  if (e === " ") return "space";
  return e.trim().split(/\s+/).map(o5d).join(" ");
}
function o5d(e) {
  let t = e.split("+"),
    n = [],
    r = "";
  for (let o of t) {
    let s = o.trim().toLowerCase();
    if (
      [
        "ctrl",
        "control",
        "alt",
        "opt",
        "option",
        "meta",
        "cmd",
        "command",
        "super",
        "win",
        "shift",
      ].includes(s)
    ) {
      if (s === "control") n.push("ctrl");
      else if (s === "option" || s === "opt" || s === "meta") n.push("alt");
      else if (s === "command" || s === "cmd" || s === "super" || s === "win") n.push("cmd");
      else n.push(s);
    } else r = r5d[s] ?? s;
  }
  return (n.sort(), [...n, r].join("+"));
}
var aUt, eQr, tQr, r5d;
