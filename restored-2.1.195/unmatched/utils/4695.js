// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module WL
// matched 2.1.88 source: src/utils/fileHistory.ts
// class=new  jaccard=0.034  score=0.1432  fileCov=0.0427
// note: nearest: src/utils/fileHistory.ts (0.034); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var WL = E(() => {
  Qi();
  ag();
  Pw();
  fn();
  At();
  Is();
  HEt = require("crypto"), Ufe = require("fs"), yA = require("fs/promises"), _Nl = require("net"), Jg = require("path");
  A$f = Cn(() => HEt.createHash("sha256").update(Jg.resolve(tr())).digest("hex").slice(0, 8), () => Jg.resolve(tr())), Ffe = Cn(() => {
    let e = process.getuid?.() ?? 0,
      t = process.env.TERMUX_VERSION && process.env.PREFIX ? Jg.join(process.env.PREFIX, "tmp") : "/tmp";
    return Jg.join(t, `cc-daemon-${e}`, A$f());
  }, () => tr()), H$f = /^[a-f0-9]{16}$/, T$f = Cn(() => {
    let e = Jg.join(Bfe(), "pipe.key");
    for (let t = 0; t < 8; t++) {
      let n;
      try {
        let o = Ufe.lstatSync(e);
        if (!o.isFile() || o.size > 4096) {
          try {
            Ufe.rmSync(e, {
              recursive: !0,
              force: !0
            });
          } catch {}
          n = "invalid";
        } else n = Ufe.readFileSync(e, "utf8").trim();
      } catch (o) {
        if (!wn(o)) throw o;
      }
      if (n !== void 0) {
        if (H$f.test(n)) return n;
        if (n === "" && t < 3) continue;
        let o = HEt.randomBytes(8).toString("hex");
        return oj(e, o, 384), o;
      }
      let r = HEt.randomBytes(8).toString("hex");
      Ufe.mkdirSync(Bfe(), {
        recursive: !0,
        mode: 448
      });
      try {
        return Ufe.writeFileSync(e, r, {
          flag: "wx",
          mode: 384
        }), r;
      } catch (o) {
        if (on(o) !== "EEXIST") throw o;
      }
    }
    throw Error("daemon pipe.key is not a valid nonce");
  }, () => tr());
});
async function hE(e, t) {
  let n;
  try {
    n = fnr.connect(Pq());
  } catch (u) {
    return {
      ok: !1,
      code: "ENOCONN",
      error: Fk(be(u))
    };
  }
  let r = t?.timeoutMs ?? 5000,
    o,
    s = new Promise(u => {
      o = u;
    }),
    i = !1,
    a = u => {
      if (i) return;
      i = !0, n.destroy(), o(u);
    };
  n.setTimeout(r, () => a({
    ok: !1,
    code: "ETIMEOUT",
    error: "control socket timeout"
  })), n.on("error", u => a({
    ok: !1,
    code: "ENOCONN",
    error: Fk(be(u))
  })), n.once("connect", () => {
    n.write(De(e) + `
`);
  });
  let l = new vNl.StringDecoder("utf8"),
    c = "";
  return n.on("data", u => {
    c += l.write(u);
    let d = c.indexOf(`
`);
    if (d < 0) return;
    let p = c.slice(0, d);
    try {
      a(Ft(p));
    } catch (f) {
      a({
        ok: !1,
        code: "ENOCONN",
        error: Fk(be(f))
      });
    }
  }), n.once("close", () => {
    if (!i) a({
      ok: !1,
      code: "ENOCONN",
      error: "connection dropped mid-request \u2014 it may have restarted; retry"
    });
  }), s;
}
function mnr(e) {
  let t = {
      label: e,
      cwd: $t(),
      pid: process.pid
    },
    n = !1,
    r = null,
    o = null,
    s = () => {
      if (n) return;
      try {
        r = fnr.connect(Pq());
      } catch {
        r = null, o = setTimeout(s, 1000), o.unref();
        return;
      }
      r.on("error", () => r?.destroy()), r.once("connect", () => r?.write(De({
        proto: hp,
        op: "lease",
        client: t
      }) + `
`)), r.on("data", () => {}), r.once("close", () => {
        if (r = null, n) return;
        o = setTimeout(s, 1000), o.unref();
      }), r.unref();
    };
  return s(), () => {
    if (n = !0, o) clearTimeout(o);
    r?.destroy();
  };
}
function wNl(e, t, n, r) {
  let o;
  try {
    o = fnr.connect(Pq());
  } catch (c) {
    return queueMicrotask(() => r(Fk(be(c)))), () => {};
  }
  let s = !1,
    i = !1,
    a = c => {
      if (s) return;
      s = !0, r(c);
    };
  o.setTimeout(1e4, () => {
    if (!i) a(`${mb()} did not respond \u2014 it may be stalled${cce("restart")}`), o.destroy();
  }), o.on("error", c => a(Fk(be(c)))), o.on("close", () => a("control socket closed")), o.on("connect", () => o.write(De({
    proto: hp,
    op: "subscribe",
    short: e,
    tail: t
  }) + `
`));
  let l = dnr(o, c => {
    if (!i) i = !0, o.setTimeout(0);
    try {
      let u = Ft(c);
      if ("ok" in u && u.ok === !1) a(u.error);else n(u);
    } catch {}
  });
  return () => {
    s = !0, l(), o.destroy();
  };
}
var fnr, vNl;