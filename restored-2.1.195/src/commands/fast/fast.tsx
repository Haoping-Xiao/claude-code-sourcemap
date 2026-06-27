// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Gjo
// matched 2.1.88 source: src/commands/fast/fast.tsx
// class=modified  jaccard=0.3549  score=0.6181  fileCov=0.4545
// note: deminified; 2 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// module exports: call, FastModePicker
function FastModePicker(e) {
  let t = Uzl.c(32),
    { onDone: n, unavailableReason: r } = e,
    o = Ht(Xqf),
    { addNotification: s } = Li(),
    i = Ht(Yqf),
    a = Ho(),
    [l, c] = Fzl.useState(i ?? false),
    u;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((u = v2r()), (t[0] = u));
  else u = t[0];
  let d = u,
    p = d.status === "cooldown",
    f = r !== null,
    m;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) {
    let M = As(),
      N = rg(M) ? mo(M) : "claude-opus-4-8";
    ((m = eU(Xnt(true, N))), (t[1] = m));
  } else m = t[1];
  let g = m,
    h;
  if (t[2] !== s || t[3] !== l || t[4] !== f || t[5] !== o || t[6] !== n || t[7] !== a)
    ((h = function () {
      if (f) return;
      if (
        (ksr(l, a),
        G("tengu_fast_mode_toggled", {
          enabled: l,
          source: We("picker"),
        }),
        l)
      ) {
        let N = x1e(l),
          B = !rg(o) ? ` \xB7 model set to ${FG()}` : "",
          $ = jjo();
        if ($) s($);
        n(`${N} Fast mode ON${B} \xB7 ${g}`);
      } else (a(Kqf), n("Fast mode OFF"));
    }),
      (t[2] = s),
      (t[3] = l),
      (t[4] = f),
      (t[5] = o),
      (t[6] = n),
      (t[7] = a),
      (t[8] = h));
  else h = t[8];
  let y = h,
    b;
  if (t[9] !== i || t[10] !== f || t[11] !== n || t[12] !== a)
    ((b = function () {
      if (f) {
        if (i) ksr(false, a);
        n("Fast mode OFF", {
          display: "system",
        });
        return;
      }
      let N = i ? `${x1e()} Kept Fast mode ON` : "Kept Fast mode OFF";
      n(N, {
        display: "system",
      });
    }),
      (t[9] = i),
      (t[10] = f),
      (t[11] = n),
      (t[12] = a),
      (t[13] = b));
  else b = t[13];
  let _ = b,
    S;
  if (t[14] !== f)
    ((S = function () {
      if (f) return;
      c(zqf);
    }),
      (t[14] = f),
      (t[15] = S));
  else S = t[15];
  let A = S,
    v;
  if (t[16] !== y || t[17] !== A)
    ((v = {
      "confirm:yes": y,
      "confirm:nextField": A,
      "confirm:next": A,
      "confirm:previous": A,
      "confirm:cycleMode": A,
      "confirm:toggle": A,
    }),
      (t[16] = y),
      (t[17] = A),
      (t[18] = v));
  else v = t[18];
  let C;
  if (t[19] === Symbol.for("react.memo_cache_sentinel"))
    ((C = {
      context: "Confirmation",
    }),
      (t[19] = C));
  else C = t[19];
  No(v, C);
  let x;
  if (t[20] === Symbol.for("react.memo_cache_sentinel"))
    ((x = RC.jsxs(w, {
      children: [
        RC.jsx(Bzl, {
          cooldown: p,
        }),
        " Fast mode (research preview)",
      ],
    })),
      (t[20] = x));
  else x = t[20];
  let I = x,
    k;
  if (t[21] === Symbol.for("react.memo_cache_sentinel")) ((k = FG()), (t[21] = k));
  else k = t[21];
  let D;
  if (t[22] !== f)
    ((D = f
      ? RC.jsx(ht, {
          chord: "escape",
          action: "cancel",
        })
      : RC.jsxs(Tn, {
          children: [
            RC.jsx(ht, {
              chord: "tab",
              action: "toggle",
            }),
            RC.jsx(ht, {
              chord: "enter",
              action: "confirm",
            }),
            RC.jsx(ht, {
              chord: "escape",
              action: "cancel",
            }),
          ],
        })),
      (t[22] = f),
      (t[23] = D));
  else D = t[23];
  let P;
  if (t[24] !== l || t[25] !== r)
    ((P = r
      ? RC.jsx(U, {
          marginLeft: 2,
          children: RC.jsx(Va, {
            error: r,
          }),
        })
      : RC.jsxs(RC.Fragment, {
          children: [
            RC.jsx(U, {
              flexDirection: "column",
              gap: 0,
              marginLeft: 2,
              children: RC.jsxs(U, {
                flexDirection: "row",
                gap: 2,
                children: [
                  RC.jsx(w, {
                    bold: true,
                    children: "Fast mode",
                  }),
                  RC.jsx(w, {
                    color: l ? "fastMode" : void 0,
                    bold: l,
                    children: l ? "ON " : "OFF",
                  }),
                  RC.jsx(w, {
                    dimColor: true,
                    children: g,
                  }),
                ],
              }),
            }),
            p &&
              d.status === "cooldown" &&
              RC.jsx(U, {
                marginLeft: 2,
                children: RC.jsxs(w, {
                  color: "warning",
                  children: [
                    d.reason === "overloaded"
                      ? "Fast mode overloaded and is temporarily unavailable"
                      : "You've hit your fast limit",
                    " \xB7 resets in ",
                    Yi(d.resetAt - Date.now(), {
                      hideTrailingZeros: true,
                    }),
                  ],
                }),
              }),
          ],
        })),
      (t[24] = l),
      (t[25] = r),
      (t[26] = P));
  else P = t[26];
  let O;
  if (t[27] === Symbol.for("react.memo_cache_sentinel"))
    ((O = RC.jsx(qL, {
      url: "https://code.claude.com/docs/en/fast-mode",
    })),
      (t[27] = O));
  else O = t[27];
  let L;
  if (t[28] !== _ || t[29] !== D || t[30] !== P)
    ((L = RC.jsxs(zn, {
      title: I,
      subtitle: `High-speed mode for ${k}. Draws from usage credits at a higher rate. Separate rate limits apply.`,
      onCancel: _,
      color: "fastMode",
      inputGuide: D,
      children: [P, O],
    })),
      (t[28] = _),
      (t[29] = D),
      (t[30] = P),
      (t[31] = L));
  else L = t[31];
  return L;
}
function zqf(e) {
  return !e;
}
function Kqf(e) {
  return {
    ...e,
    fastMode: false,
  };
}
function Yqf(e) {
  return e.fastMode;
}
function Xqf(e) {
  return e.mainLoopModel;
}
async function call(e, t, n) {
  if (!sc()) return (e(lle() ?? "Fast mode is not available"), null);
  await Ynt();
  let r = n?.trim().toLowerCase();
  if (r === "on" || r === "off") {
    let s = await Rsr(r === "on", t.getAppState, t.setAppState, "shortcut", t.onQueryEvent);
    return (e(s), null);
  }
  let o = lle();
  return (
    G("tengu_fast_mode_picker_shown", {
      unavailable_reason: o ?? "",
    }),
    RC.jsx(FastModePicker, {
      onDone: e,
      unavailableReason: o,
    })
  );
}
var Uzl, Fzl, RC;
