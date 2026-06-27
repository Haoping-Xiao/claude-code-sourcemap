// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module XJl
// matched 2.1.88 source: src/components/RemoteEnvironmentDialog.tsx
// class=modified  jaccard=0.2051  score=0.2885  fileCov=0.415
// note: deminified; 3 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
function RemoteEnvironmentDialog(t0) {
  let t = n3o.c(28),
    { onDone: n } = t0,
    [r, o] = uTe.useState("loading"),
    s;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((s = []), (t[0] = s));
  else s = t[0];
  let [i, a] = uTe.useState(s),
    [l, c] = uTe.useState(null),
    [u, d] = uTe.useState(null),
    [p, f] = uTe.useState(null),
    [m, g] = uTe.useState(null),
    h,
    y;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((h = () => {
      let A = false;
      return (
        (async function () {
          try {
            let x = await YJl();
            if (A) return;
            (a(x.availableTargets),
              c(x.selectedTarget),
              d(x.selectedTargetSource),
              f(x.environmentsError),
              o(null));
          } catch (x) {
            let I = x;
            if (A) return;
            let k = Zr(I);
            (T(`Failed to fetch remote environments: ${k.message}`, {
              level: "error",
            }),
              g(k.message),
              o(null));
          }
        })(),
        () => {
          A = true;
        }
      );
    }),
      (y = []),
      (t[1] = h),
      (t[2] = y));
  else ((h = t[1]), (y = t[2]));
  uTe.useEffect(h, y);
  let b;
  if (t[3] !== n || t[4] !== i)
    ((b = function (v) {
      if (v === "cancel") {
        n();
        return;
      }
      o("updating");
      let C = i.find((I) => yEe(I) === v);
      if (!C) {
        n("Error: Selected environment not found");
        return;
      }
      (io("localSettings", {
        remote: {
          defaultEnvironmentId: yEe(C),
        },
      }),
        n(`Set default ${"remote environment"} to ${wt.bold(C.name)} (${yEe(C)})`));
    }),
      (t[3] = n),
      (t[4] = i),
      (t[5] = b));
  else b = t[5];
  let _ = b;
  if (r === "loading") {
    let A;
    if (t[6] === Symbol.for("react.memo_cache_sentinel"))
      ((A = lx.jsx(Vc, {
        message: "Loading environments\u2026",
      })),
        (t[6] = A));
    else A = t[6];
    let v;
    if (t[7] !== n)
      ((v = lx.jsx(zn, {
        title: gir,
        onCancel: n,
        hideInputGuide: true,
        children: A,
      })),
        (t[7] = n),
        (t[8] = v));
    else v = t[8];
    return v;
  }
  if (m) {
    let A;
    if (t[9] !== m)
      ((A = lx.jsxs(w, {
        color: "error",
        children: ["Error: ", m],
      })),
        (t[9] = m),
        (t[10] = A));
    else A = t[10];
    let v;
    if (t[11] !== n || t[12] !== A)
      ((v = lx.jsx(zn, {
        title: gir,
        onCancel: n,
        children: A,
      })),
        (t[11] = n),
        (t[12] = A),
        (t[13] = v));
    else v = t[13];
    return v;
  }
  if (!l) {
    let A;
    if (t[14] === Symbol.for("react.memo_cache_sentinel"))
      ((A = lx.jsx(w, {
        children: "No remote environments available.",
      })),
        (t[14] = A));
    else A = t[14];
    let v;
    if (t[15] !== p)
      ((v =
        p &&
        lx.jsxs(w, {
          dimColor: true,
          children: ["(couldn't list environments: ", p, ")"],
        })),
        (t[15] = p),
        (t[16] = v));
    else v = t[16];
    let C;
    if (t[17] !== n || t[18] !== v)
      ((C = lx.jsxs(zn, {
        title: gir,
        subtitle: SETUP_HINT,
        onCancel: n,
        children: [A, v],
      })),
        (t[17] = n),
        (t[18] = v),
        (t[19] = C));
    else C = t[19];
    return C;
  }
  let S;
  if (
    t[20] !== p ||
    t[21] !== _ ||
    t[22] !== r ||
    t[23] !== n ||
    t[24] !== l ||
    t[25] !== u ||
    t[26] !== i
  )
    ((S = lx.jsx(MultipleEnvironmentsContent, {
      targets: i,
      selectedTarget: l,
      selectedTargetSource: u,
      environmentsError: p,
      loadingState: r,
      onSelect: _,
      onCancel: n,
    })),
      (t[20] = p),
      (t[21] = _),
      (t[22] = r),
      (t[23] = n),
      (t[24] = l),
      (t[25] = u),
      (t[26] = i),
      (t[27] = S));
  else S = t[27];
  return S;
}
function JJl(e) {
  let t = yEe(e),
    n = "";
  return {
    label: lx.jsxs(w, {
      children: [
        e.name,
        " ",
        lx.jsxs(w, {
          dimColor: true,
          children: ["(", t, "", ")"],
        }),
      ],
    }),
    value: t,
  };
}
function MultipleEnvironmentsContent(t0) {
  let t = n3o.c(24),
    {
      targets: n,
      selectedTarget: r,
      selectedTargetSource: o,
      environmentsError: s,
      loadingState: i,
      onSelect: a,
      onCancel: l,
    } = t0,
    c;
  if (t[0] !== o)
    ((c = o && o !== "localSettings" ? ` (from ${wG(o)} settings)` : ""), (t[0] = o), (t[1] = c));
  else c = t[1];
  let u = c,
    d;
  if (t[2] !== r || t[3] !== o || t[4] !== u)
    ((d = o
      ? lx.jsxs(w, {
          children: [
            "Currently using: ",
            lx.jsx(w, {
              bold: true,
              children: r.name,
            }),
            u,
          ],
        })
      : void 0),
      (t[2] = r),
      (t[3] = o),
      (t[4] = u),
      (t[5] = d));
  else d = t[5];
  let p = d,
    f,
    m;
  if (t[6] !== n) {
    f = n.filter(B6f);
    let A = n.filter(Wjn);
    ((m = [...f.map(JJl), ...[], ...A.map(JJl)]), (t[6] = n), (t[7] = f), (t[8] = m));
  } else ((f = t[7]), (m = t[8]));
  let g = m,
    h;
  if (t[9] === Symbol.for("react.memo_cache_sentinel"))
    ((h = lx.jsx(w, {
      dimColor: true,
      children: SETUP_HINT,
    })),
      (t[9] = h));
  else h = t[9];
  let y;
  if (t[10] !== s || t[11] !== f)
    ((y =
      s &&
      f.length === 0 &&
      lx.jsxs(w, {
        dimColor: true,
        children: ["(couldn't list environments: ", s, ")"],
      })),
      (t[10] = s),
      (t[11] = f),
      (t[12] = y));
  else y = t[12];
  let b;
  if (t[13] !== i || t[14] !== a || t[15] !== g || t[16] !== r)
    ((b =
      i === "updating"
        ? lx.jsx(Vc, {
            message: "Updating\u2026",
          })
        : lx.jsx(Sr, {
            options: g,
            defaultValue: yEe(r),
            onChange: a,
            onCancel: () => a("cancel"),
            layout: "compact-vertical",
          })),
      (t[13] = i),
      (t[14] = a),
      (t[15] = g),
      (t[16] = r),
      (t[17] = b));
  else b = t[17];
  let _;
  if (t[18] === Symbol.for("react.memo_cache_sentinel"))
    ((_ = lx.jsx(w, {
      dimColor: true,
      children: lx.jsxs(Tn, {
        children: [
          lx.jsx(ht, {
            chord: "enter",
            action: "select",
          }),
          lx.jsx(mr, {
            action: "confirm:no",
            context: "Confirmation",
            fallback: "Esc",
            description: "cancel",
          }),
        ],
      }),
    })),
      (t[18] = _));
  else _ = t[18];
  let S;
  if (t[19] !== l || t[20] !== p || t[21] !== y || t[22] !== b)
    ((S = lx.jsxs(zn, {
      title: gir,
      subtitle: p,
      onCancel: l,
      hideInputGuide: true,
      children: [h, y, b, _],
    })),
      (t[19] = l),
      (t[20] = p),
      (t[21] = y),
      (t[22] = b),
      (t[23] = S));
  else S = t[23];
  return S;
}
function B6f(e) {
  return !Wjn(e);
}
var n3o,
  uTe,
  lx,
  gir = "Select remote environment",
  SETUP_HINT = "Configure environments at: https://claude.ai/code";
