// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Smn
// matched 2.1.88 source: src/utils/doctorDiagnostic.ts
// class=new  jaccard=0.0157  score=0.0504  fileCov=0.0223
// note: nearest: src/utils/doctorDiagnostic.ts (0.0157); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var Smn = E(() => {
  ih();
  Fet = Mi();
});
async function Emn(e, t) {
  if (sCs) return null;
  sCs = !0;
  let n = e?.policyHelper;
  if (!n) return null;
  if (t === null || !P1u.has(t)) return T(`policyHelper ignored: delivered via non-admin source '${t ?? "unknown"}'`, {
    level: "warn"
  }), null;
  let r = M1u(n.path);
  if (r) return Le("settings_policy_helper", "bad_path"), `policyHelper failed: ${r}`;
  let o = await uCs(n);
  if ("error" in o) return Le("settings_policy_helper", o.code), `policyHelper failed: ${o.error}`;
  return Phe = {
    config: n,
    output: o.output,
    warnings: o.warnings
  }, n_(), $1u(n), T(`policyHelper applied (keys: ${Object.keys(o.output).join(",")})`, {
    level: "debug"
  }), xe("settings_policy_helper"), null;
}
function Amn() {
  return Phe?.output.managedSettings ?? null;
}
function aCs() {
  return Phe?.output.claudeMd ?? null;
}
function lCs() {
  return Phe?.output.appendSystemPrompt ?? null;
}
function Fae() {
  return Phe !== null;
}
function cCs() {
  return Phe?.warnings ?? [];
}
async function uCs(e) {
  let t = e.timeoutMs ?? L1u,
    {
      stdout: n,
      stderr: r,
      code: o,
      error: s
    } = await Gr(e.path, [], {
      timeout: t,
      cwd: void 0,
      maxBuffer: ILr + 1,
      env: {
        ...process.env,
        CLAUDE_CODE_VERSION: {
          ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
          PACKAGE_URL: "@anthropic-ai/claude-code",
          README_URL: "https://code.claude.com/docs/en/overview",
          VERSION: "2.1.195",
          FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
          BUILD_TIME: "2026-06-26T01:00:56Z",
          GIT_SHA: "4603aa3f2ea164bd0974f82eb413ae7acc99a7ee"
        }.VERSION
      }
    });
  if (r) T(`policyHelper stderr: ${r}`, {
    level: "debug"
  });
  if (o !== 0) return {
    error: `exited with code ${o}: ${r || n || s || ""}`,
    code: "exit_nonzero"
  };
  if (Buffer.byteLength(n, "utf8") > ILr) return {
    error: `stdout exceeded ${ILr} bytes`,
    code: "oversize"
  };
  let i = Ia(n, !1);
  if (i === null || typeof i !== "object") return {
    error: "stdout is not a JSON object",
    code: "parse_failed"
  };
  let a = D1u().safeParse(i);
  if (!a.success) return {
    error: `invalid envelope: ${a.error.message}`,
    code: "envelope_invalid"
  };
  let l = {},
    c = [];
  if (a.data.managedSettings !== void 0) {
    let u = sM(a.data.managedSettings);
    c = Dhe(u, "policyHelper");
    for (let m of c) T(`policyHelper: ${m.message}`, {
      level: "warn"
    });
    let d = _M().safeParse(u);
    if (!d.success) return {
      error: `managedSettings rejected: ${d.error.message}`,
      code: "schema_rejected"
    };
    let {
      policyHelper: p,
      ...f
    } = d.data;
    l.managedSettings = f;
  }
  if (a.data.claudeMd !== void 0) l.claudeMd = a.data.claudeMd;
  if (a.data.appendSystemPrompt !== void 0) l.appendSystemPrompt = a.data.appendSystemPrompt;
  return {
    output: l,
    warnings: c
  };
}
function M1u(e) {
  if (!iCs.isAbsolute(e)) return `path must be absolute: ${e}`;
  if (Vt() === "windows" && !e.toLowerCase().endsWith(".exe")) return `path must end in .exe on Windows: ${e}`;
  return null;
}
function $1u(e) {
  if (uLt) clearInterval(uLt), uLt = null;
  let t = e.refreshIntervalMs ?? 0;
  if (t <= 0) return;
  uLt = setInterval(n => {
    if (xLr) return;
    xLr = !0, uCs(n).then(r => {
      if ("error" in r) {
        T(`policyHelper refresh failed (retaining current policy): ${r.error}`, {
          level: "warn"
        }), It("settings_policy_helper", "refresh_failed");
        return;
      }
      if (Phe) {
        Phe.output = r.output, Phe.warnings = r.warnings, n_();
        try {
          Fet.emit("policySettings"), kLr.emit();
        } catch (o) {
          ke(o);
        }
      }
    }).finally(() => {
      xLr = !1;
    });
  }, t, e), uLt.unref?.();
}
var iCs,
  kLr,
  L1u = 1e4,
  ILr = 1048576,
  D1u,
  RLr = "<policyHelper>",
  Phe = null,
  sCs = !1,
  uLt = null,
  xLr = !1,
  P1u;