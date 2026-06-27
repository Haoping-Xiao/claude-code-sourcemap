// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DAc
// matched 2.1.88 source: src/utils/swarm/It2SetupPrompt.tsx
// class=modified  jaccard=0.3034  score=0.431  fileCov=0.5062
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module DAc] deps: Gpo, PFn, si, Ye, Bi, sr, Vl, vi
((ypr = R(lt(), 1)),
  (kAc = R(rt(), 1)),
  (SE = R(se(), 1)),
  (RAc = {
    granted: [],
    denied: [],
    flags: pJ,
  }));
Eym = {
  shell: "equivalent to shell access",
  filesystem: "can read/write any file",
  system_settings: "can change system settings",
};
function PAc(e) {
  let t = zTe.c(58),
    { onDone: n, tmuxAvailable: r } = e,
    [o, s] = YTt.useState("initial"),
    [i, a] = YTt.useState(null),
    [l, c] = YTt.useState(null),
    u,
    d;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((u = () => {
      ohl().then((q) => {
        a(q);
      });
    }),
      (d = []),
      (t[0] = u),
      (t[1] = d));
  else ((u = t[0]), (d = t[1]));
  YTt.useEffect(u, d);
  let p;
  if (t[2] !== n)
    ((p = () => {
      n("cancelled");
    }),
      (t[2] = n),
      (t[3] = p));
  else p = t[3];
  let f = p,
    m = o !== "installing" && o !== "verifying",
    g;
  if (t[4] !== m)
    ((g = {
      context: "Confirmation",
      isActive: m,
    }),
      (t[4] = m),
      (t[5] = g));
  else g = t[5];
  $r("confirm:no", f, g);
  let h;
  if (t[6] !== n) ((h = () => n("installed")), (t[6] = n), (t[7] = h));
  else h = t[7];
  Pd(h, o === "success" ? 1500 : null);
  let y;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((y = function () {
      (s("verifying"),
        ihl().then((W) => {
          if (W.success) (lhl(), s("success"));
          else (c(W.error), s("failed"));
        }));
    }),
      (t[8] = y));
  else y = t[8];
  let b = y,
    _;
  if (t[9] !== o)
    ((_ = function (W) {
      if (o === "api-instructions" && W.key === "return") (W.preventDefault(), b());
    }),
      (t[9] = o),
      (t[10] = _));
  else _ = t[10];
  let S = _,
    A;
  if (t[11] !== i)
    ((A = async function () {
      if (!i) {
        (c("No Python package manager found (uvx, pipx, or pip)"), s("failed"));
        return;
      }
      s("installing");
      let W = await shl(i);
      if (W.success) s("api-instructions");
      else (c(W.error), s("install-failed"));
    }),
      (t[11] = i),
      (t[12] = A));
  else A = t[12];
  let v = A,
    C;
  if (t[13] !== n)
    ((C = function () {
      (chl(true), n("use-tmux"));
    }),
      (t[13] = n),
      (t[14] = C));
  else C = t[14];
  let x = C,
    I;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((I = zu.jsx(w, {
      bold: true,
      color: "permission",
      children: "iTerm2 Split Pane Setup",
    })),
      (t[15] = I));
  else I = t[15];
  let k;
  if (t[16] !== f || t[17] !== v || t[18] !== x || t[19] !== i || t[20] !== o || t[21] !== r)
    ((k =
      o === "initial" &&
      zu.jsx(Cym, {
        packageManager: i,
        tmuxAvailable: r,
        onInstall: v,
        onUseTmux: x,
        onCancel: f,
      })),
      (t[16] = f),
      (t[17] = v),
      (t[18] = x),
      (t[19] = i),
      (t[20] = o),
      (t[21] = r),
      (t[22] = k));
  else k = t[22];
  let D;
  if (t[23] !== i || t[24] !== o)
    ((D =
      o === "installing" &&
      zu.jsx(Iym, {
        packageManager: i,
      })),
      (t[23] = i),
      (t[24] = o),
      (t[25] = D));
  else D = t[25];
  let P;
  if (
    t[26] !== l ||
    t[27] !== f ||
    t[28] !== v ||
    t[29] !== x ||
    t[30] !== i ||
    t[31] !== o ||
    t[32] !== r
  )
    ((P =
      o === "install-failed" &&
      zu.jsx(xym, {
        error: l,
        packageManager: i,
        tmuxAvailable: r,
        onRetry: v,
        onUseTmux: x,
        onCancel: f,
      })),
      (t[26] = l),
      (t[27] = f),
      (t[28] = v),
      (t[29] = x),
      (t[30] = i),
      (t[31] = o),
      (t[32] = r),
      (t[33] = P));
  else P = t[33];
  let O;
  if (t[34] !== o) ((O = o === "api-instructions" && zu.jsx(kym, {})), (t[34] = o), (t[35] = O));
  else O = t[35];
  let L;
  if (t[36] !== o) ((L = o === "verifying" && zu.jsx(Lym, {})), (t[36] = o), (t[37] = L));
  else L = t[37];
  let M;
  if (t[38] !== o) ((M = o === "success" && zu.jsx(Dym, {})), (t[38] = o), (t[39] = M));
  else M = t[39];
  let N;
  if (t[40] !== l || t[41] !== f || t[42] !== x || t[43] !== o || t[44] !== r)
    ((N =
      o === "failed" &&
      zu.jsx(Pym, {
        error: l,
        tmuxAvailable: r,
        onRetry: b,
        onUseTmux: x,
        onCancel: f,
      })),
      (t[40] = l),
      (t[41] = f),
      (t[42] = x),
      (t[43] = o),
      (t[44] = r),
      (t[45] = N));
  else N = t[45];
  let B;
  if (t[46] !== o)
    ((B =
      o !== "installing" &&
      o !== "verifying" &&
      o !== "success" &&
      zu.jsx(vb, {
        children: zu.jsx(ht, {
          chord: "escape",
          action: "cancel",
        }),
      })),
      (t[46] = o),
      (t[47] = B));
  else B = t[47];
  let $;
  if (
    t[48] !== S ||
    t[49] !== k ||
    t[50] !== D ||
    t[51] !== P ||
    t[52] !== O ||
    t[53] !== L ||
    t[54] !== M ||
    t[55] !== N ||
    t[56] !== B
  )
    (($ = zu.jsx(Fu, {
      color: "permission",
      children: zu.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        paddingBottom: 1,
        tabIndex: 0,
        autoFocus: true,
        onKeyDown: S,
        children: [I, k, D, P, O, L, M, N, B],
      }),
    })),
      (t[48] = S),
      (t[49] = k),
      (t[50] = D),
      (t[51] = P),
      (t[52] = O),
      (t[53] = L),
      (t[54] = M),
      (t[55] = N),
      (t[56] = B),
      (t[57] = $));
  else $ = t[57];
  return $;
}
function Cym(e) {
  let t = zTe.c(17),
    { packageManager: n, tmuxAvailable: r, onInstall: o, onUseTmux: s, onCancel: i } = e,
    a = n ? `Uses ${n} to install the it2 CLI tool` : "Requires Python (uvx, pipx, or pip)",
    l;
  if (t[0] !== a)
    ((l = {
      label: "Install it2 now",
      value: "install",
      description: a,
    }),
      (t[0] = a),
      (t[1] = l));
  else l = t[1];
  let c;
  if (t[2] !== l || t[3] !== r) {
    if (((c = [l]), r)) {
      let g;
      if (t[5] === Symbol.for("react.memo_cache_sentinel"))
        ((g = {
          label: "Use tmux instead",
          value: "tmux",
          description: "Opens teammates in a separate tmux session",
        }),
          (t[5] = g));
      else g = t[5];
      c.push(g);
    }
    let m;
    if (t[6] === Symbol.for("react.memo_cache_sentinel"))
      ((m = {
        label: "Cancel",
        value: "cancel",
        description: "Skip teammate spawning for now",
      }),
        (t[6] = m));
    else m = t[6];
    (c.push(m), (t[2] = l), (t[3] = r), (t[4] = c));
  } else c = t[4];
  let u, d;
  if (t[7] === Symbol.for("react.memo_cache_sentinel"))
    ((u = zu.jsxs(w, {
      children: [
        "To use native iTerm2 split panes for teammates, you need the",
        " ",
        zu.jsx(w, {
          bold: true,
          children: "it2",
        }),
        " CLI tool.",
      ],
    })),
      (d = zu.jsx(w, {
        dimColor: true,
        children: "This enables teammates to appear as split panes within your current window.",
      })),
      (t[7] = u),
      (t[8] = d));
  else ((u = t[7]), (d = t[8]));
  let p;
  if (t[9] !== i || t[10] !== o || t[11] !== s)
    ((p = (m) => {
      e: switch (m) {
        case "install": {
          o();
          break e;
        }
        case "tmux": {
          s();
          break e;
        }
        case "cancel":
          i();
      }
    }),
      (t[9] = i),
      (t[10] = o),
      (t[11] = s),
      (t[12] = p));
  else p = t[12];
  let f;
  if (t[13] !== i || t[14] !== c || t[15] !== p)
    ((f = zu.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [
        u,
        d,
        zu.jsx(U, {
          marginTop: 1,
          children: zu.jsx(Sr, {
            options: c,
            onChange: p,
            onCancel: i,
          }),
        }),
      ],
    })),
      (t[13] = i),
      (t[14] = c),
      (t[15] = p),
      (t[16] = f));
  else f = t[16];
  return f;
}
function Iym(e) {
  let t = zTe.c(6),
    { packageManager: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = zu.jsx(Vu, {})), (t[0] = r));
  else r = t[0];
  let o;
  if (t[1] !== n)
    ((o = zu.jsxs(U, {
      children: [
        r,
        zu.jsxs(w, {
          children: [" Installing it2 using ", n, "\u2026"],
        }),
      ],
    })),
      (t[1] = n),
      (t[2] = o));
  else o = t[2];
  let s;
  if (t[3] === Symbol.for("react.memo_cache_sentinel"))
    ((s = zu.jsx(w, {
      dimColor: true,
      children: "This may take a moment.",
    })),
      (t[3] = s));
  else s = t[3];
  let i;
  if (t[4] !== o)
    ((i = zu.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [o, s],
    })),
      (t[4] = o),
      (t[5] = i));
  else i = t[5];
  return i;
}
function xym(e) {
  let t = zTe.c(22),
    { error: n, packageManager: r, tmuxAvailable: o, onRetry: s, onUseTmux: i, onCancel: a } = e,
    l;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((l = {
      label: "Try again",
      value: "retry",
      description: "Retry the installation",
    }),
      (t[0] = l));
  else l = t[0];
  let c;
  if (t[1] !== o) {
    if (((c = [l]), o)) {
      let b;
      if (t[3] === Symbol.for("react.memo_cache_sentinel"))
        ((b = {
          label: "Use tmux instead",
          value: "tmux",
          description: "Falls back to tmux for teammate panes",
        }),
          (t[3] = b));
      else b = t[3];
      c.push(b);
    }
    let y;
    if (t[4] === Symbol.for("react.memo_cache_sentinel"))
      ((y = {
        label: "Cancel",
        value: "cancel",
        description: "Skip teammate spawning for now",
      }),
        (t[4] = y));
    else y = t[4];
    (c.push(y), (t[1] = o), (t[2] = c));
  } else c = t[2];
  let u;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((u = zu.jsx(w, {
      color: "error",
      children: "Installation failed",
    })),
      (t[5] = u));
  else u = t[5];
  let d;
  if (t[6] !== n)
    ((d =
      n &&
      zu.jsx(w, {
        dimColor: true,
        children: n,
      })),
      (t[6] = n),
      (t[7] = d));
  else d = t[7];
  let p =
      r === "uvx"
        ? "uv tool install it2"
        : r === "pipx"
          ? "pipx install it2"
          : "pip install --user it2",
    f;
  if (t[8] !== p)
    ((f = zu.jsxs(w, {
      dimColor: true,
      children: ["You can try installing manually:", " ", p],
    })),
      (t[8] = p),
      (t[9] = f));
  else f = t[9];
  let m;
  if (t[10] !== a || t[11] !== s || t[12] !== i)
    ((m = (y) => {
      e: switch (y) {
        case "retry": {
          s();
          break e;
        }
        case "tmux": {
          i();
          break e;
        }
        case "cancel":
          a();
      }
    }),
      (t[10] = a),
      (t[11] = s),
      (t[12] = i),
      (t[13] = m));
  else m = t[13];
  let g;
  if (t[14] !== a || t[15] !== c || t[16] !== m)
    ((g = zu.jsx(U, {
      marginTop: 1,
      children: zu.jsx(Sr, {
        options: c,
        onChange: m,
        onCancel: a,
      }),
    })),
      (t[14] = a),
      (t[15] = c),
      (t[16] = m),
      (t[17] = g));
  else g = t[17];
  let h;
  if (t[18] !== d || t[19] !== f || t[20] !== g)
    ((h = zu.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [u, d, f, g],
    })),
      (t[18] = d),
      (t[19] = f),
      (t[20] = g),
      (t[21] = h));
  else h = t[21];
  return h;
}
function kym() {
  let e = zTe.c(6),
    t,
    n,
    r,
    o,
    s;
  if (e[0] === Symbol.for("react.memo_cache_sentinel")) {
    let a = ahl();
    ((t = U),
      (n = "column"),
      (r = 1),
      (o = zu.jsxs(w, {
        color: "success",
        children: [
          zu.jsx(Hs, {
            status: "success",
            withSpace: true,
          }),
          "it2 installed successfully",
        ],
      })),
      (s = zu.jsx(U, {
        flexDirection: "column",
        marginTop: 1,
        children: a.map(Rym),
      })),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r),
      (e[3] = o),
      (e[4] = s));
  } else ((t = e[0]), (n = e[1]), (r = e[2]), (o = e[3]), (s = e[4]));
  let i;
  if (e[5] === Symbol.for("react.memo_cache_sentinel"))
    ((i = zu.jsxs(t, {
      flexDirection: n,
      gap: r,
      children: [
        o,
        s,
        zu.jsx(U, {
          marginTop: 1,
          children: zu.jsx(w, {
            dimColor: true,
            children: "Press Enter when ready to verify\u2026",
          }),
        }),
      ],
    })),
      (e[5] = i));
  else i = e[5];
  return i;
}
function Rym(e, t) {
  return zu.jsx(
    w,
    {
      children: e,
    },
    t,
  );
}
function Lym() {
  let e = zTe.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = zu.jsxs(U, {
      children: [
        zu.jsx(Vu, {}),
        zu.jsx(w, {
          children: " Verifying it2 can communicate with iTerm2\u2026",
        }),
      ],
    })),
      (e[0] = t));
  else t = e[0];
  return t;
}
function Dym() {
  let e = zTe.c(1),
    t;
  if (e[0] === Symbol.for("react.memo_cache_sentinel"))
    ((t = zu.jsxs(U, {
      flexDirection: "column",
      children: [
        zu.jsxs(w, {
          color: "success",
          children: [
            zu.jsx(Hs, {
              status: "success",
              withSpace: true,
            }),
            "iTerm2 split pane support is ready",
          ],
        }),
        zu.jsx(w, {
          dimColor: true,
          children: "Teammates will now appear as split panes.",
        }),
      ],
    })),
      (e[0] = t));
  else t = e[0];
  return t;
}
function Pym(e) {
  let t = zTe.c(21),
    { error: n, tmuxAvailable: r, onRetry: o, onUseTmux: s, onCancel: i } = e,
    a;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((a = {
      label: "Try again",
      value: "retry",
      description: "Verify the connection again",
    }),
      (t[0] = a));
  else a = t[0];
  let l;
  if (t[1] !== r) {
    if (((l = [a]), r)) {
      let y;
      if (t[3] === Symbol.for("react.memo_cache_sentinel"))
        ((y = {
          label: "Use tmux instead",
          value: "tmux",
          description: "Falls back to tmux for teammate panes",
        }),
          (t[3] = y));
      else y = t[3];
      l.push(y);
    }
    let h;
    if (t[4] === Symbol.for("react.memo_cache_sentinel"))
      ((h = {
        label: "Cancel",
        value: "cancel",
        description: "Skip teammate spawning for now",
      }),
        (t[4] = h));
    else h = t[4];
    (l.push(h), (t[1] = r), (t[2] = l));
  } else l = t[2];
  let c;
  if (t[5] === Symbol.for("react.memo_cache_sentinel"))
    ((c = zu.jsx(w, {
      color: "error",
      children: "Verification failed",
    })),
      (t[5] = c));
  else c = t[5];
  let u;
  if (t[6] !== n)
    ((u =
      n &&
      zu.jsx(w, {
        dimColor: true,
        children: n,
      })),
      (t[6] = n),
      (t[7] = u));
  else u = t[7];
  let d;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((d = zu.jsx(w, {
      children: "Make sure:",
    })),
      (t[8] = d));
  else d = t[8];
  let p;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((p = zu.jsxs(U, {
      flexDirection: "column",
      paddingLeft: 2,
      children: [
        zu.jsx(w, {
          children: "\xB7 Python API is enabled in iTerm2 preferences",
        }),
        zu.jsx(w, {
          children: "\xB7 You may need to restart iTerm2 after enabling",
        }),
      ],
    })),
      (t[9] = p));
  else p = t[9];
  let f;
  if (t[10] !== i || t[11] !== o || t[12] !== s)
    ((f = (h) => {
      e: switch (h) {
        case "retry": {
          o();
          break e;
        }
        case "tmux": {
          s();
          break e;
        }
        case "cancel":
          i();
      }
    }),
      (t[10] = i),
      (t[11] = o),
      (t[12] = s),
      (t[13] = f));
  else f = t[13];
  let m;
  if (t[14] !== i || t[15] !== l || t[16] !== f)
    ((m = zu.jsx(U, {
      marginTop: 1,
      children: zu.jsx(Sr, {
        options: l,
        onChange: f,
        onCancel: i,
      }),
    })),
      (t[14] = i),
      (t[15] = l),
      (t[16] = f),
      (t[17] = m));
  else m = t[17];
  let g;
  if (t[18] !== u || t[19] !== m)
    ((g = zu.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [c, u, d, p, m],
    })),
      (t[18] = u),
      (t[19] = m),
      (t[20] = g));
  else g = t[20];
  return g;
}
var zTe, YTt, zu;
