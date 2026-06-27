// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module gXl
// matched 2.1.88 source: src/components/sandbox/SandboxOverridesTab.tsx
// class=modified  jaccard=0.3112  score=0.4115  fileCov=0.5609
// note: deminified; 2 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module gXl] deps: hooks/useTerminalSize.ts, utils/platform.ts
((mXl = R(lt(), 1)), (Jy = R(se(), 1)));
function SandboxOverridesTab(t0) {
  let t = H4o.c(5),
    { onComplete: n } = t0,
    r = xo.isSandboxingEnabled(),
    o = xo.areSandboxSettingsLockedByPolicy() || xo.areUnsandboxedCommandsForbiddenByPolicy(),
    s = xo.areUnsandboxedCommandsAllowed();
  if (!r) {
    let a;
    if (t[0] === Symbol.for("react.memo_cache_sentinel"))
      ((a = BP.jsx(U, {
        flexDirection: "column",
        children: BP.jsx(w, {
          color: "subtle",
          children: "Sandbox is not enabled. Enable sandbox to configure override settings.",
        }),
      })),
        (t[0] = a));
    else a = t[0];
    return a;
  }
  if (o) {
    let a;
    if (t[1] === Symbol.for("react.memo_cache_sentinel"))
      ((a = BP.jsx(w, {
        color: "subtle",
        children:
          "Override settings are managed by a higher-priority configuration and cannot be changed locally.",
      })),
        (t[1] = a));
    else a = t[1];
    let l;
    if (t[2] === Symbol.for("react.memo_cache_sentinel"))
      ((l = BP.jsxs(U, {
        flexDirection: "column",
        children: [
          a,
          BP.jsx(U, {
            marginTop: 1,
            children: BP.jsxs(w, {
              dimColor: true,
              children: [
                "Current setting:",
                " ",
                s ? "Allow unsandboxed fallback" : "Strict sandbox mode",
              ],
            }),
          }),
        ],
      })),
        (t[2] = l));
    else l = t[2];
    return l;
  }
  let i;
  if (t[3] !== n)
    ((i = BP.jsx(OverridesSelect, {
      onComplete: n,
      currentMode: s ? "open" : "closed",
    })),
      (t[3] = n),
      (t[4] = i));
  else i = t[4];
  return i;
}
function OverridesSelect(t0) {
  let t = H4o.c(24),
    { onComplete: n, currentMode: r } = t0,
    [o] = na(),
    { headerFocused: s, focusHeader: i } = tx(),
    a;
  if (t[0] !== o) ((a = Io("success", o)("(current)")), (t[0] = o), (t[1] = a));
  else a = t[1];
  let l = a,
    c = r === "open" ? `Allow unsandboxed fallback ${l}` : "Allow unsandboxed fallback",
    u;
  if (t[2] !== c)
    ((u = {
      label: c,
      value: "open",
    }),
      (t[2] = c),
      (t[3] = u));
  else u = t[3];
  let d = r === "closed" ? `Strict sandbox mode ${l}` : "Strict sandbox mode",
    p;
  if (t[4] !== d)
    ((p = {
      label: d,
      value: "closed",
    }),
      (t[4] = d),
      (t[5] = p));
  else p = t[5];
  let f;
  if (t[6] !== u || t[7] !== p) ((f = [u, p]), (t[6] = u), (t[7] = p), (t[8] = f));
  else f = t[8];
  let m = f,
    g;
  if (t[9] !== n)
    ((g = async function (x) {
      let I = x;
      (await xo.setSandboxSettings({
        allowUnsandboxedCommands: I === "open",
      }),
        n(
          I === "open"
            ? "\u2713 Unsandboxed fallback allowed - commands can run outside sandbox when necessary"
            : "\u2713 Strict sandbox mode - all commands must run in sandbox or be excluded via the `excludedCommands` option",
        ));
    }),
      (t[9] = n),
      (t[10] = g));
  else g = t[10];
  let h = g,
    y;
  if (t[11] === Symbol.for("react.memo_cache_sentinel"))
    ((y = BP.jsx(U, {
      marginBottom: 1,
      children: BP.jsx(w, {
        bold: true,
        children: "Configure overrides",
      }),
    })),
      (t[11] = y));
  else y = t[11];
  let b;
  if (t[12] !== n)
    ((b = () =>
      n(void 0, {
        display: "skip",
      })),
      (t[12] = n),
      (t[13] = b));
  else b = t[13];
  let _;
  if (t[14] !== i || t[15] !== h || t[16] !== s || t[17] !== m || t[18] !== b)
    ((_ = BP.jsx(Sr, {
      options: m,
      onChange: h,
      onCancel: b,
      onUpFromFirstItem: i,
      isDisabled: s,
    })),
      (t[14] = i),
      (t[15] = h),
      (t[16] = s),
      (t[17] = m),
      (t[18] = b),
      (t[19] = _));
  else _ = t[19];
  let S;
  if (t[20] === Symbol.for("react.memo_cache_sentinel"))
    ((S = BP.jsxs(w, {
      dimColor: true,
      wrap: "wrap-trim",
      children: [
        BP.jsx(w, {
          bold: true,
          dimColor: true,
          children: "Allow unsandboxed fallback:",
        }),
        " ",
        "When a command fails due to sandbox restrictions, Claude can retry with dangerouslyDisableSandbox to run outside the sandbox (falling back to default permissions).",
      ],
    })),
      (t[20] = S));
  else S = t[20];
  let A;
  if (t[21] === Symbol.for("react.memo_cache_sentinel"))
    ((A = BP.jsxs(U, {
      flexDirection: "column",
      marginTop: 1,
      gap: 1,
      children: [
        S,
        BP.jsxs(w, {
          dimColor: true,
          wrap: "wrap-trim",
          children: [
            BP.jsx(w, {
              bold: true,
              dimColor: true,
              children: "Strict sandbox mode:",
            }),
            " ",
            "All bash commands invoked by the model must run in the sandbox unless they are explicitly listed in excludedCommands.",
          ],
        }),
        BP.jsx(qL, {
          url: "https://code.claude.com/docs/en/sandboxing#configure-sandboxing",
        }),
      ],
    })),
      (t[21] = A));
  else A = t[21];
  let v;
  if (t[22] !== _)
    ((v = BP.jsxs(U, {
      flexDirection: "column",
      children: [y, _, A],
    })),
      (t[22] = _),
      (t[23] = v));
  else v = t[23];
  return v;
}
var H4o, BP;
