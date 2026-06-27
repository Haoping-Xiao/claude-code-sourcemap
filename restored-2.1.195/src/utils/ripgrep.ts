// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vna
// matched 2.1.88 source: src/utils/ripgrep.ts
// class=modified  jaccard=0.338  score=0.8551  fileCov=0.3586
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var vna = E(() => {
  _0();
});
function xna(e) {
  if (e.code === "ENOENT" && p2t().mode === "system") {
    let t = Error(dnp, {
      cause: e,
    });
    return ((t.code = "ENOENT"), t);
  }
  return e;
}
function DWe() {
  let e = p2t();
  return {
    rgPath: e.command,
    rgArgs: e.args,
    argv0: e.argv0,
  };
}
function wna(e) {
  return e.includes("os error 11") || e.includes("Resource temporarily unavailable");
}
function Cna(e, t, n, r, o = !1) {
  let { rgPath: s, rgArgs: i, argv0: a } = DWe(),
    l = o ? ["-j", "1"] : [],
    c = [...i, ...l, ...e, t],
    u = Vt() === "wsl" ? 60000 : 20000,
    d = parseInt(process.env.CLAUDE_CODE_GLOB_TIMEOUT_SECONDS || "", 10) || 0,
    p = d > 0 ? d * 1000 : u;
  if (a) {
    let f = d2t.spawn(s, c, {
        argv0: a,
        cwd: $t(),
        signal: n,
        windowsHide: !0,
      }),
      m = "",
      g = "",
      h = !1,
      y = !1;
    (f.stdout?.on("data", (v) => {
      if (!h) {
        if (((m += v.toString()), m.length > u2t)) ((m = m.slice(0, u2t)), (h = !0));
      }
    }),
      f.stderr?.on("data", (v) => {
        if (!y) {
          if (((g += v.toString()), g.length > u2t)) ((g = g.slice(0, u2t)), (y = !0));
        }
      }));
    let b,
      _ = !1,
      S = setTimeout(() => {
        ((_ = !0), f.kill("SIGTERM"), (b = setTimeout((v) => v.kill("SIGKILL"), 5000, f)));
      }, p),
      A = !1;
    return (
      f.on("close", (v, C) => {
        if (A) return;
        if (((A = !0), clearTimeout(S), clearTimeout(b), v === 0 || v === 1)) r(null, m, g);
        else {
          let x = Error(`ripgrep exited with code ${v}${C ? ` (signal ${C})` : ""}`);
          ((x.code = v ?? void 0), (x.signal = C ?? (_ ? "SIGTERM" : void 0)), r(x, m, g));
        }
      }),
      f.on("error", (v) => {
        if (A) return;
        if (((A = !0), clearTimeout(S), clearTimeout(b), v.code === "ENOENT")) Lna();
        r(v, m, g);
      }),
      f
    );
  }
  return d2t.execFile(
    s,
    c,
    {
      cwd: $t(),
      maxBuffer: u2t,
      signal: n,
      timeout: p,
      killSignal: "SIGKILL",
      windowsHide: !0,
    },
    r,
  );
}
async function fnp(e, t, n) {
  let { rgPath: r, rgArgs: o, argv0: s } = DWe();
  return new Promise((i, a) => {
    let l = d2t.spawn(r, [...o, ...e, t], {
        argv0: s,
        cwd: $t(),
        signal: n,
        windowsHide: !0,
        stdio: ["ignore", "pipe", "ignore"],
      }),
      c = 0;
    l.stdout?.on("data", (d) => {
      c += hu(
        d,
        `
`,
      );
    });
    let u = !1;
    (l.on("close", (d) => {
      if (u) return;
      if (((u = !0), d === 0 || d === 1 || d === null)) i(c);
      else a(Error(`rg --files exited ${d}`));
    }),
      l.on("error", (d) => {
        if (u) return;
        u = !0;
        let p = xna(d);
        if (d.code === "ENOENT" && s) Lna();
        a(p);
      }));
  });
}
async function Aue(e, t, n) {
  return (
    Rna().catch((r) => {
      ke(r);
    }),
    new Promise((r, o) => {
      let s = (i, a, l, c) => {
        if (!i) {
          r(
            a
              .trim()
              .split(
                `
`,
              )
              .map((h) => h.replace(/\r$/, ""))
              .filter(Boolean),
          );
          return;
        }
        if (i.code === 1) {
          r([]);
          return;
        }
        if (["ENOENT", "EACCES", "EPERM"].includes(i.code)) {
          o(xna(i));
          return;
        }
        if (!c && wna(l)) {
          (T("rg EAGAIN error detected, retrying with single-threaded mode (-j 1)"),
            G("tengu_ripgrep_eagain_retry", {}),
            Cna(
              e,
              t,
              n,
              (h, y, b) => {
                s(h, y, b, !0);
              },
              !0,
            ));
          return;
        }
        let d = a && a.trim().length > 0,
          p = i.signal === "SIGTERM" || i.signal === "SIGKILL" || i.code === "ABORT_ERR",
          f = i.code === "ERR_CHILD_PROCESS_STDIO_MAXBUFFER",
          m = i.code === void 0 && (i.signal === void 0 || pnp.has(i.signal)),
          g = [];
        if (d) {
          if (
            ((g = a
              .trim()
              .split(
                `
`,
              )
              .map((h) => h.replace(/\r$/, ""))
              .filter(Boolean)),
            g.length > 0 && (p || f || m))
          )
            g = g.slice(0, -1);
        }
        if (
          (T(`rg error (signal=${i.signal}, code=${i.code}, stderr: ${l}), ${g.length} results`),
          i.code !== 2 && i.code !== "ABORT_ERR")
        )
          if (p || f || m || wna(l))
            T(`rg failed (signal=${i.signal}, code=${i.code}): ${i.message}`, {
              level: "error",
            });
          else ke(i);
        if (p && g.length === 0) {
          if (n.aborted && n.reason?.name !== "TimeoutError") {
            o(new ru());
            return;
          }
          o(
            new tOn(
              `Ripgrep search timed out after ${Vt() === "wsl" ? 60 : 20} seconds. The search may have matched files but did not complete in time. Try searching a more specific path or pattern.`,
              g,
            ),
          );
          return;
        }
        r(g);
      };
      Cna(e, t, n, (i, a, l) => {
        s(i, a, l, !1);
      });
    })
  );
}
function kna() {
  let e = p2t();
  return {
    mode: e.mode,
    path: e.command,
    working: lct?.working ?? null,
  };
}
function Lna() {
  if ((p2t.cache?.clear?.(), lct?.working !== !1)) (Rna.cache?.clear?.(), (lct = null));
}
var d2t,
  Ina,
  Ero,
  p2t,
  dnp =
    "ripgrep not found on PATH. Install it (brew install ripgrep / apt install ripgrep / winget install BurntSushi.ripgrep.MSVC) or use the native claude binary which embeds it.",
  u2t = 20000000,
  pnp,
  tOn,
  nOn,
  lct = null,
  Rna;
