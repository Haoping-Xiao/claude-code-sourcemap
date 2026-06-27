// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module kPo
// matched 2.1.88 source: src/utils/readFileInRange.ts
// class=modified  jaccard=0.5118  score=0.8598  fileCov=0.5584
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function readFileInRange(filePath, t = 0, maxLines, maxBytes, signal, options) {
  signal?.throwIfAborted();
  let i = options?.truncateOnByteLimit ?? false,
    stats = await RQn.stat(filePath);
  if (stats.isDirectory())
    throw Object.assign(Error(`EISDIR: illegal operation on a directory, read '${filePath}'`), {
      code: "EISDIR",
      errno: -21,
      syscall: "read",
      path: filePath,
    });
  if (stats.isFile() && stats.size < LTf) {
    if (!i && maxBytes !== void 0 && stats.size > maxBytes) throw new WKt(stats.size, maxBytes);
    let l = await RQn.readFile(filePath, {
      encoding: "utf8",
      signal: signal,
    });
    return DTf(l, stats.size, stats.mtimeMs, t, maxLines, i ? maxBytes : void 0);
  }
  return OTf(filePath, t, maxLines, maxBytes, i, signal);
}
function DTf(e, t, n, r, o, s) {
  let i = e.charCodeAt(0) === 65279;
  if (i) t -= 3;
  let a = i ? e.slice(1) : e;
  if (r === 0 && o === void 0 && s === void 0) {
    let y = a.includes("\r")
      ? a.replaceAll(
          `\r
`,
          `
`,
        )
      : a;
    if (y.endsWith("\r")) y = y.slice(0, -1);
    let b = 1,
      _ = y.indexOf(`
`);
    while (_ !== -1)
      (b++,
        (_ = y.indexOf(
          `
`,
          _ + 1,
        )));
    return {
      content: y,
      lineCount: b,
      totalLines: b,
      totalBytes: t,
      readBytes: Buffer.byteLength(y, "utf8"),
      mtimeMs: n,
      truncatedByBytes: false,
    };
  }
  let l = o !== void 0 ? r + o : 1 / 0,
    c = [],
    u = 0,
    d = 0,
    p,
    f = 0,
    m = false;
  function g(y) {
    if (s !== void 0) {
      let b = c.length > 0 ? 1 : 0,
        _ = f + b + Buffer.byteLength(y);
      if (_ > s) return ((m = true), false);
      f = _;
    }
    return (c.push(y), true);
  }
  while (
    (p = a.indexOf(
      `
`,
      d,
    )) !== -1
  ) {
    if (u >= r && u < l && !m) {
      let y = a.slice(d, p);
      if (y.endsWith("\r")) y = y.slice(0, -1);
      g(y);
    }
    (u++, (d = p + 1));
  }
  if (u >= r && u < l && !m) {
    let y = a.slice(d);
    if (y.endsWith("\r")) y = y.slice(0, -1);
    g(y);
  }
  u++;
  let h = c.join(`
`);
  return {
    content: h,
    lineCount: c.length,
    totalLines: u,
    totalBytes: t,
    readBytes: Buffer.byteLength(h, "utf8"),
    mtimeMs: n,
    truncatedByBytes: m,
  };
}
function PTf(e) {
  kQn.fstat(e, (t, n) => {
    this.resolveMtime(t ? 0 : n.mtimeMs);
  });
}
function MTf(e) {
  if (this.isFirstChunk) {
    if (((this.isFirstChunk = false), e.charCodeAt(0) === 65279)) e = e.slice(1);
  }
  if (
    ((this.totalBytesRead += Buffer.byteLength(e)),
    !this.truncateOnByteLimit && this.maxBytes !== void 0 && this.totalBytesRead > this.maxBytes)
  ) {
    this.stream.destroy(new WKt(this.totalBytesRead, this.maxBytes));
    return;
  }
  let t = this.partial.length > 0 ? this.partial + e : e;
  this.partial = "";
  let n = 0,
    r;
  while (
    (r = t.indexOf(
      `
`,
      n,
    )) !== -1
  ) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let o = t.slice(n, r);
      if (o.endsWith("\r")) o = o.slice(0, -1);
      if (this.truncateOnByteLimit && this.maxBytes !== void 0) {
        let s = this.selectedLines.length > 0 ? 1 : 0,
          i = this.selectedBytes + s + Buffer.byteLength(o);
        if (i > this.maxBytes)
          ((this.truncatedByBytes = true), (this.endLine = this.currentLineIndex));
        else ((this.selectedBytes = i), this.selectedLines.push(o));
      } else this.selectedLines.push(o);
    }
    (this.currentLineIndex++, (n = r + 1));
  }
  if (n < t.length) {
    if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine) {
      let o = t.slice(n);
      if (this.truncateOnByteLimit && this.maxBytes !== void 0) {
        let s = this.selectedLines.length > 0 ? 1 : 0;
        if (this.selectedBytes + s + Buffer.byteLength(o) > this.maxBytes) {
          ((this.truncatedByBytes = true), (this.endLine = this.currentLineIndex));
          return;
        }
      }
      this.partial = o;
    }
  }
}
function $Tf() {
  let e = this.partial;
  if (e.endsWith("\r")) e = e.slice(0, -1);
  if (this.currentLineIndex >= this.offset && this.currentLineIndex < this.endLine)
    if (this.truncateOnByteLimit && this.maxBytes !== void 0) {
      let r = this.selectedLines.length > 0 ? 1 : 0;
      if (this.selectedBytes + r + Buffer.byteLength(e) > this.maxBytes)
        this.truncatedByBytes = true;
      else this.selectedLines.push(e);
    } else this.selectedLines.push(e);
  this.currentLineIndex++;
  let t = this.selectedLines.join(`
`),
    n = this.truncatedByBytes;
  this.mtimeReady.then((r) => {
    this.resolve({
      content: t,
      lineCount: this.selectedLines.length,
      totalLines: this.currentLineIndex,
      totalBytes: this.totalBytesRead,
      readBytes: Buffer.byteLength(t, "utf8"),
      mtimeMs: r,
      truncatedByBytes: n,
    });
  });
}
function OTf(e, t, n, r, o, s) {
  return new Promise((i, a) => {
    let l = {
      stream: kQn.createReadStream(e, {
        encoding: "utf8",
        highWaterMark: 524288,
        ...(s
          ? {
              signal: s,
            }
          : void 0),
      }),
      offset: t,
      endLine: n !== void 0 ? t + n : 1 / 0,
      maxBytes: r,
      truncateOnByteLimit: o,
      resolve: i,
      totalBytesRead: 0,
      selectedBytes: 0,
      truncatedByBytes: false,
      currentLineIndex: 0,
      selectedLines: [],
      partial: "",
      isFirstChunk: true,
      resolveMtime: () => {},
      mtimeReady: null,
    };
    ((l.mtimeReady = new Promise((c) => {
      l.resolveMtime = c;
    })),
      l.stream.once("open", PTf.bind(l)),
      l.stream.on("data", MTf.bind(l)),
      l.stream.once("end", $Tf.bind(l)),
      l.stream.once("error", a));
  });
}
var kQn,
  RQn,
  LTf = 10485760,
  WKt;
