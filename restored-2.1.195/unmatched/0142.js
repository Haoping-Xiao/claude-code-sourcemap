// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module cos
// matched 2.1.88 source: node_modules/@anthropic-ai/sdk/internal/detect-platform.mjs
// class=new  jaccard=0.0442  score=0.0649  fileCov=0.122
// note: nearest: node_modules/@anthropic-ai/sdk/internal/detect-platform.mjs (0.0442); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var cos = E(() => {
  rwe();
  aos();
  ZCt();
  HSr();
});
function uos(e) {
  if (!e) throw Error("profile name is empty");
  if (e === "." || e === "..") throw Error(`profile name "${e}" is not allowed`);
  if (e.includes("/") || e.includes("\\")) throw Error(`profile name "${e}" must not contain path separators`);
  if (!Gzc.test(e)) throw Error(`profile name "${e}" contains disallowed characters (allowed: letters, digits, '_', '.', '-')`);
}
var Jsn = "1.0",
  Gzc,
  eIt = async e => (await CSr(e))?.config ?? null,
  CSr = async e => {
    var t, n;
    let r = await ISr();
    if (r === null) return null;
    let o = e ?? (await pos());
    if (o === null) return null;
    uos(o);
    let s = await import("fs"),
      a = (await import("path")).join(r, "configs", `${o}.json`),
      l;
    try {
      l = await s.promises.readFile(a, "utf-8");
    } catch (d) {
      if (d?.code !== "ENOENT") throw Error(`failed to read config file ${a}: ${d}`);
      l = null;
    }
    if (l === null) {
      let d = Wb("ANTHROPIC_ORGANIZATION_ID"),
        p = Wb("ANTHROPIC_IDENTITY_TOKEN_FILE"),
        f = Wb("ANTHROPIC_FEDERATION_RULE_ID");
      if (f && d) return {
        fromFile: !1,
        config: {
          organization_id: d,
          workspace_id: Wb("ANTHROPIC_WORKSPACE_ID"),
          base_url: Wb("ANTHROPIC_BASE_URL"),
          authentication: {
            type: "oidc_federation",
            federation_rule_id: f,
            service_account_id: Wb("ANTHROPIC_SERVICE_ACCOUNT_ID"),
            identity_token: p ? {
              source: "file",
              path: p
            } : void 0,
            scope: Wb("ANTHROPIC_SCOPE")
          }
        }
      };
      return null;
    }
    let c;
    try {
      c = JSON.parse(l);
    } catch (d) {
      throw Error(`failed to parse config file ${a}: ${d}`);
    }
    if (!c.authentication) throw Error(`config file ${a} is missing "authentication"`);
    let u = c.authentication.type;
    if (u !== "oidc_federation" && u !== "user_oauth") throw Error(`authentication.type "${u}" is not a known authentication type`);
    if (c.organization_id ?? (c.organization_id = Wb("ANTHROPIC_ORGANIZATION_ID")), c.workspace_id ?? (c.workspace_id = Wb("ANTHROPIC_WORKSPACE_ID")), c.base_url ?? (c.base_url = Wb("ANTHROPIC_BASE_URL")), (t = c.authentication).scope ?? (t.scope = Wb("ANTHROPIC_SCOPE")), c.authentication.type === "oidc_federation") {
      if (!c.authentication.identity_token) {
        let d = Wb("ANTHROPIC_IDENTITY_TOKEN_FILE");
        if (d) c.authentication.identity_token = {
          source: "file",
          path: d
        };
      }
      if (!c.authentication.federation_rule_id) c.authentication.federation_rule_id = Wb("ANTHROPIC_FEDERATION_RULE_ID") ?? "";
      (n = c.authentication).service_account_id ?? (n.service_account_id = Wb("ANTHROPIC_SERVICE_ACCOUNT_ID"));
    }
    return {
      config: c,
      fromFile: !0
    };
  },
  dos = async () => {
    let e = await eIt(),
      t = await lUe(e);
    if (!t) return null;
    let n = await import("fs"),
      r;
    try {
      r = await n.promises.readFile(t, "utf-8");
    } catch (s) {
      if (s?.code !== "ENOENT") throw Error(`failed to read credentials file ${t}: ${s}`);
      return null;
    }
    let o;
    try {
      o = JSON.parse(r);
    } catch (s) {
      throw Error(`failed to parse credentials file ${t}: ${s}`);
    }
    if (o.type && o.type !== "oauth_token") throw Error(`credentials file ${t} has unsupported type "${o.type}" (want "oauth_token")`);
    return o;
  },
  lUe = async (e, t) => {
    if (e?.authentication.credentials_path) return e.authentication.credentials_path;
    let n = await ISr();
    if (!n) return null;
    let r = t ?? (await pos());
    if (!r) return null;
    return uos(r), (await import("path")).join(n, "credentials", `${r}.json`);
  },
  ISr = async () => {
    if (!Wzc()) return null;
    let e = await import("path"),
      t = Wb("ANTHROPIC_CONFIG_DIR");
    if (t) return t;
    if (XCt()["X-Stainless-OS"] === "Windows") {
      let s = Wb("APPDATA");
      if (s) return e.join(s, "Anthropic");
      let i = Wb("USERPROFILE");
      if (i) return e.join(i, "AppData", "Roaming", "Anthropic");
      return null;
    }
    let r = Wb("XDG_CONFIG_HOME");
    if (r) return e.join(r, "anthropic");
    let o = Wb("HOME");
    if (o) return e.join(o, ".config", "anthropic");
    return null;
  },
  Wzc = () => {
    let e = XCt()["X-Stainless-Runtime"];
    return e === "node" || e === "deno";
  },
  pos = async () => {
    let e = await ISr();
    if (!e) return null;
    let t = Wb("ANTHROPIC_PROFILE");
    if (t) return t;
    let n = await import("fs"),
      o = (await import("path")).join(e, "active_config");
    try {
      return (await n.promises.readFile(o, "utf-8")).trim() || "default";
    } catch (s) {
      if (s?.code !== "ENOENT") throw Error(`failed to read ${o}: ${s}`);
      return "default";
    }
  };