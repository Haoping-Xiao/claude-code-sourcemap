// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module iQt
// matched 2.1.88 source: src/components/agents/AgentsMenu.tsx
// class=modified (alt of src/components/agents/AgentsMenu.tsx)  jaccard=0.0267  score=0.0529  fileCov=0.0512
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module iQt] deps: Ece, Ree, Sae, Xr, db, je, At, Rd, Is, sQt
((Dtc = require("fs/promises")), (W1e = require("path")));
yGo = ve(() => {
  let e = xw(fZ, (t) => h7f(t.schema()));
  return H.object({
    $schema: H.string().optional(),
    ...e,
  });
});
async function Mtc() {
  let e = await IYe(Dq());
  if (!e.ok) return [];
  let t = e.config.remoteControl ?? [],
    n = (await uR()) !== null;
  return t.map((r) => ({
    dir: r.dir,
    name: r.name ?? pTe.basename(r.dir),
    spawnMode: r.spawnMode ?? "same-dir",
    isRunning: n,
  }));
}
function AgentsMenu(t0) {
  let t = bGo.c(41),
    { server: n, onBack: r, onDone: o, refresh: s } = t0,
    [i, a] = xYe.useState(false),
    [l, c] = xYe.useState(false),
    u;
  if (t[0] !== i || t[1] !== o || t[2] !== s || t[3] !== n.dir)
    ((u = async function (I) {
      if (i) return;
      a(true);
      try {
        if (I === "remove")
          (await Jir(n.dir),
            await s(),
            o(`Removed remote-control server for ${n.dir}.`, {
              display: "system",
            }));
        else
          o(
            "The background server picks up config changes automatically \u2014 no restart needed.",
            {
              display: "system",
            },
          );
      } catch (k) {
        let D = k;
        (ke(D),
          o(`Action failed: ${be(D)}`, {
            display: "system",
          }));
      }
    }),
      (t[0] = i),
      (t[1] = o),
      (t[2] = s),
      (t[3] = n.dir),
      (t[4] = u));
  else u = t[4];
  let d = u;
  if (l) {
    let x = n.dir,
      I;
    if (t[5] === Symbol.for("react.memo_cache_sentinel")) ((I = mb()), (t[5] = I));
    else I = t[5];
    let k = `Stop serving ${x} to claude.ai. The ${I} will stop the worker on its next reconcile.`,
      D;
    if (t[6] === Symbol.for("react.memo_cache_sentinel")) ((D = () => c(false)), (t[6] = D));
    else D = t[6];
    let P;
    if (t[7] !== d) ((P = () => void d("remove")), (t[7] = d), (t[8] = P));
    else P = t[8];
    let O;
    if (t[9] === Symbol.for("react.memo_cache_sentinel")) ((O = () => c(false)), (t[9] = O));
    else O = t[9];
    let L;
    if (t[10] !== P)
      ((L = Zq.jsx(Kl, {
        cancelFirst: true,
        focus: "cancel",
        confirmLabel: "Yes, remove",
        cancelLabel: "No, cancel",
        onConfirm: P,
        onCancel: O,
      })),
        (t[10] = P),
        (t[11] = L));
    else L = t[11];
    let M;
    if (t[12] !== k || t[13] !== L)
      ((M = Zq.jsx(zn, {
        title: "Remove server?",
        subtitle: k,
        onCancel: D,
        color: "error",
        children: L,
      })),
        (t[12] = k),
        (t[13] = L),
        (t[14] = M));
    else M = t[14];
    return M;
  }
  let p;
  if (t[15] === Symbol.for("react.memo_cache_sentinel"))
    ((p = [
      {
        label: `Restart ${mb()}`,
        value: "restart",
      },
      {
        label: "Remove",
        value: "remove",
      },
      {
        label: "Back",
        value: "back",
      },
    ]),
      (t[15] = p));
  else p = t[15];
  let f = p,
    m;
  if (t[16] !== n.dir)
    ((m = Zq.jsxs(w, {
      dimColor: true,
      children: ["Directory ", n.dir],
    })),
      (t[16] = n.dir),
      (t[17] = m));
  else m = t[17];
  let g;
  if (t[18] !== n.spawnMode)
    ((g = Zq.jsxs(w, {
      dimColor: true,
      children: ["Spawn mode ", n.spawnMode],
    })),
      (t[18] = n.spawnMode),
      (t[19] = g));
  else g = t[19];
  let h = n.isRunning ? "success" : "pending",
    y;
  if (t[20] !== h)
    ((y = Zq.jsx(Hs, {
      status: h,
      withSpace: true,
    })),
      (t[20] = h),
      (t[21] = y));
  else y = t[21];
  let b = n.isRunning ? "running" : "not running",
    _;
  if (t[22] !== y || t[23] !== b)
    ((_ = Zq.jsxs(w, {
      dimColor: true,
      children: ["Status", "     ", y, b],
    })),
      (t[22] = y),
      (t[23] = b),
      (t[24] = _));
  else _ = t[24];
  let S;
  if (t[25] !== m || t[26] !== g || t[27] !== _)
    ((S = Zq.jsxs(U, {
      flexDirection: "column",
      marginBottom: 1,
      children: [m, g, _],
    })),
      (t[25] = m),
      (t[26] = g),
      (t[27] = _),
      (t[28] = S));
  else S = t[28];
  let A;
  if (t[29] !== r || t[30] !== d)
    ((A = (x) => {
      if (x === "back") return r();
      if (x === "remove") return c(true);
      d(x);
    }),
      (t[29] = r),
      (t[30] = d),
      (t[31] = A));
  else A = t[31];
  let v;
  if (t[32] !== i || t[33] !== r || t[34] !== A)
    ((v = Zq.jsx(Sr, {
      options: f,
      isDisabled: i,
      onChange: A,
      onCancel: r,
    })),
      (t[32] = i),
      (t[33] = r),
      (t[34] = A),
      (t[35] = v));
  else v = t[35];
  let C;
  if (t[36] !== r || t[37] !== n.name || t[38] !== v || t[39] !== S)
    ((C = Zq.jsxs(zn, {
      title: n.name,
      onCancel: r,
      children: [S, v],
    })),
      (t[36] = r),
      (t[37] = n.name),
      (t[38] = v),
      (t[39] = S),
      (t[40] = C));
  else C = t[40];
  return C;
}
function Otc(e) {
  let t = bGo.c(48),
    { defaultDir: n, onCancel: r, onAdded: o } = e,
    s;
  if (t[0] !== n) ((s = pTe.basename(n)), (t[0] = n), (t[1] = s));
  else s = t[1];
  let i;
  if (t[2] !== n || t[3] !== s)
    ((i = {
      dir: n,
      name: s,
      spawnMode: "same-dir",
    }),
      (t[2] = n),
      (t[3] = s),
      (t[4] = i));
  else i = t[4];
  let [a, l] = xYe.useState(i),
    [c, u] = xYe.useState(false),
    [d, p] = xYe.useState(null),
    [f, m] = xYe.useState(false),
    g;
  if (t[5] !== n || t[6] !== c)
    ((g = function (N, B) {
      if (N === "name") u(true);
      l(($) => {
        if ($[N] === B) return $;
        let q = {
          ...$,
          [N]: B,
        };
        if (N === "dir" && !c) q.name = pTe.basename(pTe.resolve(LR(B.trim() || n)));
        return q;
      });
    }),
      (t[5] = n),
      (t[6] = c),
      (t[7] = g));
  else g = t[7];
  let h = g,
    y;
  if (t[8] !== n || t[9] !== a.dir)
    ((y = pTe.resolve(LR(a.dir?.trim() || n))), (t[8] = n), (t[9] = a.dir), (t[10] = y));
  else y = t[10];
  let b = y,
    _;
  if (t[11] !== n)
    ((_ = (M) => {
      let N = pTe.resolve(LR(M.trim() || n));
      return YSt(N)
        ? "Available on claude.ai/code and the Claude mobile app."
        : `${N} is not yet trusted \u2014 you'll be asked to trust it on submit.`;
    }),
      (t[11] = n),
      (t[12] = _));
  else _ = t[12];
  let S;
  if (t[13] !== n || t[14] !== _)
    ((S = {
      type: "text",
      key: "dir",
      label: "Directory",
      placeholder: n,
      required: true,
      hint: _,
    }),
      (t[13] = n),
      (t[14] = _),
      (t[15] = S));
  else S = t[15];
  let A;
  if (t[16] !== c)
    ((A = {
      type: "text",
      key: "name",
      label: "Name",
      hint: () =>
        c ? "Shown in the claude.ai session picker." : "Auto-generated from the directory name.",
    }),
      (t[16] = c),
      (t[17] = A));
  else A = t[17];
  let v;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((v = {
      type: "select",
      key: "spawnMode",
      label: "Spawn mode",
      options: [
        {
          label: "same-dir",
          value: "same-dir",
        },
        {
          label: "worktree",
          value: "worktree",
        },
      ],
      hint: y7f,
    }),
      (t[18] = v));
  else v = t[18];
  let C;
  if (t[19] !== S || t[20] !== A) ((C = [S, A, v]), (t[19] = S), (t[20] = A), (t[21] = C));
  else C = t[21];
  let x = C,
    I;
  if (t[22] !== o || t[23] !== r || t[24] !== a.name || t[25] !== a.spawnMode)
    ((I = async function (N) {
      m(true);
      let B = a.name?.trim() || pTe.basename(N),
        $ = a.spawnMode ?? "same-dir";
      try {
        (await Xir({
          dir: N,
          name: B,
          spawnMode: $,
        }),
          o(N, void 0));
      } catch (q) {
        (ke(q), m(false), r());
      }
    }),
      (t[22] = o),
      (t[23] = r),
      (t[24] = a.name),
      (t[25] = a.spawnMode),
      (t[26] = I));
  else I = t[26];
  let k = I,
    D;
  if (t[27] !== f || t[28] !== k || t[29] !== b)
    ((D = function () {
      if (f) return;
      if (!YSt(b)) {
        p(b);
        return;
      }
      k(b);
    }),
      (t[27] = f),
      (t[28] = k),
      (t[29] = b),
      (t[30] = D));
  else D = t[30];
  let P = D;
  if (d !== null) {
    let M = `${d} hasn't been trusted yet. Trusting allows Claude to read and execute files there.`,
      N;
    if (t[31] === Symbol.for("react.memo_cache_sentinel")) ((N = () => p(null)), (t[31] = N));
    else N = t[31];
    let B;
    if (t[32] !== k || t[33] !== d)
      ((B = () => {
        (JYt(d), p(null), k(d));
      }),
        (t[32] = k),
        (t[33] = d),
        (t[34] = B));
    else B = t[34];
    let $;
    if (t[35] === Symbol.for("react.memo_cache_sentinel")) (($ = () => p(null)), (t[35] = $));
    else $ = t[35];
    let q;
    if (t[36] !== B)
      ((q = Zq.jsx(Kl, {
        cancelFirst: true,
        focus: "cancel",
        confirmLabel: "Yes, trust and add server",
        cancelLabel: "No, go back",
        onConfirm: B,
        onCancel: $,
      })),
        (t[36] = B),
        (t[37] = q));
    else q = t[37];
    let W;
    if (t[38] !== M || t[39] !== q)
      ((W = Zq.jsx(zn, {
        title: "Trust this directory?",
        subtitle: M,
        onCancel: N,
        children: q,
      })),
        (t[38] = M),
        (t[39] = q),
        (t[40] = W));
    else W = t[40];
    return W;
  }
  let O = f ? "Adding\u2026" : "Add server",
    L;
  if (t[41] !== x || t[42] !== P || t[43] !== r || t[44] !== h || t[45] !== O || t[46] !== a)
    ((L = Zq.jsx(qPe, {
      title: "New Remote Control server",
      subtitle: "Make a directory available on claude.ai/code and the Claude mobile app",
      fields: x,
      values: a,
      onChange: h,
      onSubmit: P,
      onCancel: r,
      submitLabel: O,
    })),
      (t[41] = x),
      (t[42] = P),
      (t[43] = r),
      (t[44] = h),
      (t[45] = O),
      (t[46] = a),
      (t[47] = L));
  else L = t[47];
  return L;
}
function y7f(e) {
  return e === "worktree"
    ? "Each session gets its own git worktree (requires a git repo)."
    : "All sessions share the directory.";
}
var bGo, pTe, xYe, Zq;
