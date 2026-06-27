// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module NGo
// matched 2.1.88 source: src/commands/remote-setup/api.ts
// class=modified  jaccard=0.3025  score=0.6716  fileCov=0.355
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var NGo = E(() => {
  OB();
  _0();
});
async function Dnc(e) {
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
        validateStatus: () => !0,
      },
    );
  } catch (n) {
    if (ab(n))
      return (
        T(`import-token network error: ${n.code ?? "unknown"}`, {
          level: "error",
        }),
        {
          ok: !1,
          error: {
            kind: "network",
          },
        }
      );
    return {
      ok: !1,
      error: {
        kind: "not_signed_in",
      },
    };
  }
  if (!t.ok)
    return {
      ok: !1,
      error: {
        kind: "not_signed_in",
      },
    };
  if (t.status === 200)
    return {
      ok: !0,
      result: t.data,
    };
  if (t.status === 400)
    return {
      ok: !1,
      error: {
        kind: "invalid_token",
      },
    };
  if (t.status === 401)
    return {
      ok: !1,
      error: {
        kind: "not_signed_in",
      },
    };
  return (
    T(`import-token returned ${t.status}`, {
      level: "error",
    }),
    {
      ok: !1,
      error: {
        kind: "server",
        status: t.status,
      },
    }
  );
}
async function Pnc() {
  try {
    return (await Lj(), !0);
  } catch {
    return !1;
  }
}
async function Mnc() {
  try {
    let e = await Os.get("/api/oauth/organizations/:orgUUID/sync/github/auth", {
      auth: "teleport-org",
      timeout: 1e4,
      validateStatus: () => !0,
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
