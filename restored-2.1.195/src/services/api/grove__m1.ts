// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module vft
// matched 2.1.88 source: src/services/api/grove.ts
// class=modified (alt of src/services/api/grove.ts)  jaccard=0.1508  score=0.6714  fileCov=0.1629
// note: deminified; 0 identifiers renamed (exports/displayName/curated)
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module vft] deps: lodash-es/memoize.js, utils/debug.ts, utils/http.ts, utils/debug.ts, utils/gracefulShutdown.ts, utils/stringUtils.ts, utils/config.ts, utils/slashCommandParsing.ts, utils/sequential.ts, dn, services/mcp/officialRegistry.ts
Fre = Cn(async () => {
  try {
    return {
      success: true,
      data: (
        await oL(async () => {
          let t = await Os.get("/api/oauth/account/settings", {
            timeout: x1a,
          });
          if (!t.ok) throw Error(`Failed to get Grove settings: ${t.reason}`);
          return t;
        })
      ).data,
    };
  } catch (e) {
    if (!(e instanceof Error) || !/data-residency|essential-traffic-only|no-auth/.test(e.message))
      T(`Failed to fetch Grove settings: ${e}`, {
        level: "error",
      });
    return (
      Fre.cache.clear?.(),
      {
        success: false,
      }
    );
  }
});
JDe = Cn(async () => {
  try {
    let e = await oL(async () => {
        let s = await Os.get("/api/claude_code_grove", {
          timeout: x1a,
        });
        if (!s.ok) throw Error(`Failed to fetch Grove notice config: ${s.reason}`);
        return s;
      }),
      {
        grove_enabled: t,
        domain_excluded: n,
        notice_is_grace_period: r,
        notice_reminder_frequency: o,
      } = e.data;
    return {
      success: true,
      data: {
        grove_enabled: t,
        domain_excluded: n ?? false,
        notice_is_grace_period: r ?? true,
        notice_reminder_frequency: o,
      },
    };
  } catch (e) {
    return (
      T(`Failed to fetch Grove notice config: ${e}`),
      {
        success: false,
      }
    );
  }
});
function Dho(e) {
  if (Array.isArray(e)) return e.map(Dho);
  if (e !== null && typeof e === "object") {
    let t = {};
    for (let n of Object.keys(e).sort()) t[n] = Dho(e[n]);
    return t;
  }
  return e;
}
function m4n(e) {
  let t = Dho(e),
    n = De(t);
  return `sha256:${R1a.createHash("sha256").update(n).digest("hex")}`;
}
var R1a;
