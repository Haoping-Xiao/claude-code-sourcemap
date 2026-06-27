// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Pic
// matched 2.1.88 source: src/utils/hooks.ts
// class=modified (alt of src/utils/hooks.ts)  jaccard=0.0169  score=0.5586  fileCov=0.0171
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Pic = E(() => {
  ft();
  KKt();
  ag();
  je();
  sp();
  _a();
  Mp();
  Dic = require("crypto");
});
async function WYe(e) {
  let t = {
      ...Td(void 0),
      hook_event_name: "WorktreeCreate",
      name: e,
    },
    n = await Kk({
      hookInput: t,
      timeoutMs: lp,
    }),
    r = n
      .filter((o) => o.succeeded)
      .map((o) => Vem(o.output))
      .find((o) => o.length > 0);
  if (r === void 0) {
    if (n.length === 0)
      throw Error(
        "WorktreeCreate hook failed: hook is configured but did not run (workspace not trusted, disableAllHooks set, or matcher mismatch)",
      );
    let o = n
      .filter((s) => !s.succeeded)
      .map((s) => `${s.command}: ${s.output.trim() || "no output"}`);
    if (o.length === 0)
      throw Error(
        "WorktreeCreate hook failed: hook succeeded but returned no worktree path (command: echo the path to stdout; http/callback: return hookSpecificOutput.worktreePath)",
      );
    throw new mi(
      `WorktreeCreate hook failed: ${o.join("; ")}`,
      "WorktreeCreate hook failed (stderr redacted)",
    );
  }
  return {
    worktreePath: r,
  };
}
function Vem(e) {
  return (
    Ja(e)
      .split(
        `
`,
      )
      .map((t) => t.trim())
      .filter(Boolean)
      .at(-1) ?? ""
  );
}
async function QHt(e) {
  let t = CU()?.WorktreeRemove,
    n = U2()?.WorktreeRemove,
    r = N_() ? void 0 : eG()?.WorktreeRemove,
    o = t && t.length > 0,
    s = n && n.length > 0,
    i = r && r.length > 0;
  if (!o && !s && !i) return false;
  let a = {
      ...Td(void 0),
      hook_event_name: "WorktreeRemove",
      worktree_path: e,
    },
    l = await Kk({
      hookInput: a,
      timeoutMs: lp,
    }),
    c = false;
  for (let u of l)
    if (u.succeeded) c = true;
    else
      T(`WorktreeRemove hook failed [${u.command}]: ${u.output.trim()}`, {
        level: "error",
      });
  return c;
}
