// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module djo
// matched 2.1.88 source: src/components/tasks/ShellDetailDialog.tsx
// class=modified  jaccard=0.3145  score=0.4269  fileCov=0.5444
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module djo] deps: si, Xa, Yyt, Ye, JJ, fh, G1, vy, At, es, H1e, co, sr, gP, Vl, Bs, Fy, vi, Ko, gm, d_t, ljo
((usr = R(lt(), 1)), (R8l = R(rt(), 1)), (aYe = R(rt(), 1)), (fa = R(se(), 1)));
((d5f = {
  needs_input: "input required",
  plan_ready: "ready",
}),
  (p5f = {
    needs_input: "waiting",
    plan_ready: "done",
  }));
((x8l = ["finding", "verifying", "synthesizing"]),
  (k8l = {
    finding: "Find",
    verifying: "Verify",
    synthesizing: "Dedupe",
  }));
async function D8l(e) {
  let t = jm(e.id);
  try {
    let n = await vx(t, y5f);
    return {
      content: n.content,
      bytesTotal: n.bytesTotal,
    };
  } catch {
    return {
      content: "",
      bytesTotal: 0,
    };
  }
}
function ShellDetailDialog(e) {
  let t = pjo.c(61),
    { shell: n, onDone: r, onKillShell: o, onBack: s } = e,
    { columns: i } = br(),
    a;
  if (t[0] !== n) ((a = () => D8l(n)), (t[0] = n), (t[1] = a));
  else a = t[1];
  let [l, c] = T1e.useState(a),
    u = T1e.useDeferredValue(l),
    d;
  if (t[2] !== n) ((d = () => c(D8l(n))), (t[2] = n), (t[3] = d));
  else d = t[3];
  Gc(d, n.status === "running" ? 1000 : null);
  let p;
  if (t[4] !== r)
    ((p = () =>
      r("Shell details dismissed", {
        display: "system",
      })),
      (t[4] = r),
      (t[5] = p));
  else p = t[5];
  let f = p,
    m;
  if (t[6] !== f)
    ((m = {
      "confirm:yes": f,
    }),
      (t[6] = f),
      (t[7] = m));
  else m = t[7];
  let g;
  if (t[8] === Symbol.for("react.memo_cache_sentinel"))
    ((g = {
      context: "Confirmation",
    }),
      (t[8] = g));
  else g = t[8];
  No(m, g);
  let h;
  if (t[9] !== s || t[10] !== r || t[11] !== o || t[12] !== n.status)
    ((h = (oe) => {
      if (oe.key === " ")
        (oe.preventDefault(),
          r("Shell details dismissed", {
            display: "system",
          }));
      else if (oe.key === "left" && s) (oe.preventDefault(), s());
      else if (oe.key === "x" && !oe.ctrl && !oe.meta && n.status === "running" && o)
        (oe.preventDefault(), o());
    }),
      (t[9] = s),
      (t[10] = r),
      (t[11] = o),
      (t[12] = n.status),
      (t[13] = h));
  else h = t[13];
  let y = h,
    b = n.kind === "monitor",
    _;
  if (t[14] !== n.command) ((_ = Rs(n.command, 280)), (t[14] = n.command), (t[15] = _));
  else _ = t[15];
  let S = _,
    A = b ? "Monitor details" : "Shell details",
    v;
  if (t[16] !== s)
    ((v =
      s &&
      T_.jsx(ht, {
        chord: "left",
        action: "go back",
      })),
      (t[16] = s),
      (t[17] = v));
  else v = t[17];
  let C;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((C = T_.jsx(ht, {
      chord: ["escape", "enter", "space"],
      action: "close",
    })),
      (t[18] = C));
  else C = t[18];
  let x;
  if (t[19] !== o || t[20] !== n.status)
    ((x =
      n.status === "running" &&
      o &&
      T_.jsx(ht, {
        chord: "x",
        action: "stop",
      })),
      (t[19] = o),
      (t[20] = n.status),
      (t[21] = x));
  else x = t[21];
  let I;
  if (t[22] !== x || t[23] !== v)
    ((I = T_.jsxs(Tn, {
      children: [v, C, x],
    })),
      (t[22] = x),
      (t[23] = v),
      (t[24] = I));
  else I = t[24];
  let k;
  if (t[25] === Symbol.for("react.memo_cache_sentinel"))
    ((k = [
      {
        bold: true,
      },
      {
        width: {
          ratio: 1,
        },
      },
    ]),
      (t[25] = k));
  else k = t[25];
  let D = i - 6,
    P;
  if (t[26] === Symbol.for("react.memo_cache_sentinel"))
    ((P = T_.jsx(T_.Fragment, {
      children: "Status:",
    })),
      (t[26] = P));
  else P = t[26];
  let O;
  if (t[27] !== n.result || t[28] !== n.status)
    ((O = T_.jsxs(Km.Row, {
      children: [
        P,
        n.status === "running"
          ? T_.jsxs(w, {
              color: "background",
              children: [n.status, n.result?.code !== void 0 && ` (exit code: ${n.result.code})`],
            })
          : n.status === "completed"
            ? T_.jsxs(w, {
                color: "success",
                children: [n.status, n.result?.code !== void 0 && ` (exit code: ${n.result.code})`],
              })
            : T_.jsxs(w, {
                color: "error",
                children: [n.status, n.result?.code !== void 0 && ` (exit code: ${n.result.code})`],
              }),
      ],
    })),
      (t[27] = n.result),
      (t[28] = n.status),
      (t[29] = O));
  else O = t[29];
  let L;
  if (t[30] === Symbol.for("react.memo_cache_sentinel"))
    ((L = T_.jsx(T_.Fragment, {
      children: "Runtime:",
    })),
      (t[30] = L));
  else L = t[30];
  let M;
  if (t[31] !== n.endTime) ((M = n.endTime ?? Date.now()), (t[31] = n.endTime), (t[32] = M));
  else M = t[32];
  let N = M - n.startTime,
    B;
  if (t[33] !== N) ((B = Yi(N)), (t[33] = N), (t[34] = B));
  else B = t[34];
  let $;
  if (t[35] !== B)
    (($ = T_.jsxs(Km.Row, {
      children: [L, B],
    })),
      (t[35] = B),
      (t[36] = $));
  else $ = t[36];
  let q = b ? "Script:" : "Command:",
    W;
  if (t[37] !== q)
    ((W = T_.jsx(T_.Fragment, {
      children: q,
    })),
      (t[37] = q),
      (t[38] = W));
  else W = t[38];
  let V;
  if (t[39] !== S || t[40] !== W)
    ((V = T_.jsxs(Km.Row, {
      children: [W, S],
    })),
      (t[39] = S),
      (t[40] = W),
      (t[41] = V));
  else V = t[41];
  let Y;
  if (t[42] !== D || t[43] !== O || t[44] !== $ || t[45] !== V)
    ((Y = T_.jsxs(Km, {
      box: "plain",
      columns: k,
      forceWidth: D,
      children: [O, $, V],
    })),
      (t[42] = D),
      (t[43] = O),
      (t[44] = $),
      (t[45] = V),
      (t[46] = Y));
  else Y = t[46];
  let z;
  if (t[47] === Symbol.for("react.memo_cache_sentinel"))
    ((z = T_.jsx(w, {
      bold: true,
      children: "Output:",
    })),
      (t[47] = z));
  else z = t[47];
  let K;
  if (t[48] === Symbol.for("react.memo_cache_sentinel"))
    ((K = T_.jsx(w, {
      dimColor: true,
      children: "Loading output\u2026",
    })),
      (t[48] = K));
  else K = t[48];
  let Z;
  if (t[49] !== i || t[50] !== u)
    ((Z = T_.jsxs(U, {
      flexDirection: "column",
      children: [
        z,
        T_.jsx(T1e.Suspense, {
          fallback: K,
          children: T_.jsx(ShellOutputContent, {
            outputPromise: u,
            columns: i,
          }),
        }),
      ],
    })),
      (t[49] = i),
      (t[50] = u),
      (t[51] = Z));
  else Z = t[51];
  let J;
  if (t[52] !== f || t[53] !== I || t[54] !== Y || t[55] !== Z || t[56] !== A)
    ((J = T_.jsxs(zn, {
      title: A,
      onCancel: f,
      color: "background",
      inputGuide: I,
      children: [Y, Z],
    })),
      (t[52] = f),
      (t[53] = I),
      (t[54] = Y),
      (t[55] = Z),
      (t[56] = A),
      (t[57] = J));
  else J = t[57];
  let ne;
  if (t[58] !== y || t[59] !== J)
    ((ne = T_.jsx(U, {
      flexDirection: "column",
      tabIndex: 0,
      autoFocus: true,
      onKeyDown: y,
      children: J,
    })),
      (t[58] = y),
      (t[59] = J),
      (t[60] = ne));
  else ne = t[60];
  return ne;
}
function ShellOutputContent(e) {
  let t = pjo.c(19),
    { outputPromise: n, columns: r } = e,
    { content: o, bytesTotal: s } = T1e.use(n);
  if (!o) {
    let g;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((g = T_.jsx(Fl, {
        children: "No output available",
      })),
        (t[0] = g));
    else g = t[0];
    return g;
  }
  let i, a;
  if (t[1] !== s || t[2] !== o) {
    let g = [],
      h = o.length;
    for (let y = 0; y < 10 && h > 0; y++) {
      let b = o.lastIndexOf(
        `
`,
        h - 1,
      );
      (g.push(b + 1), (h = b));
    }
    (g.reverse(), (i = s > o.length), (a = []));
    for (let y = 0; y < g.length; y++) {
      let b = g[y],
        _ = y < g.length - 1 ? g[y + 1] - 1 : o.length,
        S = o.slice(b, _);
      if (S) a.push(S);
    }
    ((t[1] = s), (t[2] = o), (t[3] = i), (t[4] = a));
  } else ((i = t[3]), (a = t[4]));
  let l = r - 6,
    c;
  if (t[5] !== a) ((c = a.map(_temp2)), (t[5] = a), (t[6] = c));
  else c = t[6];
  let u;
  if (t[7] !== l || t[8] !== c)
    ((u = T_.jsx(U, {
      borderStyle: "round",
      paddingX: 1,
      flexDirection: "column",
      height: 12,
      maxWidth: l,
      children: c,
    })),
      (t[7] = l),
      (t[8] = c),
      (t[9] = u));
  else u = t[9];
  let d = `Showing ${a.length} lines`,
    p;
  if (t[10] !== s || t[11] !== i)
    ((p = i ? ` of ${Ra(s)}` : ""), (t[10] = s), (t[11] = i), (t[12] = p));
  else p = t[12];
  let f;
  if (t[13] !== d || t[14] !== p)
    ((f = T_.jsxs(w, {
      dimColor: true,
      italic: true,
      children: [d, p],
    })),
      (t[13] = d),
      (t[14] = p),
      (t[15] = f));
  else f = t[15];
  let m;
  if (t[16] !== u || t[17] !== f)
    ((m = T_.jsxs(T_.Fragment, {
      children: [u, f],
    })),
      (t[16] = u),
      (t[17] = f),
      (t[18] = m));
  else m = t[18];
  return m;
}
function _temp2(e, t) {
  return T_.jsx(
    w,
    {
      wrap: "truncate-end",
      children: e,
    },
    t,
  );
}
var pjo,
  T1e,
  T_,
  y5f = 8192;
