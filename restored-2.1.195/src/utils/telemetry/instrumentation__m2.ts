// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module sZo
// matched 2.1.88 source: src/utils/telemetry/instrumentation.ts
// class=modified (alt of src/utils/telemetry/instrumentation.ts)  jaccard=0.0377  score=0.1618  fileCov=0.0469
// note: deminified; 1 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module sZo]
mV = R(QQo(), 1);
function A$m(e) {
  return fWc.has(e);
}
function T$m(e) {
  try {
    let t = new URL(e);
    if (t.protocol === "https:") return true;
    if (t.protocol === "http:" && fWc.has(t.hostname)) return true;
    return false;
  } catch {
    return false;
  }
}
async function iZo(e) {
  if (typeof e === "string") {
    let t = e.match(/^\$\{file:(.+)\}$/);
    if (t) {
      let n = t[1];
      if (!pWc.isAbsolute(n)) throw Error(`\${file:} path must be absolute: ${n}`);
      return (await ehr.readFile(n, "utf8")).trim();
    }
    return e.replace(/\$\{(\w+)\}/g, (n, r) => {
      let o = process.env[r];
      if (o === void 0) throw Error(`undefined env var in config: ${r}`);
      return o;
    });
  }
  if (Array.isArray(e)) return Promise.all(e.map(iZo));
  if (e && typeof e === "object") {
    let t = {};
    for (let [n, r] of Object.entries(e)) t[n] = await iZo(r);
    return t;
  }
  return e;
}
async function mWc(e) {
  let t = await ehr.readFile(e, "utf8"),
    n = Kte(t),
    r = await iZo(n);
  if (typeof r === "object" && r !== null && "dev" in r)
    throw Error(
      "`dev:` was removed \u2014 the gateway is Postgres-only. Set store.postgres_url " +
        "(local: docker run --rm -p 5432:5432 -e POSTGRES_HOST_AUTH_METHOD=trust postgres)",
    );
  return v$m().parse(r);
}
function w$m(e) {
  let t = e.availableModels;
  return Array.isArray(t) && t.every((n) => typeof n === "string") ? t : void 0;
}
async function gWc(e) {
  let t = getOtlpReaders(e),
    n = e.managed,
    r;
  if (n?.policies)
    ((r = n.policies.map(
      (o, s) => (
        dWc(o.cli, `managed.policies[${s}].cli`),
        {
          match: o.match,
          cli: o.cli,
          desktop: o.desktop,
        }
      ),
    )),
      (r = I$m(r)));
  else if (n?.settings) {
    let o = await P$m(n.settings);
    (dWc(o, "managed settings"),
      (r = [
        {
          match: {},
          cli: o,
        },
      ]));
  } else if (t)
    r = [
      {
        match: {},
        cli: {},
      },
    ];
  else return null;
  return r.map(({ match: o, cli: s, desktop: i }) => {
    let a = t
        ? {
            ...s,
            env: {
              ...t,
              ...(srn(s.env) ? s.env : {}),
            },
          }
        : s,
      l = m4n(a);
    return {
      match: o,
      payload: {
        uuid: l,
        checksum: l,
        settings: a,
      },
      availableModels: w$m(a),
      desktop: i,
    };
  });
}
function srn(e) {
  return typeof e === "object" && e !== null && !Array.isArray(e);
}
function C$m(e) {
  return e.groups === void 0 && e.email_domain === void 0;
}
function I$m(e) {
  let t = e.findIndex((r) => C$m(r.match));
  if (t === -1) return e;
  if (t !== e.length - 1)
    gu(
      "warn",
      `managed.policies[${t}] is a catch-all (match: {}) but is not the ` +
        "last entry \u2014 policies after it will never match. Move it to the end.",
    );
  let n = e[t];
  return e.map((r, o) => {
    if (o === t) return r;
    let s = x$m(n.cli, r.cli),
      i = Object.keys(s).filter((a) => De(s[a]) !== De(r.cli[a]));
    if (i.length > 0)
      gu(
        "info",
        `managed.policies[${o}] after merge with catch-all base \u2014 changed keys: ${i.join(", ")}`,
      );
    return {
      ...r,
      cli: s,
      desktop:
        n.desktop || r.desktop
          ? {
              ...n.desktop,
              ...r.desktop,
            }
          : void 0,
    };
  });
}
function x$m(e, t) {
  let n = {
    ...e,
    ...t,
  };
  for (let r of k$m) {
    let o = e[r],
      s = t[r];
    if (srn(o) && srn(s))
      n[r] = {
        ...o,
        ...s,
      };
  }
  for (let r of R$m) n[r] = yWc(e[r], t[r]);
  return (
    (n.permissions = uWc(e.permissions, t.permissions, L$m)),
    (n.hooks = uWc(e.hooks, t.hooks)),
    hWc(n)
  );
}
function uWc(e, t, n) {
  let r = srn(e) ? e : void 0,
    o = srn(t) ? t : void 0;
  if (!r && !o) return;
  let s = {
    ...(r ?? {}),
    ...(o ?? {}),
  };
  for (let i of n ?? Object.keys(s)) s[i] = yWc(r?.[i], o?.[i]);
  return hWc(s);
}
function hWc(e) {
  for (let t of Object.keys(e)) if (e[t] === void 0) delete e[t];
  return e;
}
function yWc(e, t) {
  let n = Array.isArray(e) ? e : [],
    r = Array.isArray(t) ? t : [];
  if (n.length === 0 && r.length === 0) return Array.isArray(e) || Array.isArray(t) ? [] : void 0;
  let o = new Set(),
    s = [];
  for (let i of [...n, ...r]) {
    let a = De(i);
    if (!o.has(a)) (o.add(a), s.push(i));
  }
  return s;
}
function getOtlpReaders(e) {
  if (e.telemetry.forward_to.length === 0) return null;
  let t = e.listen.public_url;
  if (!t)
    return (
      gu(
        "warn",
        "telemetry.forward_to is configured but listen.public_url is not \u2014 " +
          "clients will not be told to export OTLP. Set listen.public_url so /managed/settings can push OTEL_EXPORTER_OTLP_ENDPOINT.",
      ),
      null
    );
  return {
    CLAUDE_CODE_ENABLE_TELEMETRY: "1",
    OTEL_METRICS_EXPORTER: "otlp",
    OTEL_LOGS_EXPORTER: "otlp",
    OTEL_TRACES_EXPORTER: "otlp",
    OTEL_EXPORTER_OTLP_ENDPOINT: t,
    OTEL_EXPORTER_OTLP_PROTOCOL: "http/protobuf",
  };
}
function thr(e, t) {
  let n = t.groups ?? [],
    r = t.email?.includes("@") ? t.email.slice(t.email.lastIndexOf("@") + 1).toLowerCase() : void 0;
  for (let [o, s] of e.entries()) {
    let { groups: i, email_domain: a } = s.match;
    if (i && !i.some((l) => n.includes(l))) continue;
    if (a && r !== a) continue;
    return {
      index: o,
      policy: s,
    };
  }
  return null;
}
function dWc(e, t) {
  let n = _M(),
    r = n.safeParse(e),
    o = [];
  if (!r.success) o.push(...r.error.issues.map((s) => `  ${s.path.join(".")}: ${s.message}`));
  if (e !== null && typeof e === "object") {
    let s = new Set(Object.keys(n.shape));
    for (let [i, a] of Object.entries(e))
      if (i === "mcpServers") {
        if (a !== void 0)
          o.push(
            "  mcpServers: not supported via gateway managed settings yet \u2014 remove it from the document",
          );
      } else if (!s.has(i))
        o.push(
          `  ${i}: unknown settings key \u2014 fix the typo, upgrade the gateway if this key was added in a newer CLI, or set the gateway's matching env/build gate if the key is gated (e.g. CLAUDE_CODE_ENABLE_XAA for xaaIdp)`,
        );
  }
  if (o.length > 0)
    throw Error(`${t} invalid:
${o.join(`
`)}`);
}
async function P$m(e) {
  if (!e) return {};
  let t;
  try {
    t = await ehr.readFile(e, "utf8");
  } catch (r) {
    if (wn(r)) return {};
    throw r;
  }
  let n = Ft(t);
  if (typeof n !== "object" || n === null || Array.isArray(n))
    throw Error(
      `Managed settings file ${e}: expected a JSON object, got ${Array.isArray(n) ? "array" : typeof n}`,
    );
  return n;
}
var ehr, pWc, fWc, H$m, v$m, k$m, R$m, L$m;
