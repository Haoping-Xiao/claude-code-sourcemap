// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module P9l
// matched 2.1.88 source: src/commands/terminalSetup/terminalSetup.tsx
// class=modified (alt of src/commands/terminalSetup/terminalSetup.tsx)  jaccard=0.0498  score=0.1248  fileCov=0.0764
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var P9l = E(() => {
  D9l = {
    isEnabled: () => false,
    isHidden: true,
    name: "stub",
  };
});
function Q2o(e, t) {
  let n = e < 1 ? Math.round(e / isr) * isr : Math.round(e);
  return _b(n, t, ssr);
}
function N9l({ onDone: e, showDemoRuler: t = true, editorSensitivity: n = null }) {
  let r = zHe.useRef(process.env[LAt]),
    o = T1(),
    s = B7r(o.xtermJs, o.wheelFlood, o.wtSession),
    i = o.useDecayCurve ? O9l : GWf,
    [a, l] = zHe.useState(() => Q2o(o.base, i)),
    [c, u] = zHe.useState(r.current !== void 0),
    d = zHe.useRef(false),
    p = zHe.useRef(false),
    f = !o.xtermJs && !o.wheelFlood;
  zHe.useEffect(() => {
    EJr(true, {
      demoRuler: t,
    });
    let A = f
      ? cat(() => {
          let v = TWi();
          if (!v) return;
          if (v.wheelMode) d.current = true;
          else p.current = true;
        })
      : void 0;
    return () => {
      (A?.(), EJr(false));
    };
  }, [t, f]);
  function m(A) {
    let v = A < 0 ? (a <= 1 ? -isr : -1) : a < 1 ? isr : 1,
      C = Q2o(a + v, i);
    if (C === a) return;
    ((process.env[LAt] = String(C)), ORn(), u(true), l(C));
  }
  function g() {
    (delete process.env[LAt], ORn(), l(Q2o(s, i)), u(false));
  }
  function h() {
    if (r.current === void 0) delete process.env[LAt];
    else process.env[LAt] = r.current;
    ORn();
  }
  function y() {
    (h(), e("Scroll speed unchanged"));
  }
  function b() {
    let A = !c,
      v = {
        [LAt]: A ? void 0 : String(a),
      },
      { error: C } = io("userSettings", {
        env: v,
      });
    if (C) {
      (ke(C), h(), e(`Couldn't save scroll speed: ${C.message}`));
      return;
    }
    G("tengu_scroll_speed_set", {
      scroll_speed: A ? s : a,
      scroll_speed_auto: s,
      reset_to_auto: A,
      xterm_js: o.xtermJs,
      wheel_flood: o.wheelFlood,
      wt_session: o.wtSession,
      use_decay_curve: o.useDecayCurve,
      saw_scroll_wheel: d.current,
      saw_trackpad: p.current,
      editor_wheel_sensitivity: n?.sensitivity ?? void 0,
      term_program: o.termProgram,
      term_program_version: tS(o.termProgramVersion),
    });
    let x = `\`${fM(xg("userSettings") ?? "settings.json")}\``;
    e(
      A
        ? `Scroll speed reset to auto (${s} ${bn(s, "line")} per notch) \xB7 removed from ${x}`
        : `Scroll speed set to ${a} ${bn(a, "line")} per notch \xB7 saved to ${x}`,
    );
  }
  function _(A) {
    if (A.key === "left") (A.preventDefault(), m(-1));
    else if (A.key === "right") (A.preventDefault(), m(1));
    else if (A.key === "return") (A.preventDefault(), b());
    else if (A.key === "escape" || (A.ctrl && (A.key === "c" || A.key === "d")))
      (A.preventDefault(), y());
    else if (A.key === "r") (A.preventDefault(), g());
  }
  let S = !c;
  return hR.jsx(U, {
    flexDirection: "column",
    tabIndex: 0,
    autoFocus: true,
    onKeyDown: _,
    children: hR.jsx(Fu, {
      color: "permission",
      children: hR.jsxs(U, {
        flexDirection: "column",
        children: [
          hR.jsx(w, {
            bold: true,
            children: "Scroll speed",
          }),
          hR.jsx(U, {
            height: 1,
          }),
          hR.jsxs(U, {
            children: [
              hR.jsx(w, {
                color: "permission",
                children: WWf(a),
              }),
              hR.jsxs(w, {
                children: ["  ", a, " ", bn(a, "line"), " per wheel notch"],
              }),
              S &&
                hR.jsx(w, {
                  dimColor: true,
                  children: " (auto)",
                }),
              !S &&
                hR.jsxs(w, {
                  dimColor: true,
                  children: [" \xB7 auto is ", s],
                }),
            ],
          }),
          hR.jsx(U, {
            height: 1,
          }),
          hR.jsx(M9l, {
            label: "Terminal",
            value: qWf(o),
          }),
          n &&
            hR.jsx(M9l, {
              label: "Editor",
              value: zWf(n),
            }),
          hR.jsx(U, {
            height: 1,
          }),
          hR.jsx(w, {
            dimColor: true,
            children:
              "Scroll to feel it \xB7 \u2190/\u2192 adjust \xB7 r reset to auto \xB7 Enter save \xB7 Esc cancel",
          }),
        ],
      }),
    }),
  });
}
function M9l(e) {
  let t = $9l.c(7),
    { label: n, value: r } = e,
    o;
  if (t[0] !== n)
    ((o = hR.jsx(U, {
      width: 12,
      children: hR.jsx(w, {
        dimColor: true,
        children: n,
      }),
    })),
      (t[0] = n),
      (t[1] = o));
  else o = t[1];
  let s;
  if (t[2] !== r)
    ((s = hR.jsx(w, {
      children: r,
    })),
      (t[2] = r),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== o || t[5] !== s)
    ((i = hR.jsxs(U, {
      children: [o, s],
    })),
      (t[4] = o),
      (t[5] = s),
      (t[6] = i));
  else i = t[6];
  return i;
}
function WWf(e) {
  if (e < 1) return "\u25AA" + Ff("\xB7", ssr - 1);
  let t = _b(Math.round(e), O9l, ssr);
  return "\u25A0".repeat(t) + Ff("\xB7", ssr - t);
}
function qWf(e) {
  let t = [VWf(e), Mpn(e.platform)];
  if (e.wheelFlood) t.push("high-rate wheel events");
  else if (e.xtermJs) t.push("xterm.js");
  else if (e.wtSession) t.push("Windows Terminal");
  return t.join(" \xB7 ");
}
function VWf(e) {
  if (process.env.CURSOR_TRACE_ID !== void 0) return "Cursor";
  let t = process.env.VSCODE_GIT_ASKPASS_MAIN ?? "";
  if (t.includes("cursor")) return "Cursor (remote)";
  if (ikr(t)) return "Devin Desktop";
  if (t.includes("antigravity")) return "Antigravity";
  if (e.termProgram === "vscode")
    return `VS Code${e.termProgramVersion !== "unset" ? ` ${e.termProgramVersion}` : ""}`;
  switch (e.termProgram) {
    case "unset":
      return e.wtSession || e.platform === "win32" ? "Windows console" : "terminal";
    case "iTerm.app":
      return "iTerm2";
    case "Apple_Terminal":
      return "Terminal.app";
    case "ghostty":
      return "Ghostty";
    case "WezTerm":
      return "WezTerm";
    case "WarpTerminal":
      return "Warp";
    default:
      return e.termProgram;
  }
}
function zWf(e) {
  let t = e.editor === "VSCode" ? "VS Code" : e.editor;
  if (e.sensitivity === null)
    return `${t} wheel sensitivity unset \xB7 /terminal-setup sets it to ${e.recommended}`;
  if (e.sensitivity >= e.recommended) return `${t} wheel sensitivity ${e.sensitivity}`;
  return `${t} wheel sensitivity ${e.sensitivity} \xB7 /terminal-setup raises it to ${e.recommended}`;
}
var $9l,
  zHe,
  hR,
  O9l = 1,
  GWf = 0.25,
  isr = 0.25,
  ssr = 10,
  LAt = "CLAUDE_CODE_SCROLL_SPEED";
