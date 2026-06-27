// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Hu
// matched 2.1.88 source: src/utils/file.ts
// class=modified  jaccard=0.2419  score=0.3572  fileCov=0.4285
// note: deminified; 4 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Hu] deps: Rm, Lo, ys, Is, sj, jS
((Vpn = require("os")), (MO = require("path")));
function rAs(e, t) {
  return `${e}\x00${t}`;
}
function net(e, t, n) {
  if (e === void 0) return;
  let r = rAs(e, t),
    o = vhe.get(r);
  if (o !== void 0) {
    let s = new Set(n);
    vhe.set(
      r,
      o.filter((i) => s.has(i)),
    );
    return;
  }
  if (vhe.size >= LPu) {
    let s = vhe.keys().next().value;
    if (s !== void 0) vhe.delete(s);
  }
  vhe.set(r, n);
}
function DPu(e, t) {
  if (e === void 0) return;
  let n = vhe.get(rAs(e, t)),
    r = `${e}\x00`;
  for (let o of vhe.keys()) if (o.startsWith(r)) vhe.delete(o);
  return n;
}
function ret(e, t) {
  let n = DPu(e.toolUseId, t);
  if (n !== void 0) return n;
  if (e.toolUseId)
    T(
      `takeApprovedPathsForWrite: no check-time stash for toolUseId=${e.toolUseId}; using fresh resolution`,
    );
  return i_(t);
}
function sCe(e, t) {
  let n = new Set(t);
  for (let r of i_(e))
    if (!n.has(r))
      throw new Uee(
        `Refusing to write ${e}: its parent-directory symlink resolution changed after permission was checked.`,
      );
}
async function ed(e) {
  try {
    return (await AG.stat(e), !0);
  } catch {
    return !1;
  }
}
function oet(e, { maxBytes: t }) {
  using n = gy`fs.readBoundedSync(${e}, max ${t} bytes)`;
  let r = Tf.openSync(e, "r");
  try {
    let o = [],
      s = 0,
      i = Buffer.alloc(8192);
    while (!0) {
      let a = Tf.readSync(r, i, 0, i.length, null);
      if (a === 0) return Buffer.concat(o).toString("utf8");
      if (((s += a), s > t))
        throw new mi(
          `refusing to read ${e}: content exceeds ${t} byte limit`,
          "readBoundedSync: content exceeds byte limit",
        );
      o.push(Buffer.from(i.subarray(0, a)));
    }
  } finally {
    Tf.closeSync(r);
  }
}
function Fee(e) {
  let t = qt();
  return Math.floor(t.statSync(e).mtimeMs);
}
async function FFe(e) {
  let t = await qt().stat(e);
  return Math.floor(t.mtimeMs);
}
function n0r() {
  return ut(process.env.CLAUDE_CODE_PERFORCE_MODE);
}
function tet(e) {
  let t = on(e);
  return t === "EINVAL" || t === "ENOTSUP" || t === "EPERM" || t === "ENOSYS";
}
function iet(e) {
  return n0r() && (e & 128) === 0;
}
function iCe(e, t) {
  let r = (zpn.get(e) ?? Promise.resolve()).then(t),
    o = r.then(
      () => {},
      () => {},
    );
  return (
    zpn.set(e, o),
    o.then(() => {
      if (zpn.get(e) === o) zpn.delete(e);
    }),
    r
  );
}
async function aCe(e, t, n, r) {
  let o = t;
  if (r === "CRLF")
    o = t.replaceAll(
      `\r
`,
      `
`,
    ).split(`
`).join(`\r
`);
  await r0r(e, o, {
    encoding: n,
  });
  let s = Buffer.byteLength(o, n),
    i = await qt().stat(e);
  if (i.size !== s)
    throw new mi(
      `Write verification failed: ${e} is ${i.size} bytes on disk, expected ${s}. The filesystem may have silently truncated the write (network drive / cloud sync).`,
      "writeTextContent: on-disk size mismatch after write",
    );
  return Math.floor(i.mtimeMs);
}
function detectFileEncoding(e) {
  try {
    let t = qt(),
      { resolvedPath: n } = jd(t, e);
    return Lpn(n);
  } catch (t) {
    if (Vo(t) || Qie(t))
      T(`detectFileEncoding failed for expected reason: ${on(t)}`, {
        level: "debug",
      });
    else ke(t);
    return "utf8";
  }
}
function oAs(e, t = "utf8") {
  try {
    let n = qt(),
      { resolvedPath: r } = jd(n, e),
      { buffer: o, bytesRead: s } = n.readSync(r, {
        length: 4096,
      }),
      i = o.toString(t, 0, s);
    return Dpn(i);
  } catch (n) {
    if (Vo(n) || Qie(n))
      T(`detectLineEndings failed for expected reason: ${on(n)}`, {
        level: "debug",
      });
    else ke(n);
    return "LF";
  }
}
function dY(e) {
  if (!e.includes("\t")) return e;
  return e.replace(/^\t+/gm, (t) => "  ".repeat(t.length));
}
function PPu(e) {
  let t = e ? ds(e) : void 0,
    n = t ? Wf.relative($t(), t) : void 0;
  return {
    absolutePath: t,
    relativePath: n,
  };
}
function kd(e) {
  let { relativePath: t } = PPu(e);
  if (t && !t.startsWith("..")) return t;
  let n = e0r.homedir();
  if (e.startsWith(n + Wf.sep)) return "~" + e.slice(n.length);
  return e;
}
function lCe(e) {
  let t = qt();
  try {
    let n = Wf.dirname(e),
      r = Wf.basename(e, Wf.extname(e)),
      i = t
        .readdirSync(n)
        .filter(
          (a) => Wf.basename(a.name, Wf.extname(a.name)) === r && Wf.join(n, a.name) !== e,
        )[0];
    if (i) return i.name;
    return;
  } catch (n) {
    if (!wn(n))
      T(`findSimilarFile failed for ${e}: ${n}`, {
        level: "error",
      });
    return;
  }
}
async function pY(e) {
  let t = $t(),
    n = Wf.dirname(t),
    r = e;
  try {
    let u = await AG.realpath(Wf.dirname(e));
    r = Wf.join(u, Wf.basename(e));
  } catch {}
  let o = n === Wf.sep ? Wf.sep : n + Wf.sep,
    i = Vt() === "windows" ? (u) => u.toLowerCase() : (u) => u,
    a = i(r);
  if (!a.startsWith(i(o)) || a.startsWith(i(t + Wf.sep)) || a === i(t)) return;
  let l = Wf.relative(n, r),
    c = Wf.join(t, l);
  try {
    return (await AG.stat(c), c);
  } catch {
    return;
  }
}
function Ypn({ content: e, startLine: t, tabAwareSeparator: n = !1 }) {
  if (!e) return "";
  let r =
      n &&
      (e.startsWith("\t") ||
        e.includes(`
	`))
        ? ":"
        : "\t",
    o = [],
    s = t,
    i = 0,
    a = e.indexOf(`
`);
  while (a !== -1)
    (o.push(nAs(e.slice(i, a), s++, r)),
      (i = a + 1),
      (a = e.indexOf(
        `
`,
        i,
      )));
  return (
    o.push(nAs(e.slice(i), s, r)),
    o.join(`
`)
  );
}
function nAs(e, t, n) {
  let r = e.endsWith("\r") ? e.slice(0, -1) : e;
  return `${t}${n}${r}`;
}
function sAs(e) {
  return e.match(/^\s*\d+[\u2192\t:](.*)$/)?.[1] ?? e;
}
function iAs(e) {
  try {
    return qt().isDirEmptySync(e);
  } catch (t) {
    return wn(t);
  }
}
function aAs(e, t) {
  if (e instanceof Error && !(e instanceof Uee) && e !== t)
    try {
      if (e.cause === void 0)
        ((e.message += ` (atomic write failed first: ${be(t)})`),
          Object.defineProperty(e, "cause", {
            value: t,
            writable: !0,
            configurable: !0,
            enumerable: !1,
          }));
    } catch {}
  throw e;
}
function writeFileSyncAndFlush_DEPRECATED(
  e,
  t,
  n = {
    encoding: "utf-8",
  },
) {
  let r = qt(),
    o = n.allowSymlink ? 0 : Tf.constants.O_NOFOLLOW,
    s = e,
    i,
    a = !1;
  if (n.allowSymlink)
    try {
      let u = r.readlinkSync(e);
      ((s = Wf.isAbsolute(u) ? u : Wf.resolve(jd(r, Wf.dirname(e)).resolvedPath, u)),
        T(`Writing through symlink: ${e} -> ${s}`));
    } catch {}
  else {
    if (n.checkParentDir)
      try {
        Tf.closeSync(
          Tf.openSync(
            Wf.dirname(e),
            Tf.constants.O_RDONLY | Tf.constants.O_DIRECTORY | Tf.constants.O_NOFOLLOW,
          ),
        );
      } catch (u) {
        let d = on(u);
        if (d === "ELOOP" || d === "ENOTDIR")
          throw new Uee(`Refusing to write into symlinked directory: ${Wf.dirname(e)}`);
      }
    try {
      let u = r.lstatSync(e);
      if (u.isSymbolicLink())
        throw new Uee(
          `Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`,
        );
      ((i = u.mode), (a = !0));
    } catch (u) {
      if (!wn(u)) throw u;
    }
  }
  let l = `${s}.tmp.${process.pid}.${Zkr.randomBytes(6).toString("hex")}`,
    c = !1;
  if (n.allowSymlink && !a)
    try {
      ((i = r.statSync(s).mode), (a = !0));
    } catch (u) {
      if (!wn(u)) throw u;
    }
  if (a && i !== void 0) T(`Preserving file permissions: ${i.toString(8)}`);
  else if (n.mode !== void 0)
    ((i = n.mode), T(`Setting permissions for new file: ${i.toString(8)}`));
  try {
    T(`Writing to temp file: ${l}`);
    let u = Tf.openSync(
        l,
        Tf.constants.O_WRONLY | Tf.constants.O_CREAT | Tf.constants.O_EXCL | o,
        !a && n.mode !== void 0 ? n.mode : void 0,
      ),
      d = !1,
      p;
    try {
      if (
        (Tf.writeFileSync(u, t, {
          encoding: n.encoding,
        }),
        a && i !== void 0)
      )
        try {
          (Tf.fchmodSync(u, i), T("Applied original permissions to temp file"));
        } catch (f) {
          if (!tet(f)) throw f;
          T(`fchmod unsupported on this filesystem: ${f}`);
        }
      try {
        Tf.fsyncSync(u);
      } catch (f) {
        if (!tet(f)) throw f;
        T(`fsync unsupported on this filesystem: ${f}`);
      }
      c = !0;
    } catch (f) {
      ((d = !0), (p = f));
    }
    try {
      Tf.closeSync(u);
    } catch (f) {
      if (!d) throw f;
      T(`closeSync also failed after temp write error: ${f}`, {
        level: "error",
      });
    }
    if (d) throw p;
    (T(`Temp file written successfully, size: ${t.length} bytes`),
      T(`Renaming ${l} to ${s}`),
      r.renameSync(l, s),
      T(`File ${s} written atomically`));
  } catch (u) {
    T(`Failed to write file atomically: ${u}`, {
      level: "error",
    });
    let d = on(u);
    if ((c && d !== void 0 && $Fe.has(d)) || (!c && a && d === "EACCES")) {
      let m;
      try {
        m = Tf.openSync(
          s,
          Tf.constants.O_WRONLY | Tf.constants.O_CREAT | Tf.constants.O_TRUNC | o,
          !a && n.mode !== void 0 ? n.mode : void 0,
        );
      } catch (g) {
        try {
          r.unlinkSync(l);
        } catch (h) {
          T(`Failed to clean up temp file: ${h}`);
        }
        if (on(g) === "ELOOP")
          throw new Uee(`Refusing to write through symlink: ${s} (O_NOFOLLOW)`);
        throw u;
      }
      try {
        Tf.writeFileSync(m, t, {
          encoding: n.encoding,
        });
        try {
          Tf.fsyncSync(m);
        } catch (g) {
          if (!tet(g)) throw g;
          T(`fsync unsupported on this filesystem: ${g}`);
        }
        Tf.closeSync(m);
        try {
          r.unlinkSync(l);
        } catch (g) {
          T(`Failed to clean up temp file: ${g}`);
        }
        T(`File ${s} written via in-place fallback`);
        return;
      } catch (g) {
        try {
          Tf.closeSync(m);
        } catch {}
        try {
          r.unlinkSync(s);
        } catch {}
        if (c)
          throw new mi(
            `Write to ${s} failed (${on(g) ?? g}) after the target was truncated. The new content was preserved at ${l}.`,
            "writeFileSyncAndFlush: in-place fallback write failed; content preserved at temp path",
          );
        aAs(g, u);
      }
    }
    try {
      r.unlinkSync(l);
    } catch (m) {
      T(`Failed to clean up temp file: ${m}`);
    }
    throw u;
  }
}
async function r0r(
  e,
  t,
  n = {
    encoding: "utf-8",
  },
) {
  let r = qt(),
    o = n.allowSymlink ? 0 : Tf.constants.O_NOFOLLOW,
    s = e,
    i,
    a = !1;
  if (n.allowSymlink)
    try {
      let u = await AG.readlink(e);
      ((s = Wf.isAbsolute(u) ? u : Wf.resolve(await AG.realpath(Wf.dirname(e)), u)),
        T(`Writing through symlink: ${e} -> ${s}`));
    } catch {}
  else {
    if (n.checkParentDir)
      try {
        await (
          await AG.open(
            Wf.dirname(e),
            Tf.constants.O_RDONLY | Tf.constants.O_DIRECTORY | Tf.constants.O_NOFOLLOW,
          )
        ).close();
      } catch (u) {
        let d = on(u);
        if (d === "ELOOP" || d === "ENOTDIR")
          throw new Uee(`Refusing to write into symlinked directory: ${Wf.dirname(e)}`);
      }
    try {
      let u = await AG.lstat(e);
      if (u.isSymbolicLink())
        throw new Uee(
          `Refusing to write through symlink: ${e}. Resolve the symlink and pass the real target path explicitly.`,
        );
      ((i = u.mode), (a = !0));
    } catch (u) {
      if (!wn(u)) throw u;
    }
  }
  let l = `${s}.tmp.${process.pid}.${Zkr.randomBytes(6).toString("hex")}`,
    c = !1;
  if (n.allowSymlink && !a)
    try {
      ((i = (await r.stat(s)).mode), (a = !0));
    } catch (u) {
      if (!wn(u)) throw u;
    }
  if (a && i !== void 0) T(`Preserving file permissions: ${i.toString(8)}`);
  else if (n.mode !== void 0)
    ((i = n.mode), T(`Setting permissions for new file: ${i.toString(8)}`));
  try {
    T(`Writing to temp file: ${l}`);
    let u = await AG.open(
        l,
        Tf.constants.O_WRONLY | Tf.constants.O_CREAT | Tf.constants.O_EXCL | o,
        !a && n.mode !== void 0 ? n.mode : void 0,
      ),
      d = !1,
      p;
    try {
      if (
        (await u.writeFile(t, {
          encoding: n.encoding,
        }),
        a && i !== void 0)
      )
        try {
          (await u.chmod(i), T("Applied original permissions to temp file"));
        } catch (f) {
          if (!tet(f)) throw f;
          T(`fchmod unsupported on this filesystem: ${f}`);
        }
      try {
        await u.sync();
      } catch (f) {
        if (!tet(f)) throw f;
        T(`fsync unsupported on this filesystem: ${f}`);
      }
      c = !0;
    } catch (f) {
      ((d = !0), (p = f));
    }
    try {
      await u.close();
    } catch (f) {
      if (!d) throw f;
      T(`close also failed after temp write error: ${f}`, {
        level: "error",
      });
    }
    if (d) throw p;
    (T(`Temp file written successfully, size: ${t.length} bytes`),
      T(`Renaming ${l} to ${s}`),
      await r.rename(l, s),
      T(`File ${s} written atomically`));
  } catch (u) {
    T(`Failed to write file atomically: ${u}`, {
      level: "error",
    });
    let d = on(u);
    if ((c && d !== void 0 && $Fe.has(d)) || (!c && a && d === "EACCES")) {
      let m;
      try {
        m = await AG.open(
          s,
          Tf.constants.O_WRONLY | Tf.constants.O_CREAT | Tf.constants.O_TRUNC | o,
          !a && n.mode !== void 0 ? n.mode : void 0,
        );
      } catch (g) {
        try {
          await r.unlink(l);
        } catch (h) {
          T(`Failed to clean up temp file: ${h}`);
        }
        if (on(g) === "ELOOP")
          throw new Uee(`Refusing to write through symlink: ${s} (O_NOFOLLOW)`);
        throw u;
      }
      try {
        await m.writeFile(t, {
          encoding: n.encoding,
        });
        try {
          await m.sync();
        } catch (g) {
          if (!tet(g)) throw g;
          T(`fsync unsupported on this filesystem: ${g}`);
        }
        await m.close();
        try {
          await r.unlink(l);
        } catch (g) {
          T(`Failed to clean up temp file: ${g}`);
        }
        T(`File ${s} written via in-place fallback`);
        return;
      } catch (g) {
        try {
          await m.close();
        } catch {}
        try {
          await r.unlink(s);
        } catch {}
        if (c)
          throw new mi(
            `Write to ${s} failed (${on(g) ?? g}) after the target was truncated. The new content was preserved at ${l}.`,
            "writeFileAndFlush: in-place fallback write failed; content preserved at temp path",
          );
        aAs(g, u);
      }
    }
    try {
      await r.unlink(l);
    } catch (m) {
      T(`Failed to clean up temp file: ${m}`);
    }
    throw u;
  }
}
function getDesktopPath() {
  let e = Vt(),
    t = e0r.homedir();
  if (e === "macos") return Wf.join(t, "Desktop");
  if (e === "windows") {
    let r = process.env.USERPROFILE ? process.env.USERPROFILE.replaceAll("\\", "/") : null;
    if (r) {
      let s = `/mnt/c${r.replace(/^[A-Z]:/, "")}/Desktop`;
      if (qt().existsSync(s)) return s;
    }
    try {
      let s = qt().readdirSync("/mnt/c/Users");
      for (let i of s) {
        if (
          i.name === "Public" ||
          i.name === "Default" ||
          i.name === "Default User" ||
          i.name === "All Users"
        )
          continue;
        let a = Wf.join("/mnt/c/Users", i.name, "Desktop");
        if (qt().existsSync(a)) return a;
      }
    } catch (o) {
      T(`Failed to enumerate /mnt/c/Users for Windows desktop path: ${o}`, {
        level: "error",
      });
    }
  }
  let n = Wf.join(t, "Desktop");
  if (qt().existsSync(n)) return n;
  return t;
}
function Xpn(e, t = t0r) {
  try {
    return qt().statSync(e).size <= t;
  } catch {
    return !1;
  }
}
function dv(e) {
  let t = Wf.normalize(e);
  if (Vt() === "windows") t = t.replaceAll("/", "\\").toLowerCase();
  return t;
}
function cAs(e, t) {
  return dv(e) === dv(t);
}
var Zkr,
  Tf,
  AG,
  e0r,
  Wf,
  Uee,
  vhe,
  LPu = 256,
  t0r = 262144,
  set =
    "File is read-only \u2014 it has not been opened for edit in Perforce. Run `p4 edit <file>` to check it out, then retry. Do not chmod the file writable; that bypasses Perforce tracking.",
  zpn,
  FILE_NOT_FOUND_CWD_NOTE = "Note: your current working directory is";
