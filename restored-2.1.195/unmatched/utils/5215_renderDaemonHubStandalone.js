// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module SGo
// matched 2.1.88 source: src/commands/plugin/ManagePlugins.tsx
// class=new  jaccard=0.0366  score=0.1448  fileCov=0.0466
// note: nearest: src/commands/plugin/ManagePlugins.tsx (0.0366); dir inferred from dep-graph -> utils; 3 renamed
// ─────────────────────────────────────────────────────────────────────────
var SGo = E(() => {
  ft();
  Vl();
  Fy();
  vi();
  TVt();
  gm();
  VQ();
  QJt();
  Ye();
  vX();
  je();
  At();
  vn();
  _7f = R(lt(), 1), Ftc = require("os"), aQt = require("path"), EHt = R(rt(), 1), YN = R(se(), 1);
});
var HGo = {};
_t(HGo, {
  renderDaemonHubStandalone: () => renderDaemonHubStandalone,
  call: () => call,
  DaemonHub: () => DaemonHub
});
async function EGo() {
  let e = KOe(),
    [t, n, r, o, s, i, a] = await Promise.all([jtc(), Mtc(), uR().catch(() => null), SZl().catch(() => null), Yec().catch(() => null), h3({
      silent: true
    }), e ? KQ() : Promise.resolve(false)]);
  return {
    tasks: t.tasks,
    servers: n,
    lock: r,
    status: o,
    scheduledStatus: s,
    bgCount: Object.keys(i.workers).length,
    serviceInstalled: a,
    serviceSupported: e
  };
}
function Ktc() {
  return aLe(false).map(e => ({
    label: e.label,
    value: e.value ?? "",
    description: e.description
  }));
}
async function call(e) {
  let t = await EGo();
  return zc.jsx(DaemonHub, {
    initialData: t,
    modelOptions: Ktc(),
    onDone: e
  });
}
function DaemonHub({
  initialData: e,
  modelOptions: t,
  onDone: n
}) {
  let [r, o] = xz.useState(e),
    s = ks(),
    [i] = xz.useState(() => ({
      wall: Date.now(),
      clock: s.now()
    })),
    [a, l] = xz.useState(i.wall),
    [c, u] = xz.useState({
      type: "hub"
    }),
    [d, p] = xz.useState("scheduled"),
    [f, m] = xz.useState(false),
    [g, h] = xz.useState(null);
  async function y() {
    let v = await EGo();
    o(v);
  }
  let b = xz.useRef(0);
  Gc(() => {
    if (l(i.wall + (s.now() - i.clock)), b.current++ % 2 === 0) y();
  }, c.type === "hub" ? 1000 : null);
  async function _(v) {
    if (f) return;
    m(true), h(null);
    let C;
    try {
      switch (v) {
        case "uninstall":
          C = await AEt();
          break;
        case "stop":
          C = await G7t();
          break;
      }
      if (!C.ok) h(`${v} failed: ${C.error}`);
    } finally {
      try {
        await y();
      } catch {}
      m(false);
    }
  }
  function S() {
    y(), u({
      type: "hub"
    });
  }
  switch (c.type) {
    case "detail-scheduled":
      return zc.jsx(Gtc, {
        task: c.entry,
        onBack: S,
        onEdit: v => u({
          type: "new",
          kind: "scheduled",
          prefill: v
        }),
        onDone: n,
        refresh: y
      });
    case "detail-remoteControl":
      return zc.jsx($tc, {
        server: c.entry,
        onBack: S,
        onDone: n,
        refresh: y
      });
    case "new":
      if (c.kind === "remoteControl") return zc.jsx(Otc, {
        defaultDir: yr(),
        onCancel: S,
        onAdded: () => S()
      });
      return zc.jsx(Wtc, {
        defaultDir: yr(),
        existingIds: r.tasks.map(v => v.id),
        prefill: c.prefill,
        modelOptions: t,
        onCancel: S,
        onDone: n,
        onSaved: async () => S()
      });
    case "hub":
      break;
  }
  let A = [zc.jsx(sm, {
    id: "scheduled",
    title: "Scheduled",
    children: zc.jsx(Vtc, {
      kind: "scheduled",
      data: r,
      now: a,
      busy: f,
      message: g,
      onSelect: v => u({
        type: "detail-scheduled",
        entry: v
      }),
      onAddNew: () => u({
        type: "new",
        kind: "scheduled"
      }),
      onService: v => void _(v),
      onCancel: () => n()
    })
  }, "scheduled")];
  return A.push(zc.jsx(sm, {
    id: "remoteControl",
    title: "Remote Control",
    children: zc.jsx(Vtc, {
      kind: "remoteControl",
      data: r,
      now: a,
      busy: f,
      message: g,
      onSelect: v => u({
        type: "detail-remoteControl",
        entry: v
      }),
      onAddNew: () => u({
        type: "new",
        kind: "remoteControl"
      }),
      onService: v => void _(v),
      onCancel: () => n()
    })
  }, "remoteControl")), zc.jsx(zn, {
    title: "Claude daemon",
    onCancel: () => n(),
    hideInputGuide: true,
    children: zc.jsx(cR, {
      title: null,
      color: "permission",
      selectedTab: d,
      onTabChange: v => p(v),
      children: A
    })
  });
}
function Vtc(e) {
  let t = ear.c(58),
    {
      kind: n,
      data: r,
      now: o,
      busy: s,
      message: i,
      onSelect: a,
      onAddNew: l,
      onService: c,
      onCancel: u
    } = e,
    {
      headerFocused: d,
      focusHeader: p
    } = tx(),
    f = n === "scheduled" ? r.tasks : r.servers,
    m = w7f(r),
    g = f.length,
    h = f.length + 1 + m.length,
    [y, b] = xz.useState(0),
    _,
    S;
  if (t[0] !== y || t[1] !== h) _ = () => {
    if (y >= h) b(Math.max(0, h - 1));
  }, S = [h, y], t[0] = y, t[1] = h, t[2] = _, t[3] = S;else _ = t[2], S = t[3];
  xz.useEffect(_, S);
  let A;
  if (t[4] !== p || t[5] !== y) A = () => {
    if (y === 0) p();else b(y - 1);
  }, t[4] = p, t[5] = y, t[6] = A;else A = t[6];
  let v;
  if (t[7] !== y || t[8] !== h) v = () => b(Math.min(h - 1, y + 1)), t[7] = y, t[8] = h, t[9] = v;else v = t[9];
  let C = !d,
    x;
  if (t[10] !== C) x = {
    context: "Select",
    isActive: C
  }, t[10] = C, t[11] = x;else x = t[11];
  No({
    "select:previous": A,
    "select:next": v,
    "select:accept": () => {
      if (s) return;
      if (y < f.length) a(f[y]);else if (y === g) l();else c(m[y - g - 1]);
    },
    "select:cancel": u
  }, x);
  let I;
  if (t[12] !== r || t[13] !== f || t[14] !== n || t[15] !== o) I = E7f(n, f, r, o), t[12] = r, t[13] = f, t[14] = n, t[15] = o, t[16] = I;else I = t[16];
  let k = I,
    D = U,
    P = "column",
    O = "  " + k.header,
    L;
  if (t[17] !== O) L = zc.jsx(w, {
    dimColor: true,
    children: O
  }), t[17] = O, t[18] = L;else L = t[18];
  let M;
  if (t[19] !== f.length || t[20] !== n) M = f.length === 0 && zc.jsx(Fl, {
    children: `  (no ${qtc[n]}s)`
  }), t[19] = f.length, t[20] = n, t[21] = M;else M = t[21];
  let N;
  if (t[22] !== f || t[23] !== y || t[24] !== d || t[25] !== k.keys || t[26] !== k.rows) {
    let he;
    if (t[28] !== y || t[29] !== d || t[30] !== k.keys || t[31] !== k.rows) he = (ie, le) => {
      let He = !d && y === le;
      return zc.jsxs(U, {
        children: [zc.jsxs(w, {
          color: He ? "suggestion" : void 0,
          children: [He ? nt.pointer : " ", " "]
        }), zc.jsx(w, {
          bold: He,
          children: k.rows[le].text
        }), k.rows[le].suffix]
      }, k.keys[le]);
    }, t[28] = y, t[29] = d, t[30] = k.keys, t[31] = k.rows, t[32] = he;else he = t[32];
    N = f.map(he), t[22] = f, t[23] = y, t[24] = d, t[25] = k.keys, t[26] = k.rows, t[27] = N;
  } else N = t[27];
  let B = !d && y === g,
    $ = `+ Add new ${qtc[n]}\u2026`,
    q;
  if (t[33] !== B || t[34] !== $) q = zc.jsx(U, {
    marginTop: 1,
    children: zc.jsx(ztc, {
      isFocused: B,
      label: $
    })
  }), t[33] = B, t[34] = $, t[35] = q;else q = t[35];
  let W = U,
    V = 1,
    Y = "column",
    z = "single",
    K = false,
    Z = false,
    J = false,
    ne = true,
    oe,
    re;
  if (t[36] === Symbol.for("react.memo_cache_sentinel")) oe = zc.jsx(w, {
    bold: true,
    children: "Daemon service"
  }), re = zc.jsx(w, {
    dimColor: true,
    children: " \xB7 "
  }), t[36] = oe, t[37] = re;else oe = t[36], re = t[37];
  let ee = s ? "working\u2026" : i,
    ce;
  if (t[38] !== r || t[39] !== ee) ce = zc.jsxs(U, {
    children: [oe, re, zc.jsx(C7f, {
      data: r,
      message: ee
    })]
  }), t[38] = r, t[39] = ee, t[40] = ce;else ce = t[40];
  let ae;
  if (t[41] !== g || t[42] !== y || t[43] !== d) ae = (he, ie) => zc.jsx(ztc, {
    isFocused: !d && y === g + 1 + ie,
    label: v7f[he],
    color: he === "uninstall" ? "error" : void 0
  }, he), t[41] = g, t[42] = y, t[43] = d, t[44] = ae;else ae = t[44];
  let de = m.map(ae),
    Ee;
  if (t[45] !== W || t[46] !== ce || t[47] !== de) Ee = zc.jsxs(W, {
    marginTop: V,
    flexDirection: Y,
    borderStyle: z,
    borderBottom: K,
    borderLeft: Z,
    borderRight: J,
    borderDimColor: ne,
    children: [ce, de]
  }), t[45] = W, t[46] = ce, t[47] = de, t[48] = Ee;else Ee = t[48];
  let me;
  if (t[49] === Symbol.for("react.memo_cache_sentinel")) me = zc.jsx(ht, {
    chord: ["left", "right"],
    action: "tabs"
  }), t[49] = me;else me = t[49];
  let pe;
  if (t[50] === Symbol.for("react.memo_cache_sentinel")) pe = zc.jsx(U, {
    marginTop: 1,
    children: zc.jsx(w, {
      dimColor: true,
      children: zc.jsxs(Tn, {
        children: [me, zc.jsx(ht, {
          chord: ["up", "down"],
          action: "move"
        }), zc.jsx(ht, {
          chord: "enter",
          action: "select"
        }), zc.jsx(ht, {
          chord: "escape",
          action: "close"
        })]
      })
    })
  }), t[50] = pe;else pe = t[50];
  let ge;
  if (t[51] !== D || t[52] !== L || t[53] !== M || t[54] !== N || t[55] !== q || t[56] !== Ee) ge = zc.jsxs(D, {
    flexDirection: P,
    children: [L, M, N, q, Ee, pe]
  }), t[51] = D, t[52] = L, t[53] = M, t[54] = N, t[55] = q, t[56] = Ee, t[57] = ge;else ge = t[57];
  return ge;
}
function ztc(e) {
  let t = ear.c(7),
    {
      isFocused: n,
      label: r,
      color: o
    } = e,
    s = n ? void 0 : o,
    i;
  if (t[0] !== n || t[1] !== r || t[2] !== s) i = zc.jsx(w, {
    bold: n,
    color: s,
    children: r
  }), t[0] = n, t[1] = r, t[2] = s, t[3] = i;else i = t[3];
  let a;
  if (t[4] !== n || t[5] !== i) a = zc.jsx(mH, {
    isFocused: n,
    styled: false,
    children: i
  }), t[4] = n, t[5] = i, t[6] = a;else a = t[6];
  return a;
}
function E7f(e, t, n, r) {
  let o = new Date(r),
    s = n.lock !== null,
    i,
    a,
    l,
    c;
  if (e === "scheduled") {
    i = ["Name", "Schedule", "Next run", "Last run", "PID"], c = 2;
    let m = t,
      g = n.scheduledStatus?.workerPid ?? n.status?.workers["scheduled:0"]?.pid;
    l = m.map(h => h.id), a = m.map(h => {
      let y = n.scheduledStatus?.tasks[h.id],
        b = h.enabled ? H7f(h.cron, o) : null;
      return [h.id, r$(h.cron), !h.enabled ? "disabled" : !s ? "daemon stopped" : y?.running ? "running" : b ? oae(b, {
        now: o
      }) : "\u2014", y?.lastFiredAt ? oae(new Date(y.lastFiredAt), {
        now: o
      }) : "\u2014", y?.running && g !== void 0 ? String(g) : "\u2014"];
    });
  } else {
    i = ["Name", "Directory", "Status", "PID"], c = 2;
    let m = t;
    l = m.map(g => g.dir), a = m.map((g, h) => {
      let y = n.status?.workers[`${e}:${h}`]?.pid,
        b = s && (n.status === null || y !== void 0);
      return [g.name, T7f(g.dir), b ? "running" : "stopped", y !== void 0 ? String(y) : b ? "\u2014" : ""];
    });
  }
  let u = i.map((m, g) => Math.max(rn(m), ...a.map(h => rn(h[g] ?? "")))),
    d = (m, g) => m + " ".repeat(Math.max(0, u[g] - rn(m))),
    p = i.map(d).join("  "),
    f = a.map(m => ({
      text: m.slice(0, c).map(d).join("  ") + "  ",
      suffix: zc.jsxs(zc.Fragment, {
        children: [A7f(m[c], u[c]), zc.jsx(w, {
          children: m.slice(c + 1).map((g, h) => "  " + d(g, c + 1 + h)).join("")
        })]
      })
    }));
  return {
    header: p,
    rows: f,
    keys: l
  };
}
function A7f(e, t) {
  let n = e + " ".repeat(Math.max(0, t - rn(e)));
  return e === "running" ? zc.jsx(w, {
    color: "success",
    children: n
  }) : zc.jsx(w, {
    dimColor: true,
    children: n
  });
}
function H7f(e, t) {
  let n = F1(e);
  return n ? Act(n, t) : null;
}
function T7f(e) {
  return UV(e, 40);
}
function w7f(e) {
  if (!e.serviceSupported || !e.serviceInstalled) return [];
  if (e.lock === null) return ["uninstall"];
  return ["stop", "uninstall"];
}
function C7f(e) {
  let t = ear.c(22),
    {
      data: n,
      message: r
    } = e;
  if (r) {
    let p;
    if (t[0] !== r) p = zc.jsx(w, {
      dimColor: true,
      children: r
    }), t[0] = r, t[1] = p;else p = t[1];
    return p;
  }
  if (!n.serviceSupported) {
    let p;
    if (t[2] === Symbol.for("react.memo_cache_sentinel")) p = zc.jsx(w, {
      dimColor: true,
      children: "service install not available on this platform \u2014 runs on demand"
    }), t[2] = p;else p = t[2];
    return p;
  }
  if (n.lock === null) {
    let p = n.serviceInstalled ? "installed \xB7 not running" : "not installed (runs on demand)",
      f;
    if (t[3] !== p) f = zc.jsx(w, {
      dimColor: true,
      children: p
    }), t[3] = p, t[4] = f;else f = t[4];
    return f;
  }
  let o = n.status === null || n.lock.version !== {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION,
    s;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) s = zc.jsx(w, {
    color: "success",
    children: "running"
  }), t[5] = s;else s = t[5];
  let i;
  if (t[6] !== n.lock.pid) i = zc.jsxs(zc.Fragment, {
    children: ["pid ", n.lock.pid]
  }), t[6] = n.lock.pid, t[7] = i;else i = t[7];
  let a;
  if (t[8] !== n.lock.version) a = zc.jsxs(zc.Fragment, {
    children: ["v", n.lock.version]
  }), t[8] = n.lock.version, t[9] = a;else a = t[9];
  let l;
  if (t[10] !== n.bgCount) l = n.bgCount > 0 && zc.jsxs(zc.Fragment, {
    children: [n.bgCount, " ", bn(n.bgCount, "background session")]
  }), t[10] = n.bgCount, t[11] = l;else l = t[11];
  let c;
  if (t[12] !== n.serviceInstalled) c = !n.serviceInstalled && zc.jsx(zc.Fragment, {
    children: "not installed as service"
  }), t[12] = n.serviceInstalled, t[13] = c;else c = t[13];
  let u;
  if (t[14] !== o) u = o && zc.jsx(w, {
    color: "warning",
    children: "restart to update"
  }), t[14] = o, t[15] = u;else u = t[15];
  let d;
  if (t[16] !== i || t[17] !== a || t[18] !== l || t[19] !== c || t[20] !== u) d = zc.jsx(w, {
    dimColor: true,
    children: zc.jsxs(Tn, {
      children: [s, i, a, l, c, u]
    })
  }), t[16] = i, t[17] = a, t[18] = l, t[19] = c, t[20] = u, t[21] = d;else d = t[21];
  return d;
}
async function renderDaemonHubStandalone() {
  let [{
      createRoot: e
    }, {
      getBaseRenderOptions: t
    }] = await Promise.all([Promise.resolve().then(() => (Ye(), wW)), Promise.resolve().then(() => (Gre(), I4n))]),
    {
      AppStateProvider: n
    } = await Promise.resolve().then(() => (C5(), iNa)),
    {
      KeybindingSetup: r
    } = await Promise.resolve().then(() => (S6(), z1a)),
    {
      getEraseScreenSequence: o
    } = await Promise.resolve().then(() => (P7r(), n4i)),
    s = await EGo();
  process.stdout.write(o());
  let i = await e(t(false));
  await new Promise(a => {
    i.render(zc.jsx(n, {
      children: zc.jsx(r, {
        children: zc.jsx(DaemonHub, {
          initialData: s,
          modelOptions: Ktc(),
          onDone: l => {
            if (l) process.stdout.write(l + `
`);
            a();
          }
        })
      })
    }));
  }), i.unmount();
}
var ear, xz, zc, qtc, v7f;