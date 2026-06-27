// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NGo
// matched 2.1.88 source: src/commands/remote-setup/api.ts
// class=modified  jaccard=0.2215  score=0.6281  fileCov=0.2549
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
async function importGithubToken(e) {
  let t;
  try {
    t = await Os.post(
      "/v1/code/github/import-token",
      {
        token: e.reveal(),
      },
      {
        headers: {
          "anthropic-beta": _2r.header,
        },
        auth: "teleport-org",
        timeout: 15000,
        validateStatus: () => true,
      },
    );
  } catch (n) {
    if (ab(n))
      return (
        T(`import-token network error: ${n.code ?? "unknown"}`, {
          level: "error",
        }),
        {
          ok: false,
          error: {
            kind: "network",
          },
        }
      );
    return {
      ok: false,
      error: {
        kind: "not_signed_in",
      },
    };
  }
  if (!t.ok)
    return {
      ok: false,
      error: {
        kind: "not_signed_in",
      },
    };
  if (t.status === 200)
    return {
      ok: true,
      result: t.data,
    };
  if (t.status === 400)
    return {
      ok: false,
      error: {
        kind: "invalid_token",
      },
    };
  if (t.status === 401)
    return {
      ok: false,
      error: {
        kind: "not_signed_in",
      },
    };
  return (
    T(`import-token returned ${t.status}`, {
      level: "error",
    }),
    {
      ok: false,
      error: {
        kind: "server",
        status: t.status,
      },
    }
  );
}
async function Pnc() {
  try {
    return (await Lj(), true);
  } catch {
    return false;
  }
}
async function Mnc() {
  try {
    let e = await Os.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: 10000 /* 1e4 */,
      validateStatus: () => true,
    });
    if (!e.ok || e.status !== 200 || !e.data?.is_authenticated) return null;
    let t = e.data.auth_source;
    return t === "oauth" || t === "cli_import" ? t : null;
  } catch {
    return null;
  }
}
function lar() {
  return `${$s().CLAUDE_AI_ORIGIN}/code`;
}
var BGo;
