// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module DBo
// class=new  (no 2.1.88 match)
// note: 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var DBo = E(() => {
  _m();
  u2l = /https?:\/\/([^\s/?#'"`<>\\)\];&|(,]+)/gi;
  sNf = new Set(["sudo"]);
});
function p2l(e, t) {
  return {
    readFileState: t,
    bashTools: cXt(e),
    bashHosts: uXt(e)
  };
}
function Znr(e, t) {
  let n = t;
  if (!n?.signals || !n.signals.cli?.length && !n.signals.filesRead?.length && !n.signals.manifestDeps?.length && !n.signals.hosts?.length && !n.signals.cwd?.length) return null;
  let r;
  try {
    if (n.signals.manifestDeps?.length) r = n.signals.manifestDeps.map(s => ({
      file: new RegExp(s.file, "i"),
      pattern: new RegExp(s.pattern)
    }));
  } catch (s) {
    return T(`Skipping relevance signals for "${e}": invalid RegExp in relevance.signals: ${s}`, {
      level: "warn"
    }), null;
  }
  let o = n.signals.hosts?.map(s => s.toLowerCase());
  return {
    cli: n.signals.cli,
    hosts: o,
    filesRead: n.signals.filesRead,
    manifestDep: r,
    cwd: n.signals.cwd
  };
}
async function err(e, t) {
  let {
    bashTools: n,
    bashHosts: r
  } = t ?? {};
  if (e.cli && n?.size) {
    let i = e.cli.find(a => n.has(a));
    if (i) return {
      signal: "cli",
      command: i
    };
  }
  if (e.hosts?.length && r?.size) {
    let i = e.hosts.find(a => r.has(a));
    if (i) return {
      signal: "hosts",
      host: i
    };
  }
  if (e.cwd?.length) {
    let i = $t().replaceAll("\\", "/"),
      a = Tu($t())?.replaceAll("\\", "/"),
      l = [i];
    if (a && i.startsWith(`${a}/`)) l.push(i.slice(a.length + 1));
    for (let c of e.cwd) {
      let u = c.replace(/\/+$/, "").replace(/\/\*\*$/, "");
      if (!u) continue;
      if (l.some(d => PBo.default.isMatch(d, [u, `${u}/**`], {
        nocase: !0,
        dot: !0
      }))) return {
        signal: "cwd"
      };
    }
  }
  let o = t?.readFileState,
    s = o ? VRe(o) : [];
  if (e.filesRead?.length && s.length) {
    let i = s.find(a => PBo.default.isMatch(a.replaceAll("\\", "/"), e.filesRead, {
      nocase: !0,
      dot: !0
    }));
    if (i) return {
      signal: "filesRead",
      file: i
    };
  }
  if (e.manifestDep && o && s.length > 0) {
    let i = new Map(o.entries()),
      a = (async () => {
        for (let {
          file: c,
          pattern: u
        } of e.manifestDep) for (let d of s) {
          if (!c.test(d)) continue;
          try {
            let p = i.get(d),
              f = p && p.limit === void 0 && (p.offset ?? 1) <= 1 && !p.isPartialView ? p.content : void 0;
            if (!f) {
              if ((await Qnr.stat(d)).size > 524288) continue;
              f = await Qnr.readFile(d, "utf8");
            }
            if (u.test(f)) return d;
          } catch {}
        }
        return null;
      })(),
      l = await vc(a, 50, "manifestDep scan").catch(() => null);
    if (l) return {
      signal: "manifestDep",
      file: l
    };
  }
  return null;
}
var Qnr, PBo;