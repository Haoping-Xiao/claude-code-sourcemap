// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module hN
// matched 2.1.88 source: src/utils/swarm/backends/detection.ts
// class=modified  jaccard=0.2899  score=0.3531  fileCov=0.6184
// note: deminified; 11 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// module exports: resetDetectionCache, listUserTmuxSessions, isTmuxAvailable, isIt2CliAvailable, isInsideTmuxSync, isInsideTmux, isInITerm2, getUserTmuxSocket, getLeaderPaneId, getIt2Command, IT2_COMMAND
// [unwrapped __esm module hN]
TXa = /^[A-Za-z0-9][A-Za-z0-9_-]{0,63}$/;
function isInsideTmuxSync() {
  return !!aht;
}
async function listUserTmuxSessions() {
  if (!aht) return;
  let e = bi(aht, ",");
  if (!e) return;
  let { code: t, stdout: n } = await $n(M6, ["-S", e, "list-sessions", "-F", "#{session_name}"], {
    useCwd: false,
    timeout: 2000,
  });
  if (t !== 0) return;
  return n
    .split(
      `
`,
    )
    .filter(Boolean);
}
async function isInsideTmux() {
  if (CVt !== null) return CVt;
  return ((CVt = !!aht), CVt);
}
function getLeaderPaneId() {
  return B7p || null;
}
function getUserTmuxSocket() {
  if (!aht) return null;
  return bi(aht, ",") || null;
}
async function isTmuxAvailable() {
  return (await $n(M6, ["-V"])).code === 0;
}
function isInITerm2() {
  if (IVt !== null) return IVt;
  let e = process.env.TERM_PROGRAM,
    t = !!process.env.ITERM_SESSION_ID,
    n = Oe.terminal === "iTerm.app";
  return ((IVt = e === "iTerm.app" || t || n), IVt);
}
function getIt2Command() {
  return SHo;
}
async function isIt2CliAvailable() {
  let e = Oe.SHELL || "/bin/zsh",
    t = await $n(e, ["-lc", `command -v ${IT2_COMMAND}`], {
      useCwd: false,
      timeout: 2000,
    }),
    n =
      t.code === 0
        ? (t.stdout
            .split(
              `
`,
            )
            .map((i) => i.trim())
            .filter(Boolean)
            .at(-1) ?? "")
        : "",
    r = async (i) => $n(i, ["session", "list"]),
    o = n || IT2_COMMAND,
    s = await r(o);
  if (n && s.code !== 0 && (s.code === 127 || /ENOENT/i.test(s.error ?? "")))
    ((o = IT2_COMMAND), (s = await r(o)));
  if (s.code !== 0)
    return (
      T(
        `[isIt2CliAvailable] '${o} session list' failed (code=${s.code}): ${s.stderr || s.error || "no stderr"}. ` +
          (n
            ? "it2 was found on PATH \u2014 check that the iTerm2 Python API is enabled " +
              "(Preferences > General > Magic > Enable Python API)."
            : "it2 was not found on PATH (including login-shell PATH)."),
      ),
      false
    );
  return ((SHo = o), true);
}
function resetDetectionCache() {
  ((CVt = null), (IVt = null), (SHo = IT2_COMMAND));
}
var aht,
  B7p,
  CVt = null,
  IVt = null,
  IT2_COMMAND = "it2",
  SHo;
