// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module HSr
// matched 2.1.88 source: src/constants/oauth.ts
// class=modified (alt of src/constants/oauth.ts)  jaccard=0.0193  score=0.053  fileCov=0.0296
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
function qsn(e) {
  if (!e) return;
  let t;
  try {
    t = new URL(e);
  } catch (r) {
    throw new nf(`Invalid token endpoint base URL "${e}": ${r}`);
  }
  if (t.protocol === "https:") return;
  let n = t.hostname.toLowerCase().replace(/^\[|\]$/g, "");
  if (t.protocol === "http:" && (n === "localhost" || n === "127.0.0.1" || n === "::1")) return;
  throw new nf(`Refusing to send credential over non-https token endpoint "${e}"`);
}
async function Vsn(e, t) {
  let n = await Fzc(e),
    r;
  try {
    r = JSON.parse(n);
  } catch {
    throw new nf(
      `Token endpoint returned non-JSON response (status ${e.status})`,
      e.status,
      tG(n),
      t,
    );
  }
  if (!r.access_token)
    throw new nf(
      `Token endpoint response missing access_token: ${JSON.stringify(tG(r))}`,
      e.status,
      tG(r),
      t,
    );
  if (r.token_type && r.token_type.toLowerCase() !== "bearer")
    throw new nf(
      `Token endpoint response: unsupported token_type "${r.token_type}" (want Bearer)`,
      e.status,
      tG(r),
      t,
    );
  return r;
}
function tG(e) {
  if (e == null) return e;
  if (typeof e === "string") {
    let t;
    try {
      t = JSON.parse(e);
    } catch {
      if (e.length <= TSr) return e;
      return e.slice(0, TSr) + `... <${e.length - TSr} more chars>`;
    }
    return JSON.stringify(tG(t));
  }
  if (typeof e === "object" && !Array.isArray(e)) {
    let t = {};
    for (let [n, r] of Object.entries(e)) if (Uzc.has(n)) t[n] = r;
    return t;
  }
  return null;
}
async function zsn(e, t = (n) => console.warn(`anthropic-sdk: ${n}`)) {
  if (typeof process === "undefined") return;
  let n = await import("fs"),
    r = e,
    o;
  try {
    ((r = await n.promises.realpath(e)), (o = await n.promises.stat(r)));
  } catch {
    return;
  }
  let s = o.mode & 511;
  if (s & 18)
    throw new nf(
      `Credentials file at ${r} is group/world-writable (mode 0o${s.toString(8)}); this allows other local users to plant tokens. Run \`chmod 600 ${r}\`.`,
    );
  if (s & 36)
    throw new nf(
      `Credentials file at ${r} is group/world-readable (mode 0o${s.toString(8)}); run \`chmod 600 ${r}\` before retrying.`,
    );
  if (typeof process.getuid === "function" && o.uid !== process.getuid())
    t(
      `credentials file at ${r} is owned by uid ${o.uid} (current process uid ${process.getuid()}); verify this is intentional.`,
    );
}
async function TJe(e, t) {
  let n = await import("fs"),
    o = (await import("path")).dirname(e);
  await n.promises.mkdir(o, {
    recursive: true,
    mode: 448,
  });
  let s = `${e}.${process.pid}.${Math.random().toString(36).slice(2)}.tmp`;
  try {
    let i = await n.promises.open(s, "w", 384);
    try {
      (await i.writeFile(JSON.stringify(t, null, 2)), await i.sync());
    } finally {
      await i.close();
    }
    await n.promises.rename(s, e);
  } catch (i) {
    throw (await n.promises.unlink(s).catch(() => {}), i);
  }
  try {
    let i = await n.promises.open(o, "r");
    try {
      await i.sync();
    } finally {
      await i.close();
    }
  } catch {}
}
async function Fzc(e) {
  if (!e.body) return "";
  let t = e.body.getReader(),
    n = [],
    r = 0;
  for (;;) {
    let { done: s, value: i } = await t.read();
    if (s) break;
    if (r + i.length > Zrs) {
      let a = Zrs - r;
      if (a > 0) n.push(i.subarray(0, a));
      await t.cancel();
      break;
    }
    (n.push(i), (r += i.length));
  }
  let o;
  if (n.length === 1) o = n[0];
  else {
    o = new Uint8Array(n.reduce((i, a) => i + a.length, 0));
    let s = 0;
    for (let i of n) (o.set(i, s), (s += i.length));
  }
  return new TextDecoder("utf-8").decode(o);
}
var eos = "urn:ietf:params:oauth:grant-type:jwt-bearer",
  tos = "refresh_token",
  Gsn = "/v1/oauth/token",
  Nge = "oauth-2025-04-20",
  Wsn = "oidc-federation-2026-04-01",
  nos = 120,
  owe = 30,
  ros = 5,
  Zrs = 1048576,
  TSr = 2000,
  Uzc,
  nf;
