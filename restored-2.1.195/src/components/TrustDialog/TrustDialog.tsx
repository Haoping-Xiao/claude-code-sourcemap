// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module b$c
// matched 2.1.88 source: src/components/TrustDialog/TrustDialog.tsx
// class=modified  jaccard=0.211  score=0.2965  fileCov=0.4226
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: TrustDialog
// [unwrapped __esm module b$c] deps: dr, er, WGe, QH, fre
s$c = require("path");
YIm = /[\x00-\x1f\x7f-\x9f]/g;
XIm = new Set([
  Co,
  "PowerShell",
  "Write",
  "Edit",
  "MultiEdit",
  "NotebookEdit",
  "WebFetch",
  "WebSearch",
]);
function TrustDialog(e) {
  let t = S$c.c(45),
    { onDone: n, commands: r } = e,
    o;
  if (t[0] === Symbol.for("react.memo_cache_sentinel")) ((o = bT("project")), (t[0] = o));
  else o = t[0];
  let { servers: s } = o,
    i;
  if (t[1] === Symbol.for("react.memo_cache_sentinel")) ((i = Object.keys(s)), (t[1] = i));
  else i = t[1];
  let a = i.length > 0,
    l;
  if (t[2] === Symbol.for("react.memo_cache_sentinel")) ((l = a$c()), (t[2] = l));
  else l = t[2];
  let u = l.length > 0,
    d;
  if (t[3] === Symbol.for("react.memo_cache_sentinel")) ((d = d$c()), (t[3] = d));
  else d = t[3];
  let p = d,
    f = c$c(),
    m = f.sources.length > 0,
    g = u$c(),
    h = g.sources.length > 0,
    y;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) ((y = m$c()), (t[4] = y));
  else y = t[4];
  let _ = y.length > 0,
    S;
  if (t[5] === Symbol.for("react.memo_cache_sentinel")) ((S = g$c()), (t[5] = S));
  else S = t[5];
  let v = S.length > 0,
    C;
  if (t[6] === Symbol.for("react.memo_cache_sentinel")) ((C = h$c()), (t[6] = C));
  else C = t[6];
  let I = C.length > 0,
    k;
  if (t[7] === Symbol.for("react.memo_cache_sentinel")) ((k = p$c()), (t[7] = k));
  else k = t[7];
  let P = k.length > 0,
    O;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) ((O = y$c()), (t[8] = O));
  else O = t[8];
  let M = O.length > 0,
    N;
  if (t[9] === Symbol.for("react.memo_cache_sentinel")) ((N = _$c()), (t[9] = N));
  else N = t[9];
  let $ = N.length > 0,
    q;
  if (t[10] === Symbol.for("react.memo_cache_sentinel")) ((q = f$c()), (t[10] = q));
  else q = t[10];
  let V = q.length > 0,
    Y;
  if (t[11] !== r) ((Y = r?.some(txm) ?? false), (t[11] = r), (t[12] = Y));
  else Y = t[12];
  let z = Y,
    K;
  if (t[13] !== r) ((K = r?.some(ZIm) ?? false), (t[13] = r), (t[14] = K));
  else K = t[14];
  let Z = K,
    J = p.length > 0 || z || Z,
    ne = ad(),
    oe,
    re;
  if (t[15] !== J)
    ((oe = () => {
      let Ke = g7o.homedir() === $t();
      G("tengu_trust_dialog_shown", {
        isHomeDir: Ke,
        hasMcpServers: a,
        hasHooks: u,
        hasBashExecution: J,
        hasProjectAllowRules: m,
        hasProjectAddDirs: h,
        hasApiKeyHelper: _,
        hasAwsCommands: v,
        hasGcpCommands: I,
        hasOtelHeadersHelper: P,
        hasProxyAuthHelper: M,
        hasDangerousEnvVars: $,
        hasAutoMemoryDirectory: V,
      });
    }),
      (re = [a, u, J, m, h, _, v, I, P, M, $, V]),
      (t[15] = J),
      (t[16] = oe),
      (t[17] = re));
  else ((oe = t[16]), (re = t[17]));
  cmr.useEffect(oe, re);
  let ee = cmr.useRef(false),
    ce;
  if (t[18] !== J || t[19] !== n)
    ((ce = function (Et) {
      if (ee.current || HT()) return;
      if (((ee.current = true), Et === "exit")) {
        (Le("onboarding_trust_dialog", "onboarding_trust_denied"), Bc(1));
        return;
      }
      let ct = g7o.homedir() === $t();
      if (
        (xe("onboarding_trust_dialog"),
        G("tengu_trust_dialog_accept", {
          isHomeDir: ct,
          hasMcpServers: a,
          hasHooks: u,
          hasBashExecution: J,
          hasProjectAllowRules: m,
          hasProjectAddDirs: h,
          hasApiKeyHelper: _,
          hasAwsCommands: v,
          hasGcpCommands: I,
          hasOtelHeadersHelper: P,
          hasProxyAuthHelper: M,
          hasDangerousEnvVars: $,
          hasAutoMemoryDirectory: V,
        }),
        ct)
      )
        Qve(true);
      else pH(QIm);
      n();
    }),
      (t[18] = J),
      (t[19] = n),
      (t[20] = ce));
  else ce = t[20];
  let ae = ce,
    de;
  if (t[21] === Symbol.for("react.memo_cache_sentinel"))
    ((de = () => {
      ((ee.current = true), Bc(1));
    }),
      (t[21] = de));
  else de = t[21];
  let Ee = ig(de),
    me;
  if (t[22] !== ae)
    ((me = () => {
      if (Jj()) {
        ae("exit");
        return;
      }
      ((ee.current = true), Bc(0));
    }),
      (t[22] = ae),
      (t[23] = me));
  else me = t[23];
  let pe;
  if (t[24] === Symbol.for("react.memo_cache_sentinel"))
    ((pe = {
      context: "Confirmation",
    }),
      (t[24] = pe));
  else pe = t[24];
  if (($r("confirm:no", me, pe), ne)) return (queueMicrotask(n), null);
  let ge = Lf,
    he = "warning",
    ie = "warning",
    le = "Accessing workspace:",
    He = U,
    ye = "column",
    ue = 1,
    we = 1,
    Ce,
    Ie,
    Ve;
  if (t[25] === Symbol.for("react.memo_cache_sentinel"))
    ((Ce = AE.jsx(w, {
      bold: true,
      children: UAt(qt().cwd()),
    })),
      (Ie = AE.jsxs(w, {
        children: [
          "Quick safety check: Is this a project you created or one you trust? (Like your own code, a well-known open source project, or work from your team). If not, take a moment to review what",
          "'",
          "s in this folder first.",
        ],
      })),
      (Ve = AE.jsxs(w, {
        children: ["Claude Code", "'", "ll be able to read, edit, and execute files here."],
      })),
      (t[25] = Ce),
      (t[26] = Ie),
      (t[27] = Ve));
  else ((Ce = t[25]), (Ie = t[26]), (Ve = t[27]));
  let Ze =
      (m || h) &&
      AE.jsxs(U, {
        flexDirection: "column",
        children: [
          m &&
            AE.jsxs(AE.Fragment, {
              children: [
                AE.jsxs(w, {
                  bold: true,
                  color: "warning",
                  children: [
                    AE.jsx(Hs, {
                      status: "warning",
                      withSpace: true,
                    }),
                    "This folder pre-approves ",
                    f.rawCount,
                    " ",
                    bn(f.rawCount, "tool permission"),
                    " in",
                    " ",
                    Jtn(f.sources),
                    ":",
                  ],
                }),
                AE.jsxs(w, {
                  children: [
                    "  ",
                    f.rules.length > 0
                      ? Jtn(f.rules, 8)
                      : "(rule names contain unprintable characters)",
                  ],
                }),
              ],
            }),
          h &&
            AE.jsxs(AE.Fragment, {
              children: [
                AE.jsxs(w, {
                  bold: true,
                  color: "warning",
                  children: [
                    AE.jsx(Hs, {
                      status: "warning",
                      withSpace: true,
                    }),
                    "This folder adds ",
                    g.rawCount,
                    " ",
                    bn(g.rawCount, "directory", "directories"),
                    " ",
                    "to the workspace in",
                    " ",
                    Jtn(g.sources),
                    ":",
                  ],
                }),
                AE.jsxs(w, {
                  children: [
                    "  ",
                    g.dirs.length > 0
                      ? Jtn(g.dirs, 6)
                      : "(directory names contain unprintable characters)",
                  ],
                }),
              ],
            }),
          AE.jsx(w, {
            dimColor: true,
            children:
              "These will apply without asking. Only proceed if you trust this configuration.",
          }),
        ],
      }),
    Be;
  if (t[28] === Symbol.for("react.memo_cache_sentinel"))
    ((Be = AE.jsx(w, {
      dimColor: true,
      children: AE.jsx(xs, {
        url: "https://code.claude.com/docs/en/security",
        children: "Security guide",
      }),
    })),
      (t[28] = Be));
  else Be = t[28];
  let Me;
  if (t[29] !== ae)
    ((Me = AE.jsx(Kl, {
      confirmLabel: "Yes, I trust this folder",
      cancelLabel: "No, exit",
      onConfirm: () => ae("enable_all"),
      onCancel: () => ae("exit"),
    })),
      (t[29] = ae),
      (t[30] = Me));
  else Me = t[30];
  let Ue;
  if (t[31] !== Ee.keyName || t[32] !== Ee.pending)
    ((Ue = AE.jsx(w, {
      dimColor: true,
      children: Ee.pending
        ? AE.jsxs(AE.Fragment, {
            children: ["Press ", Ee.keyName, " again to exit"],
          })
        : AE.jsxs(Tn, {
            children: [
              AE.jsx(ht, {
                chord: "enter",
                action: "confirm",
              }),
              AE.jsx(ht, {
                chord: "escape",
                action: "cancel",
              }),
            ],
          }),
    })),
      (t[31] = Ee.keyName),
      (t[32] = Ee.pending),
      (t[33] = Ue));
  else Ue = t[33];
  let tt;
  if (
    t[34] !== He ||
    t[35] !== Ce ||
    t[36] !== Ie ||
    t[37] !== Ve ||
    t[38] !== Ze ||
    t[39] !== Me ||
    t[40] !== Ue
  )
    ((tt = AE.jsxs(He, {
      flexDirection: ye,
      gap: ue,
      paddingTop: we,
      children: [Ce, Ie, Ve, Ze, Be, Me, Ue],
    })),
      (t[34] = He),
      (t[35] = Ce),
      (t[36] = Ie),
      (t[37] = Ve),
      (t[38] = Ze),
      (t[39] = Me),
      (t[40] = Ue),
      (t[41] = tt));
  else tt = t[41];
  let bt;
  if (t[42] !== ge || t[43] !== tt)
    ((bt = AE.jsx(ge, {
      color: he,
      titleColor: ie,
      title: le,
      children: tt,
    })),
      (t[42] = ge),
      (t[43] = tt),
      (t[44] = bt));
  else bt = t[44];
  return bt;
}
function QIm(e) {
  return {
    ...e,
    hasTrustDialogAccepted: true,
  };
}
function ZIm(e) {
  return (
    e.type === "prompt" &&
    (e.loadedFrom === "skills" || e.loadedFrom === "plugin") &&
    (e.source === "projectSettings" || e.source === "localSettings" || e.source === "plugin") &&
    e.allowedTools?.some(exm)
  );
}
function exm(e) {
  return e === Co || e.startsWith(Co + "(");
}
function txm(e) {
  return (
    e.type === "prompt" &&
    e.loadedFrom === "commands_DEPRECATED" &&
    (e.source === "projectSettings" || e.source === "localSettings") &&
    e.allowedTools?.some(nxm)
  );
}
function nxm(e) {
  return e === Co || e.startsWith(Co + "(");
}
var S$c, g7o, cmr, AE;
