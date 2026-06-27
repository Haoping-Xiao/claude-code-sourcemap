// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module n_c
// matched 2.1.88 source: src/utils/deepLink/banner.ts
// class=partial  jaccard=0.1877  score=0.2607  fileCov=0.4015
// note: low-confidence suggestion: src/utils/deepLink/banner.ts; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var n_c = E(() => {
  si();
  Xa();
  _i();
  Tc();
  Ye();
  N0e();
  ps();
  dn();
  uo();
  vy();
  g0();
  Ko();
  _Pn();
  $en = R(lt(), 1), L6o = require("path"), Zyc = R(rt(), 1), zz = R(rt(), 1), CA = R(se(), 1), b7e = rn(_7e), R6o = lfm + rn(`${hCe}  `), cfm = rn(`\u2190/\u2192 to navigate${_7e}`), ufm = rn("Enter to open");
  gfm = zz.memo(function () {
    let t = $en.c(47),
      n = Ht(_fm),
      r = Ht(bfm),
      o = Ht(Sfm),
      s = Ht(Efm),
      i = $0("app:openArtifact", "Global", "ctrl+]"),
      {
        columns: a
      } = br(),
      [l, c] = zz.useState(!1),
      u = zz.useRef(null),
      d = ks(),
      p;
    if (t[0] !== n) p = Object.entries(n), t[0] = n, t[1] = p;else p = t[1];
    let f = p,
      m = vdr(f, o),
      g;
    if (t[2] !== d) g = () => {
      c(!0), u.current?.(), u.current = d.setTimeout(() => c(!1), ifm);
    }, t[2] = d, t[3] = g;else g = t[3];
    let h;
    if (t[4] !== d || t[5] !== n) h = [n, d], t[4] = d, t[5] = n, t[6] = h;else h = t[6];
    zz.useEffect(g, h);
    let y, b;
    if (t[7] === Symbol.for("react.memo_cache_sentinel")) y = () => () => {
      u.current?.();
    }, b = [], t[7] = y, t[8] = b;else y = t[7], b = t[8];
    zz.useEffect(y, b);
    let [, _] = zz.useState(0),
      S = f.some(Afm),
      A;
    if (t[9] !== _) A = () => _(Hfm), t[9] = _, t[10] = A;else A = t[10];
    Gc(A, S ? afm : null);
    let v = r || s ? m : null,
      C = s ? f[m]?.[1]?.url : void 0,
      x = r ? `${nt.pointer} ` : "  ",
      I = !r && l && i !== "",
      k = 0;
    if (r) k = ufm + (f.length > 1 ? cfm : 0);else if (I) {
      let ie;
      if (t[11] !== i) ie = B0e([CW(i)]), t[11] = i, t[12] = ie;else ie = t[12];
      let le = `${ie} to open`,
        He;
      if (t[13] !== le) He = rn(le), t[13] = le, t[14] = He;else He = t[14];
      k = He;
    }
    let D = v ?? f.length - 1,
      P = rn(L6o.parse(f[D]?.[0] ?? "").name),
      O = D > 0 ? rn(`+${D}`) + b7e : 0,
      L = D < f.length - 1 ? b7e + rn(`+${f.length - 1 - D}`) : 0,
      M = k > 0 && a - R6o - k - b7e - O - L >= Math.min(P, 16),
      N;
    if (t[15] !== i || t[16] !== f.length || t[17] !== I || t[18] !== M || t[19] !== r) N = M && r ? CA.jsxs(CA.Fragment, {
      children: [f.length > 1 && CA.jsx(ht, {
        chord: ["left", "right"],
        action: "navigate"
      }), f.length > 1 && _7e, CA.jsx(ht, {
        chord: "enter",
        action: "open"
      })]
    }) : M && I ? CA.jsx(ht, {
      chord: i,
      action: "open"
    }) : null, t[15] = i, t[16] = f.length, t[17] = I, t[18] = M, t[19] = r, t[20] = N;else N = t[20];
    let B = N,
      $ = Math.max(8, a - R6o - (M ? k + b7e : 0)),
      {
        visible: q,
        before: W,
        after: V
      } = hfm(f, $, v),
      Y = U,
      z = "column",
      K = "100%",
      Z = U,
      J = "row",
      ne = r ? "claude" : void 0,
      oe = !r,
      re;
    if (t[21] !== x || t[22] !== ne || t[23] !== oe) re = CA.jsx(w, {
      color: ne,
      dimColor: oe,
      children: x
    }), t[21] = x, t[22] = ne, t[23] = oe, t[24] = re;else re = t[24];
    let ee;
    if (t[25] === Symbol.for("react.memo_cache_sentinel")) ee = CA.jsxs(w, {
      color: "claude",
      children: [hCe, "  "]
    }), t[25] = ee;else ee = t[25];
    let ce;
    if (t[26] !== re) ce = CA.jsxs(U, {
      flexShrink: 0,
      children: [re, ee]
    }), t[26] = re, t[27] = ce;else ce = t[27];
    let ae;
    if (t[28] !== W) ae = W > 0 && CA.jsx(U, {
      flexShrink: 0,
      children: CA.jsxs(w, {
        dimColor: !0,
        children: ["+", W, _7e]
      })
    }), t[28] = W, t[29] = ae;else ae = t[29];
    let de = q.map((ie, le) => {
        let {
          idx: He,
          name: ye,
          url: ue,
          updatedAt: we
        } = ie;
        return CA.jsxs(Zyc.Fragment, {
          children: [le > 0 && CA.jsx(w, {
            dimColor: !0,
            children: _7e
          }), CA.jsx(yfm, {
            name: ye,
            url: ue,
            highlighted: He === v,
            navSelected: r && He === m,
            stale: Date.now() - we > e_c
          })]
        }, `${He}-${ye}`);
      }),
      Ee;
    if (t[30] !== V) Ee = V > 0 && CA.jsx(U, {
      flexShrink: 0,
      children: CA.jsxs(w, {
        dimColor: !0,
        children: [_7e, "+", V]
      })
    }), t[30] = V, t[31] = Ee;else Ee = t[31];
    let me;
    if (t[32] !== B) me = B && CA.jsx(U, {
      flexShrink: 0,
      children: CA.jsxs(w, {
        dimColor: !0,
        children: [_7e, B]
      })
    }), t[32] = B, t[33] = me;else me = t[33];
    let pe;
    if (t[34] !== Z || t[35] !== ce || t[36] !== ae || t[37] !== de || t[38] !== Ee || t[39] !== me) pe = CA.jsxs(Z, {
      flexDirection: J,
      children: [ce, ae, de, Ee, me]
    }), t[34] = Z, t[35] = ce, t[36] = ae, t[37] = de, t[38] = Ee, t[39] = me, t[40] = pe;else pe = t[40];
    let ge;
    if (t[41] !== C) ge = C && CA.jsx(U, {
      paddingLeft: R6o,
      children: CA.jsx(xs, {
        url: C,
        children: CA.jsx(w, {
          dimColor: !0,
          children: C
        })
      })
    }), t[41] = C, t[42] = ge;else ge = t[42];
    let he;
    if (t[43] !== Y || t[44] !== pe || t[45] !== ge) he = CA.jsxs(Y, {
      flexDirection: z,
      width: K,
      children: [pe, ge]
    }), t[43] = Y, t[44] = pe, t[45] = ge, t[46] = he;else he = t[46];
    return he;
  });
});
function i_c(e) {
  let t = [`This session was opened by an external deep link in ${vfm(e.cwd)}`];
  if (e.repo) {
    let n = e.lastFetch ? WK(e.lastFetch) : "never",
      r = !e.lastFetch || Date.now() - e.lastFetch.getTime() > Tfm;
    t.push(`Resolved ${e.repo} from local clones \xB7 last fetched ${n}${r ? " \u2014 CLAUDE.md may be stale" : ""}`);
  }
  if (e.prefillLength) t.push(e.prefillLength > D6o ? `The prompt below (${ou(e.prefillLength)} chars) was supplied by the link \u2014 scroll to review the entire prompt before pressing Enter.` : "The prompt below was supplied by the link \u2014 review carefully before pressing Enter.");
  return t.join(`
`);
}
async function a_c(e) {
  let t = await TRt(e);
  if (!t) return;
  let n = await HG(t),
    [r, o] = await Promise.all([r_c(Oen.join(t, "FETCH_HEAD")), n ? r_c(Oen.join(n, "FETCH_HEAD")) : Promise.resolve(void 0)]);
  if (r && o) return r > o ? r : o;
  return r ?? o;
}
async function r_c(e) {
  try {
    let {
      mtime: t
    } = await o_c.stat(e);
    return t;
  } catch {
    return;
  }
}
function vfm(e) {
  let t = s_c.homedir();
  if (e === t) return "~";
  if (e.startsWith(t + Oen.sep)) return "~" + e.slice(t.length);
  return e;
}
var o_c,
  s_c,
  Oen,
  Tfm = 604800000,
  D6o = 1000;