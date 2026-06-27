// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module MPe
// matched 2.1.88 source: src/utils/nativeInstaller/download.ts
// class=modified  jaccard=0.2738  score=0.5701  fileCov=0.345
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module MPe] deps: oo, FEe, er, Lo, wr, fn, Bi, ys, kgt, A9e, IVn, Is, tre, OB, lg, S9, hY, mCe, RCe, lj, EVn, Jt, _0
((Xqt = require("fs/promises")), (PPe = require("os")), (lA = require("path")));
var Oza = () => {};
function vAo(e, t) {
  return SFe(e) ? kSe.get(e, t) : lb.get(e, t);
}
async function Zzp(e = "latest", t, n) {
  let r = Date.now(),
    o = 0;
  try {
    let s = await yVn(
        (a) => (
          o++,
          vAo(`${t}/${e}`, {
            timeout: Nza,
            responseType: "text",
            signal: a,
            ...n,
          })
        ),
        {
          attempts: Bza,
          timeoutMs: Nza,
          onRetry: (a, l) => {
            T(
              `Version check failed on attempt ${a}/${Bza}, retrying: ${l instanceof Error ? l.message : String(l)}`,
            );
          },
        },
      ),
      i = Date.now() - r;
    if (
      (G("tengu_version_check_success", {
        latency_ms: i,
        attempt: o,
      }),
      o > 1)
    )
      It("update_check", "update_check_binary_repo_retry");
    else xe("update_check");
    return s.data.trim();
  } catch (s) {
    let i = Date.now() - r,
      a = s instanceof Error ? s.message : String(s),
      l = HAo(s);
    (Le("update_check", "update_check_binary_repo_failed"),
      G("tengu_version_check_failure", {
        latency_ms: i,
        http_status: l,
        is_timeout: TAo(s),
        attempt: o,
        platform: Z9(iKp()),
        channel: $e(e),
      }));
    let c = Error(`Failed to fetch version from ${t}/${e} after ${o} attempt(s): ${a}`);
    throw (
      T(`Failed to fetch version from ${t}/${e} after ${o} attempt(s): ${a}`, {
        level: "error",
      }),
      c
    );
  }
}
async function Jqt(e) {
  if (/^v?\d+\.\d+\.\d+(-\S+)?$/.test(e)) {
    let n = e.startsWith("v") ? e.slice(1) : e;
    if (/^99\.99\./.test(n))
      throw Error(`Version ${n} is not available for installation. Use 'stable' or 'latest'.`);
    return n;
  }
  let t = e;
  if (t !== "stable" && t !== "latest" && t !== "rc")
    throw Error(`Invalid channel: ${e}. Use 'latest' or 'stable'`);
  if (t === "rc") throw Error(`Invalid channel: ${e}. Use 'stable' or 'latest'`);
  return Zzp(t, jza);
}
function nKp() {
  return Number(process.env.CLAUDE_CODE_STALL_TIMEOUT_MS_FOR_TESTING) || eKp;
}
async function rKp(e, t, n, r = {}) {
  let o,
    s = false;
  for (let i = 1; i <= AAo; i++) {
    let a = new AbortController(),
      l,
      c = () => {
        if (l) (clearTimeout(l), (l = void 0));
      },
      u = () => {
        (c(), (l = setTimeout((d) => d.abort(), nKp(), a)));
      };
    try {
      u();
      let d = await vAo(e, {
        timeout: tKp,
        responseType: "arraybuffer",
        signal: a.signal,
        onDownloadProgress: () => {
          u();
        },
        ...r,
      });
      c();
      let p = Buffer.isBuffer(d.data) ? d.data : Buffer.from(d.data),
        f = Uza.createHash("sha256");
      f.update(p);
      let m = f.digest("hex");
      if (m !== t) throw Error(`Checksum mismatch: expected ${t}, got ${m}`);
      return (await xVn.writeFile(n, p), await xVn.chmod(n, 493), s);
    } catch (d) {
      c();
      let p = dM(d),
        f = d instanceof Error && d.message.includes("Checksum mismatch"),
        m = p ? new kVn() : Zr(d);
      if (((o = m), (p || f) && i < AAo)) {
        if (f) s = true;
        (T(`Download ${f ? "checksum mismatch" : "stalled"} on attempt ${i}/${AAo}, retrying...`),
          await Nn(1000));
        continue;
      }
      throw Object.assign(m, {
        attempt: i,
      });
    }
  }
  throw o ?? Error("Download failed after all retries");
}
async function oKp(e, t, n, r) {
  let o = qt();
  await o.rm(t, {
    recursive: true,
    force: true,
  });
  let s = aoe(),
    i = Date.now();
  G("tengu_binary_download_attempt", {});
  let a;
  try {
    a = (
      await vAo(`${n}/${e}/manifest.json`, {
        timeout: 10000 /* 1e4 */,
        responseType: "json",
        ...r,
      })
    ).data;
  } catch (f) {
    let m = Date.now() - i,
      g = f instanceof Error ? f.message : String(f);
    throw (
      Le("update_download", "update_download_manifest_failed"),
      G("tengu_binary_manifest_fetch_failure", {
        latency_ms: m,
        http_status: HAo(f),
        is_timeout: TAo(f),
        platform: Z9(s),
      }),
      T(`Failed to fetch manifest from ${n}/${e}/manifest.json: ${g}`, {
        level: "error",
      }),
      f
    );
  }
  let l = a.platforms[s];
  if (!l)
    throw (
      Le("update_download", "update_download_platform_not_found"),
      G("tengu_binary_platform_not_found", {}),
      Error(
        `Native binaries for ${s} are not available on this release channel (version ${e} ships: ${Object.keys(a.platforms).sort().join(", ")}).`,
      )
    );
  let c = l.checksum,
    u = RVn(s),
    d = `${n}/${e}/${s}/${u}`;
  await o.mkdir(t);
  let p = Fza.join(t, u);
  try {
    let f = await rKp(d, c, p, r || {}),
      m = Date.now() - i;
    if (f) It("update_download", "update_download_checksum_retry");
    else xe("update_download");
    G("tengu_binary_download_success", {
      latency_ms: m,
    });
  } catch (f) {
    let m = Date.now() - i,
      g = f instanceof Error ? f.message : String(f),
      h = g.includes("Checksum mismatch");
    if (h) Le("update_download", "update_download_checksum_mismatch");
    else if (f instanceof kVn) Le("update_download", "update_download_stall_timeout");
    else Le("update_download", "update_download_binary_failed");
    throw (
      G("tengu_binary_download_failure", {
        latency_ms: m,
        http_status: HAo(f),
        is_timeout: TAo(f),
        is_checksum_mismatch: h,
        attempt: sKp(f),
        platform: Z9(s),
      }),
      T(`Failed to download binary from ${d}: ${g}`, {
        level: "error",
      }),
      f
    );
  }
}
async function Gza(e, t) {
  return (await oKp(e, t, jza), "binary");
}
function HAo(e) {
  if (ab(e) && e.response) return e.response.status;
  return;
}
function TAo(e) {
  if (e instanceof kVn) return true;
  if (dM(e)) return true;
  if (ab(e) && (e.code === "ECONNABORTED" || e.code === "ETIMEDOUT")) return true;
  if (e !== null && typeof e === "object" && "code" in e && e.code === "ETIMEDOUT") return true;
  let t = (e instanceof Error ? e.message : String(e)).toLowerCase();
  return t.includes("timeout") || t.includes("timed out");
}
function sKp(e) {
  if (e !== null && typeof e === "object" && "attempt" in e && typeof e.attempt === "number")
    return e.attempt;
  return;
}
function iKp() {
  try {
    return aoe();
  } catch {
    return "unknown";
  }
}
var Uza,
  xVn,
  Fza,
  jza = "https://downloads.claude.ai/claude-code-releases",
  Nza = 30000,
  Bza = 3,
  eKp = 120000,
  AAo = 3,
  tKp = 600000,
  kVn;
