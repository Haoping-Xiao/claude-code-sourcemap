// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module EW
// matched 2.1.88 source: src/ink/ink.tsx
// class=modified  jaccard=0.4065  score=0.6053  fileCov=0.5532
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module EW] deps: ink/terminal.ts, ink/termio/csi.ts, utils/env.ts
Q7 = R(rt(), 1);
((g8 = Q7.createContext(null)), (CLn = g8.Provider));
function WWi(e) {
  return Object.freeze({
    type: "stdout",
    content: hW(e, 1),
  });
}
class Ink {
  options;
  log;
  terminal;
  scheduleRender;
  isUnmounted = false;
  isPaused = false;
  container;
  rootNode;
  focusManager;
  renderer;
  stylePool;
  charPool;
  hyperlinkPool;
  exitPromise;
  restoreConsole;
  restoreStderr;
  unsubscribeTTYHandlers;
  terminalColumns;
  terminalRows;
  currentNode = null;
  frontFrame;
  backFrame;
  lastPoolResetTime = performance.now();
  lastAtlasResetAt = 0;
  lastStyleLiveSize = 0;
  drainTimer = null;
  lastYogaCounters = {
    ms: 0,
    visited: 0,
    measured: 0,
    cacheHits: 0,
    live: 0,
  };
  altScreenParkPatch;
  selection = sGi();
  searchHighlightQuery = "";
  searchPositions = null;
  selectionListeners = new Set();
  frameSink = null;
  hoveredNodes = new Set();
  hasRendered = false;
  renderCalled = false;
  isExiting = false;
  altScreenActive = false;
  _handoffRawMode = false;
  altScreenMouseTracking = "off";
  prevFrameContaminated = false;
  prevOverlaySig = "";
  needsEraseBeforePaint = false;
  altScreenFullRepaint;
  bgWorkerForceShowCursor;
  fullRepaintSentinelScreen;
  cursorDeclaration = null;
  displayCursor = null;
  accessibilityMode;
  nativeCursorVisible;
  isScreenReaderEnabled;
  prevScreenReaderLines = [];
  prevScreenReaderPark = {
    row: 0,
    col: 0,
  };
  resetScreenReaderDiffState() {
    ((this.prevScreenReaderLines = []),
      (this.prevScreenReaderPark = {
        row: 0,
        col: 0,
      }));
  }
  constructor(e) {
    this.options = e;
    if (
      (zYr(this),
      (this.accessibilityMode = Oe.CLAUDE_CODE_ACCESSIBILITY),
      (this.altScreenFullRepaint = ut(process.env.CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT)),
      (this.bgWorkerForceShowCursor =
        this.altScreenFullRepaint &&
        !this.options.nativeCursor &&
        process.env.CLAUDE_CODE_SESSION_KIND === "bg" &&
        Vt() === "windows"),
      (this.nativeCursorVisible = this.accessibilityMode),
      (this.liveCountsEnabled = ut(process.env.CLAUDE_CODE_BENCH_LIVE_COUNTS)),
      (this.isScreenReaderEnabled =
        e.isScreenReaderEnabled ?? (!!e.stdout.isTTY && ut(process.env.INK_SCREEN_READER))),
      this.options.patchConsole)
    )
      ((this.restoreConsole = this.patchConsole()), (this.restoreStderr = this.patchStderr()));
    if (
      ((this.terminal = {
        stdout: e.stdout,
        stderr: e.stderr,
      }),
      e.stdout === process.stdout)
    ) {
      if (e.stdout.isTTY) e.stdout.write("\x1B7" + c8 + "\x1B8" + A1);
    }
    ((this.terminalColumns = e.stdout.columns || 80),
      (this.terminalRows = e.stdout.rows || 24),
      (this.altScreenParkPatch = WWi(this.terminalRows)),
      (this.stylePool = new aLn()),
      ZFi(this.stylePool),
      (this.charPool = new iLn()),
      (this.hyperlinkPool = new PBt()),
      (this.frontFrame = u0e(
        this.terminalRows,
        this.terminalColumns,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      (this.backFrame = u0e(
        this.terminalRows,
        this.terminalColumns,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      (this.log = new cJr({
        isTTY: e.stdout.isTTY || false,
        stylePool: this.stylePool,
      })));
    let t = () => queueMicrotask(this.onRender);
    ((this.scheduleRender = cFi(t, $U, {
      leading: true,
      trailing: true,
    })),
      (this.isUnmounted = false),
      (this.unsubscribeExit = jee(this.unmount, {
        alwaysLast: false,
      })),
      (this.rootNode = xBt("ink-root")),
      (this.focusManager = new Vit((n, r) => f8.dispatchDiscrete(n, r))),
      (this.rootNode.focusManager = this.focusManager),
      (this.renderer = CJr(this.rootNode, this.stylePool)),
      (this.rootNode.onRender = this.scheduleRender),
      (this.rootNode.onImmediateRender = this.onRender),
      (this.rootNode.onComputeLayout = () => {
        if (this.isUnmounted) return;
        if (this.options.stdout.isTTY && this.syncTerminalSize()) {
          let n = this.currentNode;
          if (n !== null)
            queueMicrotask(() => {
              if (!this.isUnmounted) this.render(n);
            });
        }
        if (this.rootNode.yogaNode) {
          let n = performance.now(),
            r = this.rootNode.yogaNode;
          if (this.options.stdout.isTTY || this.options.stdout.columns)
            (r.setWidth(this.terminalColumns), r.calculateLayout(this.terminalColumns));
          else if ((r.setWidthAuto(), r.calculateLayout(), r.getComputedWidth() > kJr))
            (r.setWidth(kJr), r.calculateLayout(kJr));
          let o = performance.now() - n;
          F3i(o);
          let s = dRn();
          this.lastYogaCounters = {
            ms: o,
            ...s,
          };
        }
      }),
      (this.container = Ene.createContainer(
        this.rootNode,
        qWi.ConcurrentRoot,
        null,
        false,
        null,
        "id",
        W_e,
        W_e,
        W_e,
        W_e,
      )));
  }
  handleResume = () => {
    if (!this.options.stdout.isTTY) return;
    if (this.altScreenActive) {
      this.reenterAltScreen();
      return;
    }
    ((this.frontFrame = u0e(
      this.frontFrame.viewport.height,
      this.frontFrame.viewport.width,
      this.stylePool,
      this.charPool,
      this.hyperlinkPool,
    )),
      (this.backFrame = u0e(
        this.backFrame.viewport.height,
        this.backFrame.viewport.width,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      this.log.reset(),
      (this.prevFrameContaminated = true),
      (this.displayCursor = null),
      (this.nativeCursorVisible = this.accessibilityMode),
      this.resetScreenReaderDiffState());
  };
  hasStaleTerminalSize() {
    return (
      (this.options.stdout.columns || 80) !== this.terminalColumns ||
      (this.options.stdout.rows || 24) !== this.terminalRows
    );
  }
  syncTerminalSize() {
    let e = this.options.stdout.columns || 80,
      t = this.options.stdout.rows || 24;
    if (e === this.terminalColumns && t === this.terminalRows) return false;
    if (
      ((this.terminalColumns = e),
      (this.terminalRows = t),
      (this.altScreenParkPatch = WWi(this.terminalRows)),
      this.resetScreenReaderDiffState(),
      this.altScreenActive && !this.isPaused && this.options.stdout.isTTY)
    ) {
      if (this.altScreenMouseTracking !== "off")
        this.options.stdout.write(Yke(this.altScreenMouseTracking));
      (this.resetFramesForAltScreen(), (this.needsEraseBeforePaint = true));
    }
    return true;
  }
  handleResize = () => {
    if (!this.syncTerminalSize()) return;
    if (this.currentNode !== null) this.render(this.currentNode);
  };
  resolveExitPromise = () => {};
  rejectExitPromise = () => {};
  unsubscribeExit = () => {};
  enterAlternateScreen() {
    (this.pause(),
      this.options.stdout.write(
        Tce +
          G_e +
          (this.altScreenMouseTracking !== "off" ? kce : "") +
          (this.altScreenActive ? "" : "\x1B[?1049h") +
          "\x1B[?1004l\x1B[0m\x1B[?25h\x1B[2J\x1B[H",
      ),
      this.suspendStdin());
  }
  exitAlternateScreen() {
    if ((this.resumeStdin(), this.altScreenActive))
      (this.options.stdout.write(
        PRn + "\x1B[2J\x1B[H" + Yke(this.altScreenMouseTracking) + "\x1B[?25l",
      ),
        this.resetFramesForAltScreen());
    else if (
      (this.options.stdout.write(
        "\x1B[?1049l" +
          Yke(this.altScreenMouseTracking) +
          (this.accessibilityMode || this.isScreenReaderEnabled ? "" : "\x1B[?25l"),
      ),
      !this.isScreenReaderEnabled)
    )
      this.repaint();
    (this.resume(), this.options.stdout.write(Tce + G_e + "\x1B[?1004h" + RRn + gne()));
  }
  ensureInteractive = () => {
    if (this.unsubscribeTTYHandlers || !this.options.stdout.isTTY) return;
    if (!this.accessibilityMode && !this.isScreenReaderEnabled) this.options.stdout.write(_W);
    (this.options.stdout.on("resize", this.handleResize),
      process.on("SIGCONT", this.handleResume),
      (this.unsubscribeTTYHandlers = () => {
        (this.options.stdout.off("resize", this.handleResize),
          process.off("SIGCONT", this.handleResume));
      }));
  };
  skipSyncMarkers() {
    if (!this.options.stdout.isTTY) return true;
    if (!LU()) return true;
    if (!this.unsubscribeTTYHandlers) return true;
    return false;
  }
  onRender() {
    if (this.isUnmounted || this.isPaused) return;
    if (this.hasRendered && !this.isExiting) this.ensureInteractive();
    if (((this.hasRendered = true), this.drainTimer !== null))
      (clearTimeout(this.drainTimer), (this.drainTimer = null));
    if ((u_r(), this.isScreenReaderEnabled)) {
      this.onRenderScreenReader();
      return;
    }
    let e = performance.now(),
      t = this.options.stdout.columns || 80,
      n = this.options.stdout.rows || 24,
      { anchor: r, focus: o } = this.selection,
      s = this.searchPositions,
      i = `${r?.row},${r?.col},${o?.row},${o?.col}|${this.searchHighlightQuery}|${s?.currentIdx},${s?.rowOffset},${s?.positions.length}`,
      a = this.prevFrameContaminated || i !== this.prevOverlaySig;
    this.prevOverlaySig = i;
    let l =
        (r !== null && o !== null && !i0e(this.selection)) || !!this.searchHighlightQuery || !!s,
      c = this.renderer({
        frontFrame: this.frontFrame,
        backFrame: this.backFrame,
        isTTY: this.options.stdout.isTTY,
        terminalWidth: t,
        terminalRows: n,
        altScreen: this.altScreenActive,
        prevFrameContaminated: a,
        overlayActive: l,
      }),
      u = performance.now() - e;
    if (this.frameSink) {
      let $ = this.frameSink(c, this.stylePool);
      if ($) {
        if (
          ((this.backFrame = this.frontFrame),
          (this.frontFrame = c),
          (this.prevFrameContaminated = false),
          this.maybeResetPools(e),
          $ === "tick")
        )
          this.drainTimer = setTimeout(() => this.onRender(), $U >> 2);
        this.options.onFrame?.({
          durationMs: performance.now() - e,
          flickers: [],
        });
        return;
      }
    }
    let d = c.followScroll ?? null;
    if (
      d &&
      this.selection.anchor &&
      this.selection.anchor.row >= d.viewportTop &&
      this.selection.anchor.row <= d.viewportBottom &&
      (this.selection.virtualAnchorCol ?? this.selection.anchor.col) >= d.viewportLeft &&
      (this.selection.virtualAnchorCol ?? this.selection.anchor.col) <= d.viewportRight
    ) {
      let { delta: $, viewportTop: q, viewportBottom: W } = d,
        V = $ > 0 ? q : W + $ + 1,
        Y = $ > 0 ? q + $ - 1 : W,
        z = $ > 0 ? "above" : "below";
      if (this.selection.isDragging) {
        if (Hne(this.selection)) YXr(this.selection, this.frontFrame.screen, V, Y, z);
        mGi(this.selection, -$, q, W);
      } else if (
        !this.selection.focus ||
        (this.selection.focus.row >= q &&
          this.selection.focus.row <= W &&
          (this.selection.virtualFocusCol ?? this.selection.focus.col) >= d.viewportLeft &&
          (this.selection.virtualFocusCol ?? this.selection.focus.col) <= d.viewportRight)
      ) {
        if (Hne(this.selection)) YXr(this.selection, this.frontFrame.screen, V, Y, z);
        fGi(this.selection, -$, q, W, this.frontFrame.screen.width);
      }
    }
    let p = false,
      f = false;
    if (this.altScreenActive) {
      if (((p = Hne(this.selection) && !i0e(this.selection)), p))
        yGi(c.screen, this.selection, this.stylePool);
      if (((f = FWi(c.screen, this.searchHighlightQuery, this.stylePool)), this.searchPositions)) {
        let $ = this.searchPositions,
          q = NWi(c.screen, this.stylePool, $.positions, $.rowOffset, $.currentIdx);
        f = f || q;
      }
    }
    if (c.layoutShifted || p || f || a || (this.altScreenFullRepaint && this.altScreenActive))
      c.screen.damage = {
        x: 0,
        y: 0,
        width: c.screen.width,
        height: c.screen.height,
      };
    let m = this.frontFrame;
    if (this.altScreenActive) {
      if (
        ((m = {
          ...this.frontFrame,
          cursor: cWd,
        }),
        this.altScreenFullRepaint)
      ) {
        let { width: $, height: q } = this.frontFrame.screen;
        if (
          this.fullRepaintSentinelScreen?.width !== $ ||
          this.fullRepaintSentinelScreen.height !== q
        )
          ((this.fullRepaintSentinelScreen = Y7(
            $,
            q,
            this.stylePool,
            this.charPool,
            this.hyperlinkPool,
          )),
            Y3i(this.fullRepaintSentinelScreen));
        m = {
          ...m,
          screen: this.fullRepaintSentinelScreen,
        };
      }
    }
    let g = performance.now(),
      h = this.log.render(m, c, this.altScreenActive, $Rn && !this.altScreenFullRepaint),
      y = performance.now() - g;
    ((this.backFrame = this.frontFrame), (this.frontFrame = c));
    let b = [];
    for (let $ of h)
      if ($.type === "clearTerminal") {
        if (
          (b.push({
            desiredHeight: c.screen.height,
            availableHeight: c.viewport.height,
            reason: $.reason,
          }),
          PXr() && $.debug)
        ) {
          let q = b3i(this.rootNode, $.debug.triggerY);
          T(
            `[REPAINT] full reset \xB7 ${$.reason} \xB7 row ${$.debug.triggerY}
  prev: "${$.debug.prevLine}"
  next: "${$.debug.nextLine}"
  culprit: ${q.length ? q.join(" < ") : "(no owner chain captured)"}`,
            {
              level: "warn",
            },
          );
        }
      }
    let _ = performance.now(),
      S = dJr(h),
      A = performance.now() - _,
      v = S.length > 0;
    if (this.altScreenActive && v) {
      if (this.needsEraseBeforePaint) ((this.needsEraseBeforePaint = false), S.unshift(dWd));
      else S.unshift(uWd);
      S.push(this.altScreenParkPatch);
    }
    let C = this.cursorDeclaration,
      x = C !== null ? Cy.get(C.node) : void 0,
      I =
        C !== null && x !== void 0
          ? {
              x: x.x + C.relativeX,
              y: x.y + C.relativeY,
            }
          : null,
      k = this.displayCursor,
      D = I !== null && (k === null || k.x !== I.x || k.y !== I.y),
      P =
        this.options.nativeCursor &&
        I !== null &&
        C !== null &&
        (C.visible || this.accessibilityMode) !== this.nativeCursorVisible;
    if (v || D || P || (I === null && k !== null)) {
      let $ = n - 1,
        q = (W) => Math.max(-$, Math.min($, W));
      if (k !== null && !this.altScreenActive && v) {
        let W = m.cursor.x - k.x,
          V = q(m.cursor.y - k.y);
        if (W !== 0 || V !== 0)
          S.unshift({
            type: "stdout",
            content: Hce(W, V),
          });
      }
      if (I !== null) {
        if (this.altScreenActive) {
          let W = Math.min(Math.max(I.y + 1, 1), n),
            V = Math.min(Math.max(I.x + 1, 1), t);
          S.push({
            type: "stdout",
            content: hW(W, V),
          });
        } else {
          let W =
              !v && k !== null
                ? k
                : {
                    x: c.cursor.x,
                    y: c.cursor.y,
                  },
            V = I.x - W.x,
            Y = q(I.y - W.y);
          if (V !== 0 || Y !== 0)
            S.push({
              type: "stdout",
              content: Hce(V, Y),
            });
        }
        if (((this.displayCursor = I), this.options.nativeCursor || this.bgWorkerForceShowCursor)) {
          let W =
            this.bgWorkerForceShowCursor || (C !== null && C.visible) || this.accessibilityMode;
          if (this.nativeCursorVisible)
            S.unshift({
              type: "cursorHide",
            });
          if (W)
            S.push({
              type: "cursorShow",
            });
          this.nativeCursorVisible = W;
        }
      } else {
        if (k !== null && !this.altScreenActive && !v) {
          let W = c.cursor.x - k.x,
            V = q(c.cursor.y - k.y);
          if (W !== 0 || V !== 0)
            S.push({
              type: "stdout",
              content: Hce(W, V),
            });
        }
        if (
          ((this.displayCursor = null),
          (this.options.nativeCursor || this.bgWorkerForceShowCursor) &&
            this.nativeCursorVisible &&
            !this.accessibilityMode)
        )
          (S.unshift({
            type: "cursorHide",
          }),
            (this.nativeCursorVisible = false));
      }
    }
    if (v) this.maybeProactiveAtlasReset(S);
    let O = performance.now();
    O7r(this.terminal, S, this.skipSyncMarkers(), n);
    let L = performance.now() - O;
    if ((this.maybeResetPools(e), (this.prevFrameContaminated = false), c.scrollDrainPending))
      this.drainTimer = setTimeout(() => this.onRender(), $U >> 2);
    let M = j3i(),
      N = W3i(),
      B = this.lastYogaCounters;
    (q3i(),
      (this.lastYogaCounters = {
        ms: 0,
        visited: 0,
        measured: 0,
        cacheHits: 0,
        live: 0,
      }),
      this.options.onFrame?.({
        durationMs: performance.now() - e,
        phases: {
          renderer: u,
          diff: y,
          optimize: A,
          write: L,
          patches: h.length,
          yoga: M,
          commit: N,
          yogaVisited: B.visited,
          yogaMeasured: B.measured,
          yogaCacheHits: B.cacheHits,
          yogaLive: B.live,
          ...(this.liveCountsEnabled &&
            this.shouldSampleLiveCounts() && {
              domLive: tWi(this.rootNode),
              fiberLive: eWi(this.container.current),
            }),
        },
        flickers: b,
      }));
  }
  static LIVE_COUNTS_INTERVAL_MS = 100;
  liveCountsEnabled;
  lastLiveCountSampleAt = 0;
  shouldSampleLiveCounts() {
    let e = performance.now();
    if (e - this.lastLiveCountSampleAt < Ink.LIVE_COUNTS_INTERVAL_MS) return false;
    return ((this.lastLiveCountSampleAt = e), true);
  }
  onRenderScreenReader() {
    let e = YBt(this.rootNode),
      t = this.options.stdout.columns || 80,
      n =
        e === ""
          ? []
          : e.split(`
`),
      r = [],
      o = [];
    for (let _ of n)
      if ((o.push(r.length), _ === "")) r.push("");
      else {
        let S = SB(_, t, {
          trim: false,
          hard: true,
        });
        for (let A of S.split(`
`))
          r.push(A.trimEnd());
      }
    let s = this.prevScreenReaderLines,
      i = Math.max(0, r.length - 1),
      a = this.computeScreenReaderPark(e, o, r, t) ?? {
        row: i,
        col: rn(r[i] ?? ""),
      },
      l = 0,
      c = Math.min(s.length, r.length);
    while (l < c && s[l] === r[l]) l++;
    let u = l === s.length && l === r.length,
      d = this.prevScreenReaderPark,
      p = a.row === d.row && a.col === d.col;
    if (u && p) return;
    let f = Math.max(0, s.length - 1),
      m = d.row !== f ? Hce(0, f - d.row) : "",
      g = q0n(s.length - l),
      h = r.slice(l).join(`
`),
      y;
    if (u) y = "";
    else if (l === s.length)
      y =
        l > 0
          ? `
${h}`
          : h;
    else if (h === "") y = l > 0 ? g + Hce(0, -1) : g;
    else y = g + h;
    let b = W0n(a.col + 1) + (a.row !== i ? Hce(0, a.row - i) : "");
    (this.options.stdout.write(m + y + b),
      (this.prevScreenReaderLines = r),
      (this.prevScreenReaderPark = a));
  }
  computeScreenReaderPark(e, t, n, r) {
    let o = this.cursorDeclaration;
    if (o === null) return null;
    let s = wJr(this.rootNode, o.node);
    if (s === null) return null;
    let i = e.slice(0, s),
      l =
        hu(
          i,
          `
`,
        ) + o.relativeY;
    if (l < 0 || l >= t.length) return null;
    let c =
        i.lastIndexOf(`
`) + 1,
      d = (o.relativeY === 0 ? rn(e.slice(c, s)) : 0) + o.relativeX,
      p = r > 0 ? Math.floor(d / r) : 0,
      f = Math.min(t[l] + p, n.length - 1),
      m = r > 0 ? d % r : d;
    return {
      row: Math.max(0, f),
      col: Math.max(0, m),
    };
  }
  pause() {
    (Ene.flushSyncFromReconciler(), this.onRender(), (this.isPaused = true));
  }
  resume() {
    ((this.isPaused = false), this.onRender());
  }
  repaint() {
    ((this.frontFrame = u0e(
      this.frontFrame.viewport.height,
      this.frontFrame.viewport.width,
      this.stylePool,
      this.charPool,
      this.hyperlinkPool,
    )),
      (this.backFrame = u0e(
        this.backFrame.viewport.height,
        this.backFrame.viewport.width,
        this.stylePool,
        this.charPool,
        this.hyperlinkPool,
      )),
      this.log.reset(),
      (this.displayCursor = null),
      (this.prevFrameContaminated = true),
      this.resetScreenReaderDiffState());
  }
  emitAtlasReset(e) {
    if (e)
      e.unshift({
        type: "stdout",
        content: GWi,
      });
    else this.options.stdout.write(GWi);
    (d7r(), (this.lastAtlasResetAt = performance.now()));
  }
  maybeProactiveAtlasReset(e) {
    if (!rGe) return;
    if (l7r) return;
    if (sBt().atlasKeys < pWd) return;
    if (!KFi && performance.now() - this.lastAtlasResetAt < fWd) return;
    if (!yb()) return;
    (this.emitAtlasReset(e), c7r("delta"));
  }
  proactiveAtlasResetOnFocus() {
    if (rGe && !l7r && this.options.stdout.isTTY && !this.isUnmounted && !this.isPaused && yb())
      (this.emitAtlasReset(), c7r("focus"));
  }
  forceRedraw(e) {
    if (!this.options.stdout.isTTY || this.isUnmounted || this.isPaused) return false;
    if (e?.flushReact) Ene.flushSyncFromReconciler();
    if (yb()) this.emitAtlasReset();
    if (this.hasStaleTerminalSize()) return (this.handleResize(), true);
    if (this.altScreenActive)
      ((this.needsEraseBeforePaint = true),
        (this.displayCursor = null),
        this.resetFramesForAltScreen());
    else (this.log.forceFullReset(), (this.prevFrameContaminated = true));
    return (this.resetScreenReaderDiffState(), this.onRender(), true);
  }
  async probeExternalClear(e) {
    if (!this.altScreenActive || this.isPaused || this.isUnmounted) return false;
    let t = this.displayCursor;
    if (!t || t.y < 1) return false;
    let n = await e.send(lWd);
    if (n?.row !== 1) return false;
    return (
      T(
        `probeExternalClear: detected wipe (parked at y=${t.y}, terminal reports row=1 col=${n.col})`,
      ),
      this.forceRedraw(),
      true
    );
  }
  invalidatePrevFrame() {
    this.prevFrameContaminated = true;
  }
  setAltScreenActive(e, t = "off") {
    if (this.altScreenActive === e) return;
    if (((this.altScreenActive = e), (this.altScreenMouseTracking = e ? t : "off"), e))
      (this.ensureInteractive(), this.resetFramesForAltScreen());
    else this.repaint();
  }
  get isAltScreenActive() {
    return this.altScreenActive;
  }
  getMouseMode = () => this.altScreenMouseTracking;
  handoffAltScreen() {
    ((this.isPaused = true), (this.altScreenActive = false));
  }
  handoffRawMode() {
    this._handoffRawMode = true;
  }
  get isHandoffRawMode() {
    return this._handoffRawMode;
  }
  get hasUnmounted() {
    return this.isUnmounted;
  }
  getStylePool() {
    return this.stylePool;
  }
  getCharPool() {
    return this.charPool;
  }
  getHyperlinkPool() {
    return this.hyperlinkPool;
  }
  reassertTerminalModes = (e = false) => {
    if (!this.options.stdout.isTTY) return;
    if (this.isPaused) return;
    if ((this.options.stdout.write(G0n), this.options.stdout.write(gne()), !this.altScreenActive))
      return;
    if (this.altScreenMouseTracking !== "off")
      this.options.stdout.write(Yke(this.altScreenMouseTracking));
    if (e) this.reenterAltScreen();
  };
  detachForShutdown() {
    if (
      !this.isUnmounted &&
      !this.altScreenActive &&
      this.displayCursor !== null &&
      this.options.stdout.isTTY
    ) {
      let t = this.frontFrame.cursor.x - this.displayCursor.x,
        n = this.frontFrame.cursor.y - this.displayCursor.y;
      if (t !== 0 || n !== 0) h8.writeSync(1, Hce(t, n));
      this.displayCursor = null;
    }
    ((this.isUnmounted = true), this.scheduleRender.cancel?.());
    let e = this.options.stdin;
    if ((this.drainStdin(), e.isTTY && e.isRaw)) L0(e, false);
    for (let t of new Set([e, process.stdin]))
      (t.removeAllListeners("readable"),
        t.removeAllListeners("data"),
        t.removeAllListeners("keypress"),
        t.pause(),
        t.unref?.());
  }
  drainStdin() {
    return dat(this.options.stdin);
  }
  reenterAltScreen() {
    (this.options.stdout.write(Xke() + Yke(this.altScreenMouseTracking)),
      this.resetFramesForAltScreen(),
      this.onRender());
  }
  resetFramesForAltScreen() {
    let e = this.terminalRows,
      t = this.terminalColumns,
      n = () => ({
        screen: Y7(t, e, this.stylePool, this.charPool, this.hyperlinkPool),
        viewport: {
          width: t,
          height: e + 1,
        },
        cursor: {
          x: 0,
          y: 0,
          visible: true,
        },
      });
    ((this.frontFrame = n()),
      (this.backFrame = n()),
      this.log.reset(),
      (this.displayCursor = null),
      (this.prevFrameContaminated = true));
  }
  getSelectedText() {
    if (!Hne(this.selection)) return "";
    return hGi(this.selection, this.frontFrame.screen);
  }
  copySelectionNoClear() {
    let e = this.getSelectedText();
    if (e)
      AI(e).then((t) => {
        if (t) this.options.stdout.write(t);
      });
    return e;
  }
  copySelection() {
    if (!Hne(this.selection)) return "";
    let e = this.copySelectionNoClear();
    return ($Bt(this.selection), this.notifySelectionChange(), e);
  }
  clearTextSelection() {
    if (!Hne(this.selection)) return;
    ($Bt(this.selection), this.notifySelectionChange());
  }
  setSearchHighlight(e) {
    if (this.searchHighlightQuery === e) return;
    ((this.searchHighlightQuery = e), this.scheduleRender());
  }
  scanElementSubtree(e) {
    if (!this.searchHighlightQuery || !e.yogaNode) return [];
    let t = Math.ceil(e.yogaNode.getComputedWidth()),
      n = Math.ceil(e.yogaNode.getComputedHeight());
    if (t <= 0 || n <= 0) return [];
    let r = e.yogaNode.getComputedLeft(),
      o = e.yogaNode.getComputedTop(),
      s = Y7(t, n, this.stylePool, this.charPool, this.hyperlinkPool),
      i = new Q_e({
        width: t,
        height: n,
        stylePool: this.stylePool,
        screen: s,
      });
    yGe(e, i, hGe(), {
      offsetX: -r,
      offsetY: -o,
      prevScreen: void 0,
    });
    let a = i.get();
    NM(e);
    let l = OWi(a, this.searchHighlightQuery);
    return (
      T(
        `scanElementSubtree: q='${this.searchHighlightQuery}' el=${t}x${n}@(${r},${o}) n=${l.length} [${l
          .slice(0, 10)
          .map((c) => `${c.row}:${c.col}`)
          .join(",")}${l.length > 10 ? ",\u2026" : ""}]`,
      ),
      l
    );
  }
  setSearchPositions(e) {
    ((this.searchPositions = e), this.scheduleRender());
  }
  setSelectionBgColor(e) {
    let t = zke("\x00", e, "background"),
      n = t.indexOf("\x00");
    if (n <= 0 || n === t.length - 1) {
      this.stylePool.setSelectionBg(null);
      return;
    }
    this.stylePool.setSelectionBg({
      type: "ansi",
      code: t.slice(0, n),
      endCode: t.slice(n + 1),
    });
  }
  moveSelectionFocus(e) {
    if (!this.altScreenActive) return;
    let { focus: t } = this.selection;
    if (!t) return;
    let { width: n, height: r } = this.frontFrame.screen,
      o = n - 1,
      s = r - 1,
      { col: i, row: a } = t;
    switch (e) {
      case "left":
        if (i > 0) i--;
        else if (a > 0) ((i = o), a--);
        break;
      case "right":
        if (i < o) i++;
        else if (a < s) ((i = 0), a++);
        break;
      case "up":
        if (a > 0) a--;
        break;
      case "down":
        if (a < s) a++;
        break;
      case "lineStart":
        i = 0;
        break;
      case "lineEnd":
        i = o;
        break;
    }
    if (i === t.col && a === t.row) return;
    (pGi(this.selection, i, a), this.notifySelectionChange());
  }
  hasTextSelection() {
    return Hne(this.selection);
  }
  subscribeToSelectionChange(e) {
    return (this.selectionListeners.add(e), () => this.selectionListeners.delete(e));
  }
  notifySelectionChange() {
    this.scheduleRender();
    for (let e of this.selectionListeners) e();
  }
  dispatchClick(e, t) {
    if (!this.altScreenActive) return false;
    let n = pGe(this.frontFrame.screen, e, t),
      r = this.getHyperlinkAt(e, t);
    return JGi(this.rootNode, e, t, n, r);
  }
  dispatchHover(e, t) {
    if (!this.altScreenActive) return;
    let n = pGe(this.frontFrame.screen, e, t);
    QGi(this.rootNode, e, t, this.hoveredNodes, n);
  }
  dispatchPasteEvent(e) {
    let t = this.focusManager.activeElement ?? this.rootNode;
    f8.dispatchDiscrete(t, new J_e(e));
  }
  dispatchWheelEvent = (e) => {
    let t = e.col != null && e.row != null ? FBt(this.rootNode, e.col - 1, e.row - 1) : null,
      r = (t && hWd(t) ? t : null) ?? this.focusManager.activeElement ?? this.rootNode,
      o = e.name === "wheeldown" ? 1 : -1;
    f8.dispatchContinuous(
      r,
      new aJr(o, {
        ctrl: e.ctrl,
        shift: e.shift,
        meta: e.meta || e.option,
      }),
    );
  };
  dispatchKeyboardEvent(e) {
    let n = this.focusManager.activeElement ?? this.rootNode,
      r = new sat(e);
    if ((f8.dispatchDiscrete(n, r), !r.defaultPrevented && e.name === "tab" && !e.ctrl && !e.meta))
      if (e.shift) this.focusManager.focusPrevious(this.rootNode);
      else this.focusManager.focusNext(this.rootNode);
  }
  getHyperlinkAt(e, t) {
    if (!this.altScreenActive) return;
    let n = this.frontFrame.screen,
      r = Fj(n, e, t),
      o = r?.hyperlink;
    if (!o && r?.width === 2 && e > 0) o = Fj(n, e - 1, t)?.hyperlink;
    return o ?? cGi(n, e, t);
  }
  onHyperlinkClick;
  openHyperlink(e) {
    this.onHyperlinkClick?.(e);
  }
  handleMultiClick(e, t, n) {
    if (!this.altScreenActive) return;
    let r = this.frontFrame.screen;
    if ((pLn(this.selection, e, t), n === 2)) lGi(this.selection, r, e, t);
    else uGi(this.selection, r, t);
    if (!this.selection.focus) this.selection.focus = this.selection.anchor;
    this.notifySelectionChange();
  }
  handleSelectionDrag(e, t) {
    if (!this.altScreenActive) return;
    let n = this.selection;
    if (n.anchorSpan) dGi(n, this.frontFrame.screen, e, t);
    else iGi(n, e, t);
    this.notifySelectionChange();
  }
  stdinListeners = [];
  wasRawMode = false;
  suspendStdin() {
    let e = this.options.stdin;
    if (!e.isTTY) return;
    let t = e.listeners("readable");
    (T(
      `[stdin] suspendStdin: removing ${t.length} readable listener(s), wasRawMode=${e.isRaw ?? false}`,
    ),
      t.forEach((r) => {
        (this.stdinListeners.push({
          event: "readable",
          listener: r,
        }),
          e.removeListener("readable", r));
      }));
    let n = e;
    if (n.isRaw) (L0(n, false), (this.wasRawMode = true));
  }
  resumeStdin() {
    let e = this.options.stdin;
    if (!e.isTTY) return;
    if (this.stdinListeners.length === 0 && !this.wasRawMode)
      T(
        "[stdin] resumeStdin: called with no stored listeners and wasRawMode=false (possible desync)",
        {
          level: "warn",
        },
      );
    if (
      (T(
        `[stdin] resumeStdin: re-attaching ${this.stdinListeners.length} listener(s), wasRawMode=${this.wasRawMode}`,
      ),
      this.stdinListeners.forEach(({ event: t, listener: n }) => {
        e.addListener(t, n);
      }),
      (this.stdinListeners = []),
      this.wasRawMode)
    )
      (L0(e, true), (this.wasRawMode = false));
  }
  writeRaw(e) {
    this.options.stdout.write(e);
  }
  setCursorDeclaration = (e, t) => {
    if (e === null && t !== void 0 && this.cursorDeclaration?.node !== t) return;
    this.cursorDeclaration = e;
  };
  render(e) {
    ((this.renderCalled = true), (this.currentNode = e));
    let t = xLn.jsx(yLn, {
      stdin: this.options.stdin,
      stdout: this.options.stdout,
      stderr: this.options.stderr,
      exitOnCtrlC: this.options.exitOnCtrlC,
      onExit: this.unmount,
      terminalColumns: this.terminalColumns,
      terminalRows: this.terminalRows,
      selection: this.selection,
      onSelectionChange: this.notifySelectionChange,
      onClickAt: this.dispatchClick,
      onHoverAt: this.dispatchHover,
      getHyperlinkAt: this.getHyperlinkAt,
      onOpenHyperlink: this.openHyperlink,
      onMultiClick: this.handleMultiClick,
      onSelectionDrag: this.handleSelectionDrag,
      onStdinResume: this.reassertTerminalModes,
      getMouseMode: this.getMouseMode,
      onRawModeEnter: this.ensureInteractive,
      onCursorDeclaration: this.setCursorDeclaration,
      dispatchKeyboardEvent: this.dispatchKeyboardEvent,
      dispatchPasteEvent: this.dispatchPasteEvent,
      dispatchWheelEvent: this.dispatchWheelEvent,
      focusManager: this.focusManager,
      rootNode: this.rootNode,
      isScreenReaderEnabled: this.isScreenReaderEnabled,
      children: xLn.jsx(yRn.Provider, {
        value: this.isScreenReaderEnabled,
        children: xLn.jsx(CLn, {
          value: this.writeRaw,
          children: e,
        }),
      }),
    });
    (Ene.updateContainerSync(t, this.container, null, W_e), Ene.flushSyncWork());
  }
  unmount(e) {
    if (this.isUnmounted) return;
    if (
      ((this.isExiting = true),
      this.onRender(),
      this.unsubscribeExit(),
      typeof this.restoreConsole === "function")
    )
      this.restoreConsole();
    if (
      (this.restoreStderr?.(), this.unsubscribeTTYHandlers?.(), this.renderCalled && !this.isPaused)
    ) {
      let t = this.log.renderPreviousOutput_DEPRECATED(this.frontFrame);
      O7r(this.terminal, dJr(t), this.skipSyncMarkers(), this.options.stdout.rows || 24);
    }
    if (this.options.stdout.isTTY)
      try {
        if (this.altScreenActive) (h8.writeSync(1, H1()), (this.altScreenActive = false));
        (h8.writeSync(1, kce), this.drainStdin(), wLn());
      } catch (t) {
        if (gd(t))
          T(`unmount terminal cleanup writeSync failed: ${t}`, {
            level: "error",
          });
        else throw t;
      }
    if (((this.isUnmounted = true), this.scheduleRender.cancel?.(), this.drainTimer !== null))
      (clearTimeout(this.drainTimer), (this.drainTimer = null));
    if (
      (Ene.updateContainerSync(null, this.container, null, W_e),
      Ene.flushSyncWork(),
      Cu.delete(this.options.stdout),
      this.rootNode.yogaNode?.free(),
      (this.rootNode.yogaNode = void 0),
      e instanceof Error)
    )
      this.rejectExitPromise(e);
    else this.resolveExitPromise();
  }
  async waitUntilExit() {
    return (
      (this.exitPromise ||= new Promise((e, t) => {
        ((this.resolveExitPromise = e), (this.rejectExitPromise = t));
      })),
      this.exitPromise
    );
  }
  resetLineCount() {
    if (this.options.stdout.isTTY)
      ((this.backFrame = this.frontFrame),
        (this.frontFrame = u0e(
          this.frontFrame.viewport.height,
          this.frontFrame.viewport.width,
          this.stylePool,
          this.charPool,
          this.hyperlinkPool,
        )),
        this.log.reset(),
        (this.displayCursor = null));
  }
  maybeResetPools(e) {
    let t = e - this.lastPoolResetTime;
    if (t <= 30000) return;
    if (t <= 300000 && !this.stylePool.needsCompaction(this.lastStyleLiveSize)) return;
    ((this.lastPoolResetTime = e), this.resetPools());
  }
  resetPools() {
    let e = this.hyperlinkPool.size > K3i,
      t = this.stylePool.needsCompaction(this.lastStyleLiveSize);
    if (!e && !t) return;
    if (e) this.hyperlinkPool = new PBt();
    if (
      (J3i(
        this.frontFrame.screen,
        this.charPool,
        this.hyperlinkPool,
        t ? this.stylePool.compact() : void 0,
      ),
      t)
    )
      this.lastStyleLiveSize = this.stylePool.size;
    ((this.backFrame.screen.hyperlinkPool = this.hyperlinkPool),
      (this.fullRepaintSentinelScreen = void 0));
  }
  patchConsole() {
    let e = console,
      t = {},
      n = (...s) => T(`console.log: ${JBt.format(...s)}`),
      r =
        (s) =>
        (...i) =>
          ke(Rh(Error(`console.${s}: ${JBt.format(...i)}`), `console.${s} failed`)),
      o =
        (s) =>
        (...i) =>
          T(`console.${s}: ${JBt.format(...i)}`, {
            level: "warn",
          });
    for (let s of mWd) ((t[s] = e[s]), (e[s] = n));
    for (let s of gWd)
      ((t[s] = e[s]),
        (e[s] =
          s === "error"
            ? (...i) =>
                T(`console.error: ${JBt.format(...i)}`, {
                  level: "error",
                })
            : o(s)));
    return (
      (t.assert = e.assert),
      (e.assert = (s, ...i) => {
        if (!s) r("assert")(...i);
      }),
      () => Object.assign(e, t)
    );
  }
  patchStderr() {
    let e = process.stderr,
      t = e.write,
      n = false,
      r = (o, s, i) => {
        let a = typeof s === "function" ? s : i;
        if (n) {
          let l = typeof s === "string" ? s : void 0;
          return t.call(e, o, l, a);
        }
        n = true;
        try {
          let l = typeof o === "string" ? o : Buffer.from(o).toString("utf8");
          if (
            (T(`[stderr] ${l}`, {
              level: "warn",
            }),
            this.altScreenActive && !this.isUnmounted && !this.isPaused)
          )
            ((this.prevFrameContaminated = true), this.scheduleRender());
        } finally {
          ((n = false), a?.());
        }
        return true;
      };
    return (
      (e.write = r),
      () => {
        if (e.write === r) e.write = t;
      }
    );
  }
}
function dat(e = process.stdin) {
  if (!e.isTTY) return;
  let t = [];
  try {
    let s;
    while ((s = e.read()) !== null) t.push(typeof s === "string" ? Buffer.from(s, "utf8") : s);
  } catch {}
  let n = e,
    r = n.isRaw === true,
    o = -1;
  try {
    if (!r) n.setRawMode?.(true);
    o = h8.openSync("/dev/tty", h8.constants.O_RDONLY | h8.constants.O_NONBLOCK);
    let s = Buffer.alloc(1024);
    for (let i = 0; i < 64; i++) {
      let a = h8.readSync(o, s, 0, s.length, null);
      if (a <= 0) break;
      t.push(Buffer.from(s.subarray(0, a)));
    }
  } catch {
  } finally {
    if (o >= 0)
      try {
        h8.closeSync(o);
      } catch {}
    if (!r)
      try {
        n.setRawMode?.(false);
      } catch {}
  }
  return t.length ? Buffer.concat(t) : void 0;
}
function hWd(e) {
  let t = e;
  while (t) {
    if (t._eventHandlers?.onWheel) return true;
    t = t.parentNode;
  }
  return false;
}
var h8,
  qWi,
  JBt,
  xLn,
  kJr = 8192,
  lWd,
  cWd,
  uWd,
  dWd,
  GWi = "\x1B]104;255\x07",
  pWd = 2000,
  fWd = 2000,
  mWd,
  gWd;
