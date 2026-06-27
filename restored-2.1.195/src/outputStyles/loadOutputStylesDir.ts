// ─────────────────────────────────────────────────────────────────────────
// restored from claude-code 2.1.195 (deminified) — module Nlc
// matched 2.1.88 source: src/outputStyles/loadOutputStylesDir.ts
// class=modified  jaccard=0.2466  score=0.3628  fileCov=0.4349
// note: deminified; 0 identifiers renamed from _t exports
// ─────────────────────────────────────────────────────────────────────────
// [unwrapped __esm module Nlc] deps: Qi, ANt, dn, je, Iv, vn, pq, YZn
(($lc = require("path")),
  (Olc = Cn(async (e) => {
    try {
      let n = (await _q("output-styles", e))
        .map(({ filePath: r, frontmatter: o, content: s, source: i, baseDir: a }) => {
          try {
            w3e("output-style", o);
            let c = $lc.basename(r).replace(/\.md$/, ""),
              u = (o.name != null ? String(o.name) : void 0) || c,
              d = AU(o.description, c) ?? ffe(s, `Custom ${c} output style`),
              p = C3e(o["keep-coding-instructions"]);
            if (o["force-for-plugin"] !== void 0)
              T(
                `Output style "${u}" has force-for-plugin set, but this option only applies to plugin output styles. Ignoring.`,
                {
                  level: "warn",
                },
              );
            return {
              name: u,
              description: d,
              prompt: s.trim(),
              source: i,
              baseDir: a,
              keepCodingInstructions: p,
            };
          } catch (l) {
            return (ke(l), null);
          }
        })
        .filter((r) => r !== null)
        .sort(WSt);
      return (xe("output_style_load"), n);
    } catch (t) {
      return (
        It("output_style_load", "output_style_load_failed"),
        T(`Failed to load output styles: ${t instanceof Error ? t.message : String(t)}`, {
          level: "error",
        }),
        []
      );
    }
  })));
function cRl() {
  uEt.cache?.clear?.();
}
async function qZn() {
  let e = await uEt($t()),
    t = Object.values(e).filter(
      (s) => s !== null && s.source === "plugin" && s.forceForPlugin === true,
    ),
    n = t[0];
  if (n) {
    if (t.length > 1)
      T(
        `Multiple plugins have forced output styles: ${t.map((s) => s.name).join(", ")}. Using: ${n.name}`,
        {
          level: "warn",
        },
      );
    return (T(`Using forced plugin output style: ${n.name}`), n);
  }
  let o = jo()?.outputStyle || uP;
  return e[o] ?? null;
}
function Ulc() {
  let e = jo()?.outputStyle;
  return e !== void 0 && e !== uP;
}
function Flc() {
  return jo()?.outputStyle || uP;
}
var Blc,
  _rm = `The user chose continuous, autonomous execution. You should:

1. **Execute immediately** \u2014 Start implementing right away. Make reasonable assumptions and proceed on low-risk work.
2. **Minimize interruptions** \u2014 Prefer making reasonable assumptions over asking questions for routine decisions.
3. **Prefer action over planning** \u2014 Do not enter plan mode unless the user explicitly asks. When in doubt, start coding.
4. **Expect course corrections** \u2014 The user may provide suggestions or course corrections at any point; treat those as normal input.
5. **Do not take overly destructive actions** \u2014 This is not a license to destroy. Anything that deletes data or modifies shared or production systems still needs explicit user confirmation. If you reach such a decision point, ask and wait, or course correct to a safer method instead.
6. **Avoid data exfiltration** \u2014 Post even routine messages to chat platforms or work tickets only if the user has directed you to. You must not share secrets (e.g. credentials, internal documentation) unless the user has explicitly authorized both that specific secret and its destination.`,
  brm = "Execute autonomously, minimize interruptions, prefer action over planning.",
  uP = "default",
  yJ,
  uEt;
