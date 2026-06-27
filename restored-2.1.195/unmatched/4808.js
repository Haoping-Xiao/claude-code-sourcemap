// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module bUo
// matched 2.1.88 source: src/commands/plugin/ManagePlugins.tsx
// class=new  jaccard=0.0103  score=0.087  fileCov=0.0116
// note: nearest: src/commands/plugin/ManagePlugins.tsx (0.0103); 0 renamed
// ─────────────────────────────────────────────────────────────────────────
var bUo = E(() => {
  ree();
  Lo();
  At();
  Bi();
  sa();
  Jt();
  OYt();
  ZC();
  vrr();
  SXt = require("fs/promises"), rx = require("path"), zjl = R(Uj(), 1);
});
function Jjl(e) {
  let t = Yjl.c(9),
    {
      onComplete: n,
      path: r,
      push: o,
      dryRun: s,
      force: i,
      unknownFlag: a
    } = e,
    l,
    c;
  if (t[0] !== s || t[1] !== i || t[2] !== n || t[3] !== r || t[4] !== o || t[5] !== a) l = () => {
    d();
    async function d() {
      if (a !== void 0) {
        n(a === "--help" || a === "-h" ? Kjl : `${nt.cross} Unexpected argument "${a}".

${Kjl}`);
        return;
      }
      let p = await wrr(r ?? ".", {
          force: i
        }),
        f = p.warnings.map(MBf);
      if (!p.ok) {
        f.push(`${nt.cross} ${p.error}`), n(f.join(`
`));
        return;
      }
      let {
        plan: m
      } = p;
      if (f.push(`Plugin:  ${m.pluginName}`, `Version: ${m.version} (from ${m.versionFrom})`), m.marketplace) f.push(`Marketplace entry: plugins[${m.marketplace.entryIndex}] in ${m.marketplace.path}` + (m.marketplace.entryVersion ? ` (version: ${m.marketplace.entryVersion})` : ""));
      f.push(`Tag:     ${m.tag}`, "");
      let g = `git -C ${m.gitRoot} push ${i ? "--force " : ""}origin refs/tags/${m.tag}`;
      if (s) {
        f.push(`${nt.tick} Dry run \u2014 would create tag ${m.tag} at HEAD in ${m.gitRoot}`, `  git -C ${m.gitRoot} tag ${i ? "-f " : ""}-a ${m.tag} -m "${EXt(m, void 0)}"`, `  ${g}`), n(f.join(`
`));
        return;
      }
      let h = await Crr(m, {
        push: o,
        force: i,
        message: void 0,
        remote: "origin"
      });
      if (!h.ok) {
        f.push(`${nt.cross} ${h.error}`), n(f.join(`
`));
        return;
      }
      f.push(`${nt.tick} Created tag ${m.tag}`), f.push(h.pushed ? `${nt.tick} Pushed to origin` : `  Push with: ${g}`), f.push("", "For -m/--message and --remote, use: claude plugin tag --help"), n(f.join(`
`));
    }
  }, c = [n, r, o, s, i, a], t[0] = s, t[1] = i, t[2] = n, t[3] = r, t[4] = o, t[5] = a, t[6] = l, t[7] = c;else l = t[6], c = t[7];
  Xjl.useEffect(l, c);
  let u;
  if (t[8] === Symbol.for("react.memo_cache_sentinel")) u = SUo.jsx(U, {
    flexDirection: "column",
    children: SUo.jsx(w, {
      children: "Preparing tag\u2026"
    })
  }), t[8] = u;else u = t[8];
  return u;
}
function MBf(e) {
  return `${nt.warning} ${e}`;
}
var Yjl,
  Xjl,
  SUo,
  Kjl = `Usage: /plugin tag [path] [--push] [--dry-run] [-f|--force]

Create a {name}--v{version} git tag for the plugin at <path> (default: .).
Validates plugin.json and any enclosing marketplace entry agree on the version.

For -m/--message and --remote, use the CLI: claude plugin tag --help`;