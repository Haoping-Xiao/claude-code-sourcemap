// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vdt
// matched 2.1.88 source: src/utils/plugins/pluginOptionsStorage.ts
// class=modified  jaccard=0.4071  score=0.5923  fileCov=0.5656
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var vdt = E(() => {
  Gwe();
  w4t();
  Rx();
  CZe();
  je();
  rCa();
  eqe();
  At();
  ys();
  vn();
  R9();
  dr();
  Jt();
  aCa();
  dFt();
  ((SUn = require("crypto")), (nqe = require("fs/promises")), (Hre = require("path")));
});
function fS(e) {
  let t = aTp(e) ? e.manifest.displayName : e.displayName;
  return tDe(t) ?? e.name;
}
function tDe(e) {
  if (typeof e !== "string") return;
  return e.trim() ? e : void 0;
}
function aTp(e) {
  return "manifest" in e && typeof e.manifest === "object" && e.manifest !== null;
}
function Tre(e) {
  return e.source;
}
function EUn(e, t) {
  return e.find((n) => n.repository === t || n.source === t);
}
function AUn() {
  (m$.cache?.clear?.(), lTp.cache?.clear?.());
}
async function wdt(e, t, n) {
  let r = {},
    o = {};
  for (let [u, d] of Object.entries(t))
    if (n[u]?.sensitive === true) o[u] = String(d);
    else r[u] = d;
  let s = new Set(Object.keys(o)),
    i = new Set(Object.keys(r)),
    a = await wl().mutate((u) => {
      let d = u.pluginSecrets?.[e],
        p = d ? CB(d, (m, g) => i.has(g)) : void 0,
        f = p && d && Object.keys(p).length !== Object.keys(d).length;
      if (Object.keys(o).length === 0 && !f) return u;
      return {
        ...u,
        pluginSecrets: {
          ...u.pluginSecrets,
          [e]: {
            ...p,
            ...o,
          },
        },
      };
    });
  if (!a.success) {
    let u = Error(`Failed to save sensitive plugin options for ${e} to secure storage`);
    throw (
      T(u.message, {
        level: "error",
      }),
      u
    );
  }
  if (a.warning)
    T(`Plugin secrets save warning: ${a.warning}`, {
      level: "warn",
    });
  let l = jo().pluginConfigs?.[e]?.options ?? {},
    c = Object.keys(l).filter((u) => s.has(u));
  if (Object.keys(r).length > 0 || c.length > 0) {
    let u = Object.fromEntries(c.map((p) => [p, void 0])),
      d = io("userSettings", {
        pluginConfigs: {
          [e]: {
            options: {
              ...r,
              ...u,
            },
          },
        },
      });
    if (d.error)
      throw (
        T(`Failed to save plugin options for ${e} to settings.json: ${be(d.error)}`, {
          level: "error",
        }),
        Error(`Failed to save plugin options for ${e}: ${d.error.message}`)
      );
  }
  AUn();
}
async function Cdt(e) {
  if (jo().pluginConfigs?.[e]) {
    let n = {
        [e]: void 0,
      },
      { error: r } = io("userSettings", {
        pluginConfigs: n,
      });
    if (r)
      T(`deletePluginOptions: failed to clear settings.pluginConfigs[${e}]: ${r.message}`, {
        level: "warn",
      });
  }
  try {
    if (
      !(
        await wl().mutate((r) => {
          if (!r.pluginSecrets) return r;
          let o = `${e}/`,
            s = Object.entries(r.pluginSecrets).filter(([i]) => i !== e && !i.startsWith(o));
          if (s.length === Object.keys(r.pluginSecrets).length) return r;
          return {
            ...r,
            pluginSecrets: s.length > 0 ? Object.fromEntries(s) : void 0,
          };
        })
      ).success
    )
      T(`deletePluginOptions: failed to clear pluginSecrets for ${e} from keychain`, {
        level: "warn",
      });
  } catch (n) {
    T(`deletePluginOptions: storage lock unavailable for ${e}: ${be(n)}`, {
      level: "warn",
    });
  }
  AUn();
}
function u3t(e) {
  let t = e.manifest.userConfig;
  if (!t || Object.keys(t).length === 0) return {};
  let n = m$(Tre(e)),
    r = {};
  for (let [o, s] of Object.entries(t)) {
    let i = n[o];
    if (
      i === void 0 ||
      i === "" ||
      (s.sensitive !== true &&
        !eDe(
          {
            [o]: i,
          },
          {
            [o]: s,
          },
        ).valid)
    )
      r[o] = s;
  }
  return r;
}
function fCa(e, t) {
  let n = {};
  for (let [r, o] of Object.entries(t)) {
    if (o.required && o.default === void 0) continue;
    n[r] = o.default ?? "";
  }
  return {
    ...n,
    ...e,
  };
}
function vre(e, t) {
  let n = (o) => o,
    r = e.replace(/\$\{CLAUDE_PLUGIN_ROOT\}/g, () => n(t.path));
  if (((r = r.replace(/\$\{CLAUDE_PROJECT_DIR\}/g, () => n(rc()))), t.source)) {
    let o = t.source;
    r = r.replace(/\$\{CLAUDE_PLUGIN_DATA\}/g, () => n(Rue(o)));
  }
  return r;
}
function $Se(e, t) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (n, r) => {
    let o = t[r];
    if (o === void 0)
      throw Error(
        `Plugin option "${r}" isn't set. Open /plugin manage to configure it, or check that the plugin's userConfig schema declares "${r}".`,
      );
    return String(o);
  });
}
function HUn(e, t, n, r) {
  return e.replace(/\$\{user_config\.([^}]+)\}/g, (o, s) => {
    if (n[s]?.sensitive === true) return `[sensitive option '${s}' not available in skill content]`;
    let i = t[s];
    if (i === void 0) return o;
    let a = String(i);
    return r ? r(a) : a;
  });
}
var m$, lTp;
