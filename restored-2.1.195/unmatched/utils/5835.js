// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module lNc
// matched 2.1.88 source: src/services/mcp/client.ts
// class=new  jaccard=0.0141  score=0.1168  fileCov=0.0158
// note: nearest: src/services/mcp/client.ts (0.0141); dir inferred from dep-graph -> utils; 0 renamed
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module lNc] deps: ft, Zf, rq, Pw, Mm, wr, fn, dOe, yLe, Jt, kv, kt, J1c, a8t
A2 = require("fs/promises"), rD = require("path");
function cNc(e) {
  return {
    pluginId: e.id,
    name: e.name,
    description: e.description ?? "",
    version: e.version ?? null,
    updatedAt: e.updated_at ?? null
  };
}
function uNc(e) {
  return e.enabled !== false;
}
function Ekm() {
  return Oe.CLAUDE_CODE_SYNC_PLUGINS_DOWNLOAD_STALL_MS ?? N7o;
}
async function hNc(e) {
  let t = await e();
  if ("success" in t ? t.success : t.ok) return t;
  return await Nn(Skm), e();
}
async function yNc(e = {}) {
  return hNc(() => Hkm(e));
}
async function Hkm(e) {
  let t = [];
  try {
    for (let n = 0; n < $7o; n++) {
      let r = n * dNc,
        o = await Os.get(`${Akm}&limit=${dNc}&offset=${r}`, {
          auth: "teleport-org",
          isBackground: e.isBackground,
          timeout: bkm
        });
      if (!o.ok) return {
        success: false,
        error: o.reason === "no-auth" ? o.detail : o.reason
      };
      if (!Array.isArray(o.data?.plugins)) {
        let s = gNc().safeParse(o.data);
        if (s.success) {
          let i = s.data.error.type ?? "error_envelope_no_type";
          return In("warn", "plugins_sync_list_error", {
            serverError: i,
            status: o.status
          }), {
            success: false,
            error: i
          };
        }
        return In("warn", "plugins_sync_list_malformed"), {
          success: false,
          error: "malformed list-plugins response"
        };
      }
      for (let s of o.data.plugins) if (uNc(s)) t.push(cNc(s));
      if (o.data.has_more !== true) return {
        success: true,
        plugins: t
      };
    }
    return In("warn", "plugins_sync_list_page_cap", {
      pages: $7o,
      collected: t.length
    }), {
      success: false,
      error: `list-plugins page cap (${$7o}) exceeded`
    };
  } catch (n) {
    let {
      message: r
    } = $A(n);
    return {
      success: false,
      error: r
    };
  }
}
async function _Nc(e, t, n = {}) {
  return hNc(() => Tkm(e, t, n));
}
async function Tkm(e, t, n) {
  if (Oe.CLAUDE_CODE_SYNC_PLUGINS_BUFFERED_DOWNLOAD) return vkm(e, t, n);
  let r = 0,
    o = false;
  try {
    let c = function () {
        o = true, l.destroy(Error("plugin download stream stalled"));
      },
      s = await Os.get(`/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download`, {
        auth: "teleport-org",
        isBackground: n.isBackground,
        timeout: N7o,
        responseType: "stream"
      });
    if (!s.ok || !s.data) {
      let f = s.ok ? "empty_body" : s.reason;
      return In("warn", "plugins_sync_download_not_ok", {
        reason: f
      }), {
        ok: false,
        reason: f
      };
    }
    let i = Ekm(),
      a,
      l = new fNc.Transform({
        transform(f, m, g) {
          if (clearTimeout(a), a = setTimeout(c, i), r += f.length, r > O7o) g(Error("plugin zip exceeds download byte cap"));else g(null, f);
        },
        flush(f) {
          clearTimeout(a), f();
        }
      });
    a = setTimeout(c, i);
    try {
      await mNc.pipeline(s.data, l, pNc.createWriteStream(t));
    } finally {
      clearTimeout(a);
    }
    let u = Buffer.alloc(2048),
      d = await j7e.open(t, "r"),
      p;
    try {
      p = (await d.read(u, 0, u.length, 0)).bytesRead;
    } finally {
      await d.close();
    }
    if (p < 2 || u[0] !== 80 || u[1] !== 75) {
      await j7e.rm(t, {
        force: true
      });
      let f = p === 0 ? "empty_body" : bNc(u.subarray(0, p));
      return In("warn", "plugins_sync_download_not_zip", {
        serverError: f,
        bodyLen: r
      }), {
        ok: false,
        reason: f
      };
    }
    return {
      ok: true
    };
  } catch (s) {
    await j7e.rm(t, {
      force: true
    }).catch(() => {});
    let i = s?.response?.data;
    if (i !== null && typeof i === "object" && "destroy" in i && typeof i.destroy === "function") i.destroy();
    let a = s !== null && typeof s === "object" && "code" in s ? s.code : void 0,
      l = o ? "timeout" : r > O7o ? "too_large" : a === "ECONNRESET" || a === "EPIPE" || a === "ETIMEDOUT" ? "network" : $A(s).kind;
    return In("warn", "plugins_sync_download_exception", {
      kind: l
    }), {
      ok: false,
      reason: l
    };
  }
}
async function vkm(e, t, n) {
  try {
    let r = await Os.get(`/api/oauth/organizations/:orgUUID/plugins/${encodeURIComponent(e)}/download`, {
      auth: "teleport-org",
      isBackground: n.isBackground,
      timeout: N7o,
      responseType: "arraybuffer",
      maxContentLength: O7o
    });
    if (!r.ok || !r.data) {
      let s = r.ok ? "empty_body" : r.reason;
      return In("warn", "plugins_sync_download_not_ok", {
        reason: s
      }), {
        ok: false,
        reason: s
      };
    }
    let o = Buffer.from(r.data);
    if (o.length < 2 || o[0] !== 80 || o[1] !== 75) {
      let s = o.length === 0 ? "empty_body" : bNc(o);
      return In("warn", "plugins_sync_download_not_zip", {
        serverError: s,
        bodyLen: o.length
      }), {
        ok: false,
        reason: s
      };
    }
    return await j7e.writeFile(t, o), {
      ok: true
    };
  } catch (r) {
    let {
      kind: o
    } = $A(r);
    return In("warn", "plugins_sync_download_exception", {
      kind: o
    }), {
      ok: false,
      reason: o
    };
  }
}
function bNc(e) {
  try {
    let t = gNc().safeParse(Ft(e.toString("utf8", 0, 2048)));
    if (t.success) return t.data.error.type ?? "error_envelope_no_type";
  } catch {}
  return "non_json_body";
}
var pNc,
  j7e,
  fNc,
  mNc,
  bkm = 10000 /* 1e4 */,
  N7o = 60000,
  Skm = 500,
  dNc = 100,
  $7o = 20,
  O7o = 268435456,
  gNc,
  Akm = "/api/oauth/organizations/:orgUUID/plugins/list-plugins?enabled_only=true&compact=true";