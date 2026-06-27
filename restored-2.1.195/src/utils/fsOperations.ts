// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module ys
// matched 2.1.88 source: src/utils/fsOperations.ts
// class=modified  jaccard=0.5286  score=0.8822  fileCov=0.5688
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: setBgExitCause, readAndClearBgExitCause
// [unwrapped __esm module ys] deps: @grpc/grpc-js/build/src/server.js, utils/errors.ts, utils/fsOperations.ts
((Lp = R(require("fs"))),
  (ov = require("fs/promises")),
  (NEr = require("os")),
  (s_ = R(require("path"))));
((BEr = {
  cwd() {
    return process.cwd();
  },
  existsSync(e) {
    using t = gy`fs.existsSync(${e})`;
    return Lp.existsSync(e);
  },
  async stat(e) {
    return ov.stat(e);
  },
  async lstat(e) {
    return ov.lstat(e);
  },
  async readdir(e) {
    return ov.readdir(e, {
      withFileTypes: !0,
    });
  },
  async unlink(e) {
    return ov.unlink(e);
  },
  async rmdir(e) {
    return ov.rmdir(e);
  },
  async rm(e, t) {
    return ov.rm(e, t);
  },
  async mkdir(e, t) {
    try {
      await ov.mkdir(e, {
        recursive: !0,
        ...t,
      });
    } catch (n) {
      if (on(n) !== "EEXIST") throw n;
    }
  },
  async readFile(e, t) {
    return ov.readFile(e, {
      encoding: t.encoding,
    });
  },
  async rename(e, t) {
    return ov.rename(e, t);
  },
  statSync(e) {
    using t = gy`fs.statSync(${e})`;
    return Lp.statSync(e);
  },
  lstatSync(e) {
    using t = gy`fs.lstatSync(${e})`;
    return Lp.lstatSync(e);
  },
  readFileSync(e, t) {
    using n = gy`fs.readFileSync(${e})`;
    return Lp.readFileSync(e, {
      encoding: t.encoding,
    });
  },
  readFileBytesSync(e) {
    using t = gy`fs.readFileBytesSync(${e})`;
    return Lp.readFileSync(e);
  },
  readSync(e, t) {
    using n = gy`fs.readSync(${e}, ${t.length} bytes)`;
    let r = void 0;
    try {
      r = Lp.openSync(e, "r");
      let o = Buffer.alloc(t.length),
        s = Lp.readSync(r, o, 0, t.length, 0);
      return {
        buffer: o,
        bytesRead: s,
      };
    } finally {
      if (r) Lp.closeSync(r);
    }
  },
  appendFileSync(e, t, n) {
    using r = gy`fs.appendFileSync(${e}, ${t.length} chars)`;
    if (n?.mode !== void 0)
      try {
        let o = Lp.openSync(e, "ax", n.mode);
        try {
          Lp.appendFileSync(o, t);
        } finally {
          Lp.closeSync(o);
        }
        return;
      } catch (o) {
        if (on(o) !== "EEXIST") throw o;
      }
    Lp.appendFileSync(e, t);
  },
  copyFileSync(e, t) {
    using n = gy`fs.copyFileSync(${e} ${Pin} ${t})`;
    Lp.copyFileSync(e, t);
  },
  unlinkSync(e) {
    using t = gy`fs.unlinkSync(${e})`;
    Lp.unlinkSync(e);
  },
  renameSync(e, t) {
    using n = gy`fs.renameSync(${e} ${Pin} ${t})`;
    Lp.renameSync(e, t);
  },
  linkSync(e, t) {
    using n = gy`fs.linkSync(${e} ${Pin} ${t})`;
    Lp.linkSync(e, t);
  },
  symlinkSync(e, t, n) {
    using r = gy`fs.symlinkSync(${e} ${Pin} ${t})`;
    Lp.symlinkSync(e, t, n);
  },
  readlinkSync(e) {
    using t = gy`fs.readlinkSync(${e})`;
    return Lp.readlinkSync(e);
  },
  realpathSync(e) {
    using t = gy`fs.realpathSync(${e})`;
    return o_(Lp.realpathSync(e));
  },
  mkdirSync(e, t) {
    using n = gy`fs.mkdirSync(${e})`;
    let r = {
      recursive: !0,
    };
    if (t?.mode !== void 0) r.mode = t.mode;
    try {
      Lp.mkdirSync(e, r);
    } catch (o) {
      if (on(o) !== "EEXIST") throw o;
    }
  },
  readdirSync(e) {
    using t = gy`fs.readdirSync(${e})`;
    return Lp.readdirSync(e, {
      withFileTypes: !0,
    });
  },
  readdirStringSync(e) {
    using t = gy`fs.readdirStringSync(${e})`;
    return Lp.readdirSync(e);
  },
  isDirEmptySync(e) {
    using t = gy`fs.isDirEmptySync(${e})`;
    return this.readdirSync(e).length === 0;
  },
  rmdirSync(e) {
    using t = gy`fs.rmdirSync(${e})`;
    Lp.rmdirSync(e);
  },
  rmSync(e, t) {
    using n = gy`fs.rmSync(${e})`;
    Lp.rmSync(e, t);
  },
  createWriteStream(e) {
    return Lp.createWriteStream(e);
  },
  async readFileBytes(e, t) {
    if (t === void 0) return ov.readFile(e);
    let n = await ov.open(e, "r");
    try {
      let { size: r } = await n.stat(),
        o = Math.min(r, t),
        s = Buffer.allocUnsafe(o),
        i = 0;
      while (i < o) {
        let { bytesRead: a } = await n.read(s, i, o - i, i);
        if (a === 0) break;
        i += a;
      }
      return i < o ? s.subarray(0, i) : s;
    } finally {
      await n.close();
    }
  },
}),
  (g7c = BEr));
function setBgExitCause(e, t) {
  let n = t ?? process.env.CLAUDE_JOB_DIR;
  if (!n) return;
  try {
    tae.writeFileSync(UEr.join(n, ois), e);
  } catch {}
}
function readAndClearBgExitCause(e) {
  let t = UEr.join(e, ois);
  try {
    let n = tae.lstatSync(t);
    if (!n.isFile() || n.size > 65536) {
      try {
        tae.rmSync(t, {
          recursive: !0,
          force: !0,
        });
      } catch {}
      return;
    }
    let r = tae.readFileSync(t, "utf8");
    return (tae.unlinkSync(t), r);
  } catch {
    return;
  }
}
var tae,
  UEr,
  ois = "exit-cause";
