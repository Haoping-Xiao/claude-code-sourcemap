// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module JBl
// matched 2.1.88 source: src/commands/ide/ide.tsx
// class=modified  jaccard=0.5103  score=0.7408  fileCov=0.6212
// note: deminified; 9 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: formatWorkspaceFolders, call, IDE_CONNECTION_TIMEOUT_MS, IDECommandFlow
// [unwrapped __esm module JBl] deps: Ye, er, aE, mE, Fy, vi
((sBo = R(lt(), 1)), (kKe = R(se(), 1)));
function IDEScreen(e) {
  let t = J7t.c(39),
    { availableIDEs: n, unavailableIDEs: r, selectedIDE: o, onClose: s, onSelect: i } = e,
    a;
  if (t[0] !== o?.port) ((a = o?.port?.toString() ?? "None"), (t[0] = o?.port), (t[1] = a));
  else a = t[1];
  let [l, c] = Oq.useState(a),
    [u, d] = Oq.useState(false),
    [p, f] = Oq.useState(false),
    m;
  if (t[2] !== n || t[3] !== i)
    ((m = (D) => {
      if (D !== "None" && KBl()) d(true);
      else if (D === "None" && XBl()) f(true);
      else i(n.find((P) => P.port === parseInt(D)));
    }),
      (t[2] = n),
      (t[3] = i),
      (t[4] = m));
  else m = t[4];
  let g = m,
    h;
  if (t[5] !== n) ((h = n.reduce(YOf, {})), (t[5] = n), (t[6] = h));
  else h = t[6];
  let y = h,
    b;
  if (t[7] !== n || t[8] !== y) {
    let D;
    if (t[10] !== y)
      ((D = (P) => {
        let L = (y[P.name] || 0) > 1 && P.workspaceFolders.length > 0;
        return {
          label: P.name,
          value: P.port.toString(),
          description: L ? formatWorkspaceFolders(P.workspaceFolders) : void 0,
        };
      }),
        (t[10] = y),
        (t[11] = D));
    else D = t[11];
    ((b = n.map(D).concat([
      {
        label: "None",
        value: "None",
        description: void 0,
      },
    ])),
      (t[7] = n),
      (t[8] = y),
      (t[9] = b));
  } else b = t[9];
  let _ = b;
  if (u) {
    let D;
    if (t[12] !== g || t[13] !== l)
      ((D = _A.jsx(zBl, {
        onComplete: () => g(l),
      })),
        (t[12] = g),
        (t[13] = l),
        (t[14] = D));
    else D = t[14];
    return D;
  }
  if (p) {
    let D;
    if (t[15] !== i)
      ((D = _A.jsx(YBl, {
        onComplete: () => {
          i(void 0);
        },
      })),
        (t[15] = i),
        (t[16] = D));
    else D = t[16];
    return D;
  }
  let S;
  if (t[17] !== n.length)
    ((S =
      n.length === 0 &&
      _A.jsx(Fl, {
        children: cFn()
          ? `No available IDEs detected. Please install the plugin and restart your IDE:
https://docs.claude.com/s/claude-code-jetbrains`
          : "No available IDEs detected. Make sure your IDE has the Claude Code extension or plugin installed and is running.",
      })),
      (t[17] = n.length),
      (t[18] = S));
  else S = t[18];
  let A;
  if (t[19] !== n.length || t[20] !== g || t[21] !== _ || t[22] !== l)
    ((A =
      n.length !== 0 &&
      _A.jsx(Sr, {
        defaultValue: l,
        defaultFocusValue: l,
        options: _,
        onChange: (D) => {
          (c(D), g(D));
        },
      })),
      (t[19] = n.length),
      (t[20] = g),
      (t[21] = _),
      (t[22] = l),
      (t[23] = A));
  else A = t[23];
  let v;
  if (t[24] !== n)
    ((v =
      n.length !== 0 &&
      n.some(_temp2) &&
      _A.jsx(U, {
        marginTop: 1,
        children: _A.jsx(w, {
          color: "warning",
          children: "Note: Only one Claude Code instance can be connected to VS Code at a time.",
        }),
      })),
      (t[24] = n),
      (t[25] = v));
  else v = t[25];
  let C;
  if (t[26] !== n.length)
    ((C =
      n.length !== 0 &&
      !uF() &&
      _A.jsx(U, {
        marginTop: 1,
        children: _A.jsx(w, {
          dimColor: true,
          children: "Tip: You can enable auto-connect to IDE in /config or with the --ide flag",
        }),
      })),
      (t[26] = n.length),
      (t[27] = C));
  else C = t[27];
  let x;
  if (t[28] !== r)
    ((x =
      r.length > 0 &&
      _A.jsxs(U, {
        marginTop: 1,
        flexDirection: "column",
        children: [
          _A.jsxs(w, {
            dimColor: true,
            children: [
              "Found ",
              r.length,
              " other running IDE(s). However, their workspace/project directories do not match the current cwd.",
            ],
          }),
          _A.jsxs(U, {
            marginTop: 1,
            paddingLeft: 3,
            flexDirection: "column",
            children: [
              r.slice(0, 4).map(zOf),
              r.length > 4 &&
                _A.jsx(d$, {
                  count: r.length - 4,
                  unit: "IDE",
                }),
            ],
          }),
        ],
      })),
      (t[28] = r),
      (t[29] = x));
  else x = t[29];
  let I;
  if (t[30] !== S || t[31] !== A || t[32] !== v || t[33] !== C || t[34] !== x)
    ((I = _A.jsxs(U, {
      flexDirection: "column",
      children: [S, A, v, C, x],
    })),
      (t[30] = S),
      (t[31] = A),
      (t[32] = v),
      (t[33] = C),
      (t[34] = x),
      (t[35] = I));
  else I = t[35];
  let k;
  if (t[36] !== s || t[37] !== I)
    ((k = _A.jsx(zn, {
      title: "Select IDE",
      subtitle: "Connect to an IDE for integrated development features.",
      onCancel: s,
      color: "ide",
      children: I,
    })),
      (t[36] = s),
      (t[37] = I),
      (t[38] = k));
  else k = t[38];
  return k;
}
function zOf(e, t) {
  return _A.jsx(
    iE,
    {
      children: _A.jsxs(w, {
        dimColor: true,
        children: [e.name, ": ", formatWorkspaceFolders(e.workspaceFolders)],
      }),
    },
    t,
  );
}
function _temp2(e) {
  return e.name === "VS Code" || e.name === "Visual Studio Code";
}
function YOf(e, t) {
  return ((e[t.name] = (e[t.name] || 0) + 1), e);
}
async function findCurrentIDE(e, t) {
  let n = t?.ide;
  if (!n || (n.type !== "sse-ide" && n.type !== "ws-ide")) return null;
  for (let r of e) if (r.url === n.url) return r;
  return null;
}
function IDEOpenSelection(e) {
  let t = J7t.c(18),
    { availableIDEs: n, onSelectIDE: r, onDone: o } = e,
    s;
  if (t[0] !== n[0]?.port) ((s = n[0]?.port?.toString() ?? ""), (t[0] = n[0]?.port), (t[1] = s));
  else s = t[1];
  let [i, a] = Oq.useState(s),
    l;
  if (t[2] !== n || t[3] !== r)
    ((l = (y) => {
      let b = n.find((_) => _.port === parseInt(y));
      r(b);
    }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = l));
  else l = t[4];
  let c = l,
    u;
  if (t[5] !== n) ((u = n.map(QOf)), (t[5] = n), (t[6] = u));
  else u = t[6];
  let d = u,
    p;
  if (t[7] !== o)
    ((p = function () {
      o("IDE selection cancelled", {
        display: "system",
      });
    }),
      (t[7] = o),
      (t[8] = p));
  else p = t[8];
  let f = p,
    m;
  if (t[9] !== c)
    ((m = (y) => {
      (a(y), c(y));
    }),
      (t[9] = c),
      (t[10] = m));
  else m = t[10];
  let g;
  if (t[11] !== d || t[12] !== i || t[13] !== m)
    ((g = _A.jsx(Sr, {
      defaultValue: i,
      defaultFocusValue: i,
      options: d,
      onChange: m,
    })),
      (t[11] = d),
      (t[12] = i),
      (t[13] = m),
      (t[14] = g));
  else g = t[14];
  let h;
  if (t[15] !== f || t[16] !== g)
    ((h = _A.jsx(zn, {
      title: "Select an IDE to open the project",
      onCancel: f,
      color: "ide",
      children: g,
    })),
      (t[15] = f),
      (t[16] = g),
      (t[17] = h));
  else h = t[17];
  return h;
}
function QOf(e) {
  return {
    label: e.name,
    value: e.port.toString(),
  };
}
function RunningIDESelector(e) {
  let t = J7t.c(15),
    { runningIDEs: n, onSelectIDE: r, onDone: o } = e,
    [s, i] = Oq.useState(n[0] ?? ""),
    a;
  if (t[0] !== r)
    ((a = (h) => {
      r(h);
    }),
      (t[0] = r),
      (t[1] = a));
  else a = t[1];
  let l = a,
    c;
  if (t[2] !== n) ((c = n.map(e1f)), (t[2] = n), (t[3] = c));
  else c = t[3];
  let u = c,
    d;
  if (t[4] !== o)
    ((d = function () {
      o("IDE selection cancelled", {
        display: "system",
      });
    }),
      (t[4] = o),
      (t[5] = d));
  else d = t[5];
  let p = d,
    f;
  if (t[6] !== l)
    ((f = (h) => {
      (i(h), l(h));
    }),
      (t[6] = l),
      (t[7] = f));
  else f = t[7];
  let m;
  if (t[8] !== u || t[9] !== s || t[10] !== f)
    ((m = _A.jsx(Sr, {
      defaultFocusValue: s,
      options: u,
      onChange: f,
    })),
      (t[8] = u),
      (t[9] = s),
      (t[10] = f),
      (t[11] = m));
  else m = t[11];
  let g;
  if (t[12] !== p || t[13] !== m)
    ((g = _A.jsx(zn, {
      title: "Select IDE to install extension",
      onCancel: p,
      color: "ide",
      children: m,
    })),
      (t[12] = p),
      (t[13] = m),
      (t[14] = g));
  else g = t[14];
  return g;
}
function e1f(e) {
  return {
    label: yk(e),
    value: e,
  };
}
function t1f(e) {
  let t = J7t.c(4),
    { ide: n, onInstall: r } = e,
    o,
    s;
  if (t[0] !== n || t[1] !== r)
    ((o = () => {
      r(n);
    }),
      (s = [n, r]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s));
  else ((o = t[2]), (s = t[3]));
  return (Oq.useEffect(o, s), null);
}
async function call(e, t, n) {
  G("tengu_ext_ide_command", {});
  let {
    options: { dynamicMcpConfig: r },
    onChangeDynamicMcpConfig: o,
  } = t;
  if (n?.trim() === "open") {
    let c = Gm(),
      u = c ? c.worktreePath : $t(),
      p = (await pFn(true)).filter((f) => f.isValid);
    if (p.length === 0) return (e("No IDEs with Claude Code extension detected."), null);
    return _A.jsx(IDEOpenSelection, {
      availableIDEs: p,
      onSelectIDE: async (f) => {
        if (!f) {
          e("No IDE selected.");
          return;
        }
        let m = gxa(f.name),
          g = m ? await fFn(m, f.name) : null;
        if (g) {
          let { code: h } = await $n(g, [u]);
          if (h !== 0 && !Pnr.basename(g).startsWith("code")) ({ code: h } = await $n("code", [u]));
          if (h === 0)
            (xe("ide_open_project"),
              e(`Opened ${c ? "worktree" : "project"} in ${wt.bold(f.name)}`));
          else
            (Le("ide_open_project", "ide_open_project_failed"),
              e(`Failed to open in ${f.name}. Try opening manually: ${u}`));
        } else if (cFn())
          e(`Please open the ${c ? "worktree" : "project"} manually in ${wt.bold(f.name)}: ${u}`);
        else
          e(`Please open the ${c ? "worktree" : "project"} manually in ${wt.bold(f.name)}: ${u}`);
      },
      onDone: () => {
        e("Exited without opening IDE", {
          display: "system",
        });
      },
    });
  }
  let s = await pFn(true);
  if (s.length === 0 && t.onInstallIDEExtension && !uF()) {
    let c = await Qdo(),
      u = (d) => {
        if (t.onInstallIDEExtension)
          if ((t.onInstallIDEExtension(d), kre(d)))
            e(`Installed plugin to ${wt.bold(yk(d))}
Please ${wt.bold("restart your IDE")} completely for it to take effect`);
          else e(`Installed extension to ${wt.bold(yk(d))}`);
      };
    if (c.length > 1)
      return _A.jsx(RunningIDESelector, {
        runningIDEs: c,
        onSelectIDE: u,
        onDone: () => {
          e("No IDE selected.", {
            display: "system",
          });
        },
      });
    else if (c.length === 1)
      return _A.jsx(t1f, {
        ide: c[0],
        onInstall: u,
      });
  }
  let i = s.filter((c) => c.isValid),
    a = s.filter((c) => !c.isValid),
    l = await findCurrentIDE(i, r);
  return _A.jsx(IDECommandFlow, {
    availableIDEs: i,
    unavailableIDEs: a,
    currentIDE: l,
    dynamicMcpConfig: r,
    onChangeDynamicMcpConfig: o,
    onDone: e,
  });
}
function IDECommandFlow({
  availableIDEs: e,
  unavailableIDEs: t,
  currentIDE: n,
  dynamicMcpConfig: r,
  onChangeDynamicMcpConfig: o,
  onDone: s,
}) {
  let [i, a] = Oq.useState(null),
    l = Ht((p) => p.mcp.clients.find((f) => f.name === "ide")),
    c = Ho(),
    u = Oq.useRef(true);
  (Oq.useEffect(() => {
    if (!i) return;
    if (u.current) {
      u.current = false;
      return;
    }
    if (!l || l.type === "pending") return;
    if (l.type === "connected") (xe("ide_connect"), s(`Connected to ${i.name}.`));
    else if (l.type === "failed")
      (Le("ide_connect", "ide_connect_failed"), s(`Failed to connect to ${i.name}.`));
  }, [l, i, s]),
    Pd(
      () => {
        if (!i) return;
        (Le("ide_connect", "ide_connect_timeout"), s(`Connection to ${i.name} timed out.`));
      },
      i ? IDE_CONNECTION_TIMEOUT_MS : null,
      [i, s],
    ));
  let d = Oq.useCallback(
    (p) => {
      if (!o) {
        s("Error connecting to IDE.");
        return;
      }
      let f = {
        ...(r || {}),
      };
      if (n) delete f.ide;
      if (!p) {
        if (l && l.type === "connected" && n)
          ((l.client.onclose = () => {}),
            ST("ide", l.config),
            c((g) => ({
              ...g,
              mcp: {
                ...g.mcp,
                clients: g.mcp.clients.filter((h) => h.name !== "ide"),
                tools: g.mcp.tools.filter((h) => !h.name?.startsWith("mcp__ide__")),
                commands: g.mcp.commands.filter((h) => !h.name?.startsWith("mcp__ide__")),
              },
            })));
        if ((o(f), n)) xe("ide_disconnect");
        s(n ? `Disconnected from ${n.name}.` : "No IDE selected.");
        return;
      }
      let m = p.url;
      ((f.ide = {
        type: m.startsWith("ws:") ? "ws-ide" : "sse-ide",
        url: m,
        ideName: p.name,
        authToken: p.authToken,
        ideRunningInWindows: p.ideRunningInWindows,
        scope: "dynamic",
      }),
        (u.current = true),
        a(p),
        o(f));
    },
    [r, n, l, c, o, s],
  );
  if (i)
    return _A.jsxs(w, {
      dimColor: true,
      children: ["Connecting to ", i.name, "\u2026"],
    });
  return _A.jsx(IDEScreen, {
    availableIDEs: e,
    unavailableIDEs: t,
    selectedIDE: n,
    onClose: () =>
      s("IDE selection cancelled", {
        display: "system",
      }),
    onSelect: d,
  });
}
function formatWorkspaceFolders(e, t = 100) {
  if (e.length === 0) return "";
  let n = $t(),
    r = e.slice(0, 2),
    o = e.length > 2,
    s = o ? 3 : 0,
    i = (r.length - 1) * 2,
    a = t - i - s,
    l = Math.floor(a / r.length),
    c = n.normalize("NFC"),
    d = r
      .map((p) => {
        let f = p.normalize("NFC");
        if (f.startsWith(c + Pnr.sep)) p = f.slice(c.length + 1);
        if (p.length <= l) return p;
        return "\u2026" + p.slice(-(l - 1));
      })
      .join(", ");
  if (o) d += ", \u2026";
  return d;
}
var J7t,
  Pnr,
  Oq,
  _A,
  IDE_CONNECTION_TIMEOUT_MS = 35000;
