// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module UGo
// matched 2.1.88 source: src/ink/components/App.tsx
// class=new  jaccard=0.0384  score=0.0949  fileCov=0.0606
// note: nearest: src/ink/components/App.tsx (0.0384); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var UGo = E(() => {
  Knc = new Set([1000, 1002, 1003, 1004, 1006, 2004, 2031]), Ync = /\x1b\[\?([\d;]+)([hl])/g;
});
function hZ(e, t, n) {
  return e.length - t >= n.length && e.compare(n, 0, n.length, t, t + n.length) === 0;
}
function yQt(e, t) {
  let n = Math.min(e.length, t.length - 1);
  e: for (let r = n; r > 0; r--) {
    let o = e.length - r;
    for (let s = 0; s < r; s++) if (e[o + s] !== t[s]) continue e;
    return r;
  }
  return 0;
}
function orc(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (t) {
      if (t = !1, r === trc) return {
        matched: !0,
        prefixArmed: !1
      };
      continue;
    }
    if (r === erc || r === lJf || hZ(e, n, nrc) || hZ(e, n, rrc) || hZ(e, n, cJf) || hZ(e, n, uJf)) return {
      matched: !0,
      prefixArmed: !1
    };
    let o = r === FGo ? 1 : hZ(e, n, dar) ? dar.length : hZ(e, n, par) ? par.length : 0;
    if (o) n += o - 1, t = !0;
  }
  return {
    matched: !1,
    prefixArmed: t
  };
}
function src(e) {
  let t = !1,
    n = !1,
    r,
    o = new Promise(i => {
      r = i;
    }),
    s = () => {
      if (t) return;
      let i;
      while ((i = e.read()) !== null) {
        let a = typeof i === "string" ? Buffer.from(i, "utf8") : i,
          l = orc(a, n);
        if (n = l.prefixArmed, l.matched) {
          t = !0, r();
          return;
        }
      }
    };
  if (e.on("readable", s), "resume" in e && "pause" in e) e.resume(), e.pause();
  return s(), {
    promise: o,
    cancel: () => {
      t = !0, e.removeListener("readable", s);
    }
  };
}
function far(e) {
  return orc(e, !1).matched;
}
async function yZ(e, t = {}) {
  let n = t.stdin ?? process.stdin,
    r = t.stdout ?? process.stdout,
    o = "columns" in r ? r.columns || 120 : 120,
    s = "rows" in r ? r.rows || 30 : 30,
    i = o,
    a = s,
    l = Qnc.randomUUID(),
    c = await jfe(),
    u = Date.now(),
    d,
    p,
    f,
    m,
    g = !1;
  function h() {
    if (g) return;
    g = !0, G("tengu_bg_attach_first_frame", {
      ms: Date.now() - u,
      ack_ms: d,
      via: Oo(p),
      tempo: Oo(f),
      state: m
    });
  }
  let y,
    b = new Promise(pe => {
      y = pe;
    }),
    _ = !1,
    S = !1,
    A = !1,
    v,
    C = o,
    x = s,
    I = gQt(),
    k = gne(),
    D = Vt() === "windows" && !V7r(),
    P = t.holdScreenOnDisconnect && Vt() === "windows" ? !0 : "isRaw" in n ? Boolean(n.isRaw) : !1,
    O = Vt() === "windows",
    L = Buffer.from(A1, "ascii"),
    M = Buffer.from(_W, "ascii"),
    N = O && LJr(),
    B = !1,
    $,
    q;
  try {
    q = Znc.connect(Pq());
  } catch (pe) {
    return {
      outcome: "error",
      msg: Fk(be(pe))
    };
  }
  q.setTimeout(1e4, () => {
    if (!S) W("error", `${mb()} did not respond \u2014 it may be stalled${cce("restart")}`);
  });
  function W(pe, ge) {
    if (_) return;
    if (_ = !0, clearTimeout($), G("tengu_bg_attach_outcome", {
      outcome: $e(pe),
      got_ack: S,
      got_first_frame: g,
      ms: Date.now() - u,
      via: Oo(p),
      tempo: Oo(f)
    }), S) {
      let he = t.alreadyInAlt || pe === "disconnected" && t.holdScreenOnDisconnect;
      r.write(Oit + I.snapshot().map(W7).reverse().join("") + A1 + (Vt() === "windows" ? dJf : "") + "\x1B[0m\x1B7" + c8 + "\x1B8" + (iGe() ? K0n : "") + (he ? "" : H1()));
    }
    if (!P) L0(n, !1);
    if (n.removeListener("readable", Z), n.removeListener("end", J), "removeListener" in r) r.removeListener("resize", V);
    clearTimeout(v), q.destroy(), y({
      outcome: pe,
      msg: ge
    });
  }
  function V() {
    if (_) return;
    if (v === void 0) C = i, x = a;
    i = "columns" in r ? r.columns || o : o, a = "rows" in r ? r.rows || s : s, clearTimeout(v), v = setTimeout(() => {
      if (v = void 0, _) return;
      if (i < C || a < x) r.write(Jx + dH);
      hE({
        proto: hp,
        op: "resize",
        short: e,
        cols: i,
        rows: a,
        attachId: l
      });
    }, 50);
  }
  let Y = t.gateStdinUntilFirstFrame === !0 && "isTTY" in n && n.isTTY === !0;
  function z(pe) {
    if (!Y || g) q.write(pe);
  }
  function K(pe) {
    if (_) return;
    let ge = typeof pe === "string" ? Buffer.from(pe, "utf8") : pe,
      he = 0;
    for (let ie = 0; ie < ge.length; ie++) {
      let le = ge[ie];
      if (A) {
        if (A = !1, ie > he) z(ge.subarray(he, ie));
        if (le === trc) return W("detached");
        z(Buffer.from([FGo, le])), he = ie + 1;
        continue;
      }
      if (Y && !g && (le === 27 && ge.length === 1 || hZ(ge, ie, iJf) || hZ(ge, ie, aJf))) return W("detached");
      if (le === erc || hZ(ge, ie, nrc) || hZ(ge, ie, rrc)) {
        if (ie > he) z(ge.subarray(he, ie));
        return W("detached");
      }
      if (D && le === oJf) {
        if (ie > he) z(ge.subarray(he, ie));
        z(sJf), he = ie + 1;
        continue;
      }
      let He = le === FGo ? 1 : hZ(ge, ie, dar) ? dar.length : hZ(ge, ie, par) ? par.length : 0;
      if (He) {
        if (ie > he) z(ge.subarray(he, ie));
        ie += He - 1, he = ie + 1, A = !0;
      }
    }
    if (he < ge.length) z(ge.subarray(he));
  }
  function Z() {
    let pe;
    while ((pe = n.read()) !== null) K(pe);
  }
  function J() {
    W("detached");
  }
  let ne = gZ,
    oe = gZ,
    re = gZ,
    ee = gZ;
  function ce(pe) {
    if (!O) return pe;
    let ge = re.length > 0,
      he = ge ? Buffer.concat([re, pe]) : pe;
    if (ge) re = gZ;
    if (N) {
      let Ce = he.lastIndexOf(L),
        Ie = he.lastIndexOf(M);
      if (Ce !== Ie) B = Ce > Ie;
    }
    let ie = he.indexOf(L);
    if (ie < 0) {
      let Ce = yQt(he, L);
      if (Ce === 0) return he;
      return re = Buffer.from(he.subarray(he.length - Ce)), he.subarray(0, he.length - Ce);
    }
    let le = [],
      He = 0,
      ye = ie;
    for (;;) {
      if (ye > He) le.push(he.subarray(He, ye));
      if (He = ye + L.length, ye = he.indexOf(L, He), ye < 0) break;
    }
    let ue = he.subarray(He),
      we = yQt(ue, L);
    if (we > 0) re = Buffer.from(ue.subarray(ue.length - we));
    if (ue.length > we) le.push(ue.subarray(0, ue.length - we));
    if (le.length === 0) return gZ;
    if (le.length === 1) return le[0];
    return Buffer.concat(le);
  }
  function ae(pe) {
    let ge = ee.length > 0,
      he = ge ? Buffer.concat([ee, pe]) : pe;
    if (ge) ee = gZ;
    let ie = he.indexOf(hQt);
    if (ie < 0) {
      let ue = yQt(he, hQt);
      if (ue === 0) return he;
      return ee = Buffer.from(he.subarray(he.length - ue)), he.subarray(0, he.length - ue);
    }
    let le = [],
      He = 0,
      ye = ie;
    while (ye >= 0) {
      let ue = ye + hQt.length;
      if (ue >= he.length) {
        if (ye > He) le.push(he.subarray(He, ye));
        ee = Buffer.from(he.subarray(ye)), He = he.length;
        break;
      }
      let we = he[ue];
      if (we === 104 || we === 108) {
        if (ye > He) le.push(he.subarray(He, ye));
        He = ue + 1;
      }
      ye = he.indexOf(hQt, Math.max(He, ye + 1));
    }
    if (He < he.length) {
      let ue = he.subarray(He),
        we = yQt(ue, hQt);
      if (we > 0) ee = Buffer.from(ue.subarray(ue.length - we));
      if (ue.length > we) le.push(ue.subarray(0, ue.length - we));
    }
    if (le.length === 0) return gZ;
    if (le.length === 1) return le[0];
    return Buffer.concat(le);
  }
  let de = t.alreadyInAlt && !t.holdingFrame;
  function Ee(pe) {
    if (de) de = !1, r.write(Jx + dH);
    r.write(pe), I.feed(pe.toString("latin1"), ge => {
      if (ge === 1004 && k) r.write(k);
    }), h();
  }
  function me(pe) {
    if (_) return;
    let ge = oe.length > 0 ? Buffer.concat([oe, pe]) : pe,
      he = ge.indexOf(Xnc);
    if (he >= 0) {
      let le = ge.subarray(0, he);
      if (he > 0) {
        let He = ae(ce(le));
        if (He.length > 0) Ee(He);
      }
      return oe = gZ, re = gZ, ee = gZ, W("detached", kPl(le));
    }
    let ie = yQt(ge, Xnc);
    if (ge.length > ie) {
      let le = ge.subarray(0, ge.length - ie),
        He = ae(ce(le));
      if (He.length > 0) Ee(He);
    }
    if (oe = ie > 0 ? Buffer.from(ge.subarray(ge.length - ie)) : gZ, N) clearTimeout($), $ = setTimeout(() => {
      if (!_ && B) r.write(A1);
    }, pJf);
  }
  return q.on("data", pe => {
    if (_) return;
    if (S) {
      me(pe);
      return;
    }
    ne = Buffer.concat([ne, pe]);
    let ge = ne.indexOf(10);
    if (ge < 0) return;
    let he = ne.subarray(0, ge).toString("utf8"),
      ie = ne.subarray(ge + 1),
      le;
    try {
      le = Ft(he);
    } catch (ue) {
      return W("error", `bad ack: ${be(ue)}`);
    }
    if (!le.ok) return W("error", `${le.code}: ${le.error}`);
    if (S = !0, q.setTimeout(0), d = Date.now() - u, p = le.op === "attach" ? le.via : void 0, f = le.op === "attach" ? le.tempo : void 0, m = le.op === "attach" ? le.state : void 0, process.env.TMUX && !Jnc) Jnc = !0, $n("tmux", ["set", "-as", "terminal-features", ",*:RGB"]);
    let ye = ((le.op === "attach" ? le.decModes : void 0) ?? []).map(RU).join("");
    if (I.feed(ye), r.write(t.alreadyInAlt ? _W + gne() + ye : Xke() + ye + (O ? _W : "") + `
  \x1B[2mAttaching\u2026\x1B[0m
`), "ref" in n) n.ref();
    if (L0(n, !0), "on" in r) r.on("resize", V);
    if (n.on("readable", Z), "resume" in n && "pause" in n) n.resume(), n.pause();
    if (n.once("end", J), Z(), ie.length) me(ie);
  }), q.on("error", pe => W("error", Fk(be(pe)))), q.once("close", () => {
    if (!_) W(S ? "disconnected" : "error", "control socket closed");
  }), q.once("connect", () => {
    q.write(De({
      proto: hp,
      op: "attach",
      short: e,
      auth: c,
      cols: o,
      rows: s,
      attachId: l,
      caps: fJf(),
      ...(t.holdingFrame && {
        holdingFrame: !0
      })
    }) + `
`);
  }), b;
}
function fJf() {
  return {
    terminal: Oe.terminal,
    mux: process.env.TMUX ? "tmux" : process.env.ZELLIJ != null ? "zellij" : process.env.STY ? "screen" : null,
    ssh: Oe.isSSH(),
    wheelFlood: N7r(),
    hyperlinks: vI(),
    progressReporting: iGe(),
    wtSession: !!process.env.WT_SESSION,
    isVscodeTerm: process.env.TERM_PROGRAM === "vscode",
    browser: process.env.BROWSER ?? null,
    colorLevel: wt.level,
    syncOutput: LU(),
    editor: process.env.VISUAL?.trim() || process.env.EDITOR?.trim() || null,
    systemTheme: uUi()
  };
}
var Qnc,
  Znc,
  FGo = 2,
  erc = 26,
  trc = 100,
  oJf = 8,
  sJf,
  dar,
  par,
  nrc,
  rrc,
  iJf,
  aJf,
  lJf = 3,
  cJf,
  uJf,
  Xnc,
  hQt,
  dJf = "\x1B[?9001l",
  pJf = 100,
  gZ,
  Jnc = !1;