// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module rJt
// matched 2.1.88 source: src/ink/render-node-to-output.ts
// class=new  jaccard=0.0193  score=0.0773  fileCov=0.0251
// note: nearest: src/ink/render-node-to-output.ts (0.0193); dir inferred from dep-graph -> components; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module rJt]
Por = R(lt(), 1), n2 = R(rt(), 1), nJt = R(se(), 1), $ql = n2.createContext(null), Oql = n2.createContext(null), Nql = n2.createContext(null), Bql = n2.createContext(null);
class y2o {
  out;
  cols;
  rows;
  buf = "";
  lastFrame = "";
  syncOpen = false;
  suspended = false;
  restored = false;
  tailSlack = 0;
  contentOverlayRows = 0;
  overlayRatchet = 0;
  onScreen = [];
  replayPending = false;
  committedTop = 0;
  nativeHistory = [];
  pumpCursor = -1;
  _backfillNeeded = false;
  _gapRange = null;
  _suspendedCols = 0;
  _suspendedRows = 0;
  contentHeight;
  constructor(e, t, n) {
    this.out = e;
    this.cols = t;
    this.rows = n;
    this.contentHeight = Math.max(2, n - HAt);
  }
  setup() {
    this.resetTransientState(), this.buf += _W, this.buf += Ff(`
`, this.rows - this.contentHeight), this.buf += B7(1, Math.max(2, this.contentHeight));
    for (let e = this.contentHeight; e < this.rows; e++) this.clearLine(e);
    this.commitImmediate();
  }
  suspend() {
    this.suspended = true, this._suspendedCols = this.cols, this._suspendedRows = this.rows, this.buf += c8, this.commitImmediate();
  }
  resume(e, t) {
    this.suspended = false;
    let n = e !== this._suspendedCols || t !== this._suspendedRows;
    if (this.cols = e, this.rows = t, this.contentHeight = Math.max(2, t - HAt), this.buf += _W, this.buf += B7(1, this.contentHeight), this.buf += dH, n) this.buf += Jx + Ait + dH, this.resetTransientState(), this.replayPending = true, this.pumpCursor = this.nativeHistory.length > 0 ? 0 : -1, this.lastFrame = "";
    this.commitImmediate();
  }
  restore() {
    if (this.restored) return;
    this.restored = true, this.buf += oJt;
    for (let e = this.contentHeight; e < this.rows; e++) this.clearLine(e);
    this.buf += c8, this.buf += hW(this.contentHeight + 1, 1), this.buf += A1, this.commitImmediate();
  }
  syncViewport(e, t) {
    if (this.suspended) return;
    if (this.pumpCursor >= 0) return;
    if (!this.syncOpen && LU()) this.buf += hBt, this.syncOpen = true;
    if (this.restoreUnderContentOverlay(), this.replayPending) this.replayPending = false, this.committedTop = Math.min(e.scrollTop, e.transcriptEnd);
    let n = Math.min(e.scrollTop, e.transcriptEnd),
      r = Math.max(0, n - this.committedTop);
    if (r > 0) {
      let c = Math.min(r, this.onScreen.length);
      if (c > 0) {
        this.buf += hW(this.contentHeight, 1), this.buf += `
`.repeat(c);
        for (let d = 0; d < c; d++) this.nativeHistory.push(this.onScreen.shift());
        if (this.nativeHistory.length > AAt) this.nativeHistory.splice(0, this.nativeHistory.length - AAt);
      }
      let u = this.committedTop + c;
      if (this.committedTop = n, u < n) this._gapRange = {
        from: u,
        to: n
      };
      if (this.nativeHistory.length === 0 && n > 0) this._backfillNeeded = true;
    }
    if (t !== this.contentHeight) this.contentHeight = t, this.buf += B7(1, Math.max(2, t));
    let o = Math.max(0, this.committedTop - e.scrollTop),
      s = this.contentHeight,
      i = Math.min(e.lines.length, s),
      a = Math.max(0, i - o),
      l = Math.max(0, s - this.onScreen.length);
    if (this.onScreen.length > s) this.onScreen.length = s;
    while (this.onScreen.length < s) this.onScreen.push("");
    for (let c = 0; c < s; c++) {
      let u = c < a ? e.lines[o + c] : "";
      if (c < s - l && this.onScreen[c] === u) continue;
      this.buf += hW(c + 1, 1) + u + oJt + h2o, this.onScreen[c] = u;
    }
    this.tailSlack = Math.max(0, s - a);
  }
  draw(e) {
    if (this.suspended) return;
    let t = this.syncOpen;
    if (!this.syncOpen && LU()) this.buf += hBt;
    let n = this.buf.length;
    if (this.buf += _W, this.restoreUnderContentOverlay(), e.contentHeight !== this.contentHeight) this.contentHeight = e.contentHeight, this.buf += B7(1, Math.max(2, e.contentHeight));
    for (let s = this.contentHeight; s < this.rows; s++) this.clearLine(s);
    if (this.tailSlack > 0) {
      let s = this.contentHeight - this.tailSlack;
      for (let i = s; i < this.contentHeight; i++) this.clearLine(i);
    }
    this.writeOverlayLines(e.bottomTop, e.bottomLines);
    let r = e.overlayLines.length;
    if (r > 0) {
      this.overlayRatchet = Math.max(this.overlayRatchet, r);
      let s = Math.max(0, this.rows - this.overlayRatchet);
      this.writeOverlayLines(s, e.overlayLines);
      for (let i = s + r; i < this.rows; i++) this.clearLine(i);
      this.contentOverlayRows = Math.max(0, this.contentHeight - Math.max(0, s - 1));
    } else this.overlayRatchet = 0, this.contentOverlayRows = 0;
    let o = this.buf.slice(n);
    if (!t && o === this.lastFrame) {
      this.buf = "", this.syncOpen = false;
      return;
    }
    if (this.lastFrame = o, LU()) this.buf += Oit;
    this.syncOpen = false, this.commitImmediate();
  }
  computeLayout(e, t) {
    let n = Math.max(HAt, e.length);
    return {
      contentHeight: Math.max(2, this.rows - n),
      bottomTop: this.rows - n,
      bottomLines: e,
      overlayLines: t
    };
  }
  handleResize(e, t) {
    if (e === this.cols && t === this.rows) return "noop";
    if (this.suspended) return this.cols = e, this.rows = t, "noop";
    let n = e !== this.cols,
      r = this.rows;
    this.cols = e, this.rows = t;
    let o = Math.max(2, t - HAt);
    if (this.contentHeight = o, n || t < r) return this.buf += c8 + Jx + Ait + dH, this.buf += B7(1, Math.max(2, o)), this.resetTransientState(), this.replayPending = true, this.pumpCursor = this.nativeHistory.length > 0 ? 0 : -1, this.lastFrame = "", this.commitImmediate(), "replay";
    return this.buf += B7(1, Math.max(2, o)), this.lastFrame = "", this.commitImmediate(), "adjust";
  }
  tickPump() {
    if (this.pumpCursor < 0) return false;
    let e = this.nativeHistory;
    this.buf += B7(1, 2);
    let t = Math.min(this.pumpCursor + D3f, e.length);
    for (; this.pumpCursor < t; this.pumpCursor++) this.buf += hW(1, 1) + e[this.pumpCursor] + oJt + h2o, this.buf += hW(2, 1) + `
`;
    if (this.buf += B7(1, Math.max(2, this.contentHeight)), this.lastFrame = "", this.commitImmediate(), this.pumpCursor >= e.length) this.pumpCursor = -1;
    return this.pumpCursor >= 0;
  }
  consumeBackfillNeeded() {
    if (!this._backfillNeeded) return false;
    return this._backfillNeeded = false, true;
  }
  consumeGapRange() {
    let e = this._gapRange;
    return this._gapRange = null, e;
  }
  primeBackfill(e) {
    if (e.length === 0) return;
    let t = this.nativeHistory.length;
    for (let n of e) this.nativeHistory.push(n);
    if (this.nativeHistory.length > AAt) {
      let n = this.nativeHistory.length - AAt;
      this.nativeHistory.splice(0, n), this.pumpCursor = Math.max(0, t - n);
    } else this.pumpCursor = t;
    if (this.replayPending = true, t > 0) this.onScreen.length = 0;
  }
  switchTranscript() {
    this.buf += c8 + Jx + Ait, this.buf += dH, this.buf += B7(1, Math.max(2, this.contentHeight)), this.resetTransientState(), this.nativeHistory.length = 0, this.pumpCursor = -1, this.replayPending = true, this.lastFrame = "", this.commitImmediate();
  }
  restoreUnderContentOverlay() {
    let e = this.contentOverlayRows;
    if (e === 0) return;
    this.contentOverlayRows = 0;
    let t = this.contentHeight,
      n = this.onScreen.length;
    for (let r = 0; r < e; r++) {
      let o = t - 1 - r;
      if (o < 0) break;
      this.buf += hW(o + 1, 1) + Oke;
      let s = n - 1 - r;
      if (s >= 0) this.buf += this.onScreen[s] + oJt;
    }
  }
  resetTransientState() {
    this.tailSlack = 0, this.contentOverlayRows = 0, this.overlayRatchet = 0, this.onScreen.length = 0, this.committedTop = 0;
  }
  clearLine(e) {
    this.buf += hW(e + 1, 1) + Oke;
  }
  writeOverlayLines(e, t) {
    for (let n = 0; n < t.length; n++) this.buf += hW(e + n + 1, 1) + t[n] + oJt + h2o;
  }
  commitImmediate() {
    if (this.buf.length === 0) return;
    this.out.write(this.buf), this.buf = "";
  }
  _onScreen() {
    return this.onScreen;
  }
  _committedTop() {
    return this.committedTop;
  }
  _pumpCursor() {
    return this.pumpCursor;
  }
  _nativeHistory() {
    return this.nativeHistory;
  }
  _commitForTest() {
    this.commitImmediate();
  }
  _transient() {
    return {
      tailSlack: this.tailSlack,
      overlayRows: this.contentOverlayRows
    };
  }
}
var oJt = "\x1B[0m",
  h2o = "\x1B[K",
  D3f = 100,
  AAt = 10000 /* 1e4 */,
  HAt = 4;