// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sJr
// matched 2.1.88 source: src/ink/components/App.tsx
// class=modified (alt of src/ink/components/App.tsx)  jaccard=0.2078  score=0.7242  fileCov=0.2256
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sJr] deps: ft, je, Kke, wr, lT, Bi, vn, Is, Vke, C0n, y7r, HI, URn, z7r, Kit, NBt, Bke, ZS, Y3e, X0n, GYr, OM, q7, jh, fGe, l0e, eJr, GGi, qNt, QXr, oat
((KGi = R(rt(), 1)), (c0e = R(se(), 1)));
yLn = class yLn extends KGi.PureComponent {
  static displayName = "InternalApp";
  static getDerivedStateFromError(e) {
    return {
      error: e,
    };
  }
  state = {
    error: void 0,
  };
  rawModeEnabledCount = 0;
  internal_eventEmitter = new F3e();
  keyParseState = D4i;
  incompleteEscapeTimer = null;
  byteRunDeadlineAt = null;
  NORMAL_TIMEOUT = 50;
  PASTE_TIMEOUT = 2000;
  querier = this.props.stdout.isTTY && this.props.stdin.isTTY ? new FYr(this.props.stdout) : null;
  lastClickTime = 0;
  lastClickCol = -1;
  lastClickRow = -1;
  clickCount = 0;
  pendingHyperlinkTimer = null;
  lastHoverCol = -1;
  lastHoverRow = -1;
  lastStdinTime = performance.now();
  arrowWindow = [];
  arrowWindowDir = "";
  jediTermInput = _4i();
  emitJediTermScrollBug = () => this.internal_eventEmitter.emit("jediterm-scroll-bug");
  isRawModeSupported() {
    return this.props.stdin.isTTY;
  }
  render() {
    return c0e.jsx(Dce.Provider, {
      value: {
        columns: this.props.terminalColumns,
        rows: this.props.terminalRows,
      },
      children: c0e.jsx(J7.Provider, {
        value: {
          exit: this.handleExit,
          focusManager: this.props.focusManager,
          rootNode: this.props.rootNode,
          dispatchPasteEvent: this.props.dispatchPasteEvent,
        },
        children: c0e.jsx(B_e.Provider, {
          value: {
            stdin: this.props.stdin,
            setRawMode: this.handleSetRawMode,
            isRawModeSupported: this.isRawModeSupported(),
            internal_eventEmitter: this.internal_eventEmitter,
            internal_querier: this.querier,
          },
          children: c0e.jsx(EGi, {
            children: c0e.jsx(TGi, {
              children: c0e.jsx(gLn.Provider, {
                value: this.props.onCursorDeclaration ?? hGd,
                children: this.state.error
                  ? c0e.jsx(rJr, {
                      error: this.state.error,
                    })
                  : this.props.children,
              }),
            }),
          }),
        }),
      }),
    });
  }
  componentDidMount() {
    let e = this.props.rootNode,
      t = e._pendingRawModeDelta ?? 0;
    e._pendingRawModeDelta = 0;
    for (let n = 0; n < t; n++) this.handleSetRawMode(true);
    for (let n = 0; n > t; n--) this.handleSetRawMode(false);
    e.setRawMode = this.handleSetRawMode;
  }
  componentWillUnmount() {
    if (((this.props.rootNode.setRawMode = void 0), this.props.stdout.isTTY))
      this.props.stdout.write(A1);
    if (this.incompleteEscapeTimer)
      (clearTimeout(this.incompleteEscapeTimer), (this.incompleteEscapeTimer = null));
    if (this.pendingHyperlinkTimer)
      (clearTimeout(this.pendingHyperlinkTimer), (this.pendingHyperlinkTimer = null));
    if (this.isRawModeSupported())
      while (this.rawModeEnabledCount > 0) this.handleSetRawMode(false);
  }
  componentDidCatch(e, t) {
    (x1i(e, t), this.handleExit(e));
  }
  handleSetRawMode = (e) => {
    let { stdin: t } = this.props;
    if (!this.isRawModeSupported())
      if (t === process.stdin)
        throw Error(`Raw mode is not supported on the current process.stdin, which Ink uses as input stream by default.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
      else
        throw Error(`Raw mode is not supported on the stdin provided to Ink.
Read about how to prevent this error on https://github.com/vadimdemedes/ink/#israwmodesupported`);
    if ((t.setEncoding("utf8"), e)) {
      if (this.rawModeEnabledCount === 0) {
        if (
          (Ice(),
          this.props.onRawModeEnter?.(),
          t.ref(),
          L0(t, true),
          t.addListener("readable", this.handleReadable),
          Vt() === "windows")
        )
          (t.resume(), t.pause());
        if (
          (this.props.stdout.write(RRn),
          this.props.stdout.write(M7r),
          this.props.stdout.write(r4i),
          this.props.stdout.write(gne()),
          process.env.CLAUDE_BG_BACKEND !== "daemon")
        )
          setImmediate(() => {
            if (this.querier) qGi(this.querier);
          });
      }
      this.rawModeEnabledCount++;
      return;
    }
    if (this.rawModeEnabledCount <= 0) return;
    if (--this.rawModeEnabledCount === 0) {
      if (
        (this.props.stdout.write(G_e),
        this.props.stdout.write(Tce),
        this.props.stdout.write(yBt),
        this.props.stdout.write(DRn),
        this.props.stdout.write(LRn),
        !Cu.get(this.props.stdout)?.isHandoffRawMode)
      )
        L0(t, false);
      (t.removeListener("readable", this.handleReadable), t.unref());
    }
  };
  flushIncomplete = () => {
    if (
      ((this.incompleteEscapeTimer = null),
      !this.keyParseState.incomplete &&
        this.keyParseState.mode !== "IN_PASTE" &&
        this.keyParseState.pendingByteEvents.length === 0)
    )
      return;
    if (this.props.stdin.readableLength > 0) {
      this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, this.NORMAL_TIMEOUT);
      return;
    }
    if (this.keyParseState.incomplete) {
      let t =
        (this.keyParseState.mode === "IN_PASTE" ? this.PASTE_TIMEOUT : this.NORMAL_TIMEOUT) -
        (performance.now() - this.lastStdinTime);
      if (t > 0) {
        this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, t);
        return;
      }
    }
    this.processInput(null);
  };
  processInput = (e) => {
    let t = this.keyParseState,
      [n, r] = P4i(this.keyParseState, e);
    if (((this.keyParseState = r), n.length > 0)) Ene.discreteUpdates(_Gd, this, n, void 0, void 0);
    let o = performance.now(),
      s = this.keyParseState.pendingByteEvents;
    if (s.length === 0) this.byteRunDeadlineAt = null;
    else if (t.pendingByteEvents !== s || this.byteRunDeadlineAt === null)
      this.byteRunDeadlineAt = o + this.NORMAL_TIMEOUT;
    if (this.incompleteEscapeTimer)
      (clearTimeout(this.incompleteEscapeTimer), (this.incompleteEscapeTimer = null));
    let i =
        this.keyParseState.incomplete || this.keyParseState.mode === "IN_PASTE"
          ? this.keyParseState.mode === "IN_PASTE"
            ? this.PASTE_TIMEOUT
            : this.NORMAL_TIMEOUT
          : null,
      a =
        this.byteRunDeadlineAt === null || this.keyParseState.mode === "IN_PASTE"
          ? null
          : Math.max(0, this.byteRunDeadlineAt - o),
      l = i === null ? a : a === null ? i : Math.min(i, a);
    if (l !== null) this.incompleteEscapeTimer = setTimeout(this.flushIncomplete, l);
  };
  handleReadable = () => {
    let e = performance.now();
    if (e - this.lastStdinTime > yGd) this.props.onStdinResume?.();
    this.lastStdinTime = e;
    try {
      let t;
      while ((t = this.props.stdin.read()) !== null) this.processInput(t);
    } catch (t) {
      ke(t);
      let { stdin: n } = this.props;
      if (this.rawModeEnabledCount > 0 && !n.listeners("readable").includes(this.handleReadable))
        (T("handleReadable: re-attaching stdin readable listener after error recovery", {
          level: "warn",
        }),
          n.addListener("readable", this.handleReadable));
    }
  };
  handleInput = (e) => {
    if (e === "\x03" && this.props.exitOnCtrlC) this.handleExit();
  };
  handleExit = (e) => {
    if (this.isRawModeSupported()) this.handleSetRawMode(false);
    this.props.onExit(e);
  };
  handleTerminalFocus = (e) => {
    let t = N7();
    if ((LYr(e), e && t === "blurred")) Cu.get(this.props.stdout)?.proactiveAtlasResetOnFocus();
    if (e && t !== "focused" && process.env.CLAUDE_BG_BACKEND === "daemon" && this.querier)
      qGi(this.querier);
  };
  handleSuspend = () => {
    if (!this.isRawModeSupported()) return;
    let e = this.rawModeEnabledCount;
    while (this.rawModeEnabledCount > 0) this.handleSetRawMode(false);
    if (this.props.stdout.isTTY) this.props.stdout.write(A1 + yBt + kce);
    this.internal_eventEmitter.emit("suspend");
    let t = () => {
      for (let n = 0; n < e; n++) if (this.isRawModeSupported()) this.handleSetRawMode(true);
      if (this.props.stdout.isTTY) {
        let n = this.props.isScreenReaderEnabled ?? false;
        if (!Oe.CLAUDE_CODE_ACCESSIBILITY && !n) this.props.stdout.write(_W);
        this.props.stdout.write(M7r);
      }
      (this.internal_eventEmitter.emit("resume"), process.removeListener("SIGCONT", t));
    };
    (process.on("SIGCONT", t), process.kill(0, "SIGTSTP"));
  };
};
function HGd(e) {
  let t = e.sequence ?? "",
    n = e.name ?? "";
  if (n === "space") return " ";
  if (e.ctrl) return n;
  if (t.length === 1) {
    let r = t.charCodeAt(0);
    if (r >= 32 && r !== 127) return t;
  }
  if (n) {
    if (e.shift && n.length === 1) {
      let r = n.toUpperCase();
      if (r !== n && r.length === 1) return r;
    }
    return n;
  }
  if (t.charCodeAt(0) === 27) return "";
  if (/^(\[<\d[\d;]*[Mm]?)+$/.test(t)) return "";
  return t;
}
var sat;
