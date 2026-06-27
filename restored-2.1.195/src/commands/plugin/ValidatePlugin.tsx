// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Qjl
// matched 2.1.88 source: src/commands/plugin/ValidatePlugin.tsx
// class=modified  jaccard=0.5581  score=0.7667  fileCov=0.6723
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
var Qjl = E(() => {
  si();
  Ye();
  bUo();
  ((Yjl = R(lt(), 1)), (Xjl = R(rt(), 1)), (SUo = R(se(), 1)));
});
function t4l(e) {
  let t = Zjl.c(5),
    { onComplete: n, path: r } = e,
    o,
    s;
  if (t[0] !== n || t[1] !== r)
    ((o = () => {
      (async function () {
        if (!r) {
          n(`Usage: /plugin validate <path>

Validate a plugin or marketplace manifest file or directory.

Examples:
  /plugin validate .claude-plugin/plugin.json
  /plugin validate /path/to/plugin-directory
  /plugin validate .

When given a directory, automatically validates .claude-plugin/marketplace.json
or .claude-plugin/plugin.json (prefers marketplace if both exist).

Or from the command line:
  claude plugin validate <path>`);
          return;
        }
        try {
          let c = await bXt(r),
            u = "";
          if (
            ((u =
              u +
              `Validating ${c.fileType} manifest: ${c.filePath}

`),
            c.errors.length > 0)
          )
            ((u =
              u +
              `${nt.cross} Found ${c.errors.length} ${bn(c.errors.length, "error")}:

`),
              c.errors.forEach((d) => {
                u =
                  u +
                  `  ${nt.pointer} ${d.path}: ${d.message}
`;
              }),
              (u =
                u +
                `
`));
          if (c.warnings.length > 0)
            ((u =
              u +
              `${nt.warning} Found ${c.warnings.length} ${bn(c.warnings.length, "warning")}:

`),
              c.warnings.forEach((d) => {
                u =
                  u +
                  `  ${nt.pointer} ${d.path}: ${d.message}
`;
              }),
              (u =
                u +
                `
`));
          if (c.success) {
            if (c.warnings.length > 0)
              u =
                u +
                `${nt.tick} Validation passed with warnings
`;
            else
              u =
                u +
                `${nt.tick} Validation passed
`;
            process.exitCode = 0;
          } else
            ((u =
              u +
              `${nt.cross} Validation failed
`),
              (process.exitCode = 1));
          n(u);
        } catch (c) {
          let u = c;
          ((process.exitCode = 2),
            T(`Plugin validation failed unexpectedly for ${r}: ${be(u)}`, {
              level: "error",
            }),
            n(`${nt.cross} Unexpected error during validation: ${be(u)}`));
        }
      })();
    }),
      (s = [n, r]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s));
  else ((o = t[2]), (s = t[3]));
  e4l.useEffect(o, s);
  let i;
  if (t[4] === Symbol.for("react.memo_cache_sentinel"))
    ((i = EUo.jsx(U, {
      flexDirection: "column",
      children: EUo.jsx(w, {
        children: "Running validation...",
      }),
    })),
      (t[4] = i));
  else i = t[4];
  return i;
}
var Zjl, e4l, EUo;
