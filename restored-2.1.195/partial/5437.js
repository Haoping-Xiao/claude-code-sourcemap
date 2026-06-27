// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lhc
// matched 2.1.88 source: src/components/PackageManagerAutoUpdater.tsx
// class=partial  jaccard=0.2226  score=0.251  fileCov=0.663
// note: low-confidence suggestion: src/components/PackageManagerAutoUpdater.tsx; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var lhc = E(() => {
  kt();
  je();
  At();
  J8o();
  Ye();
  uo();
  FEe();
  er();
  kgt();
  BJ();
  LOe();
  gm();
  CZ = R(rt(), 1), Kse = R(se(), 1);
});
function ldm(e, t) {
  switch (e) {
    case "homebrew":
      return ["brew", "upgrade", "--cask", t ?? "claude-code"];
    case "winget":
      {
        let n = process.env.LOCALAPPDATA;
        return [n ? fhc.join(n, "Microsoft", "WindowsApps", "winget.exe") : "winget", "upgrade", "--id", "Anthropic.ClaudeCode", "--exact", "--silent", "--disable-interactivity"];
      }
    default:
      return null;
  }
}
function cdm(e, t) {
  switch (e) {
    case "homebrew":
      return `brew upgrade ${t ?? "claude-code"}`;
    case "winget":
      return "winget upgrade Anthropic.ClaudeCode";
    case "mise":
      return "mise upgrade claude";
    case "apk":
      return "apk upgrade claude-code";
    default:
      return "your package manager update command";
  }
}
function mhc(e) {
  let t = dhc.c(37),
    {
      isUpdating: n,
      onChangeIsUpdating: r,
      showSuccessMessage: o,
      verbose: s
    } = e,
    i = Ht(ddm),
    a = Ho(),
    [l, c] = IZ.useState(Vur),
    [u, d] = IZ.useState("unknown"),
    [p, f] = IZ.useState(null),
    m = IZ.useRef(n),
    g;
  if (t[0] !== n) g = () => {
    m.current = n;
  }, t[0] = n, t[1] = g;else g = t[1];
  IZ.useEffect(g);
  let h = IZ.useRef(i),
    y;
  if (t[2] !== i) y = () => {
    h.current = i;
  }, t[2] = i, t[3] = y;else y = t[3];
  IZ.useEffect(y);
  let b, _;
  if (t[4] === Symbol.for("react.memo_cache_sentinel")) b = () => {
    C9e().then(M => {
      if (d(M), M === "homebrew") f(Yqt());
    });
  }, _ = [], t[4] = b, t[5] = _;else b = t[4], _ = t[5];
  IZ.useEffect(b, _);
  let S;
  if (t[6] !== r || t[7] !== a) S = async () => {
    if (m.current) return;
    if (h.current?.status === "success") return;
    if (xme()) return;
    if (vgt()) return;
    if (h.current?.status === "install_failed") {
      if (Date.now() - chc < uhc) return;
      h.current = null, a(udm);
    }
    let [M, N] = await Promise.all([jQ(), C9e()]),
      B = M,
      $ = null;
    if (N === "homebrew") $ = Yqt(), B = $ === "claude-code@latest" ? "latest" : "stable";
    let q = N === "homebrew" ? await TVn($ ?? "claude-code", B) : await zqt(B),
      W = await AVn(),
      V = !1;
    if (W && q && cH(q, W)) {
      if (T(`PackageManagerAutoUpdater: maxVersion ${W} is set, capping update from ${q} to ${W}`), aL({
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION, W)) {
        T(`PackageManagerAutoUpdater: current version ${{
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
        }.VERSION} is already at or above maxVersion ${W}, skipping update`), Vur = null, c(null);
        return;
      }
      q = W, V = !0;
    }
    let Y = q && !aL({
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION, q) && !Cgt(q);
    if (Vur = Y ? q : null, c(Vur), !Y) return;
    T(`PackageManagerAutoUpdater: Update available ${{
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION} -> ${q}`);
    let z = ut(process.env.CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE),
      K = ldm(N, $);
    if (!z || !K || V) return;
    if (m.current) return;
    r(!0);
    let Z = Date.now(),
      J = {
        pm_homebrew: N === "homebrew",
        pm_winget: N === "winget"
      };
    G("tengu_pkg_manager_auto_updater_start", J);
    let [ne, ...oe] = K,
      re = await Gr(ne, oe, {
        cwd: phc.homedir(),
        timeout: 300000,
        env: N === "homebrew" ? {
          ...process.env,
          HOMEBREW_NO_AUTO_UPDATE: ""
        } : void 0
      }),
      ee = Date.now() - Z;
    if (r(!1), re.code === 0) G("tengu_pkg_manager_auto_updater_success", {
      ...J,
      latency_ms: ee
    }), a(ce => {
      let ae = ce.autoUpdaterResult;
      if (ae?.version === q && ae?.status === "success") return ce;
      return {
        ...ce,
        autoUpdaterResult: {
          version: q,
          status: "success"
        }
      };
    });else T(`PackageManagerAutoUpdater: ${ne} exited ${re.code}: ${re.stderr || re.error || re.stdout}`), G("tengu_pkg_manager_auto_updater_fail", {
      ...J,
      latency_ms: ee,
      exit_code: re.code
    }), chc = Date.now(), a(ce => {
      if (ce.autoUpdaterResult?.status === "install_failed") return ce;
      return {
        ...ce,
        autoUpdaterResult: {
          version: q,
          status: "install_failed"
        }
      };
    });
  }, t[6] = r, t[7] = a, t[8] = S;else S = t[8];
  let A = S,
    v,
    C;
  if (t[9] !== A) v = () => {
    A();
  }, C = [A], t[9] = A, t[10] = v, t[11] = C;else v = t[10], C = t[11];
  if (IZ.useEffect(v, C), Gc(A, uhc), i?.status === "success") {
    if (!o) return null;
    let M;
    if (t[12] !== i || t[13] !== s) M = s && Wz.jsxs(w, {
      dimColor: !0,
      wrap: "truncate",
      children: ["current: ", {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.195",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-06-26T01:00:56Z",
        GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
      }.VERSION, " \xB7 latest:", " ", i.version]
    }), t[12] = i, t[13] = s, t[14] = M;else M = t[14];
    let N = u !== "unknown" && ` via ${u}`,
      B;
    if (t[15] !== N) B = Wz.jsxs(w, {
      color: "success",
      wrap: "truncate",
      children: ["\u2713 Update installed", N, " \xB7 Restart to apply"]
    }), t[15] = N, t[16] = B;else B = t[16];
    let $;
    if (t[17] !== B || t[18] !== M) $ = Wz.jsxs(U, {
      flexDirection: "row",
      gap: 1,
      children: [M, B]
    }), t[17] = B, t[18] = M, t[19] = $;else $ = t[19];
    return $;
  }
  if (n) {
    let M = u === "unknown" ? "Updating\u2026" : `Updating via ${u}\u2026`,
      N;
    if (t[20] !== M) N = Wz.jsx(w, {
      dimColor: !0,
      wrap: "truncate",
      children: M
    }), t[20] = M, t[21] = N;else N = t[21];
    return N;
  }
  let x = i?.status === "install_failed";
  if (!l && !x || u === "unknown") return null;
  let I;
  if (t[22] !== s) I = s && Wz.jsxs(w, {
    dimColor: !0,
    wrap: "truncate",
    children: ["currentVersion: ", {
      ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
      PACKAGE_URL: "@anthropic-ai/claude-code",
      README_URL: "https://code.claude.com/docs/en/overview",
      VERSION: "2.1.195",
      FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
      BUILD_TIME: "2026-06-26T01:00:56Z",
      GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
    }.VERSION]
  }), t[22] = s, t[23] = I;else I = t[23];
  let k;
  if (t[24] !== p || t[25] !== u) k = cdm(u, p), t[24] = p, t[25] = u, t[26] = k;else k = t[26];
  let D;
  if (t[27] !== k) D = Wz.jsx(w, {
    bold: !0,
    children: k
  }), t[27] = k, t[28] = D;else D = t[28];
  let P;
  if (t[29] !== x) P = x && Wz.jsx(w, {
    dimColor: !0,
    children: " (auto-update failed)"
  }), t[29] = x, t[30] = P;else P = t[30];
  let O;
  if (t[31] !== D || t[32] !== P) O = Wz.jsxs(w, {
    color: "warning",
    wrap: "truncate",
    children: ["Update available! Run:", " ", D, P]
  }), t[31] = D, t[32] = P, t[33] = O;else O = t[33];
  let L;
  if (t[34] !== O || t[35] !== I) L = Wz.jsxs(Wz.Fragment, {
    children: [I, O]
  }), t[34] = O, t[35] = I, t[36] = L;else L = t[36];
  return L;
}
function udm(e) {
  return e.autoUpdaterResult?.status === "install_failed" ? {
    ...e,
    autoUpdaterResult: null
  } : e;
}
function ddm(e) {
  return e.autoUpdaterResult;
}
var dhc,
  phc,
  fhc,
  IZ,
  Wz,
  chc = 0,
  uhc = 1800000,
  Vur = null;