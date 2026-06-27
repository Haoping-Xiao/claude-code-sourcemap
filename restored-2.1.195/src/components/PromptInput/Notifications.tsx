// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Uhc
// matched 2.1.88 source: src/components/PromptInput/Notifications.tsx
// class=modified  jaccard=0.2592  score=0.5583  fileCov=0.3261
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Uhc] deps: Ed, Ye, Un, kt, $hc, vn
((Nhc = R(lt(), 1)), (odr = R(rt(), 1)), (rdr = R(se(), 1)));
function idr(e) {
  let t = jhc.c(40),
    {
      apiKeyStatus: n,
      isAutoUpdating: r,
      verbose: o,
      tokenUsage: s,
      onChangeIsUpdating: i,
      isInputWrapped: a,
      hasStash: l,
    } = e,
    c = a === void 0 ? !1 : a,
    u = l === void 0 ? !1 : l,
    d = kH(),
    p = Ht(zdm),
    f;
  if (t[0] !== p || t[1] !== d || t[2] !== s)
    ((f = rLe(s, d, p)), (t[0] = p), (t[1] = d), (t[2] = s), (t[3] = f));
  else f = t[3];
  let m = f.level !== "ok",
    g = Wur(),
    h = Ht(Vdm),
    y = Ht(qdm),
    { addNotification: b, removeNotification: _ } = Li(),
    S = Wpe(),
    A,
    v;
  if (t[4] !== b)
    ((A = () => (
      _ao((Z, J) => {
        b({
          key: "env-hook",
          kind: "event",
          text: Z,
          color: J ? "error" : void 0,
          priority: J ? "medium" : "low",
          timeoutMs: J ? 8000 : 5000,
        });
      }),
      Wdm
    )),
      (v = [b]),
      (t[4] = b),
      (t[5] = A),
      (t[6] = v));
  else ((A = t[5]), (v = t[6]));
  SNe.useEffect(A, v);
  let C = S.isUsingOverage,
    x;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) ((x = Di()), (t[7] = x));
  else x = t[7];
  let I = x,
    k = I === "team" || I === "enterprise",
    D;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) ((D = $q()), (t[8] = D));
  else D = t[8];
  let P = D,
    O = c && !m && n !== "invalid" && n !== "missing" && P !== void 0,
    L,
    M;
  if (t[9] !== b || t[10] !== _ || t[11] !== O)
    ((L = () => {
      if (O && P)
        (G("tengu_external_editor_hint_shown", {}),
          b({
            key: "external-editor-hint",
            kind: "hint",
            jsx: sy.jsx(w, {
              dimColor: !0,
              children: sy.jsx(mr, {
                action: "chat:externalEditor",
                context: "Chat",
                fallback: "ctrl+g",
                description: `edit in ${yk(P)}`,
              }),
            }),
            priority: "immediate",
            timeoutMs: 5000,
          }));
      else _("external-editor-hint");
    }),
      (M = [O, P, b, _]),
      (t[9] = b),
      (t[10] = _),
      (t[11] = O),
      (t[12] = L),
      (t[13] = M));
  else ((L = t[12]), (M = t[13]));
  SNe.useEffect(L, M);
  let N, B;
  if (
    t[14] !== b ||
    t[15] !== h ||
    t[16] !== m ||
    t[17] !== d ||
    t[18] !== _ ||
    t[19] !== g ||
    t[20] !== s
  )
    ((N = () => {
      if (m && !g && !h)
        b({
          key: "token-warning",
          jsx: sy.jsx(Thc, {
            tokenUsage: s,
            model: d,
          }),
          priority: "medium",
          timeoutMs: 18000000,
          fold: Gdm,
        });
      else _("token-warning");
    }),
      (B = [m, g, h, s, d, b, _]),
      (t[14] = b),
      (t[15] = h),
      (t[16] = m),
      (t[17] = d),
      (t[18] = _),
      (t[19] = g),
      (t[20] = s),
      (t[21] = N),
      (t[22] = B));
  else ((N = t[21]), (B = t[22]));
  SNe.useEffect(N, B);
  let $ = Boolean(y || (C && !k) || n === "invalid" || n === "missing" || o || r),
    q = C ?? !1,
    W;
  if (
    t[23] !== n ||
    t[24] !== r ||
    t[25] !== m ||
    t[26] !== i ||
    t[27] !== q ||
    t[28] !== s ||
    t[29] !== o
  )
    ((W = sy.jsx(U, {
      flexDirection: "column",
      alignItems: "flex-end",
      flexShrink: 1,
      overflowX: "hidden",
      children: sy.jsx(Kdm, {
        isInOverageMode: q,
        isTeamOrEnterprise: k,
        apiKeyStatus: n,
        verbose: o,
        tokenUsage: s,
        isAutoUpdating: r,
        isShowingCompactMessage: m,
        onChangeIsUpdating: i,
      }),
    })),
      (t[23] = n),
      (t[24] = r),
      (t[25] = m),
      (t[26] = i),
      (t[27] = q),
      (t[28] = s),
      (t[29] = o),
      (t[30] = W));
  else W = t[30];
  let V;
  if (t[31] !== $ || t[32] !== u)
    ((V =
      u &&
      sy.jsxs(U, {
        flexShrink: 0,
        children: [
          sy.jsx(w, {
            dimColor: !0,
            children: $ ? " \xB7 " : " ",
          }),
          sy.jsxs(w, {
            dimColor: !0,
            children: [nt.pointerSmall, " stashed"],
          }),
        ],
      })),
      (t[31] = $),
      (t[32] = u),
      (t[33] = V));
  else V = t[33];
  let Y = $ || u,
    z;
  if (t[34] !== Y)
    ((z = sy.jsx(Chc, {
      withSeparator: Y,
    })),
      (t[34] = Y),
      (t[35] = z));
  else z = t[35];
  let K;
  if (t[36] !== W || t[37] !== V || t[38] !== z)
    ((K = sy.jsx(s6e, {
      children: sy.jsxs(U, {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        flexShrink: 0,
        overflowX: "hidden",
        children: [W, V, z],
      }),
    })),
      (t[36] = W),
      (t[37] = V),
      (t[38] = z),
      (t[39] = K));
  else K = t[39];
  return K;
}
function Gdm(e, t) {
  return t;
}
function Wdm() {
  return _ao(null);
}
function qdm(e) {
  return e.notifications.current !== null;
}
function Vdm(e) {
  return e.isBriefOnly;
}
function zdm(e) {
  return e.autoCompactWindow;
}
function Kdm({
  isInOverageMode: e,
  isTeamOrEnterprise: t,
  apiKeyStatus: n,
  verbose: r,
  tokenUsage: o,
  isAutoUpdating: s,
  isShowingCompactMessage: i,
  onChangeIsUpdating: a,
}) {
  let [l, c] = SNe.useState(null),
    u = !vl() && Di() === "pro";
  (SNe.useEffect(() => {
    if (!u) {
      c((b) => (b === null ? b : null));
      return;
    }
    let y = Fhc(o, Yve());
    c((b) => (b === y ? b : y));
  }, [o, u]),
    Gc(
      () => {
        let y = Fhc(o, Yve());
        c((b) => (b === y ? b : y));
      },
      u ? 30000 : null,
    ));
  let [d, p] = SNe.useState(null),
    f = !vl() && Boolean(rL());
  Gc(
    () => {
      let y = Q9r(),
        b = y >= 1e4 ? Yi(y) : null;
      p((_) => (b === _ ? _ : b));
    },
    f ? 1000 : null,
  );
  let m = P0((y) => y.voiceState),
    g = $me(),
    h = P0((y) => y.voiceError);
  if (g && (m === "recording" || m === "processing"))
    return sy.jsx(Fdm, {
      voiceState: m,
    });
  return sy.jsxs(sy.Fragment, {
    children: [
      e &&
        !t &&
        sy.jsx(U, {
          children: sy.jsx(w, {
            dimColor: !0,
            wrap: "truncate",
            children: "Now using usage credits",
          }),
        }),
      d &&
        sy.jsxs(U, {
          children: [
            sy.jsxs(w, {
              color: "warning",
              wrap: "truncate",
              children: ["apiKeyHelper is taking a while", " "],
            }),
            sy.jsxs(w, {
              dimColor: !0,
              wrap: "truncate",
              children: ["(", d, ")"],
            }),
          ],
        }),
      (n === "invalid" || n === "missing") &&
        sy.jsx(U, {
          children: sy.jsx(w, {
            color: "error",
            wrap: "truncate",
            children: ut(process.env.CLAUDE_CODE_REMOTE)
              ? "Authentication error \xB7 Try again"
              : "Not logged in \xB7 Run /login",
          }),
        }),
      n !== "invalid" &&
        n !== "missing" &&
        r &&
        sy.jsx(U, {
          children: sy.jsxs(w, {
            dimColor: !0,
            wrap: "truncate",
            children: [o, " tokens"],
          }),
        }),
      l &&
        sy.jsx(U, {
          children: sy.jsx(w, {
            dimColor: !0,
            wrap: "truncate",
            children: l,
          }),
        }),
      sy.jsx(zur, {
        verbose: r,
        isUpdating: s,
        onChangeIsUpdating: a,
        showSuccessMessage: !i,
      }),
      sy.jsx(jdm, {}),
      g &&
        h &&
        sy.jsx(U, {
          children: sy.jsx(w, {
            color: "error",
            wrap: "truncate",
            children: h,
          }),
        }),
      sy.jsx(Ehc, {}),
      !vl() && sy.jsx(khc, {}),
      sy.jsx(Kur, {}),
    ],
  });
}
function Fhc(e, t, n = Date.now()) {
  if (t === null) return null;
  if (e < Ydm) return null;
  if (n - t <= fao) return null;
  return `~${Math.round(e / 1000)}k uncached \xB7 /clear to start fresh`;
}
var jhc,
  SNe,
  sy,
  Fdm,
  jdm,
  sdr = 5000,
  Ydm = 50000;
