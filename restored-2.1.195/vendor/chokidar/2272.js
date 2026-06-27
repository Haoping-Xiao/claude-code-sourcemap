// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Ece
// matched 2.1.88 source: src/services/analytics/firstPartyEventLoggingExporter.ts
// class=vendor  jaccard=0.0123  score=1  fileCov=0.0123
// note: identified by fingerprint: chokidar; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Ece] deps: readdirp/esm/index.js, chokidar/esm/handler.js
zBi = require("fs"), M0n = require("fs/promises"), KBi = require("events"), Dg = R(require("path")); /*! chokidar - MIT License (c) 2012 Paul Miller (paulmillr.com) */
lBd = /\\/g, jBi = /\/\//, cBd = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/, uBd = /^\.[/\\]/;
gBd = Object.freeze(new Set());
$0n = class $0n extends KBi.EventEmitter {
  constructor(e = {}) {
    super();
    this.closed = false, this._closers = new Map(), this._ignoredPaths = new Set(), this._throttled = new Map(), this._streams = new Set(), this._symlinkPaths = new Map(), this._watched = new Map(), this._pendingWrites = new Map(), this._pendingUnlinks = new Map(), this._readyCount = 0, this._readyEmitted = false;
    let t = e.awaitWriteFinish,
      n = {
        stabilityThreshold: 2000,
        pollInterval: 100
      },
      r = {
        persistent: true,
        ignoreInitial: false,
        ignorePermissionErrors: false,
        interval: 100,
        binaryInterval: 300,
        followSymlinks: true,
        usePolling: false,
        atomic: true,
        ...e,
        ignored: e.ignored ? P0n(e.ignored) : P0n([]),
        awaitWriteFinish: t === true ? n : typeof t === "object" ? {
          ...n,
          ...t
        } : false
      };
    if (BBi) r.usePolling = true;
    if (r.atomic === void 0) r.atomic = !r.usePolling;
    let o = process.env.CHOKIDAR_USEPOLLING;
    if (o !== void 0) {
      let a = o.toLowerCase();
      if (a === "false" || a === "0") r.usePolling = false;else if (a === "true" || a === "1") r.usePolling = true;else r.usePolling = !!a;
    }
    let s = process.env.CHOKIDAR_INTERVAL;
    if (s) r.interval = Number.parseInt(s, 10);
    let i = 0;
    this._emitReady = () => {
      if (i++, i >= this._readyCount) this._emitReady = L0n, this._readyEmitted = true, process.nextTick(() => this.emit(Lv.READY));
    }, this._emitRaw = (...a) => this.emit(Lv.RAW, ...a), this._boundRemove = this._remove.bind(this), this.options = r, this._nodeFsHandler = new EYr(this), Object.freeze(r);
  }
  _addIgnoredPath(e) {
    if (HYr(e)) {
      for (let t of this._ignoredPaths) if (HYr(t) && t.path === e.path && t.recursive === e.recursive) return;
    }
    this._ignoredPaths.add(e);
  }
  _removeIgnoredPath(e) {
    if (this._ignoredPaths.delete(e), typeof e === "string") {
      for (let t of this._ignoredPaths) if (HYr(t) && t.path === e) this._ignoredPaths.delete(t);
    }
  }
  add(e, t, n) {
    let {
      cwd: r
    } = this.options;
    this.closed = false, this._closePromise = void 0;
    let o = WBi(e);
    if (r) o = o.map(s => mBd(s, r));
    if (o.forEach(s => {
      this._removeIgnoredPath(s);
    }), this._userIgnored = void 0, !this._readyCount) this._readyCount = 0;
    return this._readyCount += o.length, Promise.all(o.map(async s => {
      let i = await this._nodeFsHandler._addToNodeFs(s, !n, void 0, 0, t);
      if (i) this._emitReady();
      return i;
    })).then(s => {
      if (this.closed) return;
      s.forEach(i => {
        if (i) this.add(Dg.dirname(i), Dg.basename(t || i));
      });
    }), this;
  }
  unwatch(e) {
    if (this.closed) return this;
    let t = WBi(e),
      {
        cwd: n
      } = this.options;
    return t.forEach(r => {
      if (!Dg.isAbsolute(r) && !this._closers.has(r)) {
        if (n) r = Dg.join(n, r);
        r = Dg.resolve(r);
      }
      if (this._closePath(r), this._addIgnoredPath(r), this._watched.has(r)) this._addIgnoredPath({
        path: r,
        recursive: true
      });
      this._userIgnored = void 0;
    }), this;
  }
  close() {
    if (this._closePromise) return this._closePromise;
    this.closed = true, this.removeAllListeners();
    let e = [];
    return this._closers.forEach(t => t.forEach(n => {
      let r = n();
      if (r instanceof Promise) e.push(r);
    })), this._streams.forEach(t => t.destroy()), this._userIgnored = void 0, this._readyCount = 0, this._readyEmitted = false, this._watched.forEach(t => t.dispose()), this._closers.clear(), this._watched.clear(), this._streams.clear(), this._symlinkPaths.clear(), this._throttled.clear(), this._closePromise = e.length ? Promise.all(e).then(() => {
      return;
    }) : Promise.resolve(), this._closePromise;
  }
  getWatched() {
    let e = {};
    return this._watched.forEach((t, n) => {
      let o = (this.options.cwd ? Dg.relative(this.options.cwd, n) : n) || YBi;
      e[o] = t.getChildren().sort();
    }), e;
  }
  emitWithAll(e, t) {
    if (this.emit(e, ...t), e !== Lv.ERROR) this.emit(Lv.ALL, e, ...t);
  }
  async _emit(e, t, n) {
    if (this.closed) return;
    let r = this.options;
    if (SYr) t = Dg.normalize(t);
    if (r.cwd) t = Dg.relative(r.cwd, t);
    let o = [t];
    if (n != null) o.push(n);
    let s = r.awaitWriteFinish,
      i;
    if (s && (i = this._pendingWrites.get(t))) return i.lastChange = new Date(), this;
    if (r.atomic) {
      if (e === Lv.UNLINK) return this._pendingUnlinks.set(t, [e, ...o]), setTimeout(() => {
        this._pendingUnlinks.forEach((a, l) => {
          this.emit(...a), this.emit(Lv.ALL, ...a), this._pendingUnlinks.delete(l);
        });
      }, typeof r.atomic === "number" ? r.atomic : 100), this;
      if (e === Lv.ADD && this._pendingUnlinks.has(t)) e = Lv.CHANGE, this._pendingUnlinks.delete(t);
    }
    if (s && (e === Lv.ADD || e === Lv.CHANGE) && this._readyEmitted) {
      let a = (l, c) => {
        if (l) e = Lv.ERROR, o[0] = l, this.emitWithAll(e, o);else if (c) {
          if (o.length > 1) o[1] = c;else o.push(c);
          this.emitWithAll(e, o);
        }
      };
      return this._awaitWriteFinish(t, s.stabilityThreshold, e, a), this;
    }
    if (e === Lv.CHANGE) {
      if (!this._throttle(Lv.CHANGE, t, 50)) return this;
    }
    if (r.alwaysStat && n === void 0 && (e === Lv.ADD || e === Lv.ADD_DIR || e === Lv.CHANGE)) {
      let a = r.cwd ? Dg.join(r.cwd, t) : t,
        l;
      try {
        l = await M0n.stat(a);
      } catch (c) {}
      if (!l || this.closed) return;
      o.push(l);
    }
    return this.emitWithAll(e, o), this;
  }
  _handleError(e) {
    let t = e && e.code;
    if (e && t !== "ENOENT" && t !== "ENOTDIR" && (!this.options.ignorePermissionErrors || t !== "EPERM" && t !== "EACCES")) this.emit(Lv.ERROR, e);
    return e || this.closed;
  }
  _throttle(e, t, n) {
    if (!this._throttled.has(e)) this._throttled.set(e, new Map());
    let r = this._throttled.get(e);
    if (!r) throw Error("invalid throttle");
    let o = r.get(t);
    if (o) return o.count++, false;
    let s,
      i = () => {
        let l = r.get(t),
          c = l ? l.count : 0;
        if (r.delete(t), clearTimeout(s), l) clearTimeout(l.timeoutObject);
        return c;
      };
    s = setTimeout(i, n);
    let a = {
      timeoutObject: s,
      clear: i,
      count: 0
    };
    return r.set(t, a), a;
  }
  _incrReadyCount() {
    return this._readyCount++;
  }
  _awaitWriteFinish(e, t, n, r) {
    let o = this.options.awaitWriteFinish;
    if (typeof o !== "object") return;
    let s = o.pollInterval,
      i,
      a = e;
    if (this.options.cwd && !Dg.isAbsolute(e)) a = Dg.join(this.options.cwd, e);
    let l = new Date(),
      c = this._pendingWrites;
    function u(d) {
      zBi.stat(a, (p, f) => {
        if (p || !c.has(e)) {
          if (p && p.code !== "ENOENT") r(p);
          return;
        }
        let m = Number(new Date());
        if (d && f.size !== d.size) c.get(e).lastChange = m;
        let g = c.get(e);
        if (m - g.lastChange >= t) c.delete(e), r(void 0, f);else i = setTimeout(u, s, f);
      });
    }
    if (!c.has(e)) c.set(e, {
      lastChange: l,
      cancelWait: () => (c.delete(e), clearTimeout(i), n)
    }), i = setTimeout(u, s);
  }
  _isIgnored(e, t) {
    if (this.options.atomic && cBd.test(e)) return true;
    if (!this._userIgnored) {
      let {
          cwd: n
        } = this.options,
        o = (this.options.ignored || []).map(VBi(n)),
        i = [...[...this._ignoredPaths].map(VBi(n)), ...o];
      this._userIgnored = fBd(i, void 0);
    }
    return this._userIgnored(e, t);
  }
  _isntIgnored(e, t) {
    return !this._isIgnored(e, t);
  }
  _getWatchHelpers(e) {
    return new TYr(e, this.options.followSymlinks, this);
  }
  _getWatchedDir(e) {
    let t = Dg.resolve(e);
    if (!this._watched.has(t)) this._watched.set(t, new JBi(t, this._boundRemove));
    return this._watched.get(t);
  }
  _hasReadPermissions(e) {
    if (this.options.ignorePermissionErrors) return true;
    return Boolean(Number(e.mode) & 256);
  }
  _remove(e, t, n) {
    let r = Dg.join(e, t),
      o = Dg.resolve(r);
    if (n = n != null ? n : this._watched.has(r) || this._watched.has(o), !this._throttle("remove", r, 100)) return;
    if (!n && this._watched.size === 1) this.add(e, t, true);
    this._getWatchedDir(r).getChildren().forEach(d => this._remove(r, d));
    let a = this._getWatchedDir(e),
      l = a.has(t);
    if (a.remove(t), this._symlinkPaths.has(o)) this._symlinkPaths.delete(o);
    let c = r;
    if (this.options.cwd) c = Dg.relative(this.options.cwd, r);
    if (this.options.awaitWriteFinish && this._pendingWrites.has(c)) {
      if (this._pendingWrites.get(c).cancelWait() === Lv.ADD) return;
    }
    this._watched.delete(r), this._watched.delete(o);
    let u = n ? Lv.UNLINK_DIR : Lv.UNLINK;
    if (l && !this._isIgnored(r)) this._emit(u, r);
    this._closePath(r);
  }
  _closePath(e) {
    this._closeFile(e);
    let t = Dg.dirname(e);
    this._getWatchedDir(t).remove(Dg.basename(e));
  }
  _closeFile(e) {
    let t = this._closers.get(e);
    if (!t) return;
    t.forEach(n => n()), this._closers.delete(e);
  }
  _addPathCloser(e, t) {
    if (!t) return;
    let n = this._closers.get(e);
    if (!n) n = [], this._closers.set(e, n);
    n.push(t);
  }
  _readdirp(e, t) {
    if (this.closed) return;
    let n = {
        type: Lv.ALL,
        alwaysStat: true,
        lstat: true,
        ...t,
        depth: 0
      },
      r = PBi(e, n);
    return this._streams.add(r), r.once(NBi, () => {
      r = void 0;
    }), r.once(bYr, () => {
      if (r) this._streams.delete(r), r = void 0;
    }), r;
  }
};
S1 = {
  watch: QBi,
  FSWatcher: $0n
};
function uL(e, t) {
  let n = e,
    r = new Set(),
    o = t && sJe(t);
  return {
    getState: () => n,
    setState: s => {
      let i = n,
        a = s(i);
      if (Object.is(a, i)) return;
      n = a, o?.({
        newState: a,
        oldState: i
      });
      for (let l of r) l();
    },
    subscribe: s => {
      let i = sJe(s);
      return r.add(i), () => r.delete(i);
    }
  };
}