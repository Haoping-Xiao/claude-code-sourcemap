// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module fXl
// matched 2.1.88 source: src/components/sandbox/SandboxDependenciesTab.tsx
// class=modified  jaccard=0.1598  score=0.1754  fileCov=0.643
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var fXl = E(() => {
  Ye();
  lg();
  ((dXl = R(lt(), 1)), (SA = R(se(), 1)));
});
function A4o(e) {
  let t = mXl.c(24),
    { depCheck: n } = e,
    r;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((r = Vt()), (t[0] = r));
  else r = t[0];
  let s = r === "macos",
    i;
  if (t[1] !== n.errors) ((i = n.errors.some(l8f)), (t[1] = n.errors), (t[2] = i));
  else i = t[2];
  let a = i,
    l;
  if (t[3] !== n.errors) ((l = n.errors.some(a8f)), (t[3] = n.errors), (t[4] = l));
  else l = t[4];
  let c = l,
    u;
  if (t[5] !== n.errors) ((u = n.errors.some(i8f)), (t[5] = n.errors), (t[6] = u));
  else u = t[6];
  let d = u,
    p = n.warnings.length > 0,
    f;
  if (t[7] !== c || t[8] !== n.errors || t[9] !== a || t[10] !== p || t[11] !== d) {
    let m = n.errors.filter(s8f),
      g = s ? "brew install ripgrep" : "apt install ripgrep",
      h;
    if (t[13] === Symbol.for("react.memo_cache_sentinel"))
      ((h =
        s &&
        Jy.jsx(U, {
          flexDirection: "column",
          children: Jy.jsxs(w, {
            children: [
              "seatbelt: ",
              Jy.jsx(w, {
                color: "success",
                children: "built-in (macOS)",
              }),
            ],
          }),
        })),
        (t[13] = h));
    else h = t[13];
    let y, b;
    if (t[14] !== a)
      ((y = Jy.jsxs(w, {
        children: [
          "ripgrep (rg):",
          " ",
          a
            ? Jy.jsx(w, {
                color: "error",
                children: "not found",
              })
            : Jy.jsx(w, {
                color: "success",
                children: "found",
              }),
        ],
      })),
        (b =
          a &&
          Jy.jsxs(w, {
            dimColor: true,
            children: ["  ", "\xB7 ", g],
          })),
        (t[14] = a),
        (t[15] = y),
        (t[16] = b));
    else ((y = t[15]), (b = t[16]));
    let _;
    if (t[17] !== y || t[18] !== b)
      ((_ = Jy.jsxs(U, {
        flexDirection: "column",
        children: [y, b],
      })),
        (t[17] = y),
        (t[18] = b),
        (t[19] = _));
    else _ = t[19];
    let S;
    if (t[20] !== c || t[21] !== p || t[22] !== d)
      ((S =
        !s &&
        Jy.jsxs(Jy.Fragment, {
          children: [
            Jy.jsxs(U, {
              flexDirection: "column",
              children: [
                Jy.jsxs(w, {
                  children: [
                    "bubblewrap (bwrap):",
                    " ",
                    c
                      ? Jy.jsx(w, {
                          color: "error",
                          children: "not installed",
                        })
                      : Jy.jsx(w, {
                          color: "success",
                          children: "installed",
                        }),
                  ],
                }),
                c &&
                  Jy.jsxs(w, {
                    dimColor: true,
                    children: ["  ", "\xB7 apt install bubblewrap"],
                  }),
              ],
            }),
            Jy.jsxs(U, {
              flexDirection: "column",
              children: [
                Jy.jsxs(w, {
                  children: [
                    "socat:",
                    " ",
                    d
                      ? Jy.jsx(w, {
                          color: "error",
                          children: "not installed",
                        })
                      : Jy.jsx(w, {
                          color: "success",
                          children: "installed",
                        }),
                  ],
                }),
                d &&
                  Jy.jsxs(w, {
                    dimColor: true,
                    children: ["  ", "\xB7 apt install socat"],
                  }),
              ],
            }),
            Jy.jsxs(U, {
              flexDirection: "column",
              children: [
                Jy.jsxs(w, {
                  children: [
                    "seccomp filter:",
                    " ",
                    p
                      ? Jy.jsx(w, {
                          color: "warning",
                          children: "not installed",
                        })
                      : Jy.jsx(w, {
                          color: "success",
                          children: "installed",
                        }),
                    p &&
                      Jy.jsx(w, {
                        dimColor: true,
                        children: " (required to block unix domain sockets)",
                      }),
                  ],
                }),
                p &&
                  Jy.jsxs(U, {
                    flexDirection: "column",
                    children: [
                      Jy.jsxs(w, {
                        dimColor: true,
                        children: ["  ", "\xB7 npm install -g @anthropic-ai/sandbox-runtime"],
                      }),
                      Jy.jsxs(w, {
                        dimColor: true,
                        children: [
                          "  ",
                          "\xB7 or copy vendor/seccomp/* from sandbox-runtime and set",
                        ],
                      }),
                      Jy.jsxs(w, {
                        dimColor: true,
                        children: [
                          "    ",
                          "sandbox.seccomp.bpfPath and applyPath in settings.json",
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        })),
        (t[20] = c),
        (t[21] = p),
        (t[22] = d),
        (t[23] = S));
    else S = t[23];
    ((f = Jy.jsxs(U, {
      flexDirection: "column",
      gap: 1,
      children: [h, _, S, m.map(o8f)],
    })),
      (t[7] = c),
      (t[8] = n.errors),
      (t[9] = a),
      (t[10] = p),
      (t[11] = d),
      (t[12] = f));
  } else f = t[12];
  return f;
}
function o8f(e) {
  return Jy.jsx(
    w,
    {
      color: "error",
      children: e,
    },
    e,
  );
}
function s8f(e) {
  return !e.includes("ripgrep") && !e.includes("bwrap") && !e.includes("socat");
}
function i8f(e) {
  return e.includes("socat");
}
function a8f(e) {
  return e.includes("bwrap");
}
function l8f(e) {
  return e.includes("ripgrep");
}
var mXl, Jy;
