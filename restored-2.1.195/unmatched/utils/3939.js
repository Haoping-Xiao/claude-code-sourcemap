// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module jHo
// matched 2.1.88 source: src/services/compact/compact.ts
// class=new  jaccard=0.0157  score=0.1017  fileCov=0.0182
// note: nearest: src/services/compact/compact.ts (0.0157); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var jHo = E(() => {
  DD();
  rle();
  QO();
  Ao();
  Mh();
});
function fJp(e) {
  return /\[1m\]$/i.test(e) ? e : `${e}[1m]`;
}
function LJa() {
  let {
      goBack: e,
      goNext: t,
      updateWizardData: n,
      wizardData: r
    } = Eu(),
    o = r.discoveredProfiles ?? [],
    s = vF.useMemo(() => FHo(r.region), [r.region]),
    i = vF.useMemo(() => Object.fromEntries(tMe.map(_ => [_, process.env[pJp[_]]?.trim() || void 0])), []),
    a = nle(r.region),
    l = () => Object.fromEntries(tMe.map(_ => [_, i[_] ?? G2e(o, s[_].needle, a) ?? s[_].fallback])),
    [c, u] = vF.useState(l),
    [d, p] = vF.useState({
      sonnet: "pending",
      opus: "pending",
      haiku: "pending",
      fable: "pending"
    }),
    [f, m] = vF.useState("summary");
  if (vF.useEffect(() => {
    let _ = false;
    return p(S => ({
      ...S,
      sonnet: "pending"
    })), G9e(r, c.sonnet).then(S => {
      if (!_) p(A => ({
        ...A,
        sonnet: S
      }));
    }), () => {
      _ = true;
    };
  }, [c.sonnet]), vF.useEffect(() => {
    let _ = false;
    return p(S => ({
      ...S,
      opus: "pending"
    })), G9e(r, c.opus).then(S => {
      if (!_) p(A => ({
        ...A,
        opus: S
      }));
    }), () => {
      _ = true;
    };
  }, [c.opus]), vF.useEffect(() => {
    let _ = false;
    return p(S => ({
      ...S,
      haiku: "pending"
    })), G9e(r, c.haiku).then(S => {
      if (!_) p(A => ({
        ...A,
        haiku: S
      }));
    }), () => {
      _ = true;
    };
  }, [c.haiku]), vF.useEffect(() => {
    let _ = false;
    return p(S => ({
      ...S,
      fable: "pending"
    })), G9e(r, c.fable).then(S => {
      if (!_) p(A => ({
        ...A,
        fable: S
      }));
    }), () => {
      _ = true;
    };
  }, [c.fable]), f !== "summary") {
    let _ = f.picking;
    return Zh.jsx(mJp, {
      tier: _,
      wizardData: r,
      profiles: o,
      fallback: s[_].fallback,
      current: c[_],
      existingPin: i[_],
      onPick: S => {
        u(C => ({
          ...C,
          [_]: S
        }));
        let A = tMe.indexOf(_),
          v = tMe[A + 1];
        m(v ? {
          picking: v
        } : "summary");
      },
      onCancel: () => m("summary")
    }, _);
  }
  let h = tMe.every(_ => d[_] !== "pending") && tMe.some(_ => d[_] !== "pending" && d[_].ok),
    y = h && tMe.some(_ => {
      let S = d[_];
      return S !== "pending" && S.ok && I9(c[_]);
    }),
    b = _ => {
      if (_ === "manual") {
        m({
          picking: "sonnet"
        });
        return;
      }
      if (_ === "pin" || _ === "pin1m") {
        let S = A => {
          let v = d[A];
          if (v === "pending" || !v.ok) return;
          let C = c[A];
          return _ === "pin1m" && I9(C) ? fJp(C) : C;
        };
        n({
          pinSonnet: S("sonnet"),
          pinOpus: S("opus"),
          pinHaiku: S("haiku"),
          pinFable: S("fable")
        });
      } else n({
        pinSonnet: void 0,
        pinOpus: void 0,
        pinHaiku: void 0,
        pinFable: void 0
      });
      t();
    };
  return Zh.jsx(Pc, {
    subtitle: "Pin model versions",
    children: Zh.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Zh.jsx(w, {
        children: "Without pinning, Claude Code uses its built-in defaults. When a new model ships, your install will try to call it even if your account has not yet enabled it \u2014 Claude Code will fail to connect to Bedrock until you enable the model or pin to one you have."
      }), Zh.jsxs(U, {
        flexDirection: "column",
        children: [Zh.jsx(w, {
          dimColor: true,
          children: "Each candidate is tested with a one-token request:"
        }), tMe.map(_ => Zh.jsx(hJp, {
          label: z9n[_],
          modelId: c[_],
          state: d[_]
        }, _))]
      }), Zh.jsx(Sr, {
        options: [...(h ? [{
          label: "Pin the working models",
          value: "pin"
        }] : []), ...(y ? [{
          label: "Pin the working models with 1M context",
          value: "pin1m"
        }] : []), {
          label: "Choose different models\u2026",
          value: "manual"
        }, {
          label: "Skip \u2014 use Claude Code defaults (auto-updates)",
          value: "skip"
        }],
        onChange: b,
        onCancel: e
      })]
    })
  });
}
function mJp({
  tier: e,
  wizardData: t,
  profiles: n,
  fallback: r,
  current: o,
  existingPin: s,
  onPick: i,
  onCancel: a
}) {
  let l = vF.useMemo(() => {
      let h = n.filter(y => y.toLowerCase().includes(e)).sort().reverse();
      for (let y of [r, o, s]) if (y && !h.includes(y)) h.push(y);
      return h;
    }, [n, e, r, o, s]),
    [c, u] = vF.useState(() => Object.fromEntries(l.map(h => [h, "pending"])));
  vF.useEffect(() => {
    let h = false;
    for (let y of l) G9e(t, y).then(b => {
      if (!h) u(_ => ({
        ..._,
        [y]: b
      }));
    });
    return () => {
      h = true;
    };
  }, []);
  let d = l.every(h => c[h] !== "pending"),
    p = h => {
      let y = c[h];
      return y !== void 0 && y !== "pending" && y.ok;
    },
    f = vF.useMemo(() => {
      if (!d) return l;
      return [...l].sort((h, y) => (p(h) ? 0 : 1) - (p(y) ? 0 : 1));
    }, [l, c, d]),
    m = f.map(h => ({
      value: h,
      label: Zh.jsx(gJp, {
        id: h,
        state: c[h] ?? "pending",
        suffix: h === s ? "(currently pinned)" : h === r ? "(built-in default)" : h === o ? "(selected)" : void 0
      })
    })),
    g = On(n, h => h.toLowerCase().includes(e));
  return Zh.jsx(Pc, {
    subtitle: `Pin ${z9n[e]} model`,
    children: Zh.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [Zh.jsx(w, {
        dimColor: true,
        children: g > 0 ? `${g} ${z9n[e]} ${bn(g, "profile")} in your account \xB7 each tested with a one-token request.` : `No ${z9n[e]} profiles found in your account.`
      }), Zh.jsx(Sr, {
        options: m,
        defaultValue: d ? f.find(p) : o,
        onChange: i,
        onCancel: a
      }, d ? "settled" : "pending")]
    })
  });
}
function gJp(e) {
  let t = GHo.c(19),
    {
      id: n,
      state: r,
      suffix: o
    } = e;
  if (r === "pending") {
    let u;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) u = Zh.jsx(Hs, {
      status: "pending",
      withSpace: true
    }), t[0] = u;else u = t[0];
    let d;
    if (t[1] !== o) d = o && Zh.jsxs(w, {
      dimColor: true,
      children: [" ", o]
    }), t[1] = o, t[2] = d;else d = t[2];
    let p;
    if (t[3] !== n || t[4] !== d) p = Zh.jsxs(w, {
      children: [u, n, d]
    }), t[3] = n, t[4] = d, t[5] = p;else p = t[5];
    return p;
  }
  if (r.ok) {
    let u;
    if (t[6] === Symbol.for("react.memo_cache_sentinel")) u = Zh.jsx(Hs, {
      status: "success",
      withSpace: true
    }), t[6] = u;else u = t[6];
    let d;
    if (t[7] !== o) d = o && Zh.jsxs(w, {
      dimColor: true,
      children: [" ", o]
    }), t[7] = o, t[8] = d;else d = t[8];
    let p;
    if (t[9] !== n || t[10] !== d) p = Zh.jsxs(w, {
      children: [u, n, d]
    }), t[9] = n, t[10] = d, t[11] = p;else p = t[11];
    return p;
  }
  let s;
  if (t[12] === Symbol.for("react.memo_cache_sentinel")) s = Zh.jsx(Hs, {
    status: "error",
    withSpace: true
  }), t[12] = s;else s = t[12];
  let i = o && ` ${o}`,
    a = RJa[r.reason],
    l;
  if (t[13] !== a) l = Zh.jsxs(w, {
    color: "error",
    children: ["(", a, ")"]
  }), t[13] = a, t[14] = l;else l = t[14];
  let c;
  if (t[15] !== n || t[16] !== i || t[17] !== l) c = Zh.jsxs(w, {
    dimColor: true,
    children: [s, n, i, " ", l]
  }), t[15] = n, t[16] = i, t[17] = l, t[18] = c;else c = t[18];
  return c;
}
function hJp(e) {
  let t = GHo.c(26),
    {
      label: n,
      modelId: r,
      state: o
    } = e;
  if (o === "pending") {
    let d, p;
    if (t[0] === Symbol.for("react.memo_cache_sentinel")) d = Zh.jsx(w, {
      children: "  "
    }), p = Zh.jsx(Vu, {}), t[0] = d, t[1] = p;else d = t[0], p = t[1];
    let f;
    if (t[2] !== n) f = n.padEnd(7), t[2] = n, t[3] = f;else f = t[3];
    let m;
    if (t[4] !== r || t[5] !== f) m = Zh.jsxs(U, {
      children: [d, p, Zh.jsxs(w, {
        children: [" ", f, "\u2192 ", r]
      })]
    }), t[4] = r, t[5] = f, t[6] = m;else m = t[6];
    return m;
  }
  if (o.ok) {
    let d;
    if (t[7] === Symbol.for("react.memo_cache_sentinel")) d = Zh.jsx(Hs, {
      status: "success",
      withSpace: true
    }), t[7] = d;else d = t[7];
    let p;
    if (t[8] !== n) p = n.padEnd(7), t[8] = n, t[9] = p;else p = t[9];
    let f;
    if (t[10] !== r) f = Zh.jsx(w, {
      color: "success",
      children: r
    }), t[10] = r, t[11] = f;else f = t[11];
    let m;
    if (t[12] !== p || t[13] !== f) m = Zh.jsxs(w, {
      children: ["  ", d, p, "\u2192 ", f]
    }), t[12] = p, t[13] = f, t[14] = m;else m = t[14];
    return m;
  }
  let s;
  if (t[15] === Symbol.for("react.memo_cache_sentinel")) s = Zh.jsx(Hs, {
    status: "error",
    withSpace: true
  }), t[15] = s;else s = t[15];
  let i;
  if (t[16] !== n) i = n.padEnd(7), t[16] = n, t[17] = i;else i = t[17];
  let a;
  if (t[18] !== r) a = Zh.jsx(w, {
    dimColor: true,
    children: r
  }), t[18] = r, t[19] = a;else a = t[19];
  let l = RJa[o.reason],
    c;
  if (t[20] !== l) c = Zh.jsxs(w, {
    color: "error",
    children: ["(", l, ")"]
  }), t[20] = l, t[21] = c;else c = t[21];
  let u;
  if (t[22] !== i || t[23] !== a || t[24] !== c) u = Zh.jsxs(w, {
    children: ["  ", s, i, "\u2192 ", a, " ", c]
  }), t[22] = i, t[23] = a, t[24] = c, t[25] = u;else u = t[25];
  return u;
}
var GHo, vF, Zh, tMe, z9n, pJp, RJa;