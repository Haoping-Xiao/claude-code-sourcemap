// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module LPe
// matched 2.1.88 source: src/utils/localInstaller.ts
// class=modified  jaccard=0.3379  score=0.5871  fileCov=0.4432
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var LPe = E(() => {
  EW();
  Ye();
  ((dza = R(lt(), 1)), (pza = R(rt(), 1)), (fza = require("stream")), (ygt = R(se(), 1)));
});
async function yVn(e, t) {
  let n;
  for (let r = 1; r <= t.attempts; r++)
    try {
      return await e(AbortSignal.timeout(t.timeoutMs));
    } catch (o) {
      if (((n = o), r >= t.attempts)) break;
      t.onRetry?.(r, o);
      let s = 500 * 3 ** (r - 1);
      await Nn(s * (0.75 + Math.random() * 0.5));
    }
  throw n;
}
var uAo = () => {};
function _Vn() {
  return bgt.join(tr(), "local");
}
function hza() {
  return bgt.join(_Vn(), "claude");
}
function yza() {
  return (process.argv[1] || "").includes("/.claude/local/node_modules/");
}
async function gza(e, t, n) {
  try {
    return (
      await Sgt.writeFile(e, t, {
        encoding: "utf8",
        flag: "wx",
        mode: n,
      }),
      true
    );
  } catch (r) {
    if (on(r) === "EEXIST") return false;
    throw r;
  }
}
async function Dzp() {
  try {
    let e = _Vn();
    (await qt().mkdir(e),
      await gza(
        bgt.join(e, "package.json"),
        De(
          {
            name: "claude-local",
            version: "0.0.1",
            private: true,
          },
          null,
          2,
        ),
      ));
    let t = bgt.join(e, "claude");
    if (
      await gza(
        t,
        `#!/bin/sh
exec "${e}/node_modules/.bin/claude" "$@"`,
        493,
      )
    )
      await Sgt.chmod(t, 493);
    return true;
  } catch (e) {
    return (
      T(`Failed to set up local package environment: ${e}`, {
        level: "error",
      }),
      false
    );
  }
}
async function qqt(e, t) {
  try {
    if (!(await Dzp()))
      return (Le("update_apply", "update_apply_env_setup_failed"), "install_failed");
    let n = t ? t : e === "stable" ? "stable" : "latest",
      r = await Gr(
        "npm",
        [
          "install",
          `${
            {
              ISSUES_EXPLAINER:
                "report the issue at https://github.com/anthropics/claude-code/issues",
              PACKAGE_URL: "@anthropic-ai/claude-code",
              README_URL: "https://code.claude.com/docs/en/overview",
              VERSION: "2.1.195",
              FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
              BUILD_TIME: "2026-06-26T01:00:56Z",
              GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee",
            }.PACKAGE_URL
          }@${n}`,
        ],
        {
          cwd: _Vn(),
          maxBuffer: 1000000 /* 1e6 */,
        },
      );
    if (r.code !== 0)
      return (
        Le("update_apply", "update_apply_local_npm_failed"),
        T(`Failed to install Claude CLI package: ${r.stderr}`, {
          level: "error",
        }),
        r.code === 190 ? "in_progress" : "install_failed"
      );
    return (
      gn((o) => ({
        ...o,
        installMethod: "local",
      })),
      xe("update_apply"),
      "success"
    );
  } catch (n) {
    return (Le("update_apply", "update_apply_local_exception"), ke(n), "install_failed");
  }
}
async function E9e() {
  try {
    return (await Sgt.access(bgt.join(_Vn(), "node_modules", ".bin", "claude")), true);
  } catch {
    return false;
  }
}
function Egt() {
  let e = process.env.SHELL || "";
  if (e.includes("zsh")) return "zsh";
  if (e.includes("bash")) return "bash";
  if (e.includes("fish")) return "fish";
  return "unknown";
}
var Sgt, bgt;
