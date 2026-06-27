// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XHo
// matched 2.1.88 source: src/services/compact/compact.ts
// class=new  jaccard=0.0157  score=0.1017  fileCov=0.0182
// note: nearest: src/services/compact/compact.ts (0.0157); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var XHo = E(() => {
  fn();
  DD();
  QO();
  Ao();
  ACn();
});
function $Jp(e) {
  return /\[1m\]$/i.test(e) ? e : `${e}[1m]`;
}
function aQa() {
  let {
      goBack: e,
      goNext: t,
      updateWizardData: n,
      wizardData: r
    } = Eu(),
    o = wF.useMemo(() => YHo(), []),
    s = wF.useMemo(() => Object.fromEntries(oMe.map(h => [h, process.env[MJp[h]]?.trim() || void 0])), []),
    [i, a] = wF.useState(() => Object.fromEntries(oMe.map(h => [h, s[h] ?? o[h]]))),
    [l, c] = wF.useState({
      sonnet: "pending",
      opus: "pending",
      haiku: "pending",
      fable: "pending"
    }),
    [u, d] = wF.useState("summary");
  if (wF.useEffect(() => {
    let h = false;
    return c(y => ({
      ...y,
      sonnet: "pending"
    })), q9e(r, i.sonnet).then(y => {
      if (!h) c(b => ({
        ...b,
        sonnet: y
      }));
    }), () => {
      h = true;
    };
  }, [i.sonnet]), wF.useEffect(() => {
    let h = false;
    return c(y => ({
      ...y,
      opus: "pending"
    })), q9e(r, i.opus).then(y => {
      if (!h) c(b => ({
        ...b,
        opus: y
      }));
    }), () => {
      h = true;
    };
  }, [i.opus]), wF.useEffect(() => {
    let h = false;
    return c(y => ({
      ...y,
      haiku: "pending"
    })), q9e(r, i.haiku).then(y => {
      if (!h) c(b => ({
        ...b,
        haiku: y
      }));
    }), () => {
      h = true;
    };
  }, [i.haiku]), wF.useEffect(() => {
    let h = false;
    return c(y => ({
      ...y,
      fable: "pending"
    })), q9e(r, i.fable).then(y => {
      if (!h) c(b => ({
        ...b,
        fable: y
      }));
    }), () => {
      h = true;
    };
  }, [i.fable]), u !== "summary") {
    let h = u.picking;
    return ey.jsx(OJp, {
      tier: h,
      wizardData: r,
      fallback: o[h],
      current: i[h],
      existingPin: s[h],
      onPick: y => {
        a(S => ({
          ...S,
          [h]: y
        }));
        let b = oMe.indexOf(h),
          _ = oMe[b + 1];
        d(_ ? {
          picking: _
        } : "summary");
      },
      onCancel: () => d("summary")
    }, h);
  }
  let f = oMe.every(h => l[h] !== "pending") && oMe.some(h => l[h] !== "pending" && l[h].ok),
    m = f && oMe.some(h => {
      let y = l[h];
      return y !== "pending" && y.ok && I9(i[h]);
    }),
    g = h => {
      if (h === "manual") {
        d({
          picking: "sonnet"
        });
        return;
      }
      if (h === "pin" || h === "pin1m") {
        let y = b => {
          let _ = l[b];
          if (_ === "pending" || !_.ok) return;
          let S = i[b];
          return h === "pin1m" && I9(S) ? $Jp(S) : S;
        };
        n({
          pinSonnet: y("sonnet"),
          pinOpus: y("opus"),
          pinHaiku: y("haiku"),
          pinFable: y("fable")
        });
      } else n({
        pinSonnet: void 0,
        pinOpus: void 0,
        pinHaiku: void 0,
        pinFable: void 0
      });
      t();
    };
  return ey.jsx(Pc, {
    subtitle: "Pin model versions",
    children: ey.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [ey.jsx(w, {
        children: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if it is not yet available in your project \u2014 Claude Code will fail to connect to Vertex AI until you enable the model or pin to one you have."
      }), ey.jsxs(U, {
        flexDirection: "column",
        children: [ey.jsx(w, {
          dimColor: true,
          children: "Each candidate is tested with a one-token request:"
        }), oMe.map(h => ey.jsx(BJp, {
          label: JHo[h],
          modelId: i[h],
          state: l[h]
        }, h))]
      }), ey.jsx(Sr, {
        options: [...(f ? [{
          label: "Pin the working models",
          value: "pin"
        }] : []), ...(m ? [{
          label: "Pin the working models with 1M context",
          value: "pin1m"
        }] : []), {
          label: "Choose different models\u2026",
          value: "manual"
        }, {
          label: "Skip \u2014 use Claude Code defaults (auto-updates)",
          value: "skip"
        }],
        onChange: g,
        onCancel: e
      })]
    })
  });
}
function OJp({
  tier: e,
  wizardData: t,
  fallback: n,
  current: r,
  existingPin: o,
  onPick: s,
  onCancel: i
}) {
  let a = wF.useMemo(() => {
      let m = rQa(e);
      for (let g of [n, r, o]) if (g && !m.includes(g)) m.push(g);
      return m;
    }, [e, n, r, o]),
    [l, c] = wF.useState(() => Object.fromEntries(a.map(m => [m, "pending"])));
  wF.useEffect(() => {
    let m = false;
    for (let g of a) q9e(t, g).then(h => {
      if (!m) c(y => ({
        ...y,
        [g]: h
      }));
    });
    return () => {
      m = true;
    };
  }, []);
  let u = a.every(m => l[m] !== "pending"),
    d = m => {
      let g = l[m];
      return g !== void 0 && g !== "pending" && g.ok;
    },
    p = wF.useMemo(() => {
      if (!u) return a;
      return [...a].sort((m, g) => (d(m) ? 0 : 1) - (d(g) ? 0 : 1));
    }, [a, l, u]),
    f = p.map(m => ({
      value: m,
      label: ey.jsx(NJp, {
        id: m,
        state: l[m] ?? "pending",
        suffix: m === o ? "(currently pinned)" : m === n ? "(built-in default)" : m === r ? "(selected)" : void 0
      })
    }));
  return ey.jsx(Pc, {
    subtitle: `Pin ${JHo[e]} model`,
    children: ey.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [ey.jsxs(w, {
        dimColor: true,
        children: ["Available ", JHo[e], " versions on Vertex AI \xB7 each tested with a one-token request."]
      }), ey.jsx(Sr, {
        options: f,
        defaultValue: u ? d(r) ? r : d(n) ? n : p.find(d) : r,
        onChange: s,
        onCancel: i
      }, u ? "settled" : "pending")]
    })
  });
}
function NJp(e) {
  let t = QHo.c(19),
    {
      id: n,
      state: r,
      suffix: o
    } = e;
  if (r === "pending") {
    let u;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) u = ey.jsx(Hs, {
      status: "pending",
      withSpace: true
    }), t[0] = u;else u = t[0];
    let d;
    if (t[1] !== o) d = o && ey.jsxs(w, {
      dimColor: true,
      children: [" ", o]
    }), t[1] = o, t[2] = d;else d = t[2];
    let p;
    if (t[3] !== n || t[4] !== d) p = ey.jsxs(w, {
      children: [u, n, d]
    }), t[3] = n, t[4] = d, t[5] = p;else p = t[5];
    return p;
  }
  if (r.ok) {
    let u;
    if (t[6] === Symbol.for("react.memo_cache_sentinel")) u = ey.jsx(Hs, {
      status: "success",
      withSpace: true
    }), t[6] = u;else u = t[6];
    let d;
    if (t[7] !== o) d = o && ey.jsxs(w, {
      dimColor: true,
      children: [" ", o]
    }), t[7] = o, t[8] = d;else d = t[8];
    let p;
    if (t[9] !== n || t[10] !== d) p = ey.jsxs(w, {
      children: [u, n, d]
    }), t[9] = n, t[10] = d, t[11] = p;else p = t[11];
    return p;
  }
  let s;
  if (t[12] === Symbol.for("react.memo_cache_sentinel")) s = ey.jsx(Hs, {
    status: "error",
    withSpace: true
  }), t[12] = s;else s = t[12];
  let i = o && ` ${o}`,
    a = iQa[r.reason],
    l;
  if (t[13] !== a) l = ey.jsxs(w, {
    color: "error",
    children: ["(", a, ")"]
  }), t[13] = a, t[14] = l;else l = t[14];
  let c;
  if (t[15] !== n || t[16] !== i || t[17] !== l) c = ey.jsxs(w, {
    dimColor: true,
    children: [s, n, i, " ", l]
  }), t[15] = n, t[16] = i, t[17] = l, t[18] = c;else c = t[18];
  return c;
}
function BJp(e) {
  let t = QHo.c(26),
    {
      label: n,
      modelId: r,
      state: o
    } = e;
  if (o === "pending") {
    let d, p;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) d = ey.jsx(w, {
      children: "  "
    }), p = ey.jsx(Vu, {}), t[0] = d, t[1] = p;else d = t[0], p = t[1];
    let f;
    if (t[2] !== n) f = n.padEnd(7), t[2] = n, t[3] = f;else f = t[3];
    let m;
    if (t[4] !== r || t[5] !== f) m = ey.jsxs(U, {
      children: [d, p, ey.jsxs(w, {
        children: [" ", f, "\u2192 ", r]
      })]
    }), t[4] = r, t[5] = f, t[6] = m;else m = t[6];
    return m;
  }
  if (o.ok) {
    let d;
    if (t[7] === Symbol.for("react.memo_cache_sentinel")) d = ey.jsx(Hs, {
      status: "success",
      withSpace: true
    }), t[7] = d;else d = t[7];
    let p;
    if (t[8] !== n) p = n.padEnd(7), t[8] = n, t[9] = p;else p = t[9];
    let f;
    if (t[10] !== r) f = ey.jsx(w, {
      color: "success",
      children: r
    }), t[10] = r, t[11] = f;else f = t[11];
    let m;
    if (t[12] !== p || t[13] !== f) m = ey.jsxs(w, {
      children: ["  ", d, p, "\u2192 ", f]
    }), t[12] = p, t[13] = f, t[14] = m;else m = t[14];
    return m;
  }
  let s;
  if (t[15] === Symbol.for("react.memo_cache_sentinel")) s = ey.jsx(Hs, {
    status: "error",
    withSpace: true
  }), t[15] = s;else s = t[15];
  let i;
  if (t[16] !== n) i = n.padEnd(7), t[16] = n, t[17] = i;else i = t[17];
  let a;
  if (t[18] !== r) a = ey.jsx(w, {
    dimColor: true,
    children: r
  }), t[18] = r, t[19] = a;else a = t[19];
  let l = iQa[o.reason],
    c;
  if (t[20] !== l) c = ey.jsxs(w, {
    color: "error",
    children: ["(", l, ")"]
  }), t[20] = l, t[21] = c;else c = t[21];
  let u;
  if (t[22] !== i || t[23] !== a || t[24] !== c) u = ey.jsxs(w, {
    children: ["  ", s, i, "\u2192 ", a, " ", c]
  }), t[22] = i, t[23] = a, t[24] = c, t[25] = u;else u = t[25];
  return u;
}
var QHo, wF, ey, oMe, JHo, MJp, iQa;