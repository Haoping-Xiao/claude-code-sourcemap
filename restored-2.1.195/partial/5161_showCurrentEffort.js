// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module wQl
// matched 2.1.88 source: src/commands/effort/effort.tsx
// class=partial  jaccard=0.1945  score=0.2154  fileCov=0.668
// note: low-confidence suggestion: src/commands/effort/effort.tsx; 9 renamed
// ─────────────────────────────────────────────────────────────────────────
var wQl = E(() => {
  fh();
  fn();
  J6f = {
    type: "prompt",
    description: "Set up Claude Code's status line UI",
    contentLength: 0,
    aliases: [],
    name: "statusline",
    progressMessage: "setting up statusLine",
    allowedTools: [ss, "Read(~/**)", "Edit(~/.claude/settings.json)"],
    source: "builtin",
    disableNonInteractive: !0,
    disableModelInvocation: !0,
    requires: {
      workspace: !0
    },
    async getPromptForCommand(e) {
      if (Tl()) return [{
        type: "text",
        text: `Tell the user: /statusline is unavailable in safe mode. The setup flow saves the status line to ~/.claude/settings.json, but safe mode only displays the managed (policy) status line, so the result would never render. To set up a status line, ${qH()} and run /statusline again.

Do not run the statusline-setup agent and do not edit any settings files. Simply inform the user.`
      }];
      let t = e.trim() || "Configure my statusLine from my shell PS1 configuration";
      return [{
        type: "text",
        text: `Create an ${ss} with subagent_type "statusline-setup" and the prompt "${t}"`
      }];
    }
  }, vQl = J6f;
});
var MQl = {};
_t(MQl, {
  showCurrentEffort: () => showCurrentEffort,
  rippleLevel: () => rippleLevel,
  rippleDistance: () => rippleDistance,
  getSliderGeometry: () => getSliderGeometry,
  getEffortHelpText: () => getEffortHelpText,
  executeEffort: () => executeEffort,
  call: () => call,
  UltraRippleText: () => UltraRippleText,
  RIPPLE_RAMP: () => RIPPLE_RAMP
});
function getEffortHelpText() {
  let e = As(),
    t = t8(e),
    n = x3e(e);
  return `Usage: /effort [${n.join("|")}${t ? "|ultracode" : ""}|auto]

Effort levels:
` + n.map(r => `- ${r}: ${Q6f[r]}
`).join("") + (t ? `- ultracode: xhigh + dynamic workflow orchestration (this session only)
` : "") + "- auto: Use the default effort level for your model";
}
function yir(e) {
  let t = x3e(e),
    n = t8(e) ? ", ultracode" : "";
  return `${t.join(", ")}${n}, auto`;
}
function Z6f(e, t) {
  let n = e.toLowerCase();
  if (n === "auto" || n === "unset") return {
    value: void 0
  };
  if (n === "ultracode" && t8(t)) return {
    value: "xhigh"
  };
  let r = zst(e);
  return r ? {
    value: r
  } : null;
}
function c3o(e, t = !1) {
  if (!Ju()) return null;
  if (!NA()) return " (applied locally \u2014 this remote transport can\u2019t change server effort)";
  return Ju()?.sendControlRequest({
    subtype: "apply_flag_settings",
    settings: {
      effortLevel: e ?? null,
      ultracode: t
    }
  }).catch(ke), null;
}
function ezf(e) {
  let t = Tke(e);
  if (NA() && t === void 0) return {
    message: `${e} is session-scoped and won't reach the remote process. Use low, medium, high, or xhigh instead.`
  };
  let n = c3o(t),
    r = wNt(e);
  if (r) return {
    message: `Failed to set effort level: ${r.message}`
  };
  G("tengu_effort_command", {
    effort: e
  });
  let o = Ju() ? void 0 : k3e();
  if (o !== void 0 && o !== e) {
    let c = process.env.CLAUDE_CODE_EFFORT_LEVEL;
    if (t === void 0) return {
      message: `Not applied: CLAUDE_CODE_EFFORT_LEVEL=${c} overrides effort this session, and ${dce(e)} is session-only (nothing saved)`,
      effortUpdate: {
        value: e,
        ultracode: !1
      }
    };
    return {
      message: `CLAUDE_CODE_EFFORT_LEVEL=${c} overrides this session \u2014 clear it and ${dce(e)} takes over`,
      effortUpdate: {
        value: e,
        ultracode: !1
      }
    };
  }
  let s = bKr(e),
    i = t !== void 0 ? " (saved as your default for new sessions)" : " (this session only)",
    a = Gkn(e, As()),
    l = a ? `
${a}` : "";
  return {
    message: `Set effort level to ${dce(e)}${i}: ${s}${n ?? ""}${l}`,
    effortUpdate: {
      value: e,
      ultracode: !1
    }
  };
}
function showCurrentEffort(e, t, n) {
  if (Xte(t, e, n)) return {
    message: "Current effort level: ultracode (xhigh + dynamic workflow orchestration; this session only)"
  };
  let r = Ju() ? void 0 : k3e(),
    o = R3e(t) ? void 0 : e,
    s = r === null ? void 0 : r ?? o;
  if (s === void 0) {
    let a = RM(t, e);
    return {
      message: `Effort level: auto (currently ${dce(a)})`
    };
  }
  let i = bKr(s);
  return {
    message: `Current effort level: ${dce(s)} (${i})`
  };
}
function tzf() {
  let e = c3o(void 0),
    t = wNt(void 0);
  if (t) return {
    message: `Failed to set effort level: ${t.message}`
  };
  G("tengu_effort_command", {
    effort: We("auto")
  });
  let n = Ju() ? void 0 : k3e();
  if (n !== void 0 && n !== null) return {
    message: `Cleared effort from settings, but CLAUDE_CODE_EFFORT_LEVEL=${process.env.CLAUDE_CODE_EFFORT_LEVEL} still controls this session`,
    effortUpdate: {
      value: void 0,
      ultracode: !1
    }
  };
  return {
    message: `Effort level set to auto${e ?? ""}`,
    effortUpdate: {
      value: void 0,
      ultracode: !1
    }
  };
}
function nzf() {
  let e = As();
  if (!t8()) return {
    message: `Ultracode needs dynamic workflows enabled (see /config). Valid options are: ${yir(e)}`
  };
  if (Yte(e) && !I3e("xhigh", e)) return {
    message: `Ultracode runs at xhigh effort, which is restricted by your organization for ${e}. Valid options are: ${yir(e)}`
  };
  if (!t8(e)) return {
    message: `Ultracode runs at xhigh effort, which ${e} doesn't support \u2014 switch to an xhigh-capable model (${jkn}). Valid options are: ${yir(e)}`
  };
  let t = c3o("xhigh", !0);
  Dj(), G("tengu_effort_command", {
    effort: We("ultracode")
  });
  let n = Ju() ? void 0 : k3e();
  if (n !== void 0 && n !== "xhigh") return {
    message: `CLAUDE_CODE_EFFORT_LEVEL=${process.env.CLAUDE_CODE_EFFORT_LEVEL} overrides effort this session \u2014 clear it and ultracode takes over`,
    effortUpdate: {
      value: "xhigh",
      ultracode: !0
    }
  };
  return {
    message: `Set effort level to ultracode (this session only): xhigh + dynamic workflow orchestration${t ?? ""}`,
    effortUpdate: {
      value: "xhigh",
      ultracode: !0
    }
  };
}
function executeEffort(e) {
  let t = e.toLowerCase();
  if (t === "auto" || t === "unset") return tzf();
  if (t === "ultracode") return nzf();
  let n = zst(e);
  if (!n) return {
    message: `Invalid argument: ${e}. Valid options are: ${yir(As())}`
  };
  return ezf(n);
}
function rzf(e) {
  let {
      onDone: t
    } = e,
    n = Ht(szf),
    r = Ht(ozf),
    o = kH(),
    {
      message: s
    } = showCurrentEffort(n, o, r);
  return t(s), null;
}
function ozf(e) {
  return e.ultracode;
}
function szf(e) {
  return e.effortValue;
}
function a3o(e, t, n) {
  let r = executeEffort(e);
  if (r.effortUpdate) {
    let {
      value: o,
      ultracode: s = !1
    } = r.effortUpdate;
    t(i => {
      if (i.effortValue === o && (i.ultracode ?? !1) === s) return i;
      return {
        ...i,
        effortValue: o,
        ultracode: s
      };
    });
  }
  n(r.message);
}
function izf(e) {
  let t = cHt.c(23),
    {
      args: n,
      hasConversationMessages: r,
      onDone: o
    } = e,
    s = Ht(lzf),
    i = Ht(azf),
    a = kH(),
    l = Ho(),
    c;
  if (t[0] !== n || t[1] !== a) c = Z6f(n, a), t[0] = n, t[1] = a, t[2] = c;else c = t[2];
  let u = c,
    d;
  if (t[3] !== i || t[4] !== s || t[5] !== r || t[6] !== a || t[7] !== u) d = () => u !== null && vNt(u.value, s, a, i, r), t[3] = i, t[4] = s, t[5] = r, t[6] = a, t[7] = u, t[8] = d;else d = t[8];
  let [p, f] = uZ.useState(d),
    m,
    g;
  if (t[9] !== n || t[10] !== o || t[11] !== p || t[12] !== l || t[13] !== u) m = () => {
    if (p && u !== null) return;
    a3o(n, l, o);
  }, g = [p, u, n, l, o], t[9] = n, t[10] = o, t[11] = p, t[12] = l, t[13] = u, t[14] = m, t[15] = g;else m = t[14], g = t[15];
  if (uZ.useEffect(m, g), p && u !== null) {
    let h;
    if (t[16] === Symbol.for("react.memo_cache_sentinel")) h = () => f(!1), t[16] = h;else h = t[16];
    let y;
    if (t[17] !== s || t[18] !== o) y = () => o(`Kept effort level as ${s !== void 0 ? dce(s) : "auto"}`), t[17] = s, t[18] = o, t[19] = y;else y = t[19];
    let b;
    if (t[20] !== y || t[21] !== u.value) b = Ga.jsx(lHt, {
      kind: "effort",
      model: null,
      effort: u.value,
      onConfirm: h,
      onCancel: y
    }), t[20] = y, t[21] = u.value, t[22] = b;else b = t[22];
    return b;
  }
  return null;
}
function azf(e) {
  return e.cacheMissAckedAtOutputTokens;
}
function lzf(e) {
  return e.effortValue;
}
function gzf(e) {
  let t = Math.min(Math.max(e, 1), i3o.length),
    n = i3o.slice(0, t),
    r = pzf.slice(0, t - 1),
    o = dzf.slice(0, t);
  if (t === i3o.length) return {
    levels: n,
    width: czf,
    trianglePositions: o,
    spacers: r
  };
  let s = l3o(n, r),
    i = Math.max(s[t - 1] + n[t - 1].label.length, uzf);
  return {
    levels: n,
    width: i,
    trianglePositions: o,
    spacers: r
  };
}
function l3o(e, t) {
  return e.map((n, r) => e.slice(0, r).reduce((o, s, i) => o + s.label.length + t[i], 0));
}
function getSliderGeometry(e) {
  let t = e ? Vst(e) : null,
    n = gzf(t ? xv.indexOf(t) + 1 : xv.length),
    r = e && H1i(e) ? mzf : void 0;
  if (t8(e)) {
    let a = n.width + 3,
      l = 17,
      c = [...n.levels, {
        value: "ultracode",
        label: "ultracode",
        color: "violet-ripple"
      }],
      u = a + Math.floor(4),
      d = [...n.spacers, u - n.width];
    return {
      levels: c,
      width: a + 17,
      trianglePositions: [...n.trianglePositions, a + Math.floor(8.5)],
      labelStarts: l3o(c, d),
      spacers: d,
      trackChars: "\u2500".repeat(n.width + 1) + "\u2506" + "\u2500".repeat(18),
      accentStart: n.width + 2,
      sublabel: {
        text: "xhigh + workflows",
        start: a
      },
      capNote: r
    };
  }
  return {
    levels: n.levels,
    width: n.width,
    trianglePositions: n.trianglePositions,
    labelStarts: l3o(n.levels, n.spacers),
    spacers: n.spacers,
    trackChars: "\u2500".repeat(n.width),
    capNote: r
  };
}
function hzf(e) {
  let t = cHt.c(13),
    {
      level: n,
      selected: r
    } = e,
    o = n.label;
  if (!r) {
    if (n.color === "violet-ripple") {
      let a;
      if (t[0] !== o) a = Ga.jsx(w, {
        color: _ir,
        children: o
      }), t[0] = o, t[1] = a;else a = t[1];
      return a;
    }
    let i;
    if (t[2] !== o) i = Ga.jsx(w, {
      dimColor: !0,
      children: o
    }), t[2] = o, t[3] = i;else i = t[3];
    return i;
  }
  if (n.color === "violet-ripple") {
    let i;
    if (t[4] !== o) i = Ga.jsx(w, {
      bold: !0,
      backgroundColor: d3o,
      color: u3o,
      children: o
    }), t[4] = o, t[5] = i;else i = t[5];
    return i;
  }
  if (n.color === "rainbow-animated") {
    let i;
    if (t[6] !== o) i = Ga.jsx(yzf, {
      text: o
    }), t[6] = o, t[7] = i;else i = t[7];
    return i;
  }
  if (n.color === "autoAccept-shimmer") {
    let i;
    if (t[8] !== o) i = Ga.jsx(Czf, {
      text: o
    }), t[8] = o, t[9] = i;else i = t[9];
    return i;
  }
  let s;
  if (t[10] !== n.color || t[11] !== o) s = Ga.jsx(w, {
    bold: !0,
    color: n.color,
    children: o
  }), t[10] = n.color, t[11] = o, t[12] = s;else s = t[12];
  return s;
}
function yzf(e) {
  let t = cHt.c(5),
    {
      text: n
    } = e,
    r = Yce(),
    [, o] = Kf(r ? null : 100),
    s = Math.floor(o / 100),
    i;
  if (t[0] !== n) i = [...n], t[0] = n, t[1] = i;else i = t[1];
  let a;
  if (t[2] !== s || t[3] !== i) a = Ga.jsx(w, {
    bold: !0,
    children: i.map((l, c) => Ga.jsx(w, {
      color: q9(c + s),
      children: l
    }, c))
  }), t[2] = s, t[3] = i, t[4] = a;else a = t[4];
  return a;
}
function rippleDistance(e, t, n) {
  let r = e - n,
    o = (t - FJt) * 2;
  return Math.sqrt(r * r + o * o);
}
function rippleLevel(e, t) {
  if (e > t.travel) return null;
  let n = ((e - t.travel) % hir + hir) % hir,
    r = (1 + Math.cos(2 * Math.PI * n / hir)) / 2;
  return Math.min(RIPPLE_RAMP.length - 1, Math.round(r * (RIPPLE_RAMP.length - 1)));
}
function UltraRippleText(e) {
  let t = cHt.c(10),
    {
      text: n,
      col: r,
      row: o,
      ripple: s,
      dimColor: i,
      bold: a,
      coveredColor: l
    } = e,
    c;
  if (t[0] !== r || t[1] !== s || t[2] !== o || t[3] !== n) {
    c = [];
    let d = 0;
    for (let p of n) {
      let f = rippleLevel(rippleDistance(r + d, o, s.originCol), s),
        m = c.at(-1);
      if (m && m.level === f) m.text = m.text + p;else c.push({
        text: p,
        level: f
      });
      d++;
    }
    t[0] = r, t[1] = s, t[2] = o, t[3] = n, t[4] = c;
  } else c = t[4];
  let u;
  if (t[5] !== a || t[6] !== l || t[7] !== i || t[8] !== c) u = Ga.jsx(w, {
    children: c.map((d, p) => {
      if (d.level === null) return Ga.jsx(w, {
        dimColor: i,
        bold: a,
        children: d.text
      }, p);
      return Ga.jsx(w, {
        backgroundColor: RIPPLE_RAMP[d.level],
        color: l ?? u3o,
        bold: a,
        children: d.text
      }, p);
    })
  }), t[5] = a, t[6] = l, t[7] = i, t[8] = c, t[9] = u;else u = t[9];
  return u;
}
function Czf(e) {
  let t = cHt.c(5),
    {
      text: n
    } = e,
    r = Yce(),
    [, o] = Kf(r ? null : 100),
    s = n.length + 4,
    i = r ? cPn : Math.floor(o / 100) % s,
    a;
  if (t[0] !== n) a = [...n], t[0] = n, t[1] = a;else a = t[1];
  let l;
  if (t[2] !== i || t[3] !== a) l = Ga.jsx(w, {
    bold: !0,
    children: a.map((c, u) => {
      let d = u === i,
        p = u === i - 1 || u === i + 1;
      return Ga.jsx(w, {
        color: d ? LQl : "autoAccept",
        bold: d || p,
        children: c
      }, u);
    })
  }), t[2] = i, t[3] = a, t[4] = l;else l = t[4];
  return l;
}
function Izf({
  hasConversationMessages: e,
  onDone: t
}) {
  let n = Ht(oe => oe.effortValue),
    r = Ht(oe => oe.cacheMissAckedAtOutputTokens),
    o = Ht(oe => oe.ultracode),
    s = kH(),
    i = Ho(),
    a = uZ.useMemo(() => getSliderGeometry(s), [s]),
    l = uZ.useMemo(() => {
      if (Xte(s, n, o)) {
        let de = a.levels.findIndex(Ee => Ee.value === "ultracode");
        if (de !== -1) return de;
      }
      let oe = Ju() ? void 0 : k3e(),
        re = R3e(s) ? void 0 : n,
        ee = oe === null ? void 0 : oe ?? re;
      if (ee !== void 0) {
        let de = a.levels.findIndex(Ee => Ee.value === ee);
        if (de !== -1) return de;
      }
      let ce = RM(s, ee),
        ae = a.levels.findIndex(de => de.value === ce);
      return ae === -1 ? fzf : ae;
    }, [n, s, a, o]),
    [c, u] = uZ.useState(l),
    d = Math.min(c, a.levels.length - 1),
    [p, f] = uZ.useState(null),
    {
      columns: m
    } = br(),
    g = YE(),
    h = a.levels[d].value === "ultracode",
    y = Yce(),
    [, b] = Kf(h && !y && p === null ? _zf : null),
    _ = uZ.useRef(null);
  if (!h || y) _.current = null;else if (_.current === null) _.current = b;
  let S = h ? b - (_.current ?? b) : 0,
    A = h && !y ? {
      travel: S * bzf,
      originCol: a.trianglePositions[d]
    } : null,
    v = uZ.useMemo(() => `${B0e([CW("left"), CW("right")])} to adjust \xB7 ${B0e([CW("enter")])} to confirm \xB7 ${B0e([CW("escape")])} to cancel`, []);
  function C(oe) {
    if (oe.key === "left") oe.preventDefault(), u(re => Math.max(0, re - 1));else if (oe.key === "right") oe.preventDefault(), u(re => Math.min(a.levels.length - 1, re + 1));else if (oe.key === "return") {
      oe.preventDefault();
      let re = a.levels[d],
        ee = re.value === "ultracode" ? "xhigh" : re.value;
      if (vNt(ee, n, s, r, e)) {
        f(re.value);
        return;
      }
      a3o(re.value, i, t);
    } else if (oe.key === "escape") oe.preventDefault(), t("Cancelled");
  }
  if (p !== null) return Ga.jsx(lHt, {
    kind: "effort",
    model: null,
    effort: p === "ultracode" ? "xhigh" : p,
    onConfirm: () => a3o(p, i, t),
    onCancel: () => f(null)
  });
  let x = a.trianglePositions[d],
    I = a.trackChars.slice(0, x),
    k = a.trackChars.slice(x + 1),
    D = a.accentStart ?? a.trackChars.length,
    P = I.slice(0, Math.min(I.length, D)),
    O = I.slice(Math.min(I.length, D)),
    L = x >= D,
    M = Math.max(0, D - x - 1),
    N = k.slice(0, M),
    B = k.slice(M),
    $ = Ff(" ", a.width - 6 - 7),
    q = a.labelStarts.at(-1) + a.levels.at(-1).label.length,
    W = Ff(" ", a.width - q),
    V = oe => " ".repeat(a.spacers[oe]),
    Y = g ? FGe + gbe : mbe,
    z = Math.max(a.width, m),
    K = " ".repeat(Y),
    Z = Math.max(0, Math.floor((z - a.width) / 2)),
    J = " ".repeat(Z),
    ne = " ".repeat(Math.max(0, z - Z - a.width));
  return Ga.jsx(Fu, {
    children: Ga.jsxs(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: !0,
      onKeyDown: C,
      marginX: A ? -Y : void 0,
      width: A ? z : void 0,
      children: [Ga.jsx(LH, {
        children: A ? Ga.jsx(UltraRippleText, {
          text: `${K}Effort${" ".repeat(Math.max(0, z - Y - 6))}`,
          col: -Z,
          row: Szf,
          ripple: A
        }) : "Effort"
      }), A ? Ga.jsx(UltraRippleText, {
        text: " ".repeat(z),
        col: -Z,
        row: Ezf,
        ripple: A
      }) : Ga.jsx(U, {
        height: 1
      }), Ga.jsxs(U, {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        children: [Ga.jsx(U, {
          children: A ? Ga.jsx(UltraRippleText, {
            text: `${J}Faster${$}Smarter${ne}`,
            col: -Z,
            row: Azf,
            ripple: A
          }) : Ga.jsxs(Ga.Fragment, {
            children: [Ga.jsx(w, {
              children: "Faster"
            }), Ga.jsx(w, {
              children: $
            }), Ga.jsx(w, {
              children: "Smarter"
            })]
          })
        }), Ga.jsx(U, {
          children: A ? Ga.jsxs(Ga.Fragment, {
            children: [Ga.jsx(UltraRippleText, {
              text: `${J}${I}`,
              col: -Z,
              row: CQl,
              ripple: A,
              dimColor: !0,
              coveredColor: IQl
            }), Ga.jsx(w, {
              bold: !0,
              backgroundColor: d3o,
              color: u3o,
              children: "\u25B2"
            }), Ga.jsx(UltraRippleText, {
              text: `${k}${ne}`,
              col: x + 1,
              row: CQl,
              ripple: A,
              dimColor: !0,
              coveredColor: IQl
            })]
          }) : Ga.jsxs(Ga.Fragment, {
            children: [Ga.jsx(w, {
              dimColor: !0,
              children: P
            }), O ? Ga.jsx(w, {
              color: _ir,
              children: O
            }) : null, Ga.jsx(w, {
              bold: !0,
              color: L ? _ir : void 0,
              children: "\u25B2"
            }), Ga.jsx(w, {
              dimColor: !0,
              children: N
            }), B ? Ga.jsx(w, {
              color: _ir,
              children: B
            }) : null]
          })
        }), Ga.jsxs(U, {
          children: [A && Ga.jsx(UltraRippleText, {
            text: J,
            col: -Z,
            row: FJt,
            ripple: A
          }), a.levels.map((oe, re) => Ga.jsxs(kQl.Fragment, {
            children: [re > 0 && (A ? Ga.jsx(UltraRippleText, {
              text: V(re - 1),
              col: a.labelStarts[re] - a.spacers[re - 1],
              row: FJt,
              ripple: A
            }) : Ga.jsx(w, {
              children: V(re - 1)
            })), A && d !== re ? Ga.jsx(UltraRippleText, {
              text: oe.label,
              col: a.labelStarts[re],
              row: FJt,
              ripple: A,
              dimColor: !0
            }) : Ga.jsx(hzf, {
              level: oe,
              selected: d === re
            })]
          }, oe.value)), A ? Ga.jsx(UltraRippleText, {
            text: `${W}${ne}`,
            col: q,
            row: FJt,
            ripple: A
          }) : W ? Ga.jsx(w, {
            children: W
          }) : null]
        }), a.sublabel ? Ga.jsx(U, {
          children: A ? Ga.jsx(UltraRippleText, {
            text: `${J}${" ".repeat(a.sublabel.start)}${a.sublabel.text}${ne}`,
            col: -Z,
            row: Hzf,
            ripple: A,
            dimColor: !0
          }) : Ga.jsxs(Ga.Fragment, {
            children: [Ga.jsx(w, {
              children: " ".repeat(a.sublabel.start)
            }), Ga.jsx(w, {
              dimColor: !0,
              children: a.sublabel.text
            })]
          })
        }) : null, a.levels[d]?.value === "max" ? Ga.jsx(U, {
          children: Ga.jsx(w, {
            dimColor: !0,
            children: TNt
          })
        }) : null, a.capNote && !A ? Ga.jsx(U, {
          children: Ga.jsx(w, {
            dimColor: !0,
            children: a.capNote
          })
        }) : null]
      }), A ? Ga.jsx(UltraRippleText, {
        text: " ".repeat(z),
        col: -Z,
        row: Tzf,
        ripple: A
      }) : Ga.jsx(U, {
        height: 1
      }), Ga.jsx(vb, {
        children: A ? Ga.jsx(UltraRippleText, {
          text: `${K}${v}${" ".repeat(Math.max(0, z - Y - rn(v)))}`,
          col: -Z,
          row: vzf,
          ripple: A,
          dimColor: !0
        }) : Ga.jsxs(Tn, {
          children: [Ga.jsx(ht, {
            chord: ["left", "right"],
            action: "adjust"
          }), Ga.jsx(ht, {
            chord: "enter",
            action: "confirm"
          }), Ga.jsx(ht, {
            chord: "escape",
            action: "cancel"
          })]
        })
      })]
    })
  });
}
async function call(e, t, n) {
  if (n = n?.trim() || "", _G.includes(n)) {
    e(getEffortHelpText());
    return;
  }
  if (n === "current" || n === "status") return Ga.jsx(rzf, {
    onDone: e
  });
  let r = t.messages.length > 0;
  if (!n) return Ga.jsx(Izf, {
    onDone: e,
    hasConversationMessages: r
  });
  return Ga.jsx(izf, {
    args: n,
    onDone: e,
    hasConversationMessages: r
  });
}
var cHt,
  kQl,
  uZ,
  Ga,
  Q6f,
  czf = 42,
  uzf = 14,
  dzf,
  pzf,
  i3o,
  fzf = 3,
  mzf = "Higher effort levels are restricted by your organization.",
  LQl = "#d0b4ff",
  _zf = 80,
  bzf = 0.03,
  hir = 20,
  Szf = -2,
  Ezf = -1,
  Azf = 0,
  CQl = 1,
  FJt = 2,
  Hzf = 3,
  Tzf = 4,
  vzf = 5,
  u3o = "rgb(255,255,255)",
  IQl,
  xQl,
  wzf,
  RIPPLE_RAMP,
  d3o,
  _ir;