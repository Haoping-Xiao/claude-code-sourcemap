// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vXl
// matched 2.1.88 source: src/commands/sandbox-toggle/index.ts
// class=modified  jaccard=0.2272  score=0.2548  fileCov=0.6767
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var vXl = E(() => {
  si();
  lg();
  ((p8f = {
    name: "sandbox",
    get description() {
      let e = xo.isSandboxingEnabled(),
        t = xo.isAutoAllowBashIfSandboxedEnabled(),
        n = xo.areUnsandboxedCommandsAllowed(),
        r = xo.areSandboxSettingsLockedByPolicy() || xo.areUnsandboxedCommandsForbiddenByPolicy(),
        o = xo.checkDependencies().errors.length === 0,
        s;
      if (!o) s = nt.warning;
      else s = e ? nt.tick : nt.circle;
      let i = "sandbox disabled";
      if (e)
        ((i = t ? "sandbox enabled (auto-allow)" : "sandbox enabled"),
          (i += n ? ", fallback allowed" : ""));
      if (r) i += " (managed)";
      return `${s} ${i} (\u23CE to configure)`;
    },
    argumentHint: 'exclude "command pattern"',
    get isHidden() {
      return !xo.isSupportedPlatform() || !xo.isPlatformInEnabledList();
    },
    immediate: !0,
    type: "local-jsx",
    load: () => Promise.resolve().then(() => (HXl(), EXl)),
  }),
    (TXl = p8f));
});
function wXl(e) {
  let t = w4o.c(36),
    { chromeClient: n, onDone: r } = e,
    [o, s] = D1e.useState(null),
    [i, a] = D1e.useState(null),
    [l, c] = D1e.useState(!1),
    u = D1e.useRef(!1),
    d;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((d = Dt().chromeExtension?.pairedDeviceId), (t[0] = d));
  else d = t[0];
  let p = d,
    f,
    m;
  if (t[1] !== n)
    ((f = () => (
      (u.current = !1),
      m8f(n)
        .then((k) => {
          if (!u.current) s(k);
        })
        .catch((k) => {
          if ((Le("chrome_browser_picker", "list_failed"), !u.current)) a(Zr(k).message);
        }),
      () => {
        u.current = !0;
      }
    )),
      (m = [n]),
      (t[1] = n),
      (t[2] = f),
      (t[3] = m));
  else ((f = t[2]), (m = t[3]));
  D1e.useEffect(f, m);
  let g;
  if (t[4] !== r)
    ((g = function (D) {
      if (u.current) return;
      ((u.current = !0), r(D));
    }),
      (t[4] = r),
      (t[5] = g));
  else g = t[5];
  let h = g,
    y;
  if (t[6] !== o || t[7] !== n || t[8] !== h || t[9] !== l)
    ((y = function (D) {
      if (l) return;
      c(!0);
      let P = o?.find((O) => O.deviceId === D);
      CXl(n, "select_browser", {
        deviceId: D,
      })
        .then(() => {
          (xe("chrome_browser_picker"),
            h(P ? `Now using browser "${P.name}" for Chrome actions.` : void 0));
        })
        .catch((O) => {
          (Le("chrome_browser_picker", "select_failed"),
            T(`claude-in-chrome select_browser failed: ${Zr(O).message}`, {
              level: "error",
            }),
            h(`Couldn't switch browser: ${Zr(O).message}`));
        });
    }),
      (t[6] = o),
      (t[7] = n),
      (t[8] = h),
      (t[9] = l),
      (t[10] = y));
  else y = t[10];
  let b = y;
  if (i) {
    let k = `Couldn't list connected browsers: ${i}`,
      D;
    if (t[11] !== k)
      ((D = Z$.jsx(w, {
        color: "error",
        children: k,
      })),
        (t[11] = k),
        (t[12] = D));
    else D = t[12];
    let P;
    if (t[13] !== h || t[14] !== D)
      ((P = Z$.jsx(v4o, {
        onDone: h,
        children: D,
      })),
        (t[13] = h),
        (t[14] = D),
        (t[15] = P));
    else P = t[15];
    return P;
  }
  if (o === null) {
    let k;
    if (t[16] === Symbol.for("react.memo_cache_sentinel"))
      ((k = Z$.jsx(w, {
        dimColor: !0,
        children: "Looking for connected browsers\u2026",
      })),
        (t[16] = k));
    else k = t[16];
    let D;
    if (t[17] !== h)
      ((D = Z$.jsx(v4o, {
        onDone: h,
        children: k,
      })),
        (t[17] = h),
        (t[18] = D));
    else D = t[18];
    return D;
  }
  if (o.length === 0) {
    let k;
    if (t[19] === Symbol.for("react.memo_cache_sentinel"))
      ((k = Z$.jsx(w, {
        children:
          "No browsers are connected. Open Chrome with the Claude extension and make sure you're signed in to the same claude.ai account.",
      })),
        (t[19] = k));
    else k = t[19];
    let D;
    if (t[20] !== h)
      ((D = Z$.jsx(v4o, {
        onDone: h,
        children: k,
      })),
        (t[20] = h),
        (t[21] = D));
    else D = t[21];
    return D;
  }
  let _;
  if (t[22] !== o) {
    let k;
    if (t[24] === Symbol.for("react.memo_cache_sentinel"))
      ((k = (D) => ({
        value: D.deviceId,
        label: Z$.jsxs(Z$.Fragment, {
          children: [
            Z$.jsx(w, {
              children: D.name,
            }),
            Z$.jsxs(w, {
              dimColor: !0,
              children: [
                " ",
                "\xB7 ",
                D.osPlatform ?? "unknown OS",
                D.deviceId === p ? " \xB7 current" : "",
              ],
            }),
          ],
        }),
      })),
        (t[24] = k));
    else k = t[24];
    ((_ = o.map(k)), (t[22] = o), (t[23] = _));
  } else _ = t[23];
  let S = _,
    A =
      o.length === 1
        ? "One browser is connected:"
        : `Choose which browser to use (${o.length} connected):`,
    v;
  if (t[25] !== A)
    ((v = Z$.jsx(w, {
      children: A,
    })),
      (t[25] = A),
      (t[26] = v));
  else v = t[26];
  let C;
  if (t[27] !== h) ((C = () => h()), (t[27] = h), (t[28] = C));
  else C = t[28];
  let x;
  if (t[29] !== b || t[30] !== S || t[31] !== C)
    ((x = Z$.jsx(Sr, {
      options: S,
      onChange: b,
      onCancel: C,
      defaultFocusValue: p,
      hideIndexes: !0,
    })),
      (t[29] = b),
      (t[30] = S),
      (t[31] = C),
      (t[32] = x));
  else x = t[32];
  let I;
  if (t[33] !== x || t[34] !== v)
    ((I = Z$.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [v, x],
    })),
      (t[33] = x),
      (t[34] = v),
      (t[35] = I));
  else I = t[35];
  return I;
}
function v4o(e) {
  let t = w4o.c(6),
    { onDone: n, children: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = [
      {
        value: "back",
        label: "\u2039 Back",
      },
    ]),
      (t[0] = o));
  else o = t[0];
  let s;
  if (t[1] !== n)
    ((s = Z$.jsx(Sr, {
      options: o,
      onChange: () => n(),
      onCancel: () => n(),
      hideIndexes: !0,
    })),
      (t[1] = n),
      (t[2] = s));
  else s = t[2];
  let i;
  if (t[3] !== r || t[4] !== s)
    ((i = Z$.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [r, s],
    })),
      (t[3] = r),
      (t[4] = s),
      (t[5] = i));
  else i = t[5];
  return i;
}
async function m8f(e) {
  let t = await CXl(e, "list_connected_browsers", {});
  if (!t) return [];
  let n = H.array(f8f()).safeParse(Ft(t));
  return n.success ? n.data : [];
}
async function CXl(e, t, n) {
  let r = await e.client.callTool({
      name: t,
      arguments: n,
    }),
    o = Array.isArray(r.content) ? r.content[0] : void 0;
  return o && typeof o === "object" && "text" in o && typeof o.text === "string" ? o.text : void 0;
}
var w4o, D1e, Z$, f8f;
