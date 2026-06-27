// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module G1c
// matched 2.1.88 source: src/commands/insights.ts
// class=new  jaccard=0.0072  score=0.1338  fileCov=0.0075
// note: nearest: src/commands/insights.ts (0.0072); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module G1c] deps: spt, Ox, S_e, lpt
U1c = require("path"), F1c = require("url");
function W1c(e) {
  return {
    skillId: e.id,
    name: e.name,
    description: e.description ?? "",
    source: e.source ?? "custom",
    updatedAt: e.updated_at ?? null
  };
}
function q1c(e) {
  return e.enabled !== false;
}
async function Y1c(e = {}) {
  let t = Q2(),
    n = t ? `${V1c}&entrypoint=${encodeURIComponent(t)}` : V1c;
  try {
    let r = await Os.get(n, {
      auth: "teleport-org",
      isBackground: e.isBackground,
      timeout: ikm
    });
    if (!r.ok) return {
      success: false,
      error: r.reason === "no-auth" ? r.detail : r.reason
    };
    if (!Array.isArray(r.data?.skills)) {
      let s = K1c().safeParse(r.data);
      if (s.success) {
        let i = s.data.error.type ?? "error_envelope_no_type";
        return In("warn", "skills_sync_list_error", {
          serverError: i,
          status: r.status
        }), {
          success: false,
          error: i
        };
      }
      return In("warn", "skills_sync_list_malformed"), {
        success: false,
        error: "malformed list-skills response"
      };
    }
    return {
      success: true,
      skills: r.data.skills.filter(q1c).map(W1c)
    };
  } catch (r) {
    let {
      message: o
    } = $A(r);
    return {
      success: false,
      error: o
    };
  }
}
async function X1c(e, t, n = {}) {
  let r = Q2(),
    o = r ? `?entrypoint=${encodeURIComponent(r)}` : "";
  try {
    let s = await Os.get(`/api/oauth/organizations/:orgUUID/skills/${encodeURIComponent(e)}/download${o}`, {
      auth: "teleport-org",
      isBackground: n.isBackground,
      timeout: akm,
      responseType: "arraybuffer"
    });
    if (!s.ok || !s.data) return In("warn", "skills_sync_download_not_ok", {
      reason: s.ok ? "empty_body" : s.reason
    }), false;
    let i = Buffer.from(s.data);
    if (i.length < 2 || i[0] !== 80 || i[1] !== 75) return In("warn", "skills_sync_download_not_zip", {
      serverError: lkm(i),
      bodyLen: i.length
    }), false;
    return await z1c.writeFile(t, i), true;
  } catch (s) {
    let {
      kind: i
    } = $A(s);
    return In("warn", "skills_sync_download_exception", {
      kind: i
    }), false;
  }
}
function lkm(e) {
  try {
    let t = K1c().safeParse(Ft(e.toString("utf8", 0, 2048)));
    if (t.success) return t.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}
var z1c,
  ikm = 30000,
  akm = 300000,
  K1c,
  V1c = "/api/oauth/organizations/:orgUUID/skills/list-skills?include_wiggle_skills=true";