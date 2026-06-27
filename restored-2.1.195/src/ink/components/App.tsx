// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module oat
// matched 2.1.88 source: src/ink/components/App.tsx
// class=modified  jaccard=0.2308  score=0.5234  fileCov=0.2923
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module oat]
((WGi = R(rt(), 1)), (Dce = WGi.createContext(null)));
function oJr() {
  if (process.env.CLAUDE_CODE_SESSION_KIND === "bg") return false;
  return true;
}
async function App(e) {
  let [t] = await Promise.all([e.send(jUi()), e.flush()]);
  if (t) {
    let s = t.name;
    if (process.env.TMUX && s.startsWith("tmux ")) {
      let { stdout: i } = await $n("tmux", ["display-message", "-p", "#{client_termtype}"], {
          timeout: 1000,
          useCwd: false,
        }),
        a = i.trim();
      if (a) s = a;
    }
    (d4i(s), T(`XTVERSION: terminal identified as "${s}"`));
  } else T("XTVERSION: no reply (terminal ignored query)");
  let n = !t || process.env.TERM_PROGRAM === "Apple_Terminal",
    [r] = await Promise.all([
      n ? Promise.resolve(void 0) : e.send(BUi(p_.SYNCHRONIZED_UPDATE)),
      n ? Promise.resolve() : e.flush(),
    ]),
    o = r?.status === 1 || r?.status === 2;
  (c4i(o),
    T(
      `DECRQM(2026): ${n ? `skipped (${t ? "Apple_Terminal" : "no XTVERSION reply"})` : r ? `status=${r.status}` : "no reply"} \u2192 sync ${o ? "supported" : "unsupported"}`,
    ),
    T(
      `DECSTBM: ${$Rn ? "enabled" : "gated"} (TMUX=${process.env.TMUX ? "set" : "unset"} ZELLIJ=${process.env.ZELLIJ != null ? "set" : "unset"} TERM_PROGRAM=${process.env.TERM_PROGRAM ?? "unset"} TERM=${process.env.TERM ?? "unset"})`,
    ));
}
function processKeysInBatch(app, items, _unused1, _unused2) {
  if (
    items.some(
      (s) =>
        (s.kind === "key" && s.sequence !== X3e && s.sequence !== Nke) ||
        (s.kind === "mouse" && !((s.button & 32) !== 0 && (s.button & 3) === 3)),
    )
  )
    Tge();
  let o = b4i(app.jediTermInput, items, performance.now(), app.emitJediTermScrollBug);
  AGd(app, o);
  for (let s of o) {
    if (s.kind === "response") {
      if (s.response.type === "themeNotify") {
        WUi();
        continue;
      }
      app.querier?.onResponse(s.response);
      continue;
    }
    if (s.kind === "mouse") {
      if (app.props.getMouseMode?.() === "scroll" && (s.button & 3) === 0) continue;
      bGd(app, s);
      continue;
    }
    let i = s.sequence;
    if (i === X3e) {
      app.handleTerminalFocus(true);
      let a = new Pit("terminalfocus");
      app.internal_eventEmitter.emit("terminalfocus", a);
      continue;
    }
    if (i === Nke) {
      if ((app.handleTerminalFocus(false), app.props.selection.isDragging))
        (eat(app.props.selection), app.props.onSelectionChange());
      let a = new Pit("terminalblur");
      app.internal_eventEmitter.emit("terminalblur", a);
      continue;
    }
    if (!Sit()) LYr(true);
    if (s.name === "z" && s.ctrl && oJr()) {
      app.handleSuspend();
      continue;
    }
    if (!s.isPasted) app.handleInput(i);
    if (s.isPasted) app.props.dispatchPasteEvent(s.sequence ?? "");
    else if (s.name === "wheelup" || s.name === "wheeldown" || s.name === "mouse") {
      if (s.name !== "mouse") app.props.dispatchWheelEvent(s);
    } else app.props.dispatchKeyboardEvent(s);
  }
}
function bGd(e, t) {
  let n = e.props.selection,
    r = t.col - 1,
    o = t.row - 1,
    s = t.button & 3;
  if (t.action === "press") {
    if ((t.button & 32) !== 0 && s === 3) {
      if (n.isDragging) (eat(n), e.props.onSelectionChange());
      if (r === e.lastHoverCol && o === e.lastHoverRow) return;
      ((e.lastHoverCol = r), (e.lastHoverRow = o), e.props.onHoverAt(r, o));
      return;
    }
    if (s !== 0) {
      if (((e.clickCount = 0), (t.button & 32) === 0)) {
        let l = Vt();
        if (s === 2 && (l === "windows" || l === "wsl" || l === "linux")) {
          if (Hne(n)) ($Bt(n), e.props.onSelectionChange());
          else if (!yb())
            QNt("clipboard").then((c) => {
              if (c) e.props.dispatchPasteEvent(c);
            });
        } else if (s === 1 && l === "linux")
          QNt("primary").then((c) => {
            if (c) e.props.dispatchPasteEvent(c);
          });
      }
      return;
    }
    if ((t.button & 32) !== 0) {
      e.props.onSelectionDrag(r, o);
      return;
    }
    if (n.isDragging) (eat(n), e.props.onSelectionChange());
    let i = Date.now(),
      a =
        i - e.lastClickTime < VGi &&
        Math.abs(r - e.lastClickCol) <= zGi &&
        Math.abs(o - e.lastClickRow) <= zGi;
    if (
      ((e.clickCount = a ? e.clickCount + 1 : 1),
      (e.lastClickTime = i),
      (e.lastClickCol = r),
      (e.lastClickRow = o),
      e.clickCount >= 2)
    ) {
      if (e.pendingHyperlinkTimer)
        (clearTimeout(e.pendingHyperlinkTimer), (e.pendingHyperlinkTimer = null));
      let l = e.clickCount === 2 ? 2 : 3;
      e.props.onMultiClick(r, o, l);
      return;
    }
    (pLn(n, r, o), (n.lastPressHadAlt = (t.button & 8) !== 0), e.props.onSelectionChange());
    return;
  }
  if (s !== 0) {
    if (!n.isDragging) return;
    (eat(n), e.props.onSelectionChange());
    return;
  }
  if ((eat(n), !Hne(n) && n.anchor)) {
    if (!e.props.onClickAt(r, o)) {
      let i = e.props.getHyperlinkAt(r, o);
      if (
        i &&
        ((t.button & 24) !== 0 || E1.macCmdClickArrivesWithoutSgrModifierBit() || p4i()) &&
        process.env.TERM_PROGRAM !== "vscode" &&
        !yb()
      ) {
        if (e.pendingHyperlinkTimer) clearTimeout(e.pendingHyperlinkTimer);
        e.pendingHyperlinkTimer = setTimeout(
          (a, l) => {
            ((a.pendingHyperlinkTimer = null), a.props.onOpenHyperlink(l));
          },
          VGi,
          e,
          i,
        );
      }
    }
  }
  e.props.onSelectionChange();
}
function AGd(e, t) {
  let n = t[0];
  if (
    n?.kind !== "key" ||
    (n.name !== "up" && n.name !== "down") ||
    n.ctrl ||
    n.meta ||
    n.shift ||
    n.isPasted ||
    !t.every((i) => i.kind === "key" && i.name === n.name && !i.ctrl && !i.meta && !i.shift)
  ) {
    e.arrowWindow.length = 0;
    return;
  }
  if (e.arrowWindowDir !== n.name) ((e.arrowWindow.length = 0), (e.arrowWindowDir = n.name));
  let r = performance.now(),
    o = e.arrowWindow;
  o.push({
    t: r,
    n: t.length,
  });
  while (o.length > 0 && r - o[0].t > SGd) o.shift();
  let s = 0;
  for (let i of o) s += i.n;
  if (s >= EGd)
    (e.internal_eventEmitter.emit("arrow-burst", {
      direction: n.name,
      count: s,
    }),
      e.props.onStdinResume?.(),
      (o.length = 0));
}
var KGi,
  c0e,
  hGd = () => {},
  yGd = 5000,
  VGi = 500,
  zGi = 1,
  yLn,
  SGd = 100,
  EGd = 8;
