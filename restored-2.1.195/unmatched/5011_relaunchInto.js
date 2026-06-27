// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Djo
// matched 2.1.88 source: src/components/Settings/Config.tsx
// class=new  jaccard=0.0128  score=0.0911  fileCov=0.0147
// note: nearest: src/components/Settings/Config.tsx (0.0128); 2 renamed
// ─────────────────────────────────────────────────────────────────────────
var Djo = E(() => {
  ft();
  Cp();
});
var nzl = {};
_t(nzl, {
  relaunchInto: () => relaunchInto,
  call: () => call
});
function relaunchInto(e, t) {
  return w1e({
    freshIfNoTranscript: !0,
    extraArgs: t,
    env: {
      CLAUDE_CODE_TUI_JUST_SWITCHED: e,
      ...tke()
    },
    dropEnv: ["CLAUDE_CODE_NO_FLICKER", "CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN", "CLAUDE_CODE_FORCE_FULLSCREEN_UPSELL"]
  });
}
function _qf(e) {
  return e.toLowerCase().replace(/[^a-z]/g, "") === yqf;
}
function Sqf(e) {
  let t = tzl.c(20),
    {
      fromEntryPath: n,
      bounce: r,
      revertKind: o,
      carryFlags: s,
      onDone: i
    } = e,
    [a, l] = C1e.useState(""),
    [c, u] = C1e.useState(0),
    [d, p] = C1e.useState(null),
    {
      columns: f
    } = br(),
    m = C1e.useRef(!1),
    g;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) g = D => {
    if (m.current) return;
    m.current = !0, p(D.trim());
  }, t[0] = g;else g = t[0];
  let h = g,
    y,
    b;
  if (t[1] !== r || t[2] !== s || t[3] !== n || t[4] !== i || t[5] !== o || t[6] !== d) y = () => {
    if (d === null) return;
    let D = !1;
    return (async () => {
      if (d && !_qf(d)) {
        let P = xc(d).slice(0, bqf);
        await yU("tengu_tui_optout_reason", {
          reason: P,
          from_entry_path: $e(n),
          bounce: r,
          downsell_gate: ine.downsellGateCached === !0,
          revert_kind: $e(o),
          downsell_seen_count: Dt().fullscreenDownsellSeenCount ?? 0
        }).catch(ke);
      }
      if (await Nn($U * 2), D) return;
      relaunchInto("default", s).catch(P => {
        ke(P), i(`Couldn't switch renderers \u2014 ${P instanceof Error ? P.message : String(P)}. The setting was saved; restart Claude Code to apply it.`, {
          display: "system"
        });
      });
    })(), () => {
      D = !0;
    };
  }, b = [d, n, r, o, s, i], t[1] = r, t[2] = s, t[3] = n, t[4] = i, t[5] = o, t[6] = d, t[7] = y, t[8] = b;else y = t[7], b = t[8];
  C1e.useEffect(y, b);
  let _, S;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) _ = () => h(""), S = {
    context: "Settings"
  }, t[9] = _, t[10] = S;else _ = t[9], S = t[10];
  if ($r("confirm:no", _, S), d !== null) {
    let D;
    if (t[11] === Symbol.for("react.memo_cache_sentinel")) D = vz.jsx(U, {
      paddingX: 1,
      children: vz.jsx(w, {
        dimColor: !0,
        children: "Switching back to the classic renderer\u2026"
      })
    }), t[11] = D;else D = t[11];
    return D;
  }
  let A;
  if (t[12] === Symbol.for("react.memo_cache_sentinel")) A = () => h(""), t[12] = A;else A = t[12];
  let v, C;
  if (t[13] === Symbol.for("react.memo_cache_sentinel")) v = vz.jsxs(Tn, {
    children: [vz.jsx(ht, {
      chord: "enter",
      action: "send"
    }), vz.jsx(mr, {
      action: "confirm:no",
      context: "Confirmation",
      fallback: "Esc",
      description: "skip"
    })]
  }), C = vz.jsx(w, {
    children: "To help us make fullscreen mode better, what made you switch back?"
  }), t[13] = v, t[14] = C;else v = t[13], C = t[14];
  let x;
  if (t[15] === Symbol.for("react.memo_cache_sentinel")) x = vz.jsx(w, {
    children: ">"
  }), t[15] = x;else x = t[15];
  let I = Math.max(10, f - 8),
    k;
  if (t[16] !== c || t[17] !== a || t[18] !== I) k = vz.jsxs(zn, {
    title: "Fullscreen feedback",
    onCancel: A,
    isCancelActive: !1,
    inputGuide: v,
    children: [C, vz.jsxs(U, {
      flexDirection: "row",
      gap: 1,
      children: [x, vz.jsx(Ta, {
        value: a,
        onChange: l,
        onSubmit: h,
        focus: !0,
        showCursor: !0,
        columns: I,
        cursorOffset: c,
        onChangeCursorOffset: u
      })]
    })]
  }), t[16] = c, t[17] = a, t[18] = I, t[19] = k;else k = t[19];
  return k;
}
var tzl,
  C1e,
  vz,
  Pjo,
  call = async (e, t, n) => {
    let r = n.trim().toLowerCase(),
      o = Ns() ? "fullscreen" : "default";
    if (r === "") return e(`Current renderer: ${o}. Usage: /tui <${Pjo.join("|")}>`, {
      display: "system"
    }), null;
    if (!Pjo.includes(r)) return e(`Unknown renderer "${r}". Usage: /tui <${Pjo.join("|")}>`, {
      display: "system"
    }), null;
    let s = r,
      i = vsr(Fr(t), gg(t));
    if (Js()) return e("Background sessions always use the fullscreen renderer so scrolling and mouse work when attached. The tui setting applies to sessions started directly with `claude`.", {
      display: "system"
    }), null;
    if (UD()) return e("Screen-reader mode always uses the classic renderer, so the tui setting has no effect while it is active.", {
      display: "system"
    }), null;
    let a = s === "fullscreen",
      l = a === Ns();
    if (l && Dr().tui !== void 0) return e(`Already using the ${s} renderer.`, {
      display: "system"
    }), null;
    if (!l) {
      let f = t.taskRegistry.all();
      if (Object.values(f).some(g => (g.status === "running" || g.status === "pending") && g.type !== "remote_agent" && g.type !== "mcp_task")) return G("tengu_tui_refused", {
        active_tasks: !0
      }), e("Cannot switch renderers while work is running in the background \u2014 wait for it to finish (or stop it via /tasks), then run /tui again.", {
        display: "system"
      }), null;
    }
    let c = Uke(),
      {
        error: u
      } = io("userSettings", {
        tui: s
      });
    if (u) return e(`Failed to save setting: ${u.message}`, {
      display: "system"
    }), null;
    let d = T1(),
      p = (process.env.CLAUDE_CODE_TUI_JUST_SWITCHED === "fullscreen" || c === "downsell_on" || ine.downsellGateCached === !0) && s === "default";
    if (G("tengu_tui_command", {
      fullscreen: a,
      from: $e(o),
      to: $e(s),
      from_entry_path: $e(c),
      session_age_ms: Math.round(process.uptime() * 1000),
      bounce: p,
      scroll_decay_curve: d.useDecayCurve,
      scroll_base: d.base,
      scroll_xtermjs: d.xtermJs
    }), l) return e(`Already using the ${s} renderer.`, {
      display: "system"
    }), null;
    if (s === "default" && (p || c === "gb_on" || c === "settings_on") && cW() && Us("allow_product_feedback")) return vz.jsx(Sqf, {
      fromEntryPath: c,
      bounce: p,
      revertKind: p || c === "gb_on" ? "same_session" : "later_session",
      carryFlags: i,
      onDone: e
    });
    return relaunchInto(s, i).catch(f => (ke(f), e(`Couldn't switch renderers \u2014 ${f instanceof Error ? f.message : String(f)}. The setting was saved; restart Claude Code to apply it.`, {
      display: "system"
    }), null));
  },
  yqf = "egcouldntcopytext",
  bqf = 1000;