// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vKl
// matched 2.1.88 source: src/components/hooks/HooksConfigMenu.tsx
// class=modified  jaccard=0.2921  score=0.4691  fileCov=0.4363
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var vKl = E(() => {
  Ye();
  WAt();
  vi();
  Ko();
  gKe();
  ((HKl = R(lt(), 1)), (Th = R(se(), 1)));
});
function CKl(e) {
  let t = wKl.c(102),
    { toolNames: n, onExit: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel"))
    ((o = {
      mode: "select-event",
    }),
      (t[0] = o));
  else o = t[0];
  let [s, i] = Psr.useState(o),
    [a, l] = Psr.useState(hVf),
    [c, u] = Psr.useState(gVf),
    d;
  if (t[1] === Symbol.for("react.memo_cache_sentinel"))
    ((d = (re) => {
      if (re === "policySettings") {
        let ce = jo()?.disableAllHooks === true;
        (l(ce && yn("policySettings")?.disableAllHooks === true),
          u(yn("policySettings")?.allowManagedHooksOnly === true));
      }
    }),
      (t[1] = d));
  else d = t[1];
  Ift(d);
  let p = s.mode,
    f = "event" in s ? s.event : "PreToolUse",
    m = "matcher" in s ? s.matcher : null,
    g = Ht(mVf),
    h = Dc(),
    y;
  if (t[2] !== g.tools || t[3] !== n)
    ((y = [...n, ...g.tools.map(fVf)]), (t[2] = g.tools), (t[3] = n), (t[4] = y));
  else y = t[4];
  let b = y,
    _;
  if (t[5] !== h || t[6] !== b) ((_ = uKl(h.getState(), b)), (t[5] = h), (t[6] = b), (t[7] = _));
  else _ = t[7];
  let S = _,
    A;
  if (t[8] !== S || t[9] !== f) ((A = dKl(S, f)), (t[8] = S), (t[9] = f), (t[10] = A));
  else A = t[10];
  let v = A,
    C;
  if (t[11] !== S || t[12] !== f || t[13] !== m)
    ((C = pKl(S, f, m)), (t[11] = S), (t[12] = f), (t[13] = m), (t[14] = C));
  else C = t[14];
  let x = C,
    I;
  if (t[15] !== r)
    ((I = () => {
      r("Hooks dialog dismissed", {
        display: "system",
      });
    }),
      (t[15] = r),
      (t[16] = I));
  else I = t[16];
  let k = I,
    D = p === "select-event",
    P;
  if (t[17] !== D)
    ((P = {
      context: "Confirmation",
      isActive: D,
    }),
      (t[17] = D),
      (t[18] = P));
  else P = t[18];
  $r("confirm:no", k, P);
  let O;
  if (t[19] === Symbol.for("react.memo_cache_sentinel"))
    ((O = () => {
      i({
        mode: "select-event",
      });
    }),
      (t[19] = O));
  else O = t[19];
  let L = p === "select-matcher",
    M;
  if (t[20] !== L)
    ((M = {
      context: "Confirmation",
      isActive: L,
    }),
      (t[20] = L),
      (t[21] = M));
  else M = t[21];
  $r("confirm:no", O, M);
  let N;
  if (t[22] !== b || t[23] !== s)
    ((N = () => {
      if ("event" in s)
        if (HJt(s.event, b) !== void 0)
          i({
            mode: "select-matcher",
            event: s.event,
          });
        else
          i({
            mode: "select-event",
          });
    }),
      (t[22] = b),
      (t[23] = s),
      (t[24] = N));
  else N = t[24];
  let B = p === "select-hook",
    $;
  if (t[25] !== B)
    (($ = {
      context: "Confirmation",
      isActive: B,
    }),
      (t[25] = B),
      (t[26] = $));
  else $ = t[26];
  $r("confirm:no", N, $);
  let q;
  if (t[27] !== s)
    ((q = () => {
      if (s.mode === "view-hook") {
        let { event: re, hook: ee } = s;
        i({
          mode: "select-hook",
          event: re,
          matcher: ee.matcher || "",
        });
      }
    }),
      (t[27] = s),
      (t[28] = q));
  else q = t[28];
  let W = p === "view-hook",
    V;
  if (t[29] !== W)
    ((V = {
      context: "Confirmation",
      isActive: W,
    }),
      (t[29] = W),
      (t[30] = V));
  else V = t[30];
  $r("confirm:no", q, V);
  let Y;
  if (t[31] !== b) ((Y = Dsr(b)), (t[31] = b), (t[32] = Y));
  else Y = t[32];
  let z = Y,
    Z = jo()?.disableAllHooks === true,
    J;
  if (t[33] !== S) {
    let re = {},
      ee = 0;
    for (let [ce, ae] of Object.entries(S)) {
      let de = Object.values(ae).reduce(pVf, 0);
      ((re[ce] = de), (ee = ee + de));
    }
    ((J = {
      hooksByEvent: re,
      totalHooksCount: ee,
    }),
      (t[33] = S),
      (t[34] = J));
  } else J = t[34];
  let { hooksByEvent: ne, totalHooksCount: oe } = J;
  if (Z) {
    let re;
    if (t[35] === Symbol.for("react.memo_cache_sentinel"))
      ((re = NP.jsx(ht, {
        chord: "escape",
        action: "close",
      })),
        (t[35] = re));
    else re = t[35];
    let ee;
    if (t[36] === Symbol.for("react.memo_cache_sentinel"))
      ((ee = NP.jsx(w, {
        bold: true,
        children: "disabled",
      })),
        (t[36] = ee));
    else ee = t[36];
    let ce = a && " by a managed settings file",
      ae;
    if (t[37] !== oe)
      ((ae = NP.jsx(w, {
        bold: true,
        children: oe,
      })),
        (t[37] = oe),
        (t[38] = ae));
    else ae = t[38];
    let de;
    if (t[39] !== oe) ((de = bn(oe, "hook")), (t[39] = oe), (t[40] = de));
    else de = t[40];
    let Ee;
    if (t[41] !== oe) ((Ee = bn(oe, "is", "are")), (t[41] = oe), (t[42] = Ee));
    else Ee = t[42];
    let me;
    if (t[43] !== ce || t[44] !== ae || t[45] !== de || t[46] !== Ee)
      ((me = NP.jsxs(w, {
        children: [
          "All hooks are currently ",
          ee,
          ce,
          ". You have",
          " ",
          ae,
          " configured",
          " ",
          de,
          " that",
          " ",
          Ee,
          " not running.",
        ],
      })),
        (t[43] = ce),
        (t[44] = ae),
        (t[45] = de),
        (t[46] = Ee),
        (t[47] = me));
    else me = t[47];
    let pe, ge, he, ie;
    if (t[48] === Symbol.for("react.memo_cache_sentinel"))
      ((pe = NP.jsx(U, {
        marginTop: 1,
        children: NP.jsx(w, {
          dimColor: true,
          children: "When hooks are disabled:",
        }),
      })),
        (ge = NP.jsx(w, {
          dimColor: true,
          children: "\xB7 No hook commands will execute",
        })),
        (he = NP.jsx(w, {
          dimColor: true,
          children: "\xB7 StatusLine will not be displayed",
        })),
        (ie = NP.jsx(w, {
          dimColor: true,
          children: "\xB7 Tool operations will proceed without hook validation",
        })),
        (t[48] = pe),
        (t[49] = ge),
        (t[50] = he),
        (t[51] = ie));
    else ((pe = t[48]), (ge = t[49]), (he = t[50]), (ie = t[51]));
    let le;
    if (t[52] !== me)
      ((le = NP.jsxs(U, {
        flexDirection: "column",
        children: [me, pe, ge, he, ie],
      })),
        (t[52] = me),
        (t[53] = le));
    else le = t[53];
    let He;
    if (t[54] !== a)
      ((He =
        !a &&
        NP.jsx(w, {
          dimColor: true,
          children:
            'To re-enable hooks, remove "disableAllHooks" from settings.json or ask Claude.',
        })),
        (t[54] = a),
        (t[55] = He));
    else He = t[55];
    let ye;
    if (t[56] !== le || t[57] !== He)
      ((ye = NP.jsxs(U, {
        flexDirection: "column",
        gap: 1,
        children: [le, He],
      })),
        (t[56] = le),
        (t[57] = He),
        (t[58] = ye));
    else ye = t[58];
    let ue;
    if (t[59] !== k || t[60] !== ye)
      ((ue = NP.jsx(zn, {
        title: "Hook configuration \xB7 disabled",
        onCancel: k,
        inputGuide: re,
        children: ye,
      })),
        (t[59] = k),
        (t[60] = ye),
        (t[61] = ue));
    else ue = t[61];
    return ue;
  }
  switch (s.mode) {
    case "select-event": {
      let re;
      if (t[62] === Symbol.for("react.memo_cache_sentinel"))
        ((re = Tl()
          ? {
              exitHint: qH(),
              managedHooksStillApply: Sor(),
            }
          : void 0),
          (t[62] = re));
      else re = t[62];
      let ee;
      if (t[63] !== b)
        ((ee = (ae) => {
          if (HJt(ae, b) !== void 0)
            i({
              mode: "select-matcher",
              event: ae,
            });
          else
            i({
              mode: "select-hook",
              event: ae,
              matcher: "",
            });
        }),
          (t[63] = b),
          (t[64] = ee));
      else ee = t[64];
      let ce;
      if (t[65] !== k || t[66] !== z || t[67] !== ne || t[68] !== c || t[69] !== ee || t[70] !== oe)
        ((ce = NP.jsx(gKl, {
          hookEventMetadata: z,
          hooksByEvent: ne,
          totalHooksCount: oe,
          restrictedByPolicy: c,
          suspendedBySafeMode: re,
          onSelectEvent: ee,
          onCancel: k,
        })),
          (t[65] = k),
          (t[66] = z),
          (t[67] = ne),
          (t[68] = c),
          (t[69] = ee),
          (t[70] = oe),
          (t[71] = ce));
      else ce = t[71];
      return ce;
    }
    case "select-matcher": {
      let re = z[s.event],
        ee;
      if (t[72] !== s.event)
        ((ee = (de) => {
          i({
            mode: "select-hook",
            event: s.event,
            matcher: de,
          });
        }),
          (t[72] = s.event),
          (t[73] = ee));
      else ee = t[73];
      let ce;
      if (t[74] === Symbol.for("react.memo_cache_sentinel"))
        ((ce = () => {
          i({
            mode: "select-event",
          });
        }),
          (t[74] = ce));
      else ce = t[74];
      let ae;
      if (
        t[75] !== S ||
        t[76] !== s.event ||
        t[77] !== v ||
        t[78] !== re.description ||
        t[79] !== ee
      )
        ((ae = NP.jsx(EKl, {
          selectedEvent: s.event,
          matchersForSelectedEvent: v,
          hooksByEventAndMatcher: S,
          eventDescription: re.description,
          onSelect: ee,
          onCancel: ce,
        })),
          (t[75] = S),
          (t[76] = s.event),
          (t[77] = v),
          (t[78] = re.description),
          (t[79] = ee),
          (t[80] = ae));
      else ae = t[80];
      return ae;
    }
    case "select-hook": {
      let re = z[s.event],
        ee;
      if (t[81] !== s.event)
        ((ee = (de) => {
          i({
            mode: "view-hook",
            event: s.event,
            hook: de,
          });
        }),
          (t[81] = s.event),
          (t[82] = ee));
      else ee = t[82];
      let ce;
      if (t[83] !== b || t[84] !== s.event)
        ((ce = () => {
          if (HJt(s.event, b) !== void 0)
            i({
              mode: "select-matcher",
              event: s.event,
            });
          else
            i({
              mode: "select-event",
            });
        }),
          (t[83] = b),
          (t[84] = s.event),
          (t[85] = ce));
      else ce = t[85];
      let ae;
      if (
        t[86] !== x ||
        t[87] !== s.event ||
        t[88] !== s.matcher ||
        t[89] !== re ||
        t[90] !== ee ||
        t[91] !== ce
      )
        ((ae = NP.jsx(_Kl, {
          selectedEvent: s.event,
          selectedMatcher: s.matcher,
          hooksForSelectedMatcher: x,
          hookEventMetadata: re,
          onSelect: ee,
          onCancel: ce,
        })),
          (t[86] = x),
          (t[87] = s.event),
          (t[88] = s.matcher),
          (t[89] = re),
          (t[90] = ee),
          (t[91] = ce),
          (t[92] = ae));
      else ae = t[92];
      return ae;
    }
    case "view-hook": {
      let re = s.hook,
        ee;
      if (t[93] !== b || t[94] !== s.event)
        ((ee = HJt(s.event, b)), (t[93] = b), (t[94] = s.event), (t[95] = ee));
      else ee = t[95];
      let ce = ee !== void 0,
        ae;
      if (t[96] !== s)
        ((ae = () => {
          let { event: Ee, hook: me } = s;
          i({
            mode: "select-hook",
            event: Ee,
            matcher: me.matcher || "",
          });
        }),
          (t[96] = s),
          (t[97] = ae));
      else ae = t[97];
      let de;
      if (t[98] !== s.hook || t[99] !== ce || t[100] !== ae)
        ((de = NP.jsx(TKl, {
          selectedHook: re,
          eventSupportsMatcher: ce,
          onCancel: ae,
        })),
          (t[98] = s.hook),
          (t[99] = ce),
          (t[100] = ae),
          (t[101] = de));
      else de = t[101];
      return de;
    }
  }
}
function pVf(e, t) {
  return e + t.length;
}
function fVf(e) {
  return e.name;
}
function mVf(e) {
  return e.mcp;
}
function gVf() {
  return yn("policySettings")?.allowManagedHooksOnly === true;
}
function hVf() {
  return jo()?.disableAllHooks === true && yn("policySettings")?.disableAllHooks === true;
}
var wKl, Psr, NP;
